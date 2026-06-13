/* scenes-4-5.jsx — Экосистема (горы + скрытые созвездия) / Движение
   Exports: Scene4, Scene5 */
(function () {
  const e = React.createElement;
  const { useRef, useEffect, useState } = React;
  const U = window.CTlib;

  function glowDot(ctx, x, y, r, glowR, alpha) {
    // warm amber outer glow
    const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
    g.addColorStop(0,    `rgba(245,220,165,${0.52 * alpha})`);
    g.addColorStop(0.30, `rgba(220,185,110,${0.28 * alpha})`);
    g.addColorStop(1,    'rgba(200,160,80,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, glowR, 0, Math.PI * 2); ctx.fill();
    // soft amber core — round, warm, not white
    const cr = ctx.createRadialGradient(x, y, 0, x, y, r);
    cr.addColorStop(0,   `rgba(252,232,185,${alpha * 0.90})`);
    cr.addColorStop(0.55, `rgba(238,205,145,${alpha * 0.65})`);
    cr.addColorStop(1,   `rgba(215,175,100,${alpha * 0.10})`);
    ctx.fillStyle = cr;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
  }

  /* ---- drawSideMountains: two flanking peaks drawn directly onto canvas ---- */
  function drawSideMountains(ctx, w, h, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowBlur = 0;
    const ridge = 'rgba(195,190,182,0.13)';
    // Left peak
    const lg = ctx.createLinearGradient(w * 0.229, h * 0.558, w * 0.229, h);
    lg.addColorStop(0, '#1e1c2a');
    lg.addColorStop(1, '#0b0a13');
    ctx.fillStyle = lg;
    ctx.beginPath();
    ctx.moveTo(w * -0.028, h + 2);
    ctx.lineTo(w * 0.229, h * 0.558);
    ctx.lineTo(w * 0.458, h + 2);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = ridge; ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.moveTo(w * -0.028, h + 2); ctx.lineTo(w * 0.229, h * 0.558); ctx.stroke();
    // Right peak
    const rg = ctx.createLinearGradient(w * 0.792, h * 0.492, w * 0.792, h);
    rg.addColorStop(0, '#1e1c2a');
    rg.addColorStop(1, '#0b0a13');
    ctx.fillStyle = rg;
    ctx.beginPath();
    ctx.moveTo(w * 0.569, h + 2);
    ctx.lineTo(w * 0.792, h * 0.492);
    ctx.lineTo(w * 1.028, h + 2);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = ridge;
    ctx.beginPath(); ctx.moveTo(w * 0.792, h * 0.492); ctx.lineTo(w * 1.028, h + 2); ctx.stroke();
    ctx.restore();
  }

  /* ---- MorphFX: Play-icon triangle → central mountain + star-ring scatter ---- */
  function MorphFX({ active }) {
    const ref = window.useFxCanvas({
      active,
      init: (ctx, w, h) => {
        const cx0 = w > 900 ? w * 0.68 : w * 0.5;
        const cy0 = h / 2;
        const oR = Math.min(w, h) * 0.26 * 0.92;
        const stars = [];
        for (let i = 0; i < 38; i++) {
          const ang = (i / 38) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
          const rad = oR * (1.02 + Math.random() * 0.38);
          stars.push({
            sx: cx0 + Math.cos(ang) * rad,
            sy: cy0 + Math.sin(ang) * rad,
            tx: Math.random() * w,
            ty: Math.random() * h * 0.50,
            r: U.rand(0.5, 1.8),
            ph: Math.random() * 6.28,
            sp: U.rand(0.5, 1.3),
            delay: Math.random() * 0.9,
          });
        }
        return { stars };
      },
      frame: (ctx, w, h, t, st) => {
        ctx.clearRect(0, 0, w, h);
        const cx0 = w > 900 ? w * 0.68 : w * 0.5;
        const cy0 = h / 2;
        const pR = Math.min(w, h) * 0.26 * 0.54;            // play-icon final radius
        const mp = U.easeInOutCubic(U.clamp(t / 2.2, 0, 1)); // morph 0→1

        // Play triangle vertices (pointing right — end state of Scene 3)
        const pV = [
          [cx0 + pR, cy0],
          [cx0 - pR * 0.5, cy0 - pR * 0.866],
          [cx0 - pR * 0.5, cy0 + pR * 0.866],
        ];
        // Mountain target vertices (SVG ratios: apex 740/1440, 152/600)
        const mV = [
          [w * 0.514, h * 0.253],
          [w * 0.861, h + 4],
          [w * 0.167, h + 4],
        ];
        const v = pV.map((p, i) => [U.lerp(p[0], mV[i][0], mp), U.lerp(p[1], mV[i][1], mp)]);

        // Side mountains (fade in from mp=0.52)
        const sa = U.clamp((mp - 0.52) / 0.48, 0, 1);
        if (sa > 0.01) drawSideMountains(ctx, w, h, sa);

        // Central mountain body (semi-transparent premium)
        ctx.save();
        const bg = ctx.createLinearGradient(v[0][0], v[0][1], (v[1][0] + v[2][0]) * 0.5, h);
        bg.addColorStop(0, 'rgba(30,28,42,1.0)');
        bg.addColorStop(0.45, 'rgba(20,18,30,1.0)');
        bg.addColorStop(1, 'rgba(10,9,15,1.0)');
        ctx.beginPath();
        ctx.moveTo(v[0][0], v[0][1]);
        ctx.lineTo(v[1][0], v[1][1]);
        ctx.lineTo(v[2][0], v[2][1]);
        ctx.closePath();
        ctx.fillStyle = bg; ctx.fill();

        // Gold outline (play style → fades as mountain forms)
        const oa = Math.max(0, 1 - mp * 1.65);
        if (oa > 0.01) {
          const pulse = 0.8 + 0.2 * Math.sin(t * 1.6);
          ctx.strokeStyle = `rgba(228,184,120,${0.92 * oa * pulse})`;
          ctx.lineWidth = 3.2; ctx.lineJoin = 'round';
          ctx.shadowColor = 'rgba(221,189,125,0.55)'; ctx.shadowBlur = 14 * oa;
          ctx.beginPath();
          ctx.moveTo(v[0][0], v[0][1]); ctx.lineTo(v[1][0], v[1][1]);
          ctx.lineTo(v[2][0], v[2][1]); ctx.closePath(); ctx.stroke();
        }
        // Ridge lines (mountain style → fade in)
        const ra = U.clamp((mp - 0.25) / 0.75, 0, 1);
        if (ra > 0.01) {
          ctx.shadowBlur = 0;
          ctx.lineWidth = 0.8;
          ctx.strokeStyle = `rgba(195,190,182,${0.15 * ra})`;
          ctx.beginPath(); ctx.moveTo(v[0][0], v[0][1]); ctx.lineTo(v[1][0], v[1][1]); ctx.stroke();
          ctx.strokeStyle = `rgba(195,190,182,${0.12 * ra})`;
          ctx.beginPath(); ctx.moveTo(v[0][0], v[0][1]); ctx.lineTo(v[2][0], v[2][1]); ctx.stroke();
        }
        ctx.restore();

        // Summit glow — luminous halo drawn over apex
        const ga = U.clamp((mp - 0.3) / 0.7, 0, 1);
        if (ga > 0.01) {
          const gg = ctx.createRadialGradient(v[0][0], v[0][1], 0, v[0][0], v[0][1], h * 0.13);
          gg.addColorStop(0, `rgba(255,248,220,${0.55 * ga})`);
          gg.addColorStop(0.25, `rgba(244,228,191,${0.28 * ga})`);
          gg.addColorStop(0.7, `rgba(220,195,150,${0.06 * ga})`);
          gg.addColorStop(1, 'rgba(220,195,150,0)');
          ctx.fillStyle = gg;
          ctx.beginPath(); ctx.arc(v[0][0], v[0][1], h * 0.13, 0, Math.PI * 2); ctx.fill();
        }

        // Stars: scatter from orbit ring to sky
        for (const s of st.stars) {
          const sp = U.easeOutCubic(U.clamp((t - s.delay) / 1.6, 0, 1));
          if (sp < 0.01) continue;
          const x = U.lerp(s.sx, s.tx, sp);
          const y = U.lerp(s.sy, s.ty, sp);
          const tw = 0.55 + 0.45 * Math.sin(t * s.sp + s.ph);
          const a = sp * tw;
          if (a < 0.01) continue;
          const gr = ctx.createRadialGradient(x, y, 0, x, y, s.r * 5);
          gr.addColorStop(0, `rgba(255,247,230,${0.75 * a})`);
          gr.addColorStop(1, 'rgba(221,189,125,0)');
          ctx.fillStyle = gr;
          ctx.beginPath(); ctx.arc(x, y, s.r * 5, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,250,238,${a})`; ctx.fill();
        }
      },
      deps: [active],
    });
    return e('canvas', { ref, className: 'fx' });
  }

  /* ---- Hidden constellations: УМа (left) / Орион (center) / Пегас (right) ----
     coords normalized to canvas (x: 0..1, y: 0..1 — sky is upper half) */
  const CONSTELLATIONS = {
    uma: { // Большая Медведица (ковш)
      key: 4,
      stars: [
        [0.052, 0.315], [0.092, 0.262], [0.132, 0.238],            // ручка
        [0.172, 0.245], [0.228, 0.228],                            // верх ковша
        [0.238, 0.310], [0.178, 0.322],                            // низ ковша
      ],
      links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
    },
    orion: { // Орион
      key: 4,
      stars: [
        [0.495, 0.085],                                            // голова
        [0.452, 0.148], [0.548, 0.140],                            // плечи
        [0.474, 0.262], [0.498, 0.272], [0.522, 0.280],            // пояс
        [0.464, 0.408], [0.556, 0.396],                            // ноги
        [0.508, 0.330],                                            // меч
      ],
      links: [[1, 0], [0, 2], [1, 3], [2, 5], [3, 4], [4, 5], [3, 6], [5, 7], [6, 7], [4, 8]],
    },
    pegasus: { // Пегас (Большой квадрат + шея + ноги)
      key: 1,
      stars: [
        [0.742, 0.215], [0.832, 0.178], [0.858, 0.292], [0.762, 0.322],  // квадрат
        [0.872, 0.118], [0.912, 0.088], [0.944, 0.108],                   // шея + голова
        [0.722, 0.415], [0.842, 0.425],                                   // ноги
      ],
      links: [[0, 1], [1, 2], [2, 3], [3, 0], [1, 4], [4, 5], [5, 6], [3, 7], [2, 8]],
    },
  };
  const CONST_IDS = ['uma', 'orion', 'pegasus'];

  function nearestStar(x, y, w, h, maxDist) {
    let best = null, bestD = maxDist * maxDist;
    for (const id of CONST_IDS) {
      for (const [nx, ny] of CONSTELLATIONS[id].stars) {
        const dx = nx * w - x, dy = ny * h - y;
        const d = dx * dx + dy * dy;
        if (d < bestD) { bestD = d; best = id; }
      }
    }
    return best;
  }

  function ConstellSky({ active, constel, setConstel }) {
    const constelRef = useRef(constel);
    const progRef = useRef({ uma: 0, orion: 0, pegasus: 0 });
    useEffect(() => { constelRef.current = constel; }, [constel]);

    const ref = window.useFxCanvas({
      active,
      init: () => ({
        meteor: null,
        next: 2 + Math.random() * 3,
        tw: CONST_IDS.reduce((m, id) => {
          m[id] = CONSTELLATIONS[id].stars.map(() => ({ ph: Math.random() * 6.28, sp: U.rand(0.5, 1.3) }));
          return m;
        }, {}),
      }),
      frame: (ctx, w, h, t, st) => {
        ctx.clearRect(0, 0, w, h);
        const P = progRef.current;

        for (const id of CONST_IDS) {
          const C = CONSTELLATIONS[id];
          const target = constelRef.current === id ? 1 : 0;
          P[id] += (target - P[id]) * 0.055;
          const p = P[id];
          const px = C.stars.map(([nx, ny]) => [nx * w, ny * h]);

          // lines — sequential draw / retract
          if (p > 0.015) {
            ctx.lineWidth = 1;
            for (let i = 0; i < C.links.length; i++) {
              const k = U.clamp((p * 1.45 - i * 0.09) / 0.32, 0, 1);
              if (k <= 0) continue;
              const [a, b] = C.links[i];
              const A = px[a], B = px[b];
              ctx.strokeStyle = `rgba(228,196,134,${0.5 * k * p})`;
              ctx.shadowColor = 'rgba(221,189,125,0.5)';
              ctx.shadowBlur = 6 * k;
              ctx.beginPath();
              ctx.moveTo(A[0], A[1]);
              ctx.lineTo(U.lerp(A[0], B[0], k), U.lerp(A[1], B[1], k));
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          }

          // stars (always visible "chaotic" dots; brighten when constellation lit)
          for (let i = 0; i < px.length; i++) {
            const tws = st.tw[id][i];
            const tw = 0.62 + 0.38 * Math.sin(t * tws.sp + tws.ph);
            const r = 3.0 + 1.4 * p;
            glowDot(ctx, px[i][0], px[i][1], r, r * (3.2 + 2.0 * p), tw * (0.62 + 0.38 * p));
            // key-star invitation pulse (only while its constellation is dark)
            if (i === C.key && p < 0.4) {
              const ringR = 9 + 3.5 * Math.sin(t * 1.4 + 1);
              ctx.beginPath(); ctx.arc(px[i][0], px[i][1], ringR, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(221,189,125,${0.3 * (1 - p) * (0.6 + 0.4 * Math.sin(t * 1.4))})`;
              ctx.lineWidth = 1;
              ctx.stroke();
            }

          }
        }

        // ---- meteors: one every 3–5 s ----
        if (!st.meteor && t > st.next) {
          const dir = Math.random() < 0.5 ? -1 : 1;
          const ang = (0.62 + Math.random() * 0.16) * Math.PI / 2;  // steep-ish fall
          const speed = w * (0.32 + Math.random() * 0.16);
          st.meteor = {
            x: (0.18 + Math.random() * 0.64) * w,
            y: (0.04 + Math.random() * 0.16) * h,
            vx: dir * Math.cos(ang) * speed,
            vy: Math.sin(ang) * speed,
            born: t, life: 0.9 + Math.random() * 0.4,
          };
        }
        if (st.meteor) {
          const m = st.meteor;
          const age = t - m.born;
          if (age > m.life) {
            st.meteor = null;
            st.next = t + 3 + Math.random() * 2;
          } else {
            const env = Math.sin(Math.PI * U.clamp(age / m.life, 0, 1));
            const hx = m.x + m.vx * age, hy = m.y + m.vy * age;
            const L = 130;
            const nx = m.vx / Math.hypot(m.vx, m.vy), ny = m.vy / Math.hypot(m.vx, m.vy);
            const tx = hx - nx * L, ty = hy - ny * L;
            const grd = ctx.createLinearGradient(hx, hy, tx, ty);
            grd.addColorStop(0, `rgba(255,247,230,${0.85 * env})`);
            grd.addColorStop(0.4, `rgba(221,189,125,${0.3 * env})`);
            grd.addColorStop(1, 'rgba(221,189,125,0)');
            ctx.strokeStyle = grd;
            ctx.lineWidth = 1.6;
            ctx.lineCap = 'round';
            ctx.beginPath(); ctx.moveTo(hx, hy); ctx.lineTo(tx, ty); ctx.stroke();
            glowDot(ctx, hx, hy, 1.6, 9, env);
          }
        }
      },
      deps: [active],
    });

    const handleClick = (ev) => {
      const rect = ev.currentTarget.getBoundingClientRect();
      const x = ev.clientX - rect.left, y = ev.clientY - rect.top;
      const hit = nearestStar(x, y, rect.width, rect.height, 56);
      if (hit) setConstel((prev) => (prev === hit ? null : hit));
    };
    const handleMove = (ev) => {
      const rect = ev.currentTarget.getBoundingClientRect();
      const x = ev.clientX - rect.left, y = ev.clientY - rect.top;
      ev.currentTarget.style.cursor = nearestStar(x, y, rect.width, rect.height, 56) ? 'pointer' : 'default';
    };

    return e('canvas', { ref, className: 'fx fx-nodes', onClick: handleClick, onMouseMove: handleMove });
  }

  /* ---- dynamic copy per constellation ---- */
  const ECO_DYN = {
    uma: ['Ясность', 'Первый шаг в Игре. Инструменты, чтобы определить своё текущее состояние, понять правила реальности и увидеть цель.'],
    orion: ['Трансформация', 'Работа над состоянием и мышлением. Проекты, которые превращают твоего аватара в полноправного Игрока-создателя.'],
    pegasus: ['Влияние', 'Финальный квест Игры. Инструменты для создания глобальных сценариев и изменения реальности вокруг себя.'],
  };

  function Scene4({ active }) {
    const [constel, setConstel] = useState(null);
    const [textVis, setTextVis] = useState(false);
    useEffect(() => {
      if (active) {
        const id = setTimeout(() => setTextVis(true), 2300);
        return () => clearTimeout(id);
      }
      setTextVis(false);
    }, [active]);
    const dyn = constel ? ECO_DYN[constel] : null;
    return e('section', { className: 'scene s4', 'data-active': active, 'data-screen-label': '04' },
      e(window.StarField, { density: 0.12, twinkle: true, radiusScale: 0.22, className: 'fx fx-ambient', style: { WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.35) 78%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.35) 78%, transparent 100%)' } }),
      e(MorphFX, { active }),
      e(ConstellSky, { active, constel, setConstel }),
      e('div', { className: 'scene-inner' },
        e('div', {
          className: 's4-copy',
          style: {
            opacity: textVis ? 1 : 0,
            transform: textVis ? 'none' : 'translateY(18px)',
            transition: 'opacity 0.9s var(--ease), transform 0.9s var(--ease)',
          },
        },
          e('div', { className: 'overline' }, '04 — Экосистема'),
          e('h2', null,
            'На основе этого Кода создана ', e('em', null, 'Единая экосистема'),
            ' из 30 IT-проектов в формате Игры.'
          ),
          dyn
            ? e('p', { className: 'eco-dyn', key: constel },
                e('span', { className: 'eco-label' }, dyn[0], '.'), ' ', dyn[1])
            : e('p', { className: 'eco-hint', key: 'hint' },
                'На небе скрыты три созвездия — найди ключевые звёзды.'),
          e('a', {
            className: 'btn btn--outline btn--detail',
            style: { pointerEvents: 'auto', marginTop: '1.8em' },
            href: 'https://codetimur.com/apps/',
            target: '_blank',
            rel: 'noopener',
          },
            e('span', { className: 'btn-sub' }, 'Подробнее про'),
            e('span', { className: 'btn-main' }, 'Экосистему «Покори Олимп»', e('span', { className: 'arr' }, '→'))
          )
        )
      ),
      /* scroll hint — guides user to scroll (not click) to advance */
      e('div', { className: 's1-scroll-hint s4-scroll-hint' },
        e('span', { className: 'sh-label' }, 'Прокручивай вниз'),
        e('div', { className: 'sh-line' })
      )
    );
  }

  /* ===================== SCENE 5 — MOVEMENT ===================== */
  /* ---- OlympusFX: Scene 4→5 — sides fade, mountain grows right, trail draws ---- */
  function OlympusFX({ active }) {
    const ref = window.useFxCanvas({
      active,
      init: (ctx, w, h) => {
        function cbez(t, a, b, c, d) {
          const mt = 1 - t;
          return mt*mt*mt*a + 3*mt*mt*t*b + 3*mt*t*t*c + t*t*t*d;
        }
        // Trail as proportional fractions [0..1] — C1-continuous at all junctions
        const segs = [
          [[0.260,0.960],[0.360,0.870],[0.550,0.800],[0.600,0.730]],
          [[0.600,0.730],[0.650,0.660],[0.570,0.585],[0.540,0.560]],
          [[0.540,0.560],[0.510,0.535],[0.620,0.450],[0.660,0.400]],
          [[0.660,0.400],[0.700,0.350],[0.690,0.270],[0.680,0.190]],
        ];
        const trail = [];
        for (const [p0,p1,p2,p3] of segs) {
          for (let i = 0; i <= 40; i++) {
            const t2 = i / 40;
            trail.push([
              cbez(t2, p0[0], p1[0], p2[0], p3[0]),
              cbez(t2, p0[1], p1[1], p2[1], p3[1]),
            ]);
          }
        }
        return { trail, dotSpeeds: [0.055, 0.068, 0.060, 0.048, 0.075, 0.063] };
      },
      frame: (ctx, w, h, t, st) => {
        ctx.clearRect(0, 0, w, h);
        const mp = U.easeInOutCubic(U.clamp(t / 2.4, 0, 1));

        // Start = Scene 4 final, target = Olympus (right-shifted, large)
        const sv = [[w*0.514, h*0.253], [w*0.861, h+4], [w*0.167, h+4]];
        const mv = [[w*0.680, h*0.190], [w*1.042, h+4], [w*0.208, h+4]];
        const v  = sv.map((p, i) => [U.lerp(p[0], mv[i][0], mp), U.lerp(p[1], mv[i][1], mp)]);

        // Side mountains dissolve in first 0.9s
        const sA = U.clamp(1 - t / 0.9, 0, 1);
        if (sA > 0.01) drawSideMountains(ctx, w, h, sA);

        // Mountain body
        ctx.save();
        const bg = ctx.createLinearGradient(v[0][0], v[0][1], (v[1][0] + v[2][0]) * 0.5, h);
        bg.addColorStop(0,    'rgba(30,28,42,1.0)');
        bg.addColorStop(0.45, 'rgba(20,18,30,1.0)');
        bg.addColorStop(1,    'rgba(10,9,15,1.0)');
        ctx.beginPath();
        ctx.moveTo(v[0][0], v[0][1]); ctx.lineTo(v[1][0], v[1][1]); ctx.lineTo(v[2][0], v[2][1]);
        ctx.closePath(); ctx.fillStyle = bg; ctx.fill();
        const ra = U.clamp(mp * 2, 0, 1);
        if (ra > 0.01) {
          ctx.lineWidth = 0.8; ctx.shadowBlur = 0;
          ctx.strokeStyle = `rgba(195,190,182,${0.15 * ra})`;
          ctx.beginPath(); ctx.moveTo(v[0][0], v[0][1]); ctx.lineTo(v[1][0], v[1][1]); ctx.stroke();
          ctx.strokeStyle = `rgba(195,190,182,${0.10 * ra})`;
          ctx.beginPath(); ctx.moveTo(v[0][0], v[0][1]); ctx.lineTo(v[2][0], v[2][1]); ctx.stroke();
        }
        ctx.restore();

        // Summit glow — luminous halo over apex
        const ga = U.clamp((mp - 0.3) / 0.7, 0, 1);
        if (ga > 0.01) {
          const gg = ctx.createRadialGradient(v[0][0], v[0][1], 0, v[0][0], v[0][1], h * 0.13);
          gg.addColorStop(0, `rgba(255,248,220,${0.55 * ga})`);
          gg.addColorStop(0.25, `rgba(244,228,191,${0.28 * ga})`);
          gg.addColorStop(0.7, `rgba(220,195,150,${0.06 * ga})`);
          gg.addColorStop(1, 'rgba(220,195,150,0)');
          ctx.fillStyle = gg;
          ctx.beginPath(); ctx.arc(v[0][0], v[0][1], h * 0.13, 0, Math.PI * 2); ctx.fill();
        }

        // Trail: draws from base to summit after mountain settles
        const trailP = U.easeOutCubic(U.clamp((t - 2.5) / 1.4, 0, 1));
        if (trailP > 0.01 && st.trail.length >= 2) {
          const nDraw = Math.max(2, Math.floor(st.trail.length * trailP));
          const tg = ctx.createLinearGradient(0, st.trail[0][1]*h, 0, st.trail[st.trail.length - 1][1]*h);
          tg.addColorStop(0, 'rgba(221,189,125,0.15)');
          tg.addColorStop(1, 'rgba(244,228,191,0.92)');
          ctx.save();
          ctx.strokeStyle = tg; ctx.lineWidth = 2.4; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
          ctx.shadowColor = 'rgba(221,189,125,0.6)'; ctx.shadowBlur = 6;
          ctx.beginPath();
          ctx.moveTo(st.trail[0][0]*w, st.trail[0][1]*h);
          for (let i = 1; i < nDraw - 1; i++) {
            const mx = (st.trail[i][0] + st.trail[i+1][0]) * 0.5 * w;
            const my = (st.trail[i][1] + st.trail[i+1][1]) * 0.5 * h;
            ctx.quadraticCurveTo(st.trail[i][0]*w, st.trail[i][1]*h, mx, my);
          }
          if (nDraw > 1) ctx.lineTo(st.trail[nDraw-1][0]*w, st.trail[nDraw-1][1]*h);
          ctx.stroke();
          ctx.restore();
          // Climbing dots along drawn trail
          if (trailP > 0.25) {
            const fullMax = st.trail.length - 1;
            for (let i = 0; i < 6; i++) {
              const pos = (i / 6 + t * st.dotSpeeds[i]) % 1;
              const rawPos = Math.min(pos * fullMax, nDraw - 1);
              const idx  = Math.floor(rawPos);
              const frac = rawPos - idx;
              const idx2 = Math.min(idx + 1, nDraw - 1);
              const pt   = st.trail[idx];
              const pt2  = st.trail[idx2];
              const px = (pt[0] + (pt2[0] - pt[0]) * frac) * w;
              const py = (pt[1] + (pt2[1] - pt[1]) * frac) * h;
              const bright = 0.30 + 0.70 * (idx / st.trail.length);
              const tw = 0.6 + 0.4 * Math.sin(t * 2.2 + i);
              ctx.save();
              ctx.shadowColor = 'rgba(221,189,125,0.7)'; ctx.shadowBlur = 5;
              ctx.beginPath(); ctx.arc(px, py, 2.6, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255,247,230,${bright * tw})`; ctx.fill();
              ctx.restore();
            }
          }
        }
      },
      deps: [],
    });
    return e('canvas', { ref, className: 'fx' });
  }

  function Scene5({ active }) {
    return e('section', { className: 'scene s5', 'data-active': active, 'data-screen-label': '05' },
      e(window.StarField, { active, density: 0.35, twinkle: true, radiusScale: 1.2, dissolveRatio: 0.50, yMax: 0.38 }),
      e(OlympusFX, { active }),
      e('div', { className: 'scene-inner' },
        e('div', { className: 's5-copy' },
          e('div', { className: 'overline rise d1' }, '05 — Совместный путь'),
          e('h2', { className: 'display rise d2' }, 'Движение к ', e('br'), 'вершине ', e('span', { className: 'gold' }, 'Олимпа')),
          e('p', { className: 'lead rise d3' },
            'Знать код недостаточно. Мы объединяемся в Движение, чтобы вместе дойти до самой вершины и поддержать друг друга в пути.'),
          e('a', { className: 'btn btn--outline btn--detail rise d4', href: '#', onClick: (ev) => ev.preventDefault() },
            e('span', { className: 'btn-sub' }, 'Подробнее про'),
            e('span', { className: 'btn-main' }, 'Движение «Вершина Олимпа»', e('span', { className: 'arr' }, '→')))
        )
      )
    );
  }

  Object.assign(window, { Scene4, Scene5 });
})();
