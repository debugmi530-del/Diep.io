extends Control
class_name ClassSelect

signal class_chosen(class_name_: String)

@onready var title_label: Label = $Panel/VBox/Title
@onready var buttons_container: HBoxContainer = $Panel/VBox/ButtonsContainer
@onready var desc_label: Label = $Panel/VBox/DescLabel

var current_player_class: String = "Basic"

func _ready() -> void:
	hide()

func show_class_select(available_classes: Array, current_class: String) -> void:
	current_player_class = current_class
	show()

	# Clear old buttons
	for child in buttons_container.get_children():
		child.queue_free()

	var tank = TankData.get_tank(current_class)
	var req_level = 0
	for cls in available_classes:
		var t = TankData.get_tank(cls)
		req_level = max(req_level, t.get("required_level", 0))

	title_label.text = "Уровень %d — Выберите класс:" % req_level

	for class_name_ in available_classes:
		var tank_def = TankData.get_tank(class_name_)
		var btn = _make_class_button(class_name_, tank_def)
		buttons_container.add_child(btn)

func _make_class_button(class_name_: String, tank_def: Dictionary) -> Button:
	var btn = Button.new()
	btn.custom_minimum_size = Vector2(120, 80)
	btn.text = tank_def.get("display_name", class_name_)
	btn.tooltip_text = tank_def.get("description", "")

	var col = Color(tank_def.get("color", "#4488ff"))
	var style = StyleBoxFlat.new()
	style.bg_color = col
	style.corner_radius_top_left = 8
	style.corner_radius_top_right = 8
	style.corner_radius_bottom_left = 8
	style.corner_radius_bottom_right = 8
	style.border_width_left = 2
	style.border_width_right = 2
	style.border_width_top = 2
	style.border_width_bottom = 2
	style.border_color = col.lightened(0.3)
	btn.add_theme_stylebox_override("normal", style)

	var hover_style = style.duplicate()
	hover_style.bg_color = col.lightened(0.15)
	btn.add_theme_stylebox_override("hover", hover_style)

	btn.add_theme_color_override("font_color", Color.WHITE)
	btn.add_theme_font_size_override("font_size", 13)

	btn.mouse_entered.connect(func():
		desc_label.text = tank_def.get("description", "")
	)
	btn.pressed.connect(func():
		_select_class(class_name_)
	)
	return btn

func _select_class(class_name_: String) -> void:
	emit_signal("class_chosen", class_name_)
	hide()

func _input(event: InputEvent) -> void:
	# Prevent input passing through while visible
	if visible:
		get_viewport().set_input_as_handled()
