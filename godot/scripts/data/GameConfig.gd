extends Node

# World
const WORLD_SIZE := 16000.0
const GRID_CELL := 50.0

# Player
const BASE_SPEED := 220.0
const BASE_RADIUS := 22.0
const BASE_HP := 100.0
const BASE_BULLET_DAMAGE := 8.0
const BASE_BULLET_SPEED := 420.0
const BASE_RELOAD_TIME := 0.5

# XP / Levels
const XP_TABLE := [
	0, 55, 165, 295, 430, 590, 760, 940, 1130, 1330,
	1540, 1760, 1990, 2230, 2480, 2740, 3010, 3290, 3580, 3880,
	4190, 4510, 4840, 5180, 5530, 5890, 6260, 6640, 7030, 7430,
	7840, 8260, 8690, 9130, 9580, 10040, 10510, 10990, 11480, 11980,
	12490, 13010, 13540, 14080, 14630, 15190
]
const MAX_LEVEL := 45

# Upgrade levels
const UPGRADE_LEVELS := [15, 30, 45]

# Shapes XP values
const SHAPE_XP := {
	"square": 10,
	"triangle": 25,
	"mediumSquare": 40,
	"largeSquare": 120,
	"mediumTriangle": 80,
	"largeTriangle": 200,
	"pentagon": 130,
	"crasher": 25,
	"bigPentagon": 500,
	"alphaPentagon": 3000,
	"hexagon": 300,
	"heptagon": 600,
	"octagon": 1000,
	"decagon": 2500,
	"megaPentagon": 8000,
	"ultraPolygon": 20000,
	"legendShape": 100000
}

const SHAPE_HP := {
	"square": 10,
	"triangle": 12,
	"mediumSquare": 30,
	"largeSquare": 80,
	"mediumTriangle": 55,
	"largeTriangle": 140,
	"pentagon": 100,
	"crasher": 20,
	"bigPentagon": 360,
	"alphaPentagon": 3000,
	"hexagon": 200,
	"heptagon": 450,
	"octagon": 800,
	"decagon": 2000,
	"megaPentagon": 5000,
	"ultraPolygon": 15000,
	"legendShape": 10
}

const SHAPE_DAMAGE := {
	"square": 8, "triangle": 12, "mediumSquare": 20, "largeSquare": 50,
	"mediumTriangle": 35, "largeTriangle": 80, "pentagon": 50, "crasher": 30,
	"bigPentagon": 150, "alphaPentagon": 400, "hexagon": 80,
	"heptagon": 150, "octagon": 250, "decagon": 600,
	"megaPentagon": 1000, "ultraPolygon": 3000, "legendShape": 9999
}

const SHAPE_COLORS := {
	"square": Color("#f0dc40"), "triangle": Color("#f05050"),
	"mediumSquare": Color("#00ddcc"), "largeSquare": Color("#ff8800"),
	"mediumTriangle": Color("#ffcc00"), "largeTriangle": Color("#44cc44"),
	"pentagon": Color("#6088ff"), "crasher": Color("#ff66aa"),
	"bigPentagon": Color("#4466ff"), "alphaPentagon": Color("#aa44ff"),
	"hexagon": Color("#22ccaa"), "heptagon": Color("#ff4488"),
	"octagon": Color("#ff6622"), "decagon": Color("#aa2222"),
	"megaPentagon": Color("#2244cc"), "ultraPolygon": Color("#cc00ff"),
	"legendShape": Color("#ff2299")
}

const SHAPE_SIDES := {
	"square": 4, "triangle": 3, "mediumSquare": 4, "largeSquare": 4,
	"mediumTriangle": 3, "largeTriangle": 3, "pentagon": 5, "crasher": 3,
	"bigPentagon": 5, "alphaPentagon": 5, "hexagon": 6, "heptagon": 7,
	"octagon": 8, "decagon": 10, "megaPentagon": 5, "ultraPolygon": 12,
	"legendShape": 6
}

const SHAPE_RADII := {
	"square": 18, "triangle": 20, "mediumSquare": 28, "largeSquare": 45,
	"mediumTriangle": 32, "largeTriangle": 52, "pentagon": 36, "crasher": 16,
	"bigPentagon": 68, "alphaPentagon": 120, "hexagon": 44,
	"heptagon": 56, "octagon": 70, "decagon": 95,
	"megaPentagon": 160, "ultraPolygon": 240, "legendShape": 80
}

# Bot names
const BOT_NAMES := [
	"AlphaX", "Shadow", "Viper", "Storm", "Blaze", "Ghost", "Nova",
	"Titan", "Omega", "Raven", "Wolf", "Hawk", "Lynx", "Cobra",
	"Dragon", "Phoenix", "Eagle", "Bear", "Tiger", "Lion",
	"White Devil", "SeraGON", "DarkMatter", "Void", "Specter",
	"Reaper", "Hunter", "Crusher", "Destroyer", "Annihilator"
]

# Player colors
const PLAYER_COLORS := [
	Color("#4488ff"), Color("#ff4444"), Color("#44cc44"), Color("#ffcc00"),
	Color("#ff88ff"), Color("#00ccff"), Color("#ff8800"), Color("#88ff44"),
	Color("#ff4488"), Color("#44ffcc")
]

# Bot spawn config
const MAX_BOTS := 30
const BOT_RESPAWN_TIME := 3.0
const SHAPE_TARGET_COUNT := {
	"square": 120, "triangle": 60, "mediumSquare": 30,
	"largeSquare": 15, "mediumTriangle": 20, "largeTriangle": 10,
	"pentagon": 40, "crasher": 8, "bigPentagon": 5,
	"alphaPentagon": 1, "hexagon": 8, "heptagon": 4,
	"octagon": 2, "decagon": 1
}

static func xp_for_level(level: int) -> int:
	if level <= 0: return 0
	if level >= XP_TABLE.size(): return XP_TABLE[-1]
	return XP_TABLE[level]

static func level_for_xp(xp: int) -> int:
	for i in range(XP_TABLE.size() - 1, -1, -1):
		if xp >= XP_TABLE[i]:
			return i
	return 0
