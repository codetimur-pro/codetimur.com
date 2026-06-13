/* app.jsx — step machine, navigation, tweaks, scene composition */
(function () {
  const e = React.createElement;
  const { useState, useEffect, useRef, useCallback } = React;

  /* ---- step map: each step -> {screen, sub} ---- */
  const STEPS = [
    { screen: 0, sub: 0 },                 // 1 Старт
    { screen: 1, sub: 0 }, { screen: 1, sub: 1 }, // 2 Генезис A/B
    { screen: 2, sub: 0 }, { screen: 2, sub: 1 }, // 3 Правила игры A/B
    { screen: 3, sub: 0 },                 // 4 Экосистема (один экран)
    { screen: 4, sub: 0 },                 // 5 Движение
    { screen: 5, sub: 0 },                 // 6 Проводник
    { screen: 6, sub: 0 },                 // 7 Миссия
  ];
  const LAST = STEPS.length - 1;
  const MAXSUB = { 1: 1, 2: 1 };
  const FIRST_STEP = [0, 1, 3, 5, 6, 7, 8];
  const SCREENS = [
    { title: 'Старт' }, { title: 'Исходный код' }, { title: 'Структура' },
    { title: 'Экосистема' }, { title: 'Движение' }, { title: 'Проводник' }, { title: 'Миссия' },
  ];

  /* ---- font loading ---- */
  const SERIF_FAMILY = { 'Cormorant Garamond': 'Cormorant Garamond', 'Playfair': 'Playfair Display', 'PT Serif': 'PT Serif', 'Lora': 'Lora' };
  const SANS_FAMILY = { 'Manrope': 'Manrope', 'Inter': 'Inter', 'Golos': 'Golos Text' };
  const loaded = new Set(['Cormorant Garamond', 'Manrope']);
  function loadFont(family) {
    if (!family || loaded.has(family)) return;
    loaded.add(family);
    const l = document.createElement('link');
    l.rel = 'stylesheet';
    l.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap`;
    document.head.appendChild(l);
  }

  const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
    "serif": "Cormorant Garamond",
    "sans": "Manrope",
    "warmth": 0.42
  }/*EDITMODE-END*/;

  function App() {
    const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
    const [step, setStep] = useState(() => {
      const s = parseInt(localStorage.getItem('ct_home_step_v2') || '0', 10);
      return isNaN(s) ? 0 : Math.max(0, Math.min(LAST, s));
    });
    const lockRef = useRef(0);
    const stepRef = useRef(step);
    useEffect(() => { stepRef.current = step; localStorage.setItem('ct_home_step_v2', String(step)); }, [step]);

    const go = useCallback((n) => {
      if (window.__launchLock && !window.__rocketFlying && n !== 0) return;   // allow scene cycling during rocket flight
      const next = Math.max(0, Math.min(LAST, n));
      setStep(next);
    }, []);
    const advance = useCallback(() => go(stepRef.current + 1), [go]);
    useEffect(() => { window.__ctGoTo = go; return () => { delete window.__ctGoTo; }; }, [go]);

    /* ---- tweaks -> CSS vars + fonts ---- */
    useEffect(() => {
      const root = document.documentElement;
      const sf = SERIF_FAMILY[t.serif] || 'Cormorant Garamond';
      const sn = SANS_FAMILY[t.sans] || 'Manrope';
      loadFont(sf); loadFont(sn);
      root.style.setProperty('--serif', `'${sf}', 'Cormorant Garamond', Georgia, serif`);
      root.style.setProperty('--sans', `'${sn}', system-ui, sans-serif`);
      root.style.setProperty('--warm-a', String(t.warmth));
    }, [t.serif, t.sans, t.warmth]);

    /* ---- input: wheel / keys / touch ---- */
    useEffect(() => {
      function gate(dir) {
        if (window.__launchLock) return;
        const now = performance.now();
        if (now - lockRef.current < 850) return;
        lockRef.current = now;
        go(stepRef.current + dir);
      }
      function onWheel(ev) {
        ev.preventDefault();
        if (Math.abs(ev.deltaY) < 8) return;
        gate(ev.deltaY > 0 ? 1 : -1);
      }
      function onKey(ev) {
        if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(ev.key)) { ev.preventDefault(); gate(1); }
        else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(ev.key)) { ev.preventDefault(); gate(-1); }
        else if (ev.key === 'Home') go(0);
        else if (ev.key === 'End') go(LAST);
      }
      let ty = 0;
      function ts(ev) { ty = ev.touches[0].clientY; }
      function te(ev) {
        const dy = ty - (ev.changedTouches[0].clientY);
        if (Math.abs(dy) > 42) gate(dy > 0 ? 1 : -1);
      }
      window.addEventListener('wheel', onWheel, { passive: false });
      window.addEventListener('keydown', onKey);
      window.addEventListener('touchstart', ts, { passive: true });
      window.addEventListener('touchend', te, { passive: true });
      return () => {
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('keydown', onKey);
        window.removeEventListener('touchstart', ts);
        window.removeEventListener('touchend', te);
      };
    }, [go]);

    const cur = STEPS[step];
    const subFor = (i) => (cur.screen === i ? cur.sub : (i < cur.screen ? (MAXSUB[i] || 0) : 0));
    const isActive = (i) => cur.screen === i;
    const sceneProps = (i) => ({ active: isActive(i), sub: subFor(i), onTap: advance });

    return e(React.Fragment, null,
      e('div', { className: 'stage' },
        e(window.Scene1, sceneProps(0)),
        e(window.Scene2, sceneProps(1)),
        e(window.Scene3, sceneProps(2)),
        e(window.Scene4, sceneProps(3)),
        e(window.Scene5, sceneProps(4)),
        e(window.Scene6, sceneProps(5)),
        e(window.Scene7, sceneProps(6)),
        /* Scene8 hidden — будет добавлен позже */
        /* e(window.Scene8, sceneProps(7)) */
      ),
      e(window.TopBar),
      e(window.Rail, { screens: SCREENS, screen: cur.screen, onJump: (i) => go(FIRST_STEP[i]) }),
      e(window.Counter, { cur: cur.screen + 1, total: SCREENS.length, label: SCREENS[cur.screen].title }),

      e(window.TweaksPanel, null,
        e(window.TweakSection, { label: 'Типографика' }),
        e(window.TweakSelect, {
          label: 'Заголовки (serif)', value: t.serif,
          options: Object.keys(SERIF_FAMILY),
          onChange: (v) => setTweak('serif', v),
        }),
        e(window.TweakSelect, {
          label: 'Текст (sans)', value: t.sans,
          options: Object.keys(SANS_FAMILY),
          onChange: (v) => setTweak('sans', v),
        }),
        e(window.TweakSection, { label: 'Атмосфера' }),
        e(window.TweakSlider, {
          label: 'Тёплое свечение', value: t.warmth, min: 0, max: 0.8, step: 0.02,
          onChange: (v) => setTweak('warmth', v),
        })
      )
    );
  }

  ReactDOM.createRoot(document.getElementById('root')).render(e(App));
})();
