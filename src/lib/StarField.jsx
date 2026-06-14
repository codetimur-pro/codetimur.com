import React, { useRef, useEffect } from 'react';
import { useFxCanvas } from './useFxCanvas';
import { clamp, easeOutCubic } from './utils';

// Exact constants from apps/index.html
const GL   = '232,199,154'; // gold-light (halo)
const SNOW = '255,248,235'; // near-white (star core)

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
    active: sceneActive,   // pause RAF for inactive scenes
    init: (ctx, w, h) => {
      // Exact formula from apps/index.html buildBgStars(), scaled by density
      const n = Math.max(28, Math.round(w * h / 5500 * density));
      const dissolveCount = Math.floor(n * dissolveRatio);
      const dissolveSet = new Set();
      if (dissolveCount > 0) {
        while (dissolveSet.size < dissolveCount) dissolveSet.add(Math.floor(Math.random() * n));
      }

      const stars = [];
      for (let i = 0; i < n; i++) {
        const bright = Math.random();
        const isBig  = bright < 0.06;
        const dis    = dissolveSet.has(i);
        stars.push({
          x:     Math.random() * w,
          y:     Math.random() * h * yMax,
          // exact r formula from apps page, scaled by radiusScale
          r:     (isBig ? 1.1 + Math.random() * 0.5 : 0.3 + Math.random() * 0.45) * radiusScale,
          phase: Math.random() * Math.PI * 2,
          freq:  0.012 + Math.random() * 0.022, // per-frame rate (same as apps page)
          peak:  0.22 + Math.random() * 0.52,
          isBig,
          dissolves:    dis,
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

        // Exact formula from apps page: time is frame count, freq is per-frame
        // t is in seconds → multiply by 60 to convert to frame count equivalent
        const tw = twinkle
          ? s.peak * (0.38 + 0.62 * Math.sin(t * 60 * s.freq + s.phase))
          : s.peak;

        const alpha = tw * am;
        if (alpha < 0.005) continue;

        if (s.isBig) {
          // Exact halo from apps page
          const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 7);
          gr.addColorStop(0, `rgba(${GL},${alpha * 0.28})`);
          gr.addColorStop(1, `rgba(${GL},0)`);
          ctx.fillStyle = gr;
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 7, 0, Math.PI * 2); ctx.fill();
        }

        // Exact core from apps page
        ctx.fillStyle = `rgba(${SNOW},${alpha})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2); ctx.fill();
      }
    },
  });

  return React.createElement('canvas', { ref, className, style });
}
