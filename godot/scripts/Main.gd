extends Node
class_name Main

@onready var main_menu: Control = $MainMenu
@onready var game_scene_container: Node = $GameSceneContainer
@onready var multiplayer_ui: Control = $MultiplayerUI

const GameScene = preload("res://scenes/Game.tscn")

var current_game: Node = null
var player_name: String = "Player"
var multiplayer_mgr: MultiplayerManager = null

func _ready() -> void:
	_setup_multiplayer()
	_show_main_menu()

func _setup_multiplayer() -> void:
	multiplayer_mgr = MultiplayerManager.new()
	multiplayer_mgr.name = "MultiplayerManager"
	add_child(multiplayer_mgr)
	if multiplayer_ui:
		multiplayer_ui.setup(multiplayer_mgr)
		multiplayer_ui.room_joined.connect(_on_room_joined)
		multiplayer_ui.disconnected_from_room.connect(_on_room_disconnected)

func _show_main_menu() -> void:
	if main_menu:
		main_menu.show()
		main_menu.play_pressed.connect(_on_play_pressed)
		main_menu.multiplayer_pressed.connect(_on_multiplayer_pressed)

func _on_play_pressed(name_: String) -> void:
	player_name = name_
	_start_game(false)

func _on_multiplayer_pressed(name_: String) -> void:
	player_name = name_
	if main_menu:
		main_menu.hide()
	if multiplayer_ui:
		multiplayer_ui.show()

func _on_room_joined(code: String, as_host: bool) -> void:
	multiplayer_mgr.connect_to_room(code, as_host, player_name, Color("#4488ff"))
	_start_game(true)

func _on_room_disconnected() -> void:
	multiplayer_mgr.disconnect_from_room()
	_stop_game()
	_show_main_menu()

func _start_game(is_multiplayer: bool) -> void:
	if main_menu:
		main_menu.hide()

	if current_game:
		current_game.queue_free()
		current_game = null

	current_game = GameScene.instantiate()
	game_scene_container.add_child(current_game)

	# Set player name
	if current_game.player:
		current_game.player.display_name_text = player_name

	# Connect death/respawn
	current_game.death_screen.respawn_pressed.connect(current_game.player_respawn)
	current_game.class_select_ui.class_chosen.connect(func(cn):
		if current_game.player:
			current_game.player.select_class(cn)
	)

	# Setup multiplayer integration
	if is_multiplayer and multiplayer_mgr:
		_setup_multiplayer_in_game(current_game)

func _stop_game() -> void:
	if current_game:
		current_game.queue_free()
		current_game = null

func _setup_multiplayer_in_game(game: Node) -> void:
	# Sync player state every frame
	multiplayer_mgr.state_received.connect(func(id, data):
		game.update_remote_player(id, data)
	)
	multiplayer_mgr.player_left.connect(func(id):
		game.remove_remote_player(id)
	)

func _process(_delta: float) -> void:
	# Send multiplayer state if in game
	if current_game and multiplayer_mgr and multiplayer_mgr.is_in_room():
		var p = current_game.player
		if p and is_instance_valid(p) and not p.is_dead:
			multiplayer_mgr.send_player_state(
				p.global_position, p.aim_angle, p.level, p.score,
				p.tank_class, p.current_hp, p.max_hp
			)
