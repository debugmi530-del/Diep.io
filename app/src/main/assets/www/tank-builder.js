;(function() {
'use strict';

/* ═══════════════════════════════════════════════════════════════
   TANK BUILDER  —  Редактор кастомных танков
   Подключается после game.js. Использует глобалы: _t, w0, Ty, W1, D, cl
   Сохраняет танки в localStorage под ключом 'diep_custom_tanks'
   ═══════════════════════════════════════════════════════════════ */

var STORAGE_KEY = 'diep_custom_tanks';

/* ── Тир-пресеты: базовые характеристики ─────────────────────── */
var TIER_PRESETS = {
  1: { label:'T1 — Базовый',    color:'#44aaff', requiredLevel:1,  hp:1.0,  speed:1.0,  radiusMultiplier:1.0  },
  2: { label:'T2 — Продвинутый',color:'#e0e0e0', requiredLevel:5,  hp:1.25, speed:1.05, radiusMultiplier:1.1  },
  3: { label:'T3 — Элитный',    color:'#22cc55', requiredLevel:15, hp:1.55, speed:1.1,  radiusMultiplier:1.2  },
  4: { label:'T4 — Мастер',     color:'#ffdd00', requiredLevel:30, hp:1.9,  speed:1.15, radiusMultiplier:1.32 },
  5: { label:'T5 — Легенда',    color:'#ff8800', requiredLevel:45, hp:2.4,  speed:1.2,  radiusMultiplier:1.45 },
};

/* ── Форм-пресеты стволов ────────────────────────────────────── */
var BARREL_PRESETS = [
  { id:'std',    label:'Стандартный', length:48, width:14, reload:1.0,  bSize:1.0,  bSpeed:1.0,  bDmg:1.0 },
  { id:'long',   label:'Длинный',     length:72, width:10, reload:2.2,  bSize:0.75, bSpeed:2.1,  bDmg:1.8 },
  { id:'wide',   label:'Широкий',     length:36, width:22, reload:1.0,  bSize:1.5,  bSpeed:0.85, bDmg:1.4 },
  { id:'heavy',  label:'Тяжёлый',     length:52, width:20, reload:1.5,  bSize:1.3,  bSpeed:0.9,  bDmg:2.0 },
  { id:'mini',   label:'Мини',        length:30, width:9,  reload:0.55, bSize:0.65, bSpeed:1.2,  bDmg:0.6 },
  { id:'cannon', label:'Пушка',       length:56, width:28, reload:2.8,  bSize:2.2,  bSpeed:0.95, bDmg:3.5 },
];

/* ── Утилиты хранения ────────────────────────────────────────── */
function loadTanks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); } catch(e) { return []; }
}
function saveTanks(arr) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch(e) {}
}
function genId() { return 'custom_' + Date.now() + '_' + Math.floor(Math.random()*9999); }

/* ── Регистрация кастомного танка в движке ───────────────────── */
function registerTank(def) {
  if (!window._t) return;
  var id = def.id;
  var tier = def.tier || 1;
  var preset = TIER_PRESETS[tier] || TIER_PRESETS[1];
  var hpMult   = preset.hp   * (def.hpSlider   !== undefined ? def.hpSlider   : 1);
  var spdMult  = preset.speed* (def.speedSlider !== undefined ? def.speedSlider: 1);

  /* Создаём barrel-конфиги в формате el() */
  var barrels = (def.barrels || []).map(function(b) {
    return {
      angleOffset: b.angle,
      length:      b.length,
      width:       b.width,
      reloadMultiplier: b.reload,
      bulletSizeMultiplier: b.bSize,
      bulletSpeedMultiplier: b.bSpeed,
      bulletDamageMultiplier: b.bDmg > 1 ? 1 + (b.bDmg - 1) * 0.65 : b.bDmg,
      lateralOffset: b.lateral || 0,
    };
  });
  if (barrels.length === 0) {
    barrels = [{ angleOffset:0,length:48,width:14,reloadMultiplier:1.0,
                 bulletSizeMultiplier:1.0,bulletSpeedMultiplier:1.0,bulletDamageMultiplier:1.0,lateralOffset:0 }];
  }

  window._t[id] = {
    name: def.name,
    requiredLevel: preset.requiredLevel,
    upgradesFrom: def.upgradesFrom ? [def.upgradesFrom] : ['Basic'],
    color: def.color || preset.color,
    description: def.description || 'Кастомный танк',
    barrels: barrels,
    radiusMultiplier: (preset.radiusMultiplier || 1.0),
    bodyDamageMultiplier: 1.0,
    _hpMultiplier: hpMult,
    _speedMultiplier: spdMult,
    _isCustom: true,
  };

  if (window.W1) window.W1[id] = def.name;

  /* Узел в дереве */
  var xl = [55, 165, 295, 430, 590];
  var tierIdx = Math.min(tier, 4);
  var yBase = 8000 + loadTanks().indexOf(def) * 260 + Math.random() * 40;
  if (!window.w0) window.w0 = [];
  var existing = window.w0.findIndex(function(n){ return n.name === id; });
  if (existing >= 0) {
    window.w0[existing] = { name: id, tier: tierIdx, x: xl[tierIdx], y: yBase };
  } else {
    window.w0.push({ name: id, tier: tierIdx, x: xl[tierIdx], y: yBase });
  }

  /* Рёбра */
  if (!window.Ty) window.Ty = [];
  var parent = def.upgradesFrom || 'Basic';
  var edgeExists = window.Ty.some(function(e){ return e[0]===parent && e[1]===id; });
  if (!edgeExists) window.Ty.push([parent, id]);
}

function registerAllCustomTanks() {
  loadTanks().forEach(function(def) { registerTank(def); });
}

/* Запускаем регистрацию как только движок готов */
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(registerAllCustomTanks, 100);
} else {
  window.addEventListener('DOMContentLoaded', function(){ setTimeout(registerAllCustomTanks, 100); });
}

/* ═══════════════════════════════════════════════════════════════
   REACT UI — Редактор
   ═══════════════════════════════════════════════════════════════ */

function TankBuilder({ onClose }) {
  var React = window.cl || window.React;
  if (!React) return null;
  var useState   = React.useState;
  var useEffect  = React.useEffect;
  var useRef     = React.useRef;
  var jsx        = window.D ? window.D.jsx : null;
  var jsxs       = window.D ? window.D.jsxs : null;
  if (!jsx || !jsxs) return null;

  /* Редактируемое состояние танка */
  var _blank = {
    id: genId(),
    name: '',
    tier: 3,
    color: '#22cc55',
    upgradesFrom: 'Basic',
    description: '',
    barrels: [],
    hpSlider: 1.0,
    speedSlider: 1.0,
  };

  var tanks = loadTanks();

  var _s = useState(null);          /* выбранный для редактирования def или null (=новый) */
  var selectedDef = _s[0]; var setSelectedDef = _s[1];

  var _e = useState(_blank);
  var editing = _e[0]; var setEditing = _e[1];

  var _tab = useState('editor');   /* 'editor' | 'list' */
  var tab = _tab[0]; var setTab = _tab[1];

  var _prev = useState(false);
  var previewing = _prev[0]; var setPreviewing = _prev[1];

  var canvasRef = useRef(null);
  var animRef   = useRef(null);
  var bulletsRef= useRef([]);

  /* ── Рисование танка на canvas ─────────────────────────────── */
  useEffect(function() {
    var cvs = canvasRef.current;
    if (!cvs) return;
    var ctx = cvs.getContext('2d');
    var W = cvs.width, H = cvs.height;
    var cx = W/2, cy = H/2;

    function drawFrame(ts) {
      ctx.clearRect(0,0,W,H);

      /* Сетка */
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      for (var gx = 0; gx < W; gx += 40) { ctx.beginPath(); ctx.moveTo(gx,0); ctx.lineTo(gx,H); ctx.stroke(); }
      for (var gy = 0; gy < H; gy += 40) { ctx.beginPath(); ctx.moveTo(0,gy); ctx.lineTo(W,gy); ctx.stroke(); }

      var color = editing.color || '#22cc55';
      var radius = 22 * (TIER_PRESETS[editing.tier] || TIER_PRESETS[3]).radiusMultiplier;

      /* Стволы */
      editing.barrels.forEach(function(b) {
        var ang = b.angle || 0;
        var len = (b.length || 48) * 0.55;
        var wid = (b.width  || 14) * 0.55;
        var lat = (b.lateral|| 0)  * 0.55;
        ctx.save();
        ctx.translate(cx + Math.sin(ang + Math.PI/2) * lat, cy - Math.cos(ang + Math.PI/2) * lat);
        ctx.rotate(ang);
        ctx.fillStyle = '#aaa';
        ctx.strokeStyle = '#888';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.rect(-wid/2, -radius * 0.6, wid, len);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      /* Корпус */
      ctx.save();
      ctx.translate(cx, cy);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI*2);
      ctx.fillStyle = color;
      ctx.strokeStyle = 'rgba(0,0,0,0.5)';
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      /* Превью пуль */
      if (previewing) {
        var now = ts || 0;
        /* Спавн пуль из каждого ствола каждые ~600ms */
        editing.barrels.forEach(function(b, bi) {
          var phase = (now / (600 * (b.reload||1)) + bi * 0.3) % 1;
          if (phase < 0.02) {
            var ang = b.angle || 0;
            var bSpd = (b.bSpeed || 1.0) * 3.5;
            bulletsRef.current.push({
              x: cx, y: cy,
              vx: Math.cos(ang) * bSpd,
              vy: Math.sin(ang) * bSpd,
              r:  (b.bSize || 1.0) * 5,
              life: 80,
              maxLife: 80,
            });
          }
        });

        /* Обновление и отрисовка пуль */
        bulletsRef.current = bulletsRef.current.filter(function(blt) { return blt.life > 0; });
        bulletsRef.current.forEach(function(blt) {
          blt.x += blt.vx;
          blt.y += blt.vy;
          blt.life--;
          var alpha = blt.life / blt.maxLife;
          ctx.beginPath();
          ctx.arc(blt.x, blt.y, blt.r, 0, Math.PI*2);
          ctx.fillStyle = 'rgba(255,220,80,' + alpha + ')';
          ctx.fill();
        });
      } else {
        bulletsRef.current = [];
      }

      animRef.current = requestAnimationFrame(drawFrame);
    }

    animRef.current = requestAnimationFrame(drawFrame);
    return function() { cancelAnimationFrame(animRef.current); };
  }, [editing, previewing]);

  /* ── Работа с баррелями ─────────────────────────────────────── */
  function addBarrel(preset) {
    var p = preset || BARREL_PRESETS[0];
    setEditing(function(prev) {
      var nb = Object.assign({}, p, {
        angle: 0,
        lateral: 0,
        id: Date.now(),
      });
      return Object.assign({}, prev, { barrels: prev.barrels.concat([nb]) });
    });
  }

  function removeBarrel(idx) {
    setEditing(function(prev) {
      var arr = prev.barrels.slice();
      arr.splice(idx, 1);
      return Object.assign({}, prev, { barrels: arr });
    });
  }

  function updateBarrel(idx, key, val) {
    setEditing(function(prev) {
      var arr = prev.barrels.map(function(b, i) {
        if (i !== idx) return b;
        var upd = Object.assign({}, b);
        upd[key] = val;
        return upd;
      });
      return Object.assign({}, prev, { barrels: arr });
    });
  }

  /* ── Сохранение танка ──────────────────────────────────────── */
  function saveTank() {
    if (!editing.name.trim()) { alert('Введи имя танка!'); return; }
    var def = Object.assign({}, editing, { name: editing.name.trim() });
    var list = loadTanks();
    var idx = list.findIndex(function(t){ return t.id === def.id; });
    if (idx >= 0) list[idx] = def;
    else list.push(def);
    saveTanks(list);
    registerTank(def);
    setTab('list');
    alert('Танк "' + def.name + '" сохранён и добавлен в дерево прокачки!');
  }

  function deleteTank(id) {
    if (!confirm('Удалить этот танк?')) return;
    var list = loadTanks().filter(function(t){ return t.id !== id; });
    saveTanks(list);
    /* Убираем из движка */
    if (window._t) delete window._t[id];
    if (window.w0) window.w0 = window.w0.filter(function(n){ return n.name !== id; });
    if (window.Ty) window.Ty = window.Ty.filter(function(e){ return e[0] !== id && e[1] !== id; });
    setTab('list');
    setEditing(_blank);
  }

  function startNew() {
    setEditing(Object.assign({}, _blank, { id: genId() }));
    setSelectedDef(null);
    setTab('editor');
    setPreviewing(false);
    bulletsRef.current = [];
  }

  function editExisting(def) {
    setEditing(JSON.parse(JSON.stringify(def)));
    setSelectedDef(def);
    setTab('editor');
    setPreviewing(false);
    bulletsRef.current = [];
  }

  /* ── Список существующих танков ─────────────────────────────── */
  var tankList = loadTanks();

  /* ── Список родительских танков из движка ───────────────────── */
  var parentOptions = ['Basic'];
  if (window._t) {
    Object.keys(window._t).sort().forEach(function(k) {
      if (k !== 'Basic' && parentOptions.indexOf(k) < 0) parentOptions.push(k);
    });
  }

  var tier = editing.tier || 3;
  var preset = TIER_PRESETS[tier] || TIER_PRESETS[3];
  var hpEff    = Math.round(preset.hp    * editing.hpSlider    * 100);
  var spdEff   = Math.round(preset.speed * editing.speedSlider * 100);

  /* ── Стили ──────────────────────────────────────────────────── */
  var S = {
    root: {
      position:'fixed', inset:0, zIndex:2000,
      background:'linear-gradient(135deg,#0d0d1f 0%,#121228 50%,#0a0a1a 100%)',
      display:'flex', flexDirection:'column', fontFamily:'Arial,sans-serif', overflow:'hidden',
    },
    header: {
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'12px 20px', background:'rgba(0,0,0,0.5)',
      borderBottom:'1.5px solid rgba(68,136,255,0.3)', flexShrink:0,
    },
    title: { color:'#00b2e1', fontSize:20, fontWeight:900, letterSpacing:2 },
    tabs: { display:'flex', gap:0, borderBottom:'1.5px solid rgba(255,255,255,0.1)', flexShrink:0 },
    tab: function(active) { return {
      flex:1, padding:'10px', border:'none', cursor:'pointer', fontFamily:'Arial',
      fontSize:13, fontWeight:'bold', letterSpacing:0.5,
      background: active ? 'rgba(0,100,180,0.4)' : 'transparent',
      color: active ? '#00ccff' : 'rgba(255,255,255,0.45)',
      borderBottom: active ? '2px solid #00ccff' : '2px solid transparent',
    }; },
    body: { flex:1, display:'flex', overflow:'hidden' },
    /* Левая колонка — холст */
    leftCol: {
      width:220, flexShrink:0, display:'flex', flexDirection:'column', alignItems:'center',
      padding:'16px 12px', borderRight:'1px solid rgba(255,255,255,0.08)', gap:10,
    },
    canvas: { borderRadius:12, border:'1.5px solid rgba(68,136,255,0.25)', background:'rgba(10,14,38,0.9)' },
    /* Правая колонка — настройки */
    rightCol: { flex:1, overflowY:'auto', padding:'14px 16px', display:'flex', flexDirection:'column', gap:12 },
    section: {
      background:'rgba(255,255,255,0.04)', borderRadius:10,
      border:'1px solid rgba(255,255,255,0.08)', padding:'12px',
    },
    sectionTitle: { color:'rgba(255,255,255,0.55)', fontSize:10, fontWeight:'bold', letterSpacing:1, marginBottom:8, textTransform:'uppercase' },
    input: {
      width:'100%', padding:'8px 12px', borderRadius:8,
      border:'1.5px solid rgba(68,136,255,0.35)', background:'rgba(255,255,255,0.06)',
      color:'#fff', fontSize:13, fontFamily:'Arial', boxSizing:'border-box', outline:'none',
    },
    label: { color:'rgba(255,255,255,0.55)', fontSize:11, marginBottom:4, display:'block' },
    btn: function(col) { return {
      padding:'9px 16px', borderRadius:9, border:'none', cursor:'pointer',
      fontFamily:'Arial', fontWeight:'bold', fontSize:12, touchAction:'manipulation',
      background: col || 'rgba(0,100,200,0.6)', color:'#fff',
    }; },
    tierBtn: function(active, col) { return {
      flex:1, padding:'8px 4px', borderRadius:8, border:'none', cursor:'pointer',
      fontFamily:'Arial', fontWeight:'bold', fontSize:11,
      background: active ? col : 'rgba(255,255,255,0.07)',
      color: active ? '#000' : 'rgba(255,255,255,0.5)',
      transition:'all 0.12s',
    }; },
    barrelCard: {
      background:'rgba(255,255,255,0.05)', borderRadius:8,
      border:'1px solid rgba(255,255,255,0.1)', padding:'10px', marginBottom:8,
    },
    sliderRow: { display:'flex', alignItems:'center', gap:8, marginBottom:6 },
    sliderLabel: { color:'rgba(255,255,255,0.5)', fontSize:10, minWidth:110 },
    slider: { flex:1, accentColor:'#00b2e1', cursor:'pointer' },
    sliderVal: { color:'#00ccff', fontSize:11, minWidth:32, textAlign:'right' },
    presetGrid: { display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6, marginBottom:8 },
    presetBtn: {
      padding:'6px 4px', borderRadius:7, border:'1.5px solid rgba(68,136,255,0.3)',
      background:'rgba(0,50,120,0.4)', color:'#88ccff', cursor:'pointer',
      fontFamily:'Arial', fontSize:10, fontWeight:'bold', touchAction:'manipulation',
    },
    listCard: {
      background:'rgba(255,255,255,0.04)', borderRadius:10,
      border:'1px solid rgba(255,255,255,0.1)', padding:'12px', marginBottom:10,
      display:'flex', alignItems:'center', gap:12,
    },
    dot: function(col) { return { width:16, height:16, borderRadius:'50%', background: col, flexShrink:0 }; },
    saveBtn: {
      width:'100%', padding:'14px', fontSize:15, fontWeight:'bold', borderRadius:12,
      border:'none', cursor:'pointer', fontFamily:'Arial', touchAction:'manipulation',
      background:'linear-gradient(90deg,#0088cc,#44b4e0)', color:'#fff',
      boxShadow:'0 4px 16px rgba(0,150,220,0.35)',
    },
  };

  /* ══════════════════════════════════════════════════════════════
     RENDER
     ══════════════════════════════════════════════════════════════ */
  return jsxs('div', { style: S.root, children: [

    /* HEADER */
    jsxs('div', { style: S.header, children: [
      jsxs('div', { style: { display:'flex', alignItems:'center', gap:10 }, children: [
        jsx('span', { style: S.title, children: 'КОНСТРУКТОР ТАНКА' }),
        jsx('span', { style: { fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:2 }, children: 'Beta' }),
      ]}),
      jsx('button', { onClick: onClose, style: S.btn('rgba(180,30,30,0.6)'), children: '✕ Закрыть' }),
    ]}),

    /* TABS */
    jsxs('div', { style: S.tabs, children: [
      jsx('button', { style: S.tab(tab==='editor'), onClick: function(){ setTab('editor'); },
        children: tab==='editor' && !selectedDef ? '✏ Новый танк' : '✏ Редактор' }),
      jsxs('button', { style: S.tab(tab==='list'), onClick: function(){ setTab('list'); },
        children: ['📋 Мои танки', tankList.length > 0 ? ' (' + tankList.length + ')' : ''] }),
    ]}),

    /* BODY */
    jsx('div', { style: S.body, children:

      tab === 'list' ?

      /* ── LIST TAB ───────────────────────────────────────────── */
      jsxs('div', { style: { flex:1, overflowY:'auto', padding:16 }, children: [
        jsxs('div', { style: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16 }, children: [
          jsx('div', { style: { color:'rgba(255,255,255,0.6)', fontSize:13 }, children: tankList.length === 0 ? 'Нет сохранённых танков' : tankList.length + ' танк(ов)' }),
          jsx('button', { onClick: startNew, style: S.btn('rgba(0,140,60,0.7)'), children: '+ Создать танк' }),
        ]}),
        tankList.length === 0 && jsx('div', { style: { textAlign:'center', padding:'60px 20px', color:'rgba(255,255,255,0.25)', fontSize:14, lineHeight:2 }, children: 'У тебя ещё нет кастомных танков.\nНажми «+ Создать танк» чтобы начать!' }),
        tankList.map(function(def) {
          var tp = TIER_PRESETS[def.tier] || TIER_PRESETS[3];
          return jsxs('div', { key: def.id, style: S.listCard, children: [
            jsx('div', { style: S.dot(def.color || tp.color) }),
            jsxs('div', { style: { flex:1, minWidth:0 }, children: [
              jsx('div', { style: { color:'#fff', fontWeight:'bold', fontSize:14, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }, children: def.name }),
              jsxs('div', { style: { color:'rgba(255,255,255,0.4)', fontSize:11, marginTop:2 }, children: [
                tp.label, ' · ', def.barrels ? def.barrels.length : 0, ' стволов · Родитель: ', def.upgradesFrom || 'Basic'
              ]}),
            ]}),
            jsxs('div', { style: { display:'flex', gap:6 }, children: [
              jsx('button', { onClick: function(){ editExisting(def); }, style: S.btn(), children: '✏' }),
              jsx('button', { onClick: function(){ deleteTank(def.id); }, style: S.btn('rgba(180,30,30,0.7)'), children: '🗑' }),
            ]}),
          ]});
        }),
      ]}) :

      /* ── EDITOR TAB ─────────────────────────────────────────── */
      jsxs('div', { style: S.body, children: [

        /* Левая колонка — холст + превью */
        jsxs('div', { style: S.leftCol, children: [
          jsx('canvas', { ref: canvasRef, width: 196, height: 196, style: S.canvas }),
          jsx('div', { style: { color:'rgba(255,255,255,0.4)', fontSize:10, textAlign:'center' }, children: 'Превью танка' }),
          jsx('button', {
            onClick: function(){ setPreviewing(function(p){ return !p; }); bulletsRef.current = []; },
            style: Object.assign({}, S.btn(previewing ? 'rgba(255,160,0,0.7)' : 'rgba(0,80,160,0.6)'), { width:'100%', marginTop:4 }),
            children: previewing ? '⏹ Стоп' : '▶ Превью стрельбы'
          }),
          /* Цвет танка */
          jsxs('div', { style: { width:'100%' }, children: [
            jsx('div', { style: { color:'rgba(255,255,255,0.5)', fontSize:10, marginBottom:4 }, children: 'ЦВЕТ ТАНКА' }),
            jsx('input', { type:'color', value: editing.color || '#22cc55', onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{color:e.target.value}); }); },
              style: { width:'100%', height:36, borderRadius:8, border:'none', cursor:'pointer', background:'none' }
            }),
          ]}),
          /* Статы */
          jsxs('div', { style: { width:'100%', background:'rgba(0,0,0,0.3)', borderRadius:8, padding:'8px', fontSize:11 }, children: [
            jsxs('div', { style: { display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.5)', marginBottom:4 }, children: ['HP:',
              jsx('span', { style: { color:'#7eff9a', fontWeight:'bold' }, children: hpEff + '%' }),
            ]}),
            jsxs('div', { style: { display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.5)' }, children: ['Скорость:',
              jsx('span', { style: { color:'#88ccff', fontWeight:'bold' }, children: spdEff + '%' }),
            ]}),
            jsxs('div', { style: { display:'flex', justifyContent:'space-between', color:'rgba(255,255,255,0.5)', marginTop:4 }, children: ['Стволов:',
              jsx('span', { style: { color:'#ffd060', fontWeight:'bold' }, children: editing.barrels.length }),
            ]}),
          ]}),
        ]}),

        /* Правая колонка */
        jsxs('div', { style: S.rightCol, children: [

          /* Имя */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Имя танка' }),
            jsx('input', { value: editing.name, maxLength: 18, placeholder: 'Название...', style: S.input,
              onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{name:e.target.value}); }); },
            }),
          ]}),

          /* Тир */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Тир' }),
            jsx('div', { style: { display:'flex', gap:5 }, children:
              [1,2,3,4,5].map(function(t) {
                var tp2 = TIER_PRESETS[t];
                return jsx('button', { key:t, style: S.tierBtn(editing.tier===t, tp2.color), onClick: function(){ setEditing(function(p){ return Object.assign({},p,{tier:t}); }); },
                  children: 'T'+t });
              })
            }),
            jsx('div', { style: { color:'rgba(255,255,255,0.3)', fontSize:10, marginTop:6 }, children: preset.label + '  ·  Уровень ' + preset.requiredLevel }),
          ]}),

          /* Родитель в дереве */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Родитель в дереве прокачки' }),
            jsx('select', {
              value: editing.upgradesFrom || 'Basic',
              onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{upgradesFrom:e.target.value}); }); },
              style: Object.assign({}, S.input, { appearance:'none' }),
              children: parentOptions.map(function(k) {
                var label = (window.W1 && window.W1[k]) ? window.W1[k] + ' (' + k + ')' : k;
                return jsx('option', { key:k, value:k, children: label });
              }),
            }),
            jsx('div', { style: { color:'rgba(255,255,255,0.3)', fontSize:10, marginTop:5 }, children: 'Танк появится как вариант апгрейда из выбранного родителя' }),
          ]}),

          /* HP / Скорость */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Характеристики' }),
            jsxs('div', { style: S.sliderRow, children: [
              jsx('div', { style: S.sliderLabel, children: 'HP: ' + hpEff + '%' }),
              jsx('input', { type:'range', min:0.4, max:2.0, step:0.05, value: editing.hpSlider,
                onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{hpSlider:parseFloat(e.target.value)}); }); },
                style: S.slider }),
              jsx('div', { style: S.sliderVal, children: (editing.hpSlider*100).toFixed(0)+'%' }),
            ]}),
            jsxs('div', { style: S.sliderRow, children: [
              jsx('div', { style: S.sliderLabel, children: 'Скорость: ' + spdEff + '%' }),
              jsx('input', { type:'range', min:0.5, max:2.0, step:0.05, value: editing.speedSlider,
                onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{speedSlider:parseFloat(e.target.value)}); }); },
                style: S.slider }),
              jsx('div', { style: S.sliderVal, children: (editing.speedSlider*100).toFixed(0)+'%' }),
            ]}),
          ]}),

          /* Стволы */
          jsxs('div', { style: S.section, children: [
            jsxs('div', { style: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }, children: [
              jsx('div', { style: S.sectionTitle, children: 'СТВОЛЫ (' + editing.barrels.length + ')' }),
            ]}),
            /* Пресеты стволов */
            jsx('div', { style: S.presetGrid, children:
              BARREL_PRESETS.map(function(p) {
                return jsx('button', { key:p.id, style: S.presetBtn, onClick: function(){ addBarrel(p); },
                  children: '+ ' + p.label });
              })
            }),
            /* Список стволов */
            editing.barrels.length === 0 && jsx('div', { style:{ color:'rgba(255,255,255,0.25)', fontSize:11, textAlign:'center', padding:'12px 0' }, children:'Нажми на пресет выше чтобы добавить ствол' }),
            editing.barrels.map(function(b, bi) {
              return jsxs('div', { key: b.id || bi, style: S.barrelCard, children: [
                jsxs('div', { style: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8 }, children: [
                  jsx('div', { style: { color:'#00ccff', fontWeight:'bold', fontSize:12 }, children: 'Ствол #' + (bi+1) + ' — ' + (b.label || 'Custom') }),
                  jsx('button', { onClick: function(){ removeBarrel(bi); }, style: { background:'rgba(200,30,30,0.5)', border:'none', borderRadius:5, color:'#ff8888', fontSize:12, padding:'3px 8px', cursor:'pointer' }, children: '✕' }),
                ]}),
                /* Угол */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Угол: ' + Math.round((b.angle||0)*180/Math.PI) + '°' }),
                  jsx('input', { type:'range', min:-3.14159, max:3.14159, step:0.05, value: b.angle||0,
                    onChange: function(e){ updateBarrel(bi,'angle',parseFloat(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Длина */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Длина: ' + (b.length||48) }),
                  jsx('input', { type:'range', min:20, max:100, step:1, value: b.length||48,
                    onChange: function(e){ updateBarrel(bi,'length',parseInt(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Ширина */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Ширина: ' + (b.width||14) }),
                  jsx('input', { type:'range', min:5, max:36, step:1, value: b.width||14,
                    onChange: function(e){ updateBarrel(bi,'width',parseInt(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Боковое смещение */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Смещение: ' + (b.lateral||0) }),
                  jsx('input', { type:'range', min:-30, max:30, step:1, value: b.lateral||0,
                    onChange: function(e){ updateBarrel(bi,'lateral',parseInt(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Перезарядка */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Перезарядка: ×' + (b.reload||1.0).toFixed(2) }),
                  jsx('input', { type:'range', min:0.2, max:5.0, step:0.05, value: b.reload||1.0,
                    onChange: function(e){ updateBarrel(bi,'reload',parseFloat(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Скорость пуль */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Скор.пули: ×' + (b.bSpeed||1.0).toFixed(2) }),
                  jsx('input', { type:'range', min:0.3, max:4.0, step:0.05, value: b.bSpeed||1.0,
                    onChange: function(e){ updateBarrel(bi,'bSpeed',parseFloat(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Урон */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Урон: ×' + (b.bDmg||1.0).toFixed(2) }),
                  jsx('input', { type:'range', min:0.2, max:5.0, step:0.05, value: b.bDmg||1.0,
                    onChange: function(e){ updateBarrel(bi,'bDmg',parseFloat(e.target.value)); },
                    style: S.slider }),
                ]}),
                /* Размер пули */
                jsxs('div', { style: S.sliderRow, children: [
                  jsx('div', { style: S.sliderLabel, children: 'Размер пули: ×' + (b.bSize||1.0).toFixed(2) }),
                  jsx('input', { type:'range', min:0.3, max:3.0, step:0.05, value: b.bSize||1.0,
                    onChange: function(e){ updateBarrel(bi,'bSize',parseFloat(e.target.value)); },
                    style: S.slider }),
                ]}),
              ]});
            }),
          ]}),

          /* Описание */
          jsxs('div', { style: S.section, children: [
            jsx('div', { style: S.sectionTitle, children: 'Описание (необязательно)' }),
            jsx('input', { value: editing.description||'', maxLength:80, placeholder:'Краткое описание...', style: S.input,
              onChange: function(e){ setEditing(function(p){ return Object.assign({},p,{description:e.target.value}); }); },
            }),
          ]}),

          /* Кнопка сохранения */
          jsx('button', { onClick: saveTank, style: S.saveBtn, children: '💾 Сохранить и добавить в игру' }),

          /* Отступ снизу */
          jsx('div', { style: { height:20 } }),

        ]}),
      ]})

    }), /* body */

  ]}); /* root */
}

/* ═══════════════════════════════════════════════════════════════
   ИНТЕГРАЦИЯ В ГЛАВНОЕ МЕНЮ
   Патчим Dy через перехват рендера — добавляем кнопку «Конструктор»
   и монтируем редактор поверх всего через portal в document.body
   ═══════════════════════════════════════════════════════════════ */

function mountBuilderButton() {
  var React = window.cl || window.React;
  var ReactDOM = window.U1 || window.ReactDOM;
  if (!React || !ReactDOM) { setTimeout(mountBuilderButton, 300); return; }

  /* Монтируем отдельный React-корень для кнопки и оверлея */
  var container = document.createElement('div');
  container.id = '_tank_builder_root';
  container.style.cssText = 'position:fixed;inset:0;z-index:1999;pointer-events:none;';
  document.body.appendChild(container);

  function BuilderRoot() {
    var useState = React.useState;
    var useEffect = React.useEffect;
    var jsx = window.D.jsx;
    var jsxs = window.D.jsxs;

    var _o = useState(false);
    var open = _o[0]; var setOpen = _o[1];
    var _v = useState(false);
    var visible = _v[0]; var setVisible = _v[1];

    /* Показываем кнопку только когда игра на экране меню */
    useEffect(function() {
      var t = setInterval(function() {
        var phase = window._gamePhase || 'menu';
        setVisible(phase === 'menu' || !phase);
      }, 150);
      return function(){ clearInterval(t); };
    }, []);

    if (!visible && !open) return null;

    return jsxs('div', { style: { position:'fixed', inset:0, zIndex:1999, pointerEvents:'none' }, children: [
      /* Кнопка «Конструктор» */
      !open && visible && jsx('button', {
        style: {
          position:'fixed', bottom:68, left:20, zIndex:2000,
          padding:'12px 18px', borderRadius:14,
          border:'1.5px solid rgba(0,180,255,0.5)',
          background:'rgba(0,30,80,0.95)', color:'#00ccff',
          fontSize:13, fontWeight:'bold', cursor:'pointer',
          touchAction:'manipulation', pointerEvents:'auto',
          boxShadow:'0 4px 16px rgba(0,100,200,0.4)',
        },
        onClick: function(){ setOpen(true); },
        children: '⚙ Конструктор',
      }),
      /* Редактор */
      open && jsx('div', { style: { pointerEvents:'auto' }, children:
        React.createElement(TankBuilder, { onClose: function(){ setOpen(false); } })
      }),
    ]});
  }

  ReactDOM.createRoot(container).render(React.createElement(BuilderRoot));
}

/* Запуск после загрузки всех скриптов */
if (document.readyState === 'complete') {
  setTimeout(mountBuilderButton, 400);
} else {
  window.addEventListener('load', function(){ setTimeout(mountBuilderButton, 400); });
}

})();
