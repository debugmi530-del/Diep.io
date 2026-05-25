extends Control
class_name MultiplayerUI

signal room_joined(code: String, as_host: bool)
signal disconnected_from_room

@onready var room_code_input: LineEdit = $Panel/VBox/RoomCodeInput
@onready var create_btn: Button = $Panel/VBox/Buttons/CreateBtn
@onready var join_btn: Button = $Panel/VBox/Buttons/JoinBtn
@onready var leave_btn: Button = $Panel/VBox/LeaveBtn
@onready var status_label: Label = $Panel/VBox/StatusLabel
@onready var players_list: VBoxContainer = $Panel/VBox/PlayersList
@onready var chat_input: LineEdit = $Panel/VBox/ChatInput
@onready var chat_container: VBoxContainer = $Panel/VBox/ChatContainer

var multiplayer_mgr: MultiplayerManager = null

func _ready() -> void:
	hide()
	create_btn.pressed.connect(_on_create_pressed)
	join_btn.pressed.connect(_on_join_pressed)
	leave_btn.pressed.connect(_on_leave_pressed)
	chat_input.text_submitted.connect(_on_chat_submitted)

func setup(mgr: MultiplayerManager) -> void:
	multiplayer_mgr = mgr
	mgr.connected.connect(_on_connected)
	mgr.disconnected.connect(_on_disconnected)
	mgr.player_joined.connect(_on_player_joined)
	mgr.player_left.connect(_on_player_left)
	mgr.chat_received.connect(_on_chat_received)

func _on_create_pressed() -> void:
	var code = _generate_room_code()
	room_code_input.text = code
	emit_signal("room_joined", code, true)
	status_label.text = "Создание комнаты " + code + "..."

func _on_join_pressed() -> void:
	var code = room_code_input.text.strip_edges().to_upper()
	if code.length() < 4:
		status_label.text = "Введите код комнаты!"
		return
	emit_signal("room_joined", code, false)
	status_label.text = "Подключение к " + code + "..."

func _on_leave_pressed() -> void:
	emit_signal("disconnected_from_room")
	hide()

func _on_connected(code: String) -> void:
	status_label.text = "Подключён к комнате: " + code
	leave_btn.show()

func _on_disconnected() -> void:
	status_label.text = "Отключён"
	leave_btn.hide()

func _on_player_joined(id: String, name_: String, color: Color) -> void:
	var lbl = Label.new()
	lbl.name = "player_" + id
	lbl.text = "● " + name_
	lbl.add_theme_color_override("font_color", color)
	players_list.add_child(lbl)

func _on_player_left(id: String) -> void:
	var node = players_list.get_node_or_null("player_" + id)
	if node:
		node.queue_free()

func _on_chat_submitted(text: String) -> void:
	if multiplayer_mgr and text.strip_edges().length() > 0:
		multiplayer_mgr.send_chat(text.strip_edges())
		chat_input.text = ""

func _on_chat_received(name_: String, message: String) -> void:
	var lbl = Label.new()
	lbl.text = name_ + ": " + message
	lbl.add_theme_font_size_override("font_size", 11)
	lbl.autowrap_mode = TextServer.AUTOWRAP_WORD_SMART
	chat_container.add_child(lbl)
	# Limit chat history
	if chat_container.get_child_count() > 20:
		chat_container.get_child(0).queue_free()

func _generate_room_code() -> String:
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
	var code = ""
	for i in 6:
		code += chars[randi() % chars.length()]
	return code
