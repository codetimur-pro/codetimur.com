/* ============================================================
   Экран 7 — Созвездие возможностей
   Гора + звёздное небо + 29 звёзд-проектов
   Фиксы: координаты тултипа, клик-закрепление, мерцание, метеоры
   ============================================================ */
(function () {
  'use strict';

  const canvas = document.getElementById('svcCanvas');
  if (!canvas) return;
  const ctx   = canvas.getContext('2d');
  const tip   = document.getElementById('svcTip');
  const cloud = document.getElementById('svcCloud');
  if (!ctx || !tip || !cloud) return;

  const DPR  = Math.min(devicePixelRatio || 1, 2);
  const GL   = '232,199,154'; // gold-light
  const GOLD = '212,165,116'; // gold
  const SNOW = '255,248,235'; // near-white

  const CAT_LABEL = { base: 'Базовый', deep: 'Глубинный', social: 'Социальный' };

  /* ---- Проекты ---- */
  const STARS = [
    { id:'psy',      cat:'deep',   name:'Психосоматика',         desc:'Поиск причин болезней через авторскую систему',                      x:.09, y:.30 },
    { id:'type',     cat:'deep',   name:'Психотип',              desc:'Анализ архетипа и устройства личности',                               x:.20, y:.13 },
    { id:'gen',      cat:'deep',   name:'Генетика',              desc:'Чтение Аватара через систему генных ключей',                          x:.50, y:.07 },
    { id:'emo',      cat:'deep',   name:'Управление эмоциями',   desc:'Выявление и экологичная проработка базовых эмоций',                   x:.68, y:.11 },
    { id:'mind',     cat:'deep',   name:'Мышление',              desc:'Перепрошивка подсознания в сфере денег, отношений и здоровья',        x:.85, y:.15 },
    { id:'root',     cat:'deep',   name:'Первопричина',          desc:'Устранение глубинных травм детства, рода и прошлых жизней',           x:.13, y:.20 },
    { id:'mirror',   cat:'deep',   name:'Зеркала',               desc:'Глубокая проработка личности через отражение в окружении',            x:.36, y:.10 },
    { id:'medit',    cat:'deep',   name:'Медитации-путешествия', desc:'Терапия под конкретный запрос с погружением в сюжет',                 x:.60, y:.20 },
    { id:'vip',      cat:'deep',   name:'Випассана',             desc:'Развитие концентрации, чувствительности и жизни в моменте',           x:.93, y:.27 },
    { id:'chan',     cat:'deep',   name:'Центры и каналы',       desc:'Работа с энергетической архитектурой тела',                           x:.78, y:.30 },
    { id:'test',     cat:'base',   name:'Тестирование',          desc:'Анализ и формирование твоего персонального пути',                     x:.28, y:.24 },
    { id:'pick',     cat:'base',   name:'Подбор',                desc:'Индивидуальная настройка привычек, спорта и практик',                 x:.43, y:.16 },
    { id:'abil',     cat:'base',   name:'Развитие способностей', desc:'Трекинг регулярности и фокус на стратегии',                           x:.16, y:.38 },
    { id:'vis',      cat:'base',   name:'Видение',               desc:'Формирование карты истинных желаний',                                  x:.55, y:.13 },
    { id:'foc',      cat:'base',   name:'Фокус',                 desc:'Стратегия достижения целей и внедрения привычек',                     x:.34, y:.33 },
    { id:'flow',     cat:'base',   name:'Поток',                 desc:'Развитие личной эффективности и дисциплины',                          x:.47, y:.28 },
    { id:'diary',    cat:'base',   name:'Дневник осознанности',  desc:'Инсайты, отчёты и осознанные наблюдения',                             x:.06, y:.13 },
    { id:'supp',     cat:'base',   name:'Внутренняя опора',      desc:'Выявление скрытых точек опоры в жизни',                               x:.64, y:.31 },
    { id:'val',      cat:'base',   name:'Ценности',              desc:'Определение приоритетов и истинных ценностей',                        x:.40, y:.40 },
    { id:'princ',    cat:'base',   name:'Принципы',              desc:'Создание правил жизни с опорой на ценности',                          x:.72, y:.21 },
    { id:'badi',     cat:'social', name:'Бади',                  desc:'Подбор партнёров по интересам, спорту и путешествиям',                x:.24, y:.18 },
    { id:'union',    cat:'social', name:'Союзы',                 desc:'Алгоритмы создания счастливых и крепких отношений',                   x:.30, y:.08 },
    { id:'hr',       cat:'social', name:'HR-система',            desc:'Поиск идеальных сотрудников и бизнес-партнёров',                      x:.52, y:.38 },
    { id:'prof',     cat:'social', name:'Профессии будущего',    desc:'Обучение специальностям ментора, трекера и эксперта',                 x:.66, y:.40 },
    { id:'mnet',     cat:'social', name:'Сеть наставников',      desc:'Подбор проводников с максимальной совместимостью',                    x:.80, y:.41 },
    { id:'exp',      cat:'social', name:'Платформа экспертов',   desc:'Инструменты для создания контента и продвижения',                     x:.88, y:.36 },
    { id:'mission',  cat:'social', name:'Единая миссия',         desc:'Объединение целей лидеров в глобальную миссию',                      x:.45, y:.06 },
    { id:'clubs',    cat:'social', name:'Клубы',                 desc:'Формирование лояльного окружения, команды и последователей',           x:.94, y:.13 },
    { id:'platform', cat:'social', name:'Платформа',             desc:'IT-инфраструктура для управления стартапами и корпорациями',           x:.10, y:.42 },
  ];

  /* ---- Декоративные фоновые звёзды ---- */
  let bgStars = [];

  /* ---- Метеоры ---- */
  let meteors      = [];
  let nextMeteorAt = 200;

  let W = 0, H = 0;
  let activeFilter = 'all';
  let hovered      = null;
  let pinnedStar   = null;
  let time         = 0;
  const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches);

  /* ================================================================
     resize — используем clientWidth чтобы координаты рисования
     точно совпадали с CSS-пикселями (не включая бордер)
     ================================================================ */
  function resize() {
    W = cloud.clientWidth  || cloud.offsetWidth;
    H = cloud.clientHeight || cloud.offsetHeight;
    if (W < 10 || H < 10) return;
    canvas.width  = Math.round(W * DPR);
    canvas.height = Math.round(H * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    buildBgStars();
  }

  function buildBgStars() {
    bgStars = [];
    const n = Math.max(28, Math.round(W * H / 5500));
    for (let i = 0; i < n; i++) {
      const bright = Math.random();
      bgStars.push({
        x:     Math.random() * W,
        y:     Math.random() * H * 0.58,
        r:     bright < 0.06 ? 1.1 + Math.random() * 0.5 : 0.3 + Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        freq:  0.012 + Math.random() * 0.022,
        peak:  0.22 + Math.random() * 0.52,
        isBig: bright < 0.06,
      });
    }
  }

  function sx(s) { return s.x * W; }
  function sy(s) { return s.y * H; }
  function isActive(s) { return activeFilter === 'all' || s.cat === activeFilter; }

  /* ================================================================
     Фон: небо + декоративные звёзды + горы
     ================================================================ */
  function drawBg() {
    /* Небо */
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0,    '#020109');
    sky.addColorStop(0.38, '#060513');
    sky.addColorStop(0.70, '#08070e');
    sky.addColorStop(1,    '#0d0c10');
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    /* Мягкий свет горизонта */
    const glow = ctx.createLinearGradient(0, H * 0.50, 0, H * 0.80);
    glow.addColorStop(0,   'rgba(' + GOLD + ',0)');
    glow.addColorStop(0.5, 'rgba(' + GOLD + ',0.025)');
    glow.addColorStop(1,   'rgba(' + GOLD + ',0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, H * 0.50, W, H * 0.30);

    /* Декоративные фоновые звёзды (не интерактивные) */
    for (let i = 0; i < bgStars.length; i++) {
      const s  = bgStars[i];
      const tw = reduce ? s.peak : s.peak * (0.38 + 0.62 * Math.sin(time * s.freq + s.phase));
      if (s.isBig) {
        const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 7);
        gr.addColorStop(0, 'rgba(' + GL + ',' + (tw * 0.28) + ')');
        gr.addColorStop(1, 'rgba(' + GL + ',0)');
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 7, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = 'rgba(' + SNOW + ',' + tw + ')';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
    }

    /* Дальний хребет */
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(0,         H * 0.76);
    ctx.lineTo(W * 0.10,  H * 0.66);
    ctx.lineTo(W * 0.22,  H * 0.58);
    ctx.lineTo(W * 0.36,  H * 0.66);
    ctx.lineTo(W * 0.50,  H * 0.56);
    ctx.lineTo(W * 0.63,  H * 0.62);
    ctx.lineTo(W * 0.76,  H * 0.54);
    ctx.lineTo(W * 0.88,  H * 0.62);
    ctx.lineTo(W,         H * 0.70);
    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fillStyle = 'rgba(12,11,18,0.88)';
    ctx.fill();
    ctx.restore();

    /* Контур дальнего хребта — лёгкие очертания */
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0,         H * 0.76);
    ctx.lineTo(W * 0.10,  H * 0.66);
    ctx.lineTo(W * 0.22,  H * 0.58);
    ctx.lineTo(W * 0.36,  H * 0.66);
    ctx.lineTo(W * 0.50,  H * 0.56);
    ctx.lineTo(W * 0.63,  H * 0.62);
    ctx.lineTo(W * 0.76,  H * 0.54);
    ctx.lineTo(W * 0.88,  H * 0.62);
    ctx.lineTo(W,         H * 0.70);
    ctx.strokeStyle = 'rgba(' + GL + ',0.11)';
    ctx.lineWidth   = 1.2;
    ctx.shadowColor = 'rgba(' + GL + ',0.08)';
    ctx.shadowBlur  = 6;
    ctx.stroke();
    ctx.restore();

    /* Главная гора — плавные безье-кривые */
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(W * 0.08, H * 0.84);
    ctx.quadraticCurveTo(W * 0.20, H * 0.70, W * 0.36, H * 0.58);
    ctx.lineTo(W * 0.52, H * 0.40); /* острая вершина */
    ctx.lineTo(W * 0.68, H * 0.58);
    ctx.quadraticCurveTo(W * 0.82, H * 0.73, W * 0.93, H * 0.84);
    ctx.lineTo(W, H * 0.88);
    ctx.lineTo(W, H);
    ctx.closePath();
    const mGrad = ctx.createLinearGradient(W * 0.52, H * 0.45, W * 0.52, H);
    mGrad.addColorStop(0,    '#1a1723');
    mGrad.addColorStop(0.28, '#13111a');
    mGrad.addColorStop(0.68, '#0f0e15');
    mGrad.addColorStop(1,    '#0c0b10');
    ctx.fillStyle = mGrad;
    ctx.fill();
    ctx.restore();

    /* Контур гребня со свечением */
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(W * 0.08,  H * 0.84);
    ctx.quadraticCurveTo(W * 0.20, H * 0.70, W * 0.36, H * 0.58);
    ctx.lineTo(W * 0.52, H * 0.40);
    ctx.lineTo(W * 0.68, H * 0.58);
    ctx.quadraticCurveTo(W * 0.82, H * 0.73, W * 0.93, H * 0.84);
    ctx.strokeStyle = 'rgba(' + GL + ',0.11)';
    ctx.lineWidth   = 1.5;
    ctx.shadowColor = 'rgba(' + GL + ',0.16)';
    ctx.shadowBlur  = 10;
    ctx.stroke();
    ctx.restore();

    /* Блик на пике */
    const pkX = W * 0.52, pkY = H * 0.40;
    const pkGr = ctx.createRadialGradient(pkX, pkY, 0, pkX, pkY, H * 0.11);
    pkGr.addColorStop(0,   'rgba(' + SNOW + ',0.16)');
    pkGr.addColorStop(0.2, 'rgba(' + GL   + ',0.06)');
    pkGr.addColorStop(1,   'rgba(' + GL   + ',0)');
    ctx.save();
    ctx.fillStyle = pkGr;
    ctx.beginPath(); ctx.arc(pkX, pkY, H * 0.11, 0, Math.PI * 2); ctx.fill();
    ctx.restore();

    /* Туман у подножия */
    const fog = ctx.createLinearGradient(0, H * 0.70, 0, H);
    fog.addColorStop(0,   'rgba(4,3,8,0)');
    fog.addColorStop(0.4, 'rgba(4,3,8,0.20)');
    fog.addColorStop(1,   'rgba(4,3,8,0.80)');
    ctx.fillStyle = fog;
    ctx.fillRect(0, H * 0.70, W, H * 0.30);
  }

  /* ================================================================
     Метеоры
     ================================================================ */
  function spawnMeteor() {
    const angle = Math.PI * (0.52 + Math.random() * 0.36);
    const speed = (9 + Math.random() * 14) * 0.80; /* −20% */
    meteors.push({
      x:     W * (0.28 + Math.random() * 0.72),
      y:     H * Math.random() * 0.32,
      vx:   -Math.cos(angle) * speed,
      vy:    Math.sin(angle) * speed,
      len:   80 + Math.random() * 130,
      life:  1.0,
      decay: (0.020 + Math.random() * 0.024) * 0.80, /* −20% */
    });

  }

  function drawMeteors() {
    for (let i = meteors.length - 1; i >= 0; i--) {
      const m   = meteors[i];
      const spd = Math.hypot(m.vx, m.vy);
      const tx  = m.x - (m.vx / spd) * m.len;
      const ty  = m.y - (m.vy / spd) * m.len;
      const gr  = ctx.createLinearGradient(tx, ty, m.x, m.y);
      gr.addColorStop(0,    'rgba(' + SNOW + ',0)');
      gr.addColorStop(0.55, 'rgba(' + GL   + ',' + (m.life * 0.48) + ')');
      gr.addColorStop(1,    'rgba(' + SNOW + ',' + (m.life * 0.92) + ')');
      ctx.save();
      ctx.strokeStyle = gr;
      ctx.lineWidth   = 1.4;
      ctx.lineCap     = 'round';
      ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(m.x, m.y); ctx.stroke();
      ctx.restore();
      m.x    += m.vx;
      m.y    += m.vy;
      m.life -= m.decay;
      if (m.life <= 0 || m.x < -120 || m.y > H + 60) meteors.splice(i, 1);
    }
  }

  /* ================================================================
     Линии созвездия (при активном фильтре)
     ================================================================ */
  function drawConnections() {
    if (activeFilter === 'all') return;
    const active = STARS.filter(s => s.cat === activeFilter);
    const drawn  = new Set();
    active.forEach(a => {
      active
        .filter(b => b !== a)
        .map(b  => ({ b, d: Math.hypot(sx(b) - sx(a), sy(b) - sy(a)) }))
        .sort((x, y) => x.d - y.d)
        .slice(0, 2)
        .forEach(({ b, d }) => {
          const key = [a.id, b.id].sort().join('|');
          if (drawn.has(key)) return;
          drawn.add(key);
          const maxD = Math.min(W, H) * 0.34;
          if (d > maxD) return;
          ctx.save();
          ctx.setLineDash([3, 8]);
          ctx.strokeStyle = 'rgba(' + GL + ',' + ((1 - d / maxD) * 0.35) + ')';
          ctx.lineWidth   = 0.9;
          ctx.beginPath(); ctx.moveTo(sx(a), sy(a)); ctx.lineTo(sx(b), sy(b)); ctx.stroke();
          ctx.setLineDash([]);
          ctx.restore();
        });
    });
  }

  /* ================================================================
     Звёзды-проекты — с заметным мерцанием
     ================================================================ */
  function drawStars() {
    STARS.forEach(s => {
      const active   = isActive(s);
      const isHov    = hovered === s;
      const isPinned = pinnedStar === s;

      /* Выразительное мерцание — диапазон 0.15..1.0 у активных */
      const pul = reduce
        ? 0.85
        : active
          ? 0.55 + 0.45 * Math.sin(time * 0.038 + s.x * 13 + s.y * 9)
          : 0.16 + 0.10 * Math.sin(time * 0.022 + s.x * 7);

      const r  = active ? (isHov || isPinned ? 6.0 : 3.6) : 1.8;
      const op = active ? (isHov || isPinned ? 1.0 : pul)  : pul * 0.18;
      const px = sx(s), py = sy(s);

      /* Гало */
      if (active) {
        const haloR = (isHov || isPinned) ? r * 5.5 : r * 4.2;
        const gr    = ctx.createRadialGradient(px, py, 0, px, py, haloR);
        gr.addColorStop(0,   'rgba(' + GL   + ',' + ((isHov || isPinned) ? 0.60 : pul * 0.40) + ')');
        gr.addColorStop(0.4, 'rgba(' + GOLD + ',' + ((isHov || isPinned) ? 0.20 : pul * 0.12) + ')');
        gr.addColorStop(1,   'rgba(' + GOLD + ',0)');
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(px, py, haloR, 0, Math.PI * 2); ctx.fill();
      }

      /* Крест-блик при наведении */
      if ((isHov || isPinned) && active) {
        ctx.save();
        ctx.strokeStyle = 'rgba(' + GL + ',' + (isPinned ? 0.55 : 0.28) + ')';
        ctx.lineWidth   = 0.7;
        const cl = r * 3.8;
        ctx.beginPath();
        ctx.moveTo(px - cl, py); ctx.lineTo(px + cl, py);
        ctx.moveTo(px, py - cl); ctx.lineTo(px, py + cl);
        ctx.stroke();
        ctx.restore();
      }

      /* Кольцо закрепления */
      if (isPinned) {
        ctx.save();
        ctx.strokeStyle = 'rgba(' + GL + ',0.55)';
        ctx.lineWidth   = 1.2;
        ctx.setLineDash([4, 4]);
        ctx.beginPath(); ctx.arc(px, py, r * 3.0, 0, Math.PI * 2); ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      }

      /* Точка */
      ctx.fillStyle = active
        ? 'rgba(' + ((isHov || isPinned) ? SNOW : GL) + ',' + op + ')'
        : 'rgba(' + GOLD + ',' + op + ')';
      ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
    });
  }

  /* ================================================================
     Главный цикл
     ================================================================ */
  let rafId = null;
  function frame() {
    if (!reduce) time++;
    ctx.clearRect(0, 0, W, H);
    drawBg();
    drawConnections();
    drawStars();
    if (!reduce) {
      if (time >= nextMeteorAt) {
        spawnMeteor();
        nextMeteorAt = time + 320 + Math.random() * 560; /* 5–15 сек при 60fps */
      }
      drawMeteors();
    }
    rafId = requestAnimationFrame(frame);
  }

  /* ================================================================
     Тултип
     ================================================================ */
  function showTip(s, tipX, tipY) {
    tip.innerHTML =
      '<div class="stag">' + CAT_LABEL[s.cat] + '</div>' +
      '<h4>' + s.name + '</h4>' +
      '<p>' + s.desc + '</p>';
    const tipW = 260, tipH = 104;
    let tx = tipX + 22, ty = tipY - 16;
    if (tx + tipW > W - 8) tx = tipX - tipW - 16;
    if (ty + tipH > H - 8) ty = tipY - tipH - 8;
    if (ty < 8) ty = 8;
    if (tx < 8) tx = 8;
    tip.style.left = tx + 'px';
    tip.style.top  = ty + 'px';
    tip.classList.add('on');
  }

  function hideTip() {
    if (pinnedStar) return;
    tip.classList.remove('on');
  }

  /* ================================================================
     Определение звезды под курсором
     — нормализуем координаты через актуальный getBoundingClientRect,
       чтобы точно совпадать с нарисованными позициями
     ================================================================ */
  function findStar(e) {
    const cr = canvas.getBoundingClientRect();
    /* Масштаб: canvas может чуть отличаться от W×H из-за бордера */
    const scX = W / (cr.width  || W);
    const scY = H / (cr.height || H);
    const mx  = (e.clientX - cr.left) * scX;
    const my  = (e.clientY - cr.top)  * scY;
    let found = null, minD = 36;
    STARS.forEach(s => {
      if (!isActive(s)) return;
      const d = Math.hypot(sx(s) - mx, sy(s) - my);
      if (d < minD) { minD = d; found = s; }
    });
    return found;
  }

  /* Координаты для позиционирования тултипа — относительно cloud */
  function tipCoords(e) {
    const cr = cloud.getBoundingClientRect();
    return { tipX: e.clientX - cr.left, tipY: e.clientY - cr.top };
  }

  /* ================================================================
     События мыши
     ================================================================ */
  canvas.addEventListener('mousemove', e => {
    const found = findStar(e);
    canvas.style.cursor = found ? 'pointer' : 'default';
    hovered = found || pinnedStar;

    /* Если что-то закреплено — тултип не двигаем */
    if (pinnedStar) return;

    if (found) {
      const { tipX, tipY } = tipCoords(e);
      showTip(found, tipX, tipY);
    } else {
      tip.classList.remove('on');
    }
  });

  canvas.addEventListener('click', e => {
    const found = findStar(e);
    if (found) {
      if (pinnedStar === found) {
        /* Снять закрепление */
        pinnedStar = null;
        hovered    = null;
        tip.classList.remove('on');
      } else {
        /* Закрепить */
        pinnedStar = found;
        hovered    = found;
        const { tipX, tipY } = tipCoords(e);
        showTip(found, tipX, tipY);
      }
    } else {
      pinnedStar = null;
      hovered    = null;
      tip.classList.remove('on');
    }
  });

  canvas.addEventListener('mouseleave', () => {
    hovered = pinnedStar || null;
    canvas.style.cursor = 'default';
    if (!pinnedStar) tip.classList.remove('on');
  });

  /* ================================================================
     Фильтры
     ================================================================ */
  document.querySelectorAll('.sfilt').forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll('.sfilt').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      activeFilter = b.dataset.cat;
      pinnedStar   = null;
      hovered      = null;
      tip.classList.remove('on');
    });
  });

  /* ================================================================
     Старт
     ================================================================ */
  function init() {
    resize();
    if (W > 0 && H > 0) {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(frame);
    }
  }

  window.addEventListener('resize', () => resize());

  new IntersectionObserver((es, obs) => {
    es.forEach(e => { if (e.isIntersecting) { init(); obs.disconnect(); } });
  }, { threshold: 0.1 }).observe(cloud);

  if (document.readyState === 'complete') setTimeout(init, 60);
  else window.addEventListener('load', () => setTimeout(init, 60));
})();
