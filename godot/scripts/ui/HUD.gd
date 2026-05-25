extends Control
class_name HUD

@onready var xp_bar: ProgressBar = $XPBar
@onready var xp_label: Label = $XPLabel
@onready var level_label: Label = $LevelLabel
@onready var score_label: Label = $ScoreLabel
@onready var hp_bar: ProgressBar = $HPBar
@onready var class_label: Label = $ClassLabel
@onready var kill_feed_container: VBoxContainer = $KillFeedContainer
@onready var level_up_flash: Control = $LevelUpFlash
@onready var joystick_bg: Control = $JoystickBG
@onready var joystick_knob: Control = $JoystickBG/Knob
@onready var minimap: Control = $Minimap
@onready var stats_panel: Control = $StatsPanel

var flash_timer: float = 0.0
var kill_feed_labels: Array = []

func _ready() -> void:
	_setup_layout()
	# Show joystick on touch screens
	if DisplayServer.is_touchscreen_available():
		joystick_bg.show()
	else:
		joystick_bg.hide()

func _setup_layout() -> void:
	# XP bar at bottom
	xp_bar.value = 0
	xp_bar.max_value = 100
	# HP bar above XP
	hp_bar.value = 100
	hp_bar.max_value = 100

func _process(delta: float) -> void:
	if flash_timer > 0.0:
		flash_timer -= delta
		level_up_flash.modulate.a = flash_timer / 1.0
		if flash_timer <= 0.0:
			level_up_flash.hide()

func update_hud(player) -> void:
	if player == null or not is_instance_valid(player):
		return

	# XP / Level
	var xp_needed = GameConfig.xp_for_level(player.level + 1)
	var xp_prev = GameConfig.xp_for_level(player.level)
	var xp_progress = 0.0
	if xp_needed > xp_prev:
		xp_progress = float(player.xp - xp_prev) / float(xp_needed - xp_prev) * 100.0
	xp_bar.value = clampf(xp_progress, 0.0, 100.0)
	xp_label.text = str(player.xp) + " XP"
	level_label.text = "Ур. " + str(player.level)
	score_label.text = "Очки: " + str(player.score)

	# HP
	hp_bar.max_value = player.max_hp
	hp_bar.value = player.current_hp

	# Class
	class_label.text = TankData.get_display_name(player.tank_class)

	# Minimap
	_update_minimap(player)

func update_kill_feed(kill_feed: Array) -> void:
	# Clear old labels
	for child in kill_feed_container.get_children():
		child.queue_free()

	for item in kill_feed:
		var lbl = Label.new()
		lbl.text = item["killer"] + " убил " + item["victim"]
		lbl.add_theme_color_override("font_color", Color(1.0, 0.85, 0.3, 1.0))
		lbl.add_theme_font_size_override("font_size", 11)
		kill_feed_container.add_child(lbl)

func flash_level_up() -> void:
	flash_timer = 1.0
	level_up_flash.show()
	level_up_flash.modulate.a = 1.0

func _update_minimap(player) -> void:
	if minimap == null:
		return
	minimap.queue_redraw()

func _draw_minimap_content(player) -> void:
	pass  # Handled by Minimap node's _draw
