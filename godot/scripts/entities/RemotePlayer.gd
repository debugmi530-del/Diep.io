extends Tank
class_name RemotePlayer

# Represents a remote multiplayer player
var remote_id: String = ""
var target_position: Vector2 = Vector2.ZERO
var target_angle: float = 0.0
var interpolation_speed: float = 10.0

func setup_remote(id: String, name_: String, color: Color) -> void:
	remote_id = id
	display_name_text = name_
	tank_color = color
	is_player = false
	apply_tank_class("Basic")

func update_from_state(data: Dictionary) -> void:
	target_position = Vector2(float(data.get("pos", {}).get("x", 0)), float(data.get("pos", {}).get("y", 0)))
	target_angle = float(data.get("angle", 0))
	level = int(data.get("level", 1))
	score = int(data.get("score", 0))

	var new_class = data.get("class", "Basic")
	if new_class != tank_class:
		apply_tank_class(new_class)

	var hp_val = float(data.get("hp", max_hp))
	var max_hp_val = float(data.get("max_hp", max_hp))
	max_hp = max_hp_val
	current_hp = hp_val

func _process(delta: float) -> void:
	if is_dead:
		return
	# Interpolate position
	position = position.lerp(target_position, delta * interpolation_speed)
	aim_angle = lerp_angle(aim_angle, target_angle, delta * interpolation_speed)
	super._process(delta)
	queue_redraw()
