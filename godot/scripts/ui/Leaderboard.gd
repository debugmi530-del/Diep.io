extends Control
class_name Leaderboard

@onready var container: VBoxContainer = $Panel/VBox/Rows
@onready var title: Label = $Panel/VBox/Title

func _ready() -> void:
	# Leaderboard is always visible (top-right)
	pass

func update_leaderboard(data: Array, player) -> void:
	if container == null:
		return

	# Clear old
	for child in container.get_children():
		child.queue_free()

	var top5 = data.slice(0, min(5, data.size()))
	var player_rank = -1
	for i in data.size():
		if data[i].get("is_player", false):
			player_rank = i
			break

	for i in top5.size():
		var entry = top5[i]
		var row = _make_row(i + 1, entry, entry.get("is_player", false), i == 0)
		container.add_child(row)

	# Show player rank if outside top 5
	if player_rank >= 5 and player_rank >= 0:
		var sep = HSeparator.new()
		sep.add_theme_constant_override("separation", 4)
		container.add_child(sep)
		var entry = data[player_rank]
		var row = _make_row(player_rank + 1, entry, true, false)
		container.add_child(row)

func _make_row(rank: int, entry: Dictionary, is_player: bool, is_first: bool) -> HBoxContainer:
	var row = HBoxContainer.new()
	row.add_theme_constant_override("separation", 4)

	var rank_col = Color("#ffe14d") if (is_first or is_player) else Color(1, 1, 1, 0.45)
	var name_col = Color("#ffe14d") if is_player else (
		Color("#ff9090") if entry.get("name") == "White Devil" else (
		Color("#cc88ff") if entry.get("name") == "SeraGON" else Color.WHITE
	))

	# Rank label
	var rank_lbl = Label.new()
	rank_lbl.text = str(rank) + "."
	rank_lbl.custom_minimum_size.x = 18
	rank_lbl.add_theme_font_size_override("font_size", 10)
	rank_lbl.add_theme_color_override("font_color", rank_col)
	row.add_child(rank_lbl)

	# Special prefix
	var name_prefix = ""
	if entry.get("name") in ["White Devil", "SeraGON"]:
		name_prefix = "★ "

	# Name label
	var name_lbl = Label.new()
	name_lbl.text = name_prefix + entry.get("name", "?")
	name_lbl.size_flags_horizontal = Control.SIZE_EXPAND_FILL
	name_lbl.clip_text = true
	name_lbl.custom_minimum_size.x = 80
	name_lbl.add_theme_font_size_override("font_size", 11)
	name_lbl.add_theme_color_override("font_color", name_col)
	if is_player or is_first or entry.get("name") in ["White Devil", "SeraGON"]:
		pass  # Bold would be ideal but requires font setup
	row.add_child(name_lbl)

	# Level
	var lv_lbl = Label.new()
	lv_lbl.text = "Lv" + str(entry.get("level", 1))
	lv_lbl.custom_minimum_size.x = 28
	lv_lbl.add_theme_font_size_override("font_size", 10)
	lv_lbl.add_theme_color_override("font_color", Color("#aaddff"))
	row.add_child(lv_lbl)

	# Score
	var score_col = Color("#ffe14d") if (is_first or is_player) else Color(0.8, 0.8, 0.85, 0.9)
	var score_lbl = Label.new()
	score_lbl.text = _format_score(entry.get("score", 0))
	score_lbl.custom_minimum_size.x = 45
	score_lbl.horizontal_alignment = HORIZONTAL_ALIGNMENT_RIGHT
	score_lbl.add_theme_font_size_override("font_size", 10)
	score_lbl.add_theme_color_override("font_color", score_col)
	row.add_child(score_lbl)

	return row

func _format_score(score: int) -> String:
	if score >= 1000000:
		return "%.1fM" % (score / 1000000.0)
	elif score >= 1000:
		return "%.1fK" % (score / 1000.0)
	return str(score)
