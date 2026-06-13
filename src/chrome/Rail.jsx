import React from 'react';

const e = React.createElement;

export function Rail({ screens, screen, onJump }) {
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
