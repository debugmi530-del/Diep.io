extends Node2D
class_name Bullet

var damage: float = 8.0
var speed: float = 420.0
var radius: float = 8.0
var direction: Vector2 = Vector2.RIGHT
var owner_tank: Tank = null
var bullet_type: String = "normal"  # normal | trap | drone | homing | bomb

var lifetime: float = 2.5
var age: float = 0.0
var is_active: bool = true
var penetration_hits: int = 0
var max_penetration: int = 1

# Drone specific
var drone_target: Node2D = null
var drone_speed: float = 180.0

# Trap specific
var is_stuck: bool = false
var trap_lifetime: float = 8.0

# Visual
var trail_positions: Array = []
const MAX_TRAIL := 6

var game: Node = null

func setup(pos: Vector2, angle: float, dmg: float, spd: float, rad: float,
		   owner: Tank, btype: String = "normal") -> void:
	position = pos
	direction = Vector2(cos(angle), sin(angle))
	damage = dmg
	speed = spd
	radius = rad
	owner_tank = owner
	bullet_type = btype

	match bullet_type:
		"trap":
			lifetime = 0.3  # flies briefly then sticks
			max_penetration = 99
		"drone":
			speed = 0.0  # uses drone movement
			lifetime = 30.0
			max_penetration = 99
		"homing":
			lifetime = 4.0
		"bomb":
			lifetime = 3.0
		_:
			lifetime = 1.8 + rad * 0.015

func _process(delta: float) -> void:
	if not is_active:
		return

	age += delta

	match bullet_type:
		"trap":
			_process_trap(delta)
		"drone":
			_process_drone(delta)
		"homing":
			_process_homing(delta)
		_:
			_process_normal(delta)

	# Store trail
	if trail_positions.size() >= MAX_TRAIL:
		trail_positions.pop_front()
	trail_positions.append(global_position)

	queue_redraw()

	# Check lifetime
	var check_lifetime = trap_lifetime if (bullet_type == "trap" and is_stuck) else lifetime
	if age >= check_lifetime:
		_expire()

func _process_normal(delta: float) -> void:
	position += direction * speed * delta
	_check_world_bounds()
	_check_collisions()

func _process_trap(delta: float) -> void:
	if not is_stuck:
		speed = maxf(0.0, speed - speed * delta * 8.0)
		position += direction * speed * delta
		if speed < 20.0:
			is_stuck = true
			age = 0.0  # reset age for trap lifetime
	else:
		_check_collisions()

func _process_drone(delta: float) -> void:
	if owner_tank == null or not is_instance_valid(owner_tank) or owner_tank.is_dead:
		_expire()
		return

	# Find target (nearest enemy of owner)
	if drone_target == null or not is_instance_valid(drone_target):
		drone_target = _find_drone_target()

	if drone_target != null and is_instance_valid(drone_target):
		var to_target = drone_target.global_position - global_position
		direction = direction.lerp(to_target.normalized(), delta * 3.0).normalized()
	else:
		# Orbit around owner
		var to_owner = owner_tank.global_position - global_position
		if to_owner.length() > 200.0:
			direction = direction.lerp(to_owner.normalized(), delta * 2.0).normalized()

	position += direction * 200.0 * delta
	_check_collisions()

func _process_homing(delta: float) -> void:
	if drone_target == null or not is_instance_valid(drone_target):
		drone_target = _find_drone_target()
	if drone_target != null and is_instance_valid(drone_target):
		var to_target = (drone_target.global_position - global_position).normalized()
		direction = direction.lerp(to_target, delta * 2.5).normalized()
	position += direction * speed * delta
	_check_world_bounds()
	_check_collisions()

func _check_collisions() -> void:
	if game == null:
		return

	# Check against tanks
	for tank in game.get_all_tanks():
		if tank == owner_tank or tank.is_dead:
			continue
		var dist = global_position.distance_to(tank.global_position)
		if dist < radius + tank.radius:
			tank.take_damage(damage, owner_tank)
			# Vampire heal
			if owner_tank != null and owner_tank.tank_class == "Vampire":
				owner_tank.heal(damage * 0.3)
			penetration_hits += 1
			if penetration_hits >= max_penetration:
				_expire()
				return

	# Check against shapes
	for shape in game.get_shapes():
		var dist = global_position.distance_to(shape.global_position)
		if dist < radius + shape.shape_radius:
			shape.take_damage(damage, owner_tank)
			penetration_hits += 1
			if penetration_hits >= max_penetration:
				_expire()
				return

	# Check bullet vs bullet collisions
	for other_bullet in game.get_bullets():
		if other_bullet == self or other_bullet.owner_tank == owner_tank:
			continue
		var dist = global_position.distance_to(other_bullet.global_position)
		if dist < radius + other_bullet.radius:
			_resolve_bullet_collision(other_bullet)
			return

func _resolve_bullet_collision(other: Bullet) -> void:
	var my_power = damage * radius
	var other_power = other.damage * other.radius
	if my_power > other_power:
		damage -= other.damage * 0.5
		if damage <= 0.0:
			_expire()
		other._expire()
	elif other_power > my_power:
		other.damage -= damage * 0.5
		if other.damage <= 0.0:
			other._expire()
		_expire()
	else:
		_expire()
		other._expire()

func _check_world_bounds() -> void:
	var half = GameConfig.WORLD_SIZE * 0.5
	if abs(position.x) > half or abs(position.y) > half:
		_expire()

func _find_drone_target() -> Node2D:
	if game == null or owner_tank == null:
		return null
	var best: Node2D = null
	var best_dist := 800.0
	for tank in game.get_all_tanks():
		if tank == owner_tank or tank.is_dead:
			continue
		var d = global_position.distance_to(tank.global_position)
		if d < best_dist:
			best_dist = d
			best = tank
	return best

func _expire() -> void:
	if not is_active:
		return
	is_active = false
	if bullet_type == "bomb":
		_explode()
	queue_free()

func _explode() -> void:
	if game == null:
		return
	var explode_radius = radius * 3.0
	for tank in game.get_all_tanks():
		if tank == owner_tank:
			continue
		var dist = global_position.distance_to(tank.global_position)
		if dist < explode_radius + tank.radius:
			var falloff = 1.0 - (dist / explode_radius)
			tank.take_damage(damage * 2.0 * falloff, owner_tank)
	for shape in game.get_shapes():
		var dist = global_position.distance_to(shape.global_position)
		if dist < explode_radius + shape.shape_radius:
			shape.take_damage(damage * 1.5, owner_tank)

func _draw() -> void:
	if not is_active:
		return

	# Trail
	for i in trail_positions.size():
		var alpha = float(i) / trail_positions.size() * 0.35
		var tr = trail_positions[i] - global_position
		draw_circle(tr, radius * 0.5 * (float(i) / trail_positions.size()), Color(1, 1, 1, alpha))

	# Bullet body
	var col = Color.WHITE
	match bullet_type:
		"trap":   col = Color("#00cc88")
		"drone":  col = Color("#aa44ff")
		"homing": col = Color("#ff4444")
		"bomb":   col = Color("#ff8800")

	draw_circle(Vector2.ZERO, radius, col)
	draw_arc(Vector2.ZERO, radius, 0.0, TAU, 16, col.darkened(0.4), 1.5)
