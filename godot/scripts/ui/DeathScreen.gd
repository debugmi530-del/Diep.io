extends Control
class_name DeathScreen

signal respawn_pressed

@onready var score_label: Label = $Panel/VBox/ScoreLabel
@onready var level_label: Label = $Panel/VBox/LevelLabel
@onready var respawn_btn: Button = $Panel/VBox/RespawnBtn
@onready var countdown_label: Label = $Panel/VBox/CountdownLabel

var respawn_countdown: float = 0.0
var can_respawn: bool = false

func _ready() -> void:
	hide()
	respawn_btn.pressed.connect(_on_respawn_pressed)

func show_death_screen(score: int, level: int) -> void:
	show()
	score_label.text = "Очки: " + _format_score(score)
	level_label.text = "Уровень: " + str(level)
	respawn_btn.disabled = true
	can_respawn = false
	respawn_countdown = 3.0
	countdown_label.text = "Возрождение через 3..."

func _process(delta: float) -> void:
	if not visible:
		return
	if not can_respawn:
		respawn_countdown -= delta
		if respawn_countdown <= 0.0:
			can_respawn = true
			respawn_btn.disabled = false
			countdown_label.text = ""
		else:
			countdown_label.text = "Возрождение через %d..." % ceili(respawn_countdown)

func _on_respawn_pressed() -> void:
	if can_respawn:
		hide()
		emit_signal("respawn_pressed")

func _format_score(score: int) -> String:
	if score >= 1000000:
		return "%.1fM" % (score / 1000000.0)
	elif score >= 1000:
		return "%.1fK" % (score / 1000.0)
	return str(score)
