extends Node2D
class_name WorldBackground

const GRID_COLOR = Color(0.18, 0.19, 0.22, 1.0)
const BG_COLOR = Color(0.11, 0.12, 0.15, 1.0)
const BORDER_COLOR = Color(0.6, 0.15, 0.15, 1.0)
const GRID_STEP = 50.0
const HALF_WORLD = 8000.0

func _draw() -> void:
	# Background fill
	draw_rect(Rect2(-HALF_WORLD, -HALF_WORLD, HALF_WORLD * 2, HALF_WORLD * 2), BG_COLOR)

	# Grid lines
	var x = -HALF_WORLD
	while x <= HALF_WORLD:
		draw_line(Vector2(x, -HALF_WORLD), Vector2(x, HALF_WORLD), GRID_COLOR, 1.0)
		x += GRID_STEP
	var y = -HALF_WORLD
	while y <= HALF_WORLD:
		draw_line(Vector2(-HALF_WORLD, y), Vector2(HALF_WORLD, y), GRID_COLOR, 1.0)
		y += GRID_STEP

	# Border walls
	var border_w = 40.0
	draw_rect(Rect2(-HALF_WORLD - border_w, -HALF_WORLD - border_w, HALF_WORLD * 2 + border_w * 2, border_w), BORDER_COLOR)
	draw_rect(Rect2(-HALF_WORLD - border_w, HALF_WORLD, HALF_WORLD * 2 + border_w * 2, border_w), BORDER_COLOR)
	draw_rect(Rect2(-HALF_WORLD - border_w, -HALF_WORLD, border_w, HALF_WORLD * 2), BORDER_COLOR)
	draw_rect(Rect2(HALF_WORLD, -HALF_WORLD, border_w, HALF_WORLD * 2), BORDER_COLOR)
