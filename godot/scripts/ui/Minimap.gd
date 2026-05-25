extends Control
class_name Minimap

var game_ref: Node = null
const MAP_SIZE = 120.0
const WORLD_HALF = 8000.0

func _ready() -> void:
	custom_minimum_size = Vector2(MAP_SIZE, MAP_SIZE)

func _draw() -> void:
	# Background
	draw_rect(Rect2(0, 0, MAP_SIZE, MAP_SIZE), Color(0.05, 0.05, 0.1, 0.75))
	draw_rect(Rect2(0, 0, MAP_SIZE, MAP_SIZE), Color(0.3, 0.3, 0.5, 0.6), false, 1.5)

	if game_ref == null:
		return

	# Scale factor
	var scale = MAP_SIZE / (WORLD_HALF * 2.0)

	# Draw shapes as tiny dots
	for shape in game_ref.get_shapes():
		if not is_instance_valid(shape):
			continue
		var p = world_to_map(shape.global_position, scale)
		var col = shape.shape_color
		col.a = 0.6
		draw_circle(p, 1.5, col)

	# Draw bots
	for tank in game_ref.bots:
		if not is_instance_valid(tank) or tank.is_dead:
			continue
		var p = world_to_map(tank.global_position, scale)
		draw_circle(p, 2.5, Color(1, 0.3, 0.3, 0.8))

	# Draw player
	if game_ref.player and is_instance_valid(game_ref.player) and not game_ref.player.is_dead:
		var p = world_to_map(game_ref.player.global_position, scale)
		draw_circle(p, 3.5, Color("#4488ff"))

func world_to_map(world_pos: Vector2, scale: float) -> Vector2:
	return Vector2(
		(world_pos.x + WORLD_HALF) * scale,
		(world_pos.y + WORLD_HALF) * scale
	)

func _process(_delta: float) -> void:
	queue_redraw()
