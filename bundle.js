const Hero = () => {
  // Floating gold particles overlaid on the right side (where the arrow lives).
  // Generated once and memoized so they don't reshuffle on re-renders.
  const particles = React.useMemo(() => {
    const N = 48;
    const rand = (a, b) => a + Math.random() * (b - a);
    return Array.from({
      length: N
    }, (_, i) => ({
      id: i,
      // Stay in the right ~50% of the hero
      x: rand(52, 98),
      y: rand(5, 92),
      size: rand(1.4, 3.6),
      delay: rand(0, 6),
      dur: rand(5, 11),
      drift: rand(-40, 40),
      bright: rand(0.55, 1)
    }));
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "hero",
    id: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__bg"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/hero-portrait.png",
    alt: "",
    className: "hero__bg-img",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__bg-shade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__bg-vignette"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__pulse"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__particles",
    "aria-hidden": "true"
  }, particles.map(p => /*#__PURE__*/React.createElement("span", {
    key: p.id,
    className: "hero__particle",
    style: {
      left: `${p.x}%`,
      top: `${p.y}%`,
      width: `${p.size}px`,
      height: `${p.size}px`,
      '--drift': `${p.drift}px`,
      '--bright': p.bright,
      animationDelay: `${p.delay}s`,
      animationDuration: `${p.dur}s`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hero__streak"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__bg-grain"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__copy"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "hero__title reveal"
  }, "\u0423\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "hero__title-em"
  }, "\u0442\u0432\u043E\u0435\u0439 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438", /*#__PURE__*/React.createElement("span", {
    className: "hero__period"
  }, "."))), /*#__PURE__*/React.createElement("p", {
    className: "hero__sub lede reveal"
  }, "\u041F\u0435\u0440\u0435\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0442\u0432\u043E\u0439 \u043A\u043E\u0434 \u0434\u043B\u044F \u0432\u044B\u0445\u043E\u0434\u0430 \u0432\xA0\u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\u0448\u0442\u0430\u0431: \u043C\u044B\u0448\u043B\u0435\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0438\u043B\u0438\u044F, \u044F\u0441\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441-\u0444\u043E\u043A\u0443\u0441 \u0438\xA0\u0430\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u0441\u043A\u0440\u044B\u0442\u043E\u0439 \u0441\u0432\u0435\u0440\u0445\u0441\u0438\u043B\u044B."), /*#__PURE__*/React.createElement("div", {
    className: "hero__actions reveal"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#session",
    className: "btn btn--solid"
  }, /*#__PURE__*/React.createElement("span", null, "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F"), /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#diagnosis",
    className: "hero__sub-link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__sub-link-line"
  }), "\u041F\u0440\u043E\u0439\u0442\u0438 \u0434\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0443")), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-num"
  }, "8+"), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-label"
  }, "\u041B\u0435\u0442 \u0432\xA0\u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0435")), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-num"
  }, "100+"), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-label"
  }, "\u0423\u0447\u0435\u043D\u0438\u043A\u043E\u0432 \u0432\xA0\u043F\u043E\u0442\u043E\u043A\u0435")), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-num"
  }, "3"), /*#__PURE__*/React.createElement("div", {
    className: "hero__meta-label"
  }, "\u0423\u0440\u043E\u0432\u043D\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B")))), /*#__PURE__*/React.createElement("div", {
    className: "hero__caption reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero__caption-tick"
  }), "\u0422\u0438\u043C\u0443\u0440 \xB7 \u0442\u0432\u043E\u0439 \u043C\u0435\u043D\u0442\u043E\u0440")), /*#__PURE__*/React.createElement("a", {
    href: "#diagnosis",
    className: "hero__scroll",
    "aria-label": "scroll"
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    className: "hero__scroll-line"
  })), /*#__PURE__*/React.createElement("style", null, `
        .hero {
          position: relative;
          padding: 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #050505;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          background: #070707;
        }
        .hero__bg-img {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: auto;
          max-width: 97%;
          object-fit: contain;
          object-position: right center;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        /* On wider screens the image's own dark left edge blends with the page bg — nothing to fix.
           On narrower viewports the image gets smaller; shrink ratio gracefully. */
        @media (max-width: 1400px) { .hero__bg-img { max-width: 100%; } }
        @media (max-width: 1100px) { .hero__bg-img { max-width: 88%; opacity: 0.95; } }
        @media (max-width: 880px)  {
          .hero__bg-img {
            max-width: none;
            width: 92%;
            height: 90%;
            top: 4%;
            right: 0;
            opacity: 0.88;
            object-position: 68% top;
            object-fit: cover;
          }
        }

        /* Gradient sweep keeps the LEFT side dark for the copy.
           Crucially: by ~50% horizontally, it's fully transparent so the face stays sharp. */
        .shadow__bg-shade {} /* placeholder so the next selector compiles even if order changes */
        .hero__bg-shade {
          position: absolute; inset: 0;
          background:
            linear-gradient(90deg, #070707 0%, #070707 18%, rgba(7,7,7,0.88) 30%, rgba(7,7,7,0.45) 42%, rgba(7,7,7,0.08) 52%, transparent 60%),
            linear-gradient(180deg, rgba(7,7,7,0.35) 0%, transparent 18%, transparent 76%, rgba(7,7,7,0.6) 100%);
        }
        @media (max-width: 880px) {
          .hero__bg-shade {
            background:
              linear-gradient(90deg, #070707 0%, #070707 24%, rgba(7,7,7,0.95) 36%, rgba(7,7,7,0.6) 48%, rgba(7,7,7,0.15) 60%, transparent 72%),
              linear-gradient(180deg, rgba(7,7,7,0.6) 0%, rgba(7,7,7,0.15) 18%, rgba(7,7,7,0.4) 62%, rgba(7,7,7,0.97) 100%);
          }
        }

        /* No vignette over the face. */
        .hero__bg-vignette { display: none; }
        .hero__bg-grain {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.012) 0, transparent 60%);
          mix-blend-mode: screen;
          pointer-events: none;
        }

        /* Slow pulsing aura over the gold arrow area — tightly contained, won't bleed onto the face */
        .hero__pulse {
          position: absolute;
          right: 2%;
          top: 50%;
          width: 26vw;
          max-width: 500px;
          aspect-ratio: 1/1;
          transform: translateY(-50%);
          background: radial-gradient(circle, rgba(232,199,154,0.16) 0%, rgba(212,165,116,0.06) 40%, transparent 72%);
          filter: blur(10px);
          pointer-events: none;
          animation: heroPulse 7s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @keyframes heroPulse {
          0%, 100% { opacity: 0.55; transform: translateY(-50%) scale(1); }
          50%      { opacity: 0.95; transform: translateY(-50%) scale(1.06); }
        }
        @media (max-width: 880px) { .hero__pulse { opacity: 0.45; } }

        /* Particles */
        .hero__particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        .hero__particle {
          position: absolute;
          border-radius: 50%;
          background: var(--gold-light);
          box-shadow: 0 0 6px var(--gold);
          opacity: 0;
          animation-name: heroParticle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @keyframes heroParticle {
          0%   { opacity: 0; transform: translate(0, 0) scale(0.6); }
          18%  { opacity: calc(var(--bright, 0.7) * 1); }
          50%  { transform: translate(calc(var(--drift) * 0.6), -28px) scale(1); }
          82%  { opacity: calc(var(--bright, 0.7) * 0.9); }
          100% { opacity: 0; transform: translate(var(--drift), -56px) scale(0.7); }
        }
        @media (max-width: 880px) { .hero__particles { opacity: 0.7; } }

        /* Slow streak traversing the arrow path */
        .hero__streak {
          position: absolute;
          right: -8%;
          top: 40%;
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(232,199,154,0.8) 50%, transparent);
          filter: blur(2px);
          transform-origin: right center;
          transform: rotate(-32deg);
          opacity: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          animation: heroStreak 7s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        @keyframes heroStreak {
          0%   { transform: rotate(-32deg) translateX(-30%); opacity: 0; }
          20%  { opacity: 0.7; }
          60%  { opacity: 0.9; }
          100% { transform: rotate(-32deg) translateX(25%); opacity: 0; }
        }
        @media (max-width: 880px) { .hero__streak { display: none; } }

        /* Photo is fully static — any breath/scale showed face pixels.
           Only the gold-side ambient effects (pulse, particles, streak) animate. */
        .hero__bg-img { animation: none; }
        @media (prefers-reduced-motion: reduce) {
          .hero__pulse, .hero__particle, .hero__streak, .hero__bg-img { animation: none !important; }
        }

        .hero__inner {
          position: relative;
          z-index: 1;
          width: 100%;
          padding-top: 110px;
          padding-bottom: 120px;
          padding-left: 48px;
          padding-right: 48px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (max-width: 880px) {
          .hero__inner { padding-top: 100px; padding-bottom: 100px; padding-left: 24px; padding-right: 24px; }
        }

        .hero__copy {
          display: grid;
          gap: 32px;
          max-width: 640px;
        }

        .hero__title { letter-spacing: -0.01em; }
        .hero__title-em {
          font-style: italic;
          color: var(--gold-light);
          font-weight: 300;
        }
        .hero__period { color: var(--gold); }
        .hero__sub { max-width: 52ch; }

        .hero__actions {
          display: flex; align-items: center; gap: 32px;
          flex-wrap: wrap;
          margin-top: 8px;
        }
        .hero__sub-link {
          font-family: var(--body);
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--muted);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          transition: color .3s ease;
        }
        .hero__sub-link:hover { color: var(--text); }
        .hero__sub-link-line {
          width: 24px; height: 1px; background: currentColor;
          transition: width .3s ease;
        }
        .hero__sub-link:hover .hero__sub-link-line { width: 40px; }

        .hero__meta {
          display: flex; align-items: center; gap: 28px;
          margin-top: 24px;
          padding-top: 28px;
          border-top: 1px solid var(--line-soft);
          max-width: 520px;
        }
        .hero__meta-num {
          font-family: var(--display);
          font-size: 36px;
          font-weight: 300;
          color: var(--gold);
          line-height: 1;
        }
        .hero__meta-label {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--muted);
          margin-top: 8px;
          line-height: 1.4;
        }
        .hero__meta-divider {
          width: 1px; height: 38px;
          background: var(--line-soft);
        }

        .hero__caption {
          position: absolute;
          right: 48px; bottom: 84px;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--gold-light);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(7,7,7,0.55);
          backdrop-filter: blur(8px);
          padding: 10px 16px;
          border: 1px solid var(--line);
          z-index: 2;
        }
        @media (max-width: 880px) {
          .hero__caption { right: 22px; bottom: 96px; }
        }
        @media (max-width: 520px) {
          .hero__caption { display: none; }
        }
        .hero__caption-tick {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--gold);
        }

        .hero__scroll {
          position: absolute;
          left: 48px; bottom: 32px;
          display: inline-flex;
          align-items: center;
          gap: 14px;
          flex-direction: column;
          color: var(--muted);
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color .3s ease;
          z-index: 2;
        }
        .hero__scroll:hover { color: var(--gold); }
        .hero__scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(180deg, var(--muted), transparent);
          position: relative;
          overflow: hidden;
        }
        .hero__scroll-line::after {
          content: "";
          position: absolute;
          top: -50%; left: 0;
          width: 100%; height: 50%;
          background: linear-gradient(180deg, transparent, var(--gold));
          animation: scrollDown 2.4s ease-in-out infinite;
        }
        @keyframes scrollDown {
          0% { top: -50%; }
          100% { top: 100%; }
        }
        @media (max-width: 720px) { .hero__scroll { display: none; } }

        /* ── Mobile refinements ── */
        @media (max-width: 880px) {
          /* Bigger title */
          .hero__title { font-size: clamp(46px, 12vw, 62px); }

          /* Narrow subtitle so face is visible on right */
          .hero__sub { max-width: 54%; }

          /* More vertical breathing between copy blocks */
          .hero__copy { gap: 36px; max-width: 100%; }

          /* Push actions down with more space */
          .hero__actions { margin-top: 20px; gap: 20px; }

          /* Stats: compact to fit small screens */
          .hero__meta {
            gap: 14px;
            max-width: 100%;
            flex-wrap: nowrap;
            margin-top: 36px;
            padding-top: 24px;
          }
          .hero__meta-num { font-size: 26px; }
          .hero__meta-label {
            font-size: 9px;
            letter-spacing: 0.1em;
            margin-top: 5px;
          }
          .hero__meta-divider { height: 26px; }
        }
      `));
};
const heroRoot = ReactDOM.createRoot(document.getElementById('hero-root'));
heroRoot.render(/*#__PURE__*/React.createElement(Hero, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const DIAG_CARDS = [{
  n: "01",
  signal: "Апатия. Лень.",
  sub: "Не хочу — и не делаю.",
  diagnosis: "Ты движешься не туда. Цели навязаны извне, тело отказывается их обслуживать."
}, {
  n: "02",
  signal: "Прокрастинация.",
  sub: "Хочу — но не делаю.",
  diagnosis: "Внутренний конфликт. Страх масштаба блокирует доступ к энергии действия."
}, {
  n: "03",
  signal: "Действие через «надо».",
  sub: "Не хочу — но делаю.",
  diagnosis: "Жёсткая привязка к результату. Излишнее давление на себя выжигает топливо."
}, {
  n: "04",
  signal: "Выгорание.",
  sub: "Не могу и не делаю. Нет сил.",
  diagnosis: "Системный сбой. Ты слишком долго ехал на ручнике, действуя из жёсткого «надо». Психика отключила подачу энергии — действия только высасывали ресурс, ничего не возвращая взамен."
}, {
  n: "05",
  signal: "Низкая эффективность.",
  sub: "Делаю — но без результата.",
  diagnosis: "Нет внутренней веры в себя и в свои действия. Поле не отзывается."
}, {
  n: "06",
  signal: "Потеря смысла.",
  sub: "Результат есть — но не радует.",
  diagnosis: "Остановка в масштабе. Ты сошёл с пути истинной самореализации."
}];
const DiagCard = ({
  card,
  index
}) => {
  const [tapped, setTapped] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: `diag-card ${tapped ? 'is-flipped' : ''}`,
    style: {
      '--i': index
    },
    onClick: () => setTapped(t => !t)
  }, /*#__PURE__*/React.createElement("div", {
    className: "diag-card__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "diag-card__face diag-card__face--front"
  }, /*#__PURE__*/React.createElement("div", {
    className: "diag-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "numeral"
  }, card.n), /*#__PURE__*/React.createElement("span", {
    className: "diag-card__tag"
  }, "\u0421\u0438\u0433\u043D\u0430\u043B")), /*#__PURE__*/React.createElement("div", {
    className: "diag-card__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "diag-card__title"
  }, card.signal), /*#__PURE__*/React.createElement("p", {
    className: "diag-card__sub"
  }, card.sub)), /*#__PURE__*/React.createElement("div", {
    className: "diag-card__foot"
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0443\u0442\u044C"), /*#__PURE__*/React.createElement("span", {
    className: "diag-card__flip-icon"
  }, "\u293A"))), /*#__PURE__*/React.createElement("div", {
    className: "diag-card__face diag-card__face--back"
  }, /*#__PURE__*/React.createElement("div", {
    className: "diag-card__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "numeral",
    style: {
      color: 'var(--gold-light)'
    }
  }, card.n), /*#__PURE__*/React.createElement("span", {
    className: "diag-card__tag diag-card__tag--gold"
  }, "\u0414\u0438\u0430\u0433\u043D\u043E\u0437")), /*#__PURE__*/React.createElement("div", {
    className: "diag-card__body"
  }, /*#__PURE__*/React.createElement("p", {
    className: "diag-card__diagnosis"
  }, card.diagnosis)), /*#__PURE__*/React.createElement("div", {
    className: "diag-card__foot diag-card__foot--gold"
  }, /*#__PURE__*/React.createElement("span", null, "\u041D\u0430\u0437\u0430\u0434 \u043A \u0441\u0438\u0433\u043D\u0430\u043B\u0443")))));
};
const Diagnosis = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "diag",
    id: "diagnosis"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "01", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u0414\u0438\u0430\u0433\u043D\u043E\u0441\u0442\u0438\u043A\u0430"))), /*#__PURE__*/React.createElement("h2", {
    className: "reveal"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438, \u0447\u0442\u043E \u0441\u0435\u0439\u0447\u0430\u0441", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "\u043F\u0440\u043E\xA0\u0442\u0435\u0431\u044F"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal"
  }, "\u0428\u0435\u0441\u0442\u044C \u0441\u0438\u0433\u043D\u0430\u043B\u043E\u0432 \u0432\xA0\u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0441\u0442\u043E\u043F\u043E\u0440\u0438\u0442\u0441\u044F \u0442\u0432\u043E\u044F \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u044F. \u041F\u0435\u0440\u0435\u0432\u0435\u0440\u043D\u0438 \u043A\u0430\u0440\u0442\u0443, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C, \u0447\u0442\u043E\xA0\u0441\u0442\u043E\u0438\u0442 \u0437\u0430\xA0\u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u044C\u044E.")), /*#__PURE__*/React.createElement("div", {
    className: "diag__grid"
  }, DIAG_CARDS.map((c, i) => /*#__PURE__*/React.createElement(DiagCard, {
    key: c.n,
    card: c,
    index: i
  })))), /*#__PURE__*/React.createElement("style", null, `
        .diag__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        @media (max-width: 980px) { .diag__grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 620px)  { .diag__grid { grid-template-columns: 1fr; } }

        .diag-card {
          aspect-ratio: 3/4;
          cursor: pointer;
          position: relative;
          perspective: 1400px;
        }
        .diag-card__inner {
          position: relative;
          width: 100%; height: 100%;
        }

        .diag-card__face {
          position: absolute; inset: 0;
          padding: 32px 28px;
          display: flex; flex-direction: column;
          justify-content: space-between;
          background: linear-gradient(165deg, #0e0d0b 0%, #070707 100%);
          border: 1px solid var(--line-soft);
          transition: opacity .55s ease, transform .65s cubic-bezier(.4,.05,.2,1), border-color .6s ease;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-origin: center center;
        }
        .diag-card__face--front {
          opacity: 1;
          transform: rotateY(0deg);
          z-index: 2;
        }
        .diag-card__face--back {
          opacity: 0;
          transform: rotateY(180deg);
          background:
            radial-gradient(120% 80% at 30% 0%, rgba(212,165,116,0.10), transparent 60%),
            linear-gradient(165deg, #14110d 0%, #0a0907 100%);
          border-color: var(--line);
          z-index: 1;
        }
        /* hover flip (desktop) — pure CSS, always returns */
        @media (hover: hover) {
          .diag-card:hover .diag-card__face--front {
            opacity: 0;
            transform: rotateY(-180deg);
            z-index: 1;
          }
          .diag-card:hover .diag-card__face--back {
            opacity: 1;
            transform: rotateY(0deg);
            z-index: 2;
          }
        }
        /* tap flip (mobile + sticky toggle) */
        .diag-card.is-flipped .diag-card__face--front {
          opacity: 0;
          transform: rotateY(-180deg);
          z-index: 1;
        }
        .diag-card.is-flipped .diag-card__face--back {
          opacity: 1;
          transform: rotateY(0deg);
          z-index: 2;
        }

        .diag-card:hover .diag-card__face--front,
        .diag-card.is-flipped .diag-card__face--front { border-color: var(--line-soft); }

        .diag-card__head {
          display: flex; align-items: center; justify-content: space-between;
        }
        .diag-card__tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
          padding: 6px 10px;
          border: 1px solid var(--line-soft);
        }
        .diag-card__tag--gold {
          color: var(--gold);
          border-color: var(--line);
        }

        .diag-card__body { display: grid; gap: 12px; }
        .diag-card__title {
          font-family: var(--display);
          font-size: clamp(26px, 2.2vw, 34px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--text);
        }
        .diag-card__sub {
          font-style: italic;
          font-family: var(--display);
          color: var(--muted);
          font-size: 18px;
        }
        .diag-card__diagnosis {
          font-size: 16px;
          line-height: 1.6;
          color: var(--text);
        }

        .diag-card__foot {
          display: flex; align-items: center; justify-content: space-between;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .diag-card__foot--gold { color: var(--gold); }
        .diag-card__flip-icon {
          font-size: 16px;
          opacity: 0.8;
        }
      `));
};
const diagRoot = ReactDOM.createRoot(document.getElementById('diagnosis-root'));
diagRoot.render(/*#__PURE__*/React.createElement(Diagnosis, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const SPHERES = [{
  key: "mission",
  n: "I",
  title: "Миссия",
  fullTitle: "Реализация миссии",
  sub: "Какую ценность я создаю для мира?",
  body: "Твоя конечная цель и глобальный смысл. То, ради чего всё это создаётся. Желание помочь людям вырасти и развиться, которое масштабируется через твои проекты.",
  pos: {
    x: 33,
    y: 38
  },
  color: "168, 127, 79"
}, {
  key: "projects",
  n: "II",
  title: "Проекты",
  fullTitle: "Реализация проектов",
  sub: "Каким способом я создаю?",
  body: "Сферы, к которым тянется внимание — здоровье, технологии, искусство. Любимый способ, через который ты доставляешь ценность миру.",
  pos: {
    x: 67,
    y: 38
  },
  color: "232, 199, 154"
}, {
  key: "roles",
  n: "III",
  title: "Роли",
  fullTitle: "Реализация ролей",
  sub: "Кто я в этом?",
  body: "Уникальная комбинация твоих истинных качеств и навыков. Осознанный выбор ролей, которые ты играешь в бизнесе — чтобы процессы шли легко, из состояния силы.",
  pos: {
    x: 50,
    y: 66
  },
  color: "212, 165, 116"
}];
const CENTER = {
  title: "Истинный Аватар",
  body: "Состояние абсолютной синхронизации, где роли, проекты и миссия работают как единый механизм."
};
const Avatar = () => {
  const [active, setActive] = React.useState("center");
  const detail = active === "center" ? CENTER : SPHERES.find(s => s.key === active);
  return /*#__PURE__*/React.createElement("section", {
    className: "avatar",
    id: "avatar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "02", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430"))), /*#__PURE__*/React.createElement("h2", {
    className: "reveal"
  }, "\u0424\u043E\u0440\u043C\u0443\u043B\u0430 \u0442\u0432\u043E\u0435\u0439 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, ".")), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal"
  }, "\u0422\u0440\u0438 \u0441\u0444\u0435\u0440\u044B \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u044E\u0442\u0441\u044F \u0432\xA0\u043E\u0434\u043D\u043E\u0439 \u0442\u043E\u0447\u043A\u0435. \u042D\u0442\u043E \u043D\u0435\xA0\u0441\u043F\u0438\u0441\u043E\u043A \u2014 \u044D\u0442\u043E \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F \u0431\u0430\u043B\u0430\u043D\u0441\u0430. \u041A\u0430\u0441\u0430\u0439\u0441\u044F \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0444\u0435\u0440\u044B, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0435\u0451\xA0\u0440\u043E\u043B\u044C \u0432\xA0\u043E\u0431\u0449\u0435\u043C \u043C\u0435\u0445\u0430\u043D\u0438\u0437\u043C\u0435.")), /*#__PURE__*/React.createElement("div", {
    className: "avatar__stage reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar__diagram"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 600 540",
    className: "avatar__svg",
    preserveAspectRatio: "xMidYMid meet"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "rg-roles",
    cx: "0.5",
    cy: "0.5"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(212,165,116,0.35)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(212,165,116,0.03)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "rg-projects",
    cx: "0.5",
    cy: "0.5"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(232,199,154,0.32)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(232,199,154,0.03)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "rg-mission",
    cx: "0.5",
    cy: "0.5"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(168,127,79,0.30)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(168,127,79,0.03)"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "rg-core",
    cx: "0.5",
    cy: "0.5"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "rgba(244,236,226,0.95)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "30%",
    stopColor: "rgba(232,199,154,0.65)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "rgba(212,165,116,0)"
  }))), SPHERES.map((s, i) => {
    const cx = s.pos.x / 100 * 600;
    const cy = s.pos.y / 100 * 540;
    const isActive = active === s.key;
    return /*#__PURE__*/React.createElement("g", {
      key: s.key,
      className: `avatar__circle ${isActive ? 'is-active' : ''}`,
      onMouseEnter: () => setActive(s.key),
      onClick: () => setActive(s.key)
    }, /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: "150",
      fill: `url(#rg-${s.key})`
    }), /*#__PURE__*/React.createElement("circle", {
      cx: cx,
      cy: cy,
      r: "150",
      fill: "none",
      stroke: `rgba(${s.color}, ${isActive ? 0.85 : 0.35})`,
      strokeWidth: isActive ? 1.4 : 1,
      strokeDasharray: isActive ? "0" : "0"
    }), /*#__PURE__*/React.createElement("text", {
      x: cx + (s.pos.x < 50 ? -80 : s.pos.x > 50 && s.pos.y < 50 ? 80 : 0),
      y: cy + (s.pos.y > 50 ? 85 : -85),
      fill: `rgba(${s.color}, ${isActive ? 1 : 0.7})`,
      fontFamily: "var(--display)",
      fontSize: "20",
      fontWeight: "300",
      letterSpacing: "2",
      textAnchor: s.pos.x < 50 ? "end" : s.pos.x > 50 && s.pos.y < 50 ? "start" : "middle",
      className: "avatar__circle-label"
    }, s.n));
  }), /*#__PURE__*/React.createElement("g", {
    className: `avatar__core ${active === 'center' ? 'is-active' : ''}`,
    onMouseEnter: () => setActive('center'),
    onClick: () => setActive('center')
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "255",
    r: "70",
    fill: "url(#rg-core)",
    opacity: active === 'center' ? 1 : 0.55
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "255",
    r: "12",
    fill: "rgba(244,236,226,0.9)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "300",
    cy: "255",
    r: "12",
    fill: "none",
    stroke: "rgba(212,165,116,0.6)",
    strokeWidth: "0.8"
  })), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "255",
    x2: "600",
    y2: "255",
    stroke: "rgba(244,236,226,0.04)",
    strokeWidth: "0.5",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "300",
    y1: "0",
    x2: "300",
    y2: "540",
    stroke: "rgba(244,236,226,0.04)",
    strokeWidth: "0.5",
    strokeDasharray: "2 6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "avatar__detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "avatar__detail-tag"
  }, active === 'center' ? 'Центр пересечения' : 'Сфера реализации'), /*#__PURE__*/React.createElement("h3", {
    className: "avatar__detail-title"
  }, detail.title), detail.sub && /*#__PURE__*/React.createElement("div", {
    className: "avatar__detail-sub"
  }, detail.sub), /*#__PURE__*/React.createElement("p", {
    className: "avatar__detail-body"
  }, detail.body), /*#__PURE__*/React.createElement("div", {
    className: "avatar__legend"
  }, SPHERES.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    className: `avatar__legend-item ${active === s.key ? 'is-active' : ''}`,
    onMouseEnter: () => setActive(s.key),
    onClick: () => setActive(s.key),
    style: {
      '--c': `rgb(${s.color})`
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar__legend-dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "avatar__legend-n"
  }, s.n), /*#__PURE__*/React.createElement("span", {
    className: "avatar__legend-name"
  }, s.fullTitle))), /*#__PURE__*/React.createElement("button", {
    className: `avatar__legend-item avatar__legend-item--core ${active === 'center' ? 'is-active' : ''}`,
    onMouseEnter: () => setActive('center'),
    onClick: () => setActive('center')
  }, /*#__PURE__*/React.createElement("span", {
    className: "avatar__legend-dot avatar__legend-dot--core"
  }), /*#__PURE__*/React.createElement("span", {
    className: "avatar__legend-n"
  }, "\u2726"), /*#__PURE__*/React.createElement("span", {
    className: "avatar__legend-name"
  }, "\u0418\u0441\u0442\u0438\u043D\u043D\u044B\u0439 \u0410\u0432\u0430\u0442\u0430\u0440")))))), /*#__PURE__*/React.createElement("style", null, `
        .avatar { background: linear-gradient(180deg, var(--black) 0%, #050505 100%); }

        .avatar__stage {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 980px) {
          .avatar__stage { grid-template-columns: 1fr; gap: 32px; }
        }

        .avatar__diagram {
          position: relative;
          aspect-ratio: 1.1/1;
          width: 100%;
        }
        .avatar__svg { width: 100%; height: 100%; }

        .avatar__circle {
          cursor: pointer;
          transition: filter .6s ease;
        }
        .avatar__circle.is-active {
          filter: drop-shadow(0 0 24px rgba(212,165,116,0.35));
        }
        .avatar__core { cursor: pointer; transition: filter .6s ease; }
        .avatar__core.is-active { filter: drop-shadow(0 0 30px rgba(244,236,226,0.5)); }

        .avatar__detail {
          display: grid; gap: 18px;
          padding: 36px 36px 32px;
          background: linear-gradient(165deg, rgba(20,17,13,0.7), rgba(7,7,7,0.4));
          border: 1px solid var(--line-soft);
          border-left: 1px solid var(--line);
          min-height: 320px;
        }
        @media (max-width: 980px) { .avatar__detail { padding: 28px 24px; } }

        .avatar__detail-tag {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .avatar__detail-title {
          font-family: var(--display);
          font-size: clamp(30px, 3vw, 44px);
          font-weight: 300;
          line-height: 1.1;
          color: var(--text);
        }
        .avatar__detail-sub {
          font-family: var(--display);
          font-style: italic;
          font-size: 20px;
          color: var(--gold-light);
        }
        .avatar__detail-body {
          color: var(--text);
          font-size: 15px;
          line-height: 1.7;
          max-width: 52ch;
        }

        .avatar__legend {
          display: flex; flex-direction: column;
          gap: 2px;
          margin-top: 12px;
          padding-top: 24px;
          border-top: 1px solid var(--line-soft);
        }
        .avatar__legend-item {
          background: transparent;
          border: 0;
          color: var(--muted);
          padding: 10px 0;
          display: grid;
          grid-template-columns: 16px 32px 1fr;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          text-align: left;
          font-family: var(--body);
          font-size: 13px;
          letter-spacing: 0.04em;
          transition: color .3s ease;
          border-bottom: 1px solid var(--line-soft);
        }
        .avatar__legend-item:last-child { border-bottom: 0; }
        .avatar__legend-item:hover, .avatar__legend-item.is-active { color: var(--text); }
        .avatar__legend-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--c, var(--gold));
          opacity: 0.45;
          transition: opacity .3s ease, box-shadow .3s ease;
        }
        .avatar__legend-item.is-active .avatar__legend-dot {
          opacity: 1;
          box-shadow: 0 0 10px var(--c, var(--gold));
        }
        .avatar__legend-dot--core { background: var(--text); }
        .avatar__legend-item.is-active .avatar__legend-dot--core {
          box-shadow: 0 0 10px var(--text);
        }
        .avatar__legend-n {
          font-family: var(--display);
          font-size: 16px;
          color: var(--gold);
          letter-spacing: 0.1em;
        }
      `));
};
const avatarRoot = ReactDOM.createRoot(document.getElementById('avatar-root'));
avatarRoot.render(/*#__PURE__*/React.createElement(Avatar, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const VECTORS = [{
  n: "I",
  title: "Видение",
  tag: "Топливо для миссии",
  text: "Когда ты видишь своё истинное будущее — открывается мощный поток энергии. Это топливо для твоей миссии в мире."
}, {
  n: "II",
  title: "Фокус",
  tag: "Сверхточные действия",
  text: "Удержание внимания на главном и выбор высокорезультативных действий — за рамками стандартного мышления. Анализ пути и гибкость в смене стратегии."
}, {
  n: "III",
  title: "Поток",
  tag: "Баланс воли и потока",
  text: "Три состояния: дисциплина, поток и адаптивность. Навык — в моменте выбирать, что включить. Поток эффективнее воли, но требует баланса."
}];
const Slider = ({
  vec,
  value,
  onChange,
  onComplete,
  completed
}) => {
  const trackRef = React.useRef(null);
  const isDragging = React.useRef(false);
  const updateFromPointer = clientX => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    let pct = (clientX - rect.left) / rect.width;
    pct = Math.max(0, Math.min(1, pct));
    const v = Math.round(pct * 100);
    onChange(v);
    if (v >= 100) onComplete();
  };
  const onDown = e => {
    isDragging.current = true;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    updateFromPointer(x);
    const move = ev => {
      if (!isDragging.current) return;
      const cx = ev.touches ? ev.touches[0].clientX : ev.clientX;
      updateFromPointer(cx);
    };
    const up = () => {
      isDragging.current = false;
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move, {
      passive: false
    });
    window.addEventListener('touchend', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `hslider ${completed ? 'is-complete' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "hslider__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hslider__n numeral"
  }, vec.n), /*#__PURE__*/React.createElement("span", {
    className: "hslider__title"
  }, vec.title), /*#__PURE__*/React.createElement("span", {
    className: "hslider__value"
  }, value, /*#__PURE__*/React.createElement("span", {
    className: "hslider__pct"
  }, "%"))), /*#__PURE__*/React.createElement("div", {
    className: "hslider__track",
    ref: trackRef,
    onMouseDown: onDown,
    onTouchStart: onDown
  }, /*#__PURE__*/React.createElement("div", {
    className: "hslider__ticks"
  }, Array.from({
    length: 21
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: `hslider__tick ${i % 5 === 0 ? 'is-major' : ''}`
  }))), /*#__PURE__*/React.createElement("div", {
    className: "hslider__fill",
    style: {
      width: `${value}%`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hslider__fill-glow"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hslider__thumb",
    style: {
      left: `${value}%`
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hslider__thumb-inner"
  }))));
};
const Vectors = () => {
  const [values, setValues] = React.useState([0, 0, 0]);
  const [completed, setCompleted] = React.useState([false, false, false]);
  const setVal = (i, v) => {
    setValues(prev => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };
  const complete = i => {
    setCompleted(prev => {
      if (prev[i]) return prev;
      const next = [...prev];
      next[i] = true;
      return next;
    });
  };
  const allDone = completed.every(Boolean);
  return /*#__PURE__*/React.createElement("section", {
    className: "vec",
    id: "vectors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "03", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F"))), /*#__PURE__*/React.createElement("h2", {
    className: "reveal"
  }, "\u0422\u0440\u0438 \u043D\u0430\u0432\u044B\u043A\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0435", /*#__PURE__*/React.createElement("br", null), "\u0442\u044B ", /*#__PURE__*/React.createElement("em", null, "\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0448\u044C"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal"
  }, "\u0412\u043E\u0437\u044C\u043C\u0438\u0441\u044C \u0437\u0430\xA0\u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A \u0438\xA0\u043F\u043E\u0434\u043D\u0438\u043C\u0438 \u043A\u0430\u043D\u0430\u043B \u0434\u043E\xA0\u0441\u0442\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0432\u0435\u043A\u0442\u043E\u0440 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043D\u0430\u0432\u044B\u043A \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u0443\u0440\u043E\u0432\u043D\u044F. \u0410\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0439 \u0432\u0441\u0435 \u0442\u0440\u0438\xA0\u2014 \u0438\xA0\u0443\u0432\u0438\u0434\u0438\u0448\u044C, \u0447\u0442\u043E \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\xA0\u0442\u0435\u0431\u0435.")), /*#__PURE__*/React.createElement("div", {
    className: "vec__console reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vec__console-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vec__console-title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vec__console-dot"
  }), /*#__PURE__*/React.createElement("span", null, "\u041F\u0443\u043B\u044C\u0442 \u0440\u0435\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438")), /*#__PURE__*/React.createElement("div", {
    className: "vec__console-state"
  }, allDone ? 'Система синхронизирована' : `${completed.filter(Boolean).length} / 3 каналов`)), /*#__PURE__*/React.createElement("div", {
    className: "vec__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vec__sliders"
  }, VECTORS.map((v, i) => /*#__PURE__*/React.createElement(Slider, {
    key: v.n,
    vec: v,
    value: values[i],
    onChange: val => setVal(i, val),
    onComplete: () => complete(i),
    completed: completed[i]
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vec__panel",
    "aria-live": "polite"
  }, VECTORS.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: v.n,
    className: `vec__panel-item ${completed[i] ? 'is-on' : ''}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "vec__panel-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vec__panel-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "vec__panel-reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vec__panel-eyebrow"
  }, "\u0410\u043A\u0442\u0438\u0432\u0430\u0446\u0438\u044F \u2014 ", v.tag), /*#__PURE__*/React.createElement("p", {
    className: "vec__panel-text"
  }, v.text)), /*#__PURE__*/React.createElement("div", {
    className: "vec__panel-placeholder"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vec__panel-placeholder-dot"
  }), "\u041F\u043E\u0434\u043D\u0438\u043C\u0438 \u0434\u043E 100%, \u0447\u0442\u043E\u0431\u044B \u0430\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u0430\u0432\u044B\u043A"))))))), /*#__PURE__*/React.createElement("style", null, `
        .vec__console {
          background: linear-gradient(180deg, rgba(20,17,13,0.5), rgba(7,7,7,0.7));
          border: 1px solid var(--line-soft);
          padding: 36px 36px 40px;
          position: relative;
        }
        @media (max-width: 720px) { .vec__console { padding: 24px 18px 28px; } }

        .vec__console-head {
          display: flex; justify-content: space-between; align-items: center;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--line-soft);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }
        .vec__console-title { color: var(--gold); display: inline-flex; align-items: center; gap: 12px; }
        .vec__console-state { color: var(--muted); }
        .vec__console-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 10px var(--gold);
        }

        .vec__body {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 48px;
          padding-top: 36px;
        }
        @media (max-width: 880px) {
          .vec__body { grid-template-columns: 1fr; gap: 28px; }
        }

        .vec__sliders {
          display: flex; flex-direction: column;
          gap: 52px;
          padding-right: 12px;
          border-right: 1px solid var(--line-soft);
        }
        @media (max-width: 880px) {
          .vec__sliders { padding-right: 0; border-right: 0; padding-bottom: 28px; border-bottom: 1px solid var(--line-soft); }
        }

        /* Horizontal slider */
        .hslider {
          display: grid;
          gap: 14px;
          user-select: none;
        }
        .hslider__head {
          display: grid;
          grid-template-columns: 32px 1fr auto;
          align-items: baseline;
          gap: 14px;
        }
        .hslider__n {
          font-family: var(--display);
          font-size: 20px;
          color: var(--gold);
        }
        .hslider__title {
          font-family: var(--display);
          font-size: clamp(22px, 1.8vw, 28px);
          font-weight: 300;
          color: var(--muted);
          letter-spacing: 0.02em;
          transition: color .4s ease;
        }
        .hslider.is-complete .hslider__title { color: var(--gold-light); }
        .hslider__value {
          font-family: var(--display);
          font-size: 22px;
          color: var(--muted);
          transition: color .4s ease;
          font-variant-numeric: tabular-nums;
          min-width: 60px;
          text-align: right;
        }
        .hslider__pct {
          font-size: 13px;
          margin-left: 2px;
        }
        .hslider.is-complete .hslider__value { color: var(--gold-light); }

        .hslider__track {
          position: relative;
          height: 44px;
          background: linear-gradient(180deg, #0a0908, #050505);
          border: 1px solid var(--line-soft);
          cursor: grab;
          touch-action: none;
        }
        .hslider__track:active { cursor: grabbing; }

        .hslider__ticks {
          position: absolute; inset: 0;
          display: flex; justify-content: space-between;
          padding: 0 6px;
          pointer-events: none;
        }
        .hslider__tick {
          width: 1px;
          height: 6px;
          margin-top: -1px;
          background: var(--line-soft);
        }
        .hslider__tick.is-major {
          height: 12px;
          background: rgba(212,165,116,0.3);
          margin-top: -1px;
        }

        .hslider__fill {
          position: absolute;
          top: 0; bottom: 0; left: 0;
          background: linear-gradient(90deg, var(--gold-deep), var(--gold) 40%, var(--gold-light));
          transition: width .15s ease-out;
        }
        .hslider__fill-glow {
          position: absolute;
          top: -2px; bottom: -2px; right: -8px;
          width: 24px;
          background: linear-gradient(90deg, transparent, rgba(232,199,154,0.6));
          filter: blur(8px);
        }
        .hslider.is-complete .hslider__fill {
          box-shadow:
            0 0 28px rgba(232,199,154,0.5),
            inset 0 0 12px rgba(255,255,255,0.18);
          animation: flashH .9s ease-out;
        }
        @keyframes flashH {
          0%   { filter: brightness(2.2); }
          100% { filter: brightness(1); }
        }

        .hslider__thumb {
          position: absolute;
          top: -4px; bottom: -4px;
          width: 8px;
          background: var(--gold-light);
          transform: translateX(-50%);
          transition: left .15s ease-out;
          pointer-events: none;
          box-shadow: 0 0 14px rgba(232,199,154,0.6);
        }
        .hslider__thumb-inner {
          position: absolute;
          top: 4px; bottom: 4px;
          left: 3px; right: 3px;
          background: var(--black);
          opacity: 0.5;
        }

        /* Right panel — text reveals only at 100% */
        .vec__panel {
          display: flex; flex-direction: column;
          gap: 24px;
        }
        .vec__panel-item {
          padding: 16px 0;
          border-bottom: 1px solid var(--line-soft);
          position: relative;
          min-height: 92px;
        }
        .vec__panel-item:last-child { border-bottom: 0; }

        .vec__panel-head {
          display: block;
          margin-bottom: 14px;
        }
        .vec__panel-head .numeral {
          color: var(--muted);
          transition: color .5s ease;
        }
        .vec__panel-item.is-on .vec__panel-head .numeral { color: var(--gold); }
        .vec__panel-title {
          font-family: var(--display);
          font-size: clamp(20px, 1.6vw, 24px);
          font-weight: 300;
          color: var(--muted);
          letter-spacing: 0.02em;
          transition: color .5s ease;
        }
        .vec__panel-item.is-on .vec__panel-title { color: var(--text); }
        .vec__panel-line {
          height: 1px;
          background: var(--line-soft);
          transition: background .5s ease;
        }
        .vec__panel-item.is-on .vec__panel-line { background: var(--gold); }

        .vec__panel-reveal {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity .7s ease .15s, transform .7s cubic-bezier(.2,.7,.2,1) .15s;
          max-width: 48ch;
          pointer-events: none;
          display: grid;
          gap: 10px;
        }
        .vec__panel-item.is-on .vec__panel-reveal {
          opacity: 1;
          transform: none;
          pointer-events: auto;
        }
        .vec__panel-eyebrow {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .vec__panel-eyebrow::before {
          content: "";
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          box-shadow: 0 0 10px var(--gold);
        }
        .vec__panel-text {
          color: var(--text);
          font-size: 15px;
          line-height: 1.7;
        }

        .vec__panel-placeholder {
          position: absolute;
          left: 0; top: 38px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 11px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          opacity: 0.55;
          transition: opacity .4s ease, transform .4s ease;
        }
        .vec__panel-item.is-on .vec__panel-placeholder {
          opacity: 0;
          transform: translateY(-6px);
        }
        .vec__panel-placeholder-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--muted);
        }

        @media (max-width: 880px) {
          .vec__panel-text, .vec__panel-placeholder { margin-left: 0; }
          .vec__panel-placeholder { left: 0; }
        }
      `));
};
const vecRoot = ReactDOM.createRoot(document.getElementById('vectors-root'));
vecRoot.render(/*#__PURE__*/React.createElement(Vectors, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const Shadow = () => {
  const sectionRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0); // 0..1

  React.useEffect(() => {
    let rafId = null;
    let lastProgress = -1;
    const calc = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) return;
      const passed = -rect.top;
      let p = Math.max(0, Math.min(1, passed / total));
      if (Math.abs(p - lastProgress) > 0.002) {
        lastProgress = p;
        setProgress(p);
      }
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        calc();
      });
    };
    calc();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    window.addEventListener('resize', calc);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', calc);
    };
  }, []);

  // Stages:
  // 0.00 – 0.22  text 1 visible: "Твоё главное испытание"
  // 0.22 – 0.30  text 1 fades out
  // 0.20 – 0.55  light + shadow washes draw toward center, ring contracts; text 2 fades in
  // 0.55 – 0.78  bloom: corona expands from center
  // 0.65 – 0.78  text 2 fades out
  // 0.78 – 1.00  text 3 fades in (activation statement)
  const lerp = (a, b, t) => a + (b - a) * Math.max(0, Math.min(1, t));
  const wash = lerp(0, 1, (progress - 0.20) / 0.35); // halves coming in
  const bloom = lerp(0, 1, (progress - 0.55) / 0.23); // corona radius/intensity

  // Three sequential text opacities
  const text1 = 1 - lerp(0, 1, (progress - 0.20) / 0.10); // entry headline
  const text2In = lerp(0, 1, (progress - 0.25) / 0.10);
  const text2Out = lerp(0, 1, (progress - 0.65) / 0.10);
  const text2 = Math.max(0, text2In - text2Out); // mid headline
  const text3 = lerp(0, 1, (progress - 0.75) / 0.12); // final statement

  return /*#__PURE__*/React.createElement("section", {
    className: "shadow",
    id: "shadow",
    ref: sectionRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow__pin"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container shadow__stage"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow__text shadow__text--1",
    style: {
      opacity: text1,
      transform: `translateY(${(1 - text1) * -12}px)`
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "shadow__title"
  }, "\u0422\u0432\u043E\u0451 ", /*#__PURE__*/React.createElement("em", null, "\u0433\u043B\u0430\u0432\u043D\u043E\u0435", /*#__PURE__*/React.createElement("br", null), "\u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0435"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "shadow__text shadow__text--2",
    style: {
      opacity: text2,
      transform: `translateY(${(1 - text2) * 12}px)`
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "shadow__title"
  }, "\u042D\u0442\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0441\u043E\xA0\u0441\u0432\u043E\u0435\u0439", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "\u0442\u0451\u043C\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439"), ".")), /*#__PURE__*/React.createElement("div", {
    className: "shadow__text shadow__text--3",
    style: {
      opacity: text3,
      transform: `translateY(${(1 - text3) * 14}px)`
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "shadow__statement"
  }, "\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u0432\u0448\u0438\u0441\u044C \u0441\u043E\xA0\u0441\u0432\u043E\u0435\u0439 ", /*#__PURE__*/React.createElement("em", null, "\u0442\u0451\u043C\u043D\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u043E\u0439"), " \u0438\xA0\u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0438\u043D\u044F\u0432 \u0435\u0451\xA0\u2014 \u0442\u044B\xA0\u0430\u043A\u0442\u0438\u0432\u0438\u0440\u0443\u0435\u0448\u044C \u0441\u0432\u043E\u0438 ", /*#__PURE__*/React.createElement("em", null, "\u0441\u043A\u0440\u044B\u0442\u044B\u0435 \u0441\u0432\u0435\u0440\u0445\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438"), "."))), /*#__PURE__*/React.createElement("div", {
    className: "shadow__bg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shadow__wash shadow__wash--warm",
    style: {
      opacity: 0.25 + wash * 0.55,
      transform: `translateX(${-30 + wash * 30}%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__wash shadow__wash--cool",
    style: {
      opacity: 0.35 + wash * 0.55,
      transform: `translateX(${30 - wash * 30}%)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__ring",
    style: {
      opacity: wash * (1 - bloom),
      transform: `translate(-50%, -50%) scale(${1.6 - wash * 0.8})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__disc",
    style: {
      opacity: wash * 0.95,
      transform: `translate(-50%, -50%) scale(${0.6 + wash * 0.4})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__corona shadow__corona--inner",
    style: {
      opacity: bloom,
      transform: `translate(-50%, -50%) scale(${0.6 + bloom * 1.0})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__corona shadow__corona--outer",
    style: {
      opacity: bloom * 0.85,
      transform: `translate(-50%, -50%) scale(${0.8 + bloom * 1.6})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__corona shadow__corona--rim",
    style: {
      opacity: bloom,
      transform: `translate(-50%, -50%) scale(${0.7 + bloom * 0.5})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "shadow__sparkles",
    style: {
      opacity: bloom * 0.9
    }
  }, Array.from({
    length: 14
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "shadow__sparkle",
    style: {
      '--a': `${i / 14 * 360}deg`,
      '--d': `${120 + i % 3 * 40}px`,
      '--del': `${i % 5 * 0.4}s`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "shadow__vignette"
  })), /*#__PURE__*/React.createElement("div", {
    className: "shadow__hint",
    style: {
      opacity: Math.max(0, 1 - progress * 6)
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u041F\u0440\u043E\u043A\u0440\u0443\u0442\u0438, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0439\u0442\u0438"), /*#__PURE__*/React.createElement("span", {
    className: "shadow__hint-line"
  }))), /*#__PURE__*/React.createElement("style", null, `
        .shadow {
          height: 260vh;
          position: relative;
          padding: 0;
          background: #050505;
        }
        .shadow__pin {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: grid;
          grid-template-rows: 1fr auto 1fr;
          align-items: stretch;
        }

        /* Background washes */
        .shadow__bg {
          position: absolute; inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .shadow__wash {
          position: absolute;
          top: -10%; bottom: -10%;
          width: 75%;
          mix-blend-mode: screen;
          filter: blur(60px);
          will-change: transform, opacity;
          transition: opacity .2s linear, transform .2s linear;
        }
        .shadow__wash--warm {
          left: -25%;
          background:
            radial-gradient(60% 100% at 80% 50%, rgba(212,165,116,0.55), transparent 70%);
        }
        .shadow__wash--cool {
          right: -25%;
          background:
            radial-gradient(60% 100% at 20% 50%, rgba(20,15,8,0.95), transparent 65%);
          mix-blend-mode: multiply;
        }

        /* Contracting ring (pre-bloom hint) */
        .shadow__ring {
          position: absolute;
          left: 50%; top: 50%;
          width: 520px; height: 520px;
          border: 1px solid rgba(212,165,116,0.45);
          border-radius: 50%;
          box-shadow:
            inset 0 0 60px rgba(212,165,116,0.08),
            0 0 60px rgba(212,165,116,0.12);
          transition: opacity .2s linear, transform .2s linear;
          will-change: transform, opacity;
        }

        /* The black disc / eclipse moon */
        .shadow__disc {
          position: absolute;
          left: 50%; top: 50%;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle at 50% 50%, #0a0807 0%, #050403 80%);
          border: 1px solid rgba(232,199,154,0.25);
          box-shadow:
            inset 0 0 32px rgba(0,0,0,0.9);
          transition: opacity .2s linear, transform .2s linear;
          will-change: transform, opacity;
        }

        /* Corona — three layered soft glows, NO lines/rays */
        .shadow__corona {
          position: absolute;
          left: 50%; top: 50%;
          border-radius: 50%;
          pointer-events: none;
          mix-blend-mode: screen;
          will-change: transform, opacity;
          transition: opacity .2s linear, transform .2s linear;
        }
        .shadow__corona--inner {
          width: 360px; height: 360px;
          background: radial-gradient(circle,
            rgba(255,250,240,0.95) 0%,
            rgba(232,199,154,0.65) 18%,
            rgba(212,165,116,0.25) 42%,
            rgba(212,165,116,0) 70%);
          filter: blur(6px);
        }
        .shadow__corona--outer {
          width: 720px; height: 720px;
          background: radial-gradient(circle,
            rgba(232,199,154,0.4) 0%,
            rgba(212,165,116,0.18) 25%,
            rgba(212,165,116,0.06) 50%,
            transparent 75%);
          filter: blur(24px);
        }
        .shadow__corona--rim {
          width: 280px; height: 280px;
          border: 1px solid rgba(255,245,220,0.55);
          box-shadow:
            0 0 40px rgba(255,245,220,0.4),
            inset 0 0 30px rgba(255,245,220,0.25);
          background: transparent;
        }

        /* Sparkles around the bloom */
        .shadow__sparkles {
          position: absolute;
          left: 50%; top: 50%;
          width: 0; height: 0;
          transition: opacity .3s linear;
        }
        .shadow__sparkle {
          position: absolute;
          left: 0; top: 0;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: var(--gold-light);
          box-shadow: 0 0 8px var(--gold-light);
          transform: rotate(var(--a)) translateX(var(--d));
          transform-origin: 0 0;
          animation: shadowTwinkle 2.6s ease-in-out infinite;
          animation-delay: var(--del);
        }
        @keyframes shadowTwinkle {
          0%, 100% { opacity: 0.2; }
          50%      { opacity: 1; }
        }

        .shadow__vignette {
          position: absolute; inset: 0;
          background:
            radial-gradient(circle at 50% 50%, transparent 28%, rgba(5,5,5,0.55) 70%, rgba(5,5,5,0.85) 100%),
            linear-gradient(180deg, rgba(5,5,5,0.4) 0%, transparent 22%, transparent 70%, rgba(5,5,5,0.6) 100%);
          pointer-events: none;
        }

        /* Stage container — centered, all three texts stacked on top of each other */
        .shadow__stage {
          position: relative;
          z-index: 2;
          grid-row: 1 / 4;
          grid-column: 1;
          align-self: center;
          display: grid;
          place-items: center;
        }
        .shadow__text {
          grid-row: 1;
          grid-column: 1;
          width: 100%;
          display: grid;
          justify-items: center;
          text-align: center;
          transition: opacity .25s ease, transform .25s ease;
          will-change: opacity, transform;
          pointer-events: none;
        }
        .shadow__title {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(38px, 5.4vw, 86px);
          line-height: 1.04;
          color: var(--text);
          max-width: 18ch;
          text-shadow:
            0 2px 24px rgba(5,5,5,0.95),
            0 0 60px rgba(5,5,5,0.85);
        }
        .shadow__title em {
          font-style: italic;
          color: var(--gold-light);
        }
        .shadow__statement {
          font-family: var(--display);
          font-weight: 300;
          font-size: clamp(22px, 2.4vw, 36px);
          line-height: 1.4;
          color: var(--text);
          max-width: 26ch;
          text-shadow:
            0 2px 18px rgba(5,5,5,0.95),
            0 0 40px rgba(5,5,5,0.85);
        }
        .shadow__statement em {
          font-style: italic;
          color: var(--gold-light);
          font-weight: 400;
        }

        .shadow__hint {
          position: absolute;
          left: 50%; bottom: 28px;
          transform: translateX(-50%);
          display: inline-flex; flex-direction: column;
          align-items: center; gap: 12px;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--muted);
          z-index: 3;
          transition: opacity .25s linear;
        }
        .shadow__hint-line {
          width: 1px; height: 36px;
          background: linear-gradient(180deg, var(--muted), transparent);
        }

        @media (max-width: 720px) {
          .shadow { height: 240vh; }
          .shadow__disc { width: 160px; height: 160px; }
          .shadow__corona--inner { width: 260px; height: 260px; }
          .shadow__corona--outer { width: 480px; height: 480px; }
          .shadow__corona--rim { width: 200px; height: 200px; }
          .shadow__ring { width: 360px; height: 360px; }
        }
      `));
};
const shadowRoot = ReactDOM.createRoot(document.getElementById('shadow-root'));
shadowRoot.render(/*#__PURE__*/React.createElement(Shadow, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const ROLES = [{
  n: "I",
  title: "Ментор",
  sub: "Стратегия",
  body: "Выстраиваю стратегию и формирую твой индивидуальный путь. Показываю сильные и слабые стороны — на что опираться, над чем работать."
}, {
  n: "II",
  title: "Эксперт",
  sub: "Опыт",
  body: "Я эксперт в работе с мышлением, родом и энергией первопричин. Передаю опыт развития привычек и сильных навыков в разных направлениях."
}, {
  n: "III",
  title: "Трекер",
  sub: "Действие",
  body: "Удерживаю твой фокус и не даю сойти с пути. Ускоряю, вдохновляю, держу баланс. Помогаю дойти до цели, сохраняя и приумножая энергию."
}];
const Roles = () => {
  const [active, setActive] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "roles",
    id: "roles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "04", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u041D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A"))), /*#__PURE__*/React.createElement("h2", {
    className: "reveal"
  }, "\u041E\u0434\u0438\u043D \u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "\u0422\u0440\u0438 \u0440\u043E\u043B\u0438"), " \u0434\u043B\u044F \u0442\u0432\u043E\u0435\u0433\u043E \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430.")), /*#__PURE__*/React.createElement("div", {
    className: "roles__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roles__visual reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "roles__portrait-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/about-portrait.jpg",
    alt: "\u0422\u0438\u043C\u0443\u0440",
    className: "roles__portrait"
  }), /*#__PURE__*/React.createElement("div", {
    className: "roles__portrait-shade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "roles__portrait-numeral"
  }, ROLES[active].n)), /*#__PURE__*/React.createElement("div", {
    className: "roles__visual-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "roles__visual-name"
  }, "\u0422\u0438\u043C\u0443\u0440"), /*#__PURE__*/React.createElement("span", {
    className: "roles__visual-sep"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "roles__visual-role"
  }, ROLES[active].title))), /*#__PURE__*/React.createElement("div", {
    className: "roles__list reveal"
  }, ROLES.map((r, i) => {
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: r.n,
      className: `role ${isActive ? 'is-active' : ''}`,
      onMouseEnter: () => setActive(i),
      onClick: () => setActive(i)
    }, /*#__PURE__*/React.createElement("div", {
      className: "role__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "role__n"
    }, r.n), /*#__PURE__*/React.createElement("div", {
      className: "role__titles"
    }, /*#__PURE__*/React.createElement("div", {
      className: "role__title"
    }, r.title), /*#__PURE__*/React.createElement("div", {
      className: "role__sub"
    }, r.sub)), /*#__PURE__*/React.createElement("span", {
      className: "role__chev"
    }, "\u2192")), /*#__PURE__*/React.createElement("div", {
      className: "role__body"
    }, /*#__PURE__*/React.createElement("p", {
      className: "role__text"
    }, r.body)));
  })))), /*#__PURE__*/React.createElement("style", null, `
        .roles__layout {
          display: grid;
          grid-template-columns: 0.78fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 980px) { .roles__layout { grid-template-columns: 1fr; gap: 40px; } }

        .roles__visual { position: sticky; top: 110px; }
        @media (max-width: 980px) { .roles__visual { position: static; } }

        .roles__portrait-wrap {
          position: relative;
          aspect-ratio: 1/1;
          width: 100%;
          background: #050505;
          overflow: hidden;
          border: 1px solid var(--line-soft);
        }
        .roles__portrait {
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center 15%;
          filter: contrast(1.03);
        }
        .roles__portrait-shade {
          position: absolute; inset: 0;
          background:
            linear-gradient(180deg, transparent 55%, rgba(7,7,7,0.7) 100%),
            radial-gradient(120% 60% at 80% 20%, rgba(212,165,116,0.18), transparent 60%);
          pointer-events: none;
        }
        .roles__portrait-numeral {
          position: absolute;
          top: 24px; right: 26px;
          font-family: var(--display);
          font-size: clamp(48px, 5vw, 80px);
          font-weight: 300;
          color: var(--gold);
          line-height: 1;
          letter-spacing: 0.04em;
          text-shadow: 0 0 30px rgba(212,165,116,0.6);
          transition: opacity .4s ease;
        }

        .roles__visual-meta {
          margin-top: 20px;
          display: flex; align-items: center; gap: 12px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .roles__visual-name { color: var(--text); }
        .roles__visual-sep { color: var(--muted); }
        .roles__visual-role { color: var(--gold); }

        .roles__list {
          display: flex; flex-direction: column;
          gap: 0;
        }
        .role {
          background: transparent;
          border: 0;
          border-top: 1px solid var(--line-soft);
          padding: 28px 0;
          text-align: left;
          cursor: pointer;
          color: var(--text);
          transition: padding .4s ease;
          font-family: var(--body);
        }
        .role:last-child { border-bottom: 1px solid var(--line-soft); }
        .role.is-active { border-top-color: var(--gold); }
        .role.is-active + .role { border-top-color: var(--gold); }

        .role__head {
          display: grid;
          grid-template-columns: 56px 1fr 24px;
          align-items: center;
          gap: 18px;
        }
        .role__n {
          font-family: var(--display);
          font-size: 32px;
          font-weight: 300;
          color: var(--muted);
          transition: color .4s ease;
        }
        .role.is-active .role__n { color: var(--gold); }
        .role__titles { display: grid; gap: 4px; }
        .role__title {
          font-family: var(--display);
          font-size: clamp(26px, 2.4vw, 38px);
          font-weight: 300;
          color: var(--text);
          line-height: 1;
        }
        .role__sub {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .role.is-active .role__sub { color: var(--gold-light); }
        .role__chev {
          color: var(--muted);
          font-size: 16px;
          transition: color .3s ease, transform .4s ease;
        }
        .role.is-active .role__chev {
          color: var(--gold);
          transform: rotate(45deg);
        }

        .role__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .5s cubic-bezier(.2,.7,.2,1), padding .5s ease, opacity .4s ease;
          opacity: 0;
          padding-left: 74px;
        }
        .role.is-active .role__body {
          grid-template-rows: 1fr;
          opacity: 1;
          padding-top: 18px;
        }
        .role__text {
          overflow: hidden;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.75;
          max-width: 52ch;
        }
        @media (max-width: 620px) {
          .role__head { grid-template-columns: 44px 1fr 24px; gap: 12px; }
          .role__body { padding-left: 0; }
        }
      `));
};
const rolesRoot = ReactDOM.createRoot(document.getElementById('roles-root'));
rolesRoot.render(/*#__PURE__*/React.createElement(Roles, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const PROGRAM = [{
  n: "01",
  level: "Уровень 1",
  title: "Изобилие",
  summary: "Денежный канал как показатель проводимости энергии.",
  body: "Работа с мышлением и состояниями. Развитие изобилия, веры и щедрости. Снятие страхов, ложных убеждений и внутренних конфликтов. На выходе — открытый денежный канал как показатель твоей проводимости энергии.",
  bullets: ["Мышление и вера", "Состояние изобилия", "Денежный канал"]
}, {
  n: "02",
  level: "Уровень 2",
  title: "Эффективность",
  summary: "Стратегия, команда, второй мозг и ИИ.",
  body: "Стратегия и мудрое использование энергии. Опираешься на подлинные таланты и выбираешь простые, но смелые действия за рамками привычного мышления. Начало формирования команды, создание второго мозга и внедрение ИИ.",
  bullets: ["Стратегия и таланты", "Команда и второй мозг", "Внедрение ИИ"]
}, {
  n: "03",
  level: "Уровень 3",
  title: "Масштаб",
  summary: "Реализация вовне и влияние на мир.",
  body: "Большие проекты, сильные команды и партнёрства. Эффективность уже работает сама — внимание переключается на масштабирование того, что ты создаёшь. Твоя миссия становится видимой миру.",
  bullets: ["Команды и партнёрства", "Большие проекты", "Влияние и миссия"]
}];
const ProgramItem = ({
  item,
  open,
  onToggle
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `prog__item ${open ? 'is-open' : ''}`
  }, /*#__PURE__*/React.createElement("button", {
    className: "prog__head",
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("div", {
    className: "prog__head-l"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prog__n"
  }, item.n), /*#__PURE__*/React.createElement("div", {
    className: "prog__head-titles"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prog__level"
  }, item.level), /*#__PURE__*/React.createElement("div", {
    className: "prog__title"
  }, item.title))), /*#__PURE__*/React.createElement("div", {
    className: "prog__head-r"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prog__summary"
  }, item.summary), /*#__PURE__*/React.createElement("span", {
    className: "prog__plus",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))), /*#__PURE__*/React.createElement("div", {
    className: "prog__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prog__body-inner"
  }, /*#__PURE__*/React.createElement("p", {
    className: "prog__text"
  }, item.body), /*#__PURE__*/React.createElement("ul", {
    className: "prog__bullets"
  }, item.bullets.map((b, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "prog__bullet"
  }, /*#__PURE__*/React.createElement("span", {
    className: "prog__bullet-dot"
  }), b))))));
};
const Program = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "prog",
    id: "program"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "05", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"))), /*#__PURE__*/React.createElement("h2", {
    className: "reveal"
  }, "\u042D\u0432\u043E\u043B\u044E\u0446\u0438\u044F \u0442\u0432\u043E\u0435\u0433\u043E \u0410\u0432\u0430\u0442\u0430\u0440\u0430:", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "\u0442\u0440\u0438 \u044D\u0442\u0430\u043F\u0430 \u043F\u0443\u0442\u0438"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal"
  }, "\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u0432\xA0\u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u043A\u0430\u0436\u0434\u044B\u0439 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043E\u043F\u0438\u0440\u0430\u0435\u0442\u0441\u044F \u043D\u0430\xA0\u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439. \u0420\u0430\u0441\u043A\u0440\u043E\u0439 \u044D\u0442\u0430\u043F, \u0447\u0442\u043E\u0431\u044B \u0443\u0432\u0438\u0434\u0435\u0442\u044C, \u0447\u0442\u043E\xA0\u0438\u043C\u0435\u043D\u043D\u043E \u043F\u0440\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\u043D\u0443\u0442\u0440\u0438.")), /*#__PURE__*/React.createElement("div", {
    className: "prog__list reveal"
  }, PROGRAM.map((p, i) => /*#__PURE__*/React.createElement(ProgramItem, {
    key: p.n,
    item: p,
    open: i === open,
    onToggle: () => setOpen(i === open ? -1 : i)
  })))), /*#__PURE__*/React.createElement("style", null, `
        .prog__list {
          border-top: 1px solid var(--line-soft);
        }
        .prog__item {
          border-bottom: 1px solid var(--line-soft);
          transition: background .4s ease;
        }
        .prog__item.is-open {
          background: linear-gradient(180deg, rgba(20,17,13,0.45), transparent);
        }

        .prog__head {
          width: 100%;
          padding: 32px 16px;
          background: transparent;
          border: 0;
          color: var(--text);
          font-family: var(--body);
          text-align: left;
          cursor: pointer;
          display: grid;
          grid-template-columns: 1.1fr 1.5fr;
          align-items: center;
          gap: 32px;
        }
        @media (max-width: 720px) {
          .prog__head { grid-template-columns: 1fr; gap: 14px; padding: 24px 8px; }
        }

        .prog__head-l {
          display: grid;
          grid-template-columns: 56px 1fr;
          align-items: baseline;
          gap: 18px;
        }
        .prog__n {
          font-family: var(--display);
          font-size: 28px;
          color: var(--gold);
          font-weight: 300;
        }
        .prog__head-titles { display: grid; gap: 6px; }
        .prog__level {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .prog__title {
          font-family: var(--display);
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 300;
          line-height: 1;
          color: var(--text);
        }
        .prog__item.is-open .prog__title { color: var(--gold-light); }

        .prog__head-r {
          display: flex; align-items: center; justify-content: space-between;
          gap: 24px;
        }
        .prog__summary {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.5;
          font-family: var(--display);
          font-style: italic;
          font-size: 18px;
          max-width: 36ch;
        }
        @media (max-width: 720px) { .prog__summary { font-size: 15px; } }

        .prog__plus {
          width: 28px; height: 28px;
          position: relative;
          flex-shrink: 0;
        }
        .prog__plus span {
          position: absolute;
          background: var(--gold);
          transition: transform .5s cubic-bezier(.2,.7,.2,1), opacity .3s ease;
        }
        .prog__plus span:nth-child(1) {
          left: 0; right: 0; top: 50%;
          height: 1px; margin-top: -0.5px;
        }
        .prog__plus span:nth-child(2) {
          top: 0; bottom: 0; left: 50%;
          width: 1px; margin-left: -0.5px;
        }
        .prog__item.is-open .prog__plus span:nth-child(2) {
          transform: scaleY(0);
        }

        .prog__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .6s cubic-bezier(.2,.7,.2,1);
        }
        .prog__item.is-open .prog__body { grid-template-rows: 1fr; }
        .prog__body-inner {
          overflow: hidden;
          padding: 0 16px;
        }
        .prog__item.is-open .prog__body-inner {
          padding: 0 16px 36px;
        }
        @media (max-width: 720px) {
          .prog__body-inner, .prog__item.is-open .prog__body-inner { padding-left: 8px; padding-right: 8px; }
        }
        .prog__text {
          color: var(--text);
          font-size: 16px;
          line-height: 1.75;
          max-width: 64ch;
          margin-left: 74px;
          margin-bottom: 20px;
        }
        @media (max-width: 720px) { .prog__text { margin-left: 0; } }
        .prog__bullets {
          list-style: none;
          padding: 0; margin: 0 0 0 74px;
          display: flex; flex-wrap: wrap;
          gap: 10px 24px;
        }
        @media (max-width: 720px) { .prog__bullets { margin-left: 0; } }
        .prog__bullet {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          padding: 8px 14px;
          border: 1px solid var(--line);
        }
        .prog__bullet-dot {
          width: 4px; height: 4px;
          background: var(--gold);
          border-radius: 50%;
        }
      `));
};
const progRoot = ReactDOM.createRoot(document.getElementById('program-root'));
progRoot.render(/*#__PURE__*/React.createElement(Program, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const PLANS = [{
  key: "group",
  tag: "Групповой формат",
  price: "1 000 $",
  duration: "2 месяца · 8 встреч",
  promise: "Общее поле, плотная практика, личный файл «Аватар» на выходе.",
  features: ["8 живых встреч в групповом формате", "Общий чат поддержки между сессиями", "90% практики · 10% теории и инструкций", "Глубокие диагностические тесты по сферам", "Личный итоговый файл «Аватар»"],
  cta: "Подать заявку"
}, {
  key: "personal",
  featured: true,
  tag: "Персональный формат",
  price: "3 000 $",
  duration: "Индивидуальная траектория",
  promise: "Один на один. Глубина, скорость и прямая передача энергии.",
  features: ["Индивидуальный путь под твою точку входа", "Работа с острыми проблемами здесь и сейчас", "Максимальное расширение ёмкости", "Прямая передача энергии и состояний", "Доступ к наставнику между сессиями"],
  cta: "Забронировать место"
}];
const PlanCard = ({
  plan
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: `plan ${plan.featured ? 'is-featured' : ''}`
  }, plan.featured && /*#__PURE__*/React.createElement("div", {
    className: "plan__ribbon"
  }, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C"), /*#__PURE__*/React.createElement("div", {
    className: "plan__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "plan__tag"
  }, plan.tag), /*#__PURE__*/React.createElement("div", {
    className: "plan__duration"
  }, plan.duration)), /*#__PURE__*/React.createElement("div", {
    className: "plan__price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "plan__price-num"
  }, plan.price)), /*#__PURE__*/React.createElement("p", {
    className: "plan__promise"
  }, plan.promise), /*#__PURE__*/React.createElement("ul", {
    className: "plan__features"
  }, plan.features.map((f, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    className: "plan__feature"
  }, /*#__PURE__*/React.createElement("span", {
    className: "plan__check"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 16 16",
    width: "14",
    height: "14"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8.5l3.2 3.2L13 4.5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("a", {
    href: "#session",
    className: `btn ${plan.featured ? 'btn--solid' : ''} plan__cta`
  }, /*#__PURE__*/React.createElement("span", null, plan.cta), /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })));
};
const Pricing = () => {
  return /*#__PURE__*/React.createElement("section", {
    className: "pricing",
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "06", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u0424\u043E\u0440\u043C\u0430\u0442\u044B"))), /*#__PURE__*/React.createElement("h2", {
    className: "reveal"
  }, "\u0412\u044B\u0431\u0435\u0440\u0438 \u0441\u0432\u043E\u044E ", /*#__PURE__*/React.createElement("em", null, "\u0442\u0440\u0430\u0435\u043A\u0442\u043E\u0440\u0438\u044E"), "."), /*#__PURE__*/React.createElement("p", {
    className: "lede reveal"
  }, "\u0414\u0432\u0430 \u0444\u043E\u0440\u043C\u0430\u0442\u0430 \u0440\u0430\u0431\u043E\u0442\u044B. \u041E\u0434\u0438\u043D \u043E\u0431\u0449\u0438\u0439 \u043F\u0440\u0438\u043D\u0446\u0438\u043F \u2014 \u0433\u043B\u0443\u0431\u0438\u043D\u0430, \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C \u0438\xA0\u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0441\u0442\u0430\u0451\u0442\u0441\u044F \u0441\xA0\u0442\u043E\u0431\u043E\u0439.")), /*#__PURE__*/React.createElement("div", {
    className: "pricing__grid reveal"
  }, PLANS.map(p => /*#__PURE__*/React.createElement(PlanCard, {
    key: p.key,
    plan: p
  }))), /*#__PURE__*/React.createElement("div", {
    className: "pricing__note reveal"
  }, /*#__PURE__*/React.createElement("span", {
    className: "pricing__note-icon"
  }, "\u2726"), "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0435\u0441\u0441\u0438\u0438 \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432\xA0\u043E\u043F\u043B\u0430\u0442\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u043F\u0440\u0438\xA0\u0441\u0442\u0430\u0440\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u044B.")), /*#__PURE__*/React.createElement("style", null, `
        .pricing__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }
        @media (max-width: 880px) { .pricing__grid { grid-template-columns: 1fr; } }

        .plan {
          position: relative;
          padding: 44px 40px 44px;
          background: linear-gradient(180deg, rgba(20,17,13,0.45), rgba(7,7,7,0.4));
          border: 1px solid var(--line-soft);
          display: flex; flex-direction: column;
          gap: 24px;
        }
        @media (max-width: 720px) { .plan { padding: 36px 24px; } }
        .plan.is-featured {
          border-color: var(--gold);
          background:
            radial-gradient(140% 80% at 50% 0%, rgba(212,165,116,0.10), transparent 60%),
            linear-gradient(180deg, rgba(20,17,13,0.7), rgba(10,9,7,0.6));
          box-shadow: 0 30px 80px -40px rgba(212,165,116,0.4);
        }

        .plan__ribbon {
          position: absolute;
          top: -1px; right: 32px;
          background: var(--gold);
          color: var(--black);
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          padding: 6px 14px;
          font-weight: 600;
        }

        .plan__head { display: grid; gap: 8px; }
        .plan__tag {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .plan__duration {
          font-family: var(--display);
          font-style: italic;
          color: var(--muted);
          font-size: 16px;
        }

        .plan__price {
          padding: 16px 0;
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
        }
        .plan__price-num {
          font-family: var(--display);
          font-size: clamp(48px, 5.4vw, 76px);
          font-weight: 300;
          color: var(--text);
          line-height: 1;
          letter-spacing: -0.01em;
        }
        .plan.is-featured .plan__price-num {
          color: var(--gold-light);
        }

        .plan__promise {
          font-family: var(--display);
          font-style: italic;
          color: var(--text);
          font-size: clamp(18px, 1.4vw, 22px);
          line-height: 1.4;
        }

        .plan__features {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column;
          gap: 14px;
          flex: 1;
        }
        .plan__feature {
          display: grid;
          grid-template-columns: 22px 1fr;
          gap: 14px;
          align-items: start;
          color: var(--text);
          font-size: 14px;
          line-height: 1.55;
          padding: 4px 0;
        }
        .plan__check {
          color: var(--gold);
          width: 22px; height: 22px;
          display: inline-flex; align-items: center; justify-content: center;
          border: 1px solid var(--line);
          border-radius: 50%;
          margin-top: 1px;
        }

        .plan__cta {
          justify-content: center;
          margin-top: 8px;
        }

        .pricing__note {
          margin-top: 40px;
          padding: 22px 28px;
          border: 1px solid var(--line-soft);
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
          display: flex; align-items: center; gap: 18px;
          font-family: var(--display);
          font-style: italic;
          font-size: 17px;
        }
        .pricing__note-icon {
          color: var(--gold);
          font-size: 18px;
          font-style: normal;
        }
      `));
};
const pricingRoot = ReactDOM.createRoot(document.getElementById('pricing-root'));
pricingRoot.render(/*#__PURE__*/React.createElement(Pricing, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);

const Session = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    contact: "",
    note: ""
  });
  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.contact) return;
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "session",
    id: "session"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__bg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "session__grid-lines"
  })), /*#__PURE__*/React.createElement("div", {
    className: "container session__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "numeral"
  }, "07", /*#__PURE__*/React.createElement("em", null, " / 07 \u2014 \u0424\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0448\u0430\u0433"))), /*#__PURE__*/React.createElement("h2", {
    className: "session__title reveal"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430", /*#__PURE__*/React.createElement("br", null), "\u043D\u0430 ", /*#__PURE__*/React.createElement("em", null, "\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0435\u0441\u0441\u0438\u044E"), "."), /*#__PURE__*/React.createElement("div", {
    className: "session__price reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__price-old"
  }, /*#__PURE__*/React.createElement("span", {
    className: "session__price-old-num"
  }, "25 000 \u20BD"), /*#__PURE__*/React.createElement("span", {
    className: "session__price-old-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "session__price-new"
  }, /*#__PURE__*/React.createElement("span", {
    className: "session__price-new-num"
  }, "7 777 \u20BD"), /*#__PURE__*/React.createElement("span", {
    className: "session__price-new-tag"
  }, "\u0434\u043B\u044F \u043F\u0435\u0440\u0432\u044B\u0445 \u0437\u0430\u044F\u0432\u043E\u043A"))), /*#__PURE__*/React.createElement("p", {
    className: "session__lede reveal"
  }, "\u0415\u0441\u043B\u0438 \u043F\u043E\xA0\u0438\u0442\u043E\u0433\u0430\u043C \u0441\u0435\u0441\u0441\u0438\u0438 \u043C\u044B\xA0\u043F\u043E\u043D\u0438\u043C\u0430\u0435\u043C, \u0447\u0442\u043E\xA0\u0442\u044B\xA0\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0448\u044C \u0434\u043B\u044F\xA0\u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u2014 \u044D\u0442\u0430 \u0441\u0443\u043C\u043C\u0430 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u0438\u0434\u0451\u0442 \u0432\xA0\u0437\u0430\u0447\u0451\u0442 \u043E\u043F\u043B\u0430\u0442\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B. \u0410\u0443\u0434\u0438\u0442 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0434\u043B\u044F\xA0\u0442\u0435\u0431\u044F \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u043C."), /*#__PURE__*/React.createElement("ul", {
    className: "session__points reveal"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "session__point-dot"
  }), "90 \u043C\u0438\u043D\u0443\u0442 \u043E\u0434\u0438\u043D \u043D\u0430 \u043E\u0434\u0438\u043D"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "session__point-dot"
  }), "\u041A\u0430\u0440\u0442\u0430 \u0442\u0432\u043E\u0438\u0445 \u0441\u0444\u0435\u0440 \u0438\xA0\u0442\u043E\u0447\u0435\u043A \u0431\u043B\u043E\u043A\u0430"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("span", {
    className: "session__point-dot"
  }), "\u0420\u0435\u0448\u0435\u043D\u0438\u0435, \u043F\u043E\xA0\u043A\u0430\u043A\u043E\u043C\u0443 \u043F\u0443\u0442\u0438 \u0434\u0432\u0438\u0433\u0430\u0442\u044C\u0441\u044F \u0434\u0430\u043B\u044C\u0448\u0435"))), /*#__PURE__*/React.createElement("div", {
    className: "session__form-wrap reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__form-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__form-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "session__form-dot"
  }), /*#__PURE__*/React.createElement("span", null, "\u0417\u0430\u043F\u0438\u0441\u044C \u043D\u0430 \u0440\u0430\u0437\u0431\u043E\u0440"), /*#__PURE__*/React.createElement("span", {
    className: "session__form-meta"
  }, submitted ? 'Принято' : 'Открыта')), !submitted ? /*#__PURE__*/React.createElement("form", {
    className: "session__form",
    onSubmit: submit
  }, /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "field__label"
  }, "\u041A\u0430\u043A \u0442\u0435\u0431\u044F \u0437\u043E\u0432\u0443\u0442"), /*#__PURE__*/React.createElement("input", {
    className: "field__input",
    type: "text",
    placeholder: "\u0418\u043C\u044F",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "field__label"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442"), /*#__PURE__*/React.createElement("input", {
    className: "field__input",
    type: "text",
    placeholder: "Telegram, WhatsApp \u0438\u043B\u0438 e-mail",
    value: form.contact,
    onChange: e => setForm({
      ...form,
      contact: e.target.value
    }),
    required: true
  })), /*#__PURE__*/React.createElement("label", {
    className: "field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "field__label"
  }, "\u0427\u0442\u043E \u0434\u043B\u044F \u0442\u0435\u0431\u044F \u0441\u0435\u0439\u0447\u0430\u0441 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 (\u043F\u043E \u0436\u0435\u043B\u0430\u043D\u0438\u044E)"), /*#__PURE__*/React.createElement("textarea", {
    className: "field__input field__textarea",
    rows: "3",
    placeholder: "\u041D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u043E\u043A \u043E \u0442\u043E\u0447\u043A\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u0439 \u0442\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0448\u044C\u0441\u044F",
    value: form.note,
    onChange: e => setForm({
      ...form,
      note: e.target.value
    })
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn--solid session__submit"
  }, /*#__PURE__*/React.createElement("span", null, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0440\u0430\u0437\u0431\u043E\u0440"), /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  })), /*#__PURE__*/React.createElement("div", {
    className: "session__fine"
  }, "\u041D\u0430\u0436\u0438\u043C\u0430\u044F, \u0442\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0448\u044C\u0441\u044F \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u041E\u0442\u0432\u0435\u0442 \u2014 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 24\xA0\u0447\u0430\u0441\u043E\u0432.")) : /*#__PURE__*/React.createElement("div", {
    className: "session__success"
  }, /*#__PURE__*/React.createElement("div", {
    className: "session__success-mark"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    width: "48",
    height: "48"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "22",
    fill: "none",
    stroke: "rgba(212,165,116,0.6)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 24l7 7 13-13",
    fill: "none",
    stroke: "#e8c79a",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("h3", {
    className: "session__success-title"
  }, "\u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430."), /*#__PURE__*/React.createElement("p", {
    className: "session__success-text"
  }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E, ", form.name, ". \u042F \u0441\u0432\u044F\u0436\u0443\u0441\u044C \u0441\xA0\u0442\u043E\u0431\u043E\u0439 \u0432\xA0\u0442\u0435\u0447\u0435\u043D\u0438\u0435 24\xA0\u0447\u0430\u0441\u043E\u0432, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F \u0441\u0435\u0441\u0441\u0438\u0438 \u0438\xA0\u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0434\u0435\u0442\u0430\u043B\u0438 \u043E\u043F\u043B\u0430\u0442\u044B."), /*#__PURE__*/React.createElement("button", {
    className: "session__success-reset",
    onClick: () => {
      setSubmitted(false);
      setForm({
        name: "",
        contact: "",
        note: ""
      });
    }
  }, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443"))))), /*#__PURE__*/React.createElement("style", null, `
        .session {
          position: relative;
          background: linear-gradient(180deg, #050505 0%, #0a0908 100%);
          overflow: hidden;
        }
        .session__bg { position: absolute; inset: 0; pointer-events: none; z-index: 0; }
        .session__glow {
          position: absolute;
          left: 50%; top: 30%;
          transform: translate(-50%, -50%);
          width: 1200px; height: 1200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(212,165,116,0.16), transparent 60%);
          filter: blur(40px);
        }
        .session__grid-lines {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(90deg, rgba(212,165,116,0.06) 1px, transparent 1px),
            linear-gradient(0deg, rgba(212,165,116,0.06) 1px, transparent 1px);
          background-size: 120px 120px;
          mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 70%);
          -webkit-mask-image: radial-gradient(circle at 50% 40%, black 0%, transparent 70%);
        }

        .session__inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        @media (max-width: 980px) {
          .session__inner { grid-template-columns: 1fr; gap: 40px; }
        }

        .session__copy { display: grid; gap: 24px; }
        .session__title {
          font-family: var(--display);
          font-size: clamp(40px, 5.4vw, 76px);
          font-weight: 300;
          line-height: 1.04;
          color: var(--text);
        }
        .session__title em {
          font-style: italic;
          color: var(--gold-light);
        }

        .session__price {
          display: flex; align-items: flex-end; gap: 28px;
          padding: 28px 0;
          border-top: 1px solid var(--line-soft);
          border-bottom: 1px solid var(--line-soft);
        }
        .session__price-old { position: relative; }
        .session__price-old-num {
          font-family: var(--display);
          font-size: clamp(22px, 1.8vw, 28px);
          color: var(--muted);
          font-weight: 300;
        }
        .session__price-old-line {
          position: absolute;
          left: -4px; right: -4px;
          top: 50%;
          height: 1px;
          background: var(--gold);
          transform: rotate(-8deg);
        }
        .session__price-new { display: grid; gap: 6px; }
        .session__price-new-num {
          font-family: var(--display);
          font-size: clamp(48px, 6vw, 84px);
          color: var(--gold-light);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.01em;
          text-shadow: 0 0 40px rgba(232,199,154,0.3);
        }
        .session__price-new-tag {
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .session__lede {
          color: var(--text);
          font-size: 16px;
          line-height: 1.75;
          max-width: 54ch;
        }

        .session__points {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column;
          gap: 12px;
        }
        .session__points li {
          display: flex; align-items: center; gap: 14px;
          color: var(--text);
          font-size: 14px;
          letter-spacing: 0.04em;
        }
        .session__point-dot {
          width: 5px; height: 5px;
          background: var(--gold);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .session__form-card {
          background: linear-gradient(180deg, rgba(20,17,13,0.85), rgba(7,7,7,0.85));
          backdrop-filter: blur(12px);
          border: 1px solid var(--gold);
          padding: 36px 36px 36px;
          box-shadow: 0 40px 100px -30px rgba(0,0,0,0.6), 0 0 60px -20px rgba(212,165,116,0.3);
        }
        @media (max-width: 720px) { .session__form-card { padding: 26px 22px; } }

        .session__form-head {
          display: flex; align-items: center; gap: 12px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--line-soft);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 28px;
        }
        .session__form-meta {
          margin-left: auto;
          color: var(--muted);
        }
        .session__form-dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--gold);
        }

        .session__form { display: grid; gap: 22px; }
        .field { display: grid; gap: 10px; }
        .field__label {
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .field__input {
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--line-soft);
          color: var(--text);
          font-family: var(--body);
          font-size: 16px;
          padding: 10px 0;
          outline: none;
          transition: border-color .3s ease;
          resize: none;
        }
        .field__input::placeholder { color: var(--muted); opacity: 0.6; }
        .field__input:focus { border-bottom-color: var(--gold); }
        .field__textarea { line-height: 1.6; }

        .session__submit { width: 100%; justify-content: center; margin-top: 6px; }

        .session__fine {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.6;
          text-align: center;
          letter-spacing: 0.02em;
        }

        .session__success {
          display: grid; gap: 16px;
          padding: 12px 0;
          text-align: center;
          justify-items: center;
        }
        .session__success-title {
          font-family: var(--display);
          font-size: clamp(28px, 2.6vw, 38px);
          font-weight: 300;
          color: var(--gold-light);
        }
        .session__success-text {
          color: var(--text);
          font-size: 15px;
          line-height: 1.7;
          max-width: 40ch;
        }
        .session__success-reset {
          background: transparent;
          border: 0;
          color: var(--muted);
          font-family: var(--body);
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          cursor: pointer;
          padding: 12px 0;
          margin-top: 8px;
          text-decoration: underline;
          text-underline-offset: 6px;
          text-decoration-color: var(--line);
          transition: color .3s ease, text-decoration-color .3s ease;
        }
        .session__success-reset:hover {
          color: var(--gold);
          text-decoration-color: var(--gold);
        }
      `));
};
const sessionRoot = ReactDOM.createRoot(document.getElementById('session-root'));
sessionRoot.render(/*#__PURE__*/React.createElement(Session, null));
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);
