const PLANS = [
  {
    key: "group",
    tag: "Групповой формат",
    price: "1 000 $",
    duration: "2 месяца · 8 встреч",
    promise: "Общее поле, плотная практика, личный файл «Аватар» на выходе.",
    features: [
      "8 живых встреч в групповом формате",
      "Общий чат поддержки между сессиями",
      "90% практики · 10% теории и инструкций",
      "Глубокие диагностические тесты по сферам",
      "Личный итоговый файл «Аватар»",
    ],
    cta: "Подать заявку",
  },
  {
    key: "personal",
    featured: true,
    tag: "Персональный формат",
    price: "3 000 $",
    duration: "Индивидуальная траектория",
    promise: "Один на один. Глубина, скорость и прямая передача энергии.",
    features: [
      "Индивидуальный путь под твою точку входа",
      "Работа с острыми проблемами здесь и сейчас",
      "Максимальное расширение ёмкости",
      "Прямая передача энергии и состояний",
      "Доступ к наставнику между сессиями",
    ],
    cta: "Забронировать место",
  },
];

const PlanCard = ({ plan }) => {
  return (
    <div className={`plan ${plan.featured ? 'is-featured' : ''}`}>
      {plan.featured && <div className="plan__ribbon">Рекомендуем</div>}
      <div className="plan__head">
        <div className="plan__tag">{plan.tag}</div>
        <div className="plan__duration">{plan.duration}</div>
      </div>
      <div className="plan__price">
        <span className="plan__price-num">{plan.price}</span>
      </div>
      <p className="plan__promise">{plan.promise}</p>

      <ul className="plan__features">
        {plan.features.map((f, i) => (
          <li key={i} className="plan__feature">
            <span className="plan__check">
              <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8.5l3.2 3.2L13 4.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a href="#session" className={`btn ${plan.featured ? 'btn--solid' : ''} plan__cta`}>
        <span>{plan.cta}</span>
        <span className="arrow"></span>
      </a>
    </div>
  );
};

const Pricing = () => {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="section-head">
          <div className="reveal"><div className="numeral">06<em> / 07 — Форматы</em></div></div>
          <h2 className="reveal">Выбери свою <em>траекторию</em>.</h2>
          <p className="lede reveal">Два формата работы. Один общий принцип — глубина, ответственность и&nbsp;результат, который остаётся с&nbsp;тобой.</p>
        </div>

        <div className="pricing__grid reveal">
          {PLANS.map(p => <PlanCard key={p.key} plan={p} />)}
        </div>

      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

const pricingRoot = ReactDOM.createRoot(document.getElementById('pricing-root'));
pricingRoot.render(<Pricing />);
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);
