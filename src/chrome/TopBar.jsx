import React, { useState, useEffect, useRef } from 'react';

const e = React.createElement;

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function onKey(ev) { if (ev.key === 'Escape') setIsOpen(false); }
    function onScroll() { setScrolled(window.scrollY > 8); }
    setScrolled(window.scrollY > 8);
    document.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return e(React.Fragment, null,
    e('nav', {
      className: 'g-nav' + (scrolled ? ' scrolled' : ''),
      id: 'g-nav',
      ref: navRef,
    },
      e('a', { href: '/', className: 'g-logo' },
        e('img', {
          src: 'assets/logo.svg',
          className: 'logo-wordmark',
          alt: 'Code Timur',
          height: 30,
        })
      ),
      e('div', { className: 'g-nav-r' },
        e('button', {
          className: 'g-burger' + (isOpen ? ' is-open' : ''),
          onClick: () => setIsOpen(o => !o),
          'aria-label': 'Меню',
          'aria-expanded': isOpen,
        },
          e('svg', {
            viewBox: '0 0 24 22',
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeWidth: '1.8',
            width: '24',
            height: '22',
          },
            e('path', { className: 'gb1', d: 'M2,4 L22,4' }),
            e('path', { className: 'gb2', d: 'M2,11 L22,11' }),
            e('path', { className: 'gb3', d: 'M2,18 L22,18' }),
          )
        )
      )
    ),
    e('div', {
      className: 'g-backdrop' + (isOpen ? ' is-open' : ''),
      onClick: close,
    }),
    e('div', { className: 'g-drawer' + (isOpen ? ' is-open' : '') },
      e('nav', { className: 'g-drawer-links' },
        e('a', { href: '/apps/', onClick: close }, 'Экосистема'),
        e('a', { href: '/mentorship/', onClick: close }, 'Наставничество'),
        e('a', { href: '/teaching/', onClick: close }, 'Учение'),
        e('a', { href: '/vision/', onClick: close }, 'Видение'),
      ),
      e('a', {
        className: 'g-drawer-tg',
        href: 'https://t.me/codetimur',
        target: '_blank',
        rel: 'noopener',
        onClick: close,
      },
        e('svg', { viewBox: '0 0 24 24', fill: 'currentColor', width: '14', height: '14' },
          e('path', { d: 'M21.5 4.2 2.9 11.4c-1.3.5-1.3 1.2-.3 1.5l4.7 1.5 1.8 5.5c.2.6.4.8.8.8.4 0 .6-.2.8-.5l2.5-2.4 5.2 3.8c1 .5 1.6.3 1.9-.9l3.4-16c.4-1.5-.5-2.2-1.2-1.5z' })
        ),
        '@codetimur'
      )
    )
  );
}
