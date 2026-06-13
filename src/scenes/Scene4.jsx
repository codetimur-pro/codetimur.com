import React, { useRef, useEffect, useState } from 'react';
import { StarField } from '../lib/StarField';
import { useFxCanvas } from '../lib/useFxCanvas';
import * as U from '../lib/utils';

const e = React.createElement;

// Copied from apps/index.html drawStars(): GL/GOLD halo + SOLID core circle.
// The solid (non-gradient) core is what gives the clean, hard-edged look.
function glowDot(ctx, x, y, r, glowR, alpha) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
  g.addColorStop(0,   `rgba(232,199,154,${0.40 * alpha})`);
  g.addColorStop(0.4, `rgba(212,165,116,${0.12 * alpha})`);
  g.addColorStop(1,   'rgba(212,165,116,0)');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(x, y, glowR, 0, Math.PI * 2); ctx.fill();
  // Solid core — clean round circle (rgba 255,248,235 = apps SNOW)
  ctx.fillStyle = `rgba(255,248,235,${alpha})`;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
}

export function drawSideMountains(ctx, w, h, alpha) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.shadowBlur = 0;
  const ridge = 'rgba(195,190,182,0.13)';
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

function MorphFX({ active }) {
  const ref = useFxCanvas({
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
          r: U.rand(0.4, 1.0),
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
      const pR = Math.min(w, h) * 0.26 * 0.54;
      const mp = U.easeInOutCubic(U.clamp(t / 2.2, 0, 1));

      const pV = [
        [cx0 + pR, cy0],
        [cx0 - pR * 0.5, cy0 - pR * 0.866],
        [cx0 - pR * 0.5, cy0 + pR * 0.866],
      ];
      const mV = [
        [w * 0.514, h * 0.355],
        [w * 0.965, h + 4],
        [w * 0.035, h + 4],
      ];
      const v = pV.map((p, i) => [U.lerp(p[0], mV[i][0], mp), U.lerp(p[1], mV[i][1], mp)]);

      const sa = U.clamp((mp - 0.52) / 0.48, 0, 1);
      if (sa > 0.01) drawSideMountains(ctx, w, h, sa);

      ctx.save();
      const bg = ctx.createLinearGradient(v[0][0], v[0][1], (v[1][0] + v[2][0]) * 0.5, h);
      bg.addColorStop(0,    '#272231');
      bg.addColorStop(0.28, '#1c1926');
      bg.addColorStop(0.68, '#15131c');
      bg.addColorStop(1,    '#100f15');
      ctx.beginPath();
      ctx.moveTo(v[0][0], v[0][1]);
      ctx.lineTo(v[1][0], v[1][1]);
      ctx.lineTo(v[2][0], v[2][1]);
      ctx.closePath();
      ctx.fillStyle = bg; ctx.fill();

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
      const ra = U.clamp((mp - 0.25) / 0.75, 0, 1);
      if (ra > 0.01) {
        // Warm ridge glow along both slopes (apps/ GL edge)
        ctx.shadowColor = 'rgba(232,199,154,0.18)'; ctx.shadowBlur = 11 * ra;
        ctx.strokeStyle = `rgba(232,199,154,${0.16 * ra})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(v[2][0], v[2][1]); ctx.lineTo(v[0][0], v[0][1]); ctx.lineTo(v[1][0], v[1][1]);
        ctx.stroke();
        // Cold highlight on the upper slopes near the peak (apps/ COLD edge)
        ctx.shadowColor = 'rgba(150,180,225,0.16)'; ctx.shadowBlur = 8 * ra;
        ctx.strokeStyle = `rgba(150,180,225,${0.22 * ra})`;
        ctx.lineWidth = 1.2;
        const km = 0.34;
        ctx.beginPath();
        ctx.moveTo(U.lerp(v[0][0], v[2][0], km), U.lerp(v[0][1], v[2][1], km));
        ctx.lineTo(v[0][0], v[0][1]);
        ctx.lineTo(U.lerp(v[0][0], v[1][0], km), U.lerp(v[0][1], v[1][1], km));
        ctx.stroke();
        ctx.shadowBlur = 0;
        // Peak highlight bloom
        const pg = ctx.createRadialGradient(v[0][0], v[0][1], 0, v[0][0], v[0][1], h * 0.11);
        pg.addColorStop(0,   `rgba(255,248,235,${0.16 * ra})`);
        pg.addColorStop(0.2, `rgba(232,199,154,${0.06 * ra})`);
        pg.addColorStop(1,   'rgba(232,199,154,0)');
        ctx.fillStyle = pg;
        ctx.beginPath(); ctx.arc(v[0][0], v[0][1], h * 0.11, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();

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

      for (const s of st.stars) {
        const sp = U.easeOutCubic(U.clamp((t - s.delay) / 1.6, 0, 1));
        if (sp < 0.01) continue;
        const x = U.lerp(s.sx, s.tx, sp);
        const y = U.lerp(s.sy, s.ty, sp);
        const tw = 0.55 + 0.45 * Math.sin(t * s.sp + s.ph);
        const a = sp * tw;
        if (a < 0.01) continue;
        // Halo glows during the morph, then fades out as the star settles,
        // so each one ends up as a small clean dot (not a big glowy ball).
        const haloR = s.r * 5 * (1 - sp);
        if (haloR > 0.5) {
          const gr = ctx.createRadialGradient(x, y, 0, x, y, haloR);
          gr.addColorStop(0, `rgba(255,247,230,${0.6 * a * (1 - sp)})`);
          gr.addColorStop(1, 'rgba(221,189,125,0)');
          ctx.fillStyle = gr;
          ctx.beginPath(); ctx.arc(x, y, haloR, 0, Math.PI * 2); ctx.fill();
        }
        // Small solid dot core (apps/ bg-star look)
        ctx.beginPath(); ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,248,235,${a})`; ctx.fill();
      }
    },
    deps: [active],
  });
  return e('canvas', { ref, className: 'fx' });
}

const CONSTELLATIONS = {
  uma: {
    key: 4,
    stars: [
      [0.052, 0.315], [0.092, 0.262], [0.132, 0.238],
      [0.172, 0.245], [0.228, 0.228],
      [0.238, 0.310], [0.178, 0.322],
    ],
    links: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]],
  },
  orion: {
    key: 4,
    stars: [
      [0.495, 0.085],
      [0.452, 0.148], [0.548, 0.140],
      [0.474, 0.262], [0.498, 0.272], [0.522, 0.280],
      [0.464, 0.408], [0.556, 0.396],
      [0.508, 0.330],
    ],
    links: [[1, 0], [0, 2], [1, 3], [2, 5], [3, 4], [4, 5], [3, 6], [5, 7], [6, 7], [4, 8]],
  },
  pegasus: {
    key: 1,
    stars: [
      [0.742, 0.215], [0.832, 0.178], [0.858, 0.292], [0.762, 0.322],
      [0.872, 0.118], [0.912, 0.088], [0.944, 0.108],
      [0.722, 0.415], [0.842, 0.425],
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

  const ref = useFxCanvas({
    active,
    init: () => ({
      meteor: null,
      next: 2 + Math.random() * 3,
      tw: CONST_IDS.reduce((m, id) => {
        m[id] = CONSTELLATIONS[id].stars.map(() => ({ ph: Math.random() * 6.28, sp: U.rand(1.8, 2.8) }));
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

        for (let i = 0; i < px.length; i++) {
          const tws = st.tw[id][i];
          const tw = 0.55 + 0.45 * Math.sin(t * tws.sp + tws.ph);
          const r = 3.0 + 1.4 * p;
          glowDot(ctx, px[i][0], px[i][1], r, r * (3.2 + 2.0 * p), tw * (0.62 + 0.38 * p));
          if (i === C.key && p < 0.4) {
            const ringR = 9 + 3.5 * Math.sin(t * 1.4 + 1);
            ctx.beginPath(); ctx.arc(px[i][0], px[i][1], ringR, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(221,189,125,${0.3 * (1 - p) * (0.6 + 0.4 * Math.sin(t * 1.4))})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!st.meteor && t > st.next) {
        const dir = Math.random() < 0.5 ? -1 : 1;
        const ang = (0.62 + Math.random() * 0.16) * Math.PI / 2;
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

const ECO_DYN = {
  uma: ['Ясность', 'Первый шаг в Игре. Инструменты, чтобы определить своё текущее состояние, понять правила реальности и увидеть цель.'],
  orion: ['Трансформация', 'Работа над состоянием и мышлением. Проекты, которые превращают твоего аватара в полноправного Игрока-создателя.'],
  pegasus: ['Влияние', 'Финальный квест Игры. Инструменты для создания глобальных сценариев и изменения реальности вокруг себя.'],
};

export function Scene4({ active }) {
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
    e(StarField, { density: 0.12, twinkle: true, radiusScale: 0.22, className: 'fx fx-ambient', style: { WebkitMaskImage: 'linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.35) 78%, transparent 100%)', maskImage: 'linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.35) 78%, transparent 100%)' } }),
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
          ' из 30 IT-проектов в формате Игры.'
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
    e('div', { className: 's1-scroll-hint s4-scroll-hint' },
      e('span', { className: 'sh-label' }, 'Прокручивай вниз'),
      e('div', { className: 'sh-line' })
    )
  );
}
