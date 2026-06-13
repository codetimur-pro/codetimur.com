import React, { useRef, useEffect } from 'react';
import { StarField } from '../lib/StarField';
import { useFxCanvas } from '../lib/useFxCanvas';
import * as U from '../lib/utils';

const e = React.createElement;

function glowDot(ctx, x, y, r, color, glow) {
  if (glow) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, glow);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(221,189,125,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, glow, 0, Math.PI * 2); ctx.fill();
  }
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#fff7e6'; ctx.fill();
}

function GenesisFX({ active, sub }) {
  const subRef = useRef(sub);
  useEffect(() => { subRef.current = sub; }, [sub]);

  const ref = useFxCanvas({
    active,
    init: (ctx, w, h) => {
      const cx = w / 2, cy = h / 2;
      const N = Math.round(U.clamp((w * h) / 6500, 90, 240));
      const R = Math.min(w, h) * (w < 720 ? 0.38 : 0.46);
      const P = [];
      for (let i = 0; i < N; i++) {
        const ang = Math.random() * Math.PI * 2;
        const rad = Math.pow(Math.random(), 0.62) * R;
        P.push({
          tx: Math.cos(ang) * rad,
          ty: Math.sin(ang) * rad,
          r: U.rand(0.6, 1.8),
          ph: Math.random() * Math.PI * 2,
          sp: U.rand(0.5, 1.5),
        });
      }
      const links = [];
      for (let i = 0; i < N; i++) {
        const d = [];
        for (let j = 0; j < N; j++) if (i !== j) {
          const dx = P[i].tx - P[j].tx, dy = P[i].ty - P[j].ty;
          d.push([dx * dx + dy * dy, j]);
        }
        d.sort((a, b) => a[0] - b[0]);
        for (let k = 0; k < 2; k++) if (d[k] && d[k][0] < (R * 0.5) ** 2) links.push([i, d[k][1]]);
      }
      return { P, links, prog: 0, cx, cy, rot: 0 };
    },
    frame: (ctx, w, h, t, st) => {
      const target = subRef.current >= 1 ? 1 : 0;
      st.prog += (target - st.prog) * 0.045;
      st.rot += 0.0012;
      const p = U.easeOutCubic(U.clamp(st.prog, 0, 1));
      const cx = w > 900 ? w * 0.68 : w * 0.5;
      const cy = w < 720 ? h * 0.36 : h / 2;
      ctx.clearRect(0, 0, w, h);
      if (p < 0.01) return;
      const cos = Math.cos(st.rot), sin = Math.sin(st.rot);
      const pos = st.P.map((q) => {
        const driftx = Math.sin(t * 0.3 * q.sp + q.ph) * 5;
        const drifty = Math.cos(t * 0.3 * q.sp + q.ph) * 5;
        const rx = q.tx * cos - q.ty * sin;
        const ry = q.tx * sin + q.ty * cos;
        return [cx + (rx + driftx) * p, cy + (ry + drifty) * p];
      });
      for (let i = 0; i < st.P.length; i++) {
        const q = st.P[i], P = pos[i];
        const tw = 0.55 + 0.45 * Math.sin(t * q.sp + q.ph);
        glowDot(ctx, P[0], P[1], q.r * (0.7 + 0.5 * p), `rgba(255,247,230,${tw * p})`, q.r * 4 * p * tw);
      }
    },
    deps: [active],
  });
  return e('canvas', { ref, className: 'fx' });
}

export function Scene2({ active, sub }) {
  return e('section', { className: 'scene s2 center-scene', 'data-active': active, 'data-sub': sub, 'data-screen-label': '02' },
    e(StarField, { density: 0.5 }),
    e(GenesisFX, { active, sub }),
    sub === 0 ? e('div', { className: 'singularity' }) : null,
    e('div', { className: 'scene-inner' },
      e('div', { className: 'cs-copy' },
        e('div', { className: 'overline rise d1' }, '02 — Исходный код'),
        e('h2', { className: 'swap' },
          e('span', { className: 'swap-item', 'data-show': sub === 0 },
            'Принято считать, что наша Вселенная началась с ', e('em', { className: 'gold-ital' }, 'Большого взрыва'), '.'),
          e('span', { className: 'swap-item', 'data-show': sub === 1 },
            'Но развитие Вселенной — не случайность. У этой эволюции есть строгая формула: первоначальный Код, заданный ещё до начала времен.')
        )
      )
    ),
    e('div', { className: 's1-scroll-hint' },
      e('span', { className: 'sh-label' }, 'Крути вниз'),
      e('div', { className: 'sh-line' })
    )
  );
}
