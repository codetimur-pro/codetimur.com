/* ============================================================
   Общая логика: reveal, nav, smooth-scroll
   ============================================================ */
(function () {
  'use strict';
  const $$ = s => Array.from(document.querySelectorAll(s));

  /* ---- Reveal при скролле ---- */
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.10, rootMargin: '0px 0px -6% 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---- Плавный скролл по якорям ---- */
  const scrollTo = window.__smoothScroll || function (sel) {
    const el = document.querySelector(sel);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + pageYOffset - 64, behavior: 'smooth' });
  };
  $$('a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.length < 2) return;
    a.addEventListener('click', e => { e.preventDefault(); scrollTo(href); history.replaceState(null, '', href); });
  });

  /* ---- Nav: скрытие при скролле вниз ---- */
  const nav = document.getElementById('nav');
  let last = 0;
  addEventListener('scroll', () => {
    const y = pageYOffset;
    if (nav) nav.style.transform = (y > last && y > 200) ? 'translateY(-100%)' : 'translateY(0)';
    last = y;
  }, { passive: true });
})();
