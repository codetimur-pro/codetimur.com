import React, { useRef, useEffect } from 'react';
import { useFxCanvas } from './useFxCanvas';
import { rand, clamp, easeOutCubic } from './utils';

// Exact glowDot from Scene4 — bright core + soft outer halo
function glowDot(ctx, x, y, r, glowR, alpha) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, glowR);
  g.addColorStop(0,    `rgba(245,220,165,${0.52 * alpha})`);
  g.addColorStop(0.30, `rgba(220,185,110,${0.28 * alpha})`);
  g.addColorStop(1,    'rgba(200,160,80,0)');
  ctx.fillStyle = g;
  ctx.beginPath(); ctx.arc(x, y, glowR, 0, Math.PI * 2); ctx.fill();

  const cr = ctx.createRadialGradient(x, y, 0, x, y, r);
  cr.addColorStop(0,    `rgba(252,232,185,${alpha * 0.90})`);
  cr.addColorStop(0.55, `rgba(238,205,145,${alpha * 0.65})`);
  cr.addColorStop(1,    `rgba(215,175,100,${alpha * 0.10})`);
  ctx.fillStyle = cr;
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
}

export function StarField({
  active: sceneActive = true,
  density = 1,
  twinkle = true,
  className = 'fx',
  style,
  radiusScale = 1,
  dissolveRatio = 0,
  yMax = 1.0,
}) {
  const sceneActiveRef = useRef(false);
  useEffect(() => { sceneActiveRef.current = sceneActive; }, [sceneActive]);

  const ref = useFxCanvas({
    active: true,
    init: (ctx, w, h) => {
      const count = Math.round((w * h) / 9000 * density);
      const dissolveCount = Math.floor(count * dissolveRatio);
      const dissolveSet = new Set();
      if (dissolveCount > 0) {
        while (dissolveSet.size < dissolveCount) dissolveSet.add(Math.floor(Math.random() * count));
      }

      const stars = [];
      for (let i = 0; i < count; i++) {
        const dis = dissolveSet.has(i);
        // 20% are constellation node balls (glowDot style)
        const isNode = Math.random() < 0.20;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h * yMax,
          // nodes: 1.4–2.2px core; tiny: 0.4–0.9px
          r: isNode
            ? rand(1.4, 2.2) * radiusScale
            : rand(0.4, 0.9) * radiusScale,
          base: isNode ? rand(0.50, 0.82) : rand(0.10, 0.38),
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.30, 1.0),
          isNode,
          dissolves: dis,
          dissolveDelay: dis ? Math.random() * 2.0 : 0,
        });
      }

      // Constellation lines: pick node pairs that are close enough
      const nodes = stars.filter(s => s.isNode);
      const maxD = Math.min(w * 0.13, 95);
      const lines = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < maxD) lines.push([nodes[i], nodes[j], d / maxD]);
        }
      }

      return { stars, nodes, lines, dissolveStart: null, wasActive: false };
    },

    frame: (ctx, w, h, t, st) => {
      const nowActive = sceneActiveRef.current;
      if (nowActive && !st.wasActive) st.dissolveStart = t;
      if (!nowActive) st.dissolveStart = null;
      st.wasActive = nowActive;

      ctx.clearRect(0, 0, w, h);

      // Draw constellation lines
      ctx.lineWidth = 0.5;
      for (const [a, b, ratio] of st.lines) {
        ctx.strokeStyle = `rgba(212,165,116,${(1 - ratio) * 0.09})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Draw stars
      for (const s of st.stars) {
        let am = 1;
        if (s.dissolves && st.dissolveStart !== null) {
          const el = t - st.dissolveStart - s.dissolveDelay;
          if (el > 0) {
            am = Math.max(0, 1 - easeOutCubic(clamp(el / 0.9, 0, 1)));
            if (am < 0.01) continue;
          }
        }

        const tw = twinkle ? (0.5 + 0.5 * Math.sin(t * s.sp + s.ph)) : 1;
        const a  = s.base * tw * am;

        if (s.isNode) {
          // Exact Scene4 glowDot: bright core + golden halo
          glowDot(ctx, s.x, s.y, s.r, s.r * 3.8, a);
        } else {
          // Tiny flat dot — no gradient, clean pixel-like appearance
          ctx.fillStyle = `rgba(232,199,154,${a})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    },
  });

  return React.createElement('canvas', { ref, className, style });
}
