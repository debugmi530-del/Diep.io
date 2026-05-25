extends Node

# Barrel definition helper
static func barrel(angle_offset: float, length: float, width: float,
		reload_mult: float = 1.0, size_mult: float = 1.0,
		speed_mult: float = 1.0, damage_mult: float = 1.0,
		spread: float = 0.0, lateral: float = 0.0,
		bullet_type: String = "normal") -> Dictionary:
	return {
		"angle_offset": angle_offset,
		"length": length,
		"width": width,
		"reload_multiplier": reload_mult,
		"bullet_size_multiplier": size_mult,
		"bullet_speed_multiplier": speed_mult,
		"bullet_damage_multiplier": damage_mult if damage_mult <= 1.0 else 1.0 + (damage_mult - 1.0) * 0.65,
		"spread": spread,
		"lateral_offset": lateral,
		"bullet_type": bullet_type
	}

const TANKS: Dictionary = {
	# ─── TIER 0 ─────────────────────────────────────────────────────────────
	"Basic": {
		"name": "Basic", "display_name": "Базовый", "required_level": 0,
		"upgrades_from": [], "color": "#8888cc",
		"description": "Один ствол, стандартный танк.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.0,
		"hp_multiplier": 1.0, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":0.0,"length":48.0,"width":14.0,"reload_multiplier":1.0,
			 "bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,
			 "bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},

	# ─── TIER 1 (Level 15) ──────────────────────────────────────────────────
	"Skirmisher": {
		"name": "Skirmisher", "display_name": "Стрелок", "required_level": 15,
		"upgrades_from": ["Basic"], "color": "#44aaff",
		"description": "Улучшенный базовый ствол, быстрее и точнее.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.08,
		"hp_multiplier": 1.1, "speed_multiplier": 1.05,
		"barrels": [
			{"angle_offset":0.0,"length":56.0,"width":14.0,"reload_multiplier":1.1,
			 "bullet_size_multiplier":1.1,"bullet_speed_multiplier":1.15,
			 "bullet_damage_multiplier":1.2,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Warlord": {
		"name": "Warlord", "display_name": "Воевода", "required_level": 15,
		"upgrades_from": ["Basic"], "color": "#aa4444",
		"description": "Увеличенный корпус, урон при таране.",
		"body_damage_multiplier": 2.0, "radius_multiplier": 1.25,
		"hp_multiplier": 1.3, "speed_multiplier": 0.95,
		"barrels": [
			{"angle_offset":0.0,"length":44.0,"width":16.0,"reload_multiplier":0.9,
			 "bullet_size_multiplier":1.2,"bullet_speed_multiplier":0.9,
			 "bullet_damage_multiplier":1.1,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Sniper": {
		"name": "Sniper", "display_name": "Снайпер", "required_level": 15,
		"upgrades_from": ["Basic"], "color": "#45b84e",
		"description": "Дальний точный огонь.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.0,
		"hp_multiplier": 0.9, "speed_multiplier": 1.2,
		"barrels": [
			{"angle_offset":0.0,"length":72.0,"width":10.0,"reload_multiplier":2.2,
			 "bullet_size_multiplier":0.75,"bullet_speed_multiplier":2.1,
			 "bullet_damage_multiplier":1.8,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Twin": {
		"name": "Twin", "display_name": "Близнец", "required_level": 15,
		"upgrades_from": ["Basic"], "color": "#e88018",
		"description": "Двойной пулемёт.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.05,
		"hp_multiplier": 1.0, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":0.0,"length":48.0,"width":14.0,"reload_multiplier":1.0,
			 "bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,
			 "bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":-9.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":48.0,"width":14.0,"reload_multiplier":1.0,
			 "bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,
			 "bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":9.0,"bullet_type":"normal"}
		]
	},
	"Shotgun": {
		"name": "Shotgun", "display_name": "Дробовик", "required_level": 15,
		"upgrades_from": ["Skirmisher"], "color": "#22cc55",
		"description": "Широкий залп дроби — сметает всё вблизи.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.21,
		"hp_multiplier": 1.1, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":-0.45,"length":38.0,"width":11.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.95,"bullet_speed_multiplier":0.92,"bullet_damage_multiplier":0.75,"spread":0.18,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":-0.22,"length":44.0,"width":13.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.92,"bullet_damage_multiplier":0.85,"spread":0.15,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":48.0,"width":15.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.92,"bullet_damage_multiplier":0.9,"spread":0.12,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.22,"length":44.0,"width":13.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.92,"bullet_damage_multiplier":0.85,"spread":0.15,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.45,"length":38.0,"width":11.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.95,"bullet_speed_multiplier":0.92,"bullet_damage_multiplier":0.75,"spread":0.18,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Dreadnought": {
		"name": "Dreadnought", "display_name": "Дредноут", "required_level": 15,
		"upgrades_from": ["Warlord"], "color": "#607880",
		"description": "Один колоссальный снаряд — пробивает насквозь.",
		"is_piercing": true,
		"body_damage_multiplier": 1.3, "radius_multiplier": 1.19,
		"hp_multiplier": 1.2, "speed_multiplier": 0.9,
		"barrels": [
			{"angle_offset":0.0,"length":56.0,"width":28.0,"reload_multiplier":1.0,
			 "bullet_size_multiplier":0.6,"bullet_speed_multiplier":2.0,
			 "bullet_damage_multiplier":3.5,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},

	# ─── TIER 2 (Level 30) ──────────────────────────────────────────────────
	"Blaster": {
		"name": "Blaster", "display_name": "Бластер", "required_level": 30,
		"upgrades_from": ["Shotgun"], "color": "#ffdd00",
		"description": "Веер из 7 стволов — сплошная стена пуль.",
		"body_damage_multiplier": 0.85, "radius_multiplier": 1.35,
		"hp_multiplier": 1.2, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":-0.55,"length":34.0,"width":10.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.95,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.65,"spread":0.22,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":-0.33,"length":38.0,"width":12.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.75,"spread":0.18,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":-0.11,"length":42.0,"width":13.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.82,"spread":0.14,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":44.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.85,"spread":0.12,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.11,"length":42.0,"width":13.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.82,"spread":0.14,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.33,"length":38.0,"width":12.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.75,"spread":0.18,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.55,"length":34.0,"width":10.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.95,"bullet_speed_multiplier":0.88,"bullet_damage_multiplier":0.65,"spread":0.22,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Buster": {
		"name": "Buster", "display_name": "Сокрушитель", "required_level": 30,
		"upgrades_from": ["Shotgun"], "color": "#ffdd00",
		"description": "Два тяжёлых ствола — сокрушительный двойной удар.",
		"body_damage_multiplier": 1.1, "radius_multiplier": 1.38,
		"hp_multiplier": 1.3, "speed_multiplier": 0.95,
		"barrels": [
			{"angle_offset":-0.18,"length":48.0,"width":20.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.7,"bullet_speed_multiplier":1.4,"bullet_damage_multiplier":2.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.18,"length":48.0,"width":20.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.7,"bullet_speed_multiplier":1.4,"bullet_damage_multiplier":2.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Riot": {
		"name": "Riot", "display_name": "Буря", "required_level": 30,
		"upgrades_from": ["Shotgun"], "color": "#ffdd00",
		"description": "Четыре ствола крестом — огонь во все стороны.",
		"body_damage_multiplier": 0.9, "radius_multiplier": 1.33,
		"hp_multiplier": 1.1, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":0.0,"length":44.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.95,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":1.5708,"length":44.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.95,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":3.1416,"length":44.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.95,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":-1.5708,"length":44.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":0.95,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Colossus": {
		"name": "Colossus", "display_name": "Колосс", "required_level": 30,
		"upgrades_from": ["Dreadnought"], "color": "#405060",
		"description": "Пушка-гигант + два задних — тяжёлый ударный крейсер.",
		"is_piercing": true,
		"body_damage_multiplier": 1.2, "radius_multiplier": 1.37,
		"hp_multiplier": 1.4, "speed_multiplier": 0.85,
		"barrels": [
			{"angle_offset":0.0,"length":56.0,"width":32.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.55,"bullet_speed_multiplier":1.9,"bullet_damage_multiplier":3.8,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":3.1416 + 0.22,"length":30.0,"width":11.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.8,"bullet_speed_multiplier":0.9,"bullet_damage_multiplier":0.7,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":3.1416 - 0.22,"length":30.0,"width":11.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.8,"bullet_speed_multiplier":0.9,"bullet_damage_multiplier":0.7,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Cruiser": {
		"name": "Cruiser", "display_name": "Крейсер", "required_level": 30,
		"upgrades_from": ["Dreadnought"], "color": "#5070a0",
		"description": "Два больших смещённых ствола — крейсер двойного огня.",
		"body_damage_multiplier": 1.1, "radius_multiplier": 1.35,
		"hp_multiplier": 1.25, "speed_multiplier": 0.9,
		"barrels": [
			{"angle_offset":-0.1,"length":52.0,"width":24.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.58,"bullet_speed_multiplier":1.5,"bullet_damage_multiplier":2.8,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.1,"length":52.0,"width":24.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.58,"bullet_speed_multiplier":1.5,"bullet_damage_multiplier":2.8,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Brawler": {
		"name": "Brawler", "display_name": "Громила", "required_level": 30,
		"upgrades_from": ["Dreadnought"], "color": "#708040",
		"description": "Три ствола — вперёд и по бокам, мастер ближнего боя.",
		"body_damage_multiplier": 2.5, "radius_multiplier": 1.39,
		"hp_multiplier": 1.35, "speed_multiplier": 1.05,
		"barrels": [
			{"angle_offset":0.0,"length":48.0,"width":20.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.3,"bullet_damage_multiplier":2.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":1.5708,"length":34.0,"width":13.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.1,"bullet_damage_multiplier":1.2,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":-1.5708,"length":34.0,"width":13.0,"reload_multiplier":1.0,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.1,"bullet_damage_multiplier":1.2,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},

	# ─── EXTRA TANKS (from tank-builder templates) ───────────────────────────
	"Triplet": {
		"name": "Triplet", "display_name": "Триплет", "required_level": 30,
		"upgrades_from": ["Twin"], "color": "#4488ee",
		"description": "Три ствола веером — плотный фронтальный огонь.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.15,
		"hp_multiplier": 1.1, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":-0.18,"length":48.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":56.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.1,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":0.18,"length":48.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Overlord": {
		"name": "Overlord", "display_name": "Оверлорд", "required_level": 30,
		"upgrades_from": ["Twin"], "color": "#9944cc",
		"description": "Четыре ствола крестом — рой дронов.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.2,
		"hp_multiplier": 1.1, "speed_multiplier": 0.9,
		"barrels": [
			{"angle_offset":0.0,"length":44.0,"width":16.0,"reload_multiplier":1.5,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"drone"},
			{"angle_offset":1.5708,"length":44.0,"width":16.0,"reload_multiplier":1.5,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"drone"},
			{"angle_offset":3.1416,"length":44.0,"width":16.0,"reload_multiplier":1.5,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"drone"},
			{"angle_offset":-1.5708,"length":44.0,"width":16.0,"reload_multiplier":1.5,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"drone"}
		]
	},
	"Cannon": {
		"name": "Cannon", "display_name": "Миномёт", "required_level": 30,
		"upgrades_from": ["Sniper"], "color": "#e09020",
		"description": "Мощный одиночный выстрел.",
		"body_damage_multiplier": 1.2, "radius_multiplier": 1.25,
		"hp_multiplier": 1.5, "speed_multiplier": 0.8,
		"barrels": [
			{"angle_offset":0.0,"length":56.0,"width":28.0,"reload_multiplier":2.8,"bullet_size_multiplier":2.2,"bullet_speed_multiplier":0.95,"bullet_damage_multiplier":3.5,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Miner": {
		"name": "Miner", "display_name": "Минёр", "required_level": 30,
		"upgrades_from": ["Sniper"], "color": "#e8a000",
		"description": "Стреляет вперёд, разбрасывает мины назад.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.1,
		"hp_multiplier": 1.0, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":0.0,"length":48.0,"width":14.0,"reload_multiplier":1.0,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":3.1416,"length":40.0,"width":12.0,"reload_multiplier":1.2,"bullet_size_multiplier":1.3,"bullet_speed_multiplier":0.3,"bullet_damage_multiplier":1.2,"spread":0.0,"lateral_offset":0.0,"bullet_type":"trap"}
		]
	},
	"Droner": {
		"name": "Droner", "display_name": "Дронер", "required_level": 30,
		"upgrades_from": ["Twin"], "color": "#4aa87c",
		"description": "Выпускает дронов-снарядов.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.15,
		"hp_multiplier": 1.2, "speed_multiplier": 0.9,
		"barrels": [
			{"angle_offset":0.0,"length":48.0,"width":14.0,"reload_multiplier":1.5,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"drone"},
			{"angle_offset":3.1416,"length":48.0,"width":14.0,"reload_multiplier":1.5,"bullet_size_multiplier":1.0,"bullet_speed_multiplier":1.0,"bullet_damage_multiplier":1.0,"spread":0.0,"lateral_offset":0.0,"bullet_type":"drone"}
		]
	},
	"Rocket": {
		"name": "Rocket", "display_name": "Ракетчик", "required_level": 30,
		"upgrades_from": ["Sniper"], "color": "#cc4444",
		"description": "Запускает управляемые ракеты.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.1,
		"hp_multiplier": 1.0, "speed_multiplier": 1.0,
		"barrels": [
			{"angle_offset":0.0,"length":72.0,"width":10.0,"reload_multiplier":2.0,"bullet_size_multiplier":1.2,"bullet_speed_multiplier":1.8,"bullet_damage_multiplier":2.2,"spread":0.0,"lateral_offset":0.0,"bullet_type":"homing"}
		]
	},
	"Smasher": {
		"name": "Smasher", "display_name": "Смэшер", "required_level": 30,
		"upgrades_from": ["Warlord"], "color": "#888888",
		"description": "Огромный корпус, урон при столкновении.",
		"body_damage_multiplier": 5.0, "radius_multiplier": 1.6,
		"hp_multiplier": 2.0, "speed_multiplier": 1.1,
		"barrels": []
	},
	"Spinner": {
		"name": "Spinner", "display_name": "Спиннер", "required_level": 15,
		"upgrades_from": ["Basic"], "color": "#9050c0",
		"description": "360° веер стволов.",
		"body_damage_multiplier": 1.0, "radius_multiplier": 1.1,
		"hp_multiplier": 1.0, "speed_multiplier": 1.0,
		"auto_spin": true,
		"barrels": [
			{"angle_offset":0.0,"length":30.0,"width":9.0,"reload_multiplier":0.55,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.6,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":1.5708,"length":30.0,"width":9.0,"reload_multiplier":0.55,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.6,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":3.1416,"length":30.0,"width":9.0,"reload_multiplier":0.55,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.6,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"},
			{"angle_offset":-1.5708,"length":30.0,"width":9.0,"reload_multiplier":0.55,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.6,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	},
	"Sprayer": {
		"name": "Sprayer", "display_name": "Спрейер", "required_level": 30,
		"upgrades_from": ["Twin"], "color": "#44ccaa",
		"description": "Пять мини-стволов в ряд — непрерывный поток.",
		"body_damage_multiplier": 0.9, "radius_multiplier": 1.2,
		"hp_multiplier": 0.9, "speed_multiplier": 1.1,
		"barrels": [
			{"angle_offset":0.0,"length":30.0,"width":9.0,"reload_multiplier":0.4,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.55,"spread":0.0,"lateral_offset":-12.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":30.0,"width":9.0,"reload_multiplier":0.4,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.55,"spread":0.0,"lateral_offset":-4.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":30.0,"width":9.0,"reload_multiplier":0.4,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.55,"spread":0.0,"lateral_offset":4.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":30.0,"width":9.0,"reload_multiplier":0.4,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.55,"spread":0.0,"lateral_offset":12.0,"bullet_type":"normal"},
			{"angle_offset":0.0,"length":30.0,"width":9.0,"reload_multiplier":0.4,"bullet_size_multiplier":0.65,"bullet_speed_multiplier":1.2,"bullet_damage_multiplier":0.55,"spread":0.0,"lateral_offset":0.0,"bullet_type":"normal"}
		]
	}
}

static func get_tank(class_name_: String) -> Dictionary:
	return TANKS.get(class_name_, TANKS["Basic"])

static func get_upgrades_for(class_name_: String) -> Array:
	var result := []
	for key in TANKS:
		var t = TANKS[key]
		if class_name_ in t.get("upgrades_from", []):
			result.append(key)
	return result

static func get_all_class_names() -> Array:
	return TANKS.keys()

static func get_display_name(class_name_: String) -> String:
	return TANKS.get(class_name_, {}).get("display_name", class_name_)
