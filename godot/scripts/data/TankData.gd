extends Node
## TankData — singleton (autoload)
## Full tank registry ported from original game.js.
## All barrel data (angle, length, width, reload, size, speed, damage) matches original.
## bullet_damage_multiplier > 1 is scaled: 1 + (val-1)*0.65 (original game mechanic)

# ── Helper ────────────────────────────────────────────────────────────────────
static func B(ao:float,ln:float,wd:float,rl:float=1.0,bsm:float=1.0,
              bsp:float=1.0,bdm:float=1.0,sp:float=0.0,lat:float=0.0) -> Dictionary:
	var dm = bdm if bdm <= 1.0 else 1.0 + (bdm - 1.0) * 0.65
	return {"ao":ao,"len":ln,"wd":wd,"rl":rl,"bsm":bsm,"bsp":bsp,"bdm":dm,"sp":sp,"lat":lat}

# ── Full tank registry ────────────────────────────────────────────────────────
const TANKS: Dictionary = {

# ═════════════════════════════════════════════════════════════════════════════
# TIER 0
# ═════════════════════════════════════════════════════════════════════════════
"Basic": {
	"display":"Базовый","required_level":0,"upgrades_from":[],"color":"#8888cc",
	"radius_mult":1.0,"body_dmg_mult":1.0,
	"barrels":[]  # filled below via _init_barrels
},

# ═════════════════════════════════════════════════════════════════════════════
# TIER 1 — Level 5, from Basic
# ═════════════════════════════════════════════════════════════════════════════
"Assault": {
	"display":"Боевик","required_level":5,"upgrades_from":["Basic"],"color":"#e0e0e0",
	"radius_mult":1.13,"body_dmg_mult":1.0,
},
"Skirmisher": {
	"display":"Стрелок","required_level":5,"upgrades_from":["Basic"],"color":"#e0e0e0",
	"radius_mult":1.08,"body_dmg_mult":1.0,
},
"Warlord": {
	"display":"Воевода","required_level":5,"upgrades_from":["Basic"],"color":"#e0e0e0",
	"radius_mult":1.15,"body_dmg_mult":1.3,
},
"Alchemist": {
	"display":"Алхимик","required_level":5,"upgrades_from":["Basic"],"color":"#e0e0e0",
	"radius_mult":1.13,"body_dmg_mult":1.0,
},
"Warlock": {
	"display":"Чернокнижник","required_level":5,"upgrades_from":["Basic"],"color":"#e0e0e0",
	"radius_mult":1.12,"body_dmg_mult":1.0,
},

# ═════════════════════════════════════════════════════════════════════════════
# TIER 2 — Level 15
# ═════════════════════════════════════════════════════════════════════════════

# — from Assault —
"Sniper": {
	"display":"Снайпер","required_level":15,"upgrades_from":["Assault"],"color":"#22cc55",
	"radius_mult":1.19,"body_dmg_mult":1.0,
},
"MachineGun": {
	"display":"Пулемёт","required_level":15,"upgrades_from":["Assault"],"color":"#22cc55",
	"radius_mult":1.21,"body_dmg_mult":1.0,
},
"FlankGuard": {
	"display":"Защита фланга","required_level":15,"upgrades_from":["Assault"],"color":"#22cc55",
	"radius_mult":1.15,"body_dmg_mult":1.0,
},

# — from Skirmisher —
"Scout": {
	"display":"Разведчик","required_level":15,"upgrades_from":["Skirmisher"],"color":"#22cc55",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_invis":false,
},
"Shotgun": {
	"display":"Дробовик","required_level":15,"upgrades_from":["Skirmisher"],"color":"#22cc55",
	"radius_mult":1.21,"body_dmg_mult":1.0,
},
"Cannon": {
	"display":"Пушкарь","required_level":15,"upgrades_from":["Skirmisher"],"color":"#22cc55",
	"radius_mult":1.2,"body_dmg_mult":1.1,
},

# — from Warlord —
"Dreadnought": {
	"display":"Дредноут","required_level":15,"upgrades_from":["Warlord"],"color":"#22cc55",
	"radius_mult":1.19,"body_dmg_mult":1.3,"is_piercing":true,
},
"Engineer": {
	"display":"Инженер","required_level":15,"upgrades_from":["Warlord"],"color":"#22cc55",
	"radius_mult":1.24,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":5,
},
"Defender": {
	"display":"Защитник","required_level":15,"upgrades_from":["Warlord"],"color":"#22cc55",
	"radius_mult":1.40,"body_dmg_mult":2.0,
},

# — from Alchemist —
"Splitter": {
	"display":"Раздробитель","required_level":15,"upgrades_from":["Alchemist"],"color":"#22cc55",
	"radius_mult":1.2,"body_dmg_mult":1.0,"is_splitting":true,
},
"Detonator": {
	"display":"Разрывник","required_level":15,"upgrades_from":["Alchemist"],"color":"#22cc55",
	"radius_mult":1.24,"body_dmg_mult":1.0,"is_sticky":true,
},
"Marksman": {
	"display":"Меткий стрелок","required_level":15,"upgrades_from":["Alchemist"],"color":"#22cc55",
	"radius_mult":1.22,"body_dmg_mult":1.0,"is_range_boost":true,
},

# — from Warlock —
"Vampire": {
	"display":"Вампир","required_level":15,"upgrades_from":["Warlock"],"color":"#22cc55",
	"radius_mult":1.15,"body_dmg_mult":1.3,"is_vampire":true,
},
"Chainshot": {
	"display":"Цепной","required_level":15,"upgrades_from":["Warlock"],"color":"#22cc55",
	"radius_mult":1.25,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"Turret": {
	"display":"Турельщик","required_level":15,"upgrades_from":["Warlock"],"color":"#22cc55",
	"radius_mult":1.3,"body_dmg_mult":1.0,"is_turret_deployer":true,
	"max_turrets":3,"turret_fire_rate":55,"turret_health":90,"turret_lifetime":700,
	"turret_bullet_damage":9,"turret_bullet_speed":8.5,"turret_bullet_radius":7,
},

# ═════════════════════════════════════════════════════════════════════════════
# TIER 3 — Level 30
# ═════════════════════════════════════════════════════════════════════════════

# — from Sniper —
"Assassin": {
	"display":"Убийца","required_level":30,"upgrades_from":["Sniper"],"color":"#ffdd00",
	"radius_mult":1.34,"body_dmg_mult":1.0,"is_invis":true,
},
"Hunter": {
	"display":"Охотник","required_level":30,"upgrades_from":["Sniper"],"color":"#ffdd00",
	"radius_mult":1.3,"body_dmg_mult":1.0,
},
"Stalker": {
	"display":"Преследователь","required_level":30,"upgrades_from":["Sniper"],"color":"#ffdd00",
	"radius_mult":1.35,"body_dmg_mult":1.0,
},

# — from MachineGun —
"Gunner": {
	"display":"Стрелок","required_level":30,"upgrades_from":["MachineGun"],"color":"#ffdd00",
	"radius_mult":1.3,"body_dmg_mult":1.0,
},
"Sprayer": {
	"display":"Шквал","required_level":30,"upgrades_from":["MachineGun"],"color":"#ffdd00",
	"radius_mult":1.3,"body_dmg_mult":1.0,
},
"TripleShot": {
	"display":"Тройной залп","required_level":30,"upgrades_from":["MachineGun"],"color":"#ffdd00",
	"radius_mult":1.34,"body_dmg_mult":1.0,
},

# — from FlankGuard —
"Twin": {
	"display":"Близнец","required_level":30,"upgrades_from":["FlankGuard"],"color":"#ffdd00",
	"radius_mult":1.2,"body_dmg_mult":1.0,
},
"QuadTank": {
	"display":"Квад-танк","required_level":30,"upgrades_from":["FlankGuard"],"color":"#ffdd00",
	"radius_mult":1.28,"body_dmg_mult":1.0,
},
"Smasher": {
	"display":"Сокрушитель","required_level":30,"upgrades_from":["FlankGuard"],"color":"#888888",
	"radius_mult":1.6,"body_dmg_mult":5.0,"no_barrels":true,
},

# — from Scout —
"Ninja": {
	"display":"Ниндзя","required_level":30,"upgrades_from":["Scout"],"color":"#ffdd00",
	"radius_mult":1.3,"body_dmg_mult":1.0,"is_invis":true,
},
"ScoutGhost": {
	"display":"Призрак-разведчик","required_level":30,"upgrades_from":["Scout"],"color":"#ffdd00",
	"radius_mult":1.58,"body_dmg_mult":8.0,"is_invis":true,"no_barrels":true,"drone_hits":14,
},
"Drone": {
	"display":"Дрон","required_level":30,"upgrades_from":["Scout"],"color":"#ffdd00",
	"radius_mult":1.36,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":6,
},

# — from Shotgun —
"Blaster": {
	"display":"Бластер","required_level":30,"upgrades_from":["Shotgun"],"color":"#ffdd00",
	"radius_mult":1.35,"body_dmg_mult":0.85,
},
"Buster": {
	"display":"Разрушитель","required_level":30,"upgrades_from":["Shotgun"],"color":"#ffdd00",
	"radius_mult":1.38,"body_dmg_mult":1.1,
},
"Riot": {
	"display":"Мятеж","required_level":30,"upgrades_from":["Shotgun"],"color":"#ffdd00",
	"radius_mult":1.33,"body_dmg_mult":0.9,
},

# — from Cannon —
"HeavyCannon": {
	"display":"Тяжёлая пушка","required_level":30,"upgrades_from":["Cannon"],"color":"#ffdd00",
	"radius_mult":1.35,"body_dmg_mult":1.3,"is_range_boost":true,
},
"BurstRifle": {
	"display":"Скорострельная винтовка","required_level":30,"upgrades_from":["Cannon"],"color":"#ffdd00",
	"radius_mult":1.3,"body_dmg_mult":1.0,"is_range_boost":true,
},
"LongRange": {
	"display":"Дальнобой","required_level":30,"upgrades_from":["Marksman"],"color":"#ffdd00",
	"radius_mult":1.38,"body_dmg_mult":1.0,"is_range_boost":true,
},

# — from Dreadnought —
"Colossus": {
	"display":"Колосс","required_level":30,"upgrades_from":["Dreadnought"],"color":"#ffdd00",
	"radius_mult":1.37,"body_dmg_mult":1.2,"is_piercing":true,
},
"Cruiser": {
	"display":"Крейсер","required_level":30,"upgrades_from":["Dreadnought"],"color":"#ffdd00",
	"radius_mult":1.35,"body_dmg_mult":1.1,
},
"Brawler": {
	"display":"Громила","required_level":30,"upgrades_from":["Dreadnought"],"color":"#ffdd00",
	"radius_mult":1.39,"body_dmg_mult":2.5,
},

# — from Engineer —
"Overseer": {
	"display":"Надзиратель","required_level":30,"upgrades_from":["Engineer"],"color":"#ffdd00",
	"radius_mult":1.39,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":7,
},
"Architect": {
	"display":"Архитектор","required_level":30,"upgrades_from":["Engineer"],"color":"#ffdd00",
	"radius_mult":1.4,"body_dmg_mult":1.0,
},
"Commander": {
	"display":"Командир","required_level":30,"upgrades_from":["Engineer"],"color":"#ffdd00",
	"radius_mult":1.39,"body_dmg_mult":1.8,"is_drone_shooter":true,"drone_hits":8,
},

# — from Defender —
"Protector": {
	"display":"Защитник+","required_level":30,"upgrades_from":["Defender"],"color":"#ffdd00",
	"radius_mult":1.50,"body_dmg_mult":2.8,
},
"Stronghold": {
	"display":"Крепость","required_level":30,"upgrades_from":["Defender"],"color":"#ffdd00",
	"radius_mult":1.50,"body_dmg_mult":2.5,
},
"Rampart": {
	"display":"Вал","required_level":30,"upgrades_from":["Defender"],"color":"#ffdd00",
	"radius_mult":1.55,"body_dmg_mult":4.0,
},

# — from Splitter —
"Fragmenter": {
	"display":"Фрагментатор","required_level":30,"upgrades_from":["Splitter"],"color":"#ffdd00",
	"radius_mult":1.38,"body_dmg_mult":1.0,"is_splitting":true,
},
"ScatterShot": {
	"display":"Рассеиватель","required_level":30,"upgrades_from":["Splitter"],"color":"#ffdd00",
	"radius_mult":1.38,"body_dmg_mult":1.0,"is_splitting":true,
},
"SplitMirror": {
	"display":"Зеркало","required_level":30,"upgrades_from":["Splitter"],"color":"#ffdd00",
	"radius_mult":1.36,"body_dmg_mult":1.0,"is_splitting":true,
},

# — from Detonator —
"Primer": {
	"display":"Взрыватель","required_level":30,"upgrades_from":["Detonator"],"color":"#ffdd00",
	"radius_mult":1.31,"body_dmg_mult":1.0,"is_sticky":true,
},
"MegaBomb": {
	"display":"Мегабомба","required_level":30,"upgrades_from":["Detonator"],"color":"#ffdd00",
	"radius_mult":1.38,"body_dmg_mult":1.0,"is_bomb":true,
},
"DoubleBomb": {
	"display":"Двойная бомба","required_level":30,"upgrades_from":["Detonator"],"color":"#ffdd00",
	"radius_mult":1.35,"body_dmg_mult":1.0,"is_bomb":true,
},

# — from Vampire —
"BloodHunter": {
	"display":"Охотник крови","required_level":30,"upgrades_from":["Vampire"],"color":"#ffdd00",
	"radius_mult":1.3,"body_dmg_mult":1.6,"is_vampire":true,
},
"SoulDrain": {
	"display":"Высасывание душ","required_level":30,"upgrades_from":["Vampire"],"color":"#ffdd00",
	"radius_mult":1.39,"body_dmg_mult":1.0,"is_vampire":true,"is_drone_shooter":true,"drone_hits":5,
},
"Revenant": {
	"display":"Ревенант","required_level":30,"upgrades_from":["Vampire"],"color":"#ffdd00",
	"radius_mult":1.38,"body_dmg_mult":1.4,"is_vampire":true,"is_invis":true,
},

# — from Chainshot —
"ArcaneBolt": {
	"display":"Аркановый разряд","required_level":30,"upgrades_from":["Chainshot"],"color":"#ffdd00",
	"radius_mult":1.33,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"Thunderchain": {
	"display":"Громовая цепь","required_level":30,"upgrades_from":["Chainshot"],"color":"#ffdd00",
	"radius_mult":1.39,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"LightningRod": {
	"display":"Молниеотвод","required_level":30,"upgrades_from":["Chainshot"],"color":"#ffdd00",
	"radius_mult":1.33,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,"is_laser":true,
},

# — from Turret —
"TurretBattery": {
	"display":"Батарея турелей","required_level":30,"upgrades_from":["Turret"],"color":"#ffdd00",
	"radius_mult":1.48,"body_dmg_mult":1.0,"is_turret_deployer":true,
	"max_turrets":6,"turret_fire_rate":38,"turret_health":65,"turret_lifetime":650,
	"turret_bullet_damage":6,"turret_bullet_speed":9.5,"turret_bullet_radius":5,
},
"TurretHeavy": {
	"display":"Тяжёлые турели","required_level":30,"upgrades_from":["Turret"],"color":"#ffdd00",
	"radius_mult":1.43,"body_dmg_mult":1.5,"is_turret_deployer":true,
	"max_turrets":3,"turret_fire_rate":70,"turret_health":160,"turret_lifetime":750,
	"turret_bullet_damage":18,"turret_bullet_speed":7.5,"turret_bullet_radius":11,
},
"TurretCannon": {
	"display":"Пушечные турели","required_level":30,"upgrades_from":["Turret"],"color":"#ffdd00",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_turret_deployer":true,"turret_bullet_homing":true,
	"max_turrets":2,"turret_fire_rate":85,"turret_health":120,"turret_lifetime":700,
	"turret_bullet_damage":22,"turret_bullet_speed":6.5,"turret_bullet_radius":13,
},

# ═════════════════════════════════════════════════════════════════════════════
# TIER 4 — Level 45
# ═════════════════════════════════════════════════════════════════════════════

# — from Assassin —
"Ranger": {
	"display":"Рейнджер","required_level":45,"upgrades_from":["Assassin"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":1.0,"is_invis":true,
},
"Annihilator": {
	"display":"Аннигилятор","required_level":45,"upgrades_from":["Assassin"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_piercing":true,
},
"Predator": {
	"display":"Хищник","required_level":45,"upgrades_from":["Assassin"],"color":"#ff8800",
	"radius_mult":1.4,"body_dmg_mult":1.0,
},

# — from Hunter —
"Streamliner": {
	"display":"Обтекатель","required_level":45,"upgrades_from":["Hunter"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,
},
"Overtrapper": {
	"display":"Ловчий","required_level":45,"upgrades_from":["Hunter"],"color":"#ff8800",
	"radius_mult":1.43,"body_dmg_mult":1.0,
},
"Skimmer": {
	"display":"Скиммер","required_level":45,"upgrades_from":["Hunter"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.0,
},

# — from Stalker —
"Landmine": {
	"display":"Мина","required_level":45,"upgrades_from":["Stalker"],"color":"#ff8800",
	"radius_mult":1.63,"body_dmg_mult":7.0,"is_invis":true,"no_barrels":true,
},
"Fighter": {
	"display":"Боец","required_level":45,"upgrades_from":["Stalker"],"color":"#ff8800",
	"radius_mult":1.66,"body_dmg_mult":1.0,
},
"Rocketeer": {
	"display":"Ракетчик","required_level":45,"upgrades_from":["Stalker"],"color":"#ff8800",
	"radius_mult":1.61,"body_dmg_mult":1.0,"is_homing":true,
},

# — from Gunner —
"Booster": {
	"display":"Ускоритель","required_level":45,"upgrades_from":["Gunner"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,
},
"OctoTank": {
	"display":"Октотанк","required_level":45,"upgrades_from":["Gunner"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,
},
"GunnerTrapper": {
	"display":"Охотник-ловушечник","required_level":45,"upgrades_from":["Gunner"],"color":"#ff8800",
	"radius_mult":1.47,"body_dmg_mult":1.0,
},

# — from Sprayer —
"PentaShot": {
	"display":"Пента-залп","required_level":45,"upgrades_from":["Sprayer"],"color":"#ff8800",
	"radius_mult":1.43,"body_dmg_mult":1.0,
},
"Hurricane": {
	"display":"Ураган","required_level":45,"upgrades_from":["Sprayer"],"color":"#ff8800",
	"radius_mult":1.47,"body_dmg_mult":1.0,
},
"MoreGun": {
	"display":"Больше пушек","required_level":45,"upgrades_from":["Sprayer"],"color":"#ff8800",
	"radius_mult":1.43,"body_dmg_mult":1.0,
},

# — from TripleShot —
"Spreadshot": {
	"display":"Веер","required_level":45,"upgrades_from":["TripleShot"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":1.0,
},
"TriAngle": {
	"display":"Треугольник","required_level":45,"upgrades_from":["TripleShot"],"color":"#ff8800",
	"radius_mult":1.48,"body_dmg_mult":1.0,
},
"BentHybrid": {
	"display":"Гибрид","required_level":45,"upgrades_from":["TripleShot"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.0,
},

# — from Twin —
"TwinFlank": {
	"display":"Двойной фланг","required_level":45,"upgrades_from":["Twin"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,
},
"TripleTwin": {
	"display":"Тройной близнец","required_level":45,"upgrades_from":["Twin"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,
},
"Triplet": {
	"display":"Триплет","required_level":45,"upgrades_from":["Twin"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,
},

# — from QuadTank —
"Battleship": {
	"display":"Линкор","required_level":45,"upgrades_from":["QuadTank"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":5,
},
"Fortress": {
	"display":"Крепость","required_level":45,"upgrades_from":["QuadTank"],"color":"#ff8800",
	"radius_mult":1.52,"body_dmg_mult":1.0,
},
"Auto3": {
	"display":"Авто-3","required_level":45,"upgrades_from":["QuadTank"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.0,
},

# — from Smasher —
"AutoSmasher": {
	"display":"Авто-сокрушитель","required_level":45,"upgrades_from":["Smasher"],"color":"#ff8800",
	"radius_mult":1.62,"body_dmg_mult":5.0,"no_barrels":true,
},
"Spike": {
	"display":"Шип","required_level":45,"upgrades_from":["Smasher"],"color":"#ff8800",
	"radius_mult":1.65,"body_dmg_mult":5.5,"no_barrels":true,
},
"MegaSmasher": {
	"display":"Мега-сокрушитель","required_level":45,"upgrades_from":["Smasher"],"color":"#ff8800",
	"radius_mult":1.68,"body_dmg_mult":6.0,"no_barrels":true,
},

# — from Ninja —
"Phantom": {
	"display":"Фантом","required_level":45,"upgrades_from":["Ninja"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_invis":true,
},
"Ambusher": {
	"display":"Засадник","required_level":45,"upgrades_from":["Ninja"],"color":"#ff8800",
	"radius_mult":1.72,"body_dmg_mult":1.0,"is_invis":true,
},
"Spy": {
	"display":"Шпион","required_level":45,"upgrades_from":["Ninja"],"color":"#ff8800",
	"radius_mult":1.69,"body_dmg_mult":1.0,"is_invis":true,
},

# — from ScoutGhost —
"Specter": {
	"display":"Призрак","required_level":45,"upgrades_from":["ScoutGhost"],"color":"#ff8800",
	"radius_mult":1.73,"body_dmg_mult":12.0,"is_invis":true,"no_barrels":true,
},
"RamX": {
	"display":"Таран-Икс","required_level":45,"upgrades_from":["ScoutGhost"],"color":"#ff8800",
	"radius_mult":1.73,"body_dmg_mult":15.0,"no_barrels":true,
},
"Mine": {
	"display":"Мина-ловушка","required_level":45,"upgrades_from":["ScoutGhost"],"color":"#ff8800",
	"radius_mult":1.51,"body_dmg_mult":4.0,"is_invis":true,
},

# — from Drone —
"Swarm": {
	"display":"Рой","required_level":45,"upgrades_from":["Drone"],"color":"#ff8800",
	"radius_mult":1.51,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":4,
},
"Guardian": {
	"display":"Страж","required_level":45,"upgrades_from":["Drone"],"color":"#ff8800",
	"radius_mult":1.53,"body_dmg_mult":1.5,"is_drone_shooter":true,"drone_hits":8,
},
"HunterDrone": {
	"display":"Дрон-охотник","required_level":45,"upgrades_from":["Drone"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_drone_shooter":true,"is_invis":true,"drone_hits":10,
},

# — from Blaster —
"Devastator": {
	"display":"Опустошитель","required_level":45,"upgrades_from":["Blaster"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":0.8,
},
"Barrage": {
	"display":"Шквал","required_level":45,"upgrades_from":["Blaster"],"color":"#ff8800",
	"radius_mult":1.48,"body_dmg_mult":0.82,
},
"Canister": {
	"display":"Картечь","required_level":45,"upgrades_from":["Blaster"],"color":"#ff8800",
	"radius_mult":1.48,"body_dmg_mult":0.9,
},

# — from Buster —
"Juggernaut": {
	"display":"Джаггернаут","required_level":45,"upgrades_from":["Buster"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.2,
},
"Obliterator": {
	"display":"Аннигилятор","required_level":45,"upgrades_from":["Buster"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.3,
},
"Breacher": {
	"display":"Пробойник","required_level":45,"upgrades_from":["Buster"],"color":"#ff8800",
	"radius_mult":1.47,"body_dmg_mult":1.1,
},

# — from Riot —
"Havoc": {
	"display":"Хаос","required_level":45,"upgrades_from":["Riot"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":0.85,
},
"Tempest": {
	"display":"Шторм","required_level":45,"upgrades_from":["Riot"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":0.88,
},
"Vortex": {
	"display":"Вихрь","required_level":45,"upgrades_from":["Riot"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":0.88,
},

# — from HeavyCannon —
"HeavyShell": {
	"display":"Тяжёлый снаряд","required_level":45,"upgrades_from":["HeavyCannon"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":1.0,"is_range_boost":true,"is_piercing":true,
},
"CannonBarrage": {
	"display":"Пушечный шквал","required_level":45,"upgrades_from":["HeavyCannon"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_range_boost":true,
},
"SiegeGun": {
	"display":"Осадное орудие","required_level":45,"upgrades_from":["HeavyCannon"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.0,"is_range_boost":true,
},

# — from BurstRifle —
"RapidBurst": {
	"display":"Скоростная очередь","required_level":45,"upgrades_from":["BurstRifle"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_range_boost":true,
},
"TriSnipe": {
	"display":"Тройной снайпер","required_level":45,"upgrades_from":["BurstRifle"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.0,"is_range_boost":true,
},
"GaussRifle": {
	"display":"Гаусс-винтовка","required_level":45,"upgrades_from":["BurstRifle"],"color":"#ff8800",
	"radius_mult":1.51,"body_dmg_mult":1.0,"is_range_boost":true,"is_laser":true,
},

# — from LongRange (Marksman T3) —
"LongRangeX": {
	"display":"Дальнобой-Икс","required_level":45,"upgrades_from":["LongRange"],"color":"#ff8800",
	"radius_mult":1.49,"body_dmg_mult":1.0,"is_range_boost":true,
},
"SniperX": {
	"display":"Снайпер-Икс","required_level":45,"upgrades_from":["LongRange"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_range_boost":true,"is_piercing":true,
},
"TwinRifle": {
	"display":"Двойная дальнобойная","required_level":45,"upgrades_from":["LongRange"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_range_boost":true,
},

# — from Colossus —
"Titan": {
	"display":"Титан","required_level":45,"upgrades_from":["Colossus"],"color":"#ff8800",
	"radius_mult":1.43,"body_dmg_mult":1.4,
},
"Leviathan": {
	"display":"Левиафан","required_level":45,"upgrades_from":["Colossus"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.3,
},
"Bastion": {
	"display":"Бастион","required_level":45,"upgrades_from":["Colossus"],"color":"#ff8800",
	"radius_mult":1.48,"body_dmg_mult":1.25,
},

# — from Cruiser —
"Warship": {
	"display":"Военный корабль","required_level":45,"upgrades_from":["Cruiser"],"color":"#ff8800",
	"radius_mult":1.48,"body_dmg_mult":1.2,
},
"Flagship": {
	"display":"Флагман","required_level":45,"upgrades_from":["Cruiser"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.15,
},
"Ironclad": {
	"display":"Броненосец","required_level":45,"upgrades_from":["Cruiser"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.5,
},

# — from Brawler —
"Behemoth": {
	"display":"Бегемот","required_level":45,"upgrades_from":["Brawler"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":2.8,
},
"Rampage": {
	"display":"Берсерк","required_level":45,"upgrades_from":["Brawler"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":2.5,
},
"Bulwark": {
	"display":"Оплот","required_level":45,"upgrades_from":["Brawler"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":3.0,
},

# — from Overseer —
"Overlord": {
	"display":"Повелитель","required_level":45,"upgrades_from":["Overseer"],"color":"#ff8800",
	"radius_mult":1.51,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":6,
},
"Manager": {
	"display":"Менеджер","required_level":45,"upgrades_from":["Overseer"],"color":"#9922bb",
	"radius_mult":1.52,"body_dmg_mult":1.0,"is_drone_shooter":true,"is_invis":true,"drone_hits":12,
},
"Necromancer": {
	"display":"Некромант","required_level":45,"upgrades_from":["Overseer"],"color":"#228855",
	"radius_mult":1.52,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":5,
},

# — from Architect —
"Warden": {
	"display":"Страж форта","required_level":45,"upgrades_from":["Architect"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,
},
"Outpost": {
	"display":"Форпост","required_level":45,"upgrades_from":["Architect"],"color":"#ff8800",
	"radius_mult":1.52,"body_dmg_mult":1.0,"is_drone_shooter":true,"drone_hits":6,
},
"Garrison": {
	"display":"Гарнизон","required_level":45,"upgrades_from":["Stronghold"],"color":"#ff8800",
	"radius_mult":1.58,"body_dmg_mult":4.5,
},

# — from Commander —
"Marshal": {
	"display":"Маршал","required_level":45,"upgrades_from":["Commander"],"color":"#ff8800",
	"radius_mult":1.54,"body_dmg_mult":2.5,"is_drone_shooter":true,"drone_hits":7,
},
"Vanguard": {
	"display":"Авангард","required_level":45,"upgrades_from":["Commander"],"color":"#ff8800",
	"radius_mult":1.53,"body_dmg_mult":2.0,"is_drone_shooter":true,"is_homing":true,"drone_hits":10,
},

# — from Protector —
"Golem": {
	"display":"Голем","required_level":45,"upgrades_from":["Protector"],"color":"#ff8800",
	"radius_mult":1.65,"body_dmg_mult":7.0,"no_barrels":true,
},
"Paragon": {
	"display":"Эталон","required_level":45,"upgrades_from":["Protector"],"color":"#ff8800",
	"radius_mult":1.55,"body_dmg_mult":3.5,
},

# — from Stronghold —
"Phalanx": {
	"display":"Фаланга","required_level":45,"upgrades_from":["Stronghold"],"color":"#ff8800",
	"radius_mult":1.60,"body_dmg_mult":3.0,
},

# — from Rampart —
"Redoubt": {
	"display":"Редут","required_level":45,"upgrades_from":["Rampart"],"color":"#ff8800",
	"radius_mult":1.72,"body_dmg_mult":10.0,"no_barrels":true,
},
"Bulkhead": {
	"display":"Переборка","required_level":45,"upgrades_from":["Rampart"],"color":"#ff8800",
	"radius_mult":1.60,"body_dmg_mult":5.0,
},

# — from Fragmenter —
"ShardStorm": {
	"display":"Буря осколков","required_level":45,"upgrades_from":["Fragmenter"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_splitting":true,
},
"FragCore": {
	"display":"Ядро-осколок","required_level":45,"upgrades_from":["Fragmenter"],"color":"#ff8800",
	"radius_mult":1.42,"body_dmg_mult":1.0,"is_splitting":true,"is_piercing":true,
},
"FragNova": {
	"display":"Нова-осколок","required_level":45,"upgrades_from":["Fragmenter"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_splitting":true,
},

# — from ScatterShot —
"Buckshot": {
	"display":"Картечь-Икс","required_level":45,"upgrades_from":["ScatterShot"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_splitting":true,
},
"ScatterBomb": {
	"display":"Рассеивающая бомба","required_level":45,"upgrades_from":["ScatterShot"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_splitting":true,
},
"CloudBurst": {
	"display":"Облачный взрыв","required_level":45,"upgrades_from":["ScatterShot"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_splitting":true,
},

# — from SplitMirror —
"DualFrag": {
	"display":"Двойная фрагм.","required_level":45,"upgrades_from":["SplitMirror"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_splitting":true,
},
"OmniFrag": {
	"display":"Омни-фрагм.","required_level":45,"upgrades_from":["SplitMirror"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":1.0,"is_splitting":true,
},
"CrossFrag": {
	"display":"Крест-фрагм.","required_level":45,"upgrades_from":["SplitMirror"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":1.0,"is_splitting":true,
},

# — from BloodHunter —
"Bloodlust": {
	"display":"Жажда крови","required_level":45,"upgrades_from":["BloodHunter"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.8,"is_vampire":true,
},
"DarkFangs": {
	"display":"Тёмные клыки","required_level":45,"upgrades_from":["BloodHunter"],"color":"#ff8800",
	"radius_mult":1.3,"body_dmg_mult":2.5,"is_vampire":true,
},
"VampireX": {
	"display":"Вампир-Икс","required_level":45,"upgrades_from":["BloodHunter"],"color":"#ff8800",
	"radius_mult":1.3,"body_dmg_mult":2.0,"is_vampire":true,"is_piercing":true,
},

# — from SoulDrain —
"SoulReaper": {
	"display":"Пожиратель душ","required_level":45,"upgrades_from":["SoulDrain"],"color":"#ff8800",
	"radius_mult":1.5,"body_dmg_mult":1.0,"is_vampire":true,"is_drone_shooter":true,"drone_hits":7,
},
"EclipseDrain": {
	"display":"Затмение-поглощение","required_level":45,"upgrades_from":["SoulDrain"],"color":"#ff8800",
	"radius_mult":1.52,"body_dmg_mult":1.0,"is_vampire":true,"is_drone_shooter":true,"is_invis":true,"drone_hits":8,
},
"VoidDrain": {
	"display":"Поглощение пустоты","required_level":45,"upgrades_from":["SoulDrain"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_vampire":true,"is_drone_shooter":true,"drone_hits":10,
},

# — from Revenant —
"Wraith": {
	"display":"Призрак-вампир","required_level":45,"upgrades_from":["Revenant"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_vampire":true,"is_invis":true,
},
"NightShade": {
	"display":"Ночная тень","required_level":45,"upgrades_from":["Revenant"],"color":"#ff8800",
	"radius_mult":1.5,"body_dmg_mult":1.0,"is_vampire":true,"is_invis":true,
},
"DarkReaper": {
	"display":"Тёмный жнец","required_level":45,"upgrades_from":["Revenant"],"color":"#ff8800",
	"radius_mult":1.52,"body_dmg_mult":2.5,"is_vampire":true,"is_invis":true,
},

# — from ArcaneBolt —
"ArcaneStorm": {
	"display":"Аркановый шторм","required_level":45,"upgrades_from":["ArcaneBolt"],"color":"#ff8800",
	"radius_mult":1.49,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"ChainBlast": {
	"display":"Цепной взрыв","required_level":45,"upgrades_from":["ArcaneBolt"],"color":"#ff8800",
	"radius_mult":1.3,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"ArcCaster": {
	"display":"Дуговой маг","required_level":45,"upgrades_from":["ArcaneBolt"],"color":"#ff8800",
	"radius_mult":1.52,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,"is_drone_shooter":true,"drone_hits":5,
},

# — from Thunderchain —
"Thunderclap": {
	"display":"Удар грома","required_level":45,"upgrades_from":["Thunderchain"],"color":"#ff8800",
	"radius_mult":1.48,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"StormSurge": {
	"display":"Штормовая волна","required_level":45,"upgrades_from":["Thunderchain"],"color":"#ff8800",
	"radius_mult":1.44,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"Maelstrom": {
	"display":"Мальстрём","required_level":45,"upgrades_from":["Thunderchain"],"color":"#ff8800",
	"radius_mult":1.46,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},

# — from LightningRod —
"PlasmaChain": {
	"display":"Плазменная цепь","required_level":45,"upgrades_from":["LightningRod"],"color":"#ff8800",
	"radius_mult":1.47,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,"is_laser":true,
},
"BallLightning": {
	"display":"Шаровая молния","required_level":45,"upgrades_from":["LightningRod"],"color":"#ff8800",
	"radius_mult":1.45,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,
},
"VoltStrike": {
	"display":"Вольтовый удар","required_level":45,"upgrades_from":["LightningRod"],"color":"#ff8800",
	"radius_mult":1.3,"body_dmg_mult":1.0,"is_chain":true,"is_homing":true,"is_laser":true,
},

# — Turret T4 —
"TurretSwarm": {
	"display":"Рой турелей","required_level":45,"upgrades_from":["TurretBattery"],"color":"#ff8800",
	"radius_mult":1.58,"body_dmg_mult":1.0,"is_turret_deployer":true,
	"max_turrets":8,"turret_fire_rate":28,"turret_health":55,"turret_lifetime":600,
	"turret_bullet_damage":5,"turret_bullet_speed":10,"turret_bullet_radius":4,
},
"TurretStorm": {
	"display":"Штормовые турели","required_level":45,"upgrades_from":["TurretBattery"],"color":"#ff8800",
	"radius_mult":1.55,"body_dmg_mult":1.5,"is_turret_deployer":true,
	"max_turrets":6,"turret_fire_rate":32,"turret_health":80,"turret_lifetime":620,
	"turret_bullet_damage":8,"turret_bullet_speed":9,"turret_bullet_radius":6,
},
"CannonTurret": {
	"display":"Орудийные турели","required_level":45,"upgrades_from":["TurretHeavy"],"color":"#ff8800",
	"radius_mult":1.6,"body_dmg_mult":2.5,"is_turret_deployer":true,
	"max_turrets":4,"turret_fire_rate":80,"turret_health":200,"turret_lifetime":780,
	"turret_bullet_damage":28,"turret_bullet_speed":7,"turret_bullet_radius":15,
},
"SiegeTurret": {
	"display":"Осадные турели","required_level":45,"upgrades_from":["TurretHeavy"],"color":"#ff8800",
	"radius_mult":1.59,"body_dmg_mult":2.0,"is_turret_deployer":true,
	"max_turrets":2,"turret_fire_rate":95,"turret_health":280,"turret_lifetime":800,
	"turret_bullet_damage":38,"turret_bullet_speed":6,"turret_bullet_radius":18,
},
"MissileTurret": {
	"display":"Ракетные турели","required_level":45,"upgrades_from":["TurretCannon"],"color":"#ff8800",
	"radius_mult":1.51,"body_dmg_mult":1.0,"is_turret_deployer":true,"turret_bullet_homing":true,
	"max_turrets":4,"turret_fire_rate":65,"turret_health":95,"turret_lifetime":680,
	"turret_bullet_damage":12,"turret_bullet_speed":7,"turret_bullet_radius":9,
},

} # end TANKS

# ── Barrel data (separate to keep TANKS dict readable) ────────────────────────
const BARRELS: Dictionary = {
"Basic":       [{"ao":0.0,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Assault":     [{"ao":0.0,"len":50.0,"wd":14.0,"rl":0.95,"bsm":1.02,"bsp":1.08,"bdm":1.08,"sp":0.0,"lat":0.0}],
"Skirmisher":  [{"ao":0.0,"len":48.0,"wd":13.0,"rl":0.90,"bsm":0.98,"bsp":1.12,"bdm":0.98,"sp":0.0,"lat":0.0}],
"Warlord":     [{"ao":0.0,"len":46.0,"wd":17.0,"rl":1.05,"bsm":1.10,"bsp":0.95,"bdm":1.12,"sp":0.0,"lat":0.0}],
"Alchemist":   [{"ao":0.0,"len":46.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Warlock":     [{"ao":0.0,"len":46.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],

"Sniper":      [{"ao":0.0,"len":72.0,"wd":9.0,"rl":2.6,"bsm":0.72,"bsp":2.2,"bdm":2.0,"sp":0.0,"lat":0.0}],
"MachineGun":  [{"ao":0.0,"len":44.0,"wd":17.0,"rl":0.50,"bsm":1.0,"bsp":1.0,"bdm":0.72,"sp":0.07,"lat":0.0}],
"FlankGuard":  [{"ao":0.0,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":42.0,"wd":12.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":0.9,"sp":0.0,"lat":0.0}],
"Scout":       [{"ao":0.0,"len":38.0,"wd":9.0,"rl":1.2,"bsm":0.9,"bsp":1.4,"bdm":0.68,"sp":0.0,"lat":0.0}],
"Shotgun":     [{"ao":-0.45,"len":38.0,"wd":11.0,"rl":1.05,"bsm":0.95,"bsp":0.92,"bdm":0.75,"sp":0.18,"lat":0.0},
                {"ao":-0.22,"len":44.0,"wd":13.0,"rl":1.05,"bsm":1.0,"bsp":0.92,"bdm":0.85,"sp":0.15,"lat":0.0},
                {"ao":0.0,"len":48.0,"wd":15.0,"rl":1.05,"bsm":1.0,"bsp":0.92,"bdm":0.9,"sp":0.12,"lat":0.0},
                {"ao":0.22,"len":44.0,"wd":13.0,"rl":1.05,"bsm":1.0,"bsp":0.92,"bdm":0.85,"sp":0.15,"lat":0.0},
                {"ao":0.45,"len":38.0,"wd":11.0,"rl":1.05,"bsm":0.95,"bsp":0.92,"bdm":0.75,"sp":0.18,"lat":0.0}],
"Cannon":      [{"ao":0.0,"len":60.0,"wd":20.0,"rl":1.8,"bsm":1.5,"bsp":0.85,"bdm":2.2,"sp":0.0,"lat":0.0}],
"Dreadnought": [{"ao":0.0,"len":56.0,"wd":28.0,"rl":1.0,"bsm":0.6,"bsp":2.0,"bdm":3.5,"sp":0.0,"lat":0.0}],
"Engineer":    [{"ao":0.0,"len":28.0,"wd":7.0,"rl":0.95,"bsm":1.05,"bsp":1.0,"bdm":0.62,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":28.0,"wd":7.0,"rl":0.95,"bsm":1.05,"bsp":1.0,"bdm":0.62,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":28.0,"wd":7.0,"rl":0.95,"bsm":1.05,"bsp":1.0,"bdm":0.62,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":28.0,"wd":7.0,"rl":0.95,"bsm":1.05,"bsp":1.0,"bdm":0.62,"sp":0.0,"lat":0.0}],
"Defender":    [{"ao":0.0,"len":50.0,"wd":16.0,"rl":1.4,"bsm":1.2,"bsp":0.9,"bdm":1.4,"sp":0.0,"lat":0.0}],
"Splitter":    [{"ao":-0.30,"len":40.0,"wd":10.0,"rl":1.2,"bsm":0.80,"bsp":1.10,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":12.0,"rl":1.2,"bsm":0.90,"bsp":1.10,"bdm":0.82,"sp":0.08,"lat":0.0},
                {"ao":0.30,"len":40.0,"wd":10.0,"rl":1.2,"bsm":0.80,"bsp":1.10,"bdm":0.72,"sp":0.12,"lat":0.0}],
"Detonator":   [{"ao":-0.15,"len":46.0,"wd":16.0,"rl":1.40,"bsm":1.30,"bsp":0.80,"bdm":1.20,"sp":0.0,"lat":0.0,"is_sticky":true},
                {"ao":0.15,"len":46.0,"wd":16.0,"rl":1.40,"bsm":1.30,"bsp":0.80,"bdm":1.20,"sp":0.0,"lat":0.0,"is_sticky":true}],
"Marksman":    [{"ao":0.0,"len":70.0,"wd":10.0,"rl":2.8,"bsm":0.70,"bsp":2.4,"bdm":2.5,"sp":0.0,"lat":0.0}],
"Vampire":     [{"ao":0.0,"len":50.0,"wd":14.0,"rl":1.40,"bsm":1.00,"bsp":1.10,"bdm":1.10,"sp":0.0,"lat":0.0}],
"Chainshot":   [{"ao":0.0,"len":48.0,"wd":13.0,"rl":1.60,"bsm":1.00,"bsp":1.40,"bdm":1.00,"sp":0.0,"lat":0.0}],
"Turret":      [],

"Assassin":    [{"ao":0.0,"len":82.0,"wd":8.0,"rl":2.9,"bsm":0.66,"bsp":2.5,"bdm":2.4,"sp":0.0,"lat":0.0}],
"Hunter":      [{"ao":0.0,"len":74.0,"wd":11.0,"rl":2.2,"bsm":0.82,"bsp":2.1,"bdm":1.9,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":54.0,"wd":17.0,"rl":1.4,"bsm":1.1,"bsp":1.6,"bdm":1.3,"sp":0.0,"lat":0.0}],
"Stalker":     [{"ao":-0.09,"len":70.0,"wd":8.0,"rl":2.5,"bsm":0.70,"bsp":2.0,"bdm":1.7,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":72.0,"wd":9.0,"rl":2.6,"bsm":0.70,"bsp":2.1,"bdm":1.8,"sp":0.0,"lat":0.0},
                {"ao":0.09,"len":70.0,"wd":8.0,"rl":2.5,"bsm":0.70,"bsp":2.0,"bdm":1.7,"sp":0.0,"lat":0.0}],
"Gunner":      [{"ao":0.0,"len":46.0,"wd":9.0,"rl":0.40,"bsm":0.70,"bsp":1.0,"bdm":0.60,"sp":0.0,"lat":-7.0},
                {"ao":0.0,"len":46.0,"wd":9.0,"rl":0.40,"bsm":0.70,"bsp":1.0,"bdm":0.60,"sp":0.0,"lat":7.0}],
"Sprayer":     [{"ao":0.0,"len":50.0,"wd":20.0,"rl":0.44,"bsm":1.05,"bsp":0.90,"bdm":0.60,"sp":0.14,"lat":0.0}],
"TripleShot":  [{"ao":0.0,"len":46.0,"wd":14.0,"rl":1.4,"bsm":0.9,"bsp":1.0,"bdm":0.44,"sp":0.0,"lat":0.0},
                {"ao":-0.35,"len":42.0,"wd":14.0,"rl":1.4,"bsm":0.9,"bsp":1.0,"bdm":0.44,"sp":0.0,"lat":0.0},
                {"ao":0.35,"len":42.0,"wd":14.0,"rl":1.4,"bsm":0.9,"bsp":1.0,"bdm":0.44,"sp":0.0,"lat":0.0}],
"Twin":        [{"ao":0.0,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":-9.0},
                {"ao":0.0,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":9.0}],
"QuadTank":    [{"ao":0.0,"len":42.0,"wd":12.0,"rl":1.2,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":42.0,"wd":12.0,"rl":1.2,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":42.0,"wd":12.0,"rl":1.2,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":42.0,"wd":12.0,"rl":1.2,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Smasher":     [],
"Ninja":       [{"ao":0.0,"len":65.0,"wd":10.0,"rl":1.7,"bsm":0.76,"bsp":1.55,"bdm":1.85,"sp":0.0,"lat":0.0}],
"ScoutGhost":  [],
"Drone":       [{"ao":0.0,"len":32.0,"wd":9.0,"rl":0.80,"bsm":1.2,"bsp":1.1,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":32.0,"wd":9.0,"rl":0.80,"bsm":1.2,"bsp":1.1,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":32.0,"wd":9.0,"rl":0.80,"bsm":1.2,"bsp":1.1,"bdm":0.72,"sp":0.0,"lat":0.0}],
"Blaster":     [{"ao":-0.60,"len":34.0,"wd":9.0,"rl":1.05,"bsm":0.90,"bsp":0.88,"bdm":0.62,"sp":0.24,"lat":0.0},
                {"ao":-0.38,"len":37.0,"wd":11.0,"rl":1.05,"bsm":0.95,"bsp":0.88,"bdm":0.70,"sp":0.20,"lat":0.0},
                {"ao":-0.18,"len":41.0,"wd":12.0,"rl":1.05,"bsm":1.0,"bsp":0.88,"bdm":0.78,"sp":0.16,"lat":0.0},
                {"ao":-0.06,"len":43.0,"wd":13.0,"rl":1.05,"bsm":1.0,"bsp":0.88,"bdm":0.82,"sp":0.13,"lat":0.0},
                {"ao":0.0,"len":45.0,"wd":14.0,"rl":1.05,"bsm":1.0,"bsp":0.88,"bdm":0.85,"sp":0.12,"lat":0.0},
                {"ao":0.06,"len":43.0,"wd":13.0,"rl":1.05,"bsm":1.0,"bsp":0.88,"bdm":0.82,"sp":0.13,"lat":0.0},
                {"ao":0.18,"len":41.0,"wd":12.0,"rl":1.05,"bsm":1.0,"bsp":0.88,"bdm":0.78,"sp":0.16,"lat":0.0},
                {"ao":0.38,"len":37.0,"wd":11.0,"rl":1.05,"bsm":0.95,"bsp":0.88,"bdm":0.70,"sp":0.20,"lat":0.0},
                {"ao":0.60,"len":34.0,"wd":9.0,"rl":1.05,"bsm":0.90,"bsp":0.88,"bdm":0.62,"sp":0.24,"lat":0.0}],
"Buster":      [{"ao":-0.18,"len":48.0,"wd":16.0,"rl":1.1,"bsm":1.3,"bsp":0.95,"bdm":1.35,"sp":0.10,"lat":0.0},
                {"ao":0.0,"len":52.0,"wd":18.0,"rl":1.1,"bsm":1.4,"bsp":0.95,"bdm":1.5,"sp":0.08,"lat":0.0},
                {"ao":0.18,"len":48.0,"wd":16.0,"rl":1.1,"bsm":1.3,"bsp":0.95,"bdm":1.35,"sp":0.10,"lat":0.0}],
"Riot":        [{"ao":0.7854,"len":38.0,"wd":10.0,"rl":1.1,"bsm":0.90,"bsp":0.88,"bdm":0.72,"sp":0.20,"lat":0.0},
                {"ao":1.0472,"len":34.0,"wd":9.0,"rl":1.1,"bsm":0.88,"bsp":0.88,"bdm":0.65,"sp":0.22,"lat":0.0},
                {"ao":0.5236,"len":34.0,"wd":9.0,"rl":1.1,"bsm":0.88,"bsp":0.88,"bdm":0.65,"sp":0.22,"lat":0.0},
                {"ao":-0.7854,"len":38.0,"wd":10.0,"rl":1.1,"bsm":0.90,"bsp":0.88,"bdm":0.72,"sp":0.20,"lat":0.0},
                {"ao":-1.0472,"len":34.0,"wd":9.0,"rl":1.1,"bsm":0.88,"bsp":0.88,"bdm":0.65,"sp":0.22,"lat":0.0},
                {"ao":-0.5236,"len":34.0,"wd":9.0,"rl":1.1,"bsm":0.88,"bsp":0.88,"bdm":0.65,"sp":0.22,"lat":0.0},
                {"ao":2.3562,"len":38.0,"wd":10.0,"rl":1.1,"bsm":0.90,"bsp":0.88,"bdm":0.72,"sp":0.20,"lat":0.0},
                {"ao":-2.3562,"len":38.0,"wd":10.0,"rl":1.1,"bsm":0.90,"bsp":0.88,"bdm":0.72,"sp":0.20,"lat":0.0}],
"HeavyCannon": [{"ao":0.0,"len":62.0,"wd":22.0,"rl":2.0,"bsm":1.6,"bsp":1.1,"bdm":2.5,"sp":0.0,"lat":0.0}],
"BurstRifle":  [{"ao":0.0,"len":58.0,"wd":11.0,"rl":0.80,"bsm":0.82,"bsp":1.6,"bdm":1.2,"sp":0.04,"lat":0.0}],
"LongRange":   [{"ao":0.0,"len":78.0,"wd":10.0,"rl":3.0,"bsm":0.68,"bsp":2.6,"bdm":2.8,"sp":0.0,"lat":0.0}],
"Colossus":    [{"ao":0.0,"len":56.0,"wd":32.0,"rl":1.0,"bsm":0.55,"bsp":1.9,"bdm":3.8,"sp":0.0,"lat":0.0},
                {"ao":3.3640,"len":30.0,"wd":11.0,"rl":1.0,"bsm":0.8,"bsp":0.9,"bdm":0.7,"sp":0.0,"lat":0.0},
                {"ao":2.9199,"len":30.0,"wd":11.0,"rl":1.0,"bsm":0.8,"bsp":0.9,"bdm":0.7,"sp":0.0,"lat":0.0}],
"Cruiser":     [{"ao":-0.1,"len":52.0,"wd":24.0,"rl":1.0,"bsm":0.58,"bsp":1.5,"bdm":2.8,"sp":0.0,"lat":0.0},
                {"ao":0.1,"len":52.0,"wd":24.0,"rl":1.0,"bsm":0.58,"bsp":1.5,"bdm":2.8,"sp":0.0,"lat":0.0}],
"Brawler":     [{"ao":0.0,"len":48.0,"wd":20.0,"rl":1.0,"bsm":0.65,"bsp":1.3,"bdm":2.0,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":34.0,"wd":13.0,"rl":1.0,"bsm":0.65,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":34.0,"wd":13.0,"rl":1.0,"bsm":0.65,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Overseer":    [{"ao":0.0,"len":26.0,"wd":8.0,"rl":0.85,"bsm":1.1,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":26.0,"wd":8.0,"rl":0.85,"bsm":1.1,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":26.0,"wd":8.0,"rl":0.85,"bsm":1.1,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":26.0,"wd":8.0,"rl":0.85,"bsm":1.1,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":4.1888,"len":26.0,"wd":8.0,"rl":0.85,"bsm":1.1,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":5.2360,"len":26.0,"wd":8.0,"rl":0.85,"bsm":1.1,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0}],
"Architect":   [{"ao":0.0,"len":48.0,"wd":14.0,"rl":1.1,"bsm":1.0,"bsp":1.1,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":34.0,"wd":12.0,"rl":0.85,"bsm":0.9,"bsp":0.9,"bdm":1.1,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":-1.5708,"len":34.0,"wd":12.0,"rl":0.85,"bsm":0.9,"bsp":0.9,"bdm":1.1,"sp":0.0,"lat":0.0,"is_trap":true}],
"Commander":   [{"ao":0.0,"len":30.0,"wd":10.0,"rl":0.78,"bsm":1.2,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":1.2566,"len":30.0,"wd":10.0,"rl":0.78,"bsm":1.2,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":2.5133,"len":30.0,"wd":10.0,"rl":0.78,"bsm":1.2,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":3.7699,"len":30.0,"wd":10.0,"rl":0.78,"bsm":1.2,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":5.0265,"len":30.0,"wd":10.0,"rl":0.78,"bsm":1.2,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0}],
"Protector":   [{"ao":0.0,"len":48.0,"wd":15.0,"rl":1.3,"bsm":1.15,"bsp":0.92,"bdm":1.3,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":44.0,"wd":13.0,"rl":1.3,"bsm":1.1,"bsp":0.90,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":44.0,"wd":13.0,"rl":1.3,"bsm":1.1,"bsp":0.90,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Stronghold":  [{"ao":0.0,"len":44.0,"wd":13.0,"rl":1.35,"bsm":1.1,"bsp":0.92,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":44.0,"wd":13.0,"rl":1.35,"bsm":1.1,"bsp":0.92,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":44.0,"wd":13.0,"rl":1.35,"bsm":1.1,"bsp":0.92,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":44.0,"wd":13.0,"rl":1.35,"bsm":1.1,"bsp":0.92,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":4.1888,"len":44.0,"wd":13.0,"rl":1.35,"bsm":1.1,"bsp":0.92,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":5.2360,"len":44.0,"wd":13.0,"rl":1.35,"bsm":1.1,"bsp":0.92,"bdm":1.1,"sp":0.0,"lat":0.0}],
"Rampart":     [{"ao":0.0,"len":58.0,"wd":24.0,"rl":1.6,"bsm":1.5,"bsp":0.88,"bdm":2.0,"sp":0.0,"lat":0.0}],
"BloodHunter": [{"ao":-0.10,"len":52.0,"wd":14.0,"rl":1.20,"bsm":1.05,"bsp":1.15,"bdm":1.20,"sp":0.0,"lat":0.0},
                {"ao":0.10,"len":52.0,"wd":14.0,"rl":1.20,"bsm":1.05,"bsp":1.15,"bdm":1.20,"sp":0.0,"lat":0.0}],
"SoulDrain":   [{"ao":0.0,"len":34.0,"wd":10.0,"rl":0.85,"bsm":1.20,"bsp":1.10,"bdm":0.82,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":34.0,"wd":10.0,"rl":0.85,"bsm":1.20,"bsp":1.10,"bdm":0.82,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":34.0,"wd":10.0,"rl":0.85,"bsm":1.20,"bsp":1.10,"bdm":0.82,"sp":0.0,"lat":0.0}],
"Revenant":    [{"ao":0.0,"len":60.0,"wd":11.0,"rl":2.00,"bsm":0.78,"bsp":1.40,"bdm":1.50,"sp":0.0,"lat":0.0}],
"ArcaneBolt":  [{"ao":-0.10,"len":50.0,"wd":13.0,"rl":1.5,"bsm":1.05,"bsp":1.40,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":0.10,"len":50.0,"wd":13.0,"rl":1.5,"bsm":1.05,"bsp":1.40,"bdm":1.00,"sp":0.0,"lat":0.0}],
"Thunderchain": [{"ao":-0.20,"len":46.0,"wd":16.0,"rl":1.4,"bsm":1.20,"bsp":1.30,"bdm":1.20,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":50.0,"wd":18.0,"rl":1.4,"bsm":1.25,"bsp":1.30,"bdm":1.30,"sp":0.0,"lat":0.0},
                {"ao":0.20,"len":46.0,"wd":16.0,"rl":1.4,"bsm":1.20,"bsp":1.30,"bdm":1.20,"sp":0.0,"lat":0.0}],
"LightningRod": [{"ao":0.0,"len":60.0,"wd":9.0,"rl":2.20,"bsm":0.72,"bsp":2.50,"bdm":1.30,"sp":0.0,"lat":0.0}],
"TurretBattery": [],
"TurretHeavy": [],
"TurretCannon": [],
"Fragmenter":  [{"ao":-0.35,"len":36.0,"wd":9.0,"rl":1.0,"bsm":0.75,"bsp":1.10,"bdm":0.65,"sp":0.15,"lat":0.0},
                {"ao":-0.17,"len":40.0,"wd":11.0,"rl":1.0,"bsm":0.82,"bsp":1.10,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":42.0,"wd":12.0,"rl":1.0,"bsm":0.88,"bsp":1.10,"bdm":0.78,"sp":0.09,"lat":0.0},
                {"ao":0.17,"len":40.0,"wd":11.0,"rl":1.0,"bsm":0.82,"bsp":1.10,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.35,"len":36.0,"wd":9.0,"rl":1.0,"bsm":0.75,"bsp":1.10,"bdm":0.65,"sp":0.15,"lat":0.0}],
"ScatterShot": [{"ao":-0.80,"len":32.0,"wd":8.0,"rl":1.1,"bsm":0.70,"bsp":1.00,"bdm":0.58,"sp":0.22,"lat":0.0},
                {"ao":-0.50,"len":36.0,"wd":10.0,"rl":1.1,"bsm":0.78,"bsp":1.00,"bdm":0.65,"sp":0.18,"lat":0.0},
                {"ao":-0.20,"len":40.0,"wd":11.0,"rl":1.1,"bsm":0.85,"bsp":1.00,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":42.0,"wd":12.0,"rl":1.1,"bsm":0.90,"bsp":1.00,"bdm":0.78,"sp":0.09,"lat":0.0},
                {"ao":0.20,"len":40.0,"wd":11.0,"rl":1.1,"bsm":0.85,"bsp":1.00,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.50,"len":36.0,"wd":10.0,"rl":1.1,"bsm":0.78,"bsp":1.00,"bdm":0.65,"sp":0.18,"lat":0.0},
                {"ao":0.80,"len":32.0,"wd":8.0,"rl":1.1,"bsm":0.70,"bsp":1.00,"bdm":0.58,"sp":0.22,"lat":0.0}],
"SplitMirror": [{"ao":-0.25,"len":40.0,"wd":10.0,"rl":1.2,"bsm":0.82,"bsp":1.10,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":12.0,"rl":1.2,"bsm":0.90,"bsp":1.10,"bdm":0.80,"sp":0.08,"lat":0.0},
                {"ao":0.25,"len":40.0,"wd":10.0,"rl":1.2,"bsm":0.82,"bsp":1.10,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":2.8916,"len":32.0,"wd":9.0,"rl":1.2,"bsm":0.78,"bsp":0.95,"bdm":0.62,"sp":0.12,"lat":0.0},
                {"ao":3.1416,"len":36.0,"wd":11.0,"rl":1.2,"bsm":0.85,"bsp":0.95,"bdm":0.70,"sp":0.08,"lat":0.0},
                {"ao":3.3916,"len":32.0,"wd":9.0,"rl":1.2,"bsm":0.78,"bsp":0.95,"bdm":0.62,"sp":0.12,"lat":0.0}],
"Primer":      [{"ao":-0.10,"len":46.0,"wd":16.0,"rl":1.3,"bsm":1.25,"bsp":0.85,"bdm":1.20,"sp":0.0,"lat":0.0,"is_sticky":true},
                {"ao":0.10,"len":46.0,"wd":16.0,"rl":1.3,"bsm":1.25,"bsp":0.85,"bdm":1.20,"sp":0.0,"lat":0.0,"is_sticky":true}],
"MegaBomb":    [{"ao":0.0,"len":46.0,"wd":16.0,"rl":1.4,"bsm":1.3,"bsp":0.80,"bdm":1.20,"sp":0.0,"lat":0.0,"is_bomb":true},
                {"ao":1.5708,"len":44.0,"wd":14.0,"rl":1.4,"bsm":1.2,"bsp":0.80,"bdm":1.10,"sp":0.0,"lat":0.0,"is_bomb":true},
                {"ao":3.1416,"len":46.0,"wd":16.0,"rl":1.4,"bsm":1.3,"bsp":0.80,"bdm":1.20,"sp":0.0,"lat":0.0,"is_bomb":true},
                {"ao":-1.5708,"len":44.0,"wd":14.0,"rl":1.4,"bsm":1.2,"bsp":0.80,"bdm":1.10,"sp":0.0,"lat":0.0,"is_bomb":true}],
"DoubleBomb":  [{"ao":0.7854,"len":40.0,"wd":14.0,"rl":1.3,"bsm":1.2,"bsp":0.82,"bdm":1.15,"sp":0.0,"lat":0.0,"is_bomb":true},
                {"ao":-0.7854,"len":40.0,"wd":14.0,"rl":1.3,"bsm":1.2,"bsp":0.82,"bdm":1.15,"sp":0.0,"lat":0.0,"is_bomb":true},
                {"ao":2.3562,"len":38.0,"wd":12.0,"rl":1.3,"bsm":1.15,"bsp":0.82,"bdm":1.10,"sp":0.0,"lat":0.0,"is_bomb":true},
                {"ao":-2.3562,"len":38.0,"wd":12.0,"rl":1.3,"bsm":1.15,"bsp":0.82,"bdm":1.10,"sp":0.0,"lat":0.0,"is_bomb":true}],

# T4 barrels (selected key tanks)
"Ranger":      [{"ao":0.0,"len":96.0,"wd":7.0,"rl":3.2,"bsm":0.60,"bsp":2.8,"bdm":3.0,"sp":0.0,"lat":0.0}],
"Annihilator": [{"ao":0.0,"len":58.0,"wd":30.0,"rl":2.8,"bsm":2.4,"bsp":0.95,"bdm":3.5,"sp":0.0,"lat":0.0}],
"Predator":    [{"ao":0.0,"len":80.0,"wd":9.0,"rl":3.0,"bsm":0.65,"bsp":2.5,"bdm":2.5,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":60.0,"wd":14.0,"rl":1.8,"bsm":1.1,"bsp":1.8,"bdm":1.8,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":45.0,"wd":19.0,"rl":1.0,"bsm":1.3,"bsp":1.2,"bdm":1.4,"sp":0.0,"lat":0.0}],
"Streamliner": [{"ao":0.0,"len":30.0,"wd":11.0,"rl":0.22,"bsm":0.65,"bsp":1.2,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":37.0,"wd":10.0,"rl":0.22,"bsm":0.65,"bsp":1.2,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":9.0,"rl":0.22,"bsm":0.65,"bsp":1.2,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":51.0,"wd":8.0,"rl":0.22,"bsm":0.65,"bsp":1.2,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":58.0,"wd":7.0,"rl":0.22,"bsm":0.65,"bsp":1.2,"bdm":0.55,"sp":0.0,"lat":0.0}],
"Overtrapper": [{"ao":0.0,"len":52.0,"wd":14.0,"rl":1.2,"bsm":1.1,"bsp":1.2,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":2.5,"len":34.0,"wd":12.0,"rl":0.8,"bsm":0.8,"bsp":1.0,"bdm":1.3,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":-2.5,"len":34.0,"wd":12.0,"rl":0.8,"bsm":0.8,"bsp":1.0,"bdm":1.3,"sp":0.0,"lat":0.0,"is_trap":true}],
"Skimmer":     [{"ao":0.30,"len":62.0,"wd":12.0,"rl":2.8,"bsm":1.2,"bsp":2.1,"bdm":1.5,"sp":0.0,"lat":0.0},
                {"ao":-0.30,"len":62.0,"wd":12.0,"rl":2.8,"bsm":1.2,"bsp":2.1,"bdm":1.5,"sp":0.0,"lat":0.0}],
"Landmine":    [],
"Fighter":     [{"ao":0.0,"len":55.0,"wd":14.0,"rl":1.3,"bsm":1.1,"bsp":1.3,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":36.0,"wd":11.0,"rl":0.9,"bsm":0.9,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":36.0,"wd":11.0,"rl":0.9,"bsm":0.9,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Rocketeer":   [{"ao":0.0,"len":58.0,"wd":28.0,"rl":0.48,"bsm":3.5,"bsp":2.4,"bdm":2.4,"sp":0.0,"lat":0.0}],
"Booster":     [{"ao":0.0,"len":54.0,"wd":14.0,"rl":0.88,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":40.0,"wd":12.0,"rl":0.55,"bsm":0.8,"bsp":1.1,"bdm":0.8,"sp":0.0,"lat":-10.0},
                {"ao":3.1416,"len":40.0,"wd":12.0,"rl":0.55,"bsm":0.8,"bsp":1.1,"bdm":0.8,"sp":0.0,"lat":10.0},
                {"ao":3.1416,"len":42.0,"wd":12.0,"rl":0.48,"bsm":0.8,"bsp":1.2,"bdm":0.88,"sp":0.0,"lat":0.0}],
"OctoTank":    [{"ao":0.0,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":3.9270,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":4.7124,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0},
                {"ao":5.4978,"len":41.0,"wd":12.0,"rl":1.7,"bsm":0.82,"bsp":0.96,"bdm":0.39,"sp":0.0,"lat":0.0}],
"GunnerTrapper":[{"ao":0.0,"len":47.0,"wd":9.0,"rl":0.35,"bsm":0.7,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":-7.0},
                {"ao":0.0,"len":47.0,"wd":9.0,"rl":0.35,"bsm":0.7,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":7.0},
                {"ao":3.1416,"len":42.0,"wd":21.0,"rl":1.6,"bsm":1.6,"bsp":1.6,"bdm":2.0,"sp":0.0,"lat":0.0,"is_trap":true}],
"PentaShot":   [{"ao":-0.52,"len":41.0,"wd":12.0,"rl":1.1,"bsm":0.85,"bsp":0.92,"bdm":0.425,"sp":0.0,"lat":0.0},
                {"ao":-0.26,"len":41.0,"wd":12.0,"rl":1.1,"bsm":0.85,"bsp":0.92,"bdm":0.425,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":41.0,"wd":12.0,"rl":1.1,"bsm":0.85,"bsp":0.92,"bdm":0.425,"sp":0.0,"lat":0.0},
                {"ao":0.26,"len":41.0,"wd":12.0,"rl":1.1,"bsm":0.85,"bsp":0.92,"bdm":0.425,"sp":0.0,"lat":0.0},
                {"ao":0.52,"len":41.0,"wd":12.0,"rl":1.1,"bsm":0.85,"bsp":0.92,"bdm":0.425,"sp":0.0,"lat":0.0}],
"Hurricane":   [{"ao":0.0,"len":40.0,"wd":12.0,"rl":0.9,"bsm":1.0,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":-8.0},
                {"ao":0.0,"len":38.0,"wd":10.0,"rl":0.9,"bsm":0.88,"bsp":0.9,"bdm":1.2,"sp":0.0,"lat":8.0},
                {"ao":2.09,"len":40.0,"wd":12.0,"rl":0.9,"bsm":1.0,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":-8.0},
                {"ao":2.09,"len":38.0,"wd":10.0,"rl":0.9,"bsm":0.88,"bsp":0.9,"bdm":1.2,"sp":0.0,"lat":8.0},
                {"ao":-2.09,"len":40.0,"wd":12.0,"rl":0.9,"bsm":1.0,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":-8.0},
                {"ao":-2.09,"len":38.0,"wd":10.0,"rl":0.9,"bsm":0.88,"bsp":0.9,"bdm":1.2,"sp":0.0,"lat":8.0}],
"MoreGun":     [{"ao":0.0,"len":48.0,"wd":10.0,"rl":0.38,"bsm":0.80,"bsp":1.0,"bdm":0.35,"sp":0.0,"lat":-21.0},
                {"ao":0.0,"len":48.0,"wd":10.0,"rl":0.38,"bsm":0.80,"bsp":1.0,"bdm":0.35,"sp":0.0,"lat":-7.0},
                {"ao":0.0,"len":48.0,"wd":10.0,"rl":0.38,"bsm":0.80,"bsp":1.0,"bdm":0.35,"sp":0.0,"lat":7.0},
                {"ao":0.0,"len":48.0,"wd":10.0,"rl":0.38,"bsm":0.80,"bsp":1.0,"bdm":0.35,"sp":0.0,"lat":21.0}],
"Spreadshot":  [{"ao":0.0,"len":46.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":0.45,"sp":0.0,"lat":0.0},
                {"ao":0.5,"len":42.0,"wd":12.0,"rl":1.0,"bsm":0.9,"bsp":0.9,"bdm":0.50,"sp":0.0,"lat":0.0},
                {"ao":-0.5,"len":42.0,"wd":12.0,"rl":1.0,"bsm":0.9,"bsp":0.9,"bdm":0.50,"sp":0.0,"lat":0.0},
                {"ao":0.9,"len":38.0,"wd":11.0,"rl":1.0,"bsm":0.8,"bsp":0.8,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":-0.9,"len":38.0,"wd":11.0,"rl":1.0,"bsm":0.8,"bsp":0.8,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":1.2,"len":34.0,"wd":10.0,"rl":1.0,"bsm":0.7,"bsp":0.7,"bdm":0.60,"sp":0.0,"lat":0.0},
                {"ao":-1.2,"len":34.0,"wd":10.0,"rl":1.0,"bsm":0.7,"bsp":0.7,"bdm":0.60,"sp":0.0,"lat":0.0}],
"TriAngle":    [{"ao":0.0,"len":52.0,"wd":14.0,"rl":1.2,"bsm":1.1,"bsp":1.2,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":2.4,"len":38.0,"wd":12.0,"rl":0.9,"bsm":0.9,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-2.4,"len":38.0,"wd":12.0,"rl":0.9,"bsm":0.9,"bsp":1.0,"bdm":1.2,"sp":0.0,"lat":0.0}],
"BentHybrid":  [{"ao":0.0,"len":50.0,"wd":16.0,"rl":1.0,"bsm":1.2,"bsp":1.2,"bdm":0.60,"sp":0.0,"lat":0.0},
                {"ao":0.7,"len":43.0,"wd":12.0,"rl":0.85,"bsm":1.0,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":-0.7,"len":43.0,"wd":12.0,"rl":0.85,"bsm":1.0,"bsp":1.0,"bdm":0.65,"sp":0.0,"lat":0.0}],
"TwinFlank":   [{"ao":0.0,"len":50.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":-8.0},
                {"ao":0.0,"len":50.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":8.0},
                {"ao":3.1416,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":-8.0},
                {"ao":3.1416,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":8.0}],
"TripleTwin":  [{"ao":0.0,"len":46.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":-9.0},
                {"ao":0.0,"len":46.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":9.0},
                {"ao":2.0944,"len":44.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":-9.0},
                {"ao":2.0944,"len":44.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":9.0},
                {"ao":-2.0944,"len":44.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":-9.0},
                {"ao":-2.0944,"len":44.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":9.0}],
"Triplet":     [{"ao":-0.18,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":56.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.1,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":0.18,"len":48.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Battleship":  [{"ao":0.7854,"len":34.0,"wd":10.0,"rl":0.80,"bsm":1.1,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":34.0,"wd":10.0,"rl":0.80,"bsm":1.1,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":-2.3562,"len":34.0,"wd":10.0,"rl":0.80,"bsm":1.1,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":-0.7854,"len":34.0,"wd":10.0,"rl":0.80,"bsm":1.1,"bsp":1.0,"bdm":0.72,"sp":0.0,"lat":0.0}],
"Fortress":    [{"ao":0.0,"len":42.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":40.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":42.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":40.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":42.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":3.9270,"len":40.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":4.7124,"len":42.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":5.4978,"len":40.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Auto3":       [{"ao":0.0,"len":42.0,"wd":12.0,"rl":1.1,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":40.0,"wd":11.0,"rl":1.1,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":40.0,"wd":11.0,"rl":1.1,"bsm":1.0,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"AutoSmasher": [], "Spike": [], "MegaSmasher": [],
"Phantom":     [{"ao":-0.10,"len":62.0,"wd":9.0,"rl":1.6,"bsm":0.75,"bsp":1.6,"bdm":1.8,"sp":0.0,"lat":0.0},
                {"ao":0.10,"len":62.0,"wd":9.0,"rl":1.6,"bsm":0.75,"bsp":1.6,"bdm":1.8,"sp":0.0,"lat":0.0}],
"Ambusher":    [{"ao":0.0,"len":75.0,"wd":11.0,"rl":2.5,"bsm":0.70,"bsp":2.0,"bdm":2.2,"sp":0.0,"lat":0.0}],
"Spy":         [{"ao":0.0,"len":55.0,"wd":10.0,"rl":1.4,"bsm":0.80,"bsp":1.4,"bdm":1.5,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":42.0,"wd":9.0,"rl":1.2,"bsm":0.78,"bsp":1.3,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":42.0,"wd":9.0,"rl":1.2,"bsm":0.78,"bsp":1.3,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Specter": [], "RamX": [],
"Mine":        [{"ao":0.0,"len":36.0,"wd":14.0,"rl":0.9,"bsm":0.9,"bsp":0.8,"bdm":1.2,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":3.1416,"len":36.0,"wd":14.0,"rl":0.9,"bsm":0.9,"bsp":0.8,"bdm":1.2,"sp":0.0,"lat":0.0,"is_trap":true}],
"Swarm":       [{"ao":0.0,"len":28.0,"wd":7.0,"rl":0.72,"bsm":1.1,"bsp":1.05,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":28.0,"wd":7.0,"rl":0.72,"bsm":1.1,"bsp":1.05,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":28.0,"wd":7.0,"rl":0.72,"bsm":1.1,"bsp":1.05,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":28.0,"wd":7.0,"rl":0.72,"bsm":1.1,"bsp":1.05,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":4.1888,"len":28.0,"wd":7.0,"rl":0.72,"bsm":1.1,"bsp":1.05,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":5.2360,"len":28.0,"wd":7.0,"rl":0.72,"bsm":1.1,"bsp":1.05,"bdm":0.65,"sp":0.0,"lat":0.0}],
"Guardian":    [{"ao":0.0,"len":30.0,"wd":10.0,"rl":0.80,"bsm":1.25,"bsp":1.0,"bdm":0.80,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":30.0,"wd":10.0,"rl":0.80,"bsm":1.25,"bsp":1.0,"bdm":0.80,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":30.0,"wd":10.0,"rl":0.80,"bsm":1.25,"bsp":1.0,"bdm":0.80,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":30.0,"wd":10.0,"rl":0.80,"bsm":1.25,"bsp":1.0,"bdm":0.80,"sp":0.0,"lat":0.0}],
"HunterDrone": [{"ao":-0.15,"len":55.0,"wd":9.0,"rl":1.2,"bsm":1.0,"bsp":1.5,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":64.0,"wd":10.0,"rl":1.6,"bsm":0.85,"bsp":1.5,"bdm":1.5,"sp":0.0,"lat":0.0},
                {"ao":0.15,"len":55.0,"wd":9.0,"rl":1.2,"bsm":1.0,"bsp":1.5,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Devastator":  [{"ao":-0.65,"len":30.0,"wd":9.0,"rl":1.0,"bsm":0.95,"bsp":0.85,"bdm":0.55,"sp":0.25,"lat":0.0},
                {"ao":-0.44,"len":34.0,"wd":10.0,"rl":1.0,"bsm":0.97,"bsp":0.85,"bdm":0.65,"sp":0.20,"lat":0.0},
                {"ao":-0.22,"len":38.0,"wd":12.0,"rl":1.0,"bsm":1.0,"bsp":0.85,"bdm":0.75,"sp":0.16,"lat":0.0},
                {"ao":-0.08,"len":42.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":0.85,"bdm":0.82,"sp":0.13,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":0.85,"bdm":0.88,"sp":0.11,"lat":0.0},
                {"ao":0.08,"len":42.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":0.85,"bdm":0.82,"sp":0.13,"lat":0.0},
                {"ao":0.22,"len":38.0,"wd":12.0,"rl":1.0,"bsm":1.0,"bsp":0.85,"bdm":0.75,"sp":0.16,"lat":0.0},
                {"ao":0.44,"len":34.0,"wd":10.0,"rl":1.0,"bsm":0.97,"bsp":0.85,"bdm":0.65,"sp":0.20,"lat":0.0},
                {"ao":0.65,"len":30.0,"wd":9.0,"rl":1.0,"bsm":0.95,"bsp":0.85,"bdm":0.55,"sp":0.25,"lat":0.0}],
"Barrage":     [{"ao":-0.3,"len":40.0,"wd":11.0,"rl":0.7,"bsm":1.1,"bsp":0.85,"bdm":0.78,"sp":0.0,"lat":0.0},
                {"ao":-0.12,"len":44.0,"wd":13.0,"rl":0.7,"bsm":1.12,"bsp":0.85,"bdm":0.85,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":46.0,"wd":14.0,"rl":0.7,"bsm":1.15,"bsp":0.85,"bdm":0.9,"sp":0.0,"lat":0.0},
                {"ao":0.12,"len":44.0,"wd":13.0,"rl":0.7,"bsm":1.12,"bsp":0.85,"bdm":0.85,"sp":0.0,"lat":0.0},
                {"ao":0.3,"len":40.0,"wd":11.0,"rl":0.7,"bsm":1.1,"bsp":0.85,"bdm":0.78,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":32.0,"wd":11.0,"rl":0.6,"bsm":0.95,"bsp":0.85,"bdm":0.7,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":32.0,"wd":11.0,"rl":0.6,"bsm":0.95,"bsp":0.85,"bdm":0.7,"sp":0.0,"lat":0.0}],
"Canister":    [{"ao":-0.28,"len":42.0,"wd":18.0,"rl":1.0,"bsm":0.8,"bsp":1.1,"bdm":1.5,"sp":0.20,"lat":0.0},
                {"ao":0.0,"len":46.0,"wd":20.0,"rl":1.0,"bsm":0.75,"bsp":1.1,"bdm":1.8,"sp":0.15,"lat":0.0},
                {"ao":0.28,"len":42.0,"wd":18.0,"rl":1.0,"bsm":0.8,"bsp":1.1,"bdm":1.5,"sp":0.20,"lat":0.0}],
"Juggernaut":  [{"ao":-0.22,"len":50.0,"wd":24.0,"rl":1.0,"bsm":0.65,"bsp":1.5,"bdm":2.5,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":52.0,"wd":26.0,"rl":1.0,"bsm":0.6,"bsp":1.5,"bdm":2.8,"sp":0.0,"lat":0.0},
                {"ao":0.22,"len":50.0,"wd":24.0,"rl":1.0,"bsm":0.65,"bsp":1.5,"bdm":2.5,"sp":0.0,"lat":0.0}],
"Obliterator": [{"ao":0.0,"len":52.0,"wd":30.0,"rl":1.0,"bsm":0.55,"bsp":1.8,"bdm":3.5,"sp":0.0,"lat":0.0},
                {"ao":1.7278,"len":34.0,"wd":14.0,"rl":1.0,"bsm":0.75,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-1.7278,"len":34.0,"wd":14.0,"rl":1.0,"bsm":0.75,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Breacher":    [{"ao":-0.15,"len":50.0,"wd":22.0,"rl":1.0,"bsm":0.68,"bsp":1.4,"bdm":2.2,"sp":0.0,"lat":0.0},
                {"ao":0.15,"len":50.0,"wd":22.0,"rl":1.0,"bsm":0.68,"bsp":1.4,"bdm":2.2,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":38.0,"wd":16.0,"rl":1.0,"bsm":0.72,"bsp":1.1,"bdm":1.3,"sp":0.0,"lat":0.0},
                {"ao":-0.7854,"len":38.0,"wd":16.0,"rl":1.0,"bsm":0.72,"bsp":1.1,"bdm":1.3,"sp":0.0,"lat":0.0}],
"Havoc":       [{"ao":0.0,"len":44.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":42.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.9,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":44.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":42.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.9,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":44.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":3.9270,"len":42.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.9,"sp":0.0,"lat":0.0},
                {"ao":4.7124,"len":44.0,"wd":14.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":5.4978,"len":42.0,"wd":13.0,"rl":1.0,"bsm":1.0,"bsp":0.92,"bdm":0.9,"sp":0.0,"lat":0.0}],
"Tempest":     [{"ao":0.0,"len":46.0,"wd":15.0,"rl":0.8,"bsm":1.05,"bsp":0.92,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":0.15,"len":44.0,"wd":14.0,"rl":0.8,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":1.6508,"len":44.0,"wd":14.0,"rl":0.8,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":-1.4908,"len":44.0,"wd":14.0,"rl":0.8,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":3.2216,"len":44.0,"wd":14.0,"rl":0.8,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":-0.15,"len":44.0,"wd":14.0,"rl":0.8,"bsm":1.0,"bsp":0.92,"bdm":0.95,"sp":0.0,"lat":0.0}],
"Vortex":      [{"ao":-0.35,"len":44.0,"wd":12.0,"rl":1.0,"bsm":1.0,"bsp":0.9,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":0.35,"len":44.0,"wd":12.0,"rl":1.0,"bsm":1.0,"bsp":0.9,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":40.0,"wd":11.0,"rl":1.0,"bsm":1.0,"bsp":0.9,"bdm":0.82,"sp":0.0,"lat":0.0},
                {"ao":-1.0472,"len":40.0,"wd":11.0,"rl":1.0,"bsm":1.0,"bsp":0.9,"bdm":0.82,"sp":0.0,"lat":0.0},
                {"ao":2.8016,"len":40.0,"wd":11.0,"rl":1.0,"bsm":0.95,"bsp":0.9,"bdm":0.8,"sp":0.0,"lat":0.0},
                {"ao":3.4816,"len":40.0,"wd":11.0,"rl":1.0,"bsm":0.95,"bsp":0.9,"bdm":0.8,"sp":0.0,"lat":0.0},
                {"ao":1.9708,"len":38.0,"wd":11.0,"rl":1.0,"bsm":0.95,"bsp":0.9,"bdm":0.78,"sp":0.0,"lat":0.0},
                {"ao":-1.9708,"len":38.0,"wd":11.0,"rl":1.0,"bsm":0.95,"bsp":0.9,"bdm":0.78,"sp":0.0,"lat":0.0}],
"Titan":       [{"ao":0.0,"len":58.0,"wd":36.0,"rl":1.0,"bsm":0.5,"bsp":2.1,"bdm":4.5,"sp":0.0,"lat":0.0},
                {"ao":3.4416,"len":32.0,"wd":12.0,"rl":1.0,"bsm":0.82,"bsp":0.88,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":30.0,"wd":12.0,"rl":1.0,"bsm":0.82,"bsp":0.88,"bdm":0.75,"sp":0.0,"lat":0.0},
                {"ao":2.8416,"len":32.0,"wd":12.0,"rl":1.0,"bsm":0.82,"bsp":0.88,"bdm":0.72,"sp":0.0,"lat":0.0}],
"Leviathan":   [{"ao":-0.12,"len":56.0,"wd":30.0,"rl":1.0,"bsm":0.52,"bsp":1.85,"bdm":3.8,"sp":0.0,"lat":0.0},
                {"ao":0.12,"len":56.0,"wd":30.0,"rl":1.0,"bsm":0.52,"bsp":1.85,"bdm":3.8,"sp":0.0,"lat":0.0},
                {"ao":3.3916,"len":30.0,"wd":11.0,"rl":1.0,"bsm":0.8,"bsp":0.88,"bdm":0.7,"sp":0.0,"lat":0.0},
                {"ao":2.8916,"len":30.0,"wd":11.0,"rl":1.0,"bsm":0.8,"bsp":0.88,"bdm":0.7,"sp":0.0,"lat":0.0}],
"Bastion":     [{"ao":0.0,"len":58.0,"wd":34.0,"rl":1.0,"bsm":0.5,"bsp":2.0,"bdm":4.2,"sp":0.0,"lat":0.0},
                {"ao":1.6808,"len":34.0,"wd":13.0,"rl":1.0,"bsm":0.78,"bsp":1.0,"bdm":0.9,"sp":0.0,"lat":0.0},
                {"ao":-1.6808,"len":34.0,"wd":13.0,"rl":1.0,"bsm":0.78,"bsp":1.0,"bdm":0.9,"sp":0.0,"lat":0.0},
                {"ao":3.4916,"len":30.0,"wd":12.0,"rl":1.0,"bsm":0.8,"bsp":0.9,"bdm":0.75,"sp":0.0,"lat":0.0},
                {"ao":2.7916,"len":30.0,"wd":12.0,"rl":1.0,"bsm":0.8,"bsp":0.9,"bdm":0.75,"sp":0.0,"lat":0.0}],
"Warship":     [{"ao":-0.18,"len":52.0,"wd":26.0,"rl":1.0,"bsm":0.56,"bsp":1.6,"bdm":3.0,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":54.0,"wd":28.0,"rl":1.0,"bsm":0.52,"bsp":1.6,"bdm":3.2,"sp":0.0,"lat":0.0},
                {"ao":0.18,"len":52.0,"wd":26.0,"rl":1.0,"bsm":0.56,"bsp":1.6,"bdm":3.0,"sp":0.0,"lat":0.0}],
"Flagship":    [{"ao":-0.1,"len":54.0,"wd":28.0,"rl":1.0,"bsm":0.54,"bsp":1.7,"bdm":3.2,"sp":0.0,"lat":0.0},
                {"ao":0.1,"len":54.0,"wd":28.0,"rl":1.0,"bsm":0.54,"bsp":1.7,"bdm":3.2,"sp":0.0,"lat":0.0},
                {"ao":1.7708,"len":36.0,"wd":14.0,"rl":1.0,"bsm":0.76,"bsp":1.05,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":-1.7708,"len":36.0,"wd":14.0,"rl":1.0,"bsm":0.76,"bsp":1.05,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Ironclad":    [{"ao":-0.08,"len":52.0,"wd":26.0,"rl":1.0,"bsm":0.56,"bsp":1.55,"bdm":2.8,"sp":0.0,"lat":0.0},
                {"ao":0.08,"len":52.0,"wd":26.0,"rl":1.0,"bsm":0.56,"bsp":1.55,"bdm":2.8,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":38.0,"wd":18.0,"rl":1.0,"bsm":0.72,"bsp":1.1,"bdm":1.3,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":38.0,"wd":18.0,"rl":1.0,"bsm":0.72,"bsp":1.1,"bdm":1.3,"sp":0.0,"lat":0.0},
                {"ao":1.8708,"len":32.0,"wd":14.0,"rl":1.0,"bsm":0.74,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":-1.8708,"len":32.0,"wd":14.0,"rl":1.0,"bsm":0.74,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Behemoth":    [{"ao":0.0,"len":52.0,"wd":28.0,"rl":1.0,"bsm":0.58,"bsp":1.5,"bdm":2.8,"sp":0.0,"lat":0.0},
                {"ao":1.6708,"len":38.0,"wd":16.0,"rl":1.0,"bsm":0.65,"bsp":1.2,"bdm":1.4,"sp":0.0,"lat":0.0},
                {"ao":-1.6708,"len":38.0,"wd":16.0,"rl":1.0,"bsm":0.65,"bsp":1.2,"bdm":1.4,"sp":0.0,"lat":0.0},
                {"ao":1.9708,"len":32.0,"wd":13.0,"rl":1.0,"bsm":0.67,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":-1.9708,"len":32.0,"wd":13.0,"rl":1.0,"bsm":0.67,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Rampage":     [{"ao":-0.12,"len":50.0,"wd":22.0,"rl":1.0,"bsm":0.62,"bsp":1.4,"bdm":2.2,"sp":0.0,"lat":0.0},
                {"ao":0.12,"len":50.0,"wd":22.0,"rl":1.0,"bsm":0.62,"bsp":1.4,"bdm":2.2,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":36.0,"wd":15.0,"rl":1.0,"bsm":0.65,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":36.0,"wd":15.0,"rl":1.0,"bsm":0.65,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":34.0,"wd":14.0,"rl":1.0,"bsm":0.67,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0}],
"Bulwark":     [{"ao":0.0,"len":54.0,"wd":30.0,"rl":1.0,"bsm":0.58,"bsp":1.6,"bdm":3.0,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":40.0,"wd":18.0,"rl":1.0,"bsm":0.66,"bsp":1.15,"bdm":1.35,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":40.0,"wd":18.0,"rl":1.0,"bsm":0.66,"bsp":1.15,"bdm":1.35,"sp":0.0,"lat":0.0},
                {"ao":1.8708,"len":34.0,"wd":14.0,"rl":1.0,"bsm":0.68,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":-1.8708,"len":34.0,"wd":14.0,"rl":1.0,"bsm":0.68,"bsp":1.0,"bdm":1.0,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":38.0,"wd":16.0,"rl":1.0,"bsm":0.67,"bsp":1.1,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Overlord":    [{"ao":0.0,"len":42.0,"wd":16.0,"rl":0.68,"bsm":1.4,"bsp":1.0,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":42.0,"wd":16.0,"rl":0.68,"bsm":1.4,"bsp":1.0,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":42.0,"wd":16.0,"rl":0.68,"bsm":1.4,"bsp":1.0,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":42.0,"wd":16.0,"rl":0.68,"bsm":1.4,"bsp":1.0,"bdm":0.95,"sp":0.0,"lat":0.0}],
"Manager":     [{"ao":0.0,"len":44.0,"wd":18.0,"rl":0.72,"bsm":1.35,"bsp":1.0,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":44.0,"wd":18.0,"rl":0.72,"bsm":1.35,"bsp":1.0,"bdm":0.90,"sp":0.0,"lat":0.0}],
"Necromancer": [{"ao":0.0,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":3.9270,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":4.7124,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0},
                {"ao":5.4978,"len":28.0,"wd":11.0,"rl":0.55,"bsm":0.85,"bsp":1.0,"bdm":0.48,"sp":0.0,"lat":0.0}],
"Warden":      [{"ao":0.0,"len":52.0,"wd":16.0,"rl":1.1,"bsm":1.1,"bsp":1.2,"bdm":1.1,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":36.0,"wd":13.0,"rl":0.80,"bsm":0.9,"bsp":0.9,"bdm":1.2,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":-1.5708,"len":36.0,"wd":13.0,"rl":0.80,"bsm":0.9,"bsp":0.9,"bdm":1.2,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":2.3562,"len":32.0,"wd":12.0,"rl":0.80,"bsm":0.88,"bsp":0.9,"bdm":1.1,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":-2.3562,"len":32.0,"wd":12.0,"rl":0.80,"bsm":0.88,"bsp":0.9,"bdm":1.1,"sp":0.0,"lat":0.0,"is_trap":true}],
"Golem": [], "Paragon":    [{"ao":0.0,"len":50.0,"wd":15.0,"rl":1.3,"bsm":1.15,"bsp":0.92,"bdm":1.3,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":46.0,"wd":13.0,"rl":1.3,"bsm":1.1,"bsp":0.90,"bdm":1.2,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":50.0,"wd":15.0,"rl":1.3,"bsm":1.15,"bsp":0.92,"bdm":1.3,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":46.0,"wd":13.0,"rl":1.3,"bsm":1.1,"bsp":0.90,"bdm":1.2,"sp":0.0,"lat":0.0}],
"Phalanx":     [{"ao":0.0,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":3.9270,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":4.7124,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0},
                {"ao":5.4978,"len":42.0,"wd":12.0,"rl":1.4,"bsm":1.05,"bsp":0.90,"bdm":1.05,"sp":0.0,"lat":0.0}],
"Garrison":    [{"ao":0.0,"len":54.0,"wd":20.0,"rl":1.4,"bsm":1.3,"bsp":0.90,"bdm":1.6,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":46.0,"wd":16.0,"rl":1.4,"bsm":1.2,"bsp":0.88,"bdm":1.4,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":46.0,"wd":16.0,"rl":1.4,"bsm":1.2,"bsp":0.88,"bdm":1.4,"sp":0.0,"lat":0.0}],
"Redoubt": [], "Bulkhead":    [{"ao":0.0,"len":60.0,"wd":24.0,"rl":1.7,"bsm":1.5,"bsp":0.88,"bdm":2.2,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":18.0,"rl":1.5,"bsm":1.3,"bsp":0.88,"bdm":1.6,"sp":0.0,"lat":0.0}],
"Marshal":     [{"ao":0.0,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":0.7854,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":3.9270,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":4.7124,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0},
                {"ao":5.4978,"len":26.0,"wd":8.0,"rl":0.70,"bsm":1.15,"bsp":1.0,"bdm":0.68,"sp":0.0,"lat":0.0}],
"Vanguard":    [{"ao":0.0,"len":34.0,"wd":13.0,"rl":0.70,"bsm":1.3,"bsp":1.0,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":34.0,"wd":13.0,"rl":0.70,"bsm":1.3,"bsp":1.0,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":34.0,"wd":13.0,"rl":0.70,"bsm":1.3,"bsp":1.0,"bdm":0.88,"sp":0.0,"lat":0.0}],
"Outpost":     [{"ao":0.7854,"len":30.0,"wd":10.0,"rl":0.88,"bsm":1.1,"bsp":1.0,"bdm":0.70,"sp":0.0,"lat":0.0},
                {"ao":-0.7854,"len":30.0,"wd":10.0,"rl":0.88,"bsm":1.1,"bsp":1.0,"bdm":0.70,"sp":0.0,"lat":0.0},
                {"ao":2.3562,"len":34.0,"wd":12.0,"rl":0.85,"bsm":0.90,"bsp":0.90,"bdm":1.0,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":-2.3562,"len":34.0,"wd":12.0,"rl":0.85,"bsm":0.90,"bsp":0.90,"bdm":1.0,"sp":0.0,"lat":0.0,"is_trap":true},
                {"ao":0.0,"len":42.0,"wd":13.0,"rl":1.05,"bsm":1.0,"bsp":1.05,"bdm":0.90,"sp":0.0,"lat":0.0}],
"HeavyShell":  [{"ao":0.0,"len":66.0,"wd":28.0,"rl":3.00,"bsm":2.00,"bsp":1.00,"bdm":2.80,"sp":0.0,"lat":0.0}],
"CannonBarrage":[{"ao":-0.12,"len":60.0,"wd":20.0,"rl":2.20,"bsm":1.50,"bsp":1.15,"bdm":1.80,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":64.0,"wd":22.0,"rl":2.50,"bsm":1.60,"bsp":1.15,"bdm":2.00,"sp":0.0,"lat":0.0},
                {"ao":0.12,"len":60.0,"wd":20.0,"rl":2.20,"bsm":1.50,"bsp":1.15,"bdm":1.80,"sp":0.0,"lat":0.0}],
"SiegeGun":    [{"ao":0.0,"len":62.0,"wd":24.0,"rl":2.50,"bsm":1.70,"bsp":1.10,"bdm":2.20,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":40.0,"wd":14.0,"rl":1.50,"bsm":1.10,"bsp":0.90,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":40.0,"wd":14.0,"rl":1.50,"bsm":1.10,"bsp":0.90,"bdm":1.00,"sp":0.0,"lat":0.0}],
"RapidBurst":  [{"ao":0.0,"len":72.0,"wd":8.0,"rl":0.80,"bsm":0.65,"bsp":2.00,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":66.0,"wd":8.0,"rl":1.00,"bsm":0.64,"bsp":2.00,"bdm":1.08,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":60.0,"wd":8.0,"rl":1.20,"bsm":0.63,"bsp":2.00,"bdm":1.06,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":54.0,"wd":8.0,"rl":1.40,"bsm":0.62,"bsp":2.00,"bdm":1.04,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":48.0,"wd":8.0,"rl":1.60,"bsm":0.61,"bsp":2.00,"bdm":1.02,"sp":0.0,"lat":0.0}],
"TriSnipe":    [{"ao":0.0,"len":70.0,"wd":9.0,"rl":2.50,"bsm":0.62,"bsp":2.00,"bdm":1.30,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":68.0,"wd":8.0,"rl":2.50,"bsm":0.60,"bsp":2.00,"bdm":1.25,"sp":0.0,"lat":0.0},
                {"ao":-2.0944,"len":68.0,"wd":8.0,"rl":2.50,"bsm":0.60,"bsp":2.00,"bdm":1.25,"sp":0.0,"lat":0.0}],
"GaussRifle":  [{"ao":0.0,"len":80.0,"wd":8.0,"rl":3.50,"bsm":0.55,"bsp":3.00,"bdm":1.60,"sp":0.0,"lat":0.0}],
"LongRangeX":  [{"ao":0.0,"len":84.0,"wd":10.0,"rl":3.0,"bsm":0.60,"bsp":2.60,"bdm":2.00,"sp":0.0,"lat":0.0}],
"SniperX":     [{"ao":0.0,"len":84.0,"wd":9.0,"rl":3.20,"bsm":0.58,"bsp":2.40,"bdm":1.50,"sp":0.0,"lat":0.0}],
"TwinRifle":   [{"ao":-0.06,"len":78.0,"wd":8.0,"rl":3.00,"bsm":0.58,"bsp":2.20,"bdm":1.40,"sp":0.0,"lat":0.0},
                {"ao":0.06,"len":78.0,"wd":8.0,"rl":3.00,"bsm":0.58,"bsp":2.20,"bdm":1.40,"sp":0.0,"lat":0.0}],
"Bloodlust":   [{"ao":0.0,"len":54.0,"wd":14.0,"rl":1.10,"bsm":1.05,"bsp":1.15,"bdm":1.20,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":48.0,"wd":12.0,"rl":1.20,"bsm":1.00,"bsp":1.10,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":54.0,"wd":14.0,"rl":1.10,"bsm":1.05,"bsp":1.15,"bdm":1.20,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":48.0,"wd":12.0,"rl":1.20,"bsm":1.00,"bsp":1.10,"bdm":1.00,"sp":0.0,"lat":0.0}],
"DarkFangs":   [{"ao":-0.12,"len":56.0,"wd":15.0,"rl":1.20,"bsm":1.10,"bsp":1.20,"bdm":1.30,"sp":0.0,"lat":0.0},
                {"ao":0.12,"len":56.0,"wd":15.0,"rl":1.20,"bsm":1.10,"bsp":1.20,"bdm":1.30,"sp":0.0,"lat":0.0}],
"VampireX":    [{"ao":0.0,"len":62.0,"wd":18.0,"rl":2.00,"bsm":1.20,"bsp":1.40,"bdm":1.80,"sp":0.0,"lat":0.0}],
"SoulReaper":  [{"ao":0.0,"len":32.0,"wd":10.0,"rl":0.78,"bsm":1.25,"bsp":1.10,"bdm":0.85,"sp":0.0,"lat":0.0},
                {"ao":1.2566,"len":32.0,"wd":10.0,"rl":0.78,"bsm":1.25,"bsp":1.10,"bdm":0.85,"sp":0.0,"lat":0.0},
                {"ao":2.5133,"len":32.0,"wd":10.0,"rl":0.78,"bsm":1.25,"bsp":1.10,"bdm":0.85,"sp":0.0,"lat":0.0},
                {"ao":3.7699,"len":32.0,"wd":10.0,"rl":0.78,"bsm":1.25,"bsp":1.10,"bdm":0.85,"sp":0.0,"lat":0.0},
                {"ao":5.0265,"len":32.0,"wd":10.0,"rl":0.78,"bsm":1.25,"bsp":1.10,"bdm":0.85,"sp":0.0,"lat":0.0}],
"EclipseDrain":[{"ao":0.0,"len":38.0,"wd":12.0,"rl":0.80,"bsm":1.30,"bsp":1.10,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":38.0,"wd":12.0,"rl":0.80,"bsm":1.30,"bsp":1.10,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":38.0,"wd":12.0,"rl":0.80,"bsm":1.30,"bsp":1.10,"bdm":0.88,"sp":0.0,"lat":0.0}],
"VoidDrain":   [{"ao":0.0,"len":36.0,"wd":11.0,"rl":0.72,"bsm":1.35,"bsp":1.10,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":36.0,"wd":11.0,"rl":0.72,"bsm":1.35,"bsp":1.10,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":36.0,"wd":11.0,"rl":0.72,"bsm":1.35,"bsp":1.10,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":36.0,"wd":11.0,"rl":0.72,"bsm":1.35,"bsp":1.10,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":4.1888,"len":36.0,"wd":11.0,"rl":0.72,"bsm":1.35,"bsp":1.10,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":5.2360,"len":36.0,"wd":11.0,"rl":0.72,"bsm":1.35,"bsp":1.10,"bdm":0.90,"sp":0.0,"lat":0.0}],
"Wraith":      [{"ao":-0.10,"len":60.0,"wd":10.0,"rl":1.80,"bsm":0.80,"bsp":1.50,"bdm":1.60,"sp":0.0,"lat":0.0},
                {"ao":0.10,"len":60.0,"wd":10.0,"rl":1.80,"bsm":0.80,"bsp":1.50,"bdm":1.60,"sp":0.0,"lat":0.0}],
"NightShade":  [{"ao":0.0,"len":74.0,"wd":10.0,"rl":2.50,"bsm":0.68,"bsp":1.80,"bdm":2.00,"sp":0.0,"lat":0.0}],
"DarkReaper":  [{"ao":0.0,"len":54.0,"wd":16.0,"rl":2.00,"bsm":0.90,"bsp":1.30,"bdm":1.50,"sp":0.0,"lat":0.0}],
"ArcaneStorm": [{"ao":-0.25,"len":48.0,"wd":12.0,"rl":1.40,"bsm":1.00,"bsp":1.30,"bdm":0.95,"sp":0.0,"lat":0.0},
                {"ao":-0.08,"len":52.0,"wd":13.0,"rl":1.40,"bsm":1.05,"bsp":1.30,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":0.08,"len":52.0,"wd":13.0,"rl":1.40,"bsm":1.05,"bsp":1.30,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":0.25,"len":48.0,"wd":12.0,"rl":1.40,"bsm":1.00,"bsp":1.30,"bdm":0.95,"sp":0.0,"lat":0.0}],
"ChainBlast":  [{"ao":0.0,"len":52.0,"wd":14.0,"rl":1.30,"bsm":1.05,"bsp":1.35,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":1.5708,"len":46.0,"wd":12.0,"rl":1.50,"bsm":1.00,"bsp":1.25,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":46.0,"wd":12.0,"rl":1.50,"bsm":1.00,"bsp":1.25,"bdm":0.90,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":44.0,"wd":11.0,"rl":1.60,"bsm":0.95,"bsp":1.20,"bdm":0.88,"sp":0.0,"lat":0.0}],
"ArcCaster":   [{"ao":0.0,"len":34.0,"wd":11.0,"rl":0.82,"bsm":1.20,"bsp":1.10,"bdm":0.80,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":34.0,"wd":11.0,"rl":0.82,"bsm":1.20,"bsp":1.10,"bdm":0.80,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":34.0,"wd":11.0,"rl":0.82,"bsm":1.20,"bsp":1.10,"bdm":0.80,"sp":0.0,"lat":0.0}],
"Thunderclap": [{"ao":0.0,"len":54.0,"wd":20.0,"rl":1.60,"bsm":1.30,"bsp":1.30,"bdm":1.40,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":38.0,"wd":12.0,"rl":1.40,"bsm":1.05,"bsp":1.20,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":-1.0472,"len":38.0,"wd":12.0,"rl":1.40,"bsm":1.05,"bsp":1.20,"bdm":1.00,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":36.0,"wd":11.0,"rl":1.60,"bsm":1.00,"bsp":1.15,"bdm":0.88,"sp":0.0,"lat":0.0},
                {"ao":-2.0944,"len":36.0,"wd":11.0,"rl":1.60,"bsm":1.00,"bsp":1.15,"bdm":0.88,"sp":0.0,"lat":0.0}],
"StormSurge":  [{"ao":0.0,"len":44.0,"wd":16.0,"rl":1.40,"bsm":1.15,"bsp":1.25,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":44.0,"wd":16.0,"rl":1.40,"bsm":1.15,"bsp":1.25,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":2.0944,"len":44.0,"wd":16.0,"rl":1.40,"bsm":1.15,"bsp":1.25,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":44.0,"wd":16.0,"rl":1.40,"bsm":1.15,"bsp":1.25,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":4.1888,"len":44.0,"wd":16.0,"rl":1.40,"bsm":1.15,"bsp":1.25,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":5.2360,"len":44.0,"wd":16.0,"rl":1.40,"bsm":1.15,"bsp":1.25,"bdm":1.10,"sp":0.0,"lat":0.0}],
"Maelstrom":   [{"ao":0.0,"len":52.0,"wd":22.0,"rl":1.80,"bsm":1.40,"bsp":1.20,"bdm":1.60,"sp":0.0,"lat":0.0},
                {"ao":2.09,"len":50.0,"wd":20.0,"rl":1.80,"bsm":1.35,"bsp":1.20,"bdm":1.50,"sp":0.0,"lat":0.0},
                {"ao":-2.09,"len":50.0,"wd":20.0,"rl":1.80,"bsm":1.35,"bsp":1.20,"bdm":1.50,"sp":0.0,"lat":0.0}],
"PlasmaChain": [{"ao":0.0,"len":68.0,"wd":9.0,"rl":2.50,"bsm":0.68,"bsp":2.80,"bdm":1.50,"sp":0.0,"lat":0.0},
                {"ao":1.0472,"len":42.0,"wd":8.0,"rl":2.00,"bsm":0.65,"bsp":2.50,"bdm":1.10,"sp":0.0,"lat":0.0},
                {"ao":-1.0472,"len":42.0,"wd":8.0,"rl":2.00,"bsm":0.65,"bsp":2.50,"bdm":1.10,"sp":0.0,"lat":0.0}],
"BallLightning":[{"ao":0.0,"len":50.0,"wd":22.0,"rl":3.00,"bsm":1.40,"bsp":2.00,"bdm":2.20,"sp":0.0,"lat":0.0}],
"VoltStrike":  [{"ao":-0.12,"len":64.0,"wd":8.0,"rl":2.20,"bsm":0.65,"bsp":2.60,"bdm":1.40,"sp":0.0,"lat":0.0},
                {"ao":0.0,"len":68.0,"wd":9.0,"rl":2.40,"bsm":0.66,"bsp":2.60,"bdm":1.50,"sp":0.0,"lat":0.0},
                {"ao":0.12,"len":64.0,"wd":8.0,"rl":2.20,"bsm":0.65,"bsp":2.60,"bdm":1.40,"sp":0.0,"lat":0.0}],
"TurretSwarm": [], "TurretStorm": [], "CannonTurret": [], "SiegeTurret": [], "MissileTurret": [],
"ShardStorm":  [{"ao":-0.65,"len":28.0,"wd":7.0,"rl":0.90,"bsm":0.70,"bsp":1.0,"bdm":0.55,"sp":0.25,"lat":0.0},
                {"ao":-0.45,"len":32.0,"wd":9.0,"rl":0.90,"bsm":0.76,"bsp":1.0,"bdm":0.62,"sp":0.20,"lat":0.0},
                {"ao":-0.25,"len":36.0,"wd":10.0,"rl":0.90,"bsm":0.82,"bsp":1.0,"bdm":0.68,"sp":0.15,"lat":0.0},
                {"ao":-0.08,"len":40.0,"wd":11.0,"rl":0.90,"bsm":0.87,"bsp":1.0,"bdm":0.73,"sp":0.11,"lat":0.0},
                {"ao":0.0,"len":42.0,"wd":12.0,"rl":0.90,"bsm":0.90,"bsp":1.0,"bdm":0.78,"sp":0.09,"lat":0.0},
                {"ao":0.08,"len":40.0,"wd":11.0,"rl":0.90,"bsm":0.87,"bsp":1.0,"bdm":0.73,"sp":0.11,"lat":0.0},
                {"ao":0.25,"len":36.0,"wd":10.0,"rl":0.90,"bsm":0.82,"bsp":1.0,"bdm":0.68,"sp":0.15,"lat":0.0},
                {"ao":0.45,"len":32.0,"wd":9.0,"rl":0.90,"bsm":0.76,"bsp":1.0,"bdm":0.62,"sp":0.20,"lat":0.0},
                {"ao":0.65,"len":28.0,"wd":7.0,"rl":0.90,"bsm":0.70,"bsp":1.0,"bdm":0.55,"sp":0.25,"lat":0.0}],
"FragCore":    [{"ao":0.0,"len":52.0,"wd":14.0,"rl":1.50,"bsm":0.95,"bsp":1.30,"bdm":1.40,"sp":0.0,"lat":0.0},
                {"ao":-0.40,"len":34.0,"wd":8.0,"rl":0.80,"bsm":0.72,"bsp":1.00,"bdm":0.60,"sp":0.18,"lat":0.0},
                {"ao":-0.20,"len":36.0,"wd":9.0,"rl":0.80,"bsm":0.78,"bsp":1.00,"bdm":0.66,"sp":0.14,"lat":0.0},
                {"ao":0.20,"len":36.0,"wd":9.0,"rl":0.80,"bsm":0.78,"bsp":1.00,"bdm":0.66,"sp":0.14,"lat":0.0},
                {"ao":0.40,"len":34.0,"wd":8.0,"rl":0.80,"bsm":0.72,"bsp":1.00,"bdm":0.60,"sp":0.18,"lat":0.0},
                {"ao":1.5708,"len":28.0,"wd":8.0,"rl":1.00,"bsm":0.70,"bsp":0.90,"bdm":0.55,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":28.0,"wd":8.0,"rl":1.00,"bsm":0.70,"bsp":0.90,"bdm":0.55,"sp":0.0,"lat":0.0}],
"FragNova":    [{"ao":0.0,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":0.7854,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":1.5708,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":2.3562,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":3.1416,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":3.9270,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":4.7124,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0},
                {"ao":5.4978,"len":30.0,"wd":8.0,"rl":0.90,"bsm":0.75,"bsp":1.00,"bdm":0.60,"sp":0.14,"lat":0.0}],
"Buckshot":    [{"ao":-1.00,"len":26.0,"wd":7.0,"rl":1.00,"bsm":0.68,"bsp":0.90,"bdm":0.52,"sp":0.28,"lat":0.0},
                {"ao":-0.75,"len":30.0,"wd":8.0,"rl":1.00,"bsm":0.74,"bsp":0.90,"bdm":0.58,"sp":0.22,"lat":0.0},
                {"ao":-0.50,"len":34.0,"wd":9.0,"rl":1.00,"bsm":0.80,"bsp":0.90,"bdm":0.64,"sp":0.18,"lat":0.0},
                {"ao":-0.25,"len":38.0,"wd":10.0,"rl":1.00,"bsm":0.85,"bsp":0.90,"bdm":0.70,"sp":0.14,"lat":0.0},
                {"ao":-0.08,"len":40.0,"wd":11.0,"rl":1.00,"bsm":0.88,"bsp":0.90,"bdm":0.74,"sp":0.11,"lat":0.0},
                {"ao":0.0,"len":42.0,"wd":12.0,"rl":1.00,"bsm":0.90,"bsp":0.90,"bdm":0.77,"sp":0.09,"lat":0.0},
                {"ao":0.08,"len":40.0,"wd":11.0,"rl":1.00,"bsm":0.88,"bsp":0.90,"bdm":0.74,"sp":0.11,"lat":0.0},
                {"ao":0.25,"len":38.0,"wd":10.0,"rl":1.00,"bsm":0.85,"bsp":0.90,"bdm":0.70,"sp":0.14,"lat":0.0},
                {"ao":0.50,"len":34.0,"wd":9.0,"rl":1.00,"bsm":0.80,"bsp":0.90,"bdm":0.64,"sp":0.18,"lat":0.0},
                {"ao":0.75,"len":30.0,"wd":8.0,"rl":1.00,"bsm":0.74,"bsp":0.90,"bdm":0.58,"sp":0.22,"lat":0.0},
                {"ao":1.00,"len":26.0,"wd":7.0,"rl":1.00,"bsm":0.68,"bsp":0.90,"bdm":0.52,"sp":0.28,"lat":0.0}],
"ScatterBomb": [{"ao":-0.50,"len":36.0,"wd":12.0,"rl":1.00,"bsm":0.82,"bsp":0.95,"bdm":0.75,"sp":0.16,"lat":0.0},
                {"ao":-0.20,"len":40.0,"wd":13.0,"rl":1.00,"bsm":0.88,"bsp":0.95,"bdm":0.82,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":14.0,"rl":1.00,"bsm":0.92,"bsp":0.95,"bdm":0.88,"sp":0.09,"lat":0.0},
                {"ao":0.20,"len":40.0,"wd":13.0,"rl":1.00,"bsm":0.88,"bsp":0.95,"bdm":0.82,"sp":0.12,"lat":0.0},
                {"ao":0.50,"len":36.0,"wd":12.0,"rl":1.00,"bsm":0.82,"bsp":0.95,"bdm":0.75,"sp":0.16,"lat":0.0},
                {"ao":1.5708,"len":32.0,"wd":11.0,"rl":1.00,"bsm":0.78,"bsp":0.90,"bdm":0.70,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":32.0,"wd":11.0,"rl":1.00,"bsm":0.78,"bsp":0.90,"bdm":0.70,"sp":0.0,"lat":0.0},
                {"ao":1.8708,"len":28.0,"wd":9.0,"rl":1.00,"bsm":0.74,"bsp":0.88,"bdm":0.65,"sp":0.0,"lat":0.0},
                {"ao":-1.8708,"len":28.0,"wd":9.0,"rl":1.00,"bsm":0.74,"bsp":0.88,"bdm":0.65,"sp":0.0,"lat":0.0}],
"CloudBurst":  [{"ao":-0.30,"len":42.0,"wd":13.0,"rl":1.00,"bsm":0.86,"bsp":0.95,"bdm":0.80,"sp":0.13,"lat":0.0},
                {"ao":0.0,"len":46.0,"wd":15.0,"rl":1.00,"bsm":0.90,"bsp":0.95,"bdm":0.88,"sp":0.09,"lat":0.0},
                {"ao":0.30,"len":42.0,"wd":13.0,"rl":1.00,"bsm":0.86,"bsp":0.95,"bdm":0.80,"sp":0.13,"lat":0.0},
                {"ao":-0.50,"len":36.0,"wd":10.0,"rl":1.10,"bsm":0.80,"bsp":0.90,"bdm":0.70,"sp":0.18,"lat":0.0},
                {"ao":0.50,"len":36.0,"wd":10.0,"rl":1.10,"bsm":0.80,"bsp":0.90,"bdm":0.70,"sp":0.18,"lat":0.0},
                {"ao":2.0944,"len":28.0,"wd":9.0,"rl":1.00,"bsm":0.74,"bsp":0.88,"bdm":0.62,"sp":0.0,"lat":0.0},
                {"ao":3.1416,"len":28.0,"wd":9.0,"rl":1.00,"bsm":0.74,"bsp":0.88,"bdm":0.62,"sp":0.0,"lat":0.0},
                {"ao":-2.0944,"len":28.0,"wd":9.0,"rl":1.00,"bsm":0.74,"bsp":0.88,"bdm":0.62,"sp":0.0,"lat":0.0}],
"DualFrag":    [{"ao":-0.30,"len":40.0,"wd":10.0,"rl":1.00,"bsm":0.80,"bsp":1.05,"bdm":0.70,"sp":0.14,"lat":0.0},
                {"ao":-0.12,"len":44.0,"wd":12.0,"rl":1.00,"bsm":0.88,"bsp":1.05,"bdm":0.78,"sp":0.10,"lat":0.0},
                {"ao":0.0,"len":46.0,"wd":13.0,"rl":1.00,"bsm":0.92,"bsp":1.05,"bdm":0.84,"sp":0.08,"lat":0.0},
                {"ao":0.12,"len":44.0,"wd":12.0,"rl":1.00,"bsm":0.88,"bsp":1.05,"bdm":0.78,"sp":0.10,"lat":0.0},
                {"ao":0.30,"len":40.0,"wd":10.0,"rl":1.00,"bsm":0.80,"bsp":1.05,"bdm":0.70,"sp":0.14,"lat":0.0},
                {"ao":2.8916,"len":32.0,"wd":9.0,"rl":1.00,"bsm":0.76,"bsp":0.92,"bdm":0.62,"sp":0.12,"lat":0.0},
                {"ao":3.1416,"len":36.0,"wd":11.0,"rl":1.00,"bsm":0.84,"bsp":0.92,"bdm":0.70,"sp":0.08,"lat":0.0},
                {"ao":3.3916,"len":32.0,"wd":9.0,"rl":1.00,"bsm":0.76,"bsp":0.92,"bdm":0.62,"sp":0.12,"lat":0.0}],
"OmniFrag":    [{"ao":-0.20,"len":38.0,"wd":10.0,"rl":1.10,"bsm":0.82,"bsp":1.00,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":42.0,"wd":12.0,"rl":1.10,"bsm":0.88,"bsp":1.00,"bdm":0.78,"sp":0.09,"lat":0.0},
                {"ao":0.20,"len":38.0,"wd":10.0,"rl":1.10,"bsm":0.82,"bsp":1.00,"bdm":0.72,"sp":0.12,"lat":0.0},
                {"ao":1.3708,"len":32.0,"wd":9.0,"rl":1.10,"bsm":0.78,"bsp":0.95,"bdm":0.65,"sp":0.12,"lat":0.0},
                {"ao":1.5708,"len":36.0,"wd":10.0,"rl":1.10,"bsm":0.84,"bsp":0.95,"bdm":0.72,"sp":0.09,"lat":0.0},
                {"ao":1.7708,"len":32.0,"wd":9.0,"rl":1.10,"bsm":0.78,"bsp":0.95,"bdm":0.65,"sp":0.12,"lat":0.0},
                {"ao":2.9416,"len":30.0,"wd":9.0,"rl":1.10,"bsm":0.76,"bsp":0.92,"bdm":0.62,"sp":0.12,"lat":0.0},
                {"ao":3.1416,"len":34.0,"wd":10.0,"rl":1.10,"bsm":0.82,"bsp":0.92,"bdm":0.68,"sp":0.09,"lat":0.0},
                {"ao":3.3416,"len":30.0,"wd":9.0,"rl":1.10,"bsm":0.76,"bsp":0.92,"bdm":0.62,"sp":0.12,"lat":0.0}],
"CrossFrag":   [{"ao":-0.35,"len":36.0,"wd":9.0,"rl":1.00,"bsm":0.78,"bsp":1.00,"bdm":0.68,"sp":0.16,"lat":0.0},
                {"ao":-0.15,"len":40.0,"wd":11.0,"rl":1.00,"bsm":0.85,"bsp":1.00,"bdm":0.75,"sp":0.12,"lat":0.0},
                {"ao":0.0,"len":44.0,"wd":13.0,"rl":1.00,"bsm":0.92,"bsp":1.00,"bdm":0.82,"sp":0.09,"lat":0.0},
                {"ao":0.15,"len":40.0,"wd":11.0,"rl":1.00,"bsm":0.85,"bsp":1.00,"bdm":0.75,"sp":0.12,"lat":0.0},
                {"ao":0.35,"len":36.0,"wd":9.0,"rl":1.00,"bsm":0.78,"bsp":1.00,"bdm":0.68,"sp":0.16,"lat":0.0},
                {"ao":1.5708,"len":36.0,"wd":12.0,"rl":1.20,"bsm":0.82,"bsp":0.95,"bdm":0.72,"sp":0.0,"lat":0.0},
                {"ao":-1.5708,"len":36.0,"wd":12.0,"rl":1.20,"bsm":0.82,"bsp":0.95,"bdm":0.72,"sp":0.0,"lat":0.0}],
}

# ── Utility methods ───────────────────────────────────────────────────────────
static func get_tank(name: String) -> Dictionary:
	if not TANKS.has(name):
		return {}
	var t: Dictionary = TANKS[name].duplicate(true)
	if BARRELS.has(name):
		t["barrels"] = BARRELS[name].duplicate(true)
	else:
		t["barrels"] = []
	return t

static func get_upgrades_for(current_class: String, player_xp: int) -> Array:
	var result: Array = []
	var tier := GameConfig.get_upgrade_tier(player_xp)
	for tank_name in TANKS.keys():
		var t: Dictionary = TANKS[tank_name]
		if t.get("upgrades_from", []).has(current_class):
			var req_level: int = t.get("required_level", 0)
			var tier_needed := 0
			for i in range(GameConfig.UPGRADE_LEVELS.size()):
				if req_level <= GameConfig.UPGRADE_LEVELS[i]:
					tier_needed = i + 1
					break
			if tier >= tier_needed:
				result.append(tank_name)
	return result

static func get_all_class_names() -> Array:
	return TANKS.keys()

static func get_tier(tank_name: String) -> int:
	var t := get_tank(tank_name)
	var req := t.get("required_level", 0)
	if req == 0: return 0
	for i in range(GameConfig.UPGRADE_LEVELS.size()):
		if req <= GameConfig.UPGRADE_LEVELS[i]:
			return i + 1
	return 4
