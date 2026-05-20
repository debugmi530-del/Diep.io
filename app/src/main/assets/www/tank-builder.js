;(function() {
'use strict';

var STORAGE_KEY = 'diep_custom_tanks';

var TIER_PRESETS = {
  1: { label:'T1 — Базовый',    color:'#44aaff', requiredLevel:1,  hp:1.0,  speed:1.0,  radiusMultiplier:1.0  },
  2: { label:'T2 — Продвинутый',color:'#e0e0e0', requiredLevel:5,  hp:1.25, speed:1.05, radiusMultiplier:1.1  },
  3: { label:'T3 — Элитный',    color:'#22cc55', requiredLevel:15, hp:1.55, speed:1.1,  radiusMultiplier:1.2  },
  4: { label:'T4 — Мастер',     color:'#ffdd00', requiredLevel:30, hp:1.9,  speed:1.15, radiusMultiplier:1.32 },
  5: { label:'T5 — Легенда',    color:'#ff8800', requiredLevel:45, hp:2.4,  speed:1.2,  radiusMultiplier:1.45 },
};

var BARREL_PRESETS = [
  { id:'std',    label:'Стандартный', length:48, width:14, reload:1.0,  bSize:1.0,  bSpeed:1.0,  bDmg:1.0 },
  { id:'long',   label:'Длинный',     length:72, width:10, reload:2.2,  bSize:0.75, bSpeed:2.1,  bDmg:1.8 },
  { id:'wide',   label:'Широкий',     length:36, width:22, reload:1.0,  bSize:1.5,  bSpeed:0.85, bDmg:1.4 },
  { id:'heavy',  label:'Тяжёлый',     length:52, width:20, reload:1.5,  bSize:1.3,  bSpeed:0.9,  bDmg:2.0 },
  { id:'mini',   label:'Мини',        length:30, width:9,  reload:0.55, bSize:0.65, bSpeed:1.2,  bDmg:0.6 },
  { id:'cannon', label:'Пушка',       length:56, width:28, reload:2.8,  bSize:2.2,  bSpeed:0.95, bDmg:3.5 },
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
  /* Берём только игровые поля, убираем UI-служебные */
  var clean = {
    name:         def.name,
    tier:         def.tier,
    color:        def.color,
    upgradesFrom: def.upgradesFrom,
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
        angle:   b.angle,
        length:  b.length,
        width:   b.width,
        lateral: b.lateral,
        reload:  b.reload,
        bSpeed:  b.bSpeed,
        bDmg:    b.bDmg,
        bSize:   b.bSize,
        label:   b.label,
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
  if (typeof def.upgradesFrom !== 'string' || !def.upgradesFrom.trim()) def.upgradesFrom = 'Basic';
  def.upgradesFrom = def.upgradesFrom.trim().slice(0, 32);
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
      id:         Date.now() + i,
      label:      b.label  || 'Custom',
      angle:      isFinite(b.angle)  ? b.angle  : 0,
      length:     Math.min(100, Math.max(20,  parseInt(b.length) || 48)),
      width:      Math.min(36,  Math.max(5,   parseInt(b.width)  || 14)),
      lateral:    Math.min(30,  Math.max(-30, parseInt(b.lateral)|| 0)),
      reload:     Math.min(5,   Math.max(0.2, parseFloat(b.reload) || 1)),
      bSpeed:     Math.min(4,   Math.max(0.3, parseFloat(b.bSpeed) || 1)),
      bDmg:       Math.min(5,   Math.max(0.2, parseFloat(b.bDmg)   || 1)),
      bSize:      Math.min(3,   Math.max(0.3, parseFloat(b.bSize)  || 1)),
      bulletType: ['normal','trap'].indexOf(b.bulletType) >= 0 ? b.bulletType : 'normal',
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
      isTrap: b.bulletType === 'trap',
    };
  });
  if (barrels.length === 0) {
    barrels = [{ angleOffset:0,length:48,width:14,reloadMultiplier:1.0,
                 bulletSizeMultiplier:1.0,bulletSpeedMultiplier:1.0,bulletDamageMultiplier:1.0,lateralOffset:0 }];
  }

  var _spt = def.specialType || 'normal';
  window._t[id] = {
    name: def.name,
    requiredLevel: preset.requiredLevel,
    upgradesFrom: def.upgradesFrom ? [def.upgradesFrom] : ['Basic'],
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
  var parent = def.upgradesFrom || 'Basic';
  /* Удаляем все старые рёбра, ведущие К этому танку (e[1]===id).
     Иначе при смене родителя танк висел бы как апгрейд сразу двух родителей. */
  window.Ty = window.Ty.filter(function(e){ return e[1] !== id; });
  window.Ty.push([parent, id]);
  /* Custom upgrade tree — tank can upgrade TO other custom tanks */
  if (Array.isArray(def.upgradesTo)) {
    def.upgradesTo.forEach(function(childId) {
      if (childId && childId !== id) {
        window.Ty = window.Ty.filter(function(e){ return !(e[0]===id && e[1]===childId); });
        window.Ty.push([id, childId]);
      }
    });
  }
}

function registerAllCustomTanks() {
  loadTanks().forEach(function(def) { registerTank(def); });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(registerAllCustomTanks, 600);
} else {
  window.addEventListener('DOMContentLoaded', function(){ setTimeout(registerAllCustomTanks, 600); });
}

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
      upgradesFrom: 'Basic',
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

  var canvasRef      = useRef(null);
  var canvasWrapRef  = useRef(null);
  var animRef        = useRef(null);
  var bulletsRef     = useRef([]);
  /* Состояние drag/pinch */
  var dragRef     = useRef({ active: false, lastX: 0, lastY: 0 });
  var pinchRef    = useRef({ active: false, lastDist: 0 });

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
      editing.barrels.forEach(function(b) {
        var ang = b.angle  || 0;
        var len = (b.length || 48) * zoom * 0.55;
        var wid = (b.width  || 14) * zoom * 0.55;
        var lat = (b.lateral|| 0)  * zoom * 0.55;
        ctx.save();
        /* Lateral: перпендикулярно направлению ствола (исправленный расчёт) */
        ctx.translate(cx - Math.sin(ang)*lat, cy + Math.cos(ang)*lat);
        ctx.rotate(ang);
        /* Ствол вдоль +X, чтобы совпадало с направлением пули cos(ang)/sin(ang) */
        ctx.fillStyle   = '#aaaaaa';
        ctx.strokeStyle = '#888888';
        ctx.lineWidth   = 1.5;
        ctx.beginPath();
        ctx.rect(radius*0.55, -wid/2, len, wid);
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

      /* Превью пуль */
      if (previewing) {
        var now = ts || 0;
        /* Спавн строго раз в цикл — без искажений при любом reload */
        if (!bulletsRef.current._cyc) bulletsRef.current._cyc = {};
        editing.barrels.forEach(function(b, bi) {
          var period = Math.round(600 * (b.reload || 1));
          var cycIdx = Math.floor((now + bi * 200) / period);
          if (cycIdx !== bulletsRef.current._cyc[bi]) {
            bulletsRef.current._cyc[bi] = cycIdx;
            var ang = b.angle || 0;
            var lat = (b.lateral || 0) * zoom * 0.55;
            var bLen = (b.length || 48) * zoom * 0.55;
            /* Позиция — дальний конец ствола */
            var bsx = (cx - Math.sin(ang)*lat) + Math.cos(ang) * (radius*0.55 + bLen);
            var bsy = (cy + Math.cos(ang)*lat) + Math.sin(ang) * (radius*0.55 + bLen);
            var bSpd = (b.bSpeed || 1.0) * 3.5 * zoom;
            bulletsRef.current.push({
              x: bsx, y: bsy,
              vx: Math.cos(ang)*bSpd, vy: Math.sin(ang)*bSpd,
              r: (b.bSize||1.0) * 5 * zoom,
              isTrap: b.bulletType === 'trap',
              life: 80, maxLife: 80,
            });
          }
        });
        bulletsRef.current = bulletsRef.current.filter(function(blt){ return blt.life > 0; });
        bulletsRef.current.forEach(function(blt) {
          blt.x += blt.vx; blt.y += blt.vy; blt.life--;
          var alpha = blt.life / blt.maxLife;
          if (blt.isTrap) {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.fillStyle = '#e8a000'; ctx.strokeStyle = '#000'; ctx.lineWidth = 1;
            ctx.beginPath();
            for (var _ti=0;_ti<8;_ti++){ var _ta=_ti*Math.PI/4; _ti===0?ctx.moveTo(blt.x+Math.cos(_ta)*blt.r,blt.y+Math.sin(_ta)*blt.r):ctx.lineTo(blt.x+Math.cos(_ta)*blt.r,blt.y+Math.sin(_ta)*blt.r); }
            ctx.closePath(); ctx.fill(); ctx.stroke();
            ctx.restore();
          } else {
            ctx.beginPath();
            ctx.arc(blt.x, blt.y, blt.r, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(255,220,80,' + alpha + ')';
            ctx.fill();
          }
        });
      } else {
        bulletsRef.current = [];
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
      var next = Object.assign({}, prev, { barrels: prev.barrels.concat([Object.assign({}, p, { angle:0, lateral:0, id:Date.now(), bulletType: p.bulletType||'normal' })]) });
      pushHistory(next);
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
    setTab('list');
    alert('Танк "' + def.name + '" сохранён и добавлен в дерево прокачки!');
  }
  function deleteTank(id) {
    setDeletePending(id);
  }
  function confirmDelete(id) {
    saveTanks(loadTanks().filter(function(t){ return t.id !== id; }));
    if (window._t) delete window._t[id];
    if (window.w0) window.w0 = window.w0.filter(function(n){ return n.name !== id; });
    if (window.Ty) window.Ty = window.Ty.filter(function(e){ return e[0]!==id && e[1]!==id; });
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
  var spdEff = Math.round(preset.speed * editing.speedSlider * 100);
  var zoomPct = Math.round((viewRef.current.zoom || 1) * 100);

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
    /* DPS: за условную единицу времени, reload 1.0 = 1 выстрел в сек */
    var dps = 0;
    var maxRange = 0;
    barrels.forEach(function(b) {
      var dmg    = (b.bDmg  || 1.0);
      var reload = (b.reload || 1.0);
      var speed  = (b.bSpeed || 1.0);
      /* life ~80 ticks @ 60fps ≈ 1.33s, scaled by speed */
      var range  = speed * 2.5 * 80;
      if (range > maxRange) maxRange = range;
      dps += dmg / reload;
    });
    var tier   = ed.tier || 3;
    var preset = TIER_PRESETS[tier] || TIER_PRESETS[3];
    var hpMult = preset.hp * (ed.hpSlider || 1);
    var spMult = preset.speed * (ed.speedSlider || 1);
    /* Firepower = DPS * range (normalized) */
    var firepower = Math.round(dps * (maxRange / 200) * 10);
    return {
      dps:       parseFloat(dps.toFixed(2)),
      range:     Math.round(maxRange),
      hp:        Math.round(hpMult * 100),
      speed:     Math.round(spMult * 100),
      firepower: firepower,
      barrels:   barrels.length,
    };
  }
  var stats = computeStats(editing);

  /* ══════════════════════════════════════════════════════════════
     RENDER
     ══════════════════════════════════════════════════════════════ */
  return jsxs('div', { style: S.root, children: [

    /* HEADER */
    jsxs('div', { style: S.header, children: [
      jsxs('div', { style:{display:'flex',alignItems:'center',gap:10}, children:[
        jsx('span', { style: S.title, children: 'КОНСТРУКТОР ТАНКА' }),
        jsx('span', { style:{fontSize:10,color:'rgba(255,255,255,0.3)',marginTop:2}, children:'Beta' }),
      ]}),
      jsxs('div', { style:{display:'flex',gap:6,alignItems:'center'}, children:[
        jsx('button', {
          onClick: undo,
          disabled: !canUndoRef.current,
          title: 'Отменить (Ctrl+Z)',
          style: Object.assign({}, S.btn('rgba(80,60,120,0.7)'), { opacity: canUndoRef.current ? 1 : 0.35 }),
          children: '↩ Отмена',
        }),
        jsx('button', {
          onClick: redo,
          disabled: !canRedoRef.current,
          title: 'Вернуть (Ctrl+Y)',
          style: Object.assign({}, S.btn('rgba(40,100,140,0.7)'), { opacity: canRedoRef.current ? 1 : 0.35 }),
          children: '↪ Возврат',
        }),
        jsx('button', { onClick: onClose, style: S.btn('rgba(180,30,30,0.6)'), children: '✕ Закрыть' }),
      ]}),
    ]}),

    /* TABS */
    jsxs('div', { style: S.tabs, children: [
      jsx('button', { style: S.tab(tab==='editor'), onClick: function(){ setTab('editor'); },
        children: tab==='editor' && !selectedDef ? '✏ Новый танк' : '✏ Редактор' }),
      jsxs('button', { style: S.tab(tab==='list'), onClick: function(){ setTab('list'); },
        children: ['📋 Мои танки', tankList.length > 0 ? ' (' + tankList.length + ')' : ''] }),
    ]}),

    /* BODY — список и редактор всегда в DOM; скрываем CSS чтобы рефы на canvas
       не становились null при переключении вкладок. Иначе rAF-цикл продолжает
       рисовать на отмонтированный canvas и новый canvas остаётся пустым. */
    jsxs('div', { style: S.body, children:[

      /* ── LIST TAB ───────────────────────────────────────────── */
      jsxs('div', { style:Object.assign({flex:1,overflowY:'auto',padding:14}, tab!=='list'?{display:'none'}:{}), children:[
        /* Шапка: счётчик + импорт + создать */
        jsxs('div', { style:{display:'flex',gap:6,alignItems:'center',marginBottom:14,flexWrap:'wrap'}, children:[
          jsx('div', { style:{color:'rgba(255,255,255,0.6)',fontSize:13,flex:1,minWidth:60},
            children: tankList.length===0 ? 'Нет сохранённых танков' : tankList.length+' танк(ов)' }),
          jsx('button', { onClick: openImport, style: S.btn('rgba(0,100,60,0.8)'), children: '📥 Импорт' }),
          jsx('button', { onClick: startNew,   style: S.btn('rgba(0,140,60,0.7)'), children: '+ Создать' }),
        ]}),

        /* Пустой список */
        tankList.length === 0 && jsxs('div', { style:{textAlign:'center',padding:'40px 20px',color:'rgba(255,255,255,0.25)',fontSize:13,lineHeight:2}, children:[
          'У тебя ещё нет кастомных танков.',jsx('br',{}),
          'Нажми «+ Создать» чтобы начать,',jsx('br',{}),
          'или «📥 Импорт» чтобы загрузить чужой код.',
        ]}),

        /* Карточки танков */
        tankList.map(function(def) {
          var tp = TIER_PRESETS[def.tier] || TIER_PRESETS[3];
          return jsxs('div', { key:def.id, style:S.listCard, children:[
            jsx('div', { style: S.dot(def.color||tp.color) }),
            jsxs('div', { style:{flex:1,minWidth:0}, children:[
              jsx('div', { style:{color:'#fff',fontWeight:'bold',fontSize:13,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}, children: def.name }),
              jsxs('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:11,marginTop:2}, children:[tp.label,' · ',def.barrels?def.barrels.length:0,' стволов · ',def.upgradesFrom||'Basic'] }),
            ]}),
            jsxs('div', { style:{display:'flex',gap:5,flexShrink:0}, children:[
              jsx('button', { onClick:function(){ editExisting(def); },      style:S.btn(),                          title:'Редактировать', children:'✏' }),
              jsx('button', { onClick:function(){ openExport(def); },         style:S.btn('rgba(0,100,60,0.8)'),     title:'Экспортировать код', children:'📤' }),
              jsx('button', { onClick:function(){ deleteTank(def.id); },      style:S.btn('rgba(180,30,30,0.7)'),    title:'Удалить', children:'🗑' }),
            ]}),
          ]});
        }),
      ]}),

      /* ── EDITOR TAB ─────────────────────────────────────────── */
      jsxs('div', { style: Object.assign({}, S.body, tab!=='editor'?{display:'none'}:{}), children: [

        /* ════ Левая колонка — холст с навигацией ════ */
        jsxs('div', { style: S.leftCol, children: [

          /* Холст — занимает всё свободное пространство */
          jsxs('div', { ref: canvasWrapRef, style: S.canvasWrap, children: [
            jsx('canvas', {
              ref: canvasRef,
              width: 260,
              height: 320,
              style: S.canvas,
            }),

            /* Подсказка управления (левый верх) */
            jsx('div', { style:{
              position:'absolute',top:6,left:7,pointerEvents:'none',
              color:'rgba(255,255,255,0.22)',fontSize:9,lineHeight:1.7,fontFamily:'Arial',
            }, children: viewLocked ? '🔒 Вид заблокирован' : '🖱 тащи · 🤏 щуп · ⬆ колесо' }),

            /* Кнопка превью стрельбы (правый верх) */
            jsx('button', {
              onClick: function(){ setPreviewing(function(p){ return !p; }); bulletsRef.current = []; },
              style:{
                position:'absolute',top:6,right:6,padding:'4px 9px',borderRadius:6,border:'none',
                background: previewing ? 'rgba(255,140,0,0.85)' : 'rgba(0,80,180,0.8)',
                color:'#fff',fontSize:10,fontWeight:'bold',cursor:'pointer',touchAction:'manipulation',
              },
              children: previewing ? '⏹ Стоп' : '▶ Стрельба',
            }),
          ]}),

          /* ── ПАНЕЛЬ УПРАВЛЕНИЯ ВИДОМ ── */
          jsxs('div', { style: S.viewBar, children: [

            /* Блокировка вида */
            jsx('button', {
              onClick: function(){ setViewLocked(function(l){ return !l; }); },
              style: S.viewBtn(viewLocked, 'rgba(220,120,0,0.8)'),
              title: viewLocked ? 'Разблокировать вид' : 'Заблокировать вид',
              children: viewLocked ? '🔒' : '🔓',
            }),

            /* Разделитель */
            jsx('div', { style:{width:1,height:18,background:'rgba(255,255,255,0.12)',flexShrink:0} }),

            /* Zoom out */
            jsx('button', {
              onClick: function(){ zoomBy(-0.2); },
              style: S.viewBtn(false),
              title: 'Уменьшить',
              children: '−',
            }),

            /* Zoom % */
            jsx('div', { style: S.viewZoomLabel, children: zoomPct + '%' }),

            /* Zoom in */
            jsx('button', {
              onClick: function(){ zoomBy(+0.2); },
              style: S.viewBtn(false),
              title: 'Увеличить',
              children: '+',
            }),

            /* Разделитель */
            jsx('div', { style:{width:1,height:18,background:'rgba(255,255,255,0.12)',flexShrink:0} }),

            /* Сброс вида */
            jsx('button', {
              onClick: resetView,
              style: S.viewBtn(false, 'rgba(0,100,200,0.7)'),
              title: 'Сбросить вид (центр, 100%)',
              children: '⌂',
            }),

            /* Spacer */
            jsx('div', { style:{flex:1} }),

            /* Статы мини */
            jsx('div', { style:{fontSize:9,color:'rgba(255,255,255,0.3)',lineHeight:1.7,textAlign:'right'}, children:
              stats ? ('DPS ' + stats.dps + '  R×' + editing.barrels.length) : ('B×' + editing.barrels.length)
            }),
          ]}),

          /* ── Нижний блок левой колонки: цвет + превью стрельбы ── */
          jsxs('div', { style: S.leftBottom, children: [
            /* Цвет */
            jsxs('div', { style:{display:'flex',alignItems:'center',gap:8}, children:[
              jsx('div', { style:{color:'rgba(255,255,255,0.45)',fontSize:10,whiteSpace:'nowrap'}, children:'ЦВЕТ:' }),
              jsx('input', { type:'color', value: editing.color||'#22cc55',
                onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{color:e.target.value}); }); },
                style:{flex:1,height:30,borderRadius:6,border:'none',cursor:'pointer',background:'none'}
              }),
            ]}),
          ]}),

        ]}),

        /* ════ Правая колонка — настройки ════ */
        jsxs('div', { style: S.rightCol, children: [

          /* ── Шаблоны-стартовые точки ───────────────────────────── */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: '📦 Шаблоны (стартовая точка)' }),
            jsx('div', { style:{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:4}, children:
              TANK_TEMPLATES.map(function(tpl) {
                return jsx('button', { key:tpl._tpl, title: tpl.name + ' — ' + tpl.description,
                  style:{padding:'6px 2px',borderRadius:7,border:'1.5px solid rgba(68,136,255,0.25)',
                    background:'rgba(0,40,100,0.4)',color:'#aaddff',cursor:'pointer',
                    fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation',
                    display:'flex',flexDirection:'column',alignItems:'center',gap:1},
                  onClick: function(){ applyTemplate(tpl); },
                  children: [tpl.icon, jsx('span',{style:{fontSize:8,opacity:0.7},children:tpl.name.split(' ')[0]})] });
              })
            }),
            jsx('div', { style:{color:'rgba(255,255,255,0.25)',fontSize:10,marginTop:4},
              children:'Нажми иконку — загрузит пресет в редактор. Имя и настройки можно изменить.' }),
          ]}),

          /* ── Расчётная статистика ──────────────────────────────── */
          stats && jsxs('div', { style: Object.assign({}, S.section, {background:'rgba(0,60,20,0.2)',borderColor:'rgba(0,200,100,0.2)'}), children: [
            jsx('div', { style: S.sectionTitle, children: '📊 Расчётная статистика' }),
            jsx('div', { style:{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:5}, children:[
              jsxs('div', { style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'}, children:[
                jsx('div', { style:{color:'#ff8040',fontSize:14,fontWeight:900}, children: stats.dps }),
                jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1}, children:'DPS' }),
              ]}),
              jsxs('div', { style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'}, children:[
                jsx('div', { style:{color:'#40c0ff',fontSize:14,fontWeight:900}, children: stats.range }),
                jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1}, children:'Дальность' }),
              ]}),
              jsxs('div', { style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'}, children:[
                jsx('div', { style:{color:'#80ff60',fontSize:14,fontWeight:900}, children: stats.hp+'%' }),
                jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1}, children:'HP' }),
              ]}),
              jsxs('div', { style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'}, children:[
                jsx('div', { style:{color:'#ffee40',fontSize:14,fontWeight:900}, children: stats.speed+'%' }),
                jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1}, children:'Скорость' }),
              ]}),
              jsxs('div', { style:{background:'rgba(255,255,255,0.05)',borderRadius:7,padding:'6px 8px',textAlign:'center'}, children:[
                jsx('div', { style:{color:'#cc80ff',fontSize:14,fontWeight:900}, children: stats.barrels }),
                jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1}, children:'Стволов' }),
              ]}),
              jsxs('div', { style:{background:'rgba(255,200,0,0.12)',borderRadius:7,padding:'6px 8px',textAlign:'center',border:'1px solid rgba(255,200,0,0.2)'}, children:[
                jsx('div', { style:{color:'#ffdd00',fontSize:14,fontWeight:900}, children: stats.firepower }),
                jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:9,marginTop:1}, children:'Мощь' }),
              ]}),
            ]}),
          ]}),

          /* Имя */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Имя танка' }),
            jsx('input', { value:editing.name, maxLength:18, placeholder:'Название...', style:S.input,
              onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{name:e.target.value}); }); },
            }),
          ]}),

          /* Тир */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Тир' }),
            jsx('div', { style:{display:'flex',gap:4}, children:
              [1,2,3,4,5].map(function(t){
                var tp2 = TIER_PRESETS[t];
                return jsx('button', { key:t, style: S.tierBtn(editing.tier===t, tp2.color),
                  onClick: function(){ setEditing(function(p){ return Object.assign({},p,{tier:t}); }); },
                  children: 'T'+t });
              })
            }),
            jsx('div', { style:{color:'rgba(255,255,255,0.3)',fontSize:10,marginTop:5},
              children: preset.label + '  ·  Уровень ' + preset.requiredLevel }),
          ]}),

          /* Родитель */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Родитель в дереве прокачки' }),
            jsx('select', {
              value: editing.upgradesFrom||'Basic',
              onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{upgradesFrom:e.target.value}); }); },
              style: Object.assign({}, S.input, {appearance:'none'}),
              children: parentOptions.map(function(k){
                var label = (window.W1&&window.W1[k]) ? window.W1[k]+' ('+k+')' : k;
                return jsx('option', { key:k, value:k, children:label });
              }),
            }),
            jsx('div', { style:{color:'rgba(255,255,255,0.3)',fontSize:10,marginTop:4},
              children:'Танк появится как вариант апгрейда из выбранного родителя' }),
          ]}),

          /* HP / Скорость */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Характеристики' }),
            jsxs('div', { style: S.sliderRow, children:[
              jsx('div', { style:S.sliderLabel, children:'HP: '+hpEff+'%' }),
              jsx('input', { type:'range',min:0.4,max:2.0,step:0.05,value:editing.hpSlider,
                onChange:function(e){ setEditing(function(p){ return Object.assign({},p,{hpSlider:parseFloat(e.target.value)}); }); },
                style:S.slider }),
              jsx('div', { style:S.sliderVal, children:(editing.hpSlider*100).toFixed(0)+'%' }),
            ]}),
            jsxs('div', { style: S.sliderRow, children:[
              jsx('div', { style:S.sliderLabel, children:'Скорость: '+spdEff+'%' }),
              jsx('input', { type:'range',min:0.5,max:2.0,step:0.05,value:editing.speedSlider,
                onChange:function(e){ setEditing(function(p){ return Object.assign({},p,{speedSlider:parseFloat(e.target.value)}); }); },
                style:S.slider }),
              jsx('div', { style:S.sliderVal, children:(editing.speedSlider*100).toFixed(0)+'%' }),
            ]}),
          ]}),

          /* Стволы */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style:S.sectionTitle, children:'СТВОЛЫ ('+editing.barrels.length+')' }),
            jsx('div', { style: S.presetGrid, children:
              BARREL_PRESETS.map(function(p){
                return jsx('button', { key:p.id, style:S.presetBtn, onClick:function(){ addBarrel(p); },
                  children:'+ '+p.label });
              })
            }),
            editing.barrels.length === 0 && jsx('div', { style:{color:'rgba(255,255,255,0.25)',fontSize:11,textAlign:'center',padding:'10px 0'},
              children:'Нажми на пресет выше чтобы добавить ствол' }),
            editing.barrels.map(function(b, bi) {
              return jsxs('div', { key: b.id||bi, style: S.barrelCard, children:[
                jsxs('div', { style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:7}, children:[
                  jsx('div', { style:{color:'#00ccff',fontWeight:'bold',fontSize:11}, children:'Ствол #'+(bi+1)+' — '+(b.label||'Custom') }),
                  jsxs('div', { style:{display:'flex',gap:4}, children:[
                    jsx('button', {
                      onClick:function(){ mirrorBarrel(bi); },
                      title:'Добавить зеркальный ствол',
                      style:{background:'rgba(0,80,180,0.5)',border:'none',borderRadius:4,color:'#88ccff',fontSize:11,padding:'2px 7px',cursor:'pointer',touchAction:'manipulation'},
                      children:'⇄' }),
                    jsx('button', { onClick:function(){ removeBarrel(bi); },
                      style:{background:'rgba(200,30,30,0.5)',border:'none',borderRadius:4,color:'#ff8888',fontSize:12,padding:'2px 7px',cursor:'pointer',touchAction:'manipulation'},
                      children:'✕' }),
                  ]}),
                ]}),
                [
                  ['angle',   'Угол',         -3.14159,3.14159,0.05,  function(v){ return Math.round(v*180/Math.PI)+'°'; }],
                  ['length',  'Длина',         20,100,1,              function(v){ return v; }],
                  ['width',   'Ширина',         5,36,1,               function(v){ return v; }],
                  ['lateral', 'Смещение',      -30,30,1,              function(v){ return v; }],
                  ['reload',  'Перезарядка',    0.2,5.0,0.05,         function(v){ return '×'+parseFloat(v).toFixed(2); }],
                  ['bSpeed',  'Скор.пули',      0.3,4.0,0.05,         function(v){ return '×'+parseFloat(v).toFixed(2); }],
                  ['bDmg',    'Урон',           0.2,5.0,0.05,         function(v){ return '×'+parseFloat(v).toFixed(2); }],
                  ['bSize',   'Размер пули',    0.3,3.0,0.05,         function(v){ return '×'+parseFloat(v).toFixed(2); }],
                ].map(function(row) {
                  var key=row[0], label=row[1], mn=row[2], mx=row[3], step=row[4], fmt=row[5];
                  var val = b[key] !== undefined ? b[key] : (key==='angle'?0:key==='lateral'?0:key.startsWith('b')?1.0:key==='reload'?1.0:key==='length'?48:14);
                  return jsxs('div', { key:key, style: S.sliderRow, children:[
                    jsx('div', { style:S.sliderLabel, children: label+': '+fmt(val) }),
                    jsx('input', { type:'range',min:mn,max:mx,step:step,value:val,
                      onChange:function(e){ updateBarrel(bi,key,step%1!==0?parseFloat(e.target.value):parseInt(e.target.value)); },
                      style:S.slider }),
                  ]});
                }),
                /* Тип снаряда ствола */
                jsxs('div', { style:{marginTop:7}, children:[
                  jsx('div', { style:{color:'rgba(255,255,255,0.45)',fontSize:10,marginBottom:5,fontWeight:'bold',letterSpacing:.5}, children:'ТИП СНАРЯДА:' }),
                  jsx('div', { style:{display:'flex',gap:5,flexWrap:'wrap'}, children:
                    [['normal','🔵 Пуля'],['trap','🟡 Мина']].map(function(p2){
                      var v2=p2[0],l2=p2[1],a2=(b.bulletType||'normal')===v2;
                      return jsx('button',{key:v2,
                        style:{padding:'5px 10px',borderRadius:6,
                          border:a2?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.18)',
                          background:a2?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',
                          color:a2?'#fff':'rgba(255,255,255,0.5)',cursor:'pointer',
                          fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                        onClick:function(){ updateBarrel(bi,'bulletType',v2); },
                        children:l2});
                    })
                  }),
                ]}),
              ]});
            }),
          ]}),

          /* Тип снаряда / стиль стрельбы */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'ТИП СНАРЯДА / СТИЛЬ' }),
            jsx('div', { style:{display:'flex',flexWrap:'wrap',gap:5,marginBottom:6}, children:
              [['normal','🔵 Обычный'],['rocket','🚀 Ракета'],['laser','⚡ Лазер'],
               ['drone','🤖 Дрон'],['homing','🎯 Наводящийся'],['splitting','💥 Дробовой'],
               ['vampire','🧛 Вампиризм']].map(function(pair) {
                var val=pair[0], lbl=pair[1];
                var act=(editing.specialType||'normal')===val;
                return jsx('button',{key:val,
                  style:{padding:'6px 10px',borderRadius:8,
                    border:act?'2px solid #00ccff':'2px solid rgba(255,255,255,0.15)',
                    background:act?'rgba(0,100,200,0.55)':'rgba(255,255,255,0.05)',
                    color:act?'#fff':'rgba(255,255,255,0.55)',cursor:'pointer',
                    fontFamily:'Arial',fontSize:11,fontWeight:'bold',touchAction:'manipulation'},
                  onClick:function(){ setEditing(function(p){ return Object.assign({},p,{specialType:val}); }); },
                  children:lbl});
              })
            }),
            jsx('div', { style:{color:'rgba(255,255,255,0.25)',fontSize:10,marginTop:3,lineHeight:1.6},
              children: ({
                normal:'Стандартные пули.',
                rocket:'Снаряды как ракеты — треугольная форма.',
                laser:'Лазерные лучи — мгновенные, прямые.',
                drone:'Дроны — летят к ближайшему врагу.',
                homing:'Самонаводящиеся снаряды.',
                splitting:'Снаряды разлетаются на осколки.',
                vampire:'Снаряды лечат при нанесении урона.',
              })[editing.specialType||'normal'],
            }),
          ]}),

          /* ── Авто-режим стрельбы ───────────────────────────────── */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: '🤖 Авто-режим стрельбы' }),
            jsxs('div', { style:{display:'flex',gap:6,flexWrap:'wrap',marginBottom:6}, children:[
              /* Авто-стрельба */
              jsx('button', {
                style:{padding:'8px 12px',borderRadius:8,flex:1,border:'none',cursor:'pointer',
                  fontFamily:'Arial',fontWeight:'bold',fontSize:11,touchAction:'manipulation',
                  background: editing.autoGun ? 'rgba(255,140,0,0.7)' : 'rgba(255,255,255,0.07)',
                  color: editing.autoGun ? '#fff' : 'rgba(255,255,255,0.45)'},
                onClick: function(){
                  setEditing(function(p){
                    var next = Object.assign({},p,{autoGun:!p.autoGun, turretDeploy: p.autoGun?p.turretDeploy:false});
                    pushHistory(next); return next;
                  });
                },
                children: (editing.autoGun ? '✔ ' : '') + '⚡ Авто-стрельба',
              }),
              /* Авто-турели */
              jsx('button', {
                style:{padding:'8px 12px',borderRadius:8,flex:1,border:'none',cursor:'pointer',
                  fontFamily:'Arial',fontWeight:'bold',fontSize:11,touchAction:'manipulation',
                  background: editing.turretDeploy ? 'rgba(0,160,255,0.7)' : 'rgba(255,255,255,0.07)',
                  color: editing.turretDeploy ? '#fff' : 'rgba(255,255,255,0.45)'},
                onClick: function(){
                  setEditing(function(p){
                    var next = Object.assign({},p,{turretDeploy:!p.turretDeploy, autoGun: p.turretDeploy?p.autoGun:false});
                    pushHistory(next); return next;
                  });
                },
                children: (editing.turretDeploy ? '✔ ' : '') + '🔫 Авто-турели',
              }),
            ]}),
            jsx('div', { style:{color:'rgba(255,255,255,0.25)',fontSize:10,lineHeight:1.6},
              children: editing.autoGun
                ? '⚡ Стволы стреляют автоматически и наводятся на врагов.'
                : editing.turretDeploy
                  ? '🔫 При выстреле размещает авто-турели, которые сами стреляют по врагам.'
                  : 'Стрельба вручную — без авто-режима.' }),

            /* Настройки авто-турелей */
            editing.turretDeploy && jsxs('div', { style:{marginTop:8,borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:8,display:'flex',flexDirection:'column',gap:5}, children:[
              jsx('div', { style:{color:'rgba(0,180,255,0.7)',fontSize:10,fontWeight:'bold',letterSpacing:.5,marginBottom:3}, children:'НАСТРОЙКИ АВТО-ТУРЕЛЕЙ:' }),
              [
                ['maxTurrets','Макс. турелей',  1,   8,   1,  function(v){ return v; }],
                ['fireRate',  'Скор. огня (↓=быстрее)', 20, 120, 5, function(v){ return v; }],
                ['health',    'HP турели',      20,  500, 10, function(v){ return v; }],
                ['lifetime',  'Время жизни',   200, 1500,50, function(v){ return v+'ф'; }],
                ['damage',    'Урон',            2,   80,  1, function(v){ return v; }],
                ['speed',     'Скор. пули',      3,   20,0.5, function(v){ return v; }],
                ['size',      'Размер пули',     3,   25,  1, function(v){ return v; }],
              ].map(function(row){
                var k=row[0],lbl=row[1],mn=row[2],mx=row[3],step=row[4],fmt=row[5];
                var tc = editing.turretCfg || {};
                var val = tc[k] !== undefined ? tc[k] : (k==='maxTurrets'?3:k==='fireRate'?55:k==='health'?90:k==='lifetime'?700:k==='damage'?9:k==='speed'?8.5:7);
                return jsxs('div', { key:k, style: S.sliderRow, children:[
                  jsx('div', { style:S.sliderLabel, children: lbl+': '+fmt(val) }),
                  jsx('input', { type:'range',min:mn,max:mx,step:step,value:val,
                    onChange:function(e){
                      var nv = step%1!==0 ? parseFloat(e.target.value) : parseInt(e.target.value);
                      setEditing(function(p){
                        var tc2 = Object.assign({}, p.turretCfg||{});
                        tc2[k] = nv;
                        return Object.assign({},p,{turretCfg:tc2});
                      });
                    },
                    style:S.slider }),
                ]});
              }),
              /* Наводящиеся пули */
              jsxs('div', { style:{display:'flex',alignItems:'center',gap:8,marginTop:4}, children:[
                jsx('input', { type:'checkbox', id:'_tcHoming',
                  checked: !!(editing.turretCfg && editing.turretCfg.homing),
                  onChange: function(e){
                    setEditing(function(p){
                      var tc2 = Object.assign({}, p.turretCfg||{}, {homing: e.target.checked});
                      return Object.assign({},p,{turretCfg:tc2});
                    });
                  } }),
                jsx('label', { htmlFor:'_tcHoming', style:{color:'rgba(255,255,255,0.6)',fontSize:11,cursor:'pointer'}, children:'🎯 Наводящиеся снаряды турелей' }),
              ]}),
            ]}),
          ]}),

          /* ── Дерево кастомных апгрейдов ────────────────────────── */
          (function(){
            var myTanks = loadTanks().filter(function(t){ return t.id !== editing.id; });
            if (myTanks.length === 0) return null;
            var upgTo = editing.upgradesTo || [];
            return jsxs('div', { style: S.section, children: [
              jsx('div', { style: S.sectionTitle, children: '🌿 Апгрейды этого танка (Куда идёт прокачка)' }),
              jsx('div', { style:{display:'flex',flexWrap:'wrap',gap:5}, children:
                myTanks.map(function(t){
                  var isOn = upgTo.indexOf(t.id) >= 0;
                  return jsx('button', { key:t.id,
                    style:{padding:'5px 10px',borderRadius:7,border: isOn?'1.5px solid #00ccff':'1.5px solid rgba(255,255,255,0.15)',
                      background: isOn?'rgba(0,100,200,0.5)':'rgba(255,255,255,0.05)',
                      color: isOn?'#fff':'rgba(255,255,255,0.5)',cursor:'pointer',
                      fontFamily:'Arial',fontSize:10,fontWeight:'bold',touchAction:'manipulation'},
                    onClick: function(){
                      setEditing(function(p){
                        var arr = (p.upgradesTo||[]).slice();
                        var i = arr.indexOf(t.id);
                        if (i>=0) arr.splice(i,1); else arr.push(t.id);
                        var next = Object.assign({},p,{upgradesTo:arr});
                        pushHistory(next); return next;
                      });
                    },
                    children: (isOn?'✔ ':'')+t.name });
                })
              }),
              jsx('div', { style:{color:'rgba(255,255,255,0.25)',fontSize:10,marginTop:4,lineHeight:1.5},
                children:'Выбери кастомные танки, в которые апгрейдится этот. Они появятся как варианты прокачки в игре.' }),
            ]});
          })(),

          /* Описание */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Описание (необязательно)' }),
            jsx('input', { value:editing.description||'', maxLength:80, placeholder:'Краткое описание...', style:S.input,
              onChange:function(e){ setEditing(function(p){ return Object.assign({},p,{description:e.target.value}); }); },
            }),
          ]}),

          /* Сохранить */
          jsx('button', { onClick: saveTank, style: S.saveBtn, children: '💾 Сохранить и добавить в игру' }),

          /* Сохранить + экспортировать */
          jsx('button', {
            onClick: saveAndExport,
            style: Object.assign({}, S.saveBtn, { background:'linear-gradient(90deg,#007a40,#00b060)', marginTop:0 }),
            children: '📤 Сохранить и получить код',
          }),

          jsx('div', { style:{height:20} }),

        ]}),
      ]}),

    ]}), /* body */

    /* ══ МОДАЛ УДАЛЕНИЯ ════════════════════════════════════════ */
    deletePending && jsx('div', { style: S.modalOverlay, onClick: function(){ setDeletePending(null); }, children:
      jsx('div', { style: Object.assign({}, S.modalBox, {maxWidth:340,gap:12}), onClick: function(e){ e.stopPropagation(); }, children:
        jsxs('div', { style:{display:'flex',flexDirection:'column',gap:14}, children:[
          jsx('div', { style:{color:'#ff6060',fontSize:15,fontWeight:900}, children:'🗑 Удалить танк?' }),
          jsx('div', { style:{color:'rgba(255,255,255,0.6)',fontSize:13,lineHeight:1.6},
            children:'Этот танк будет удалён из коллекции и дерева прокачки. Необратимо.' }),
          jsxs('div', { style:{display:'flex',gap:8}, children:[
            jsx('button', { onClick: function(){ confirmDelete(deletePending); },
              style:{flex:1,padding:'11px',borderRadius:9,border:'none',cursor:'pointer',
                fontFamily:'Arial',fontWeight:'bold',fontSize:13,
                background:'rgba(200,30,30,0.85)',color:'#fff',touchAction:'manipulation'},
              children:'🗑 Удалить' }),
            jsx('button', { onClick: function(){ setDeletePending(null); },
              style:{flex:1,padding:'11px',borderRadius:9,border:'none',cursor:'pointer',
                fontFamily:'Arial',fontWeight:'bold',fontSize:13,
                background:'rgba(60,60,80,0.8)',color:'rgba(255,255,255,0.7)',touchAction:'manipulation'},
              children:'Отмена' }),
          ]}),
        ]})
      })
    }),

    /* ══ МОДАЛ ЭКСПОРТА / ИМПОРТА ══════════════════════════════ */
    modal && jsx('div', { style: S.modalOverlay, onClick: closeModal, children:
      jsx('div', { style: S.modalBox, onClick: function(e){ e.stopPropagation(); }, children:

        modal.type === 'export' ? jsxs('div', { style:{display:'flex',flexDirection:'column',gap:12}, children:[

          /* — Заголовок — */
          jsxs('div', { style:{display:'flex',alignItems:'center',justifyContent:'space-between'}, children:[
            jsxs('div', { children:[
              jsx('div', { style: S.modalTitle, children: '📤 Код танка' }),
              jsx('div', { style:{color:'rgba(255,255,255,0.4)',fontSize:10,marginTop:3}, children: '"' + modal.defName + '"' }),
            ]}),
            jsx('button', { onClick: closeModal, style: S.btn('rgba(100,30,30,0.5)'), children: '✕' }),
          ]}),

          /* — Код — */
          jsx('textarea', { readOnly: true, value: modal.code, style: S.modalCode,
            onFocus: function(e){ e.target.select(); } }),

          /* — Подсказка — */
          jsx('div', { style: S.modalHint, children:
            'Скопируй этот код и отправь другому игроку. Он сможет вставить его через «📥 Импорт» и сразу получить твой танк в свой редактор.' }),

          /* — Кнопки — */
          jsxs('div', { style: S.modalBtnRow, children:[
            jsx('button', {
              onClick: function(){ doCopy(modal.code); },
              style: S.exportBtn(copied ? 'rgba(0,160,80,0.9)' : 'rgba(0,100,60,0.8)'),
              children: copied ? '✔ Скопировано!' : '📋 Скопировать код',
            }),
            jsx('button', {
              onClick: function(){
                /* Поделиться через Web Share API если доступен */
                if (navigator.share) {
                  navigator.share({ title: 'Diep Tank: ' + modal.defName, text: modal.code })
                    .catch(function(){});
                } else { doCopy(modal.code); }
              },
              style: S.exportBtn('rgba(0,80,180,0.8)'),
              children: '🔗 Поделиться',
            }),
            jsx('button', { onClick: closeModal, style: S.exportBtn('rgba(60,60,80,0.8)'), children: 'Закрыть' }),
          ]}),

        ]}) :

        /* — Импорт — */
        jsxs('div', { style:{display:'flex',flexDirection:'column',gap:12}, children:[

          /* — Заголовок — */
          jsxs('div', { style:{display:'flex',alignItems:'center',justifyContent:'space-between'}, children:[
            jsx('div', { style: S.modalTitle, children: '📥 Импорт танка' }),
            jsx('button', { onClick: closeModal, style: S.btn('rgba(100,30,30,0.5)'), children: '✕' }),
          ]}),

          /* — Поле ввода — */
          jsx('textarea', {
            value: importCode,
            placeholder: 'Вставь сюда код танка (начинается с DIEPTANK1_...)',
            style: S.modalImportArea,
            onChange: function(e){ setImportCode(e.target.value); setImportErr(''); },
            spellCheck: false,
            autoCorrect: 'off',
            autoCapitalize: 'none',
          }),

          /* — Ошибка — */
          importErr && jsx('div', { style: S.modalErr, children: '⚠ ' + importErr }),

          /* — Подсказка — */
          jsx('div', { style: S.modalHint, children:
            'Танк загрузится в редактор для просмотра и настройки. Нажми «💾 Сохранить» чтобы добавить его в игру.' }),

          /* — Кнопки — */
          jsxs('div', { style: S.modalBtnRow, children:[
            jsx('button', {
              onClick: doImport,
              style: S.exportBtn(importCode.trim() ? 'rgba(0,100,200,0.85)' : 'rgba(40,40,60,0.7)'),
              children: '✔ Загрузить в редактор',
            }),
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

    /* Хуки ВСЕГДА вызываются первыми — до любых условных return.
       Rules of Hooks: количество вызовов должно быть одинаковым на каждый рендер. */
    var _o = useState(false); var open    = _o[0]; var setOpen    = _o[1];
    var _v = useState(false); var visible = _v[0]; var setVisible = _v[1];

    useEffect(function() {
      var t = setInterval(function() {
        var phase = window._gamePhase || 'menu';
        setVisible(phase === 'menu' || !phase);
      }, 150);
      return function(){ clearInterval(t); };
    }, []);

    useEffect(function() {
      window._openTankBuilder = function(){ setOpen(true); };
      return function(){ window._openTankBuilder = null; };
    }, [setOpen]);

    /* Проверки после хуков */
    if (!window.D || !window.D.jsx) return null;
    var jsx  = window.D.jsx;
    var jsxs = window.D.jsxs;

    if (!visible && !open) return null;

    return jsxs('div', { style:{position:'fixed',inset:0,zIndex:1999,pointerEvents:'none'}, children:[

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
