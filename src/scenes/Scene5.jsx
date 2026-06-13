import React from 'react';
import { StarField } from '../lib/StarField';
import { useFxCanvas } from '../lib/useFxCanvas';
import * as U from '../lib/utils';
import { drawSideMountains } from './Scene4';

const e = React.createElement;

function OlympusFX({ active }) {
  const ref = useFxCanvas({
    active,
    init: (ctx, w, h) => {
      function cbez(t, a, b, c, d) {
        const mt = 1 - t;
        return mt*mt*mt*a + 3*mt*mt*t*b + 3*mt*t*t*c + t*t*t*d;
      }
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

      const sv = [[w*0.514, h*0.253], [w*0.861, h+4], [w*0.167, h+4]];
      const mv = [[w*0.680, h*0.190], [w*1.042, h+4], [w*0.208, h+4]];
      const v  = sv.map((p, i) => [U.lerp(p[0], mv[i][0], mp), U.lerp(p[1], mv[i][1], mp)]);

      const sA = U.clamp(1 - t / 0.9, 0, 1);
      if (sA > 0.01) drawSideMountains(ctx, w, h, sA);

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

export function Scene5({ active }) {
  return e('section', { className: 'scene s5', 'data-active': active, 'data-screen-label': '05' },
    e(StarField, { active, density: 0.35, twinkle: true, radiusScale: 1.2, dissolveRatio: 0.50, yMax: 0.38 }),
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
