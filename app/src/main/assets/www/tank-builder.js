;(function() {
'use strict';

var STORAGE_KEY = 'diep_custom_tanks';

var TIER_PRESETS = {
  1: { label:'T1 — Базовый',    color:'#44aaff', requiredLevel:5,  hp:1.0,  speed:1.0,  radiusMultiplier:1.0  },
  2: { label:'T2 — Продвинутый',color:'#e0e0e0', requiredLevel:15, hp:1.25, speed:1.05, radiusMultiplier:1.1  },
  3: { label:'T3 — Элитный',    color:'#22cc55', requiredLevel:30, hp:1.55, speed:1.1,  radiusMultiplier:1.2  },
  4: { label:'T4 — Мастер',     color:'#ffdd00', requiredLevel:45, hp:1.9,  speed:1.15, radiusMultiplier:1.32 },
  5: { label:'T5 — Легенда',    color:'#ff8800', requiredLevel:60, hp:2.4,  speed:1.2,  radiusMultiplier:1.45 },
};

var BARREL_PRESETS = [
  { id:'std',    label:'Стандартный', length:48, width:14, reload:1.0,  bSize:1.0,  bSpeed:1.0,  bDmg:1.0 },
  { id:'long',   label:'Длинный',     length:72, width:10, reload:2.2,  bSize:0.75, bSpeed:2.1,  bDmg:1.8 },
  { id:'wide',   label:'Широкий',     length:36, width:22, reload:1.0,  bSize:1.5,  bSpeed:0.85, bDmg:1.4 },
  { id:'heavy',  label:'Тяжёлый',     length:52, width:20, reload:1.5,  bSize:1.3,  bSpeed:0.9,  bDmg:2.0 },
  { id:'mini',   label:'Мини',        length:30, width:9,  reload:0.55, bSize:0.65, bSpeed:1.2,  bDmg:0.6 },
  { id:'cannon', label:'Пушка',       length:56, width:28, reload:2.8,  bSize:2.2,  bSpeed:0.95, bDmg:3.5 },
  { id:'rear',   label:'Задний',     length:42, width:12, reload:0.9,  bSize:0.9,  bSpeed:0.9,  bDmg:0.9 },
  { id:'side',   label:'Боковой',   length:36, width:12, reload:0.8,  bSize:0.85, bSpeed:1.0,  bDmg:0.85 },
  { id:'double', label:'Двойной',   length:44, width:16, reload:1.1,  bSize:1.0,  bSpeed:1.0,  bDmg:1.0 },
  { id:'spiral', label:'Спираль',   length:40, width:11, reload:0.75, bSize:0.8,  bSpeed:1.15, bDmg:0.8 },
];

var TANK_TEMPLATES = [
  { _tpl:'sniper',  name:'Снайпер',  icon:'🎯', tier:3, color:'#45b84e', upgradesFrom:'Basic', description:'Дальний точный огонь', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.2,
    barrels:[{id:1,label:'Длинный',angle:0,length:72,width:10,reload:2.2,bSize:0.75,bSpeed:2.1,bDmg:1.8,lateral:0,bulletType:'normal'}] },
  { _tpl:'twin',    name:'Близнец',  icon:'⚡', tier:3, color:'#e88018', upgradesFrom:'Basic', description:'Двойной пулемёт', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.0,
    barrels:[
      {id:1,label:'Стандартный',angle:0,length:48,width:14,reload:1.0,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:-9,bulletType:'normal'},
      {id:2,label:'Стандартный',angle:0,length:48,width:14,reload:1.0,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:9,bulletType:'normal'},
    ] },
  { _tpl:'spinner', name:'Спиннер',  icon:'🌀', tier:3, color:'#9050c0', upgradesFrom:'Basic', description:'360° веер стволов', specialType:'normal', autoGun:true, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.0,
    barrels:[
      {id:1,label:'Мини',angle:0,      length:30,width:9,reload:0.55,bSize:0.65,bSpeed:1.2,bDmg:0.6,lateral:0,bulletType:'normal'},
      {id:2,label:'Мини',angle:1.5708, length:30,width:9,reload:0.55,bSize:0.65,bSpeed:1.2,bDmg:0.6,lateral:0,bulletType:'normal'},
      {id:3,label:'Мини',angle:3.1416, length:30,width:9,reload:0.55,bSize:0.65,bSpeed:1.2,bDmg:0.6,lateral:0,bulletType:'normal'},
      {id:4,label:'Мини',angle:-1.5708,length:30,width:9,reload:0.55,bSize:0.65,bSpeed:1.2,bDmg:0.6,lateral:0,bulletType:'normal'},
    ] },
  { _tpl:'cannon',  name:'Миномёт',  icon:'💣', tier:4, color:'#e09020', upgradesFrom:'Basic', description:'Мощный одиночный выстрел', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.5, speedSlider:0.8,
    barrels:[{id:1,label:'Пушка',angle:0,length:56,width:28,reload:2.8,bSize:2.2,bSpeed:0.95,bDmg:3.5,lateral:0,bulletType:'normal'}] },
  { _tpl:'miner',   name:'Минёр',    icon:'💥', tier:3, color:'#e8a000', upgradesFrom:'Basic', description:'Стреляет вперёд, разбрасывает мины назад', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.0,
    barrels:[
      {id:1,label:'Стандартный',angle:0,      length:48,width:14,reload:1.0,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal'},
      {id:2,label:'Стандартный',angle:3.1416, length:40,width:12,reload:1.2,bSize:1.3,bSpeed:0.3,bDmg:1.2,lateral:0,bulletType:'trap'},
    ] },
  { _tpl:'droner',  name:'Дронер',   icon:'🤖', tier:3, color:'#4aa87c', upgradesFrom:'Basic', description:'Выпускает дронов-снарядов', specialType:'drone', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.2, speedSlider:0.9,
    barrels:[
      {id:1,label:'Стандартный',angle:0,      length:48,width:14,reload:1.5,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal'},
      {id:2,label:'Стандартный',angle:3.1416, length:48,width:14,reload:1.5,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal'},
    ] },
  { _tpl:'rocket',  name:'Ракетчик', icon:'🚀', tier:4, color:'#cc4444', upgradesFrom:'Basic', description:'Запускает управляемые ракеты', specialType:'rocket', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.0,
    barrels:[{id:1,label:'Длинный',angle:0,length:72,width:10,reload:2.0,bSize:1.2,bSpeed:1.8,bDmg:2.2,lateral:0,bulletType:'normal'}] },
  { _tpl:'vampire', name:'Вампир',   icon:'🧛', tier:4, color:'#6633cc', upgradesFrom:'Basic', description:'Лечится при нанесении урона', specialType:'vampire', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.5, speedSlider:1.0,
    barrels:[{id:1,label:'Широкий',angle:0,length:36,width:22,reload:1.0,bSize:1.5,bSpeed:0.85,bDmg:1.4,lateral:0,bulletType:'normal'}] },
  { _tpl:'autoturret', name:'Авто-турельщик', icon:'🔫', tier:4, color:'#3399ff', upgradesFrom:'Basic', description:'Разворачивает авто-турели', specialType:'normal', autoGun:false, turretDeploy:true, turretCfg:{maxTurrets:4,fireRate:45,health:100,lifetime:720,damage:10,speed:9,size:7,homing:false}, upgradesTo:[], hpSlider:1.2, speedSlider:0.9,
    barrels:[{id:1,label:'Стандартный',angle:0,length:48,width:14,reload:1.0,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal'}] },
  { _tpl:'smasher', name:'Смэшер',   icon:'🔨', tier:4, color:'#888888', upgradesFrom:'Basic', description:'Огромный корпус, урон при столкновении', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:2.0, speedSlider:1.1,
    barrels:[] },
  { _tpl:'triplet', name:'Триплет', icon:'🔱', tier:4, color:'#4488ee', upgradesFrom:'Basic', description:'Три ствола веером — плотный фронтальный огонь', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.0,
    barrels:[
      {id:1,label:'Стандартный',angle:-0.18,length:48,width:14,reload:1.0,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:2,label:'Длинный',    angle:0,    length:56,width:14,reload:1.0,bSize:1.0,bSpeed:1.1,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:3,label:'Стандартный',angle:0.18, length:48,width:14,reload:1.0,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
    ] },
  { _tpl:'overlord', name:'Оверлорд', icon:'👁', tier:4, color:'#9944cc', upgradesFrom:'Basic', description:'Четыре ствола крестом — рой дронов', specialType:'drone', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.1, speedSlider:0.9,
    barrels:[
      {id:1,label:'Стандартный',angle:0,      length:44,width:16,reload:1.5,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:2,label:'Стандартный',angle:1.5708, length:44,width:16,reload:1.5,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:3,label:'Стандартный',angle:3.1416, length:44,width:16,reload:1.5,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:4,label:'Стандартный',angle:-1.5708,length:44,width:16,reload:1.5,bSize:1.0,bSpeed:1.0,bDmg:1.0,lateral:0,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
    ] },
  { _tpl:'sprayer', name:'Спрейер', icon:'💦', tier:4, color:'#44ccaa', upgradesFrom:'Basic', description:'Пять мини-стволов в ряд — непрерывный поток', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:0.9, speedSlider:1.1,
    barrels:[
      {id:1,label:'Мини',angle:0,length:30,width:9,reload:0.4,bSize:0.65,bSpeed:1.2,bDmg:0.55,lateral:-12,bulletType:'normal',fireGroup:1,penetration:1,recoil:0},
      {id:2,label:'Мини',angle:0,length:30,width:9,reload:0.4,bSize:0.65,bSpeed:1.2,bDmg:0.55,lateral:-4, bulletType:'normal',fireGroup:2,penetration:1,recoil:0},
      {id:3,label:'Мини',angle:0,length:30,width:9,reload:0.4,bSize:0.65,bSpeed:1.2,bDmg:0.55,lateral:4,  bulletType:'normal',fireGroup:3,penetration:1,recoil:0},
      {id:4,label:'Мини',angle:0,length:30,width:9,reload:0.4,bSize:0.65,bSpeed:1.2,bDmg:0.55,lateral:12, bulletType:'normal',fireGroup:4,penetration:1,recoil:0},
      {id:5,label:'Мини',angle:0,length:30,width:9,reload:0.4,bSize:0.65,bSpeed:1.2,bDmg:0.55,lateral:0,  bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
    ] },
  { _tpl:'hybrid', name:'Гибрид', icon:'⚗', tier:4, color:'#cc6644', upgradesFrom:'Basic', description:'Спереди пушка, сзади дроны', specialType:'normal', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.3, speedSlider:0.95,
    barrels:[
      {id:1,label:'Пушка',      angle:0,      length:56,width:28,reload:2.8,bSize:2.2,bSpeed:0.95,bDmg:3.5,lateral:0,bulletType:'normal',fireGroup:0,penetration:2,recoil:0.5},
      {id:2,label:'Стандартный',angle:3.1416, length:44,width:14,reload:1.5,bSize:1.0,bSpeed:1.0, bDmg:1.0,lateral:-8,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:3,label:'Стандартный',angle:3.1416, length:44,width:14,reload:1.5,bSize:1.0,bSpeed:1.0, bDmg:1.0,lateral:8, bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
    ] },
  { _tpl:'battleship', name:'Линкор', icon:'🚢', tier:5, color:'#8888cc', upgradesFrom:'Basic', description:'Шесть авто-турелей + двойной ствол', specialType:'normal', autoGun:false, turretDeploy:true, turretCfg:{maxTurrets:6,fireRate:40,health:120,lifetime:800,damage:11,speed:9,size:8,homing:false}, upgradesTo:[], hpSlider:1.8, speedSlider:0.8,
    barrels:[
      {id:1,label:'Длинный',angle:-0.12,length:72,width:10,reload:2.2,bSize:0.75,bSpeed:2.1,bDmg:1.8,lateral:-8,bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
      {id:2,label:'Длинный',angle:0.12, length:72,width:10,reload:2.2,bSize:0.75,bSpeed:2.1,bDmg:1.8,lateral:8, bulletType:'normal',fireGroup:0,penetration:1,recoil:0},
    ] },
  { _tpl:'necromancer', name:'Некромант', icon:'💀', tier:4, color:'#552288', upgradesFrom:'Basic', description:'Нет стволов — поднимает фигуры как дронов', specialType:'drone', autoGun:false, turretDeploy:false, turretCfg:{maxTurrets:3,fireRate:55,health:90,lifetime:700,damage:9,speed:8.5,size:7,homing:false}, upgradesTo:[], hpSlider:1.0, speedSlider:1.0,
    barrels:[] },
];

function loadTanks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch(e) { return []; }
}
function saveTanks(arr) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch(e) {}
}
function genId() { return 'custom_' + Date.now() + '_' + Math.floor(Math.random()*9999); }

/* ── Экспорт / Импорт ──────────────────────────────────────── */
var EXPORT_PREFIX = 'DIEPTANK1_';

function exportTankCode(def) {
  var clean = {
    name:         def.name,
    tier:         def.tier,
    color:        def.color,
    upgradesFrom: Array.isArray(def.upgradesFrom) ? def.upgradesFrom : [def.upgradesFrom || 'Basic'],
    category:     def.category || '',
    description:  def.description || '',
    hpSlider:     def.hpSlider,
    speedSlider:  def.speedSlider,
    specialType:  def.specialType || 'normal',
    autoGun:      !!def.autoGun,
    turretDeploy: !!def.turretDeploy,
    turretCfg:    def.turretCfg || {},
    upgradesTo:   def.upgradesTo || [],
    barrels:      (def.barrels || []).map(function(b) {
      return {
        angle:       b.angle,
        length:      b.length,
        width:       b.width,
        lateral:     b.lateral,
        reload:      b.reload,
        bSpeed:      b.bSpeed,
        bDmg:        b.bDmg,
        bSize:       b.bSize,
        label:       b.label,
        bulletType:  b.bulletType  || 'normal',
        fireGroup:   b.fireGroup   || 0,
        penetration: b.penetration || 1,
        recoil:      b.recoil      || 0,
      };
    }),
  };
  try {
    return EXPORT_PREFIX + btoa(unescape(encodeURIComponent(JSON.stringify(clean))));
  } catch(e) { return null; }
}

function importTankCode(code) {
  var raw = (code || '').trim();
  if (raw.indexOf(EXPORT_PREFIX) !== 0) throw new Error('Неверный формат кода. Код должен начинаться с "' + EXPORT_PREFIX + '"');
  var b64 = raw.slice(EXPORT_PREFIX.length);
  var json;
  try { json = decodeURIComponent(escape(atob(b64))); } catch(e) { throw new Error('Ошибка декодирования. Код повреждён.'); }
  var def;
  try { def = JSON.parse(json); } catch(e) { throw new Error('Ошибка разбора JSON. Код повреждён.'); }
  if (!def.name || typeof def.name !== 'string') throw new Error('В коде нет имени танка.');
  if (!Array.isArray(def.barrels))               throw new Error('В коде нет данных о стволах.');
  /* Санируем строковые поля чтобы не допустить мусор в CSS/глобалах */
  if (typeof def.color !== 'string' || !/^#[0-9a-fA-F]{3,8}$/.test(def.color)) def.color = '#44aaff';
  if (Array.isArray(def.upgradesFrom)) {
    def.upgradesFrom = def.upgradesFrom.filter(function(s){ return typeof s==='string' && s.trim(); }).map(function(s){ return s.trim().slice(0,32); });
    if (def.upgradesFrom.length === 0) def.upgradesFrom = ['Basic'];
  } else {
    if (typeof def.upgradesFrom !== 'string' || !def.upgradesFrom.trim()) def.upgradesFrom = 'Basic';
    def.upgradesFrom = [def.upgradesFrom.trim().slice(0, 32)];
  }
  def.category = typeof def.category === 'string' ? def.category.trim().slice(0,24) : '';
  def.name = def.name.trim().slice(0, 18);
  def.description = (typeof def.description === 'string') ? def.description.trim().slice(0, 80) : '';
  /* Присваиваем новый id чтобы не перетереть оригинал */
  def.id = genId();
  /* Санируем числовые поля */
  def.tier        = Math.min(5, Math.max(1, parseInt(def.tier)    || 3));
  def.hpSlider    = Math.min(2, Math.max(0.4, parseFloat(def.hpSlider)    || 1));
  def.speedSlider = Math.min(2, Math.max(0.5, parseFloat(def.speedSlider) || 1));
  var _validSpecial = ['normal','rocket','laser','drone','homing','splitting','vampire'];
  def.specialType = (_validSpecial.indexOf(def.specialType) >= 0) ? def.specialType : 'normal';
  var _validBullet = ['normal','trap','grenade','boomerang','lightning'];
  def.autoGun      = !!def.autoGun;
  def.turretDeploy = !!def.turretDeploy;
  var _tc = def.turretCfg || {};
  def.turretCfg = {
    maxTurrets: Math.min(8, Math.max(1, parseInt(_tc.maxTurrets)||3)),
    fireRate:   Math.min(120, Math.max(20, parseInt(_tc.fireRate)||55)),
    health:     Math.min(500, Math.max(20, parseInt(_tc.health)||90)),
    lifetime:   Math.min(1500, Math.max(200, parseInt(_tc.lifetime)||700)),
    damage:     Math.min(80, Math.max(2, parseFloat(_tc.damage)||9)),
    speed:      Math.min(20, Math.max(3, parseFloat(_tc.speed)||8.5)),
    size:       Math.min(25, Math.max(3, parseFloat(_tc.size)||7)),
    homing:     !!_tc.homing,
  };
  def.upgradesTo = Array.isArray(def.upgradesTo) ? def.upgradesTo.filter(function(s){ return typeof s==='string'; }) : [];
  def.barrels = def.barrels.map(function(b, i) {
    return {
      id:          Date.now() + i,
      label:       b.label  || 'Custom',
      angle:       isFinite(b.angle)  ? b.angle  : 0,
      length:      Math.min(100, Math.max(20,  parseInt(b.length) || 48)),
      width:       Math.min(36,  Math.max(5,   parseInt(b.width)  || 14)),
      lateral:     Math.min(30,  Math.max(-30, parseInt(b.lateral)|| 0)),
      reload:      Math.min(5,   Math.max(0.2, parseFloat(b.reload) || 1)),
      bSpeed:      Math.min(4,   Math.max(0.3, parseFloat(b.bSpeed) || 1)),
      bDmg:        Math.min(5,   Math.max(0.2, parseFloat(b.bDmg)   || 1)),
      bSize:       Math.min(3,   Math.max(0.3, parseFloat(b.bSize)  || 1)),
      bulletType:  _validBullet.indexOf(b.bulletType) >= 0 ? b.bulletType : 'normal',
      fireGroup:   Math.min(4, Math.max(0, parseInt(b.fireGroup)   || 0)),
      penetration: Math.min(5, Math.max(1, parseInt(b.penetration) || 1)),
      recoil:      Math.min(3, Math.max(0, parseFloat(b.recoil)    || 0)),
    };
  });
  return def;
}

function registerTank(def) {
  if (!window._t) return;
  var id = def.id;
  var tier = def.tier || 1;
  var preset = TIER_PRESETS[tier] || TIER_PRESETS[1];
  var hpMult  = preset.hp    * (def.hpSlider    !== undefined ? def.hpSlider    : 1);
  var spdMult = preset.speed * (def.speedSlider !== undefined ? def.speedSlider : 1);

  var barrels = (def.barrels || []).map(function(b) {
    return {
      angleOffset: b.angle,
      length: b.length,
      width:  b.width,
      reloadMultiplier:      b.reload,
      bulletSizeMultiplier:  b.bSize,
      bulletSpeedMultiplier: b.bSpeed,
      bulletDamageMultiplier: b.bDmg > 1 ? 1 + (b.bDmg - 1) * 0.65 : b.bDmg,
      lateralOffset: b.lateral || 0,
      isTrap:        b.bulletType === 'trap',
      penetration:   b.penetration || 1,
      recoilForce:   b.recoil || 0,
      fireGroup:     b.fireGroup || 0,
    };
  });
  if (barrels.length === 0) {
    barrels = [{ angleOffset:0,length:48,width:14,reloadMultiplier:1.0,
                 bulletSizeMultiplier:1.0,bulletSpeedMultiplier:1.0,bulletDamageMultiplier:1.0,lateralOffset:0 }];
  }

  var _spt = def.specialType || 'normal';
  window._t[id] = {
    name: id,
    requiredLevel: preset.requiredLevel,
    upgradesFrom: Array.isArray(def.upgradesFrom) ? def.upgradesFrom : (def.upgradesFrom ? [def.upgradesFrom] : ['Basic']),
    color: def.color || preset.color,
    description: def.description || 'Кастомный танк',
    barrels: barrels,
    radiusMultiplier: (preset.radiusMultiplier || 1.0) * Math.sqrt(def.hpSlider || 1),
    bodyDamageMultiplier: Math.round((def.hpSlider || 1) * 3),
    isRocket:       _spt === 'rocket',
    isLaser:        _spt === 'laser',
    isDroneShooter: _spt === 'drone',
    isHoming:       _spt === 'homing',
    isSplitting:    _spt === 'splitting',
    isVampire:      _spt === 'vampire',
    isAutoGunner:      !!def.autoGun,
    isTurretDeployer:  !!def.turretDeploy,
    maxTurrets:        (def.turretCfg && def.turretCfg.maxTurrets) || 3,
    turretFireRate:    (def.turretCfg && def.turretCfg.fireRate)    || 55,
    turretHealth:      (def.turretCfg && def.turretCfg.health)      || 90,
    turretLifetime:    (def.turretCfg && def.turretCfg.lifetime)    || 700,
    turretBulletDamage:(def.turretCfg && def.turretCfg.damage)      || 9,
    turretBulletSpeed: (def.turretCfg && def.turretCfg.speed)       || 8.5,
    turretBulletRadius:(def.turretCfg && def.turretCfg.size)        || 7,
    turretBulletHoming:!!(def.turretCfg && def.turretCfg.homing),
    _speedMultiplier: spdMult,
    _initMovementSpeed: Math.min(10, Math.max(0, Math.round(Math.log(Math.max(0.001, spdMult)) / Math.log(1.07)))),
    _isCustom: true,
  };

  if (window.W1) window.W1[id] = def.name;

  var xl = [55, 165, 295, 430, 590];
  var tierIdx = Math.min(tier - 1, 4); /* tier 1→0, 2→1, 3→2, 4→3, 5→4 */
  var allTanks = loadTanks();
  var defIdx = allTanks.findIndex(function(t){ return t.id === id; });
  var yBase = 8000 + (defIdx >= 0 ? defIdx : allTanks.length) * 260;
  if (!window.w0) window.w0 = [];
  var existing = window.w0.findIndex(function(n){ return n.name === id; });
  if (existing >= 0) window.w0[existing] = { name: id, tier: tierIdx, x: xl[tierIdx], y: yBase };
  else window.w0.push({ name: id, tier: tierIdx, x: xl[tierIdx], y: yBase });

  if (!window.Ty) window.Ty = [];
  var _parents = Array.isArray(def.upgradesFrom) ? def.upgradesFrom : (def.upgradesFrom ? [def.upgradesFrom] : ['Basic']);
  /* Удаляем все старые рёбра, ведущие К этому танку (e[1]===id) */
  for (var _ti = window.Ty.length - 1; _ti >= 0; _ti--) {
    if (window.Ty[_ti][1] === id) window.Ty.splice(_ti, 1);
  }
  _parents.forEach(function(p) { window.Ty.push([p, id]); });
  /* Custom upgrade tree — tank can upgrade TO other custom tanks */
  if (Array.isArray(def.upgradesTo)) {
    def.upgradesTo.forEach(function(childId) {
      if (childId && childId !== id) {
        for (var _tj = window.Ty.length - 1; _tj >= 0; _tj--) {
          if (window.Ty[_tj][0] === id && window.Ty[_tj][1] === childId) window.Ty.splice(_tj, 1);
        }
        window.Ty.push([id, childId]);
      }
    });
  }
}

function registerAllCustomTanks() {
  loadTanks().forEach(function(def) { registerTank(def); });
}

/* ── Случайный танк ─────────────────────────────────────────── */
var _RAND_NAMES = ['Омега','Молния','Хаос','Призрак','Тень','Вихрь','Гром','Буран','Огонь','Лёд','Ураган','Шторм','Туман','Пламя','Мрак'];
var _RAND_ICONS = ['🎲','⚡','💫','🌀','🔥','❄','💥','🎯','🌊','☄'];
var _RAND_COLORS = ['#ff4444','#44aaff','#44ff88','#ffcc00','#cc44ff','#ff8800','#00cccc','#ff44cc','#88ff44','#ff6600'];
var _RAND_SPECIALS = ['normal','normal','normal','normal','rocket','drone','homing','splitting','vampire'];

function generateRandomTank() {
  var nBarrels = Math.floor(Math.random() * 6) + 1;
  var barrels = [];
  for (var i = 0; i < nBarrels; i++) {
    var p = BARREL_PRESETS[Math.floor(Math.random() * 6)]; /* первые 6 = оригинальные */
    var ang = nBarrels === 1 ? 0 : (Math.PI * 2 / nBarrels) * i;
    barrels.push({
      id: Date.now() + i,
      label: p.label,
      angle: parseFloat(ang.toFixed(4)),
      length: Math.min(100, Math.max(20, Math.round(p.length + (Math.random()-0.5)*24))),
      width:  Math.min(36,  Math.max(5,  Math.round(p.width  + (Math.random()-0.5)*8))),
      reload: parseFloat(Math.min(5, Math.max(0.2, p.reload + (Math.random()-0.5)*0.6)).toFixed(2)),
      bSize:  parseFloat(Math.min(3, Math.max(0.3, p.bSize  + (Math.random()-0.5)*0.5)).toFixed(2)),
      bSpeed: parseFloat(Math.min(4, Math.max(0.3, p.bSpeed + (Math.random()-0.5)*0.7)).toFixed(2)),
      bDmg:   parseFloat(Math.min(5, Math.max(0.2, p.bDmg   + (Math.random()-0.5)*1.0)).toFixed(2)),
      lateral: 0,
      bulletType: Math.random() < 0.12 ? 'trap' : 'normal',
      fireGroup: 0,
      penetration: Math.random() < 0.2 ? 2 : 1,
      recoil: parseFloat((Math.random() * 0.8).toFixed(1)),
    });
  }
  return {
    id: genId(),
    name: _RAND_NAMES[Math.floor(Math.random()*_RAND_NAMES.length)] + '-' + Math.floor(Math.random()*999+1),
    icon: _RAND_ICONS[Math.floor(Math.random()*_RAND_ICONS.length)],
    tier: Math.floor(Math.random() * 5) + 1,
    color: _RAND_COLORS[Math.floor(Math.random()*_RAND_COLORS.length)],
    barrels: barrels,
    hpSlider:    parseFloat((0.6 + Math.random() * 1.2).toFixed(2)),
    speedSlider: parseFloat((0.6 + Math.random() * 1.2).toFixed(2)),
    specialType: _RAND_SPECIALS[Math.floor(Math.random()*_RAND_SPECIALS.length)],
    autoGun:     Math.random() < 0.15,
    turretDeploy: false,
    turretCfg: { maxTurrets:3, fireRate:55, health:90, lifetime:700, damage:9, speed:8.5, size:7, homing:false },
    upgradesFrom: ['Basic'],
    upgradesTo: [],
    category: 'Случайные',
    description: 'Случайно сгенерированный танк',
  };
}

/* ── Оценка баланса ─────────────────────────────────────────── */
function computeBalanceRating(ed) {
  var barrels = ed.barrels || [];
  if (barrels.length === 0) {
    var bd = (ed.hpSlider || 1) * 3;
    if (bd < 3) return { label:'😴 Слабый',  color:'#66aaff', score: bd };
    if (bd < 5) return { label:'⚖ Норм',     color:'#44cc66', score: bd };
    return               { label:'💪 Сильный', color:'#ffcc00', score: bd };
  }
  var dps = 0;
  barrels.forEach(function(b){ dps += (b.bDmg||1) / (b.reload||1); });
  var tier = ed.tier || 3;
  var preset = TIER_PRESETS[tier] || TIER_PRESETS[3];
  var hpMult = preset.hp * (ed.hpSlider || 1);
  var score = dps * 2.2 + hpMult * 1.8 + barrels.length * 0.4 + (ed.specialType && ed.specialType !== 'normal' ? 1 : 0);
  if (score < 5)  return { label:'😴 Слабый',  color:'#66aaff', score: parseFloat(score.toFixed(1)) };
  if (score < 11) return { label:'⚖ Норм',     color:'#44cc66', score: parseFloat(score.toFixed(1)) };
  if (score < 20) return { label:'💪 Сильный', color:'#ffcc00', score: parseFloat(score.toFixed(1)) };
  return               { label:'☠ ИМБА',       color:'#ff4444', score: parseFloat(score.toFixed(1)) };
}

/* ── Пресеты раскладки стволов ───────────────────────────────── */
var LAYOUT_PRESETS = [
  { id:'front',   label:'Вперёд',    angles:[0] },
  { id:'double',  label:'Двойной',   angles:[0, 0],           laterals:[-9, 9] },
  { id:'twins',   label:'Близнецы',  angles:[0, Math.PI] },
  { id:'cross',   label:'Крест',     angles:[0, Math.PI/2, Math.PI, -Math.PI/2] },
  { id:'star',    label:'Звезда',    angles:[0, Math.PI/3, 2*Math.PI/3, Math.PI, 4*Math.PI/3, 5*Math.PI/3] },
  { id:'fan3',    label:'Веер×3',    angles:[-0.35, 0, 0.35] },
  { id:'fan5',    label:'Веер×5',    angles:[-0.5, -0.25, 0, 0.25, 0.5] },
  { id:'diag',    label:'Диаг×2',    angles:[Math.PI/4, -Math.PI/4] },
];

/* ── #13 Авто-нейминг ────────────────────────────────────────── */
var _AUTO_ADJ = ['Быстрый','Смертоносный','Стальной','Тёмный','Огненный','Ледяной','Электрический','Яростный','Ядерный','Призрачный','Небесный','Теневой','Громовой','Боевой','Неуязвимый'];
var _AUTO_CLASS = {
  sniperLike: ['Снайпер','Разведчик','Наблюдатель','Охотник'],
  tankLike:   ['Броненосец','Крепость','Колосс','Цитадель'],
  speedLike:  ['Спринтер','Перехватчик','Стрела','Вихрь'],
  swarmLike:  ['Рой','Орда','Пучина','Легион'],
  heavyLike:  ['Разрушитель','Тяжеловес','Мортира','Дредноут'],
};
function autoNameTank(ed) {
  var barrels = ed.barrels || [];
  var avgLen = barrels.reduce(function(s,b){ return s+(b.length||48); }, 0) / Math.max(1, barrels.length);
  var avgDmg = barrels.reduce(function(s,b){ return s+(b.bDmg||1); }, 0) / Math.max(1, barrels.length);
  var hp = (ed.hpSlider||1) * ((TIER_PRESETS[ed.tier||3]||TIER_PRESETS[3]).hp||1);
  var spd = ed.speedSlider || 1;
  var n = barrels.length;
  var classArr;
  if      (avgLen > 60)  classArr = _AUTO_CLASS.sniperLike;
  else if (hp > 2.5)     classArr = _AUTO_CLASS.tankLike;
  else if (spd > 1.4)    classArr = _AUTO_CLASS.speedLike;
  else if (n >= 4)       classArr = _AUTO_CLASS.swarmLike;
  else if (avgDmg > 2.5) classArr = _AUTO_CLASS.heavyLike;
  else                   classArr = _AUTO_CLASS.tankLike;
  var adj = _AUTO_ADJ[Math.floor(Math.random() * _AUTO_ADJ.length)];
  var cls = classArr[Math.floor(Math.random() * classArr.length)];
  return adj + ' ' + cls;
}

/* ── #10 Предложения по улучшению (ИИ-анализ) ────────────────── */
function suggestImprovements(ed) {
  var barrels = ed.barrels || [];
  var tips = [];
  var totalDps = barrels.reduce(function(s,b){ return s+(b.bDmg||1)/(b.reload||1); }, 0);
  var hp = (ed.hpSlider||1) * ((TIER_PRESETS[ed.tier||3]||TIER_PRESETS[3]).hp||1);
  var spd = ed.speedSlider || 1;
  var n = barrels.length;
  if (totalDps > 12 && hp < 1.0)
    tips.push({ icon:'❤', title:'Хрупкий убийца', text:'DPS очень высокий, но HP низкий. Подними HP до 120–150% чтобы выживать в ближнем бою.' });
  var slowB = barrels.filter(function(b){ return (b.bSpeed||1) < 0.7; });
  if (slowB.length >= 2)
    tips.push({ icon:'🐢', title:'Медленные снаряды', text:slowB.length+' стволов с bSpeed < 0.7. Подними до 1.0+ — снаряды будут настигать манёвренных врагов.' });
  if (n === 1 && (barrels[0].width||14) >= 22)
    tips.push({ icon:'⚖', title:'Дисбаланс отдачи', text:'Один широкий ствол создаёт дрейф. Добавь зеркальный ствол сзади или увеличь HP.' });
  var types = barrels.map(function(b){ return b.bulletType||'normal'; });
  var unique = types.filter(function(t,i){ return types.indexOf(t)===i; });
  if (n >= 3 && unique.length === 1)
    tips.push({ icon:'🎭', title:'Однообразный арсенал', text:'Все стволы одного типа. Добавь гранату или молнию для универсальности.' });
  if (n === 0)
    tips.push({ icon:'💀', title:'Нет стволов', text:'Без стволов танк только тараном. Добавь хотя бы 1 ствол.' });
  var slowR = barrels.filter(function(b){ return (b.reload||1) > 3.5; });
  if (slowR.length >= 2)
    tips.push({ icon:'⏳', title:'Долгая перезарядка', text:slowR.length+' стволов > 3.5с. В ближнем бою это окно уязвимости — добавь мини-стволы.' });
  if ((ed.tier||3) === 5 && totalDps < 3)
    tips.push({ icon:'👑', title:'T5, но слабый урон', text:'Tier 5, но DPS < 3. Подними bDmg стволов или добавь тяжёлый ствол.' });
  if (spd > 1.5 && hp > 1.6)
    tips.push({ icon:'⚡', title:'Отличный баланс!', text:'Высокая скорость + хороший HP. Добавь стволы с пробиванием (penetration 2+) для доминирования.' });
  if (tips.length === 0)
    tips.push({ icon:'✅', title:'Явных слабостей нет', text:'Попробуй эволюцию для поиска скрытых улучшений.' });
  while (tips.length < 3)
    tips.push({ icon:'🏆', title:'Тир-апгрейд', text:'T'+(ed.tier||3)+'→T'+Math.min(5,(ed.tier||3)+1)+' даст больше HP и разблокирует более высокую лигу.' });
  return tips.slice(0, 5);
}

/* ── #12 Контр-билд ─────────────────────────────────────────── */
function computeCounterBuild(enemy) {
  var barrels = enemy.barrels || [];
  var avgLen = barrels.reduce(function(s,b){ return s+(b.length||48); }, 0) / Math.max(1, barrels.length);
  var n = barrels.length;
  var hp = (enemy.hpSlider||1) * ((TIER_PRESETS[enemy.tier||3]||TIER_PRESETS[3]).hp||1);
  var spd = enemy.speedSlider || 1;
  var tips, tplKey, tplName;
  if (avgLen > 60) {
    tips = ['Враг — снайпер. Атакуй с боков: высокая скорость + ближний бой делает снайпера беспомощным.',
            'Широкие стволы разрушают дальние снаряды на подлёте.',
            'Держись ближе 200px — вне прицельного диапазона противника.'];
    tplKey = 'spinner'; tplName = 'Спиннер (ближний бой)';
  } else if (n >= 4) {
    tips = ['Рой дронов. Используй пробивание 3+ чтобы проходить сквозь дронов.',
            'Длинный ствол + высокая скорость пуль: уничтожай дронов до контакта.',
            'Избегай замкнутых пространств — там рой максимально опасен.'];
    tplKey = 'sniper'; tplName = 'Снайпер (высокое пробивание)';
  } else if (hp > 2.5) {
    tips = ['Враг очень живуч. Нужен максимальный DPS: тяжёлые стволы с bDmg > 3.',
            'Ракетный тип эффективен — взрыв наносит урон сквозь корпус.',
            'Атакуй burst-ом и отходи для перезарядки — не давай врагу регенерировать.'];
    tplKey = 'cannon'; tplName = 'Миномёт (бурст-урон)';
  } else if (spd > 1.5) {
    tips = ['Враг быстрый. Мины (тип «Мина») идеальны — быстрый враг сам на них наедет.',
            'Веерное расположение стволов: не надо целиться, покрывай площадь.',
            'Увеличь HP и стань «башней» — быстрые враги сами подлетают к тебе.'];
    tplKey = 'miner'; tplName = 'Минёр (ловушки)';
  } else {
    tips = ['Сбалансированный враг. Врасплох: включи автоогонь + неожиданное направление атаки.',
            'Флангируй: атакуй под 90° к направлению движения противника.',
            'Авто-турели дают преимущество в хаотичном бою.'];
    tplKey = 'autoturret'; tplName = 'Авто-турельщик';
  }
  var tpl = TANK_TEMPLATES.find(function(t){ return t._tpl === tplKey; }) || TANK_TEMPLATES[0];
  return { tips: tips, template: tpl, templateName: tplName };
}

/* ── #11 Эволюция: 1 поколение ──────────────────────────────── */
function mutateBarrel(b) {
  var keys = ['length','width','reload','bSize','bSpeed','bDmg'];
  var k = keys[Math.floor(Math.random() * keys.length)];
  var delta = (Math.random()-0.5) * 0.4;
  var v = (b[k] || 1) + delta;
  var bounds = { length:[20,100], width:[5,36], reload:[0.2,5], bSize:[0.3,3], bSpeed:[0.3,4], bDmg:[0.2,5] };
  v = Math.max(bounds[k][0], Math.min(bounds[k][1], v));
  var nb = Object.assign({}, b);
  nb[k] = parseFloat(v.toFixed(2));
  return nb;
}
function evolveOnce(def) {
  var mutated = Object.assign({}, def, { barrels: (def.barrels||[]).map(mutateBarrel) });
  /* 10% шанс добавить/убрать ствол */
  if (Math.random() < 0.1 && mutated.barrels.length > 1) {
    mutated.barrels = mutated.barrels.slice(0, mutated.barrels.length - 1);
  } else if (Math.random() < 0.08 && mutated.barrels.length < 8) {
    var src = mutated.barrels[Math.floor(Math.random()*mutated.barrels.length)];
    mutated.barrels = mutated.barrels.concat([Object.assign({}, src, { id: Date.now()+Math.random(), angle: parseFloat((Math.random()*Math.PI*2).toFixed(4)) })]);
  }
  return mutated;
}
function scoreForEvolution(def) {
  var b = def.barrels || [];
  if (b.length === 0) return 0;
  var dps = b.reduce(function(s,x){ return s+(x.bDmg||1)/(x.reload||1); }, 0);
  var hp = (def.hpSlider||1) * ((TIER_PRESETS[def.tier||3]||TIER_PRESETS[3]).hp||1);
  return dps * 2 + hp * 1.5;
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(registerAllCustomTanks, 600);
} else {
  window.addEventListener('DOMContentLoaded', function(){ setTimeout(registerAllCustomTanks, 600); });
}

/* ── Хук скорости: применяем _initMovementSpeed при смене класса ── */
(function() {
  var _prevClass = null;
  setInterval(function() {
    try {
      var gs = window._gs;
      if (!gs || !gs.player) return;
      var p = gs.player;
      var cls = p.className;
      if (cls === _prevClass) return;
      _prevClass = cls;
      var td = window._t && window._t[cls];
      if (!td || !td._isCustom || !td._initMovementSpeed) return;
      p.stats.movementSpeed = Math.min(10, td._initMovementSpeed);
    } catch(e) {}
  }, 200);
})();

/* ═══════════════════════════════════════════════════════════════
   REACT UI
   ═══════════════════════════════════════════════════════════════ */

function TankBuilder({ onClose }) {
  var React  = window.cl || window.React;
  if (!React) return null;
  var useState  = React.useState;
  var useEffect = React.useEffect;
  var useRef    = React.useRef;
  var jsx  = window.D && window.D.jsx;
  var jsxs = window.D && window.D.jsxs;
  if (!jsx || !jsxs) return null;

  /* _blank хранится в ref чтобы избежать нового genId() на каждый рендер */
  var _blankRef = useRef(null);
  if (!_blankRef.current) {
    _blankRef.current = {
      id: genId(),
      name: '',
      tier: 3,
      color: '#22cc55',
      upgradesFrom: ['Basic'],
      category: '',
      description: '',
      barrels: [],
      hpSlider: 1.0,
      speedSlider: 1.0,
      specialType: 'normal',
      autoGun: false,
      turretDeploy: false,
      turretCfg: { maxTurrets:3, fireRate:55, health:90, lifetime:700, damage:9, speed:8.5, size:7, homing:false },
      upgradesTo: [],
    };
  }
  var _blank = _blankRef.current;

  var _s   = useState(null);       var selectedDef = _s[0];  var setSelectedDef = _s[1];
  var _e   = useState(_blank);     var editing     = _e[0];  var setEditing     = _e[1];
  var _tab = useState('editor');   var tab         = _tab[0]; var setTab        = _tab[1];
  var _prv = useState(false);      var previewing  = _prv[0]; var setPreviewing = _prv[1];
  var _sq  = useState('');         var searchQuery = _sq[0];  var setSearchQuery = _sq[1];
  var _lv  = useState(0);          var setListVersion = _lv[1];
  /* ── Новые состояния ─────────────────────────────────────── */
  var _sym  = useState(false);     var autoSymmetry = _sym[0]; var setAutoSymmetry = _sym[1];
  var _cmp  = useState(null);      var compareWith  = _cmp[0]; var setCompareWith  = _cmp[1];
  var _hist = useState(false);     var showHistory  = _hist[0]; var setShowHistory  = _hist[1];
  var _tf   = useState(null);      var tierFilter   = _tf[0];  var setTierFilter   = _tf[1];
  var _sb   = useState('date');    var sortBy       = _sb[0];  var setSortBy       = _sb[1];
  var _fav  = useState(function(){
    try { return JSON.parse(localStorage.getItem('diep_favs')||'{}'); } catch(e){ return {}; }
  }); var favorites = _fav[0]; var setFavorites = _fav[1];
  /* ── #10 #11 #12 новые модалы ──────────────────────────────── */
  var _si  = useState(false); var showSuggest    = _si[0];  var setShowSuggest    = _si[1];
  var _sev = useState(false); var showEvolution  = _sev[0]; var setShowEvolution  = _sev[1];
  var _sct = useState(null);  var showCounter    = _sct[0]; var setShowCounter    = _sct[1];
  var _evR = useState(null);  var evolutionResult= _evR[0]; var setEvolutionResult= _evR[1];
  var _evP = useState(false); var evolutionRunning=_evP[0]; var setEvolutionRunning=_evP[1];

  /* ── Подтверждение удаления ─────────────────────────────────── */
  var _dp = useState(null); var deletePending = _dp[0]; var setDeletePending = _dp[1];
  /* ── История undo/redo ─────────────────────────────────────── */
  var historyRef    = useRef([]);
  var historyIdxRef = useRef(-1);

  /* Добавить снимок состояния в историю */
  function pushHistory(state) {
    var h = historyRef.current;
    var idx = historyIdxRef.current;
    h.splice(idx + 1);
    h.push(JSON.stringify(state));
    if (h.length > 60) h.shift();
    historyIdxRef.current = h.length - 1;
  }

  /* Отмена */
  function undo() {
    var h = historyRef.current;
    var idx = historyIdxRef.current;
    if (idx <= 0) return;
    historyIdxRef.current = idx - 1;
    try { setEditing(JSON.parse(h[idx - 1])); } catch(e){}
  }

  /* Возврат */
  function redo() {
    var h = historyRef.current;
    var idx = historyIdxRef.current;
    if (idx >= h.length - 1) return;
    historyIdxRef.current = idx + 1;
    try { setEditing(JSON.parse(h[idx + 1])); } catch(e){}
  }

  var canUndoRef = useRef(false);
  var canRedoRef = useRef(false);
  canUndoRef.current = historyIdxRef.current > 0;
  canRedoRef.current = historyIdxRef.current < historyRef.current.length - 1;

  /* ── Модал импорта/экспорта ─────────────────────────────────── */
  /* modal: null | { type:'export', code:string, defName:string } | { type:'import' } */
  var _mod = useState(null); var modal = _mod[0]; var setModal = _mod[1];
  var _imp = useState('');   var importCode = _imp[0]; var setImportCode = _imp[1];
  var _impErr = useState(''); var importErr = _impErr[0]; var setImportErr = _impErr[1];
  var _copied = useState(false); var copied = _copied[0]; var setCopied = _copied[1];

  /* ── Вид холста ────────────────────────────────────────────── */
  /* viewRef хранит текущее состояние вида без ре-рендера */
  var viewRef = useRef({ panX: 0, panY: 0, zoom: 1.0 });
  /* viewLocked управляет блокировкой через React-стейт (нужен ре-рендер для иконки) */
  var _lk = useState(false); var viewLocked = _lk[0]; var setViewLocked = _lk[1];
  /* Счётчик для принудительного обновления отображения zoom% */
  var _vc = useState(0); var setViewCounter = _vc[1];
  /* ── Wizard state ── */
  var _step  = useState(0);    var wizStep       = _step[0];  var setWizStep       = _step[1];
  var _abi   = useState(0);    var activeBarrelIdx = _abi[0]; var setActiveBarrelIdx = _abi[1];
  var _drExp = useState(true); var drawerExpanded = _drExp[0]; var setDrawerExpanded  = _drExp[1];

  var canvasRef      = useRef(null);
  var canvasWrapRef  = useRef(null);
  var animRef        = useRef(null);
  var bulletsRef     = useRef([]);
  var recoilRef      = useRef({});
  /* Состояние drag/pinch */
  var dragRef     = useRef({ active: false, lastX: 0, lastY: 0 });
  var pinchRef    = useRef({ active: false, lastDist: 0 });
  var droneRef    = useRef([]);   /* #4 орбитальные дроны */

  /* ── Вспомогательные функции вида ──────────────────────────── */
  function clampZoom(z) { return Math.max(0.2, Math.min(5.0, z)); }

  function resetView() {
    viewRef.current = { panX: 0, panY: 0, zoom: 1.0 };
    setViewCounter(function(c){ return c+1; });
  }

  function zoomBy(delta) {
    if (viewLocked) return;
    var v = viewRef.current;
    v.zoom = clampZoom(v.zoom + delta);
    setViewCounter(function(c){ return c+1; });
  }

  /* ── Ctrl+Z / Ctrl+Y keyboard shortcuts ────────────────────── */
  useEffect(function() {
    function onKey(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      if (e.key === 'z' || e.key === 'Z') { e.preventDefault(); undo(); }
      if (e.key === 'y' || e.key === 'Y') { e.preventDefault(); redo(); }
    }
    window.addEventListener('keydown', onKey);
    return function() { window.removeEventListener('keydown', onKey); };
  }, []);

  /* ── ResizeObserver: синхронизирует атрибуты canvas с CSS-размером ── */
  useEffect(function() {
    var cvs  = canvasRef.current;
    var wrap = canvasWrapRef.current;
    if (!cvs || !wrap || typeof ResizeObserver === 'undefined') return;
    var ro = new ResizeObserver(function(entries) {
      var entry = entries[0];
      if (!entry) return;
      var w = Math.round(entry.contentRect.width);
      var h = Math.round(entry.contentRect.height);
      if (w > 0 && h > 0 && (cvs.width !== w || cvs.height !== h)) {
        cvs.width  = w;
        cvs.height = h;
      }
    });
    ro.observe(wrap);
    return function() { ro.disconnect(); };
  }, []);

  /* ── Canvas pointer / touch events ─────────────────────────── */
  useEffect(function() {
    var cvs = canvasRef.current;
    if (!cvs) return;

    function onPointerDown(e) {
      if (viewLocked) return;
      if (e.touches && e.touches.length >= 2) {
        /* Pinch start — preventDefault чтобы не было page-scroll */
        e.preventDefault();
        var dx = e.touches[0].clientX - e.touches[1].clientX;
        var dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchRef.current = { active: true, lastDist: Math.sqrt(dx*dx+dy*dy) };
        dragRef.current.active = false;
        return;
      }
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      dragRef.current = { active: true, lastX: clientX, lastY: clientY };
    }

    function onPointerMove(e) {
      if (viewLocked) return;

      /* Pinch zoom */
      if (e.touches && e.touches.length >= 2 && pinchRef.current.active) {
        e.preventDefault();
        var dx = e.touches[0].clientX - e.touches[1].clientX;
        var dy = e.touches[0].clientY - e.touches[1].clientY;
        var dist = Math.sqrt(dx*dx+dy*dy);
        var delta = (dist - pinchRef.current.lastDist) * 0.008;
        viewRef.current.zoom = clampZoom(viewRef.current.zoom + delta);
        pinchRef.current.lastDist = dist;
        setViewCounter(function(c){ return c+1; });
        return;
      }

      /* Pan */
      if (!dragRef.current.active) return;
      var clientX = e.touches ? e.touches[0].clientX : e.clientX;
      var clientY = e.touches ? e.touches[0].clientY : e.clientY;
      var v = viewRef.current;
      v.panX += (clientX - dragRef.current.lastX);
      v.panY += (clientY - dragRef.current.lastY);
      dragRef.current.lastX = clientX;
      dragRef.current.lastY = clientY;
    }

    function onPointerUp() {
      dragRef.current.active  = false;
      pinchRef.current.active = false;
    }

    function onWheel(e) {
      if (viewLocked) return;
      e.preventDefault();
      var delta = e.deltaY > 0 ? -0.12 : 0.12;
      /* Zoom to cursor — используем rect.width/height (реальные CSS-пиксели),
         а не cvs.width/height (логические), чтобы центр совпадал при CSS-масштабировании */
      var rect = cvs.getBoundingClientRect();
      var mx = (e.clientX - rect.left) - rect.width  / 2;
      var my = (e.clientY - rect.top)  - rect.height / 2;
      var v = viewRef.current;
      var oldZoom = v.zoom;
      var newZoom = clampZoom(oldZoom + delta);
      var scale = newZoom / oldZoom;
      v.panX = mx + (v.panX - mx) * scale;
      v.panY = my + (v.panY - my) * scale;
      v.zoom = newZoom;
      setViewCounter(function(c){ return c+1; });
    }

    /* touchstart НЕ passive — нужен preventDefault для щупа */
    cvs.addEventListener('mousedown',  onPointerDown);
    cvs.addEventListener('mousemove',  onPointerMove);
    cvs.addEventListener('mouseup',    onPointerUp);
    cvs.addEventListener('mouseleave', onPointerUp);
    cvs.addEventListener('touchstart', onPointerDown, { passive: false });
    cvs.addEventListener('touchmove',  onPointerMove, { passive: false });
    cvs.addEventListener('touchend',    onPointerUp);
    cvs.addEventListener('touchcancel', onPointerUp);   /* прерывание жеста (звонок, уведомление) */
    cvs.addEventListener('wheel',       onWheel,       { passive: false });

    return function() {
      cvs.removeEventListener('mousedown',   onPointerDown);
      cvs.removeEventListener('mousemove',   onPointerMove);
      cvs.removeEventListener('mouseup',     onPointerUp);
      cvs.removeEventListener('mouseleave',  onPointerUp);
      cvs.removeEventListener('touchstart',  onPointerDown);
      cvs.removeEventListener('touchmove',   onPointerMove);
      cvs.removeEventListener('touchend',    onPointerUp);
      cvs.removeEventListener('touchcancel', onPointerUp);
      cvs.removeEventListener('wheel',       onWheel);
    };
  }, [viewLocked]);

  /* ── Рисование ─────────────────────────────────────────────── */
  useEffect(function() {
    var cvs = canvasRef.current;
    if (!cvs) return;
    var ctx = cvs.getContext('2d');

    function drawFrame(ts) {
      var W = cvs.width, H = cvs.height;
      ctx.clearRect(0, 0, W, H);

      var v = viewRef.current;
      var panX = v.panX, panY = v.panY, zoom = v.zoom;
      /* Центр + пан */
      var cx = W/2 + panX;
      var cy = H/2 + panY;

      /* Сетка (рисуем в мировых координатах) */
      var gridStep = 40 * zoom;
      var offX = ((cx % gridStep) + gridStep) % gridStep;
      var offY = ((cy % gridStep) + gridStep) % gridStep;
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      for (var gx = offX - gridStep; gx < W + gridStep; gx += gridStep) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke();
      }
      for (var gy = offY - gridStep; gy < H + gridStep; gy += gridStep) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke();
      }

      /* Крестик центра */
      ctx.strokeStyle = 'rgba(68,136,255,0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx-12,cy); ctx.lineTo(cx+12,cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx,cy-12); ctx.lineTo(cx,cy+12); ctx.stroke();

      var color  = editing.color || '#22cc55';
      var radius = 22 * zoom * (TIER_PRESETS[editing.tier] || TIER_PRESETS[3]).radiusMultiplier;

      /* Стволы */
      /* Decay recoil each frame */
      Object.keys(recoilRef.current).forEach(function(k) {
        recoilRef.current[k] *= 0.72;
        if (recoilRef.current[k] < 0.4) delete recoilRef.current[k];
      });
      editing.barrels.forEach(function(b, bi) {
        var ang = b.angle  || 0;
        var len = (b.length || 48) * zoom * 0.55;
        var wid = (b.width  || 14) * zoom * 0.55;
        var lat = (b.lateral|| 0)  * zoom * 0.55;
        var rcl = recoilRef.current[bi] || 0;
        ctx.save();
        ctx.translate(cx - Math.sin(ang)*lat, cy + Math.cos(ang)*lat);
        ctx.rotate(ang);
        ctx.fillStyle   = '#aaaaaa';
        ctx.strokeStyle = '#888888';
        ctx.lineWidth   = 1.5;
        ctx.beginPath();
        ctx.rect(radius*0.55 - rcl, -wid/2, len, wid);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      /* Корпус */
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI*2);
      ctx.fillStyle   = color;
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.lineWidth   = 3;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      /* Авто-турели на холсте */
      if (editing.turretDeploy) {
        var tc = editing.turretCfg || {};
        var nt = Math.min(tc.maxTurrets || 3, 8);
        var tsr = radius + 14 * zoom;
        for (var _ti2 = 0; _ti2 < nt; _ti2++) {
          var _ta2 = (Math.PI * 2 / nt) * _ti2;
          var _tx = cx + Math.cos(_ta2) * tsr;
          var _ty = cy + Math.sin(_ta2) * tsr;
          ctx.fillStyle = '#9999cc';
          ctx.beginPath(); ctx.arc(_tx, _ty, 4.5 * zoom, 0, Math.PI*2); ctx.fill();
          ctx.strokeStyle = '#6666aa'; ctx.lineWidth = 1;
          ctx.stroke();
          var _tl = Math.min(16, (tc.size || 7)) * zoom * 0.55;
          ctx.strokeStyle = '#ccccff'; ctx.lineWidth = Math.max(1, (tc.size || 7) * zoom * 0.18);
          ctx.beginPath(); ctx.moveTo(_tx, _ty);
          ctx.lineTo(_tx + Math.cos(_ta2) * _tl, _ty + Math.sin(_ta2) * _tl);
          ctx.stroke();
        }
      }

      /* Превью пуль */
      if (previewing) {
        var now = ts || 0;
        /* Спавн строго раз в цикл — без искажений при любом reload */
        if (!bulletsRef.current._cyc) bulletsRef.current._cyc = {};
        /* #1 chained: отслеживаем последний момент стрельбы каждого ствола */
        if (!bulletsRef.current._lastFired) bulletsRef.current._lastFired = {};
        editing.barrels.forEach(function(b, bi) {
          var period = Math.round(600 * (b.reload || 1));
          /* fireGroup: 0=независимый (offset по индексу), 1-4=последовательный */
          var fg = b.fireGroup || 0;
          var tOffset = fg > 0 ? (fg - 1) * 280 : bi * 200;
          var cycIdx = Math.floor((now + tOffset) / period);
          if (cycIdx !== bulletsRef.current._cyc[bi]) {
            /* #1 Цепной: стреляет только если предыдущий выстрелил в пределах 1 периода */
            if (b.chained && bi > 0) {
              var prevFired = bulletsRef.current._lastFired[bi-1] || 0;
              var prevPeriod = Math.round(600 * (editing.barrels[bi-1].reload || 1));
              if ((now - prevFired) > prevPeriod * 1.1) return;
            }
            bulletsRef.current._cyc[bi] = cycIdx;
            bulletsRef.current._lastFired[bi] = now;
            var ang = b.angle || 0;
            var lat = (b.lateral || 0) * zoom * 0.55;
            var bLen = (b.length || 48) * zoom * 0.55;
            var bsx = (cx - Math.sin(ang)*lat) + Math.cos(ang) * (radius*0.55 + bLen);
            var bsy = (cy + Math.cos(ang)*lat) + Math.sin(ang) * (radius*0.55 + bLen);
            var bSpd = (b.bSpeed || 1.0) * 3.5 * zoom;
            var bt = b.bulletType || 'normal';
            /* #4 Дрон-ствол: добавляем орбитального дрона вместо обычной пули */
            if (bt === 'drone') {
              droneRef.current.push({
                orbitAngle: ang,
                orbitR: radius + 18 * zoom,
                angSpd: (Math.random() > 0.5 ? 1 : -1) * 0.04,
                r: (b.bSize||1.0) * 6 * zoom,
                life: 120, maxLife: 120,
                color: editing.color || '#22cc55',
              });
              if (b.recoil) recoilRef.current[bi] = (b.recoil || 0) * 7 * zoom;
              return;
            }
            bulletsRef.current.push({
              x: bsx, y: bsy,
              vx: Math.cos(ang)*bSpd, vy: Math.sin(ang)*bSpd,
              origVx: Math.cos(ang)*bSpd, origVy: Math.sin(ang)*bSpd,
              r: (b.bSize||1.0) * 5 * zoom,
              bulletType: bt,
              isTrap: bt === 'trap',
              /* #5 рикошет: число отражений */
              ricochet: Math.min(3, Math.max(0, parseInt(b.ricochet)||0)),
              age: 0,
              life: bt === 'boomerang' ? 120 : 80,
              maxLife: bt === 'boomerang' ? 120 : 80,
            });
            /* Recoil: толчок ствола назад при выстреле */
            if (b.recoil) recoilRef.current[bi] = (b.recoil || 0) * 7 * zoom;
          }
        });
        /* #4 Дроны: обновляем орбиту */
        droneRef.current = droneRef.current.filter(function(d){ return d.life > 0; });
        droneRef.current.forEach(function(d) {
          d.orbitAngle += d.angSpd;
          d.orbitR = Math.min(d.orbitR + 0.3, radius + 55 * zoom);
          d.life--;
          var dx = cx + Math.cos(d.orbitAngle) * d.orbitR;
          var dy = cy + Math.sin(d.orbitAngle) * d.orbitR;
          var alpha = d.life / d.maxLife;
          ctx.save();
          ctx.globalAlpha = alpha * 0.9;
          ctx.translate(dx, dy);
          ctx.rotate(d.orbitAngle + Math.PI/2);
          /* Мини-танк: корпус + ствол */
          ctx.fillStyle = d.color;
          ctx.strokeStyle = 'rgba(0,0,0,0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.arc(0, 0, d.r, 0, Math.PI*2); ctx.fill(); ctx.stroke();
          ctx.fillStyle = '#aaaaaa';
          ctx.fillRect(d.r*0.5, -d.r*0.3, d.r*0.9, d.r*0.6);
          ctx.restore();
        });

        bulletsRef.current = bulletsRef.current.filter(function(blt){ return blt.life > 0; });
        bulletsRef.current.forEach(function(blt) {
          blt.age++;
          /* Boomerang: reverse direction at halfway */
          if (blt.bulletType === 'boomerang') {
            var half = blt.maxLife / 2;
            if (blt.age === Math.floor(half)) { blt.vx = -blt.origVx; blt.vy = -blt.origVy; }
          }
          /* #5 Рикошет: отражаемся от краёв canvas */
          if (blt.ricochet > 0) {
            if (blt.x - blt.r < 0 || blt.x + blt.r > W) {
              blt.vx = -blt.vx; blt.x = Math.max(blt.r, Math.min(W - blt.r, blt.x));
              blt.origVx = -blt.origVx; blt.ricochet--;
            }
            if (blt.y - blt.r < 0 || blt.y + blt.r > H) {
              blt.vy = -blt.vy; blt.y = Math.max(blt.r, Math.min(H - blt.r, blt.y));
              blt.origVy = -blt.origVy; blt.ricochet--;
            }
          }
          blt.x += blt.vx; blt.y += blt.vy; blt.life--;
          var alpha = blt.life / blt.maxLife;
          var bt = blt.bulletType || 'normal';
          ctx.save();
          ctx.globalAlpha = alpha;
          if (bt === 'trap') {
            ctx.fillStyle = '#e8a000'; ctx.strokeStyle = '#000'; ctx.lineWidth = 1;
            ctx.beginPath();
            for (var _ti=0;_ti<8;_ti++){ var _ta=_ti*Math.PI/4+blt.age*0.05; _ti===0?ctx.moveTo(blt.x+Math.cos(_ta)*blt.r,blt.y+Math.sin(_ta)*blt.r):ctx.lineTo(blt.x+Math.cos(_ta)*blt.r,blt.y+Math.sin(_ta)*blt.r); }
            ctx.closePath(); ctx.fill(); ctx.stroke();
          } else if (bt === 'grenade') {
            /* Grenade: dark circle that expands near end of life */
            var gf = 1 - blt.life / blt.maxLife;
            var gr = blt.r * (1 + gf * 1.8);
            ctx.fillStyle = 'rgba(80,40,0,' + alpha + ')';
            ctx.strokeStyle = 'rgba(255,160,0,' + alpha + ')';
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(blt.x, blt.y, gr, 0, Math.PI*2); ctx.fill(); ctx.stroke();
            if (gf > 0.75) {
              ctx.strokeStyle = 'rgba(255,80,0,'+(alpha*0.6)+')';
              ctx.lineWidth = 1;
              ctx.beginPath(); ctx.arc(blt.x, blt.y, gr * 2.5, 0, Math.PI*2); ctx.stroke();
            }
          } else if (bt === 'boomerang') {
            /* Boomerang: angular shape */
            ctx.strokeStyle = 'rgba(180,120,0,' + alpha + ')';
            ctx.lineWidth = blt.r * 0.6;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.arc(blt.x, blt.y, blt.r * 1.2, blt.age * 0.1, blt.age * 0.1 + Math.PI * 0.8);
            ctx.stroke();
          } else if (bt === 'lightning') {
            /* Lightning: jagged line from prev position */
            ctx.strokeStyle = 'rgba(180,180,255,' + alpha + ')';
            ctx.lineWidth = Math.max(1, blt.r * 0.5);
            ctx.shadowColor = '#8888ff';
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.moveTo(blt.x, blt.y);
            var segs = 5, dx = -blt.vx * 4, dy = -blt.vy * 4;
            for (var _li = 1; _li <= segs; _li++) {
              var _lf = _li / segs;
              ctx.lineTo(blt.x + dx*_lf + (Math.random()-0.5)*blt.r*2, blt.y + dy*_lf + (Math.random()-0.5)*blt.r*2);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
            ctx.beginPath(); ctx.arc(blt.x, blt.y, blt.r * 0.7, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(200,200,255,' + alpha + ')'; ctx.fill();
          } else {
            ctx.beginPath();
            ctx.arc(blt.x, blt.y, blt.r, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(255,220,80,' + alpha + ')';
            ctx.fill();
          }
          ctx.restore();
        });
      } else {
        bulletsRef.current = [];
        droneRef.current = [];
      }

      animRef.current = requestAnimationFrame(drawFrame);
    }

    animRef.current = requestAnimationFrame(drawFrame);
    return function() { cancelAnimationFrame(animRef.current); };
  }, [editing, previewing]);

  /* ── Barrel helpers ─────────────────────────────────────────── */
  function addBarrel(preset) {
    var p = preset || BARREL_PRESETS[0];
    setEditing(function(prev) {
      var nb = Object.assign({}, p, { angle:0, lateral:0, id:Date.now(), bulletType: p.bulletType||'normal', fireGroup:0, penetration:1, recoil:0 });
      var bList = prev.barrels.concat([nb]);
      if (autoSymmetry) {
        bList = bList.concat([Object.assign({}, nb, { id: Date.now()+1, angle: Math.PI, lateral: -nb.lateral })]);
      }
      var next = Object.assign({}, prev, { barrels: bList });
      pushHistory(next);
      return next;
    });
  }

  /* ── Применить пресет раскладки ─────────────────────────────── */
  function applyLayoutPreset(lp) {
    var base = BARREL_PRESETS[0];
    setEditing(function(prev) {
      var newBarrels = lp.angles.map(function(a, i) {
        return Object.assign({}, base, {
          id: Date.now() + i,
          angle: parseFloat(a.toFixed(4)),
          lateral: (lp.laterals && lp.laterals[i]) ? lp.laterals[i] : 0,
          bulletType: 'normal',
          fireGroup: 0,
          penetration: 1,
          recoil: 0,
        });
      });
      var next = Object.assign({}, prev, { barrels: newBarrels });
      pushHistory(next);
      return next;
    });
    bulletsRef.current = [];
  }

  /* ── Избранное ─────────────────────────────────────────────── */
  function toggleFavorite(id) {
    setFavorites(function(prev) {
      var next = Object.assign({}, prev);
      if (next[id]) { delete next[id]; } else { next[id] = true; }
      try { localStorage.setItem('diep_favs', JSON.stringify(next)); } catch(e){}
      return next;
    });
  }
  function removeBarrel(idx) {
    setEditing(function(prev) {
      var arr = prev.barrels.slice(); arr.splice(idx,1);
      var next = Object.assign({}, prev, { barrels: arr });
      pushHistory(next);
      return next;
    });
  }
  function updateBarrel(idx, key, val) {
    setEditing(function(prev) {
      return Object.assign({}, prev, { barrels: prev.barrels.map(function(b,i){ return i===idx ? Object.assign({},b,((function(o){o[key]=val;return o;})({})) ) : b; }) });
    });
  }
  function mirrorBarrel(idx) {
    setEditing(function(prev) {
      var b = prev.barrels[idx];
      if (!b) return prev;
      var mirrored = Object.assign({}, b, {
        id: Date.now() + 1,
        lateral: -(b.lateral || 0),
        angle:   -( b.angle || 0),
      });
      var arr = prev.barrels.slice();
      arr.splice(idx + 1, 0, mirrored);
      var next = Object.assign({}, prev, { barrels: arr });
      pushHistory(next);
      return next;
    });
  }
  function applyTemplate(tpl) {
    var def = JSON.parse(JSON.stringify(tpl));
    def.id = genId();
    def.barrels = def.barrels.map(function(b, i){ return Object.assign({}, b, {id: Date.now()+i}); });
    delete def._tpl;
    pushHistory(def);
    setEditing(def);
    bulletsRef.current = [];
    setPreviewing(false);
  }

  /* ── Экспорт / Импорт — функции ────────────────────────────── */
  function openExport(def) {
    var code = exportTankCode(def);
    if (!code) { alert('Не удалось экспортировать танк'); return; }
    setModal({ type: 'export', code: code, defName: def.name });
    setCopied(false);
  }

  function openImport() {
    setImportCode('');
    setImportErr('');
    setModal({ type: 'import' });
  }

  function closeModal() {
    setModal(null);
    setImportCode('');
    setImportErr('');
  }

  function doCopy(code) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(function() {
        setCopied(true);
        setTimeout(function(){ setCopied(false); }, 2000);
      }).catch(function() {
        /* Clipboard API недоступен (нет разрешения) — падаем на execCommand */
        doCopyFallback(code);
      });
    } else {
      doCopyFallback(code);
    }
  }

  function doCopyFallback(code) {
    try {
      var ta = document.createElement('textarea');
      ta.value = code;
      ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(function(){ setCopied(false); }, 2000);
    } catch(e) { alert('Скопируй код вручную из поля выше'); }
  }

  function doImport() {
    setImportErr('');
    try {
      var def = importTankCode(importCode);
      /* Загружаем в редактор */
      setEditing(def);
      setSelectedDef(null);
      setTab('editor');
      setPreviewing(false);
      bulletsRef.current = [];
      closeModal();
    } catch(e) {
      setImportErr(e.message || 'Неизвестная ошибка');
    }
  }

  /* ── Экспорт текущего танка из редактора и немедленное сохранение ── */
  function saveAndExport() {
    if (!editing.name.trim()) { alert('Введи имя танка перед экспортом!'); return; }
    var def = Object.assign({}, editing, { name: editing.name.trim() });
    var list = loadTanks();
    var idx  = list.findIndex(function(t){ return t.id === def.id; });
    if (idx >= 0) list[idx] = def; else list.push(def);
    saveTanks(list);
    registerTank(def);
    openExport(def);
  }

  /* ── Save / delete / nav ────────────────────────────────────── */
  function saveTank() {
    if (!editing.name.trim()) { alert('Введи имя танка!'); return; }
    var def  = Object.assign({}, editing, { name: editing.name.trim() });
    var list = loadTanks();
    var idx  = list.findIndex(function(t){ return t.id === def.id; });
    if (idx >= 0) list[idx] = def; else list.push(def);
    saveTanks(list);
    registerTank(def);
    /* #18 Виджет: обновляем данные на домашнем экране */
    try {
      var _ws = computeStats(def);
      var _wTier = def.tier || 3;
      var _wPreset = TIER_PRESETS[_wTier] || TIER_PRESETS[3];
      var _wHp = Math.round(_wPreset.hp * (def.hpSlider || 1) * 100);
      if (window.Android && window.Android.updateWidget) {
        window.Android.updateWidget(
          def.name || 'Танк',
          _wTier,
          _ws ? parseFloat(_ws.dps) : 0,
          _wHp,
          (def.barrels || []).length
        );
      }
    } catch(_we) {}
    setTab('list');
    alert('Танк "' + def.name + '" сохранён и добавлен в дерево прокачки!');
  }
  function deleteTank(id) {
    setDeletePending(id);
  }
  function confirmDelete(id) {
    saveTanks(loadTanks().filter(function(t){ return t.id !== id; }));
    if (window._t) delete window._t[id];
    if (window.w0) {
      for (var _wi = window.w0.length - 1; _wi >= 0; _wi--) {
        if (window.w0[_wi].name === id) window.w0.splice(_wi, 1);
      }
    }
    if (window.Ty) {
      for (var _tyi = window.Ty.length - 1; _tyi >= 0; _tyi--) {
        if (window.Ty[_tyi][0] === id || window.Ty[_tyi][1] === id) window.Ty.splice(_tyi, 1);
      }
    }
    setDeletePending(null);
    setTab('list');
    if (editing.id === id) {
      setEditing(Object.assign({}, _blank, { id: genId() }));
      setSelectedDef(null);
    }
  }
  function startNew() {
    setEditing(Object.assign({}, _blank, { id: genId() }));
    setSelectedDef(null); setTab('editor'); setPreviewing(false); bulletsRef.current = [];
  }
  function editExisting(def) {
    setEditing(JSON.parse(JSON.stringify(def)));
    setSelectedDef(def); setTab('editor'); setPreviewing(false); bulletsRef.current = [];
  }
  function cloneTank(def) {
    var copy = JSON.parse(JSON.stringify(def));
    copy.id = genId();
    copy.name = 'Копия ' + def.name;
    copy.barrels = copy.barrels.map(function(b, i){ return Object.assign({}, b, {id: Date.now()+i}); });
    var list = loadTanks();
    list.push(copy);
    saveTanks(list);
    registerTank(copy);
    setListVersion(function(v){ return v + 1; }); /* принудительный ре-рендер списка */
  }

  var tankList = loadTanks();
  var parentOptions = ['Basic'];
  if (window._t) {
    var _bOrder = ['Sniper','MachineGun','FlankGuard','Assassin','Hunter','TripleShot',
      'Quad','Penta','Spread','Streamliner','Stalker','Ranger','Predator',
      'Overlord','Overseer','Necromancer','Manager','Fighter','Booster',
      'Annihilator','Triplet','Auto5','AutoGunner','Smasher','Landmine','MegaSmasher',
      'Destroyer','Hybrid','Gunner','Rocketeer','Battleship','Skimmer','Spike',
      'Auto3','Laser','Railgun','Shotgun','Dreadnought','Blaster','Buster','Riot',
      'Colossus','Cruiser','Brawler','Assault'];
    _bOrder.forEach(function(k){ if (window._t[k] && parentOptions.indexOf(k)<0) parentOptions.push(k); });
    Object.keys(window._t).sort().forEach(function(k){ if (k!=='Basic' && parentOptions.indexOf(k)<0) parentOptions.push(k); });
  }

  var tier   = editing.tier || 3;
  var preset = TIER_PRESETS[tier] || TIER_PRESETS[3];
  var hpEff  = Math.round(preset.hp    * editing.hpSlider    * 100);
  var spdPts = Math.min(10, Math.max(0, Math.round(Math.log(Math.max(0.001, preset.speed * editing.speedSlider)) / Math.log(1.07))));
  var zoomPct = Math.round((viewRef.current.zoom || 1) * 100);

  /* ── Filtered list + category groups ──────────────────────── */
  var filteredList = tankList.filter(function(t) {
    if (!searchQuery.trim()) return true;
    var q = searchQuery.trim().toLowerCase();
    return t.name.toLowerCase().indexOf(q) >= 0 || (t.category||'').toLowerCase().indexOf(q) >= 0;
  });
  var catGroups = (function() {
    var groups = {}, keys = [];
    filteredList.forEach(function(t) {
      var c = t.category || '';
      if (!groups[c]) { groups[c] = []; keys.push(c); }
      groups[c].push(t);
    });
    keys.sort(function(a,b) { if(a===''&&b!=='') return 1; if(a!==''&&b==='') return -1; return a<b?-1:a>b?1:0; });
    return keys.map(function(k){ return { cat:k, tanks:groups[k] }; });
  })();

  /* ── Стили ──────────────────────────────────────────────────── */
  var S = {
    root: { position:'fixed',inset:0,zIndex:2000,background:'linear-gradient(135deg,#0d0d1f 0%,#121228 50%,#0a0a1a 100%)',display:'flex',flexDirection:'column',fontFamily:'Arial,sans-serif',overflow:'hidden' },
    header: { display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 20px',background:'rgba(0,0,0,0.5)',borderBottom:'1.5px solid rgba(68,136,255,0.3)',flexShrink:0 },
    title: { color:'#00b2e1',fontSize:18,fontWeight:900,letterSpacing:2 },
    tabs: { display:'flex',gap:0,borderBottom:'1.5px solid rgba(255,255,255,0.1)',flexShrink:0 },
    tab: function(a){ return { flex:1,padding:'9px',border:'none',cursor:'pointer',fontFamily:'Arial',fontSize:13,fontWeight:'bold',letterSpacing:0.5,background:a?'rgba(0,100,180,0.4)':'transparent',color:a?'#00ccff':'rgba(255,255,255,0.45)',borderBottom:a?'2px solid #00ccff':'2px solid transparent' }; },
    body: { flex:1,display:'flex',overflow:'hidden' },
    /* Левая колонка */
    leftCol: { width:260,flexShrink:0,display:'flex',flexDirection:'column',borderRight:'1px solid rgba(255,255,255,0.08)',overflow:'hidden' },
    canvasWrap: { position:'relative',flex:1,overflow:'hidden',background:'rgba(10,14,38,0.95)',cursor: viewLocked ? 'default' : 'grab' },
    canvas: { display:'block',width:'100%',height:'100%' },
    /* Панель управления видом */
    viewBar: { display:'flex',alignItems:'center',gap:4,padding:'6px 8px',background:'rgba(0,0,0,0.6)',borderTop:'1px solid rgba(255,255,255,0.08)',flexShrink:0 },
    viewBtn: function(active, col) { return { padding:'5px 10px',borderRadius:6,border:'1.5px solid rgba(255,255,255,0.15)',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:11,background:active?(col||'rgba(0,80,200,0.7)'):'rgba(255,255,255,0.07)',color:active?'#fff':'rgba(255,255,255,0.6)',touchAction:'manipulation',flexShrink:0 }; },
    viewZoomLabel: { color:'rgba(255,255,255,0.45)',fontSize:10,minWidth:44,textAlign:'center' },
    /* Нижняя часть левой колонки */
    leftBottom: { flexShrink:0,padding:'8px 10px',display:'flex',flexDirection:'column',gap:7,borderTop:'1px solid rgba(255,255,255,0.06)' },
    /* Правая колонка */
    rightCol: { flex:1,overflowY:'auto',padding:'12px 14px',display:'flex',flexDirection:'column',gap:10 },
    section: { background:'rgba(255,255,255,0.04)',borderRadius:10,border:'1px solid rgba(255,255,255,0.08)',padding:'11px' },
    sectionTitle: { color:'rgba(255,255,255,0.55)',fontSize:10,fontWeight:'bold',letterSpacing:1,marginBottom:7,textTransform:'uppercase' },
    input: { width:'100%',padding:'8px 12px',borderRadius:8,border:'1.5px solid rgba(68,136,255,0.35)',background:'rgba(255,255,255,0.06)',color:'#fff',fontSize:13,fontFamily:'Arial',boxSizing:'border-box',outline:'none' },
    btn: function(col){ return { padding:'8px 14px',borderRadius:8,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:12,touchAction:'manipulation',background:col||'rgba(0,100,200,0.6)',color:'#fff' }; },
    tierBtn: function(a,col){ return { flex:1,padding:'7px 2px',borderRadius:7,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:11,background:a?col:'rgba(255,255,255,0.07)',color:a?'#000':'rgba(255,255,255,0.5)',transition:'all 0.12s' }; },
    barrelCard: { background:'rgba(255,255,255,0.05)',borderRadius:8,border:'1px solid rgba(255,255,255,0.1)',padding:'9px',marginBottom:7 },
    sliderRow: { display:'flex',alignItems:'center',gap:7,marginBottom:5 },
    sliderLabel: { color:'rgba(255,255,255,0.5)',fontSize:10,minWidth:108 },
    slider: { flex:1,accentColor:'#00b2e1',cursor:'pointer' },
    sliderVal: { color:'#00ccff',fontSize:10,minWidth:30,textAlign:'right',flexShrink:0 },
    presetGrid: { display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:5,marginBottom:7 },
    presetBtn: { padding:'6px 3px',borderRadius:6,border:'1.5px solid rgba(68,136,255,0.3)',background:'rgba(0,50,120,0.4)',color:'#88ccff',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation' },
    listCard: { background:'rgba(255,255,255,0.04)',borderRadius:10,border:'1px solid rgba(255,255,255,0.1)',padding:'11px',marginBottom:9,display:'flex',alignItems:'center',gap:11 },
    dot: function(col){ return { width:14,height:14,borderRadius:'50%',background:col,flexShrink:0 }; },
    saveBtn: { width:'100%',padding:'13px',fontSize:14,fontWeight:'bold',borderRadius:11,border:'none',cursor:'pointer',fontFamily:'Arial',touchAction:'manipulation',background:'linear-gradient(90deg,#0088cc,#44b4e0)',color:'#fff',boxShadow:'0 4px 14px rgba(0,150,220,0.35)' },
    /* Модал */
    modalOverlay: { position:'fixed',inset:0,zIndex:3000,background:'rgba(0,0,0,0.75)',display:'flex',alignItems:'center',justifyContent:'center',padding:16 },
    modalBox: { background:'#0e1228',border:'1.5px solid rgba(68,136,255,0.4)',borderRadius:16,padding:'20px 18px',width:'100%',maxWidth:480,maxHeight:'90vh',overflowY:'auto',display:'flex',flexDirection:'column',gap:14,boxShadow:'0 16px 60px rgba(0,0,0,0.8)' },
    modalTitle: { color:'#00ccff',fontSize:15,fontWeight:900,letterSpacing:1 },
    modalCode: { width:'100%',minHeight:90,background:'rgba(255,255,255,0.04)',border:'1.5px solid rgba(68,136,255,0.3)',borderRadius:8,color:'#a0d8ff',fontFamily:'monospace',fontSize:11,padding:'10px',boxSizing:'border-box',resize:'vertical',outline:'none',wordBreak:'break-all',lineHeight:1.5 },
    modalImportArea: { width:'100%',minHeight:90,background:'rgba(255,255,255,0.04)',border:'1.5px solid rgba(68,136,255,0.3)',borderRadius:8,color:'#fff',fontFamily:'monospace',fontSize:11,padding:'10px',boxSizing:'border-box',resize:'vertical',outline:'none',wordBreak:'break-all',lineHeight:1.5 },
    modalErr: { color:'#ff7070',fontSize:11,background:'rgba(180,0,0,0.15)',borderRadius:7,padding:'8px 10px',border:'1px solid rgba(255,60,60,0.3)' },
    modalHint: { color:'rgba(255,255,255,0.35)',fontSize:10,lineHeight:1.7 },
    modalBtnRow: { display:'flex',gap:8,flexWrap:'wrap' },
    exportBtn: function(col){ return { padding:'7px 14px',borderRadius:8,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:11,touchAction:'manipulation',background:col||'rgba(0,140,80,0.7)',color:'#fff' }; },
  };

  /* ── Расчётная статистика ─────────────────────────────────── */
  function computeStats(ed) {
    var barrels = ed.barrels || [];
    if (barrels.length === 0) return null;
    var dps = 0, maxRange = 0, minReload = Infinity, totalPen = 0;
    barrels.forEach(function(b) {
      var dmg    = (b.bDmg   || 1.0);
      var reload = (b.reload  || 1.0);
      var speed  = (b.bSpeed  || 1.0);
      var pen    = (b.penetration || 1);
      var range  = speed * 2.5 * 80;
      if (range > maxRange) maxRange = range;
      if (reload < minReload) minReload = reload;
      dps += dmg / reload;
      totalPen += pen;
    });
    var tier   = ed.tier || 3;
    var preset = TIER_PRESETS[tier] || TIER_PRESETS[3];
    var hpMult = preset.hp * (ed.hpSlider || 1);
    var spMult = preset.speed * (ed.speedSlider || 1);
    var firepower = Math.round(dps * (maxRange / 200) * 10);
    /* Effective range = range * penetration factor */
    var avgPen = parseFloat((totalPen / barrels.length).toFixed(1));
    var effectiveRange = Math.round(maxRange * (1 + (avgPen - 1) * 0.15));
    /* Body damage: based on tier HP and hpSlider (tanks that survive more also deal more on contact) */
    var bodyDmg = parseFloat((hpMult * 0.8 * (ed.specialType === 'homing' ? 1.3 : 1)).toFixed(1));
    /* Reload in seconds: minimum reload * (60 ticks / 1 tick=~16ms) */
    var reloadSec = parseFloat((minReload * 0.55).toFixed(2));
    return {
      dps:           parseFloat(dps.toFixed(2)),
      range:         Math.round(maxRange),
      hp:            Math.round(hpMult * 100),
      speed:         Math.round(spMult * 100),
      firepower:     firepower,
      barrels:       barrels.length,
      avgPen:        avgPen,
      effectiveRange:effectiveRange,
      bodyDmg:       bodyDmg,
      reloadSec:     reloadSec,
    };
  }
  var stats = computeStats(editing);

  /* ══════════════════════════════════════════════════════════════
     WIZARD STEP RENDERER
     ══════════════════════════════════════════════════════════════ */
  function renderWizardStep() {
    switch(wizStep) {
      case 0: /* Основа */
        return jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'📦 Стартовый шаблон'}),
            jsx('div',{style:{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:4},children:
              TANK_TEMPLATES.map(function(tpl){
                return jsx('button',{key:tpl._tpl,title:tpl.name+' — '+tpl.description,
                  style:{padding:'6px 2px',borderRadius:7,border:'1.5px solid rgba(68,136,255,0.25)',background:'rgba(0,40,100,0.4)',color:'#aaddff',cursor:'pointer',fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation',display:'flex',flexDirection:'column',alignItems:'center',gap:1},
                  onClick:function(){applyTemplate(tpl);},
                  children:[tpl.icon,jsx('span',{style:{fontSize:8,opacity:0.7},children:tpl.name.split(' ')[0]})]});
              })
            }),
            /* Random tank + balance rating row */
            jsxs('div',{style:{display:'flex',gap:6,alignItems:'center',marginTop:8},children:[
              jsx('button',{
                onClick:function(){
                  var rand=generateRandomTank();
                  setEditing(function(p){var next=Object.assign({},p,rand,{id:p.id});pushHistory(next);return next;});
                  bulletsRef.current=[];
                },
                style:{flex:1,padding:'7px',borderRadius:8,border:'1.5px solid rgba(255,200,0,0.4)',background:'rgba(80,60,0,0.5)',color:'#ffdd55',cursor:'pointer',fontFamily:'Arial',fontSize:12,fontWeight:'bold',touchAction:'manipulation'},
                children:'🎲 Случайный танк',
              }),
              (function(){
                var rating=computeBalanceRating(editing);
                return jsx('div',{
                  style:{padding:'6px 10px',borderRadius:8,background:'rgba(0,0,0,0.3)',border:'1.5px solid '+rating.color+'66',color:rating.color,fontSize:11,fontWeight:'bold',whiteSpace:'nowrap'},
                  title:'Оценка баланса (счёт: '+rating.score+')',
                  children:rating.label,
                });
              })(),
            ]}),
          ]}),
          /* Layout presets */
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'📐 Пресет раскладки стволов'}),
            jsx('div',{style:{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:4},children:
              LAYOUT_PRESETS.map(function(lp){
                return jsx('button',{key:lp.id,
                  style:{padding:'6px 4px',borderRadius:7,border:'1.5px solid rgba(68,136,255,0.25)',background:'rgba(0,40,100,0.4)',color:'#88ccff',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                  title:'Применить раскладку «'+lp.label+'» ('+lp.angles.length+' ствол(ов))',
                  onClick:function(){applyLayoutPreset(lp);},
                  children:[lp.angles.length+'× ',lp.label]});
              })
            }),
          ]}),
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'Название танка'}),
            jsxs('div',{style:{display:'flex',gap:6,alignItems:'center'},children:[
              jsx('input',{value:editing.name,maxLength:18,placeholder:'Например: Снайпер-Х...',style:Object.assign({},S.input,{flex:1,margin:0}),
                onChange:function(e){setEditing(function(p){return Object.assign({},p,{name:e.target.value});});},
              }),
              jsx('button',{
                onClick:function(){ setEditing(function(p){ return Object.assign({},p,{name:autoNameTank(p)}); }); },
                style:{padding:'8px 10px',borderRadius:8,border:'1.5px solid rgba(200,160,0,0.5)',background:'rgba(80,60,0,0.6)',color:'#ffdd88',cursor:'pointer',fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation',whiteSpace:'nowrap'},
                title:'Авто-имя по характеристикам',
                children:'✍ Авто'
              }),
            ]}),
          ]}),
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'Цвет и Тир'}),
            jsxs('div',{style:{display:'flex',alignItems:'center',gap:10,marginBottom:10},children:[
              jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:11},children:'ЦВЕТ:'}),
              jsx('input',{type:'color',value:editing.color||'#22cc55',
                onChange:function(e){setEditing(function(p){return Object.assign({},p,{color:e.target.value});});},
                style:{flex:1,height:36,borderRadius:6,border:'none',cursor:'pointer',background:'none'}}),
            ]}),
            jsx('div',{style:{display:'flex',gap:4},children:
              [1,2,3,4,5].map(function(t){
                var tp2=TIER_PRESETS[t];
                return jsx('button',{key:t,style:S.tierBtn(editing.tier===t,tp2.color),
                  onClick:function(){setEditing(function(p){return Object.assign({},p,{tier:t});});},
                  title:tp2.label,children:'T'+t+' ('+tp2.requiredLevel+')'});
              })
            }),
            jsx('div',{style:{color:'rgba(255,255,255,0.3)',fontSize:10,marginTop:5},children:preset.label+'  ·  Уровень '+preset.requiredLevel}),
          ]}),
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'Описание и категория'}),
            jsx('input',{value:editing.category||'',maxLength:24,placeholder:'Категория (необязательно)...',
              style:Object.assign({},S.input,{marginBottom:8}),
              onChange:function(e){setEditing(function(p){return Object.assign({},p,{category:e.target.value});});},
            }),
            jsx('input',{value:editing.description||'',maxLength:80,placeholder:'Описание (необязательно)...',style:S.input,
              onChange:function(e){setEditing(function(p){return Object.assign({},p,{description:e.target.value});});},
            }),
          ]}),
        ]});

      case 1: /* Стволы */
        return jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:{display:'flex',gap:6,flexWrap:'wrap'},children:[
            jsx('button',{onClick:function(){var ni=editing.barrels.length;addBarrel(BARREL_PRESETS[0]);setActiveBarrelIdx(ni);},style:S.btn('rgba(0,100,60,0.7)'),children:'+ Добавить ствол'}),
            editing.barrels.length>0 && jsx('button',{onClick:function(){removeBarrel(activeBarrelIdx);setActiveBarrelIdx(Math.max(0,activeBarrelIdx-1));},style:S.btn('rgba(180,30,30,0.6)'),children:'🗑 Удалить'}),
            editing.barrels.length>0 && jsx('button',{onClick:function(){mirrorBarrel(activeBarrelIdx);},style:S.btn('rgba(60,80,140,0.7)'),children:'⇄ Зеркало'}),
            jsx('button',{
              onClick:function(){setAutoSymmetry(function(v){return !v;});},
              style:Object.assign({},S.btn(autoSymmetry?'rgba(255,160,0,0.75)':'rgba(60,60,80,0.7)'),{fontSize:10}),
              title:'Авто-симметрия: при добавлении ствола сразу добавляется зеркальная копия',
              children:(autoSymmetry?'🔁 Симм. ВКЛ':'🔁 Симм. ВЫКЛ'),
            }),
          ]}),
          editing.barrels.length > 0 ? jsxs('div',{children:[
            jsx('div',{
              style:{display:'flex',gap:8,overflowX:'auto',padding:'4px 0 8px',scrollSnapType:'x mandatory',WebkitOverflowScrolling:'touch',scrollbarWidth:'none',msOverflowStyle:'none'},
              children: editing.barrels.map(function(b,bi){
                var isActive=bi===activeBarrelIdx;
                return jsxs('button',{key:b.id||bi,onClick:function(){setActiveBarrelIdx(bi);},
                  style:{scrollSnapAlign:'center',flexShrink:0,width:isActive?'82%':'58%',padding:isActive?12:8,borderRadius:12,
                    border:isActive?'2px solid #00b2e1':'1.5px solid rgba(255,255,255,0.12)',
                    background:isActive?'rgba(0,80,160,0.5)':'rgba(255,255,255,0.04)',
                    cursor:'pointer',textAlign:'left',transition:'all 0.2s',touchAction:'manipulation',color:'#fff'},
                  children:[
                    jsxs('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:isActive?6:2},children:[
                      jsx('span',{style:{color:isActive?'#00ccff':'#fff',fontWeight:'bold',fontSize:12},children:'Ствол '+(bi+1)}),
                      jsx('span',{style:{color:'rgba(255,255,255,0.4)',fontSize:9},children:b.label||'Custom'}),
                    ]}),
                    isActive && jsx('div',{style:{height:Math.max(4,(b.width||14)*0.35),background:'#aaa',borderRadius:2,width:((b.length||48)/100*88)+'%',marginBottom:5}}),
                    jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:9,lineHeight:1.6},
                      children:isActive ? ('Длина: '+(b.length||48)+' · Ширина: '+(b.width||14)) : ((b.length||48)+'×'+(b.width||14))}),
                  ]},bi);
              })
            }),
            (function(){
              var activeB=editing.barrels[activeBarrelIdx];
              if(!activeB) return null;
              var bi=activeBarrelIdx;
              return jsxs('div',{style:{marginTop:4},children:[
                jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:10,marginBottom:5,fontWeight:'bold'},children:'Быстрые пресеты:'}),
                jsx('div',{style:S.presetGrid,children:
                  BARREL_PRESETS.map(function(p){
                    return jsx('button',{key:p.id,style:S.presetBtn,
                      onClick:function(){
                        setEditing(function(prev){
                          return Object.assign({},prev,{barrels:prev.barrels.map(function(b,i){
                            if(i!==bi) return b;
                            return Object.assign({},b,{label:p.label,length:p.length,width:p.width,reload:p.reload,bSize:p.bSize,bSpeed:p.bSpeed,bDmg:p.bDmg});
                          })});
                        });
                      },
                      children:p.label});
                  })
                }),
                [
                  ['angle','Угол',-3.14159,3.14159,0.05,function(v){return Math.round(v*180/Math.PI)+'°';}],
                  ['length','Длина',20,100,1,function(v){return v;}],
                  ['width','Ширина',5,36,1,function(v){return v;}],
                  ['lateral','Смещение',-30,30,1,function(v){return v;}],
                  ['reload','Перезарядка',0.2,5.0,0.05,function(v){return '×'+parseFloat(v).toFixed(2);}],
                  ['bSpeed','Скор.пули',0.3,4.0,0.05,function(v){return '×'+parseFloat(v).toFixed(2);}],
                  ['bDmg','Урон',0.2,5.0,0.05,function(v){return '×'+parseFloat(v).toFixed(2);}],
                  ['bSize','Размер пули',0.3,3.0,0.05,function(v){return '×'+parseFloat(v).toFixed(2);}],
                  ['penetration','Пробивание',1,5,1,function(v){return v+' цел.';}],
                  ['recoil','Отдача',0,3,0.1,function(v){return '×'+parseFloat(v).toFixed(1);}],
                ].map(function(row){
                  var key=row[0],label=row[1],mn=row[2],mx=row[3],step=row[4],fmt=row[5];
                  var val=activeB[key]!==undefined?activeB[key]:(key==='angle'?0:key==='lateral'?0:key==='penetration'?1:key==='recoil'?0:key.startsWith('b')?1.0:key==='reload'?1.0:key==='length'?48:14);
                  return jsxs('div',{key:key,style:S.sliderRow,children:[
                    jsx('div',{style:S.sliderLabel,children:label+': '+fmt(val)}),
                    jsx('input',{type:'range',min:mn,max:mx,step:step,value:val,
                      onChange:function(e){updateBarrel(bi,key,step%1!==0?parseFloat(e.target.value):parseInt(e.target.value));},
                      style:S.slider}),
                    jsx('div',{style:S.sliderVal,children:fmt(val)}),
                  ]});
                }),
                jsxs('div',{style:{marginTop:6},children:[
                  jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:10,marginBottom:5,fontWeight:'bold',letterSpacing:.5},children:'ТИП СНАРЯДА:'}),
                  jsx('div',{style:{display:'flex',flexWrap:'wrap',gap:5},children:
                    [['normal','🔵 Пуля'],['trap','🟡 Мина'],['grenade','💣 Граната'],['boomerang','🪃 Бумеранг'],['lightning','⚡ Молния']].map(function(p2){
                      var v2=p2[0],l2=p2[1],a2=(activeB.bulletType||'normal')===v2;
                      return jsx('button',{key:v2,
                        style:{padding:'5px 9px',borderRadius:6,border:a2?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.18)',background:a2?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',color:a2?'#fff':'rgba(255,255,255,0.5)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                        onClick:function(){updateBarrel(bi,'bulletType',v2);},children:l2});
                    })
                  }),
                ]}),
                jsxs('div',{style:{marginTop:8},children:[
                  jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:10,marginBottom:5,fontWeight:'bold',letterSpacing:.5},children:'🔢 ГРУППА СТРЕЛЬБЫ:'}),
                  jsx('div',{style:{display:'flex',gap:4},children:
                    [[0,'Все'],[1,'1'],[2,'2'],[3,'3'],[4,'4']].map(function(pair){
                      var gv=pair[0],gl=pair[1],ga=(activeB.fireGroup||0)===gv;
                      return jsx('button',{key:gv,
                        style:{flex:1,padding:'4px 2px',borderRadius:5,cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation',
                          border:ga?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.12)',
                          background:ga?'rgba(0,100,200,0.55)':'rgba(255,255,255,0.06)',
                          color:ga?'#fff':'rgba(255,255,255,0.45)'},
                        onClick:function(){updateBarrel(bi,'fireGroup',gv);},children:gl});
                    })
                  }),
                ]}),
                /* #1 Цепной ствол */
                jsxs('div',{style:{marginTop:8,display:'flex',alignItems:'center',gap:8},children:[
                  jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:10,fontWeight:'bold',letterSpacing:.5,flex:1},children:'🔗 ЦЕПНОЙ:'}),
                  jsx('button',{
                    onClick:function(){updateBarrel(bi,'chained',!activeB.chained);},
                    style:{padding:'4px 10px',borderRadius:6,border:activeB.chained?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.18)',background:activeB.chained?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',color:activeB.chained?'#fff':'rgba(255,255,255,0.4)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                    children:activeB.chained?'✔ Вкл':'Выкл'
                  }),
                  jsx('div',{style:{color:'rgba(255,255,255,0.25)',fontSize:9},children:'ждёт пред. ствол'}),
                ]}),
                /* #5 Рикошет */
                jsxs('div',{style:{marginTop:6},children:[
                  jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:10,marginBottom:4,fontWeight:'bold',letterSpacing:.5},children:'🪞 РИКОШЕТ:'}),
                  jsx('div',{style:{display:'flex',gap:4},children:
                    [[0,'0×'],[1,'1×'],[2,'2×'],[3,'3×']].map(function(pair){
                      var rv=pair[0],rl=pair[1],ra=(activeB.ricochet||0)===rv;
                      return jsx('button',{key:rv,
                        style:{flex:1,padding:'4px 2px',borderRadius:5,cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation',
                          border:ra?'1.5px solid #ffaa44':'1.5px solid rgba(255,255,255,0.12)',
                          background:ra?'rgba(200,100,0,0.45)':'rgba(255,255,255,0.06)',
                          color:ra?'#ffcc88':'rgba(255,255,255,0.45)'},
                        onClick:function(){updateBarrel(bi,'ricochet',rv);},children:rl});
                    })
                  }),
                ]}),
              ]});
            })(),
          ]}) :
          jsx('div',{style:{textAlign:'center',padding:'30px',color:'rgba(255,255,255,0.3)',fontSize:13},children:'Нет стволов — нажми «+ Добавить ствол»'}),
        ]});

      case 2: /* Статы */
        return jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'Характеристики'}),
            jsxs('div',{style:S.sliderRow,children:[
              jsx('div',{style:S.sliderLabel,children:'HP: '+hpEff+'%'}),
              jsx('input',{type:'range',min:0.4,max:2.0,step:0.05,value:editing.hpSlider,onChange:function(e){setEditing(function(p){return Object.assign({},p,{hpSlider:parseFloat(e.target.value)});});},style:S.slider}),
              jsx('div',{style:S.sliderVal,children:(editing.hpSlider*100).toFixed(0)+'%'}),
            ]}),
            jsxs('div',{style:S.sliderRow,children:[
              jsx('div',{style:S.sliderLabel,children:'Скорость: +'+spdPts+' очк.'}),
              jsx('input',{type:'range',min:0.5,max:2.0,step:0.05,value:editing.speedSlider,onChange:function(e){setEditing(function(p){return Object.assign({},p,{speedSlider:parseFloat(e.target.value)});});},style:S.slider}),
              jsx('div',{style:S.sliderVal,children:(editing.speedSlider*100).toFixed(0)+'%'}),
            ]}),
          ]}),
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'ТИП СНАРЯДА / СТИЛЬ'}),
            jsx('div',{style:{display:'flex',flexWrap:'wrap',gap:5,marginBottom:6},children:
              [['normal','🔵 Обычный'],['rocket','🚀 Ракета'],['laser','⚡ Лазер'],['drone','🤖 Дрон'],['homing','🎯 Наводящийся'],['splitting','💥 Дробовой'],['vampire','🧛 Вампиризм']].map(function(pair){
                var val=pair[0],lbl=pair[1],act=(editing.specialType||'normal')===val;
                return jsx('button',{key:val,
                  style:{padding:'6px 10px',borderRadius:8,border:act?'2px solid #00ccff':'2px solid rgba(255,255,255,0.15)',background:act?'rgba(0,100,200,0.55)':'rgba(255,255,255,0.05)',color:act?'#fff':'rgba(255,255,255,0.55)',cursor:'pointer',fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation'},
                  onClick:function(){setEditing(function(p){return Object.assign({},p,{specialType:val});});},children:lbl});
              })
            }),
            jsx('div',{style:{color:'rgba(255,255,255,0.25)',fontSize:10,marginTop:3,lineHeight:1.6},
              children:({normal:'Стандартные пули.',rocket:'Снаряды как ракеты.',laser:'Лазерные лучи.',drone:'Дроны к ближайшему врагу.',homing:'Самонаводящиеся снаряды.',splitting:'Снаряды разлетаются.',vampire:'Снаряды лечат.'})[editing.specialType||'normal']}),
          ]}),
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'🤖 Авто-режим'}),
            jsxs('div',{style:{display:'flex',gap:6,flexWrap:'wrap',marginBottom:6},children:[
              jsx('button',{
                style:{padding:'8px 12px',borderRadius:8,flex:1,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:11,touchAction:'manipulation',background:editing.autoGun?'rgba(255,140,0,0.7)':'rgba(255,255,255,0.07)',color:editing.autoGun?'#fff':'rgba(255,255,255,0.45)'},
                onClick:function(){setEditing(function(p){var next=Object.assign({},p,{autoGun:!p.autoGun,turretDeploy:p.autoGun?p.turretDeploy:false});pushHistory(next);return next;});},
                children:(editing.autoGun?'✔ ':'')+'⚡ Авто-стрельба'}),
              jsx('button',{
                style:{padding:'8px 12px',borderRadius:8,flex:1,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:11,touchAction:'manipulation',background:editing.turretDeploy?'rgba(0,160,255,0.7)':'rgba(255,255,255,0.07)',color:editing.turretDeploy?'#fff':'rgba(255,255,255,0.45)'},
                onClick:function(){setEditing(function(p){var next=Object.assign({},p,{turretDeploy:!p.turretDeploy,autoGun:p.turretDeploy?p.autoGun:false});pushHistory(next);return next;});},
                children:(editing.turretDeploy?'✔ ':'')+'🔫 Авто-турели'}),
            ]}),
            editing.turretDeploy && jsxs('div',{style:{marginTop:8,borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:8,display:'flex',flexDirection:'column',gap:5},children:[
              jsx('div',{style:{color:'rgba(0,180,255,0.7)',fontSize:10,fontWeight:'bold',letterSpacing:.5,marginBottom:3},children:'НАСТРОЙКИ АВТО-ТУРЕЛЕЙ:'}),
              [
                ['maxTurrets','Макс. турелей',1,8,1,function(v){return v;}],
                ['fireRate','Скор. огня',20,120,5,function(v){return v;}],
                ['health','HP турели',20,500,10,function(v){return v;}],
                ['damage','Урон',2,80,1,function(v){return v;}],
                ['speed','Скор. пули',3,20,0.5,function(v){return v;}],
                ['size','Размер пули',3,20,1,function(v){return v;}],
                ['detectionRadius','Радиус обнаружения',100,800,25,function(v){return v+'px';}],
              ].map(function(row){
                var k=row[0],lbl=row[1],mn=row[2],mx=row[3],step=row[4],fmt=row[5];
                var tc=editing.turretCfg||{};
                var defaults={'maxTurrets':3,'fireRate':55,'health':90,'damage':9,'speed':8.5,'size':7,'detectionRadius':300};
                var val=tc[k]!==undefined?tc[k]:defaults[k];
                return jsxs('div',{key:k,style:S.sliderRow,children:[
                  jsx('div',{style:S.sliderLabel,children:lbl+': '+fmt(val)}),
                  jsx('input',{type:'range',min:mn,max:mx,step:step,value:val,
                    onChange:function(e){var nv=step%1!==0?parseFloat(e.target.value):parseInt(e.target.value);setEditing(function(p){var tc2=Object.assign({},p.turretCfg||{});tc2[k]=nv;return Object.assign({},p,{turretCfg:tc2});});},
                    style:S.slider}),
                  jsx('div',{style:S.sliderVal,children:fmt(val)}),
                ]});
              }),
              /* Turret canvas preview */
              jsx('canvas',{
                width:140,height:140,
                style:{display:'block',margin:'6px auto 0',borderRadius:8,background:'rgba(0,0,0,0.25)',border:'1px solid rgba(255,255,255,0.1)'},
                ref:function(c){
                  if(!c) return;
                  var tc=editing.turretCfg||{};
                  var n=tc.maxTurrets||3;
                  var ctx=c.getContext('2d');
                  ctx.clearRect(0,0,140,140);
                  var cx=70,cy=70,r=28;
                  /* body */
                  ctx.fillStyle=(editing.color||'#22cc55')+'cc';
                  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.fill();
                  ctx.strokeStyle=editing.color||'#22cc55';ctx.lineWidth=2;ctx.stroke();
                  /* detection radius indicator */
                  var dr=tc.detectionRadius||300;
                  var drScale=Math.min(60,(dr/800)*60);
                  ctx.strokeStyle='rgba(0,200,255,0.15)';ctx.lineWidth=1;
                  ctx.beginPath();ctx.arc(cx,cy,r+drScale,0,Math.PI*2);ctx.stroke();
                  /* turrets */
                  for(var i=0;i<n;i++){
                    var a=(Math.PI*2/n)*i;
                    var tx=cx+Math.cos(a)*(r+12),ty=cy+Math.sin(a)*(r+12);
                    ctx.fillStyle='#aaaaee';
                    ctx.beginPath();ctx.arc(tx,ty,5,0,Math.PI*2);ctx.fill();
                    ctx.strokeStyle='#8888cc';ctx.lineWidth=1;ctx.stroke();
                    var ts=tc.size||7;var tl=Math.min(18,ts*2);
                    ctx.strokeStyle='#ccccff';ctx.lineWidth=Math.max(1,ts*0.3);
                    ctx.beginPath();ctx.moveTo(tx,ty);ctx.lineTo(tx+Math.cos(a)*tl,ty+Math.sin(a)*tl);ctx.stroke();
                  }
                },
              }),
              jsx('div',{style:{color:'rgba(255,255,255,0.3)',fontSize:9,textAlign:'center',marginTop:2},children:'Предпросмотр турелей'}),
            ]}),
          ]}),
        ]});

      case 3: /* Апгрейды */
        return jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'Родитель(и) в дереве прокачки'}),
            jsx('div',{style:{display:'flex',flexWrap:'wrap',gap:4,maxHeight:130,overflowY:'auto'},children:
              parentOptions.map(function(k){
                var label=(window.W1&&window.W1[k])?window.W1[k]:k;
                var froms=Array.isArray(editing.upgradesFrom)?editing.upgradesFrom:[editing.upgradesFrom||'Basic'];
                var isOn=froms.indexOf(k)>=0;
                return jsx('button',{key:k,
                  style:{padding:'5px 10px',borderRadius:6,cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation',flexShrink:0,
                    border:isOn?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.12)',
                    background:isOn?'rgba(0,100,200,0.55)':'rgba(255,255,255,0.05)',
                    color:isOn?'#fff':'rgba(255,255,255,0.45)'},
                  onClick:function(){setEditing(function(p){var arr=Array.isArray(p.upgradesFrom)?p.upgradesFrom.slice():[p.upgradesFrom||'Basic'];var i=arr.indexOf(k);if(i>=0){if(arr.length>1)arr.splice(i,1);}else arr.push(k);var next=Object.assign({},p,{upgradesFrom:arr});pushHistory(next);return next;});},
                  children:(isOn?'✔ ':'')+label});
              })
            }),
            jsx('div',{style:{color:'rgba(255,255,255,0.3)',fontSize:10,marginTop:5},children:'Можно выбрать несколько (минимум 1).'}),
          ]}),
          (function(){
            var myTanks=loadTanks().filter(function(t){return t.id!==editing.id;});
            if(myTanks.length===0) return null;
            var upgTo=editing.upgradesTo||[];
            return jsxs('div',{style:S.section,children:[
              jsx('div',{style:S.sectionTitle,children:'🌿 Куда прокачивается (кастомные)'}),
              jsx('div',{style:{display:'flex',flexWrap:'wrap',gap:5},children:
                myTanks.map(function(t){
                  var isOn=upgTo.indexOf(t.id)>=0;
                  return jsx('button',{key:t.id,
                    style:{padding:'5px 10px',borderRadius:7,border:isOn?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.15)',background:isOn?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',color:isOn?'#fff':'rgba(255,255,255,0.5)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                    onClick:function(){setEditing(function(p){var arr=(p.upgradesTo||[]).slice();var i=arr.indexOf(t.id);if(i>=0)arr.splice(i,1);else arr.push(t.id);var next=Object.assign({},p,{upgradesTo:arr});pushHistory(next);return next;});},
                    children:(isOn?'✔ ':'')+t.name});
                })
              }),
            ]});
          })(),
        ]});

      default: /* Готово */
        return jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          stats && jsxs('div',{style:Object.assign({},S.section,{background:'rgba(0,60,20,0.2)',borderColor:'rgba(0,200,100,0.2)'}),children:[
            jsxs('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:8},children:[
              jsx('div',{style:S.sectionTitle,children:'📊 Расчётная статистика'}),
              (function(){var r=computeBalanceRating(editing);return jsx('div',{style:{padding:'4px 9px',borderRadius:7,background:'rgba(0,0,0,0.3)',border:'1.5px solid '+r.color+'55',color:r.color,fontSize:10,fontWeight:'bold'},children:r.label});})(),
            ]}),
            jsx('div',{style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:5},children:[
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#ff8040',fontSize:14,fontWeight:900},children:stats.dps}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'DPS'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#40c0ff',fontSize:14,fontWeight:900},children:stats.range}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Дальность'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#80ff60',fontSize:14,fontWeight:900},children:stats.hp+'%'}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'HP'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#ffee40',fontSize:14,fontWeight:900},children:stats.speed+'%'}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Скорость'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#cc80ff',fontSize:14,fontWeight:900},children:stats.barrels}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Стволов'})]}),
              jsxs('div',{style:{background:'rgba(255,200,0,0.12)',borderRadius:7,padding:'6px 8px',textAlign:'center',border:'1px solid rgba(255,200,0,0.2)'},children:[jsx('div',{style:{color:'#ffdd00',fontSize:14,fontWeight:900},children:stats.firepower}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Мощь'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#88ffdd',fontSize:14,fontWeight:900},children:stats.avgPen}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Пробивание'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#ff88cc',fontSize:14,fontWeight:900},children:stats.effectiveRange}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Эфф.дальность'})]}),
              jsxs('div',{style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'},children:[jsx('div',{style:{color:'#ffaa44',fontSize:14,fontWeight:900},children:stats.reloadSec+'с'}),jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1},children:'Перезарядка'})]}),
            ]}),
          ]}),
          jsxs('div',{style:S.section,children:[
            jsx('div',{style:S.sectionTitle,children:'Сводка'}),
            jsxs('div',{style:{display:'flex',alignItems:'center',gap:10,marginBottom:8},children:[
              jsx('div',{style:{width:28,height:28,borderRadius:'50%',background:editing.color||'#22cc55',border:'2px solid rgba(255,255,255,0.2)',flexShrink:0}}),
              jsxs('div',{children:[
                jsx('div',{style:{color:'#fff',fontWeight:'bold',fontSize:14},children:editing.name||'(без имени)'}),
                jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:11},children:preset.label+' · '+editing.barrels.length+' ствол(а)'}),
              ]}),
            ]}),
            jsx('div',{style:{color:'rgba(255,255,255,0.3)',fontSize:11,lineHeight:1.6},children:editing.description||'Без описания.'}),
          ]}),
          /* #10 #11 #12 Кнопки ИИ-анализа */
          jsxs('div',{style:{display:'flex',gap:5,flexWrap:'wrap'},children:[
            jsx('button',{
              onClick:function(){ setShowSuggest(true); },
              style:{flex:1,padding:'9px',borderRadius:8,border:'1.5px solid rgba(100,200,100,0.4)',background:'rgba(0,80,0,0.5)',color:'#88ffaa',cursor:'pointer',fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation'},
              children:'🤖 Улучшить'},
            ),
            jsx('button',{
              onClick:function(){
                setEvolutionResult(null);
                setShowEvolution(true);
              },
              style:{flex:1,padding:'9px',borderRadius:8,border:'1.5px solid rgba(100,80,200,0.4)',background:'rgba(40,0,120,0.5)',color:'#cc99ff',cursor:'pointer',fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation'},
              children:'🧬 Эволюция'},
            ),
            jsx('button',{
              onClick:function(){
                var list=loadTanks().filter(function(t){return t.id!==editing.id;});
                if(list.length===0){alert('Нет сохранённых танков для сравнения.'); return;}
                setShowCounter(list[0]);
              },
              style:{flex:1,padding:'9px',borderRadius:8,border:'1.5px solid rgba(200,100,50,0.4)',background:'rgba(80,30,0,0.5)',color:'#ffcc88',cursor:'pointer',fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation'},
              children:'⚔ Контр'},
            ),
          ]}),
          jsx('button',{onClick:saveTank,style:S.saveBtn,children:'💾 Сохранить и добавить в игру'}),
          jsx('button',{onClick:saveAndExport,style:Object.assign({},S.saveBtn,{background:'linear-gradient(90deg,#007a40,#00b060)',marginTop:4}),children:'📤 Сохранить и получить код'}),
          jsx('div',{style:{height:10}}),
        ]});
    }
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER — WIZARD LAYOUT (canvas + bottom sheet drawer)
     ══════════════════════════════════════════════════════════════ */
  return jsxs('div', { style: S.root, children: [

    /* ── Canvas layer (always rendered — rAF loop needs a live canvas) ── */
    jsxs('div', { ref: canvasWrapRef, style:{position:'absolute',inset:0,background:'rgba(10,14,38,0.95)',cursor:viewLocked?'default':'grab',zIndex:1}, children:[
      jsx('canvas', { ref:canvasRef, width:400, height:600, style:{display:'block',width:'100%',height:'100%'} }),
      jsx('button', {
        onClick:function(){setPreviewing(function(p){return !p;});bulletsRef.current=[];},
        style:{position:'absolute',top:56,right:10,padding:'6px 12px',borderRadius:7,border:'none',background:previewing?'rgba(255,140,0,0.9)':'rgba(0,80,180,0.85)',color:'#fff',fontSize:11,fontWeight:'bold',cursor:'pointer',touchAction:'manipulation',zIndex:5},
        children:previewing?'⏹ Стоп':'▶ Стрельба',
      }),
      jsxs('div', {style:{position:'absolute',top:56,left:8,display:'flex',flexDirection:'column',gap:4,zIndex:5},children:[
        jsx('button',{onClick:function(){zoomBy(+0.2);},style:Object.assign({},S.viewBtn(false),{width:32,height:32,padding:0,display:'flex',alignItems:'center',justifyContent:'center'}),children:'+'}),
        jsx('div',{style:{color:'rgba(255,255,255,0.45)',fontSize:10,textAlign:'center',background:'rgba(0,0,0,0.55)',borderRadius:4,padding:'2px 0'},children:zoomPct+'%'}),
        jsx('button',{onClick:function(){zoomBy(-0.2);},style:Object.assign({},S.viewBtn(false),{width:32,height:32,padding:0,display:'flex',alignItems:'center',justifyContent:'center'}),children:'−'}),
        jsx('button',{onClick:resetView,style:Object.assign({},S.viewBtn(false),{width:32,height:32,padding:0,display:'flex',alignItems:'center',justifyContent:'center',marginTop:2}),children:'⌂'}),
      ]}),
    ]}),

    /* ── Top bar ── */
    jsxs('div', {style:{position:'absolute',top:0,left:0,right:0,zIndex:10,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'8px 10px',background:'rgba(0,0,0,0.85)',borderBottom:'1.5px solid rgba(68,136,255,0.3)'},children:[
      jsx('span',{style:{color:'#00b2e1',fontSize:14,fontWeight:900,letterSpacing:2},children:'КОНСТРУКТОР'}),
      jsxs('div',{style:{display:'flex',gap:4,alignItems:'center',flexWrap:'wrap'},children:[
        jsx('button',{onClick:function(){setTab('list');},style:S.btn('rgba(60,80,140,0.8)'),children:'📋 Танки'}),
        jsx('button',{onClick:function(){setTab('graph');},style:S.btn('rgba(40,80,40,0.8)'),children:'🌿 Граф'}),
        jsx('button',{onClick:openImport,style:S.btn('rgba(0,80,50,0.8)'),children:'📥'}),
        jsx('button',{
          onClick:function(){
            var rand=generateRandomTank();
            setEditing(function(p){var next=Object.assign({},p,rand,{id:p.id});pushHistory(next);return next;});
            bulletsRef.current=[];
            setTab('editor');
          },
          style:S.btn('rgba(80,60,0,0.8)'),
          title:'Случайный танк',
          children:'🎲',
        }),
        jsx('button',{
          onClick:function(){setShowHistory(function(v){return !v;});},
          style:Object.assign({},S.btn('rgba(60,40,100,0.8)'),{opacity:historyIdxRef&&historyIdxRef.current>=0?1:0.4}),
          title:'История изменений',
          children:'📜',
        }),
        jsx('button',{onClick:undo,disabled:!canUndoRef.current,style:Object.assign({},S.btn('rgba(80,60,120,0.7)'),{opacity:canUndoRef.current?1:0.35}),children:'↩'}),
        jsx('button',{onClick:redo,disabled:!canRedoRef.current,style:Object.assign({},S.btn('rgba(40,100,140,0.7)'),{opacity:canRedoRef.current?1:0.35}),children:'↪'}),
        jsx('button',{onClick:onClose,style:S.btn('rgba(180,30,30,0.6)'),children:'✕'}),
      ]}),
    ]}),

    /* ── List panel (full-screen overlay) ── */
    tab === 'list' && jsxs('div', {style:{position:'absolute',inset:0,top:48,background:'rgba(10,14,38,0.97)',overflowY:'auto',padding:14,zIndex:9},children:[
      jsxs('div', { style:{display:'flex',gap:6,alignItems:'center',marginBottom:7,flexWrap:'wrap'}, children:[
        jsx('div', { style:{color:'rgba(255,255,255,0.6)',fontSize:13,flex:1,minWidth:60}, children: tankList.length===0 ? 'Нет сохранённых танков' : tankList.length+' танк(ов)' }),
        jsx('button', { onClick: openImport, style: S.btn('rgba(0,100,60,0.8)'), children: '📥 Импорт' }),
        jsx('button', { onClick: startNew,   style: S.btn('rgba(0,140,60,0.7)'), children: '+ Создать' }),
      ]}),
      jsx('input', { value: searchQuery, onChange: function(e){ setSearchQuery(e.target.value); }, placeholder: '🔍 Поиск...', style: Object.assign({}, S.input, { marginBottom:8, fontSize:12 }) }),
      /* Tier filter + Sort */
      jsxs('div', { style:{display:'flex',gap:5,flexWrap:'wrap',marginBottom:8,alignItems:'center'}, children:[
        jsx('span', { style:{color:'rgba(255,255,255,0.35)',fontSize:10,fontWeight:'bold'}, children:'ТИР:' }),
        jsx('button', { onClick:function(){setTierFilter(null);}, style:{padding:'3px 8px',borderRadius:5,border:tierFilter===null?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.15)',background:tierFilter===null?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',color:tierFilter===null?'#fff':'rgba(255,255,255,0.5)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'}, children:'Все' }),
        [1,2,3,4,5].map(function(t){ var tp=TIER_PRESETS[t]; return jsx('button',{key:t,onClick:function(){setTierFilter(tierFilter===t?null:t);},style:{padding:'3px 7px',borderRadius:5,border:tierFilter===t?'1.5px solid '+tp.color:'1.5px solid rgba(255,255,255,0.15)',background:tierFilter===t?(tp.color+'44'):'rgba(255,255,255,0.05)',color:tierFilter===t?tp.color:'rgba(255,255,255,0.5)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},children:'T'+t}); }),
        jsx('span', { style:{color:'rgba(255,255,255,0.35)',fontSize:10,fontWeight:'bold',marginLeft:4}, children:'СОРТ:' }),
        [['date','Дата'],['dps','DPS'],['hp','HP']].map(function(pair){ var sv=pair[0],sl=pair[1]; return jsx('button',{key:sv,onClick:function(){setSortBy(sv);},style:{padding:'3px 8px',borderRadius:5,border:sortBy===sv?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.15)',background:sortBy===sv?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',color:sortBy===sv?'#fff':'rgba(255,255,255,0.5)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},children:sl}); }),
      ]}),
      tankList.length === 0 && jsxs('div', { style:{textAlign:'center',padding:'40px 20px',color:'rgba(255,255,255,0.25)',fontSize:13,lineHeight:2}, children:['У тебя ещё нет кастомных танков.',jsx('br',{}),'Нажми «+ Создать» чтобы начать.'] }),
      (function(){
        var displayList = filteredList.slice();
        if (tierFilter !== null) displayList = displayList.filter(function(d){ return d.tier === tierFilter; });
        if (sortBy === 'dps') displayList.sort(function(a,b){ var sa=computeStats(a),sb=computeStats(b); return ((sb&&sb.dps)||0)-((sa&&sa.dps)||0); });
        if (sortBy === 'hp') displayList.sort(function(a,b){ var sa=computeStats(a),sb=computeStats(b); return ((sb&&sb.hp)||0)-((sa&&sa.hp)||0); });
        if (displayList.length === 0 && tankList.length > 0) return jsx('div', { style:{textAlign:'center',padding:'30px 20px',color:'rgba(255,255,255,0.25)',fontSize:13}, children: 'Ничего не найдено' });
        /* Group by category after filter/sort */
        var cats = {}, catOrder = [];
        displayList.forEach(function(d){ var c=d.category||''; if(!cats[c]){cats[c]=[];catOrder.push(c);} cats[c].push(d); });
        return catOrder.reduce(function(acc, cat) {
          if (cat) acc.push(jsx('div', { key:'cat_'+cat, style:{color:'rgba(255,200,80,0.75)',fontSize:10,fontWeight:'bold',letterSpacing:1,textTransform:'uppercase',marginTop:8,marginBottom:5,borderLeft:'2px solid rgba(255,200,80,0.4)',paddingLeft:7}, children: '📁 ' + cat }));
          cats[cat].forEach(function(def) {
            var tp = TIER_PRESETS[def.tier] || TIER_PRESETS[3];
            var froms = Array.isArray(def.upgradesFrom) ? def.upgradesFrom : [def.upgradesFrom||'Basic'];
            var isFav = !!favorites[def.id];
            var ds = computeStats(def);
            acc.push(jsxs('div', { key:def.id, style:Object.assign({},S.listCard,{border:isFav?'1px solid rgba(255,200,0,0.35)':'1px solid rgba(255,255,255,0.1)'}), children:[
              jsx('div', { style: S.dot(def.color||tp.color) }),
              jsxs('div', { style:{flex:1,minWidth:0}, children:[
                jsxs('div', { style:{color:'#fff',fontWeight:'bold',fontSize:13,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}, children:[isFav?'⭐ ':'',def.name] }),
                jsxs('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:10,marginTop:2}, children:[tp.label,' · ',def.barrels?def.barrels.length:0,' ств.',ds?' · DPS '+ds.dps:''] }),
              ]}),
              jsxs('div', { style:{display:'flex',gap:4,flexShrink:0,flexWrap:'wrap',justifyContent:'flex-end'}, children:[
                jsx('button', { onClick:function(){ toggleFavorite(def.id); }, style:S.btn(isFav?'rgba(180,140,0,0.7)':'rgba(60,60,80,0.5)'), title:'Избранное', children:'⭐' }),
                jsx('button', { onClick:function(){
                  if (compareWith && compareWith.id !== def.id) { setCompareWith(def); }
                  else { setCompareWith(compareWith && compareWith.id === def.id ? null : def); }
                }, style:S.btn(compareWith&&compareWith.id===def.id?'rgba(0,160,200,0.8)':'rgba(60,80,120,0.6)'), title:'Сравнить', children:'⚖' }),
                jsx('button', { onClick:function(){ editExisting(def); setTab('editor'); }, style:S.btn(), title:'Редактировать', children:'✏' }),
                jsx('button', { onClick:function(){ cloneTank(def); }, style:S.btn('rgba(60,90,160,0.8)'), title:'Дублировать', children:'📋' }),
                jsx('button', { onClick:function(){ openExport(def); }, style:S.btn('rgba(0,100,60,0.8)'), title:'Экспортировать', children:'📤' }),
                jsx('button', { onClick:function(){ deleteTank(def.id); }, style:S.btn('rgba(180,30,30,0.7)'), title:'Удалить', children:'🗑' }),
              ]}),
            ]}));
          });
          return acc;
        }, []);
      })(),
    ]}),

    /* ── Graph panel (full-screen overlay) ── */
    tab === 'graph' && jsxs('div', {style:{position:'absolute',inset:0,top:48,background:'rgba(10,14,38,0.97)',overflowY:'auto',padding:'12px 14px',zIndex:9},children:[
      jsx('div', { style:{color:'rgba(255,255,255,0.55)',fontSize:11,marginBottom:10,lineHeight:1.6}, children:'🌿 Граф кастомных апгрейдов. Нажми на узел чтобы открыть танк в редакторе.' }),
      (function(){
        var allTanks = loadTanks();
        if (allTanks.length === 0) return jsx('div', { style:{textAlign:'center',padding:'40px',color:'rgba(255,255,255,0.22)',fontSize:13}, children:'Нет сохранённых танков. Создай хотя бы один.' });
        var tierGroups = {};
        allTanks.forEach(function(t) { var tr = t.tier || 3; if (!tierGroups[tr]) tierGroups[tr] = []; tierGroups[tr].push(t); });
        var nodeW = 110, nodeH = 40, hGap = 32, vGap = 14;
        var colX = {}; [1,2,3,4,5].forEach(function(tr,i){ colX[tr] = 8 + i*(nodeW+hGap); });
        var nodePos = {}; [1,2,3,4,5].forEach(function(tr){ (tierGroups[tr]||[]).forEach(function(t,i){ nodePos[t.id]={x:colX[tr],y:24+i*(nodeH+vGap)}; }); });
        var svgW = 8+5*(nodeW+hGap)-hGap+8;
        var maxCount=1; [1,2,3,4,5].forEach(function(tr){ var c=(tierGroups[tr]||[]).length; if(c>maxCount) maxCount=c; });
        var svgH = 24+maxCount*(nodeH+vGap)+8;
        var nodeIds={}; allTanks.forEach(function(t){ nodeIds[t.id]=true; });
        var edges=[],seen={};
        allTanks.forEach(function(t){
          var froms=Array.isArray(t.upgradesFrom)?t.upgradesFrom:[t.upgradesFrom||'Basic'];
          froms.forEach(function(p){ if(nodeIds[p]){var k=p+'→'+t.id;if(!seen[k]){seen[k]=1;edges.push({from:p,to:t.id});}} });
          (t.upgradesTo||[]).forEach(function(cid){ if(nodeIds[cid]){var k=t.id+'→'+cid;if(!seen[k]){seen[k]=1;edges.push({from:t.id,to:cid});}} });
        });
        return jsx('div',{style:{overflowX:'auto'},children:
          jsx('svg',{xmlns:'http://www.w3.org/2000/svg',width:svgW,height:svgH,style:{display:'block',minWidth:svgW},children:[
            jsx('g',{key:'hdr',children:[1,2,3,4,5].map(function(tr){ var tp=TIER_PRESETS[tr]; return jsx('text',{key:'h'+tr,x:colX[tr]+nodeW/2,y:14,textAnchor:'middle',fill:tp.color,fontSize:9,fontFamily:'Arial',fontWeight:'bold',children:'T'+tr+' ('+tp.requiredLevel+'ур)'}); })}),
            jsx('defs',{key:'defs',children:jsx('marker',{id:'_arw',markerWidth:6,markerHeight:6,refX:5,refY:3,orient:'auto',children:jsx('path',{d:'M0,0 L6,3 L0,6 Z',fill:'rgba(0,180,255,0.7)'})})}),
            jsx('g',{key:'edges',children:edges.map(function(e,i){ var fp=nodePos[e.from],tp2=nodePos[e.to]; if(!fp||!tp2) return null; var x1=fp.x+nodeW,y1=fp.y+nodeH/2,x2=tp2.x,y2=tp2.y+nodeH/2,mx=(x1+x2)/2; return jsx('path',{key:'e'+i,d:'M '+x1+' '+y1+' C '+mx+' '+y1+' '+mx+' '+y2+' '+x2+' '+y2,fill:'none',stroke:'rgba(0,180,255,0.4)',strokeWidth:1.5,markerEnd:'url(#_arw)'}); })}),
            jsx('g',{key:'nodes',children:allTanks.map(function(t){ var p=nodePos[t.id]; if(!p) return null; var tp=TIER_PRESETS[t.tier]||TIER_PRESETS[3],col=t.color||tp.color,label=t.name.length>13?t.name.slice(0,12)+'…':t.name,sub=(t.category?'📁'+t.category+' · ':'')+(t.barrels?t.barrels.length:0)+'б'; return jsxs('g',{key:t.id,style:{cursor:'pointer'},onClick:function(){editExisting(t);setTab('editor');},children:[jsx('rect',{x:p.x,y:p.y,width:nodeW,height:nodeH,rx:7,fill:col+'28',stroke:col,strokeWidth:1.5}),jsx('text',{x:p.x+nodeW/2,y:p.y+15,textAnchor:'middle',fill:'#fff',fontSize:10,fontFamily:'Arial',fontWeight:'bold',children:label}),jsx('text',{x:p.x+nodeW/2,y:p.y+29,textAnchor:'middle',fill:'rgba(255,255,255,0.38)',fontSize:8,fontFamily:'Arial',children:sub})]}); })})
          ]})
        });
      })(),
    ]}),

    /* ── Bottom sheet wizard drawer (only in editor tab) ── */
    tab === 'editor' && jsxs('div', {
      style:{position:'absolute',bottom:0,left:0,right:0,zIndex:8,
        height:drawerExpanded?'60%':'52px',
        transition:'height 0.28s cubic-bezier(0.4,0,0.2,1)',
        background:'rgba(10,14,38,0.96)',
        borderTop:'1.5px solid rgba(68,136,255,0.35)',
        borderRadius:'18px 18px 0 0',
        display:'flex',flexDirection:'column',
        boxShadow:'0 -8px 32px rgba(0,0,0,0.6)'},
      children:[
        /* Step tabs + progress bar */
        jsxs('div', {style:{flexShrink:0,position:'relative'},children:[
          jsx('div', {style:{display:'flex'},children:
            ['Основа','Стволы','Статы','Апгрейды','Готово'].map(function(s,i){
              var isActive=i===wizStep, isDone=i<wizStep;
              return jsx('button',{key:s,
                onClick:function(){setWizStep(i);if(!drawerExpanded)setDrawerExpanded(true);},
                style:{flex:1,padding:'10px 2px',border:'none',cursor:'pointer',fontFamily:'Arial',fontSize:9,fontWeight:'bold',
                  background:isActive?'rgba(0,90,180,0.7)':isDone?'rgba(0,50,100,0.4)':'transparent',
                  color:isActive?'#fff':isDone?'rgba(100,180,255,0.8)':'rgba(255,255,255,0.3)',
                  borderBottom:isActive?'2px solid #00b2e1':isDone?'2px solid rgba(68,136,255,0.4)':'2px solid transparent',
                  touchAction:'manipulation'},
                children:[(isDone?'✓ ':'')+s]},i);
            })
          }),
          jsx('div',{style:{height:2,background:'rgba(255,255,255,0.06)'},children:
            jsx('div',{style:{height:'100%',width:((wizStep+1)/5*100)+'%',background:'linear-gradient(90deg,#0088cc,#00d4ff)',transition:'width 0.3s ease'}})
          }),
          jsx('button', {
            onClick:function(){setDrawerExpanded(function(v){return !v;});},
            style:{position:'absolute',top:6,right:8,padding:'2px 8px',borderRadius:5,border:'none',cursor:'pointer',background:'rgba(255,255,255,0.1)',color:'rgba(255,255,255,0.6)',fontSize:13,touchAction:'manipulation'},
            children: drawerExpanded?'▼':'▲',
          }),
        ]}),
        /* Scrollable step content */
        jsx('div',{style:{flex:1,overflowY:'auto',padding:'12px 14px',display:drawerExpanded?'block':'none'},
          children: renderWizardStep()
        }),
        /* Navigation footer */
        drawerExpanded && jsxs('div',{style:{flexShrink:0,padding:'8px 14px',borderTop:'1px solid rgba(255,255,255,0.08)',display:'flex',gap:8},children:[
          wizStep>0 && jsx('button',{onClick:function(){setWizStep(function(s){return s-1;});},style:Object.assign({},S.btn('rgba(60,60,100,0.7)'),{flex:1,padding:'10px'}),children:'← Назад'}),
          wizStep<4
            ? jsx('button',{onClick:function(){setWizStep(function(s){return s+1;});},style:Object.assign({},S.btn('rgba(0,100,200,0.8)'),{flex:2,padding:'10px',fontWeight:'bold',fontSize:14}),children:'Далее →'})
            : jsx('button',{onClick:saveTank,style:Object.assign({},S.saveBtn,{flex:2,padding:'10px'}),children:'💾 Сохранить в игру'}),
        ]}),
      ],
    }),

    /* ══ ИСТОРИЯ UNDO ══ */
    showHistory && jsxs('div', { style:Object.assign({},S.modalOverlay,{zIndex:3100,alignItems:'flex-end'}), onClick:function(){setShowHistory(false);}, children:[
      jsxs('div', { style:Object.assign({},S.modalBox,{maxHeight:'70vh',width:'100%',maxWidth:'100%',borderRadius:'16px 16px 0 0',margin:0}), onClick:function(e){e.stopPropagation();}, children:[
        jsxs('div', { style:{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:4}, children:[
          jsx('div', { style:S.modalTitle, children:'📜 История изменений' }),
          jsx('button', { onClick:function(){setShowHistory(false);}, style:S.btn('rgba(100,30,30,0.5)'), children:'✕' }),
        ]}),
        jsx('div', { style:{color:'rgba(255,255,255,0.35)',fontSize:10,marginBottom:10}, children:'Нажми «↩» чтобы откатиться. Новое действие очищает будущее.' }),
        (function(){
          var hist = historyRef ? historyRef.current : [];
          if (!hist || hist.length === 0) return jsx('div',{style:{textAlign:'center',padding:'20px',color:'rgba(255,255,255,0.25)',fontSize:12},children:'История пуста — начни редактировать танк.'});
          return jsx('div',{style:{display:'flex',flexDirection:'column',gap:5},children:
            hist.slice().reverse().map(function(h,ri){
              var i=hist.length-1-ri;
              var isHead=historyIdxRef&&historyIdxRef.current===i;
              return jsxs('div',{key:i,style:{display:'flex',alignItems:'center',gap:8,padding:'7px 10px',borderRadius:8,background:isHead?'rgba(0,100,200,0.3)':'rgba(255,255,255,0.04)',border:isHead?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.08)'},children:[
                jsx('div',{style:{flex:1},children:[
                  jsx('div',{style:{color:isHead?'#00ccff':'rgba(255,255,255,0.7)',fontSize:11,fontWeight:'bold'},children:(isHead?'▶ ':'')+'Шаг '+(i+1)+': '+(h.name||'(без имени)')}),
                  jsx('div',{style:{color:'rgba(255,255,255,0.35)',fontSize:9,marginTop:1},children:(h.barrels?h.barrels.length:0)+' ствол(а) · T'+(h.tier||3)}),
                ]}),
                !isHead && jsx('button',{
                  onClick:function(){
                    /* jump to this history step */
                    if(historyIdxRef) historyIdxRef.current=i;
                    setEditing(Object.assign({},h));
                    bulletsRef.current=[];
                    setShowHistory(false);
                  },
                  style:{padding:'4px 8px',borderRadius:6,border:'none',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',background:'rgba(60,80,140,0.7)',color:'#aaddff',touchAction:'manipulation'},
                  children:'↩ Вернуть'
                }),
              ]});
            })
          });
        })(),
      ]})
    ]),

    /* ══ СРАВНЕНИЕ ТАНКОВ ══ */
    compareWith && jsx('div', { style:Object.assign({},S.modalOverlay,{zIndex:3100}), onClick:function(){setCompareWith(null);}, children:
      jsx('div', { style:Object.assign({},S.modalBox,{maxWidth:520}), onClick:function(e){e.stopPropagation();}, children:
        jsxs('div', { style:{display:'flex',flexDirection:'column',gap:12}, children:[
          jsxs('div', { style:{display:'flex',alignItems:'center',justifyContent:'space-between'}, children:[
            jsx('div', { style:S.modalTitle, children:'⚖ Сравнение танков' }),
            jsx('button', { onClick:function(){setCompareWith(null);}, style:S.btn('rgba(100,30,30,0.5)'), children:'✕' }),
          ]}),
          jsx('div', { style:{color:'rgba(255,255,255,0.35)',fontSize:10}, children:'Текущий редактируемый (слева) vs. выбранный (справа).' }),
          (function(){
            var a = editing, b = compareWith;
            var sa = computeStats(a), sb = computeStats(b);
            var ra = computeBalanceRating(a), rb = computeBalanceRating(b);
            var rows = [
              ['DPS',          sa?sa.dps:'—',         sb?sb.dps:'—',         '#ff8040'],
              ['Дальность',   sa?sa.range:'—',        sb?sb.range:'—',       '#40c0ff'],
              ['HP%',          sa?sa.hp+'%':'—',       sb?sb.hp+'%':'—',      '#80ff60'],
              ['Скорость%',   sa?sa.speed+'%':'—',    sb?sb.speed+'%':'—',   '#ffee40'],
              ['Стволов',     sa?sa.barrels:'—',      sb?sb.barrels:'—',     '#cc80ff'],
              ['Мощь',         sa?sa.firepower:'—',    sb?sb.firepower:'—',   '#ffdd00'],
              ['Пробивание',  sa?sa.avgPen:'—',       sb?sb.avgPen:'—',      '#88ffdd'],
              ['Перезарядка', sa?sa.reloadSec+'с':'—',sb?sb.reloadSec+'с':'—','#ffaa44'],
            ];
            return jsxs('div',{children:[
              /* Заголовки */
              jsxs('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:4,marginBottom:6},children:[
                jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:10,fontWeight:'bold'},children:'Стат'}),
                jsxs('div',{style:{textAlign:'center'},children:[
                  jsx('div',{style:{width:12,height:12,borderRadius:'50%',background:a.color||'#22cc55',display:'inline-block',marginRight:4,verticalAlign:'middle'}}),
                  jsx('span',{style:{color:'#fff',fontSize:11,fontWeight:'bold'},children:(a.name||'Текущий').slice(0,10)}),
                ]}),
                jsxs('div',{style:{textAlign:'center'},children:[
                  jsx('div',{style:{width:12,height:12,borderRadius:'50%',background:b.color||'#4488cc',display:'inline-block',marginRight:4,verticalAlign:'middle'}}),
                  jsx('span',{style:{color:'#aaddff',fontSize:11,fontWeight:'bold'},children:(b.name||'Выбранный').slice(0,10)}),
                ]}),
              ]}),
              rows.map(function(row){
                var label=row[0],va=row[1],vb=row[2],col=row[3];
                var na=parseFloat(va),nb=parseFloat(vb);
                var aWins=!isNaN(na)&&!isNaN(nb)&&na>nb,bWins=!isNaN(na)&&!isNaN(nb)&&nb>na;
                return jsxs('div',{key:label,style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:4,padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.06)'},children:[
                  jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:10},children:label}),
                  jsx('div',{style:{textAlign:'center',color:aWins?col:'rgba(255,255,255,0.7)',fontSize:12,fontWeight:aWins?900:'normal'},children:(aWins?'▲ ':'')+va}),
                  jsx('div',{style:{textAlign:'center',color:bWins?col:'rgba(255,255,255,0.45)',fontSize:12,fontWeight:bWins?900:'normal'},children:(bWins?'▲ ':'')+vb}),
                ]});
              }),
              /* Баланс */
              jsxs('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:4,marginTop:8},children:[
                jsx('div',{style:{color:'rgba(255,255,255,0.4)',fontSize:10,fontWeight:'bold'},children:'Оценка'}),
                jsx('div',{style:{textAlign:'center',color:ra.color,fontSize:11,fontWeight:'bold'},children:ra.label}),
                jsx('div',{style:{textAlign:'center',color:rb.color,fontSize:11,fontWeight:'bold'},children:rb.label}),
              ]}),
            ]});
          })(),
          jsx('button',{onClick:function(){setCompareWith(null);},style:Object.assign({},S.exportBtn('rgba(60,60,80,0.8)'),{width:'100%'}),children:'Закрыть'}),
        ]})
      })
    ),

    /* ══ #10 УЛУЧШИ МОЙ ТАНК ══ */
    showSuggest && jsx('div',{style:S.modalOverlay,onClick:function(){setShowSuggest(false);},children:
      jsx('div',{style:Object.assign({},S.modalBox,{maxWidth:480}),onClick:function(e){e.stopPropagation();},children:
        jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'},children:[
            jsx('div',{style:S.modalTitle,children:'🤖 Предложения по улучшению'}),
            jsx('button',{onClick:function(){setShowSuggest(false);},style:S.btn('rgba(100,30,30,0.5)'),children:'✕'}),
          ]}),
          jsx('div',{style:{color:'rgba(255,255,255,0.3)',fontSize:10,marginBottom:4},children:'Анализ текущего танка по правилам баланса.'}),
          jsx('div',{style:{display:'flex',flexDirection:'column',gap:6},children:
            suggestImprovements(editing).map(function(tip,i){
              return jsxs('div',{key:i,style:{padding:'10px 12px',borderRadius:10,background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'},children:[
                jsxs('div',{style:{display:'flex',alignItems:'center',gap:6,marginBottom:4},children:[
                  jsx('span',{style:{fontSize:16},children:tip.icon}),
                  jsx('div',{style:{color:'#fff',fontSize:12,fontWeight:'bold'},children:tip.title}),
                ]}),
                jsx('div',{style:{color:'rgba(255,255,255,0.5)',fontSize:11,lineHeight:1.5},children:tip.text}),
              ]});
            })
          }),
          jsx('button',{onClick:function(){setShowSuggest(false);},style:Object.assign({},S.exportBtn('rgba(60,60,80,0.8)'),{width:'100%',marginTop:4}),children:'Закрыть'}),
        ]})
      })
    ),

    /* ══ #11 ЭВОЛЮЦИЯ ══ */
    showEvolution && jsx('div',{style:S.modalOverlay,onClick:function(){if(!evolutionRunning)setShowEvolution(false);},children:
      jsx('div',{style:Object.assign({},S.modalBox,{maxWidth:420}),onClick:function(e){e.stopPropagation();},children:
        jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'},children:[
            jsx('div',{style:S.modalTitle,children:'🧬 Эволюция танка'}),
            !evolutionRunning && jsx('button',{onClick:function(){setShowEvolution(false);},style:S.btn('rgba(100,30,30,0.5)'),children:'✕'}),
          ]}),
          jsx('div',{style:{color:'rgba(255,255,255,0.35)',fontSize:10},children:'20 поколений случайных мутаций. Выживает лучший DPS+HP.'}),
          !evolutionRunning && !evolutionResult && jsx('button',{
            onClick:function(){
              setEvolutionRunning(true);
              setTimeout(function(){
                var best = editing;
                var bestScore = scoreForEvolution(editing);
                for(var g=0;g<20;g++){
                  var candidate = evolveOnce(best);
                  var s = scoreForEvolution(candidate);
                  if(s > bestScore){ best = candidate; bestScore = s; }
                }
                var orig = scoreForEvolution(editing);
                var gain = bestScore - orig;
                setEvolutionResult({ tank: best, score: parseFloat(bestScore.toFixed(2)), gain: parseFloat(gain.toFixed(2)) });
                setEvolutionRunning(false);
              }, 400);
            },
            style:Object.assign({},S.saveBtn,{background:'linear-gradient(90deg,#4400aa,#8833ff)'}),
            children:'▶ Запустить эволюцию (20 поколений)'
          }),
          evolutionRunning && jsxs('div',{style:{textAlign:'center',padding:'20px',color:'#cc99ff'},children:[
            jsx('div',{style:{fontSize:28,marginBottom:8},children:'🧬'}),
            jsx('div',{style:{fontSize:13,fontWeight:'bold'},children:'Идёт эволюция...'}),
          ]}),
          evolutionResult && jsxs('div',{style:{display:'flex',flexDirection:'column',gap:8},children:[
            jsxs('div',{style:{padding:'12px',borderRadius:10,background:'rgba(80,0,120,0.3)',border:'1px solid rgba(150,50,255,0.3)'},children:[
              jsx('div',{style:{color:'#cc99ff',fontSize:11,fontWeight:'bold',marginBottom:6},children:'Лучший результат после эволюции:'}),
              jsxs('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:4},children:[
                jsxs('div',{style:{color:'rgba(255,255,255,0.5)',fontSize:10},children:['Оценка: ',jsx('span',{style:{color:'#ffdd00',fontWeight:'bold'},children:evolutionResult.score})]}),
                jsxs('div',{style:{color:'rgba(255,255,255,0.5)',fontSize:10},children:['Прирост: ',jsx('span',{style:{color:evolutionResult.gain>0?'#88ff88':'#ff8888',fontWeight:'bold'},children:(evolutionResult.gain>0?'+':'')+evolutionResult.gain})]}),
                jsx('div',{style:{color:'rgba(255,255,255,0.5)',fontSize:10},children:'Стволов: '+((evolutionResult.tank.barrels||[]).length)}),
                jsx('div',{style:{color:'rgba(255,255,255,0.5)',fontSize:10},children:'DPS: '+parseFloat((evolutionResult.tank.barrels||[]).reduce(function(s,b){return s+(b.bDmg||1)/(b.reload||1);},0).toFixed(1))}),
              ]}),
            ]}),
            jsxs('div',{style:{display:'flex',gap:6},children:[
              jsx('button',{
                onClick:function(){
                  var t=evolutionResult.tank;
                  setEditing(Object.assign({},t,{id:editing.id,name:editing.name||t.name}));
                  pushHistory(t);
                  bulletsRef.current=[];
                  setShowEvolution(false);
                  setEvolutionResult(null);
                },
                style:Object.assign({},S.saveBtn,{flex:2,margin:0,background:'linear-gradient(90deg,#4400aa,#8833ff)'}),
                children:'✅ Применить лучшего'
              }),
              jsx('button',{
                onClick:function(){ setEvolutionResult(null); },
                style:Object.assign({},S.exportBtn('rgba(60,60,80,0.8)'),{flex:1}),
                children:'↻ Заново'
              }),
            ]}),
          ]}),
          !evolutionRunning && jsx('button',{onClick:function(){setShowEvolution(false);setEvolutionResult(null);},style:Object.assign({},S.exportBtn('rgba(40,40,60,0.8)'),{width:'100%'}),children:'Закрыть'}),
        ]})
      })
    ),

    /* ══ #12 КОНТР-БИЛД ══ */
    showCounter && jsx('div',{style:S.modalOverlay,onClick:function(){setShowCounter(null);},children:
      jsx('div',{style:Object.assign({},S.modalBox,{maxWidth:460}),onClick:function(e){e.stopPropagation();},children:
        jsxs('div',{style:{display:'flex',flexDirection:'column',gap:10},children:[
          jsxs('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between'},children:[
            jsx('div',{style:S.modalTitle,children:'⚔ Контр-билд'}),
            jsx('button',{onClick:function(){setShowCounter(null);},style:S.btn('rgba(100,30,30,0.5)'),children:'✕'}),
          ]}),
          jsx('div',{style:{color:'rgba(255,255,255,0.35)',fontSize:10},children:'Выбери противника из сохранённых танков:'}),
          (function(){
            var list=loadTanks().filter(function(t){return t.id!==editing.id;});
            if(list.length===0) return jsx('div',{style:{textAlign:'center',padding:12,color:'rgba(255,255,255,0.25)',fontSize:12},children:'Нет сохранённых танков-противников.'});
            return jsx('div',{style:{display:'flex',gap:5,flexWrap:'wrap',marginBottom:4},children:
              list.slice(0,8).map(function(t){
                var isSelected=showCounter&&showCounter.id===t.id;
                return jsx('button',{key:t.id,
                  onClick:function(){setShowCounter(t);},
                  style:{padding:'5px 10px',borderRadius:7,border:isSelected?'1.5px solid #ff8844':'1.5px solid rgba(255,255,255,0.15)',background:isSelected?'rgba(150,50,0,0.5)':'rgba(255,255,255,0.05)',color:isSelected?'#ffcc88':'rgba(255,255,255,0.5)',cursor:'pointer',fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                  children:(t.tier?'T'+t.tier+' ':'')+t.name.slice(0,10)
                });
              })
            );
          })(),
          showCounter && showCounter.id && (function(){
            var c = computeCounterBuild(showCounter);
            return jsxs('div',{style:{display:'flex',flexDirection:'column',gap:6},children:[
              jsxs('div',{style:{padding:'10px 12px',borderRadius:10,background:'rgba(40,20,0,0.4)',border:'1px solid rgba(255,140,40,0.25)'},children:[
                jsx('div',{style:{color:'#ffaa44',fontSize:11,fontWeight:'bold',marginBottom:6},children:'Анализ противника: '+(showCounter.name||'?')+' (T'+(showCounter.tier||3)+')'}),
                c.tips.map(function(tip,i){
                  return jsxs('div',{key:i,style:{color:'rgba(255,255,255,0.6)',fontSize:11,lineHeight:1.5,marginBottom:3},children:['• ',tip]});
                }),
              ]}),
              jsxs('div',{style:{padding:'10px 12px',borderRadius:10,background:'rgba(0,60,40,0.3)',border:'1px solid rgba(40,200,100,0.2)'},children:[
                jsx('div',{style:{color:'#88ffaa',fontSize:11,fontWeight:'bold',marginBottom:4},children:'Рекомендуемый контр-шаблон: '+c.templateName}),
                jsx('button',{
                  onClick:function(){
                    applyTemplate(c.template);
                    setShowCounter(null);
                  },
                  style:Object.assign({},S.saveBtn,{margin:0,padding:'8px',background:'linear-gradient(90deg,#006030,#00aa55)'}),
                  children:'⚡ Применить шаблон «'+c.templateName+'»'
                }),
              ]}),
            ]});
          })(),
          jsx('button',{onClick:function(){setShowCounter(null);},style:Object.assign({},S.exportBtn('rgba(40,40,60,0.8)'),{width:'100%'}),children:'Закрыть'}),
        ]})
      })
    ),

    /* ══ МОДАЛ УДАЛЕНИЯ ══ */
    deletePending && jsx('div', { style: S.modalOverlay, onClick: function(){ setDeletePending(null); }, children:
      jsx('div', { style: Object.assign({}, S.modalBox, {maxWidth:340,gap:12}), onClick: function(e){ e.stopPropagation(); }, children:
        jsxs('div', { style:{display:'flex',flexDirection:'column',gap:14}, children:[
          jsx('div', { style:{color:'#ff6060',fontSize:15,fontWeight:900}, children:'🗑 Удалить танк?' }),
          jsx('div', { style:{color:'rgba(255,255,255,0.6)',fontSize:13,lineHeight:1.6}, children:'Этот танк будет удалён из коллекции и дерева прокачки. Необратимо.' }),
          jsxs('div', { style:{display:'flex',gap:8}, children:[
            jsx('button', { onClick: function(){ confirmDelete(deletePending); }, style:{flex:1,padding:'11px',borderRadius:9,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:13,background:'rgba(200,30,30,0.85)',color:'#fff',touchAction:'manipulation'}, children:'🗑 Удалить' }),
            jsx('button', { onClick: function(){ setDeletePending(null); }, style:{flex:1,padding:'11px',borderRadius:9,border:'none',cursor:'pointer',fontFamily:'Arial',fontWeight:'bold',fontSize:13,background:'rgba(60,60,80,0.8)',color:'rgba(255,255,255,0.7)',touchAction:'manipulation'}, children:'Отмена' }),
          ]}),
        ]})
      })
    }),

    /* ══ МОДАЛ ЭКСПОРТА / ИМПОРТА ══ */
    modal && jsx('div', { style: S.modalOverlay, onClick: closeModal, children:
      jsx('div', { style: S.modalBox, onClick: function(e){ e.stopPropagation(); }, children:
        modal.type === 'export' ? jsxs('div', { style:{display:'flex',flexDirection:'column',gap:12}, children:[
          jsxs('div', { style:{display:'flex',alignItems:'center',justifyContent:'space-between'}, children:[
            jsxs('div', { children:[
              jsx('div', { style: S.modalTitle, children: '📤 Код танка' }),
              jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:10,marginTop:3}, children: '"' + modal.defName + '"' }),
            ]}),
            jsx('button', { onClick: closeModal, style: S.btn('rgba(100,30,30,0.5)'), children: '✕' }),
          ]}),
          jsx('textarea', { readOnly: true, value: modal.code, style: S.modalCode, onFocus: function(e){ e.target.select(); } }),
          jsx('div', { style: S.modalHint, children: 'Скопируй этот код и отправь другому игроку. Он сможет вставить его через «📥 Импорт» и сразу получить твой танк в свой редактор.' }),
          jsxs('div', { style: S.modalBtnRow, children:[
            jsx('button', { onClick: function(){ doCopy(modal.code); }, style: S.exportBtn(copied ? 'rgba(0,160,80,0.9)' : 'rgba(0,100,60,0.8)'), children: copied ? '✔ Скопировано!' : '📋 Скопировать код' }),
            jsx('button', { onClick: function(){ if (navigator.share) { navigator.share({ title: 'Diep Tank: ' + modal.defName, text: modal.code }).catch(function(){}); } else { doCopy(modal.code); } }, style: S.exportBtn('rgba(0,80,180,0.8)'), children: '🔗 Поделиться' }),
            jsx('button', { onClick: closeModal, style: S.exportBtn('rgba(60,60,80,0.8)'), children: 'Закрыть' }),
          ]}),
        ]}) :
        jsxs('div', { style:{display:'flex',flexDirection:'column',gap:12}, children:[
          jsxs('div', { style:{display:'flex',alignItems:'center',justifyContent:'space-between'}, children:[
            jsx('div', { style: S.modalTitle, children: '📥 Импорт танка' }),
            jsx('button', { onClick: closeModal, style: S.btn('rgba(100,30,30,0.5)'), children: '✕' }),
          ]}),
          jsx('textarea', { value: importCode, placeholder: 'Вставь сюда код танка (начинается с DIEPTANK1_...)', style: S.modalImportArea, onChange: function(e){ setImportCode(e.target.value); setImportErr(''); }, spellCheck: false, autoCorrect: 'off', autoCapitalize: 'none' }),
          importErr && jsx('div', { style: S.modalErr, children: '⚠ ' + importErr }),
          jsx('div', { style: S.modalHint, children: 'Танк загрузится в редактор для просмотра и настройки. Нажми «💾 Сохранить» чтобы добавить его в игру.' }),
          jsxs('div', { style: S.modalBtnRow, children:[
            jsx('button', { onClick: doImport, style: S.exportBtn(importCode.trim() ? 'rgba(0,100,200,0.85)' : 'rgba(40,40,60,0.7)'), children: '✔ Загрузить в редактор' }),
            jsx('button', { onClick: closeModal, style: S.exportBtn('rgba(60,60,80,0.8)'), children: 'Отмена' }),
          ]}),
        ]})
      })
    }),

  ]}); /* root */
}

/* ═══════════════════════════════════════════════════════════════
   ИНТЕГРАЦИЯ В ГЛАВНОЕ МЕНЮ
   ═══════════════════════════════════════════════════════════════ */
function mountBuilderButton() {
  var React = window.cl || window.React;
  var ReactDOM = window.U1 || window.ReactDOM;
  if (!React || !ReactDOM) { setTimeout(mountBuilderButton, 300); return; }

  if (document.getElementById('_tank_builder_root')) return;
  var container = document.createElement('div');
  container.id = '_tank_builder_root';
  container.style.cssText = 'position:fixed;inset:0;z-index:1999;pointer-events:none;';
  document.body.appendChild(container);

  function BuilderRoot() {
    var useState  = React.useState;
    var useEffect = React.useEffect;
    var useRef    = React.useRef;

    /* ── state (Rules of Hooks: все хуки до любых return) ── */
    var _o  = useState(false); var open     = _o[0];  var setOpen     = _o[1];
    var _pm = useState(false); var pinModal = _pm[0]; var setPinModal = _pm[1];
    var _pc = useState('');    var pinCode  = _pc[0]; var setPinCode  = _pc[1];
    var _pe = useState(false); var pinErr   = _pe[0]; var setPinErr   = _pe[1];

    var tapsRef      = useRef([]);   /* метки времени последних тапов */
    var unlockedRef  = useRef(false);/* разблокирован в этой сессии */

    /* внешний вызов window._openTankBuilder сохраняем, но ничего не показываем в UI */
    useEffect(function() {
      window._openTankBuilder = function(){
        if (unlockedRef.current) { setOpen(true); }
        else { setPinCode(''); setPinErr(false); setPinModal(true); }
      };
      return function(){ window._openTankBuilder = null; };
    }, [setOpen]);

    /* ── обработчик тапа по невидимой зоне ── */
    function handleZoneTap() {
      if (window._gamePhase && window._gamePhase !== 'menu') return; /* только на главном меню */
      var now = Date.now();
      tapsRef.current.push(now);
      tapsRef.current = tapsRef.current.filter(function(t){ return now - t < 10000; });
      if (tapsRef.current.length >= 5) {
        tapsRef.current = [];
        if (unlockedRef.current) {
          /* уже разблокировано — просто открыть */
          setOpen(true);
        } else {
          setPinCode('');
          setPinErr(false);
          setPinModal(true);
        }
      }
    }

    /* ── проверка кода ── */
    function handlePinSubmit() {
      if (pinCode === '2009') {
        unlockedRef.current = true;
        window._builderUnlocked = true;
        try { window.dispatchEvent(new Event('builderUnlocked')); } catch(e){}
        setPinModal(false);
        setPinCode('');
        setOpen(true);
      } else {
        setPinErr(true);
        setPinCode('');
      }
    }

    /* ── jsx доступен только здесь (после хуков) ── */
    if (!window.D || !window.D.jsx) return null;
    var jsx  = window.D.jsx;
    var jsxs = window.D.jsxs;

    /* ── рендер ── */
    return jsxs('div', { style:{position:'fixed',inset:0,zIndex:1999,pointerEvents:'none'}, children:[

      /* Невидимая зона в левом нижнем углу — никаких визуальных подсказок */
      jsx('div', {
        style:{position:'fixed',bottom:0,left:0,width:80,height:80,
          zIndex:2100,pointerEvents:'auto'},
        onClick: handleZoneTap,
      }),

      /* ── PIN-модал ── */
      pinModal && jsx('div', {
        style:{position:'fixed',inset:0,zIndex:2200,pointerEvents:'auto',
          display:'flex',alignItems:'center',justifyContent:'center',
          background:'rgba(0,0,0,0.6)'},
        onClick: function(e){
          if (e.target === e.currentTarget){ setPinModal(false); setPinCode(''); setPinErr(false); }
        },
        children: jsxs('div', {
          style:{background:'#0e1228',border:'1.5px solid rgba(68,136,255,0.3)',
            borderRadius:16,padding:'28px 22px',width:240,
            display:'flex',flexDirection:'column',alignItems:'center',gap:14,
            boxShadow:'0 16px 60px rgba(0,0,0,0.95)',fontFamily:'Arial'},
          children:[

            jsx('div', { style:{color:'rgba(255,255,255,0.88)',fontSize:14,fontWeight:'bold',
              letterSpacing:.3}, children:'Введите код доступа' }),

            jsx('input', {
              type:'password',
              inputMode:'numeric',
              value: pinCode,
              autoFocus: true,
              maxLength: 10,
              placeholder:'••••',
              onChange: function(e){ setPinCode(e.target.value); setPinErr(false); },
              onKeyDown: function(e){ if (e.key === 'Enter') handlePinSubmit(); },
              style:{width:'100%',padding:'11px 14px',borderRadius:9,outline:'none',
                border: pinErr ? '1.5px solid #ff5555' : '1.5px solid rgba(68,136,255,0.35)',
                background:'rgba(255,255,255,0.06)',color:'#fff',fontSize:20,
                textAlign:'center',letterSpacing:8,boxSizing:'border-box'},
            }),

            pinErr && jsx('div', { style:{color:'#ff6060',fontSize:12,marginTop:-6},
              children:'Неверный код' }),

            jsxs('div', { style:{display:'flex',gap:8,width:'100%'}, children:[
              jsx('button', {
                onClick: handlePinSubmit,
                style:{flex:1,padding:'10px',borderRadius:9,border:'none',
                  cursor:'pointer',fontWeight:'bold',fontSize:13,fontFamily:'Arial',
                  background:'rgba(0,100,200,0.85)',color:'#fff',touchAction:'manipulation'},
                children:'Войти',
              }),
              jsx('button', {
                onClick: function(){ setPinModal(false); setPinCode(''); setPinErr(false); },
                style:{padding:'10px 14px',borderRadius:9,border:'none',cursor:'pointer',
                  fontWeight:'bold',fontSize:13,fontFamily:'Arial',
                  background:'rgba(60,60,80,0.8)',color:'rgba(255,255,255,0.55)',
                  touchAction:'manipulation'},
                children:'✕',
              }),
            ]}),

          ]
        })
      }),

      /* ── Конструктор ── */
      open && jsx('div', { style:{pointerEvents:'auto'},
        children: React.createElement(TankBuilder, { onClose: function(){ setOpen(false); } })
      }),

    ]});
  }

  ReactDOM.createRoot(container).render(React.createElement(BuilderRoot));
}

if (document.readyState === 'complete') {
  setTimeout(mountBuilderButton, 400);
} else {
  window.addEventListener('load', function(){ setTimeout(mountBuilderButton, 400); });
}

})();
