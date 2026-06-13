import { useRef, useEffect } from 'react';

export function useFxCanvas(opts) {
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
      const r = canvas.getBoundingClientRect();
      const w = r.width, h = r.height;
      const t = (now - startRef.current) / 1000;
      if (frame && stateRef.current) frame(ctx, w, h, t, stateRef.current, active);
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
