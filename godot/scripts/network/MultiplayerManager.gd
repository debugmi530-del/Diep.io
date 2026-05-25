extends Node
class_name MultiplayerManager

signal connected(room_code: String)
signal disconnected
signal player_joined(id: String, name_: String, color: Color)
signal player_left(id: String)
signal state_received(id: String, data: Dictionary)
signal chat_received(name_: String, message: String)

const RELAY_HTTP := "https://diep-clone-android-relay.replit.app/api"
const RELAY_WS   := "wss://diep-clone-android-relay.replit.app/api/relay"

const SYNC_INTERVAL := 0.032  # ~30Hz
const STALE_TIMEOUT  := 6.0
const MAX_PLAYERS    := 10

var my_id: String = ""
var my_name: String = "Player"
var my_color: Color = Color("#4488ff")
var role: String = "none"  # none | host | client
var room_code: String = ""

var ws: WebSocketPeer = null
var ws_state: int = WebSocketPeer.STATE_CLOSED

var remote_players: Dictionary = {}  # id -> {name, color, pos, angle, level, score, class}
var sync_timer: float = 0.0

var is_connected_flag: bool = false

func _ready() -> void:
	my_id = "p" + str(randi()) + str(Time.get_ticks_msec())

func _process(delta: float) -> void:
	if ws == null:
		return
	ws.poll()
	var new_state = ws.get_ready_state()
	if new_state != ws_state:
		ws_state = new_state
		if ws_state == WebSocketPeer.STATE_OPEN:
			is_connected_flag = true
			emit_signal("connected", room_code)
		elif ws_state == WebSocketPeer.STATE_CLOSED:
			is_connected_flag = false
			emit_signal("disconnected")

	while ws.get_available_packet_count() > 0:
		var pkt = ws.get_packet()
		_handle_packet(pkt.get_string_from_utf8())

	# Send state sync
	sync_timer -= delta
	if sync_timer <= 0.0 and is_connected_flag:
		sync_timer = SYNC_INTERVAL
		_send_state_sync()

	# Prune stale players
	var now = Time.get_ticks_msec() / 1000.0
	for id in remote_players.keys():
		if now - remote_players[id].get("last_seen", 0.0) > STALE_TIMEOUT:
			remote_players.erase(id)
			emit_signal("player_left", id)

func connect_to_room(code: String, as_host: bool, player_name: String, color: Color) -> void:
	room_code = code
	my_name = player_name
	my_color = color
	role = "host" if as_host else "client"

	if ws != null:
		ws.close()
	ws = WebSocketPeer.new()

	var url = RELAY_WS + "?code=" + code.uri_encode() + \
		"&id=" + my_id.uri_encode() + \
		"&name=" + player_name.uri_encode() + \
		"&color=" + str(color.to_html())
	ws.connect_to_url(url)

func disconnect_from_room() -> void:
	if ws != null:
		ws.close()
		ws = null
	is_connected_flag = false
	role = "none"
	remote_players.clear()

func send_message(obj: Dictionary) -> void:
	if ws != null and ws_state == WebSocketPeer.STATE_OPEN:
		ws.send_text(JSON.stringify(obj))

func _send_state_sync() -> void:
	# Called by game with current player state
	pass

func send_player_state(pos: Vector2, angle: float, level: int, score: int,
					   class_name_: String, hp: float, max_hp: float) -> void:
	send_message({
		"type": "state",
		"id": my_id,
		"x": pos.x,
		"y": pos.y,
		"angle": angle,
		"level": level,
		"score": score,
		"class": class_name_,
		"hp": hp,
		"max_hp": max_hp
	})

func send_bullet(pos: Vector2, angle: float, damage: float, speed: float,
				 radius: float, bullet_type: String) -> void:
	send_message({
		"type": "bullet",
		"id": my_id,
		"x": pos.x, "y": pos.y,
		"angle": angle,
		"damage": damage,
		"speed": speed,
		"radius": radius,
		"bullet_type": bullet_type
	})

func send_chat(message: String) -> void:
	send_message({
		"type": "chat",
		"id": my_id,
		"name": my_name,
		"message": message
	})

func _handle_packet(json_str: String) -> void:
	var result = JSON.parse_string(json_str)
	if result == null:
		return
	var data: Dictionary = result
	var msg_type: String = data.get("type", "")
	var sender_id: String = data.get("id", "")

	if sender_id == my_id:
		return

	match msg_type:
		"state":
			var now = Time.get_ticks_msec() / 1000.0
			if sender_id not in remote_players:
				emit_signal("player_joined", sender_id,
					data.get("name", "Player"),
					Color(data.get("color", "#4488ff")))
			remote_players[sender_id] = {
				"name": data.get("name", "Player"),
				"color": Color(data.get("color", "#4488ff")),
				"pos": Vector2(float(data.get("x", 0)), float(data.get("y", 0))),
				"angle": float(data.get("angle", 0)),
				"level": int(data.get("level", 1)),
				"score": int(data.get("score", 0)),
				"class": data.get("class", "Basic"),
				"hp": float(data.get("hp", 100)),
				"max_hp": float(data.get("max_hp", 100)),
				"last_seen": now
			}
			emit_signal("state_received", sender_id, remote_players[sender_id])
		"bullet":
			# Remote bullet spawning handled by game
			pass
		"chat":
			emit_signal("chat_received", data.get("name", "?"), data.get("message", ""))
		"leave":
			remote_players.erase(sender_id)
			emit_signal("player_left", sender_id)

func get_remote_players() -> Dictionary:
	return remote_players

func is_in_room() -> bool:
	return is_connected_flag
