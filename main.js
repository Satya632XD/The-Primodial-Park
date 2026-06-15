/* ═══════════════════════════════════════
   PRIMORDIAL PARK — main.js
   Init, game loop, pan/zoom, fullscreen
   ═══════════════════════════════════════ */

// ── LOADING ──
const LOAD_MSGS = [
  'Sequencing DNA...','Excavating fossils...','Building habitats...',
  'Training raptors...','Cloning specimens...','Opening park gates...'
];

function runLoading(){
  let pct = 0, msgIdx = 0;
  const fill = document.getElementById('ld-fill');
  const txt  = document.getElementById('ld-txt');
  const iv = setInterval(() => {
    pct += Math.random() * 18 + 5;
    if(pct > 100) pct = 100;
    if(fill) fill.style.width = pct + '%';
    msgIdx = Math.floor((pct/100)*LOAD_MSGS.length);
    if(txt) txt.textContent = LOAD_MSGS[Math.min(msgIdx, LOAD_MSGS.length-1)];
    if(pct >= 100){
      clearInterval(iv);
      setTimeout(startGame, 400);
    }
  }, 150);
}

function startGame(){
  const ls = document.getElementById('loading-screen');
  const gm = document.getElementById('game');
  if(ls) ls.style.display = 'none';
  if(gm) gm.style.display = 'flex';

  Engine.load();
  UI.refreshHUD();
  buildGrid();
  UI.renderPark();

  // Give starter dino if first time
  const s = Engine.get();
  if(s.placedItems.length === 0 && Object.keys(s.ownedDinos).length === 0){
    // Auto-buy a Velociraptor for new players
    s.ownedDinos['velociraptor'] = 1;
    Engine.save();
    UI.toast('🦖 Welcome! Your first Velociraptor is ready to place!', 'dna');
    setTimeout(() => {
      UI.openShop('dinos');
    }, 800);
  }

  setupPanZoom();
  startGameLoop();
}

// ── BUILD GRID ──
function buildGrid(){
  const COLS = 22, ROWS = 15;
  document.documentElement.style.setProperty('--cols', COLS);
  document.documentElement.style.setProperty('--rows', ROWS);
  UI.renderPark();
}

// ── GAME LOOP (every second) ──
function startGameLoop(){
  setInterval(() => {
    UI.renderPark();
  }, 4000); // refresh every 4s for timer display
}

// ── GLOBAL CANCEL PLACEMENT ──
function cancelPlace(){
  UI.cancelPlace();
}

// ── FULLSCREEN ──
function toggleFS(){
  const el = document.documentElement;
  if(!document.fullscreenElement && !document.webkitFullscreenElement){
    (el.requestFullscreen || el.webkitRequestFullscreen || el.mozRequestFullScreen || el.msRequestFullscreen || function(){}).call(el);
    document.getElementById('fs-btn').textContent = '⊠';
  } else {
    (document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen || function(){}).call(document);
    document.getElementById('fs-btn').textContent = '⛶';
  }
}

// ── PAN & ZOOM ──
function setupPanZoom(){
  const vp    = document.getElementById('park-vp');
  const world = document.getElementById('park-world');
  if(!vp || !world) return;

  let scale = 1, ox = 0, oy = 0;
  let dragging = false, lastX = 0, lastY = 0;
  let pinchDist = 0;

  const TILE_PX = 86 + 2;
  const COLS = 22, ROWS = 15;
  const worldW = COLS * TILE_PX + 8;
  const worldH = ROWS * TILE_PX + 8;

  function clamp(val, mn, mx){ return Math.max(mn, Math.min(mx, val)); }

  function applyTransform(){
    const vpW = vp.offsetWidth, vpH = vp.offsetHeight;
    const maxOx = 0, minOx = -(worldW * scale - vpW);
    const maxOy = 0, minOy = -(worldH * scale - vpH);
    ox = clamp(ox, minOx < 0 ? minOx : 0, maxOx);
    oy = clamp(oy, minOy < 0 ? minOy : 0, maxOy);
    world.style.transform = `translate(${ox}px,${oy}px) scale(${scale})`;
  }

  // Initial center
  setTimeout(() => {
    const vpW = vp.offsetWidth, vpH = vp.offsetHeight;
    ox = (vpW - worldW * scale) / 2;
    oy = (vpH - worldH * scale) / 2;
    applyTransform();
  }, 100);

  // Mouse drag
  vp.addEventListener('mousedown', e => {
    if(e.target.tagName==='BUTTON'||e.target.classList.contains('p-col')) return;
    dragging = true; lastX = e.clientX; lastY = e.clientY;
    vp.classList.add('drag');
  });
  window.addEventListener('mousemove', e => {
    if(!dragging) return;
    ox += e.clientX - lastX; oy += e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    applyTransform();
  });
  window.addEventListener('mouseup', () => { dragging = false; vp.classList.remove('drag'); });

  // Touch drag
  vp.addEventListener('touchstart', e => {
    if(e.touches.length === 1){
      dragging = true;
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
    } else if(e.touches.length === 2){
      dragging = false;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      pinchDist = Math.hypot(dx, dy);
    }
  }, {passive:true});

  vp.addEventListener('touchmove', e => {
    if(e.touches.length === 1 && dragging){
      ox += e.touches[0].clientX - lastX;
      oy += e.touches[0].clientY - lastY;
      lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
      applyTransform();
    } else if(e.touches.length === 2){
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const newDist = Math.hypot(dx, dy);
      const delta = newDist / pinchDist;
      scale = clamp(scale * delta, 0.4, 2.5);
      pinchDist = newDist;
      applyTransform();
    }
  }, {passive:true});

  vp.addEventListener('touchend', () => { dragging = false; });

  // Scroll wheel zoom
  vp.addEventListener('wheel', e => {
    e.preventDefault();
    const rect = vp.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const prevScale = scale;
    scale = clamp(scale * (e.deltaY < 0 ? 1.1 : 0.9), 0.35, 2.8);
    const ds = scale - prevScale;
    ox -= mx * ds / prevScale;
    oy -= my * ds / prevScale;
    applyTransform();
  }, {passive:false});

  // Minimap click to navigate
  const minimap = document.getElementById('minimap');
  if(minimap){
    minimap.addEventListener('click', e => {
      const rect = minimap.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / minimap.width;
      const my = (e.clientY - rect.top) / minimap.height;
      const vpW = vp.offsetWidth, vpH = vp.offsetHeight;
      ox = -(mx * worldW * scale - vpW / 2);
      oy = -(my * worldH * scale - vpH / 2);
      applyTransform();
    });
  }
}

// ── AUTO-SAVE every 30s ──
setInterval(() => { try{ Engine.save(); }catch(e){} }, 30000);

// ── INIT ──
window.addEventListener('DOMContentLoaded', () => {
  runLoading();
});

// Expose Battle.fightTurn globally for inline HTML
window.Battle = Battle;
window.UI = UI;
window.Engine = Engine;
     
