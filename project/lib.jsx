/* lib.jsx — shared helpers + canvas engine for Код Тимура landing
   Exports to window: useFxCanvas, StarField, util (lerp/clamp/rand/easeOutCubic...) */
(function () {
  const { useRef, useEffect } = React;

  /* ---------- math utils ---------- */
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const rand = (a, b) => a + Math.random() * (b - a);
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const easeOutBack = (t) => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2); };

  const prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- hi-dpi canvas + RAF loop ----------
     opts.init(ctx, w, h)  -> returns a state object (re-run on resize)
     opts.frame(ctx, w, h, time, state)  -> per-frame draw
     active: only animates when true (saves CPU on inactive scenes)        */
  function useFxCanvas(opts) {
    const { active, init, frame, autostartMs = 0, deps = [] } = opts;
    const ref = useRef(null);
    const stateRef = useRef(null);
    const rafRef = useRef(0);
    const startRef = useRef(0);

    useEffect(() => {
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);

      function resize() {
        const r = canvas.getBoundingClientRect();
        w = Math.max(1, r.width); h = Math.max(1, r.height);
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        stateRef.current = init ? init(ctx, w, h) : {};
      }
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(canvas);

      return () => { ro.disconnect(); cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line
    }, deps);

    useEffect(() => {
      const canvas = ref.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      let running = true;
      startRef.current = performance.now();

      function loop(now) {
        if (!running) return;
        const r = canvas.getBoundingClientRect();
        const w = r.width, h = r.height;
        const t = (now - startRef.current) / 1000;
        if (frame && stateRef.current) frame(ctx, w, h, t, stateRef.current, active);
        rafRef.current = requestAnimationFrame(loop);
      }
      // run when active; keep a gentle idle loop for ambient layers if autostart
      if (active || autostartMs) {
        rafRef.current = requestAnimationFrame(loop);
      }
      return () => { running = false; cancelAnimationFrame(rafRef.current); };
    // eslint-disable-next-line
    }, [active, ...deps]);

    return ref;
  }

  /* ---------- StarField: layered ambient starfield (warm gold) ----------
     props: density (0..1), big (bool — include a few glowing nodes), active */
  function StarField({ active: sceneActive = true, density = 1, twinkle = true, className = 'fx', style, radiusScale = 1, dissolveRatio = 0, yMax = 1.0 }) {
    const sceneActiveRef = useRef(false);
    useEffect(() => { sceneActiveRef.current = sceneActive; }, [sceneActive]);

    const ref = useFxCanvas({
      active: true,           // ambient always alive but cheap
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
          // Soft glow — no hard circle edge, pure scintillation
          const glowR = s.r * 2.8;
          const warm = s.warm;
          const gr = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, glowR);
          const peak = Math.min(a, 1);
          gr.addColorStop(0,   warm ? `rgba(255,243,220,${peak})` : `rgba(242,236,224,${peak * 0.9})`);
          gr.addColorStop(0.35, warm ? `rgba(221,189,125,${peak * 0.45})` : `rgba(230,224,210,${peak * 0.38})`);
          gr.addColorStop(1,   'rgba(0,0,0,0)');
          ctx.fillStyle = gr;
          ctx.beginPath(); ctx.arc(s.x, s.y, glowR, 0, Math.PI * 2); ctx.fill();
        }
      },
    });
    return React.createElement('canvas', { ref, className, style });
  }

  /* ---------- DustField: slowly drifting golden dust particles ---------- */
  function DustField({ active, density = 1, className = 'fx', style }) {
    const ref = useFxCanvas({
      active: true,
      init: (ctx, w, h) => {
        const count = Math.round((w * h) / 10000 * density);
        const particles = [];
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * w,
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
          if (p.y < -12) { p.y = h + 8; p.x = Math.random() * w; }
          if (p.x < -12) p.x = w + 12;
          if (p.x > w + 12) p.x = -12;
          const tw = 0.5 + 0.5 * Math.sin(t * p.sp + p.ph);
          const a = p.base * tw;
          if (a < 0.01) continue;
          const gr = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.8);
          gr.addColorStop(0,    `rgba(255,242,208,${Math.min(a, 1)})`);
          gr.addColorStop(0.3,  `rgba(221,189,125,${Math.min(a * 0.55, 1)})`);
          gr.addColorStop(1,    'rgba(0,0,0,0)');
          ctx.fillStyle = gr;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.8, 0, Math.PI * 2);
          ctx.fill();
        }
      },
    });
    return React.createElement('canvas', { ref, className, style });
  }

  window.CTlib = { lerp, clamp, rand, easeOutCubic, easeInOutCubic, easeOutBack, prefersReduced };
  window.useFxCanvas = useFxCanvas;
  window.StarField = StarField;
  window.DustField = DustField;
})();
