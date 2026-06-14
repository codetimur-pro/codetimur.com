import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTweaks, TweaksPanel, TweakSection, TweakSlider, TweakSelect } from './tweaks/index.jsx';
import { TopBar } from './chrome/TopBar.jsx';
import { Rail } from './chrome/Rail.jsx';
import { Scene1 } from './scenes/Scene1.jsx';
import { Scene2 } from './scenes/Scene2.jsx';
import { Scene3 } from './scenes/Scene3.jsx';
import { Scene4 } from './scenes/Scene4.jsx';
import { Scene5 } from './scenes/Scene5.jsx';
import { Scene6 } from './scenes/Scene6.jsx';
import { Scene7 } from './scenes/Scene7.jsx';
// import { Scene8 } from './scenes/Scene8.jsx';

const e = React.createElement;

const STEPS = [
  { screen: 0, sub: 0 },
  { screen: 1, sub: 0 }, { screen: 1, sub: 1 },
  { screen: 2, sub: 0 }, { screen: 2, sub: 1 },
  { screen: 3, sub: 0 },
  { screen: 4, sub: 0 },
  { screen: 5, sub: 0 },
  { screen: 6, sub: 0 },
];
const LAST = STEPS.length - 1;
const MAXSUB = { 1: 1, 2: 1 };
const FIRST_STEP = [0, 1, 3, 5, 6, 7, 8];
const SCREENS = [
  { title: 'Старт' }, { title: 'Исходный код' }, { title: 'Структура' },
  { title: 'Экосистема' }, { title: 'Движение' }, { title: 'Проводник' }, { title: 'Миссия' },
];

const SERIF_FAMILY = { 'Cormorant Garamond': 'Cormorant Garamond', 'Playfair': 'Playfair Display', 'PT Serif': 'PT Serif', 'Lora': 'Lora' };
const SANS_FAMILY  = { 'Manrope': 'Manrope', 'Inter': 'Inter', 'Golos': 'Golos Text' };
const loaded = new Set(['Cormorant Garamond', 'Manrope']);
function loadFont(family) {
  if (!family || loaded.has(family)) return;
  loaded.add(family);
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&display=swap`;
  document.head.appendChild(l);
}

const TWEAK_DEFAULTS = {
  serif: 'Cormorant Garamond',
  sans: 'Manrope',
  warmth: 0.42,
};

export default function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [step, setStep] = useState(0); // always start at scene 0
  const lockRef = useRef(0);
  const stepRef = useRef(step);
  useEffect(() => { stepRef.current = step; }, [step]);

  const go = useCallback((n) => {
    if (window.__launchLock && !window.__rocketFlying && n !== 0) return;
    const next = Math.max(0, Math.min(LAST, n));
    setStep(next);
  }, []);
  const advance = useCallback(() => go(stepRef.current + 1), [go]);
  useEffect(() => { window.__ctGoTo = go; return () => { delete window.__ctGoTo; }; }, [go]);

  // Reset to scene 0 when returning via back button (bfcache restore)
  useEffect(() => {
    function onPageShow(e) { if (e.persisted) setStep(0); }
    window.addEventListener('pageshow', onPageShow);
    return () => window.removeEventListener('pageshow', onPageShow);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const sf = SERIF_FAMILY[t.serif] || 'Cormorant Garamond';
    const sn = SANS_FAMILY[t.sans] || 'Manrope';
    loadFont(sf); loadFont(sn);
    root.style.setProperty('--serif', `'${sf}', 'Cormorant Garamond', Georgia, serif`);
    root.style.setProperty('--sans', `'${sn}', system-ui, sans-serif`);
    root.style.setProperty('--warm-a', String(t.warmth));
  }, [t.serif, t.sans, t.warmth]);

  useEffect(() => {
    function gate(dir) {
      if (window.__launchLock) return;
      const now = performance.now();
      if (now - lockRef.current < 700) return;
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
      e(Scene1, sceneProps(0)),
      e(Scene2, sceneProps(1)),
      e(Scene3, sceneProps(2)),
      e(Scene4, sceneProps(3)),
      e(Scene5, sceneProps(4)),
      e(Scene6, sceneProps(5)),
      e(Scene7, sceneProps(6)),
      // e(Scene8, sceneProps(7)),
    ),
    e(TopBar),
    e(Rail, { screens: SCREENS, screen: cur.screen, onJump: (i) => go(FIRST_STEP[i]) }),

    e('footer', { className: 'g-foot g-foot--fixed' + (cur.screen === 6 ? ' g-foot--visible' : '') },
      e('div', { className: 'g-foot-row' },
        e('a', { href: '/', className: 'g-foot-logo' },
          e('img', { src: 'assets/logo.svg', alt: 'Code Timur', height: 26 })
        ),
        e('nav', { className: 'g-foot-nav' },
          e('a', { href: '/apps/' }, 'Экосистема'),
          e('a', { href: '/mentorship/' }, 'Наставничество'),
          e('a', { href: '/teaching/' }, 'Учение'),
          e('a', { href: '/vision/' }, 'Видение'),
        ),
        e('div', { className: 'g-foot-right' },
          e('a', { className: 'g-foot-tg', href: 'https://t.me/codetimur', target: '_blank', rel: 'noopener' },
            e('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: 15, height: 15 },
              e('path', { d: 'M21.5 4.2 2.9 11.4c-1.3.5-1.3 1.2-.3 1.5l4.7 1.5 1.8 5.5c.2.6.4.8.8.8.4 0 .6-.2.8-.5l2.5-2.4 5.2 3.8c1 .5 1.6.3 1.9-.9l3.4-16c.4-1.5-.5-2.2-1.2-1.5z' })
            ),
            'Telegram'
          ),
          e('span', { className: 'g-foot-copy' }, '© 2026 · Код Тимура')
        )
      )
    ),
    e(TweaksPanel, null,
      e(TweakSection, { label: 'Типографика' }),
      e(TweakSelect, {
        label: 'Заголовки (serif)', value: t.serif,
        options: Object.keys(SERIF_FAMILY),
        onChange: (v) => setTweak('serif', v),
      }),
      e(TweakSelect, {
        label: 'Текст (sans)', value: t.sans,
        options: Object.keys(SANS_FAMILY),
        onChange: (v) => setTweak('sans', v),
      }),
      e(TweakSection, { label: 'Атмосфера' }),
      e(TweakSlider, {
        label: 'Тёплое свечение', value: t.warmth, min: 0, max: 0.8, step: 0.02,
        onChange: (v) => setTweak('warmth', v),
      })
    )
  );
}
