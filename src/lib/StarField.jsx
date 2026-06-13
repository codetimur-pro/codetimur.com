import React, { useRef, useEffect } from 'react';
import { useFxCanvas } from './useFxCanvas';
import { rand, clamp, easeOutCubic } from './utils';

// Gold palette matching apps/ page
const G1 = '232,199,154';
const G2 = '212,165,116';

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
        // 18% are constellation nodes (larger glowing balls)
        // 12% of remaining are pixel-square stars
        const isNode = Math.random() < 0.18;
        const isSq   = !isNode && Math.random() < 0.12;
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h * yMax,
          r: isNode
            ? rand(1.4, 2.4) * radiusScale
            : rand(0.3, 1.0) * radiusScale,
          base: isNode ? rand(0.38, 0.68) : rand(0.08, 0.42),
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.28, 1.1),
          isNode,
          isSq,
          dissolves: dis,
          dissolveDelay: dis ? Math.random() * 2.0 : 0,
        });
      }
      return { stars, dissolveStart: null, wasActive: false };
    },

    frame: (ctx, w, h, t, st) => {
      const nowActive = sceneActiveRef.current;
      if (nowActive && !st.wasActive) st.dissolveStart = t;
      if (!nowActive) st.dissolveStart = null;
      st.wasActive = nowActive;

      ctx.clearRect(0, 0, w, h);

      // Constellation lines between nearby node stars
      const nodes = st.stars.filter(s => s.isNode);
      const maxD = Math.min(w * 0.12, 88);
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < maxD) {
            ctx.strokeStyle = `rgba(${G2},${(1 - d / maxD) * 0.10})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw all stars
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
          // Large glowing ball — constellation node
          const glowR = s.r * 3.5;
          const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
          gr.addColorStop(0,    `rgba(255,240,210,${Math.min(1, a * 1.25)})`);
          gr.addColorStop(0.22, `rgba(${G1},${a})`);
          gr.addColorStop(0.55, `rgba(${G2},${a * 0.32})`);
          gr.addColorStop(1,    'rgba(0,0,0,0)');
          ctx.fillStyle = gr;
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
          ctx.fill();
        } else if (s.isSq) {
          // Pixel-square micro star
          const ss = s.r * 2;
          ctx.fillStyle = `rgba(${G1},${a})`;
          ctx.fillRect(s.x - ss / 2, s.y - ss / 2, ss, ss);
        } else {
          // Tiny round twinkling star
          const glowR = s.r * 2.6;
          const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
          gr.addColorStop(0,   `rgba(255,243,220,${Math.min(1, a)})`);
          gr.addColorStop(0.38,`rgba(${G1},${a * 0.42})`);
          gr.addColorStop(1,   'rgba(0,0,0,0)');
          ctx.fillStyle = gr;
          ctx.beginPath();
          ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    },
  });

  return React.createElement('canvas', { ref, className, style });
}
