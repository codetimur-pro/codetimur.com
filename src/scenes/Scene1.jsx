import React from 'react';
import { StarField } from '../lib/StarField';
import { DustField } from '../lib/DustField';

const e = React.createElement;

export function Scene1({ active }) {
  return e('section', { className: 'scene s1', 'data-active': active, 'data-screen-label': '01' },
    e(StarField, { density: 0.7, twinkle: true }),
    e(DustField, { density: 1.4, style: { zIndex: 4 } }),
    e('div', { className: 's1-art' },
      e('div', { className: 'portrait', style: { backgroundImage: 'url("assets/portrait.png")' } })
    ),
    e('div', { className: 'scene-inner' },
      e('div', { className: 's1-copy' },
        e('div', { className: 'overline rise d1' }, 'Код Тимура'),
        e('h1', { className: 'display rise d2' },
          'Ускоритель ', e('br'), 'твоего ', e('span', { className: 'gold' }, 'развития')
        ),
        e('p', { className: 'lead rise d3' },
          'Пройди путь от исходного кода Вселенной до твоей личной трансформации через ясность, глубину и системный подход.'),
      )
    ),
    e('div', { className: 's1-scroll-hint' },
      e('span', { className: 'sh-label' }, 'Крути вниз'),
      e('div', { className: 'sh-line' })
    )
  );
}
