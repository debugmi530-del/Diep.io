extends Node2D
class_name Tank

signal died(tank)
signal score_changed(new_score)
signal level_changed(new_level)

# Tank identity
var tank_class: String = "Basic"
var display_name_text: String = "Tank"
var tank_color: Color = Color("#8888cc")
var is_player: bool = false

# Stats (computed from tank data + level)
var max_hp: float = 100.0
var current_hp: float = 100.0
var move_speed: float = 220.0
var radius: float = 22.0
var body_damage: float = 8.0

# XP / Level
var score: int = 0
var xp: int = 0
var level: int = 1

# Combat
var invincible: bool = false
var is_dead: bool = false
var body_damage_cooldown: float = 0.0

# Barrel timers
var barrel_timers: Array = []
var aim_angle: float = 0.0
var auto_spin: bool = false
var spin_angle: float = 0.0

# Movement
var velocity: Vector2 = Vector2.ZERO

# Regen
const HP_REGEN_RATE := 0.012
const HP_REGEN_DELAY := 2.5
var regen_timer: float = 0.0

# Visual
var flash_timer: float = 0.0
const FLASH_DURATION := 0.12

# References
var game: Node = null
var tank_data: Dictionary = {}

func _ready() -> void:
	apply_tank_class(tank_class)

func apply_tank_class(class_name_: String) -> void:
	tank_class = class_name_
	tank_data = TankData.get_tank(class_name_)

	var hp_mult: float = tank_data.get("hp_multiplier", 1.0)
	var spd_mult: float = tank_data.get("speed_multiplier", 1.0)
	var r_mult: float = tank_data.get("radius_multiplier", 1.0)

	max_hp = GameConfig.BASE_HP * hp_mult * (1.0 + (level - 1) * 0.04)
	current_hp = max_hp
	move_speed = GameConfig.BASE_SPEED * spd_mult
	radius = GameConfig.BASE_RADIUS * r_mult
	body_damage = GameConfig.BASE_BULLET_DAMAGE * tank_data.get("body_damage_multiplier", 1.0)
	auto_spin = tank_data.get("auto_spin", false)

	var barrels: Array = tank_data.get("barrels", [])
	barrel_timers.clear()
	for b in barrels:
		barrel_timers.append(0.0)

	if is_inside_tree():
		queue_redraw()

func _process(delta: float) -> void:
	if is_dead:
		return

	# Body damage cooldown
	if body_damage_cooldown > 0.0:
		body_damage_cooldown -= delta

	# Flash timer
	if flash_timer > 0.0:
		flash_timer -= delta
		queue_redraw()

	# Auto spin
	if auto_spin:
		spin_angle += delta * 1.8
		queue_redraw()

	# HP regen
	if regen_timer > 0.0:
		regen_timer -= delta
	else:
		if current_hp < max_hp:
			current_hp = minf(max_hp, current_hp + max_hp * HP_REGEN_RATE * delta)
			queue_redraw()

func update_barrel_timers(delta: float) -> void:
	for i in barrel_timers.size():
		if barrel_timers[i] > 0.0:
			barrel_timers[i] -= delta

func can_shoot_barrel(idx: int) -> bool:
	return idx < barrel_timers.size() and barrel_timers[idx] <= 0.0

func reset_barrel_timer(idx: int) -> void:
	if idx < barrel_timers.size():
		var barrels: Array = tank_data.get("barrels", [])
		if idx < barrels.size():
			var reload_mult: float = barrels[idx].get("reload_multiplier", 1.0)
			barrel_timers[idx] = GameConfig.BASE_RELOAD_TIME * reload_mult

func take_damage(amount: float, attacker: Node = null) -> void:
	if is_dead or invincible:
		return
	current_hp -= amount
	regen_timer = HP_REGEN_DELAY
	flash_timer = FLASH_DURATION
	queue_redraw()
	if current_hp <= 0.0:
		die(attacker)

func take_body_damage(amount: float, other: Node) -> void:
	if body_damage_cooldown > 0.0:
		return
	take_damage(amount, other)
	body_damage_cooldown = 0.25

func heal(amount: float) -> void:
	current_hp = minf(max_hp, current_hp + amount)
	queue_redraw()

func die(killer: Node = null) -> void:
	if is_dead:
		return
	is_dead = true
	emit_signal("died", self)
	if killer and killer.has_method("add_kill_score"):
		killer.add_kill_score(score)

func add_xp(amount: int) -> void:
	xp += amount
	score += amount
	var new_level = GameConfig.level_for_xp(xp)
	if new_level != level:
		level = new_level
		_on_level_up()
	emit_signal("score_changed", score)

func add_kill_score(victim_score: int) -> void:
	var bonus = max(50, victim_score / 5)
	add_xp(bonus)

func _on_level_up() -> void:
	max_hp = GameConfig.BASE_HP * tank_data.get("hp_multiplier", 1.0) * (1.0 + (level - 1) * 0.04)
	current_hp = minf(current_hp + max_hp * 0.3, max_hp)
	emit_signal("level_changed", level)

func get_barrel_world_pos(barrel_idx: int) -> Vector2:
	var barrels: Array = tank_data.get("barrels", [])
	if barrel_idx >= barrels.size():
		return global_position
	var b: Dictionary = barrels[barrel_idx]
	var angle: float = aim_angle + b.get("angle_offset", 0.0)
	if auto_spin:
		angle += spin_angle
	var lat: float = b.get("lateral_offset", 0.0)
	var len: float = b.get("length", 48.0)
	var dir = Vector2(cos(angle), sin(angle))
	var perp = Vector2(-sin(angle), cos(angle))
	return global_position + dir * len + perp * lat

func get_barrel_angle(barrel_idx: int) -> float:
	var barrels: Array = tank_data.get("barrels", [])
	if barrel_idx >= barrels.size():
		return aim_angle
	var b: Dictionary = barrels[barrel_idx]
	var base_angle = b.get("angle_offset", 0.0)
	if auto_spin:
		base_angle += spin_angle
	return aim_angle + base_angle

func _draw() -> void:
	_draw_tank()

func _draw_tank() -> void:
	var barrels: Array = tank_data.get("barrels", [])
	var col = tank_color
	if flash_timer > 0.0:
		col = col.lerp(Color.WHITE, 0.7)

	# Draw barrels first (behind body)
	for i in barrels.size():
		var b: Dictionary = barrels[i]
		var angle: float = b.get("angle_offset", 0.0)
		if auto_spin:
			angle += spin_angle
		var full_angle = aim_angle + angle
		var blen: float = b.get("length", 48.0)
		var bwid: float = b.get("width", 14.0)
		var lat: float = b.get("lateral_offset", 0.0)
		var dir = Vector2(cos(full_angle), sin(full_angle))
		var perp = Vector2(-sin(full_angle), cos(full_angle))
		var barrel_center = dir * (blen * 0.5) + perp * lat

		# Barrel rectangle
		var barrel_col = col.darkened(0.25)
		draw_set_transform(barrel_center, full_angle, Vector2.ONE)
		draw_rect(Rect2(-blen * 0.5, -bwid * 0.5, blen, bwid), Color(0.3, 0.3, 0.4, 1.0))
		draw_rect(Rect2(-blen * 0.5, -bwid * 0.5, blen, bwid), barrel_col, false, 1.5)
		draw_set_transform(Vector2.ZERO, 0.0, Vector2.ONE)

	# Draw body circle
	draw_circle(Vector2.ZERO, radius, col)
	draw_arc(Vector2.ZERO, radius, 0.0, TAU, 32, col.darkened(0.3), 2.0)

	# HP bar
	_draw_hp_bar()

func _draw_hp_bar() -> void:
	if current_hp >= max_hp:
		return
	var bar_w = radius * 2.2
	var bar_h = 5.0
	var bar_x = -bar_w * 0.5
	var bar_y = radius + 6.0
	var hp_frac = current_hp / max_hp
	draw_rect(Rect2(bar_x, bar_y, bar_w, bar_h), Color(0.15, 0.15, 0.15, 0.85))
	var hp_col = Color.GREEN if hp_frac > 0.5 else (Color.YELLOW if hp_frac > 0.25 else Color.RED)
	draw_rect(Rect2(bar_x, bar_y, bar_w * hp_frac, bar_h), hp_col)
