const Session = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({ name: "", contact: "", note: "" });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.contact || loading) return;
    setLoading(true);

    const BOT_TOKEN = '8756592455:AAGt-swHhonDIo-7-v__8jEAklj47TKNfgE';
    const CHAT_ID = '91508403';
    const now = new Date().toLocaleString('ru-RU', {
      timeZone: 'Europe/Moscow', day: 'numeric', month: 'long',
      hour: '2-digit', minute: '2-digit'
    });
    const text = [
      '📬 Новая заявка на стратегическую сессию',
      '',
      `👤 Имя: ${form.name}`,
      `📱 Контакт: ${form.contact}`,
      form.note ? `💬 Запрос: ${form.note}` : null,
      '',
      `🕐 ${now} (МСК)`
    ].filter(l => l !== null).join('\n');

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: CHAT_ID, text })
      });
    } catch (_) {}

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="session" id="session">
      <div className="session__bg">
        <div className="session__glow"></div>
        <div className="session__grid-lines"></div>
      </div>

      <div className="container session__inner">
        <div className="session__copy">
          <div className="reveal"><div className="numeral">07<em> / 07 — Финальный шаг</em></div></div>
          <h2 className="session__title reveal">
            Стратегическая<br/><em>сессия</em>
          </h2>

          <div className="session__price reveal">
            <span className="session__price-old">25 000 ₽</span>
            <span className="session__price-new">7 777 ₽</span>
          </div>

          <p className="session__lede reveal">
            Это не&nbsp;продающая встреча, а&nbsp;полноценный аудит твоего текущего состояния. Мы&nbsp;проведём глубокий разбор твоих слепых зон и&nbsp;найдём то, что&nbsp;тормозит твой рост прямо&nbsp;сейчас.
          </p>

          <ul className="session__points reveal">
            <li>
              <span className="session__point-dot"></span>
              <span className="session__point-text">
                <strong>Глубокий разбор.</strong> За&nbsp;90&nbsp;минут личной работы мы&nbsp;докопаемся до&nbsp;сути твоей ситуации, разберём истинные запросы и&nbsp;определим скрытые барьеры.
              </span>
            </li>
            <li>
              <span className="session__point-dot"></span>
              <span className="session__point-text">
                <strong>Два вектора решения.</strong> Мы&nbsp;выявим, над&nbsp;чем конкретно нужно работать внутри (твоё мышление и&nbsp;теневые стороны) и&nbsp;какое одно точное физическое действие нужно совершить во&nbsp;внешнем мире.
              </span>
            </li>
            <li>
              <span className="session__point-dot"></span>
              <span className="session__point-text">
                <strong>Персональный инструмент.</strong> Ты&nbsp;не&nbsp;просто уйдёшь с&nbsp;планом. Я&nbsp;подберу для&nbsp;тебя одну регулярную практику, максимально эффективную именно для&nbsp;твоей текущей ситуации.
              </span>
            </li>
          </ul>

          <p className="session__footnote reveal">
            Если по&nbsp;итогам аудита мы&nbsp;оба поймём, что&nbsp;готовы к&nbsp;долгосрочной работе в&nbsp;наставничестве&nbsp;— стоимость этой сессии будет полностью вычтена из&nbsp;основной программы.
          </p>
        </div>

        <div className="session__form-wrap reveal">
          <div className="session__form-card">
            <div className="session__form-head">
              <span className="session__form-dot"></span>
              <span>Запись на разбор</span>
              <span className="session__form-meta">{submitted ? 'Принято' : 'Открыта'}</span>
            </div>

            {!submitted ? (
              <form className="session__form" onSubmit={submit}>
                <label className="field">
                  <span className="field__label">Как тебя зовут</span>
                  <input
                    className="field__input"
                    type="text"
                    placeholder="Имя"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </label>
                <label className="field">
                  <span className="field__label">Контакт</span>
                  <input
                    className="field__input"
                    type="text"
                    placeholder="Telegram, WhatsApp или e-mail"
                    value={form.contact}
                    onChange={e => setForm({ ...form, contact: e.target.value })}
                    required
                  />
                </label>
                <label className="field">
                  <span className="field__label">Что для тебя сейчас главное (по желанию)</span>
                  <textarea
                    className="field__input field__textarea"
                    rows="3"
                    placeholder="Несколько строк о точке, в которой ты находишься"
                    value={form.note}
                    onChange={e => setForm({ ...form, note: e.target.value })}
                  ></textarea>
                </label>

                <button type="submit" className="btn btn--solid session__submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  <span>{loading ? 'Отправка...' : 'Записаться на разбор'}</span>
                  {!loading && <span className="arrow"></span>}
                </button>

                <div className="session__fine">
                  Нажимая, ты соглашаешься с обработкой персональных данных. Ответ — в течение 24&nbsp;часов.
                </div>
              </form>
            ) : (
              <div className="session__success">
                <div className="session__success-mark">
                  <svg viewBox="0 0 48 48" width="48" height="48">
                    <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(212,165,116,0.6)" strokeWidth="1"/>
                    <path d="M14 24l7 7 13-13" fill="none" stroke="#e8c79a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="session__success-title">Заявка получена.</h3>
                <p className="session__success-text">
                  Спасибо, {form.name}. Я свяжусь с&nbsp;тобой в&nbsp;течение 24&nbsp;часов, чтобы согласовать время сессии и&nbsp;прислать детали оплаты.
                </p>
                <button className="session__success-reset" onClick={() => { setSubmitted(false); setForm({ name: "", contact: "", note: "" }); }}>
                  Отправить ещё одну
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
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
          /* Centre the text block vertically against the form card on the right */
          align-items: center;
        }
        @media (max-width: 980px) {
          .session__inner { grid-template-columns: 1fr; gap: 40px; align-items: start; }
        }

        .session__copy { display: grid; gap: 26px; max-width: 540px; }
        .session__title {
          font-family: var(--display);
          font-size: clamp(34px, 3.6vw, 54px);
          font-weight: 300;
          line-height: 1.05;
          color: var(--text);
          letter-spacing: -0.005em;
        }
        .session__title em {
          font-style: italic;
          color: var(--gold-light);
        }

        /* Compact discount block right under the title */
        .session__price {
          display: flex; align-items: baseline; gap: 18px;
        }
        .session__price-old {
          font-family: var(--display);
          font-size: clamp(18px, 1.6vw, 22px);
          color: var(--muted);
          font-weight: 300;
          text-decoration: line-through;
          text-decoration-color: rgba(138,130,120,0.75);
        }
        .session__price-new {
          font-family: var(--display);
          font-size: clamp(60px, 7.5vw, 93px);
          color: var(--gold-light);
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.01em;
          text-shadow: 0 0 40px rgba(232,199,154,0.3);
        }

        .session__lede {
          color: var(--text);
          font-size: 16px;
          line-height: 1.75;
          max-width: 52ch;
        }

        .session__points {
          list-style: none;
          padding: 0; margin: 0;
          display: flex; flex-direction: column;
          gap: 18px;
        }
        .session__points li {
          display: flex; align-items: flex-start; gap: 14px;
        }
        .session__point-dot {
          width: 6px; height: 6px;
          background: var(--gold);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 9px;
          box-shadow: 0 0 10px rgba(212,165,116,0.6);
        }
        .session__point-text {
          color: rgba(244,236,226,0.72);
          font-size: 15px;
          line-height: 1.7;
        }
        .session__point-text strong {
          color: var(--text);
          font-weight: 600;
        }

        .session__footnote {
          font-family: var(--body);
          font-style: italic;
          font-size: 13px;
          line-height: 1.65;
          color: var(--muted);
          max-width: 52ch;
          padding-top: 6px;
          border-top: 1px solid var(--line-soft);
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
      `}</style>
    </section>
  );
};

const sessionRoot = ReactDOM.createRoot(document.getElementById('session-root'));
sessionRoot.render(<Session />);
setTimeout(() => window.__attachReveal && window.__attachReveal(), 50);
