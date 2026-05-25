extends Control
class_name AdminPanel

signal spawn_shape_requested(shape_type: String)
signal spawn_npc_requested(class_name_: String, level: int)

var is_unlocked: bool = false
var pin_attempts: int = 0
const CORRECT_PIN := "1337"

@onready var panel: Control = $Panel
@onready var tab_shapes: Control = $Panel/VBox/Body/PaneShapes
@onready var tab_tanks: Control = $Panel/VBox/Body/PaneTanks
@onready var status_label: Label = $Panel/VBox/Status

var current_tab: String = "shapes"

const SHAPES := [
	{"type": "square",         "label": "Квадрат",              "color": "#f0dc40"},
	{"type": "triangle",       "label": "Треугольник",          "color": "#f05050"},
	{"type": "mediumSquare",   "label": "Средний квадрат",      "color": "#00ddcc"},
	{"type": "largeSquare",    "label": "Большой квадрат",      "color": "#ff8800"},
	{"type": "mediumTriangle", "label": "Средний треугольник",  "color": "#ffcc00"},
	{"type": "largeTriangle",  "label": "Гигантский треугольник","color": "#44cc44"},
	{"type": "pentagon",       "label": "Пятиугольник",         "color": "#6088ff"},
	{"type": "crasher",        "label": "Крашер",               "color": "#ff66aa"},
	{"type": "bigPentagon",    "label": "Большой пятиугольник", "color": "#4466ff"},
	{"type": "alphaPentagon",  "label": "Альфа пятиугольник",   "color": "#aa44ff"},
	{"type": "hexagon",        "label": "Шестиугольник",        "color": "#22ccaa"},
	{"type": "megaPentagon",   "label": "Мега пятиугольник",    "color": "#2244cc"},
]

func _ready() -> void:
	hide()
	_build_shapes_grid()
	_build_tanks_panel()

func _input(event: InputEvent) -> void:
	if event is InputEventKey and event.pressed:
		if event.keycode == KEY_F12:
			_try_toggle_admin()

func _try_toggle_admin() -> void:
	if not is_unlocked:
		_show_pin_dialog()
	else:
		if panel.visible:
			panel.hide()
		else:
			panel.show()

func _show_pin_dialog() -> void:
	var dialog = AcceptDialog.new()
	dialog.title = "Панель администратора"
	dialog.dialog_text = "Введите PIN:"
	var line = LineEdit.new()
	line.secret = true
	line.placeholder_text = "PIN..."
	dialog.add_child(line)
	add_child(dialog)
	dialog.confirmed.connect(func():
		if line.text == CORRECT_PIN:
			is_unlocked = true
			panel.show()
		dialog.queue_free()
	)
	dialog.popup_centered()

func _build_shapes_grid() -> void:
	if tab_shapes == null:
		return
	var grid = GridContainer.new()
	grid.columns = 2
	tab_shapes.add_child(grid)
	for s in SHAPES:
		var btn = Button.new()
		btn.text = s["label"]
		btn.custom_minimum_size = Vector2(110, 36)
		var style = StyleBoxFlat.new()
		style.bg_color = Color(s["color"])
		style.corner_radius_top_left = 6
		style.corner_radius_top_right = 6
		style.corner_radius_bottom_left = 6
		style.corner_radius_bottom_right = 6
		btn.add_theme_stylebox_override("normal", style)
		btn.add_theme_color_override("font_color", Color(0.1, 0.1, 0.1))
		var stype = s["type"]
		btn.pressed.connect(func():
			emit_signal("spawn_shape_requested", stype)
			_set_status("Заспавнено: " + stype)
		)
		grid.add_child(btn)

func _build_tanks_panel() -> void:
	if tab_tanks == null:
		return
	var scroll = ScrollContainer.new()
	scroll.size_flags_vertical = Control.SIZE_EXPAND_FILL
	tab_tanks.add_child(scroll)
	var vbox = VBoxContainer.new()
	scroll.add_child(vbox)

	for class_name_ in TankData.TANKS:
		var tank = TankData.TANKS[class_name_]
		var btn = Button.new()
		btn.text = tank.get("display_name", class_name_) + " (NPC)"
		btn.custom_minimum_size = Vector2(0, 32)
		var col_str = tank.get("color", "#4488ff")
		var style = StyleBoxFlat.new()
		style.bg_color = Color(col_str).darkened(0.3)
		style.corner_radius_top_left = 5
		style.corner_radius_top_right = 5
		style.corner_radius_bottom_left = 5
		style.corner_radius_bottom_right = 5
		btn.add_theme_stylebox_override("normal", style)
		btn.add_theme_color_override("font_color", Color.WHITE)
		var cn = class_name_
		var lvl = tank.get("required_level", 1)
		btn.pressed.connect(func():
			emit_signal("spawn_npc_requested", cn, lvl if lvl > 0 else 1)
			_set_status("NPC: " + cn)
		)
		vbox.add_child(btn)

func _set_status(msg: String) -> void:
	if status_label:
		status_label.text = msg
	get_tree().create_timer(2.0).timeout.connect(func():
		if status_label:
			status_label.text = "Нажмите кнопку для действия"
	)
