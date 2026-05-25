extends Tank
class_name Player

signal upgrade_available(available_classes: Array)
signal class_selected(class_name_: String)

var pending_upgrades: Array = []
var is_upgrading: bool = false

# Touch / joystick
var joystick_active: bool = false
var joystick_origin: Vector2 = Vector2.ZERO
var joystick_dir: Vector2 = Vector2.ZERO
const JOYSTICK_RADIUS := 80.0
var shoot_touch_id: int = -1
var shoot_target: Vector2 = Vector2.ZERO
var is_shooting: bool = false

# Auto-fire
var auto_fire: bool = false

func _ready() -> void:
	is_player = true
	display_name_text = "Player"
	tank_color = Color("#4488ff")
	apply_tank_class("Basic")

func _process(delta: float) -> void:
	if is_dead:
		return
	super._process(delta)
	_handle_movement(delta)
	_handle_shooting(delta)
	_clamp_to_world()

func _handle_movement(delta: float) -> void:
	var dir := Vector2.ZERO

	if joystick_active:
		dir = joystick_dir
	else:
		if Input.is_action_pressed("move_up"):    dir.y -= 1.0
		if Input.is_action_pressed("move_down"):  dir.y += 1.0
		if Input.is_action_pressed("move_left"):  dir.x -= 1.0
		if Input.is_action_pressed("move_right"): dir.x += 1.0
		if dir.length_squared() > 1.0:
			dir = dir.normalized()

	velocity = dir * move_speed
	position += velocity * delta

func _handle_shooting(delta: float) -> void:
	update_barrel_timers(delta)
	var should_shoot = is_shooting or auto_fire or Input.is_action_pressed("shoot")
	if should_shoot and not is_upgrading:
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
	# Recoil
	var recoil_dir = Vector2(-cos(angle), -sin(angle))
	velocity += recoil_dir * 40.0

func _input(event: InputEvent) -> void:
	if is_dead:
		return
	if event is InputEventMouseMotion:
		var cam_pos = get_viewport().get_camera_2d().global_position if get_viewport().get_camera_2d() else Vector2.ZERO
		var viewport_size = get_viewport().get_visible_rect().size
		var mouse_world = cam_pos + event.position - viewport_size * 0.5
		aim_angle = global_position.angle_to_point(mouse_world)
		queue_redraw()
	elif event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_LEFT:
			is_shooting = event.pressed
	elif event is InputEventScreenTouch:
		_handle_touch(event)
	elif event is InputEventScreenDrag:
		_handle_drag(event)

func _handle_touch(event: InputEventScreenTouch) -> void:
	var half = get_viewport().get_visible_rect().size * 0.5
	if event.pressed:
		if event.position.x < half.x:
			# Left side = joystick
			joystick_active = true
			joystick_origin = event.position
			joystick_dir = Vector2.ZERO
		else:
			# Right side = shoot
			shoot_touch_id = event.index
			is_shooting = true
			var cam_pos = get_viewport().get_camera_2d().global_position if get_viewport().get_camera_2d() else Vector2.ZERO
			var mouse_world = cam_pos + event.position - half
			aim_angle = global_position.angle_to_point(mouse_world)
	else:
		if event.position.x < half.x:
			joystick_active = false
			joystick_dir = Vector2.ZERO
		if event.index == shoot_touch_id:
			is_shooting = false
			shoot_touch_id = -1

func _handle_drag(event: InputEventScreenDrag) -> void:
	var half = get_viewport().get_visible_rect().size * 0.5
	if event.position.x < half.x and joystick_active:
		var delta_pos = event.position - joystick_origin
		if delta_pos.length() > JOYSTICK_RADIUS:
			delta_pos = delta_pos.normalized() * JOYSTICK_RADIUS
		joystick_dir = delta_pos / JOYSTICK_RADIUS
	else:
		var cam_pos = get_viewport().get_camera_2d().global_position if get_viewport().get_camera_2d() else Vector2.ZERO
		var mouse_world = cam_pos + event.position - half
		aim_angle = global_position.angle_to_point(mouse_world)

func _clamp_to_world() -> void:
	var half = GameConfig.WORLD_SIZE * 0.5
	position.x = clampf(position.x, -half + radius, half - radius)
	position.y = clampf(position.y, -half + radius, half - radius)

func _on_level_up() -> void:
	super._on_level_up()
	if level in GameConfig.UPGRADE_LEVELS:
		var available = TankData.get_upgrades_for(tank_class)
		if available.size() > 0:
			is_upgrading = true
			pending_upgrades = available
			emit_signal("upgrade_available", available)

func select_class(class_name_: String) -> void:
	is_upgrading = false
	apply_tank_class(class_name_)
	emit_signal("class_selected", class_name_)
	queue_redraw()

func respawn(pos: Vector2) -> void:
	is_dead = false
	position = pos
	xp = 0
	score = 0
	level = 1
	apply_tank_class("Basic")
	queue_redraw()
