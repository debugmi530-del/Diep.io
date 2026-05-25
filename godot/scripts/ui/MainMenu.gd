extends Control
class_name MainMenu

signal play_pressed(player_name: String)
signal multiplayer_pressed(player_name: String)

@onready var name_input: LineEdit = $Panel/VBox/NameInput
@onready var play_btn: Button = $Panel/VBox/PlayBtn
@onready var multiplayer_btn: Button = $Panel/VBox/MultiplayerBtn
@onready var title_label: Label = $TitleLabel
@onready var tank_preview: Control = $Panel/TankPreview

var preview_angle: float = 0.0

func _ready() -> void:
	play_btn.pressed.connect(_on_play_pressed)
	multiplayer_btn.pressed.connect(_on_multiplayer_pressed)
	name_input.placeholder_text = "Введи имя..."

	# Load saved name
	var saved_name = ""
	if FileAccess.file_exists("user://player_name.txt"):
		var f = FileAccess.open("user://player_name.txt", FileAccess.READ)
		saved_name = f.get_line()
		f.close()
	name_input.text = saved_name

func _process(delta: float) -> void:
	preview_angle += delta * 0.8
	if tank_preview:
		tank_preview.queue_redraw()

func _on_play_pressed() -> void:
	var pname = name_input.text.strip_edges()
	if pname.is_empty():
		pname = "Player"
	_save_name(pname)
	emit_signal("play_pressed", pname)

func _on_multiplayer_pressed() -> void:
	var pname = name_input.text.strip_edges()
	if pname.is_empty():
		pname = "Player"
	_save_name(pname)
	emit_signal("multiplayer_pressed", pname)

func _save_name(pname: String) -> void:
	var f = FileAccess.open("user://player_name.txt", FileAccess.WRITE)
	f.store_line(pname)
	f.close()
