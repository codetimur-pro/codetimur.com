/* ============================================================
   Интерактив экранов 2–6
   ============================================================ */
(function () {
  'use strict';
  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  /* ============================================================
     ЭКРАН 2 — Ядро: авто-вращающаяся дуга (1/3 круга)
     Дуга сама подсвечивает ближайший узел; клик — докрутиться
     ============================================================ */
  (function core() {
    const stage = $('#coreStage');
    const info  = $('#coreInfo');
    if (!stage || !info) return;

    const ICONS = {
      test:   '<path d="M8 3h8M9 3v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V3"/><path d="M7 15h10"/>',
      avatar: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
      path:   '<path d="M4 18 L10 12 L14 15 L20 6"/><path d="M15 6h5v5"/>'
    };
    /* Углы узлов в градусах (0° = правый край, против часовой) */
    const NODES = [
      { id: 'test',   label: 'Тестирование',  target: '#tests',  deg: -90 },
      { id: 'avatar', label: 'Аватар',         target: '#avatar', deg: 30  },
      { id: 'path',   label: 'Путь развития', target: '#paths',  deg: 150 }
    ];

    const R = 37.5; /* % от ширины stage */

    /* DOM-узлы */
    NODES.forEach(n => {
      const rad = n.deg * Math.PI / 180;
      const el = document.createElement('div');
      el.className = 'core-node';
      el.dataset.node = n.id;
      el.style.left = (50 + R * Math.cos(rad)) + '%';
      el.style.top  = (50 + R * Math.sin(rad)) + '%';
      el.innerHTML =
        '<div class="disc"><svg viewBox="0 0 24 24" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">' +
        ICONS[n.id] + '</svg></div><div class="lbl">' + n.label + '</div>';
      stage.appendChild(el);
    });

    /* Заменяем SVG-circle.flow на <path> дугу */
    const flowEl = $('.flow.spin', stage);
    const cx = 200, cy = 200, r = 150;
    const ARC_DEG = 120; /* 1/3 круга */

    /* Рисуем дугу-стрелку через <path> на SVG */
    const svgEl = $('.core__svg', stage);
    /* удаляем старую circle.flow */
    if (flowEl) flowEl.remove();

    const arcPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arcPath.setAttribute('fill', 'none');
    arcPath.setAttribute('stroke', 'rgba(212,165,116,0.85)');
    arcPath.setAttribute('stroke-width', '2');
    arcPath.setAttribute('stroke-linecap', 'round');
    svgEl.appendChild(arcPath);

    /* Стрелочка-наконечник */
    const arrowPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    arrowPath.setAttribute('fill', 'none');
    arrowPath.setAttribute('stroke', 'rgba(212,165,116,0.9)');
    arrowPath.setAttribute('stroke-width', '2');
    arrowPath.setAttribute('stroke-linecap', 'round');
    arrowPath.setAttribute('stroke-linejoin', 'round');
    svgEl.appendChild(arrowPath);

    function arcSVGPath(startDeg, endDeg) {
      const s = startDeg * Math.PI / 180;
      const e = endDeg   * Math.PI / 180;
      const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
      const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
      return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
    }

    function arrowSVGPath(tipDeg) {
      /* Маленький V-наконечник в направлении вращения (по часовой) */
      const tipRad = tipDeg * Math.PI / 180;
      const tx = cx + r * Math.cos(tipRad);
      const ty = cy + r * Math.sin(tipRad);
      /* Касательная в точке дуги — перпендикуляр радиусу */
      const tangentDeg = tipDeg + 90; /* по часовой */
      const tRad = tangentDeg * Math.PI / 180;
      const aw = 8; /* полуширина стрелки */
      const al = 13; /* длина */
      const ax = Math.cos(tRad), ay = Math.sin(tRad);
      const nx = -Math.sin(tRad), ny = Math.cos(tRad); /* нормаль (наружу) */
      const l1x = tx - ax * al - nx * aw, l1y = ty - ay * al - ny * aw;
      const l2x = tx - ax * al + nx * aw, l2y = ty - ay * al + ny * aw;
      return `M ${l1x} ${l1y} L ${tx} ${ty} L ${l2x} ${l2y}`;
    }

    /* Текущий угол "кончика" дуги */
    let currentDeg = -90; /* начало — тестирование */
    let targetDeg  = null; /* если null — авто-вращение */
    let manualMode = false;
    const SPEED = 0.35; /* °/кадр ≈ ~21°/с при 60fps */
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    function nearestNode(deg) {
      /* нормализуем deg в [0,360) */
      const d = ((deg % 360) + 360) % 360;
      let best = null, bestDist = Infinity;
      NODES.forEach(n => {
        const nd = ((n.deg % 360) + 360) % 360;
        const dist = Math.min(Math.abs(d - nd), 360 - Math.abs(d - nd));
        if (dist < bestDist) { bestDist = dist; best = n; }
      });
      return bestDist < 30 ? best : null; /* ±30° */
    }

    function setActive(nodeId) {
      $$('.core-node', stage).forEach(el => el.classList.toggle('on', el.dataset.node === nodeId));
      const ph = $('.ph', info);
      if (ph) ph.style.display = 'none';
      $$('.core__panel', info).forEach(p => p.classList.toggle('on', p.dataset.node === nodeId));
    }

    let lastActive = null;
    function tick() {
      if (!reduce) {
        if (manualMode && targetDeg !== null) {
          /* Плавно крутимся к цели */
          let diff = targetDeg - currentDeg;
          /* Выбираем кратчайший путь по часовой */
          while (diff < 0)   diff += 360;
          while (diff > 360) diff -= 360;
          if (diff > 1) currentDeg += Math.min(diff * 0.08 + 1, SPEED * 3);
          else { currentDeg = targetDeg; targetDeg = null; }
        } else {
          currentDeg += SPEED;
        }
        currentDeg = currentDeg % 360;
      }

      const tipDeg  = currentDeg;
      const tailDeg = currentDeg - ARC_DEG;

      arcPath.setAttribute('d', arcSVGPath(tailDeg, tipDeg));
      arrowPath.setAttribute('d', arrowSVGPath(tipDeg));

      /* Подсветка */
      const active = nearestNode(tipDeg);
      const activeId = active ? active.id : null;
      if (activeId !== lastActive) {
        lastActive = activeId;
        if (activeId) setActive(activeId);
      }

      requestAnimationFrame(tick);
    }

    /* Первый узел сразу активен */
    setActive('test');
    if (reduce) {
      arcPath.setAttribute('d', arcSVGPath(-210, -90));
      arrowPath.setAttribute('d', arrowSVGPath(-90));
    } else {
      requestAnimationFrame(tick);
    }

    /* Клик по узлу — докрутиться до него */
    $$('.core-node', stage).forEach(el => {
      el.addEventListener('click', () => {
        const n = NODES.find(x => x.id === el.dataset.node);
        if (!n) return;
        if (el.classList.contains('on')) { return; } /* клик на активный — ничего */
        manualMode = true;
        targetDeg  = n.deg;
        setActive(n.id);
      });
    });

    /* Клик на подсказку внутри панели */
    $$('.core__panel .jump', info).forEach(b =>
      b.addEventListener('click', () => smoothScroll(b.dataset.jump)));
  })();

  /* ============================================================
     ЭКРАН 3 — flip-карточки
     ============================================================ */
  $$('.flip').forEach(card => {
    const toggle = () => card.classList.toggle('on');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  /* ============================================================
     ЭКРАН 4 — Три вложенных треугольника
     Клик по центру или треугольнику → цикл 1→2→3→1
     Частицы медленно вытекают из центра наружу
     ============================================================ */
  (function avatar() {
    const panel    = $('#avatarPanel');
    const triL     = $('#avTriL');   /* большой — уровень 3 */
    const triM     = $('#avTriM');   /* средний — уровень 1 */
    const triS     = $('#avTriS');   /* малый   — уровень 2 */
    const avCanvas = $('#avCanvas');
    if (!panel) return;

    const triMap = { 1: triS, 2: triM, 3: triL };
    let cur = 1;
    let autoTimer = null;
    let userInteracted = false;

    function setLevel(lvl, byUser) {
      cur = lvl;
      [triL, triM, triS].forEach(t => { if (t) t.classList.remove('av-tri--active'); });
      const active = triMap[lvl];
      if (active) active.classList.add('av-tri--active');
      $$('.avatar__level', panel).forEach(p => p.classList.toggle('on', +p.dataset.level === lvl));
      /* Синхронизируем кнопки уровней */
      $$('.avlev-btn').forEach(b => b.classList.toggle('on', +b.dataset.avlev === lvl));
      if (byUser) {
        userInteracted = true;
        if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
      }
    }

    /* Автопрокрутка: 1 → 2 → 3, потом стоп — запускается когда экран виден */
    function scheduleAuto() {
      if (userInteracted) return;
      autoTimer = setTimeout(() => {
        if (userInteracted) return;
        const next = cur < 3 ? cur + 1 : null;
        if (next) { setLevel(next, false); scheduleAuto(); }
      }, 3000);
    }

    const avatarSection = document.getElementById('avatar');
    if (avatarSection) {
      new IntersectionObserver((es, obs) => {
        es.forEach(e => {
          if (e.isIntersecting && !userInteracted) {
            scheduleAuto();
            obs.disconnect();
          }
        });
      }, { threshold: 0.3 }).observe(avatarSection);
    }

    /* Клик по треугольникам или по всей рамке */
    [triL, triM, triS].forEach(t => {
      if (t) t.addEventListener('click', (e) => { e.stopPropagation(); setLevel(+t.dataset.level, true); });
    });
    const frame = document.getElementById('avatarBlock');
    if (frame) frame.addEventListener('click', () => setLevel(cur === 3 ? 1 : cur + 1, true));
    /* Кнопки уровней */
    $$('.avlev-btn').forEach(b => {
      b.addEventListener('click', (e) => { e.stopPropagation(); setLevel(+b.dataset.avlev, true); });
    });
    setLevel(1, false);

    /* Частицы из центра наружу */
    if (!avCanvas) return;
    const ctx2 = avCanvas.getContext('2d');
    const reduce2 = matchMedia('(prefers-reduced-motion:reduce)').matches;
    let avW = 0, avH = 0, avPts = [];
    const GOLD2 = '232,199,154';

    function avResize() {
      const fr = avCanvas.parentElement;
      avW = fr.offsetWidth; avH = fr.offsetHeight;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      avCanvas.width  = Math.round(avW * dpr);
      avCanvas.height = Math.round(avH * dpr);
      ctx2.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function newStar() {
      const ang = Math.random() * Math.PI * 2;
      const spd = 0.2 + Math.random() * 0.55;
      /* Центр маленького треугольника: SVG (200,202) из viewBox 0 0 400 316 */
      return { x: avW * 0.5, y: avH * 0.640,
        vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd,
        r: 0.5 + Math.random() * 1.1,
        life: 0, max: 110 + Math.random() * 130 };
    }

    function avFrame() {
      ctx2.clearRect(0, 0, avW, avH);
      if (!reduce2) {
        while (avPts.length < 28) avPts.push(newStar());
        avPts = avPts.filter(p => {
          p.x += p.vx; p.y += p.vy; p.life++;
          if (p.life > p.max) return false;
          const a = Math.sin((p.life / p.max) * Math.PI) * 0.7;
          ctx2.fillStyle = 'rgba(' + GOLD2 + ',' + a + ')';
          ctx2.beginPath(); ctx2.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx2.fill();
          return true;
        });
      }
      requestAnimationFrame(avFrame);
    }

    new IntersectionObserver((es, obs) => {
      es.forEach(e => { if (e.isIntersecting) { avResize(); avFrame(); obs.disconnect(); } });
    }, { threshold: 0.2 }).observe(avCanvas.parentElement);
    window.addEventListener('resize', avResize);
  })();

  /* ============================================================
     ЭКРАН 5 — Три пути развития
     ============================================================ */
  (function paths() {
    const grid    = $('#pathGrid');
    const block   = $('#pathsBlock');
    const linesEl = $('#pathLines');
    if (!grid || !block || !linesEl) return;

    /* Строим 9 круглых узлов (3×3) */
    const nodes = [];
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const el = document.createElement('div');
        el.className = 'pnode';
        el.dataset.r = r; el.dataset.c = c;
        grid.appendChild(el);
        nodes.push(el);
      }
    }
    const at = (r, c) => nodes[r * 3 + c];

    /* Центр узла в процентах относительно grid3 */
    function center(el) {
      const gr = grid.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      return {
        x: (er.left - gr.left + er.width  / 2) / gr.width  * 100,
        y: (er.top  - gr.top  + er.height / 2) / gr.height * 100
      };
    }

    let timer = null;
    function clearAnim() {
      if (timer) clearTimeout(timer);
      nodes.forEach(n => { n.classList.remove('lit'); n.removeAttribute('data-num'); });
      linesEl.innerHTML = '';
      $$('.pd-cols span, .pd-rows span', block).forEach(s => {
        s.classList.remove('on', 'hide');
      });
    }

    function line(a, b) {
      const pa = center(a), pb = center(b);
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      el.setAttribute('x1', pa.x); el.setAttribute('y1', pa.y);
      el.setAttribute('x2', pb.x); el.setAttribute('y2', pb.y);
      el.setAttribute('vector-effect', 'non-scaling-stroke');
      linesEl.appendChild(el);
    }

    /* Арроу-маркеры (вертикальные) для мастерства */
    function arrowDown(n) {
      const { x, y } = center(n);
      const offY = 8; /* смещение наконечника от центра вниз */
      const w = 5;
      const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      el.setAttribute('d', `M ${x - w} ${y + offY - 5} L ${x} ${y + offY + 4} L ${x + w} ${y + offY - 5}`);
      el.setAttribute('fill', 'none');
      el.setAttribute('vector-effect', 'non-scaling-stroke');
      el.setAttribute('stroke', 'rgba(212,165,116,0.9)');
      el.setAttribute('stroke-width', '2');
      el.setAttribute('stroke-linecap', 'round');
      el.setAttribute('stroke-linejoin', 'round');
      linesEl.appendChild(el);
    }

    function run(type) {
      clearAnim();

      if (type === 'evo') {
        /* Путь образования — змейка через все 9 узлов, без линий */
        $$('.pd-rows span', block).forEach(s => s.classList.add('on'));
        $$('.pd-cols span', block).forEach(s => s.classList.add('on'));
        const seq = [
          [0,0],[0,1],[0,2],
          [1,2],[1,1],[1,0],
          [2,0],[2,1],[2,2]
        ];
        let i = 0;
        const stepEvo = () => {
          if (i >= seq.length) return;
          const n = at(seq[i][0], seq[i][1]);
          n.dataset.num = i + 1;
          n.classList.add('lit');
          i++;
          timer = setTimeout(stepEvo, 185);
        };
        stepEvo();

      } else if (type === 'master') {
        /* Путь мастерства — центральный столбец, без линий */
        $$('.pd-cols span', block).forEach((s, idx) => {
          if (idx === 1) s.classList.add('on');
          else           s.classList.add('hide');
        });
        $$('.pd-rows span', block).forEach(s => s.classList.add('on'));
        const seq = [[0,1],[1,1],[2,1]];
        let i = 0;
        const stepMst = () => {
          if (i >= seq.length) return;
          const n = at(seq[i][0], seq[i][1]);
          n.dataset.num = i + 1;
          n.classList.add('lit');
          i++;
          timer = setTimeout(stepMst, 230);
        };
        stepMst();

      } else {
        /* Персональный путь — без линий, все колонки видны
           Ряд 0: узлы 1 и 3 (col 0, col 2)
           Ряд 1: узлы 2 и 3 (col 1, col 2)
           Ряд 2: узлы 1 и 3 (col 0, col 2) */
        $$('.pd-rows span', block).forEach(s => s.classList.add('on'));
        $$('.pd-cols span', block).forEach(s => s.classList.add('on'));
        const nodeSeq = [[0,0],[0,2],[1,1],[1,2],[2,0],[2,2]];
        let ni = 0;
        const stepNode = () => {
          if (ni >= nodeSeq.length) return;
          const n = at(nodeSeq[ni][0], nodeSeq[ni][1]);
          n.dataset.num = ni + 1;
          n.classList.add('lit');
          ni++;
          timer = setTimeout(stepNode, 130);
        };
        stepNode();
      }
    }

    /* Только клик — hover убран */
    let pathUserClicked = false;
    let pathAutoTimer   = null;
    const pathOrder     = ['evo', 'master', 'person'];
    let pathAutoIdx     = 0;

    function activatePath(type, byUser) {
      $$('.pathbtn', block).forEach(o => o.classList.remove('on'));
      const btn = block.querySelector('[data-path="' + type + '"]');
      if (btn) btn.classList.add('on');
      run(type);
      if (byUser) {
        pathUserClicked = true;
        if (pathAutoTimer) clearTimeout(pathAutoTimer);
      }
    }

    function schedulePathAuto() {
      if (pathUserClicked) return;
      pathAutoTimer = setTimeout(() => {
        if (pathUserClicked) return;
        pathAutoIdx = (pathAutoIdx + 1) % pathOrder.length;
        activatePath(pathOrder[pathAutoIdx], false);
        schedulePathAuto();
      }, 3000);
    }

    $$('.pathbtn', block).forEach(b => {
      b.addEventListener('click', () => activatePath(b.dataset.path, true));
    });

    let started = false;
    new IntersectionObserver((es, obs) => {
      es.forEach(e => {
        if (e.isIntersecting && !started) {
          started = true;
          /* Задержка, чтобы узлы успели отрисоваться и getBCR дал правильные координаты */
          setTimeout(() => {
            activatePath('evo', false);
            schedulePathAuto();
          }, 300);
          obs.disconnect();
        }
      });
    }, { threshold: 0.3 }).observe(block);
  })();

  /* ============================================================
     ЭКРАН 6 — Окружение
     Авто-переключение: peers→mentors→leaders (по 3 сек),
     только когда секция в viewport; ручной клик останавливает авто
     ============================================================ */
  (function env() {
    const svg     = $('#envSvg');
    if (!svg) return;
    const group   = $('#envParticles');
    const circles = { peers: $('#ecInner'), mentors: $('#ecMid'), leaders: $('#ecOuter') };
    const radii   = { peers: 62, mentors: 120, leaders: 180 };
    const btns    = $$('.envbtn');
    let mode      = 'peers';
    const reduce  = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const SEQ     = ['peers', 'mentors', 'leaders'];
    let autoIdx   = 0, autoTimer = null, autoActive = false, autoDone = false;

    const N = 26;
    const parts = [];
    for (let i = 0; i < N; i++) {
      const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('r', 1.6); c.setAttribute('class', 'env__particle');
      group.appendChild(c);
      parts.push({ el: c, ang: Math.random() * Math.PI * 2, sp: 0.2 + Math.random() * 0.5, off: Math.random() });
    }

    function setMode(m) {
      mode = m;
      Object.entries(circles).forEach(([k, c]) => c.classList.toggle('active', k === m));
      btns.forEach(b => {
        b.classList.toggle('on', b.dataset.ring === m);
        const d = b.querySelector('.d');
        if (d) d.style.display = b.dataset.ring === m ? '' : 'none';
      });
    }
    /* Инициализация: скрыть все .d кроме первого */
    btns.forEach(b => {
      const d = b.querySelector('.d');
      if (d) d.style.display = b.classList.contains('on') ? '' : 'none';
    });

    function autoStep() {
      if (autoDone) return;
      autoIdx++;
      if (autoIdx >= SEQ.length) { autoDone = true; autoActive = false; return; }
      setMode(SEQ[autoIdx]);
      if (autoIdx < SEQ.length - 1) autoTimer = setTimeout(autoStep, 3000);
      else autoDone = true;
    }

    function startAuto() {
      if (autoActive || autoDone) return;
      autoActive = true;
      autoTimer  = setTimeout(autoStep, 3000);
    }

    function stopAuto() {
      autoDone = true;
      if (autoTimer) clearTimeout(autoTimer);
    }

    /* Ручные клики — останавливают авто */
    btns.forEach(b => b.addEventListener('click', () => { stopAuto(); setMode(b.dataset.ring); }));
    Object.entries(circles).forEach(([k, c]) => c.addEventListener('click', () => { stopAuto(); setMode(k); }));

    /* Запуск авто только когда секция в видимой зоне */
    const envSection = document.getElementById('env');
    if (envSection) {
      new IntersectionObserver((es) => {
        es.forEach(e => { if (e.isIntersecting) startAuto(); });
      }, { threshold: 0.3 }).observe(envSection);
    }

    let t = 0;
    function frame() {
      t += 0.016;
      const R = radii[mode];
      parts.forEach((p, i) => {
        p.ang += p.sp * 0.01;
        let r;
        if (mode === 'mentors')      { const ph = (t * 0.25 + p.off) % 1; r = R * (1 - ph); }
        else if (mode === 'leaders') { const ph = (t * 0.25 + p.off) % 1; r = R * (1 + ph * 0.18); }
        else                         { r = R + Math.sin(t + i) * 4; }
        p.el.setAttribute('cx', 200 + r * Math.cos(p.ang));
        p.el.setAttribute('cy', 200 + r * Math.sin(p.ang));
        const fade = mode === 'mentors' ? r / R : mode === 'leaders' ? 1 - (r - R) / (R * 0.18) : 0.8;
        p.el.style.opacity = Math.max(0.1, Math.min(0.9, fade));
      });
      if (!reduce) requestAnimationFrame(frame);
    }
    setMode('peers');
    if (reduce) frame(); else requestAnimationFrame(frame);
  })();

  /* ---- утилита smooth scroll ---- */
  function smoothScroll(sel) {
    const el = document.querySelector(sel);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + pageYOffset - 64, behavior: 'smooth' });
  }
  window.__smoothScroll = smoothScroll;
})();
