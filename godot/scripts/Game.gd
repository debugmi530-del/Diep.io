extends Node2D
class_name Game

signal player_died
signal player_respawned

# Node references
@onready var entities_layer: Node2D = $EntitiesLayer
@onready var shapes_layer: Node2D = $ShapesLayer
@onready var bullets_layer: Node2D = $BulletsLayer
@onready var camera: Camera2D = $Camera
@onready var hud: Control = $HUD
@onready var class_select_ui: Control = $ClassSelectUI
@onready var death_screen: Control = $DeathScreen
@onready var leaderboard: Control = $Leaderboard

# Preloads
const BulletScene = preload("res://scenes/entities/Bullet.tscn")
const BotScene = preload("res://scenes/entities/Bot.tscn")
const ShapeScene = preload("res://scenes/entities/Shape.tscn")

var player: Player = null
var bots: Array = []
var shapes: Array = []
var bullets: Array = []

# Spawn timers
var bot_spawn_timer: float = 0.0
var shape_spawn_timer: float = 0.0

# Leaderboard data
var leaderboard_data: Array = []
var leaderboard_update_timer: float = 0.0

# Kill feed
var kill_feed: Array = []
const KILL_FEED_DURATION := 4.0

# Multiplayer
var multiplayer_mgr: Node = null

func _ready() -> void:
	_spawn_player()
	_initial_shape_spawn()
	_spawn_initial_bots()
	_connect_signals()

func _connect_signals() -> void:
	if player:
		player.died.connect(_on_player_died)
		player.level_changed.connect(_on_player_level_changed)
		player.score_changed.connect(_on_player_score_changed)
		player.upgrade_available.connect(_on_upgrade_available)

func _process(delta: float) -> void:
	_update_camera()
	_tick_bot_spawn(delta)
	_tick_shape_spawn(delta)
	_update_leaderboard(delta)
	_update_kill_feed(delta)
	_check_body_collisions()
	if hud:
		hud.update_hud(player)

func _spawn_player() -> void:
	var PlayerScene = load("res://scenes/entities/Player.tscn")
	player = PlayerScene.instantiate()
	player.game = self
	player.position = Vector2(randf_range(-500, 500), randf_range(-500, 500))
	entities_layer.add_child(player)

func _spawn_initial_bots() -> void:
	for i in GameConfig.MAX_BOTS:
		_spawn_bot()

func _spawn_bot(pos: Vector2 = Vector2.ZERO) -> void:
	if bots.size() >= GameConfig.MAX_BOTS:
		return
	var bot: Bot = BotScene.instantiate()
	bot.game = self
	if pos == Vector2.ZERO:
		var half = GameConfig.WORLD_SIZE * 0.5 - 300.0
		bot.position = Vector2(randf_range(-half, half), randf_range(-half, half))
	else:
		bot.position = pos
	bot.died.connect(_on_bot_died.bind(bot))
	entities_layer.add_child(bot)
	bots.append(bot)

func _initial_shape_spawn() -> void:
	for shape_type in GameConfig.SHAPE_TARGET_COUNT:
		var count: int = GameConfig.SHAPE_TARGET_COUNT[shape_type]
		for i in count:
			_spawn_shape(shape_type)

func _spawn_shape(type: String, pos: Vector2 = Vector2.ZERO) -> void:
	var shape: Shape = ShapeScene.instantiate()
	shape.game = self
	shape.setup(type)
	if pos == Vector2.ZERO:
		var half = GameConfig.WORLD_SIZE * 0.5 - 100.0
		shape.position = Vector2(randf_range(-half, half), randf_range(-half, half))
	else:
		shape.position = pos
	shape.destroyed.connect(_on_shape_destroyed.bind(shape))
	shapes_layer.add_child(shape)
	shapes.append(shape)

func spawn_bullet(pos: Vector2, angle: float, dmg: float, spd: float,
				  rad: float, owner: Tank, btype: String = "normal") -> Bullet:
	var bullet: Bullet = BulletScene.instantiate()
	bullet.game = self
	bullet.setup(pos, angle, dmg, spd, rad, owner, btype)
	bullets_layer.add_child(bullet)
	bullets.append(bullet)
	# Clean bullet from array when freed
	bullet.tree_exiting.connect(func(): bullets.erase(bullet))
	return bullet

func _tick_bot_spawn(delta: float) -> void:
	bot_spawn_timer -= delta
	if bot_spawn_timer <= 0.0:
		bot_spawn_timer = GameConfig.BOT_RESPAWN_TIME
		if bots.size() < GameConfig.MAX_BOTS:
			_spawn_bot()

func _tick_shape_spawn(delta: float) -> void:
	shape_spawn_timer -= delta
	if shape_spawn_timer <= 0.0:
		shape_spawn_timer = 2.0
		# Replenish shapes
		var shape_counts: Dictionary = {}
		for s in shapes:
			if is_instance_valid(s):
				shape_counts[s.shape_type] = shape_counts.get(s.shape_type, 0) + 1
		for shape_type in GameConfig.SHAPE_TARGET_COUNT:
			var target = GameConfig.SHAPE_TARGET_COUNT[shape_type]
			var current = shape_counts.get(shape_type, 0)
			if current < target:
				_spawn_shape(shape_type)

func _update_camera() -> void:
	if player and is_instance_valid(player) and not player.is_dead:
		camera.global_position = camera.global_position.lerp(player.global_position, 0.12)
		# Zoom based on level
		var target_zoom = max(0.5, 1.0 - (player.level - 1) * 0.01)
		camera.zoom = camera.zoom.lerp(Vector2(target_zoom, target_zoom), 0.05)

func _check_body_collisions() -> void:
	var all_tanks = get_all_tanks()
	for i in all_tanks.size():
		var t1: Tank = all_tanks[i]
		if t1.is_dead:
			continue
		for j in range(i + 1, all_tanks.size()):
			var t2: Tank = all_tanks[j]
			if t2.is_dead:
				continue
			var dist = t1.global_position.distance_to(t2.global_position)
			var min_dist = t1.radius + t2.radius
			if dist < min_dist:
				# Push apart
				var push_dir = (t2.global_position - t1.global_position).normalized()
				var overlap = min_dist - dist
				t1.position -= push_dir * overlap * 0.5
				t2.position += push_dir * overlap * 0.5
				# Body damage
				t1.take_body_damage(t2.body_damage, t2)
				t2.take_body_damage(t1.body_damage, t1)

func _update_leaderboard(delta: float) -> void:
	leaderboard_update_timer -= delta
	if leaderboard_update_timer <= 0.0:
		leaderboard_update_timer = 1.0
		leaderboard_data.clear()
		var all_tanks = get_all_tanks()
		for t in all_tanks:
			if not t.is_dead:
				leaderboard_data.append({
					"name": t.display_name_text,
					"score": t.score,
					"level": t.level,
					"is_player": t.is_player
				})
		leaderboard_data.sort_custom(func(a, b): return a["score"] > b["score"])
		if leaderboard:
			leaderboard.update_leaderboard(leaderboard_data, player)

func _update_kill_feed(delta: float) -> void:
	for i in range(kill_feed.size() - 1, -1, -1):
		kill_feed[i]["timer"] -= delta
		if kill_feed[i]["timer"] <= 0.0:
			kill_feed.remove_at(i)
	if hud:
		hud.update_kill_feed(kill_feed)

func add_kill_feed(killer: String, victim: String) -> void:
	kill_feed.append({
		"killer": killer,
		"victim": victim,
		"timer": KILL_FEED_DURATION
	})
	if kill_feed.size() > 5:
		kill_feed.pop_front()

# Getters for entities
func get_all_tanks() -> Array:
	var result: Array = []
	if player and is_instance_valid(player):
		result.append(player)
	for b in bots:
		if is_instance_valid(b):
			result.append(b)
	return result

func get_shapes() -> Array:
	var result: Array = []
	for s in shapes:
		if is_instance_valid(s):
			result.append(s)
	return result

func get_bullets() -> Array:
	var result: Array = []
	for b in bullets:
		if is_instance_valid(b):
			result.append(b)
	return result

# Signal handlers
func _on_player_died(_tank: Tank) -> void:
	emit_signal("player_died")
	death_screen.show_death_screen(player.score, player.level)

func _on_bot_died(killer: Node, bot: Bot) -> void:
	bots.erase(bot)
	if killer and killer.has_method("add_xp"):
		add_kill_feed(killer.display_name_text, bot.display_name_text)

func _on_shape_destroyed(shape: Shape, killer: Node) -> void:
	shapes.erase(shape)
	if killer and killer.has_method("add_xp"):
		killer.add_xp(shape.xp_value)

func _on_player_level_changed(new_level: int) -> void:
	if hud:
		hud.flash_level_up()

func _on_player_score_changed(new_score: int) -> void:
	pass

func _on_upgrade_available(available_classes: Array) -> void:
	class_select_ui.show_class_select(available_classes, player.tank_class)

func player_respawn() -> void:
	if player:
		player.respawn(Vector2(randf_range(-300, 300), randf_range(-300, 300)))
		death_screen.hide()
		emit_signal("player_respawned")

# Admin: spawn shape at player
func admin_spawn_shape(type: String) -> void:
	if player:
		_spawn_shape(type, player.global_position + Vector2(100, 0))

# Admin: spawn NPC bot
func admin_spawn_npc(class_name_: String, level: int) -> void:
	if bots.size() < GameConfig.MAX_BOTS + 5:
		var bot: Bot = BotScene.instantiate()
		bot.game = self
		bot.position = player.global_position + Vector2(200, 0) if player else Vector2.ZERO
		bot.level = level
		bot.xp = GameConfig.xp_for_level(level)
		entities_layer.add_child(bot)
		bot.apply_tank_class(class_name_)
		bot.died.connect(_on_bot_died.bind(bot))
		bots.append(bot)
