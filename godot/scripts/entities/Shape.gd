extends Node2D
class_name Shape

signal destroyed(shape, killer)

var shape_type: String = "square"
var shape_radius: float = 18.0
var max_hp: float = 10.0
var current_hp: float = 10.0
var xp_value: int = 10
var shape_color: Color = Color("#f0dc40")
var sides: int = 4

var rotation_speed: float = 0.0
var velocity: Vector2 = Vector2.ZERO
var friction: float = 0.92

var flash_timer: float = 0.0
const FLASH_DURATION := 0.1

var game: Node = null

func setup(type: String) -> void:
	shape_type = type
	shape_radius = GameConfig.SHAPE_RADII.get(type, 18.0)
	max_hp = GameConfig.SHAPE_HP.get(type, 10.0)
	current_hp = max_hp
	xp_value = GameConfig.SHAPE_XP.get(type, 10)
	shape_color = GameConfig.SHAPE_COLORS.get(type, Color.YELLOW)
	sides = GameConfig.SHAPE_SIDES.get(type, 4)
	rotation_speed = randf_range(-0.8, 0.8)

func _process(delta: float) -> void:
	rotation += rotation_speed * delta
	position += velocity * delta
	velocity *= friction

	if flash_timer > 0.0:
		flash_timer -= delta
		queue_redraw()

	# Clamp to world
	var half = GameConfig.WORLD_SIZE * 0.5 - shape_radius
	if abs(position.x) > half:
		velocity.x *= -0.8
		position.x = clampf(position.x, -half, half)
	if abs(position.y) > half:
		velocity.y *= -0.8
		position.y = clampf(position.y, -half, half)

func take_damage(amount: float, attacker: Node = null) -> void:
	current_hp -= amount
	flash_timer = FLASH_DURATION

	# Knockback
	if attacker != null:
		var dir = (global_position - attacker.global_position).normalized()
		velocity += dir * amount * 2.5

	queue_redraw()

	if current_hp <= 0.0:
		emit_signal("destroyed", self, attacker)
		queue_free()

func _draw() -> void:
	var col = shape_color
	if flash_timer > 0.0:
		col = col.lerp(Color.WHITE, 0.8)

	_draw_polygon(col)
	_draw_hp_bar()

func _draw_polygon(col: Color) -> void:
	var points: PackedVector2Array = []
	for i in sides:
		var angle = (float(i) / sides) * TAU - PI / sides
		points.append(Vector2(cos(angle), sin(angle)) * shape_radius)

	draw_colored_polygon(points, col)
	# Outline
	var outline_col = col.darkened(0.35)
	for i in sides:
		draw_line(points[i], points[(i + 1) % sides], outline_col, 2.0)

func _draw_hp_bar() -> void:
	if current_hp >= max_hp:
		return
	var bar_w = shape_radius * 2.2
	var bar_h = 4.0
	var bar_x = -bar_w * 0.5
	var bar_y = shape_radius + 5.0
	var frac = current_hp / max_hp
	draw_rect(Rect2(bar_x, bar_y, bar_w, bar_h), Color(0.1, 0.1, 0.1, 0.8))
	var hp_col = Color.GREEN if frac > 0.5 else (Color.YELLOW if frac > 0.25 else Color.RED)
	draw_rect(Rect2(bar_x, bar_y, bar_w * frac, bar_h), hp_col)
