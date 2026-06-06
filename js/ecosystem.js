/* ============================================================
   Hero — Ступенчатая 3D-пирамида + нейро-точки
   Структура повторяет SVG Group 798:
   3 яруса (пик → средний → широкое основание) с горизонтальными полками
   ============================================================ */
window.__startTree = function () {
  var canvas = document.getElementById('ecoCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches);
  /* Цвета — тёплое золото сайта */
  var G1 = '232,199,154', G2 = '212,165,116', G3 = '168,127,79';
  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var W = 0, H = 0, raf = null;
  var mX = -9999, mY = -9999, time = 0, breath = 0;
  var pts = [];

  function init() {
    var p = canvas.parentElement;
    W = (p ? p.offsetWidth : 0)  || window.innerWidth;
    H = (p ? p.offsetHeight : 0) || window.innerHeight;
    if (W < 50 || H < 50) return false;
    canvas.width  = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildParticles();
    return true;
  }

  function cx() { return W < 700 ? W * 0.95 : W * 0.70; }
  function cy() { return W < 700 ? H * 0.38 : H * 0.47; }
  /* Базовый масштаб пирамиды — на мобайле крупнее */
  function cs() {
    var breathScale = 1 + 0.08 * Math.sin(breath); /* заметнее дышит */
    var base = W < 700
      ? Math.min(W * 0.279, H * 0.52)  /* мобайл: +45% */
      : Math.min(W * 0.090, H * 0.198); /* десктоп −10% */
    return base * breathScale;
  }

  function buildParticles() {
    pts = [];
    var base = Math.min(W * 0.100, H * 0.22);
    var n = Math.round(Math.min(W, H) * 0.075 + 32);
    for (var i = 0; i < n; i++) {
      var ang = Math.random() * Math.PI * 2;
      var rad = base * (1.3 + Math.random() * 1.9);
      pts.push({
        ax: cx() + rad * Math.cos(ang), ay: cy() + rad * Math.sin(ang),
        x: 0, y: 0, vx: 0, vy: 0,
        r: 0.7 + Math.random() * 1.5,
        sp: 0.00138 + Math.random() * 0.0023, /* -10% от предыдущего */
        ang: ang, rad: rad,
        sq: Math.random() < 0.16, tw: Math.random() * Math.PI * 2
      });
    }
    pts.forEach(function(p) { p.x = p.ax; p.y = p.ay; });
  }

  /* ---- Ступенчатая пирамида ---- */
  function drawPyramid() {
    var s   = cs();
    var x   = cx(), y = cy();
    var pul = 0.88 + 0.12 * Math.sin(time * 0.022);

    /* Масштабирование по SVG-пропорциям 230×205 */
    var pw = s * 2.0;        /* полная ширина */
    var ph = pw * 205 / 230; /* высота */
    var ox = x - pw / 2;     /* левый край */
    var oy = y - ph / 2;     /* верхний край */

    var sx = function(v) { return ox + (v / 230) * pw; };
    var sy = function(v) { return oy + (v / 205) * ph; };

    /* Внешнее свечение */
    var gr = ctx.createRadialGradient(x, y + ph * 0.1, 0, x, y, pw * 1.2);
    gr.addColorStop(0,   'rgba(' + G1 + ',' + (0.22 * pul) + ')');
    gr.addColorStop(0.5, 'rgba(' + G2 + ',' + (0.08 * pul) + ')');
    gr.addColorStop(1,   'rgba(' + G2 + ',0)');
    ctx.fillStyle = gr;
    ctx.beginPath(); ctx.arc(x, y, pw * 1.2, 0, Math.PI * 2); ctx.fill();

    /* ЯРУС 1 — треугольный пик */
    var h1 = hoveredTier === 1 ? 1.0 : 0;
    ctx.save();
    ctx.shadowColor = 'rgba(' + G1 + ',' + (pul * (0.8 + h1 * 0.8)) + ')';
    ctx.shadowBlur  = 18 + h1 * 28;
    var g1 = ctx.createLinearGradient(sx(115), sy(2), sx(115), sy(68));
    g1.addColorStop(0,   'rgba(255,240,210,' + Math.min(1, (0.98 + h1 * 0.4) * pul) + ')');
    g1.addColorStop(1,   'rgba(' + G1 + ',' + (0.88 * pul) + ')');
    ctx.fillStyle = g1;
    ctx.beginPath();
    ctx.moveTo(sx(115.868), sy(2.08));
    ctx.lineTo(sx(146.394), sy(55.20));
    ctx.lineTo(sx(82.945),  sy(55.20));
    ctx.closePath(); ctx.fill();
    ctx.restore();

    /* Полка яруса 1 */
    ctx.save();
    ctx.fillStyle = 'rgba(' + G1 + ',' + (0.78 * pul) + ')';
    ctx.fillRect(sx(82.945), sy(55.20), sx(146.394) - sx(82.945), sy(68.18) - sy(55.20));
    ctx.restore();

    /* ЯРУС 2 — средний */
    var h2 = hoveredTier === 2 ? 1.0 : 0;
    ctx.save();
    ctx.shadowColor = 'rgba(' + G1 + ',' + (pul * (0.6 + h2 * 0.8)) + ')';
    ctx.shadowBlur  = 12 + h2 * 28;
    var g2 = ctx.createLinearGradient(sx(115), sy(82), sx(115), sy(124));
    g2.addColorStop(0,   'rgba(255,240,210,' + Math.min(1, (0.92 + h2 * 0.4) * pul) + ')');
    g2.addColorStop(1,   'rgba(' + G1 + ',' + (0.80 * pul) + ')');
    ctx.fillStyle = g2;
    ctx.beginPath();
    ctx.moveTo(sx(163.38),  sy(84.20));
    ctx.lineTo(sx(186.376), sy(124.21));
    ctx.lineTo(sx(43.617),  sy(124.21));
    ctx.lineTo(sx(66.613),  sy(84.20));
    ctx.closePath(); ctx.fill();
    ctx.restore();

    /* Полка яруса 2 */
    ctx.save();
    ctx.fillStyle = 'rgba(' + G2 + ',' + (0.70 * pul) + ')';
    ctx.fillRect(sx(43.617), sy(124.21), sx(186.376) - sx(43.617), sy(132.58) - sy(124.21));
    ctx.restore();

    /* ЯРУС 3 — основание */
    var h3 = hoveredTier === 3 ? 1.0 : 0;
    ctx.save();
    ctx.shadowColor = 'rgba(' + G1 + ',' + (pul * (0.4 + h3 * 0.8)) + ')';
    ctx.shadowBlur  = 8 + h3 * 28;
    var g3 = ctx.createLinearGradient(sx(115), sy(149), sx(115), sy(200));
    g3.addColorStop(0,   'rgba(255,240,210,' + Math.min(1, (0.88 + h3 * 0.4) * pul) + ')');
    g3.addColorStop(1,   'rgba(' + G2 + ',' + (0.72 * pul) + ')');
    ctx.fillStyle = g3;
    ctx.beginPath();
    ctx.moveTo(sx(201.716), sy(150.89));
    ctx.lineTo(sx(230),     sy(200.10));
    ctx.lineTo(sx(0),       sy(200.10));
    ctx.lineTo(sx(28.284),  sy(150.89));
    ctx.closePath(); ctx.fill();
    ctx.restore();

    /* Нижняя полка */
    ctx.save();
    ctx.fillStyle = 'rgba(' + G2 + ',' + (0.60 * pul) + ')';
    ctx.fillRect(sx(0), sy(200.10), pw, sy(204.70) - sy(200.10));
    ctx.restore();

    /* Блик сверху */
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.fillStyle = 'rgba(255,240,200,0.06)';
    ctx.beginPath();
    ctx.moveTo(sx(115.868), sy(2.08));
    ctx.lineTo(sx(146.394), sy(55.20));
    ctx.lineTo(sx(82.945),  sy(55.20));
    ctx.closePath(); ctx.fill();
    ctx.restore();

/* Покори Олимп перенесён в HTML-элемент */
  }

  function frame() {
    try {
    time++; breath += 0.009;
    ctx.clearRect(0, 0, W, H);

    var MR = Math.min(W * 0.18, 160);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      if (!reduce) {
        p.ang += p.sp;
        p.ax = cx() + p.rad * Math.cos(p.ang);
        p.ay = cy() + p.rad * Math.sin(p.ang);
        var dx = mX - p.x, dy = mY - p.y, d = Math.sqrt(dx*dx + dy*dy);
        /* Убегание: частицы разлетаются от курсора */
        if (d < MR && d > 0) { var f = (1-d/MR)*0.12; p.vx -= dx/d*f; p.vy -= dy/d*f; }
        p.vx += (p.ax-p.x)*0.04; p.vy += (p.ay-p.y)*0.04;
        p.vx *= 0.76; p.vy *= 0.76;
        p.x += p.vx; p.y += p.vy;
      }
      var tw = 0.4 + 0.6*(0.5 + 0.5*Math.sin(time*0.04 + p.tw));
      ctx.fillStyle = 'rgba(' + G1 + ',' + (tw*(0.4 + p.x/W*0.5)) + ')';
      if (p.sq) { var ss=p.r*2; ctx.fillRect(p.x-ss/2, p.y-ss/2, ss, ss); }
      else { ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill(); }
    }

    /* Связи */
    var maxD = Math.min(W*0.08, 72);
    for (var i2 = 0; i2 < pts.length; i2++) {
      for (var j = i2+1; j < pts.length; j++) {
        var d2 = Math.hypot(pts[i2].x-pts[j].x, pts[i2].y-pts[j].y);
        if (d2 < maxD) {
          ctx.strokeStyle = 'rgba(' + G2 + ',' + ((1-d2/maxD)*0.11) + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath(); ctx.moveTo(pts[i2].x, pts[i2].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
        }
      }
    }

    /* Определяем ярус под курсором по Y-координате */
    hoveredTier = 0;
    if (mX > -100) {
      var ox2 = cx() - cs()/2 * (230/115);
      var oy2 = cy() - cs()/2 * (205/115);
      var pw2 = cs() * (230/115);
      var ph2 = cs() * (205/115);
      var relY = (mY - oy2) / ph2; /* 0..1 */
      if (relY >= 0.01 && relY < 0.333) hoveredTier = 1;
      else if (relY >= 0.333 && relY < 0.666) hoveredTier = 2;
      else if (relY >= 0.666 && relY < 1.01) hoveredTier = 3;
    }
    drawPyramid();
    } catch(e) { /* keep rAF going */ }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (raf) cancelAnimationFrame(raf);
    if (!init()) { setTimeout(start, 100); return; }
    raf = requestAnimationFrame(frame);
  }

  var hero = canvas.parentElement;
  if (hero) {
    hero.addEventListener('mousemove', function(e) {
      var r = canvas.getBoundingClientRect(); mX = e.clientX-r.left; mY = e.clientY-r.top;
      canvas.style.cursor = hoveredTier > 0 ? 'pointer' : 'default';
    });
    hero.addEventListener('mouseleave', function() { mX=-9999; mY=-9999; hoveredTier=0; canvas.style.cursor='default'; });
  }
  window.addEventListener('resize', function() { if(raf) cancelAnimationFrame(raf); start(); });
  start();
};

(function tryStart(n) {
  var c = document.getElementById('ecoCanvas'), p = c && c.parentElement;
  var w = p ? p.offsetWidth : window.innerWidth;
  var h = p ? p.offsetHeight : window.innerHeight;
  if (w>0 && h>0) window.__startTree();
  else if (n<120) requestAnimationFrame(function() { tryStart(n+1); });
}(0));
