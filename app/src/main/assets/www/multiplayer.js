;(function () {
  'use strict';

  /* ── Config ────────────────────────────────────────────────────────── */
  var MP_PORT      = 9987;
  var MAX_PLAYERS  = 10;
  var SYNC_MS      = 100;
  var POLL_MS      = 50;
  var STALE_MS     = 2500;
  var PLAYER_COLORS = [
    '#4488ff','#ff4444','#44cc44','#ffcc00','#ff88ff',
    '#00ccff','#ff8800','#88ff44','#ff4488','#44ffcc'
  ];

  /* ── State ─────────────────────────────────────────────────────────── */
  var _myId      = 'p' + Math.random().toString(36).slice(2,10) + Date.now().toString(36).slice(-4);
  var _myName    = '';
  var _myColor   = PLAYER_COLORS[Math.floor(Math.random() * PLAYER_COLORS.length)];
  var _role      = 'none';          // 'host' | 'client' | 'none'
  var _remote    = {};              // id → player state
  var _lobby     = {};              // id → {name, color}
  var _started   = false;
  var _hostIp    = '';
  var _syncTimer = null;
  var _pollTimer = null;
  var _frameId   = null;
  var _lobbyEl   = null;
  var _mpBtnEl   = null;
  var _overlayCanvas = null;
  var _overlayCtx    = null;

  /* ── Android bridge helpers ─────────────────────────────────────────── */
  function _droid(method) {
    var args = Array.prototype.slice.call(arguments, 1);
    try {
      if (window.Android && typeof window.Android[method] === 'function') {
        return window.Android[method].apply(window.Android, args);
      }
    } catch (e) {}
    return null;
  }

  function _startServer()          { return _droid('mpStartServer', MP_PORT) || 'error:no bridge'; }
  function _stopServer()           { _droid('mpStopServer'); }
  function _connect(host)          { return _droid('mpConnect', host, MP_PORT) || 'error:no bridge'; }
  function _disconnect()           { _droid('mpDisconnect'); }
  function _getIp()                { return _droid('mpGetLocalIp') || '0.0.0.0'; }
  function _pollMsgs()             {
    var r = _droid('mpPoll');
    if (!r || r === '[]') return [];
    try { return JSON.parse(r); } catch (e) { return []; }
  }
  function _sendMsg(obj) {
    var j = JSON.stringify(obj);
    if (_role === 'host') _droid('mpBroadcast', j);
    else                  _droid('mpSend', j);
  }
  function _broadcastMsg(obj) { _droid('mpBroadcast', JSON.stringify(obj)); }

  /* ── Message handler ────────────────────────────────────────────────── */
  function _handle(msg) {
    if (!msg || !msg.type) return;
    switch (msg.type) {

      case '_serverStarted':
        _hostIp = _getIp();
        _rerender();
        break;

      case '_clientConnected':
        _droid('mpSend', JSON.stringify({type:'join', id:_myId, name:_myName, color:_myColor}));
        _rerender();
        break;

      case '_peerConnected':
        _rerender();
        break;

      case '_peerDisconnected':
      case '_clientDisconnected':
        if (_role === 'client') {
          _role = 'none'; _remote = {}; _lobby = {}; _started = false;
          _rerender();
          _toast('Соединение разорвано');
        } else {
          _rerender();
        }
        break;

      case 'join':
        if (msg.id && msg.id !== _myId) {
          _lobby[msg.id] = {name: msg.name || '?', color: msg.color || '#fff'};
          if (_role === 'host') {
            _broadcastMsg({type:'lobby', players: _allPlayers()});
          }
          _rerender();
        }
        break;

      case 'leave':
        if (msg.id && msg.id !== _myId) {
          delete _remote[msg.id];
          delete _lobby[msg.id];
          _rerender();
        }
        break;

      case 'lobby':
        if (Array.isArray(msg.players)) {
          _lobby = {};
          msg.players.forEach(function (p) {
            if (p.id !== _myId) _lobby[p.id] = {name: p.name, color: p.color};
          });
          _rerender();
        }
        break;

      case 'start':
        _started = true;
        _startSync();
        _ensureOverlay();
        _hideLobby();
        _autoStart();
        break;

      case 'state':
        if (msg.id && msg.id !== _myId) {
          _remote[msg.id] = {
            x: msg.x || 0, y: msg.y || 0, angle: msg.angle || 0,
            hp: msg.hp || 0, maxHp: msg.maxHp || 100,
            cls: msg.cls || 'Basic', lvl: msg.lvl || 1,
            score: msg.score || 0, name: msg.name || '?',
            color: msg.color || '#fff', alive: msg.alive !== false,
            ts: Date.now()
          };
        }
        break;

      case '_error':
        _toast('Сеть: ' + (msg.msg || '?'));
        break;
    }
  }

  /* ── Auto-start game for clients ────────────────────────────────────── */
  function _autoStart() {
    try {
      var inputs = document.querySelectorAll('input');
      for (var i = 0; i < inputs.length; i++) {
        var inp = inputs[i];
        if (inp.placeholder && inp.placeholder.indexOf('ник') !== -1) {
          var setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(inp, _myName || 'Игрок');
          inp.dispatchEvent(new Event('input', {bubbles: true}));
          break;
        }
      }
    } catch (e) {}
    setTimeout(function () {
      try {
        var btns = document.querySelectorAll('button');
        for (var i = 0; i < btns.length; i++) {
          var t = btns[i].textContent && btns[i].textContent.trim();
          if (t === 'Играть') {
            btns[i].dispatchEvent(new PointerEvent('pointerdown', {bubbles: true, cancelable: true}));
            break;
          }
        }
      } catch (e) {}
    }, 300);
  }

  /* ── State sync ─────────────────────────────────────────────────────── */
  function _allPlayers() {
    var list = [{id: _myId, name: _myName, color: _myColor}];
    Object.keys(_lobby).forEach(function (id) {
      list.push({id: id, name: _lobby[id].name, color: _lobby[id].color});
    });
    return list;
  }

  function _startSync() {
    if (_syncTimer) clearInterval(_syncTimer);
    _syncTimer = setInterval(function () {
      if (_role === 'none' || !_started) return;
      var gs = window._gs;
      if (!gs || !gs.player) return;
      var p = gs.player;
      _sendMsg({
        type: 'state', id: _myId,
        name: _myName, color: _myColor,
        x: p.x || 0, y: p.y || 0, angle: p.angle || 0,
        hp: p.health || 0, maxHp: p.maxHealth || 100,
        cls: p.className || 'Basic', lvl: p.level || 1,
        score: p.score || 0, alive: (p.health > 0)
      });
    }, SYNC_MS);
  }

  function _stopSync() {
    if (_syncTimer) { clearInterval(_syncTimer); _syncTimer = null; }
  }

  function _startPolling() {
    if (_pollTimer) clearInterval(_pollTimer);
    _pollTimer = setInterval(function () {
      _pollMsgs().forEach(_handle);
    }, POLL_MS);
  }

  function _stopPolling() {
    if (_pollTimer) { clearInterval(_pollTimer); _pollTimer = null; }
  }

  /* ── Overlay canvas ─────────────────────────────────────────────────── */
  function _ensureOverlay() {
    if (_overlayCanvas) return;
    _overlayCanvas = document.createElement('canvas');
    _overlayCanvas.style.cssText =
      'position:absolute;inset:0;width:100%;height:100%;' +
      'pointer-events:none;z-index:5;';
    _overlayCtx = _overlayCanvas.getContext('2d');

    function _resize() {
      _overlayCanvas.width  = window.innerWidth;
      _overlayCanvas.height = window.innerHeight;
    }
    window.addEventListener('resize', _resize);
    _resize();

    var root = document.getElementById('root');
    if (root) root.appendChild(_overlayCanvas);

    (function _loop() {
      _frameId = requestAnimationFrame(_loop);
      _drawOverlay();
    })();
  }

  function _drawOverlay() {
    if (!_overlayCanvas || !_overlayCtx) return;
    var ctx = _overlayCtx;
    var W = _overlayCanvas.width;
    var H = _overlayCanvas.height;
    ctx.clearRect(0, 0, W, H);

    if (!_started || _role === 'none') return;
    if ((window._gamePhase || 'menu') !== 'playing') return;

    var gs = window._gs;
    if (!gs || !gs.player) return;
    var lp = gs.player;
    var lx = lp.x || 0, ly = lp.y || 0;
    var scale = Math.min(W / 900, H / 600, 1.4) / 1.3;
    var now = Date.now();

    var ids = Object.keys(_remote);
    for (var i = 0; i < ids.length; i++) {
      var rp = _remote[ids[i]];
      if (!rp.alive || now - rp.ts > STALE_MS) continue;

      var sx = (rp.x - lx) * scale + W / 2;
      var sy = (rp.y - ly) * scale + H / 2;
      if (sx < -120 || sx > W + 120 || sy < -120 || sy > H + 120) continue;

      var R = Math.max(9, Math.min(22, 18 * scale));
      var col = rp.color || '#4488ff';

      /* barrel */
      ctx.save();
      ctx.translate(sx, sy);
      ctx.rotate(rp.angle || 0);
      ctx.fillStyle = '#555';
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(0, -R * 0.3, R * 1.5, R * 0.6);
      ctx.fill(); ctx.stroke();
      ctx.restore();

      /* body */
      ctx.save();
      ctx.beginPath();
      ctx.arc(sx, sy, R, 0, Math.PI * 2);
      ctx.fillStyle = col + 'cc';
      ctx.fill();
      ctx.strokeStyle = col;
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();

      /* HP bar */
      var frac = rp.maxHp > 0 ? Math.max(0, Math.min(1, rp.hp / rp.maxHp)) : 1;
      var bw = R * 2.6, bh = 4, bx = sx - bw / 2, by = sy - R - 13;
      ctx.fillStyle = 'rgba(0,0,0,0.5)';
      ctx.fillRect(bx, by, bw, bh);
      ctx.fillStyle = frac > 0.5 ? '#44cc44' : frac > 0.25 ? '#ffcc00' : '#ff4444';
      ctx.fillRect(bx, by, bw * frac, bh);

      /* name label */
      var fs = Math.round(Math.max(10, 9 * scale + 5));
      ctx.save();
      ctx.font = 'bold ' + fs + 'px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.85)';
      ctx.strokeText(rp.name, sx, sy - R - 15);
      ctx.fillStyle = '#fff';
      ctx.fillText(rp.name, sx, sy - R - 15);
      ctx.restore();

      /* level badge */
      ctx.save();
      ctx.font = 'bold 9px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(0,0,0,0.6)';
      ctx.beginPath();
      ctx.arc(sx + R * 0.7, sy - R * 0.7, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffe14d';
      ctx.fillText(rp.lvl || 1, sx + R * 0.7, sy - R * 0.7);
      ctx.restore();
    }
  }

  /* ── Toast ──────────────────────────────────────────────────────────── */
  function _toast(msg) {
    var t = document.createElement('div');
    t.style.cssText =
      'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);' +
      'background:rgba(0,0,0,0.88);color:#fff;font-family:Arial;font-size:13px;' +
      'padding:10px 22px;border-radius:10px;z-index:10001;pointer-events:none;' +
      'white-space:nowrap;max-width:85vw;text-align:center;border:1px solid rgba(255,255,255,0.15);';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { if (t.parentNode) t.remove(); }, 3000);
  }

  /* ── Lobby UI ────────────────────────────────────────────────────────── */
  function _hideLobby() {
    if (_lobbyEl) { _lobbyEl.remove(); _lobbyEl = null; }
  }

  function _openLobby() {
    _hideLobby();
    _lobbyEl = document.createElement('div');
    _lobbyEl.style.cssText =
      'position:fixed;inset:0;z-index:900;background:rgba(0,0,0,0.82);' +
      'display:flex;align-items:center;justify-content:center;font-family:Arial;' +
      'touch-action:manipulation;';
    _lobbyEl.addEventListener('pointerdown', function (e) {
      if (e.target === _lobbyEl) _hideLobby();
    });
    _rerender();
    document.body.appendChild(_lobbyEl);
  }

  function _rerender() {
    if (!_lobbyEl) return;
    _lobbyEl.innerHTML = '';

    var box = document.createElement('div');
    box.style.cssText =
      'background:rgba(10,15,40,0.98);border:1.5px solid rgba(68,136,255,0.4);' +
      'border-radius:16px;padding:20px 22px;min-width:300px;max-width:92vw;' +
      'max-height:85vh;overflow-y:auto;position:relative;color:#fff;';

    /* close button */
    var xBtn = document.createElement('button');
    xBtn.textContent = '✕';
    xBtn.style.cssText =
      'position:absolute;top:10px;right:12px;background:none;border:none;' +
      'color:rgba(255,255,255,0.4);font-size:18px;cursor:pointer;padding:2px 6px;border-radius:4px;';
    xBtn.addEventListener('pointerdown', function (e) { e.stopPropagation(); _hideLobby(); });
    box.appendChild(xBtn);

    /* title */
    var ttl = document.createElement('div');
    ttl.style.cssText = 'color:#88ccff;font-size:16px;font-weight:bold;text-align:center;margin-bottom:16px;letter-spacing:1px;';
    ttl.textContent = '🌐 Мультиплеер (Wi-Fi)';
    box.appendChild(ttl);

    if (_role === 'none') _buildMain(box);
    else if (_role === 'host') _buildHost(box);
    else _buildClient(box);

    _lobbyEl.appendChild(box);
  }

  function _s(el, css) { el.style.cssText = css; return el; }
  function _btn(text, css, fn) {
    var b = document.createElement('button');
    b.textContent = text;
    b.style.cssText = css;
    b.addEventListener('pointerdown', function (e) { e.stopPropagation(); fn(e); });
    return b;
  }

  function _buildMain(box) {
    /* name input */
    var savedName = _myName || localStorage.getItem('diep_mpName') || '';
    box.appendChild(_s(document.createElement('div'), 'color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:6px;')).textContent = 'Ваш ник:';
    var nameInp = document.createElement('input');
    nameInp.type = 'text'; nameInp.value = savedName; nameInp.maxLength = 16;
    nameInp.placeholder = 'Введите ник...';
    nameInp.style.cssText =
      'width:100%;padding:10px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.2);' +
      'border-radius:8px;color:#fff;font-size:14px;box-sizing:border-box;text-align:center;outline:none;margin-bottom:14px;';
    nameInp.addEventListener('input', function () {
      _myName = nameInp.value.trim();
      localStorage.setItem('diep_mpName', _myName);
    });
    box.appendChild(nameInp);

    /* create room */
    box.appendChild(_btn('📡  Создать комнату (Хост)',
      'width:100%;padding:13px;font-size:14px;font-weight:bold;border-radius:12px;' +
      'border:2px solid rgba(68,255,136,0.5);background:rgba(10,60,30,0.8);color:#44ff88;cursor:pointer;margin-bottom:14px;touch-action:manipulation;',
      function () {
        _myName = nameInp.value.trim() || 'Хост';
        localStorage.setItem('diep_mpName', _myName);
        _role = 'host'; _lobby = {};
        _startPolling();
        _hostIp = _getIp();
        var r = _startServer();
        if (r && r.indexOf('error') === 0) {
          _role = 'none'; _stopPolling();
          _toast('Ошибка сервера: ' + r.slice(6)); return;
        }
        _rerender();
      }
    ));

    /* divider */
    _s(box.appendChild(document.createElement('div')),
      'text-align:center;color:rgba(255,255,255,0.25);font-size:12px;margin-bottom:12px;').textContent = '── или ──';

    /* IP input */
    var ipInp = document.createElement('input');
    ipInp.type = 'text';
    ipInp.placeholder = 'IP хоста  (192.168.x.x)';
    ipInp.value = localStorage.getItem('diep_mpLastIp') || '';
    ipInp.style.cssText =
      'width:100%;padding:10px;background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.2);' +
      'border-radius:8px;color:#fff;font-size:14px;box-sizing:border-box;text-align:center;outline:none;margin-bottom:10px;';
    box.appendChild(ipInp);

    /* join */
    box.appendChild(_btn('🔗  Войти в комнату',
      'width:100%;padding:13px;font-size:14px;font-weight:bold;border-radius:12px;' +
      'border:2px solid rgba(100,136,255,0.5);background:rgba(20,30,80,0.8);color:#88aaff;cursor:pointer;touch-action:manipulation;',
      function () {
        var ip = ipInp.value.trim();
        if (!ip) { _toast('Введите IP хоста'); return; }
        _myName = nameInp.value.trim() || 'Игрок';
        localStorage.setItem('diep_mpName', _myName);
        localStorage.setItem('diep_mpLastIp', ip);
        _role = 'client';
        _startPolling();
        var r = _connect(ip);
        if (r && r.indexOf('error') === 0) {
          _role = 'none'; _stopPolling();
          _toast('Ошибка: ' + r.slice(6)); return;
        }
        _rerender();
      }
    ));
  }

  function _buildHost(box) {
    /* IP display */
    var ipBox = document.createElement('div');
    ipBox.style.cssText =
      'background:rgba(0,40,20,0.7);border:1px solid rgba(68,255,136,0.35);' +
      'border-radius:10px;padding:12px;margin-bottom:14px;text-align:center;';
    ipBox.innerHTML =
      '<div style="color:rgba(255,255,255,0.5);font-size:11px;margin-bottom:6px;">📱 Другие игроки вводят этот IP:</div>' +
      '<div style="color:#44ff88;font-size:22px;font-weight:bold;letter-spacing:2px;">' + (_hostIp || '...') + '</div>' +
      '<div style="color:rgba(255,255,255,0.35);font-size:11px;margin-top:4px;">Порт: ' + MP_PORT + '</div>';
    box.appendChild(ipBox);

    /* player list */
    var players = _allPlayers();
    var listWrap = document.createElement('div');
    listWrap.style.cssText = 'margin-bottom:14px;';
    _s(listWrap.appendChild(document.createElement('div')),
      'color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:8px;').textContent =
      'Игроки (' + players.length + ' / ' + MAX_PLAYERS + '):';
    players.forEach(function (p) {
      var row = document.createElement('div');
      row.style.cssText =
        'display:flex;align-items:center;gap:8px;padding:6px 8px;' +
        'background:rgba(255,255,255,0.05);border-radius:7px;margin-bottom:5px;';
      row.innerHTML =
        '<span style="width:10px;height:10px;border-radius:50%;background:' + p.color + ';flex-shrink:0;display:inline-block;"></span>' +
        '<span style="color:#fff;font-size:13px;flex:1;">' + p.name + (p.id === _myId ? ' <span style="color:rgba(255,255,255,0.4);font-size:11px;">(Вы, Хост)</span>' : '') + '</span>';
      listWrap.appendChild(row);
    });
    box.appendChild(listWrap);

    if (players.length >= 2) {
      box.appendChild(_btn('▶  Начать игру  (' + players.length + ' игроков)',
        'width:100%;padding:14px;font-size:15px;font-weight:bold;border-radius:12px;' +
        'border:none;background:linear-gradient(90deg,#0098c8,#44b4e0);color:#fff;' +
        'cursor:pointer;margin-bottom:10px;touch-action:manipulation;',
        function () {
          _broadcastMsg({type: 'start'});
          _started = true;
          _startSync();
          _ensureOverlay();
          _hideLobby();
          _autoStart();
        }
      ));
    } else {
      _s(box.appendChild(document.createElement('div')),
        'color:rgba(255,255,255,0.38);font-size:12px;text-align:center;margin-bottom:10px;' +
        'padding:10px;border-radius:8px;background:rgba(255,255,255,0.03);border:1px dashed rgba(255,255,255,0.1);')
        .textContent = 'Ожидание игроков…  подключитесь хотя бы вдвоём';
    }

    box.appendChild(_btn('✕  Закрыть комнату',
      'width:100%;padding:10px;font-size:13px;border-radius:10px;' +
      'border:1px solid rgba(255,80,80,0.4);background:rgba(80,10,10,0.5);' +
      'color:#ff6060;cursor:pointer;touch-action:manipulation;',
      function () {
        _stopServer(); _stopPolling(); _stopSync();
        _droid('mpStopAll');
        _role = 'none'; _remote = {}; _lobby = {}; _started = false;
        _rerender();
      }
    ));
  }

  function _buildClient(box) {
    var connected = Object.keys(_lobby).length > 0;
    var statusEl = document.createElement('div');
    statusEl.style.cssText = 'text-align:center;margin-bottom:14px;';
    statusEl.innerHTML = connected
      ? '<div style="color:#44ff88;font-size:13px;">✅ Подключено к комнате</div>'
      : '<div style="color:#ffcc44;font-size:13px;">🔄 Подключение…</div>';
    box.appendChild(statusEl);

    var listWrap = document.createElement('div');
    listWrap.style.cssText = 'margin-bottom:14px;';
    _s(listWrap.appendChild(document.createElement('div')),
      'color:rgba(255,255,255,0.5);font-size:12px;margin-bottom:8px;').textContent = 'Игроки в комнате:';

    var myRow = document.createElement('div');
    myRow.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 8px;background:rgba(255,255,255,0.05);border-radius:7px;margin-bottom:5px;';
    myRow.innerHTML = '<span style="width:10px;height:10px;border-radius:50%;background:' + _myColor + ';flex-shrink:0;display:inline-block;"></span>' +
      '<span style="color:#fff;font-size:13px;flex:1;">' + (_myName || 'Вы') + ' <span style="color:rgba(255,255,255,0.4);font-size:11px;">(Вы)</span></span>';
    listWrap.appendChild(myRow);

    Object.keys(_lobby).forEach(function (id) {
      var p = _lobby[id];
      var row = document.createElement('div');
      row.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 8px;background:rgba(255,255,255,0.05);border-radius:7px;margin-bottom:5px;';
      row.innerHTML = '<span style="width:10px;height:10px;border-radius:50%;background:' + p.color + ';flex-shrink:0;display:inline-block;"></span>' +
        '<span style="color:#fff;font-size:13px;flex:1;">' + p.name + '</span>';
      listWrap.appendChild(row);
    });
    box.appendChild(listWrap);

    _s(box.appendChild(document.createElement('div')),
      'color:rgba(255,255,255,0.38);font-size:12px;text-align:center;margin-bottom:12px;' +
      'padding:8px;border-radius:8px;background:rgba(255,255,255,0.03);')
      .textContent = 'Ожидание старта от хоста…';

    box.appendChild(_btn('✕  Отключиться',
      'width:100%;padding:10px;font-size:13px;border-radius:10px;' +
      'border:1px solid rgba(255,80,80,0.4);background:rgba(80,10,10,0.5);' +
      'color:#ff6060;cursor:pointer;touch-action:manipulation;',
      function () {
        _droid('mpSend', JSON.stringify({type:'leave', id:_myId}));
        _disconnect(); _stopPolling(); _stopSync();
        _role = 'none'; _remote = {}; _lobby = {}; _started = false;
        _rerender();
      }
    ));
  }

  /* ── Floating Wi-Fi button ──────────────────────────────────────────── */
  function _createBtn() {
    if (_mpBtnEl) return;
    _mpBtnEl = document.createElement('button');
    _mpBtnEl.style.cssText =
      'position:fixed;bottom:16px;right:16px;z-index:501;' +
      'background:rgba(0,30,70,0.9);border:2px solid rgba(68,136,255,0.6);' +
      'color:#88ccff;font-family:Arial;font-size:12px;font-weight:bold;' +
      'padding:9px 14px;border-radius:12px;cursor:pointer;' +
      'backdrop-filter:blur(4px);touch-action:manipulation;display:none;';
    _mpBtnEl.addEventListener('pointerdown', function (e) {
      e.stopPropagation();
      _openLobby();
    });
    document.body.appendChild(_mpBtnEl);

    setInterval(function () {
      if (!_mpBtnEl) return;
      var phase = window._gamePhase || 'menu';
      if (phase === 'menu') {
        _mpBtnEl.style.display = '';
        _mpBtnEl.textContent = '🌐 Wi-Fi игра';
        _mpBtnEl.style.padding = '9px 14px';
        _mpBtnEl.style.fontSize = '12px';
        _mpBtnEl.style.bottom = '16px';
      } else if (_role !== 'none') {
        _mpBtnEl.style.display = '';
        var cnt = Object.keys(_remote).length + 1;
        _mpBtnEl.textContent = '🌐 ' + cnt;
        _mpBtnEl.style.padding = '6px 10px';
        _mpBtnEl.style.fontSize = '11px';
        _mpBtnEl.style.bottom = '60px';
      } else {
        _mpBtnEl.style.display = 'none';
      }
    }, 300);
  }

  /* ── Phase watcher ──────────────────────────────────────────────────── */
  function _watchPhase() {
    var prev = window._gamePhase || 'menu';
    setInterval(function () {
      var cur = window._gamePhase || 'menu';
      if (cur === 'playing' && prev !== 'playing' && _started && _role !== 'none') {
        _startSync();
        _ensureOverlay();
      }
      if ((cur === 'menu' || cur === 'dead') && prev === 'playing') {
        _stopSync();
      }
      prev = cur;
    }, 200);
  }

  /* ── Init ────────────────────────────────────────────────────────────── */
  function _init() {
    _myName = localStorage.getItem('diep_mpName') || '';

    if (document.body) {
      _createBtn();
    } else {
      document.addEventListener('DOMContentLoaded', _createBtn);
    }
    _watchPhase();
  }

  _init();

})();
