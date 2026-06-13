import React, { useRef, useEffect } from 'react';
import { useFxCanvas } from './useFxCanvas';
import { rand, clamp, easeOutCubic } from './utils';

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
      const count = Math.round((w * h) / 5500 * density);
      const dissolveCount = Math.floor(count * dissolveRatio);
      const dissolveSet = new Set();
      if (dissolveCount > 0) {
        while (dissolveSet.size < dissolveCount) dissolveSet.add(Math.floor(Math.random() * count));
      }
      const stars = [];
      for (let i = 0; i < count; i++) {
        const bright = Math.random();
        const isBig = bright < 0.06;
        const dis = dissolveSet.has(i);
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h * yMax,
          r: (isBig ? rand(1.1, 1.6) : rand(0.3, 0.75)) * radiusScale,
          isBig,
          peak: rand(0.22, 0.74),
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.012, 0.034),
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

        // Convert time in seconds to match apps/ page freq (which uses frame count)
        const tw = twinkle ? (0.38 + 0.62 * Math.sin(t * s.sp * 60 + s.ph)) : 1;
        const alpha = s.peak * tw * am;
        if (alpha < 0.005) continue;

        if (s.isBig) {
          const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 7);
          gr.addColorStop(0, `rgba(221,189,125,${alpha * 0.28})`);
          gr.addColorStop(1, 'rgba(221,189,125,0)');
          ctx.fillStyle = gr;
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 7, 0, Math.PI * 2); ctx.fill();
        }

        ctx.fillStyle = `rgba(242,230,200,${alpha})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
    },
  });

  return React.createElement('canvas', { ref, className, style });
}
