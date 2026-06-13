import React, { useRef, useEffect } from 'react';
import { useFxCanvas } from './useFxCanvas';
import { rand, clamp, easeOutCubic } from './utils';

export function StarField({ active: sceneActive = true, density = 1, twinkle = true, className = 'fx', style, radiusScale = 1, dissolveRatio = 0, yMax = 1.0 }) {
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
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h * yMax,
          r: rand(0.3, 1.4) * radiusScale,
          base: rand(0.12, 0.6),
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.4, 1.4),
          warm: Math.random() < 0.4,
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
      for (const s of st.stars) {
        let am = 1;
        if (s.dissolves && st.dissolveStart !== null) {
          const el = t - st.dissolveStart - s.dissolveDelay;
          if (el > 0) {
            am = Math.max(0, 1 - easeOutCubic(clamp(el / 0.9, 0, 1)));
            if (am < 0.01) continue;
          }
        }
        const tw = twinkle ? (0.6 + 0.4 * Math.sin(t * s.sp + s.ph)) : 1;
        const a = s.base * tw * am;
        const glowR = s.r * 2.8;
        const warm = s.warm;
        const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
        const peak = Math.min(a, 1);
        gr.addColorStop(0,    warm ? `rgba(255,243,220,${peak})` : `rgba(242,236,224,${peak * 0.9})`);
        gr.addColorStop(0.35, warm ? `rgba(221,189,125,${peak * 0.45})` : `rgba(230,224,210,${peak * 0.38})`);
        gr.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2); ctx.fill();
      }
    },
  });
  return React.createElement('canvas', { ref, className, style });
}
