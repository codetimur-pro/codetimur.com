import { useRef, useEffect } from 'react';

export function useFxCanvas(opts) {
  const { active, init, frame, autostartMs = 0, deps = [] } = opts;
  const ref = useRef(null);
  const stateRef = useRef(null);
  const rafRef = useRef(0);
  const startRef = useRef(0);
  const sizeRef = useRef({ w: 1, h: 1 }); // cached — avoids per-frame getBoundingClientRect

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const r = canvas.getBoundingClientRect();
      const w = Math.max(1, r.width);
      const h = Math.max(1, r.height);
      sizeRef.current = { w, h };
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stateRef.current = init ? init(ctx, w, h) : {};
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => { ro.disconnect(); cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let running = true;
    startRef.current = performance.now();

    function loop(now) {
      if (!running) return;
      const { w, h } = sizeRef.current;
      if (w > 0 && h > 0 && frame && stateRef.current) {
        frame(ctx, w, h, (now - startRef.current) / 1000, stateRef.current, active);
      }
      rafRef.current = requestAnimationFrame(loop);
    }
    if (active || autostartMs) {
      rafRef.current = requestAnimationFrame(loop);
    }
    return () => { running = false; cancelAnimationFrame(rafRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, ...deps]);

  return ref;
}
