extends Tank
class_name Bot

enum BotState { ROAM, CHASE, FLEE, ATTACK_SHAPE }

var state: BotState = BotState.ROAM
var target: Node2D = null
var roam_target: Vector2 = Vector2.ZERO
var roam_timer: float = 0.0
var state_timer: float = 0.0

const CHASE_RANGE := 600.0
const FLEE_HP_THRESHOLD := 0.25
const ROAM_SPEED_MULT := 0.6
const SHOOT_RANGE := 500.0

func _ready() -> void:
	is_player = false
	_pick_roam_target()
	_randomize_state_timer()
	# Random level for bots
	level = randi_range(1, 30)
	xp = GameConfig.xp_for_level(level)
	_assign_random_class()

func _assign_random_class() -> void:
	var possible := ["Basic", "Basic", "Basic", "Sniper", "Twin",
					 "Shotgun", "Spinner", "Dreadnought"]
	if level >= 30:
		possible.append_array(["Blaster", "Triplet", "Overlord", "Riot",
								"Colossus", "Cruiser", "Brawler"])
	var chosen = possible[randi() % possible.size()]
	apply_tank_class(chosen)
	tank_color = GameConfig.PLAYER_COLORS[randi() % GameConfig.PLAYER_COLORS.size()]
	display_name_text = GameConfig.BOT_NAMES[randi() % GameConfig.BOT_NAMES.size()]

func _process(delta: float) -> void:
	if is_dead:
		return
	super._process(delta)
	_ai_tick(delta)
	update_barrel_timers(delta)
	_clamp_to_world()

func _ai_tick(delta: float) -> void:
	state_timer -= delta

	# Re-evaluate state periodically
	if state_timer <= 0.0:
		_evaluate_state()
		_randomize_state_timer()

	# Execute state
	match state:
		BotState.ROAM:
			_do_roam(delta)
		BotState.CHASE:
			_do_chase(delta)
		BotState.FLEE:
			_do_flee(delta)
		BotState.ATTACK_SHAPE:
			_do_attack_shape(delta)

func _evaluate_state() -> void:
	if current_hp / max_hp < FLEE_HP_THRESHOLD:
		state = BotState.FLEE
		target = _find_nearest_threat()
		return

	var nearest_tank = _find_nearest_tank()
	if nearest_tank != null:
		var dist = global_position.distance_to(nearest_tank.global_position)
		if dist < CHASE_RANGE:
			state = BotState.CHASE
			target = nearest_tank
			return

	var nearest_shape = _find_nearest_shape()
	if nearest_shape != null and level < 20:
		state = BotState.ATTACK_SHAPE
		target = nearest_shape
		return

	state = BotState.ROAM
	target = null
	_pick_roam_target()

func _do_roam(delta: float) -> void:
	roam_timer -= delta
	if roam_timer <= 0.0 or global_position.distance_to(roam_target) < 60.0:
		_pick_roam_target()
		roam_timer = randf_range(3.0, 8.0)

	var dir = (roam_target - global_position).normalized()
	position += dir * move_speed * ROAM_SPEED_MULT * delta

	# Random aim
	aim_angle += delta * randf_range(-0.5, 0.5)
	if randf() < 0.01:
		_try_shoot()

func _do_chase(delta: float) -> void:
	if target == null or not is_instance_valid(target) or target.is_dead:
		state = BotState.ROAM
		return

	var to_target = target.global_position - global_position
	var dist = to_target.length()
	aim_angle = to_target.angle()

	if dist > 80.0:
		var speed_mult = 1.0 if dist > 200.0 else 0.7
		position += to_target.normalized() * move_speed * speed_mult * delta

	if dist < SHOOT_RANGE:
		_try_shoot()

func _do_flee(delta: float) -> void:
	if target == null or not is_instance_valid(target):
		state = BotState.ROAM
		return
	var away = (global_position - target.global_position).normalized()
	position += away * move_speed * 1.1 * delta
	aim_angle = away.angle() + PI

func _do_attack_shape(delta: float) -> void:
	if target == null or not is_instance_valid(target):
		state = BotState.ROAM
		return
	var to_target = target.global_position - global_position
	var dist = to_target.length()
	aim_angle = to_target.angle()
	if dist > 120.0:
		position += to_target.normalized() * move_speed * 0.8 * delta
	if dist < SHOOT_RANGE:
		_try_shoot()

func _try_shoot() -> void:
	if game == null:
		return
	var barrels: Array = tank_data.get("barrels", [])
	for i in barrels.size():
		if can_shoot_barrel(i):
			_fire_barrel(i)
			reset_barrel_timer(i)

func _fire_barrel(barrel_idx: int) -> void:
	if game == null:
		return
	var barrels: Array = tank_data.get("barrels", [])
	if barrel_idx >= barrels.size():
		return
	var b: Dictionary = barrels[barrel_idx]
	var angle = get_barrel_angle(barrel_idx)
	var spread: float = b.get("spread", 0.0)
	if spread > 0.0:
		angle += randf_range(-spread, spread)
	var bullet_type: String = b.get("bullet_type", "normal")
	game.spawn_bullet(
		get_barrel_world_pos(barrel_idx),
		angle,
		GameConfig.BASE_BULLET_DAMAGE * b.get("bullet_damage_multiplier", 1.0),
		GameConfig.BASE_BULLET_SPEED * b.get("bullet_speed_multiplier", 1.0),
		GameConfig.BASE_RADIUS * b.get("bullet_size_multiplier", 1.0) * 0.5,
		self,
		bullet_type
	)
	var recoil_dir = Vector2(-cos(angle), -sin(angle))
	velocity += recoil_dir * 30.0

func _pick_roam_target() -> void:
	var half = GameConfig.WORLD_SIZE * 0.5 - 200.0
	roam_target = Vector2(randf_range(-half, half), randf_range(-half, half))

func _randomize_state_timer() -> void:
	state_timer = randf_range(1.5, 4.0)

func _find_nearest_tank() -> Tank:
	if game == null:
		return null
	var nearest: Tank = null
	var best_dist := CHASE_RANGE
	for t in game.get_all_tanks():
		if t == self or t.is_dead:
			continue
		var d = global_position.distance_to(t.global_position)
		if d < best_dist:
			best_dist = d
			nearest = t
	return nearest

func _find_nearest_shape() -> Node2D:
	if game == null:
		return null
	var nearest = null
	var best_dist := 800.0
	for s in game.get_shapes():
		var d = global_position.distance_to(s.global_position)
		if d < best_dist:
			best_dist = d
			nearest = s
	return nearest

func _find_nearest_threat() -> Node:
	return _find_nearest_tank()

func _clamp_to_world() -> void:
	var half = GameConfig.WORLD_SIZE * 0.5
	position.x = clampf(position.x, -half + radius, half - radius)
	position.y = clampf(position.y, -half + radius, half - radius)
