import React, { useRef, useEffect } from 'react';
import { useFxCanvas } from './useFxCanvas';
import { rand, clamp, easeOutCubic } from './utils';

// Exact glowDot from Scene4
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
      // Fixed count of constellation nodes: ~24 spread across viewport
      // Matches Scene4's 25-star look
      const nodeCount = Math.round(24 * Math.min(density, 1.5));
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: rand(0.04, 0.96) * w,
          y: rand(0.03, yMax * 0.92) * h,
          r: rand(2.2, 3.2) * radiusScale,
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.35, 0.85),
          base: rand(0.55, 0.82),
        });
      }

      // Constellation lines: connect nearby node pairs (like Scene4)
      const maxD = Math.min(w * 0.13, 110);
      const lines = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < maxD) lines.push([nodes[i], nodes[j], d / maxD]);
        }
      }

      // Tiny ambient background dots (very small, barely visible)
      const bgCount = Math.round((w * h) / 12000 * density);
      const dissolveCount = Math.floor(bgCount * dissolveRatio);
      const dissolveSet = new Set();
      if (dissolveCount > 0) {
        while (dissolveSet.size < dissolveCount) dissolveSet.add(Math.floor(Math.random() * bgCount));
      }
      const bg = [];
      for (let i = 0; i < bgCount; i++) {
        bg.push({
          x: Math.random() * w,
          y: Math.random() * h * yMax,
          r: rand(0.3, 0.75) * radiusScale,
          base: rand(0.07, 0.26),
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.3, 1.1),
          dissolves: dissolveSet.has(i),
          dissolveDelay: dissolveSet.has(i) ? Math.random() * 2.0 : 0,
        });
      }

      return { nodes, lines, bg, dissolveStart: null, wasActive: false };
    },

    frame: (ctx, w, h, t, st) => {
      const nowActive = sceneActiveRef.current;
      if (nowActive && !st.wasActive) st.dissolveStart = t;
      if (!nowActive) st.dissolveStart = null;
      st.wasActive = nowActive;

      ctx.clearRect(0, 0, w, h);

      // Constellation lines (subtle, like Scene4 at rest)
      ctx.lineWidth = 1;
      for (const [a, b, ratio] of st.lines) {
        ctx.strokeStyle = `rgba(228,196,134,${(1 - ratio) * 0.12})`;
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }

      // Constellation node stars — exact Scene4 glowDot
      for (const s of st.nodes) {
        const tw = twinkle ? (0.62 + 0.38 * Math.sin(t * s.sp + s.ph)) : 1;
        glowDot(ctx, s.x, s.y, s.r, s.r * 3.2, tw * s.base);
      }

      // Tiny ambient background dots
      for (const s of st.bg) {
        let am = 1;
        if (s.dissolves && st.dissolveStart !== null) {
          const el = t - st.dissolveStart - s.dissolveDelay;
          if (el > 0) {
            am = Math.max(0, 1 - easeOutCubic(clamp(el / 0.9, 0, 1)));
            if (am < 0.01) continue;
          }
        }
        const tw = twinkle ? (0.5 + 0.5 * Math.sin(t * s.sp + s.ph)) : 1;
        ctx.fillStyle = `rgba(232,199,154,${s.base * tw * am})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    },
  });

  return React.createElement('canvas', { ref, className, style });
}
