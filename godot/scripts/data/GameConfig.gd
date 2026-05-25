extends Node
## GameConfig — singleton (autoload)
## All constants match the original game.js exactly.

# ── World ─────────────────────────────────────────────────────────────────────
const WORLD_SIZE := 16000.0
const GRID_CELL  := 50.0

# ── Base tank stats ───────────────────────────────────────────────────────────
# Oc=80, V0=750 (canvas px/s → scaled ~0.29 for Godot units), base radius ~22
const BASE_HP           := 80.0
const BASE_SPEED        := 220.0   # 750 canvas → ~220 Godot units/s
const BASE_RADIUS       := 22.0
const BASE_BODY_DAMAGE  := 8.0
const BASE_BULLET_DAMAGE:= 8.0
const BASE_BULLET_SPEED := 420.0
const BASE_RELOAD_TIME  := 0.50    # seconds between shots per barrel

# ── HP regen ──────────────────────────────────────────────────────────────────
const HP_REGEN_RATE  := 0.012   # fraction of max HP per second
const HP_REGEN_DELAY := 2.5     # seconds after last hit before regen starts

# ── Upgrade XP thresholds — Ou=[812,2275,3737] from original game.js exactly ──
# Only 3 thresholds: tier1@L5, tier2@L15, tier3@L30. L45/L60 use requiredLevel on tank.
const UPGRADE_XP := [812, 2275, 3737]
# Corresponding level gates (used for upgrade UI labels)
const UPGRADE_LEVELS := [5, 15, 30, 45]

# ── Level system (XP for each cumulative level, derived from original) ────────
# Ou[0]=812→L5, Ou[1]=2275→L15, Ou[2]=3737→L30. L45/L60 continue exponential.
const XP_TABLE: Array = [
        0, 40, 100, 175, 280, 430,          # levels 0-5
        610, 820, 1070, 1360, 1700,          # levels 6-10
        2090, 2540, 2980, 3200, 3600,        # levels 11-15
        4050, 4540, 5070, 5640, 6260,        # levels 16-20
        6940, 7680, 8490, 9380, 10360,       # levels 21-25
        11440, 12640, 13980, 15480, 17170,   # levels 26-30
        19070, 21210, 23620, 26340, 29420,   # levels 31-35
        32900, 36840, 41310, 46400, 52200,   # levels 36-40
        58850, 66520, 75420, 85840, 98200,   # levels 41-45
        111500, 126500, 143500, 163000, 185500, # levels 46-50
        211000, 241000, 276000, 316500, 364000, # levels 51-55
        420000, 486000, 564000, 656000, 765000  # levels 56-60
]
const MAX_LEVEL := 60

# ── Shape data (values from original game.js) ─────────────────────────────────
const SHAPE_SIDES := {
        "square":4,"triangle":3,"mediumSquare":4,"largeSquare":4,
        "mediumTriangle":3,"largeTriangle":3,"pentagon":5,"crasher":3,
        "bigPentagon":5,"alphaPentagon":5,"hexagon":6,"heptagon":7,
        "octagon":8,"decagon":10,"megaPentagon":5,"ultraPolygon":12,
        "legendShape":6
}
const SHAPE_RADII := {
        "square":18,"triangle":20,"mediumSquare":28,"largeSquare":45,
        "mediumTriangle":32,"largeTriangle":52,"pentagon":30,"crasher":14,
        "bigPentagon":52,"alphaPentagon":80,"hexagon":44,"heptagon":56,
        "octagon":70,"decagon":95,"megaPentagon":120,"ultraPolygon":200,
        "legendShape":80
}
const SHAPE_HP := {
        "square":13,"triangle":26,"mediumSquare":40,"largeSquare":100,
        "mediumTriangle":60,"largeTriangle":150,"pentagon":130,"crasher":20,
        "bigPentagon":400,"alphaPentagon":910,"hexagon":240,"heptagon":550,
        "octagon":900,"decagon":2200,"megaPentagon":1950,"ultraPolygon":8000,
        "legendShape":15
}
const SHAPE_DAMAGE := {
        "square":8,"triangle":12,"mediumSquare":20,"largeSquare":50,
        "mediumTriangle":35,"largeTriangle":80,"pentagon":18,"crasher":20,
        "bigPentagon":80,"alphaPentagon":40,"hexagon":70,"heptagon":150,
        "octagon":250,"decagon":600,"megaPentagon":60,"ultraPolygon":200,
        "legendShape":9999
}
const SHAPE_XP := {
        "square":43,"triangle":107,"mediumSquare":80,"largeSquare":300,
        "mediumTriangle":200,"largeTriangle":500,"pentagon":558,"crasher":150,
        "bigPentagon":2000,"alphaPentagon":1072,"hexagon":1500,"heptagon":3000,
        "octagon":5500,"decagon":12000,"megaPentagon":6435,"ultraPolygon":143000,
        "legendShape":500000
}
const SHAPE_COLORS := {
        "square":Color("#f0dc40"),"triangle":Color("#f05050"),
        "mediumSquare":Color("#00ddcc"),"largeSquare":Color("#ff8800"),
        "mediumTriangle":Color("#ffcc00"),"largeTriangle":Color("#44cc44"),
        "pentagon":Color("#6088ff"),"crasher":Color("#ff66aa"),
        "bigPentagon":Color("#4466ff"),"alphaPentagon":Color("#aa44ff"),
        "hexagon":Color("#22ccaa"),"heptagon":Color("#ff4488"),
        "octagon":Color("#ff6622"),"decagon":Color("#aa2222"),
        "megaPentagon":Color("#2244cc"),"ultraPolygon":Color("#cc00ff"),
        "legendShape":Color("#ff2299")
}

# ── Shape target counts ────────────────────────────────────────────────────────
const SHAPE_TARGET_COUNT := {
        "square":120,"triangle":60,"mediumSquare":30,"largeSquare":15,
        "mediumTriangle":20,"largeTriangle":10,"pentagon":40,"crasher":8,
        "bigPentagon":5,"alphaPentagon":1,"hexagon":8,"heptagon":4,
        "octagon":2,"decagon":1
}

# ── Bots ───────────────────────────────────────────────────────────────────────
const MAX_BOTS := 30
const BOT_RESPAWN_TIME := 3.0
const BOT_NAMES := [
        "AlphaX","Shadow","Viper","Storm","Blaze","Ghost","Nova","Titan","Omega",
        "Raven","Wolf","Hawk","Lynx","Cobra","Dragon","Phoenix","Eagle","Bear",
        "Tiger","Lion","White Devil","SeraGON","DarkMatter","Void","Specter",
        "Reaper","Hunter","Crusher","Destroyer","Annihilator","Sentinel","Phantom",
        "Ironclad","Warlord","Dreadnought","Colossus","Overlord","Necromancer",
        "Bloodlust","Maelstrom","Cyclone","Nova","Eclipse","Harbinger","Golem"
]

# ── Player colors ──────────────────────────────────────────────────────────────
const PLAYER_COLORS := [
        Color("#4488ff"),Color("#ff4444"),Color("#44cc44"),Color("#ffcc00"),
        Color("#ff88ff"),Color("#00ccff"),Color("#ff8800"),Color("#88ff44"),
        Color("#ff4488"),Color("#44ffcc"),Color("#9944cc"),Color("#44ccff")
]

# ── Upgrade tier colors — K0 from original game.js exactly ────────────────────
# K0={0:"#44aaff",1:"#e0e0e0",2:"#22cc55",3:"#ffdd00",4:"#ff8800",5:"#ff3333"}
# xy={0:"Синий·Ур.1", 1:"Белый·Ур.5", 2:"Зелёный·Ур.15", 3:"Жёлтый·Ур.30",
#     4:"Оранжевый·Ур.45", 5:"Красный·Ур.60"}
const TIER_COLORS := {
        0: Color("#44aaff"),   # T0 Level  1 — blue   (Basic)
        1: Color("#e0e0e0"),   # T1 Level  5 — white  (Assault / Skirmisher / Warlord / Alchemist / Warlock)
        2: Color("#22cc55"),   # T2 Level 15 — green
        3: Color("#ffdd00"),   # T3 Level 30 — yellow
        4: Color("#ff8800"),   # T4 Level 45 — orange
        5: Color("#ff3333")    # T5 Level 60 — red
}

# ── Utility functions ──────────────────────────────────────────────────────────
static func xp_for_level(level: int) -> int:
        level = clampi(level, 0, MAX_LEVEL)
        if level < XP_TABLE.size():
                return XP_TABLE[level]
        return XP_TABLE[-1]

static func level_for_xp(xp: int) -> int:
        for i in range(XP_TABLE.size() - 1, -1, -1):
                if xp >= XP_TABLE[i]:
                        return i
        return 0

static func get_upgrade_tier(xp: int) -> int:
        ## Returns which upgrade tier has just been reached (0 = none, 1-4 = tiers).
        for i in range(UPGRADE_XP.size() - 1, -1, -1):
                if xp >= UPGRADE_XP[i]:
                        return i + 1
        return 0
