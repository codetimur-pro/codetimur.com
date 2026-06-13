/* chrome.jsx — header, progress rail, hint, counter
   Exports to window: TopBar, Rail, Hint, Counter */
(function () {
  const e = React.createElement;

  function TopBar() {
    return e('header', { className: 'topbar' },
      e('a', { className: 'brand', href: '#', onClick: (ev) => ev.preventDefault() },
        e('img', { src: 'assets/logo.svg', className: 'logo-wordmark', alt: 'CodeTimur', height: 28 })
      ),
      e('button', { className: 'hamburger', 'aria-label': 'Открыть меню' },
        e('span'),
        e('span'),
        e('span')
      )
    );
  }

  // screens: [{title}], current screen index, jump(fn)
  function Rail({ screens, screen, onJump }) {
    return e('div', { className: 'rail' },
      screens.map((s, i) =>
        e('button', {
          key: i,
          className: 'rail-step',
          'data-on': screen === i,
          'data-done': i < screen,
          title: s.title,
          onClick: () => onJump(i),
        },
          e('span', { className: 'rail-num' }, String(i + 1).padStart(2, '0')),
          e('span', { className: 'rail-dot' })
        )
      )
    );
  }

  function Hint() { return null; }

  function Counter() { return null; }

  Object.assign(window, { TopBar, Rail, Hint, Counter });
})();
