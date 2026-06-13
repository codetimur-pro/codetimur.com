import React from 'react';
import { useFxCanvas } from './useFxCanvas';
import { rand } from './utils';

export function DustField({ active, density = 1, xRange = [0, 1], className = 'fx', style }) {
  const x0 = xRange[0], x1 = xRange[1], span = x1 - x0;

  const ref = useFxCanvas({
    active: true,
    init: (ctx, w, h) => {
      const count = Math.round((w * h * span) / 10000 * density);
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: (x0 + Math.random() * span) * w,
          y: Math.random() * h,
          r: rand(0.5, 2.4),
          vx: rand(-0.05, 0.05),
          vy: rand(-0.14, -0.04),
          base: rand(0.07, 0.48),
          ph: Math.random() * Math.PI * 2,
          sp: rand(0.25, 0.85),
          wobbleAmp: rand(0.02, 0.12),
          wobblePh: Math.random() * Math.PI * 2,
          wobbleSp: rand(0.18, 0.55),
        });
      }
      return { particles };
    },
    frame: (ctx, w, h, t, st) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of st.particles) {
        p.x += p.vx + Math.sin(t * p.wobbleSp + p.wobblePh) * p.wobbleAmp;
        p.y += p.vy;
        if (p.y < -12) { p.y = h + 8; p.x = (x0 + Math.random() * span) * w; }
        if (p.x < x0 * w - 12) p.x = x1 * w + 12;
        if (p.x > x1 * w + 12) p.x = x0 * w - 12;
        const tw = 0.5 + 0.5 * Math.sin(t * p.sp + p.ph);
        const a = p.base * tw;
        if (a < 0.01) continue;
        const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.8);
        gr.addColorStop(0,   `rgba(255,242,208,${Math.min(a, 1)})`);
        gr.addColorStop(0.3, `rgba(221,189,125,${Math.min(a * 0.55, 1)})`);
        gr.addColorStop(1,   'rgba(0,0,0,0)');
        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.8, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    deps: [x0, x1, density],
  });
  return React.createElement('canvas', { ref, className, style });
}
