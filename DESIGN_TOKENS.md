# Design Tokens — codetimur.com/mentorship

Все значения извлечены напрямую из кода сайта.

---

## Цвета

### Основная палитра
| Токен | HEX / значение | Применение |
|---|---|---|
| `--black` | `#070707` | Основной фон страницы |
| `--black-2` | `#0c0c0c` | Вторичный фон (карточки, секции) |
| `--black-3` | `#131211` | Тёмные блоки с тёплым оттенком |

### Золотая акцентная
| Токен | HEX | Применение |
|---|---|---|
| `--gold` | `#d4a574` | Основной акцент, кнопки, иконки |
| `--gold-light` | `#e8c79a` | Курсив, светлые акценты, hover |
| `--gold-deep` | `#a87f4f` | Тёмный золотой, градиенты кнопок |

### Текст
| Токен | Значение | Применение |
|---|---|---|
| `--text` | `#f4ece2` | Основной текст (тёплый белый) |
| `--muted` | `#8a8278` | Вспомогательный текст, лейблы |

### Линии и границы
| Токен | Значение | Применение |
|---|---|---|
| `--line` | `rgba(212, 165, 116, 0.18)` | Золотые рамки (карточки сессии) |
| `--line-soft` | `rgba(244, 236, 226, 0.08)` | Тонкие разделители, рамки |

---

## Типографика

### Шрифты
| Токен | Значение |
|---|---|
| `--display` | `"Cormorant Garamond", "Times New Roman", serif` |
| `--body` | `"Manrope", system-ui, -apple-system, "Segoe UI", sans-serif` |

**Google Fonts подключение:**
```
Cormorant Garamond: ital,wght@0,300;0,400;0,500;1,300;1,400
Manrope: wght@200;300;400;500;600;700
```

### Размеры заголовков (fluid / clamp)
| Элемент | Формула | Диапазон |
|---|---|---|
| `h1` | `clamp(38px, 5.2vw, 80px)` | 38–80px |
| `h1` hero | `clamp(46px, 12vw, 62px)` на мобайле | 46–62px |
| `h2` | `clamp(34px, 4.4vw, 64px)` | 34–64px |
| `h3` | `clamp(22px, 2vw, 30px)` | 22–30px |

### Веса
| Использование | Weight |
|---|---|
| Заголовки (display) | `300` |
| Курсив display | `300 italic` |
| Тело страницы | `300` |
| Кнопки, лейблы | `500` |
| Цифры-акценты | `300` |

### Line-height
| Элемент | Значение |
|---|---|
| `h1` | `1.02` |
| `h2` | `1.06` |
| `h3` | `1.2` |
| Body | `1.6` |
| `.lede` (подзаголовки) | `1.7` |
| Крупные цитаты | `1.4` |

### Размеры специальных текстов
| Элемент | Размер | Letter-spacing |
|---|---|---|
| `.lede` | `clamp(15px, 1.1vw, 18px)` | `0.01em` |
| `.eyebrow` (надпись над заголовком) | `11px` | `0.32em` |
| `.numeral` (01 / 07) | `14px` | `0.3em` |
| Навигация | `12px` | `0.2em` |
| Кнопки | `13px` | `0.22em` |
| Мелкие лейблы | `11px` | `0.24–0.28em` |
| Сверхмелкие подписи | `10px` | `0.32em` |

---

## Отступы и сетка

### Контейнер
| Свойство | Значение |
|---|---|
| `max-width` | `1280px` |
| `padding` (десктоп) | `0 48px` |
| `padding` (≤720px) | `0 22px` |

### Секции
| Свойство | Значение |
|---|---|
| Вертикальный паддинг | `clamp(96px, 12vw, 180px)` |
| Разделитель между секциями | `1px solid var(--line-soft)` |
| `.section-head` margin-bottom | `clamp(56px, 7vw, 96px)` |

### Типовые gap значения
| Использование | Значение |
|---|---|
| Section-head grid | `24px` |
| Hero copy (десктоп) | `32px` |
| Hero copy (мобайл) | `36px` |
| Карточки grid | `24–32px` |
| Meta / статы | `28px` |
| Кнопки row | `32px` |
| Легенда список | `2–12px` |

---

## Брейкпоинты

| Название | Значение | Что меняется |
|---|---|---|
| Desktop+ | `≥1200px` | Увеличенные заголовки |
| Desktop | `≥981px` | Reveal-анимации включены |
| Tablet | `≤980px` | Grid → 1 колонка (avatar, session) |
| Mobile L | `≤880px` | Навигация скрыта, hero mobile-режим |
| Mobile M | `≤720px` | Уменьшенный контейнер, скрыть scroll-hint |
| Mobile S | `≤620px` | Диаграмма 1 колонка |
| Mobile XS | `≤520px` | Скрыть caption |

---

## Кнопки

### `.btn` (outline)
```
Padding: 18px 32px
Border: 1px solid var(--gold)
Background: transparent
Color: var(--gold)
Font: 13px / 500 / uppercase / 0.22em
Hover: background заполняется gold → black (slide up)
Transition: .5s cubic-bezier(.6,.05,.2,1)
Arrow: 14px → 22px на hover
```

### `.btn--solid` (filled)
```
Background: linear-gradient(90deg, #d4a574, #e8c79a)
Color: var(--black)
Hover: slide in black background, color → gold-light
```

---

## Эффекты и тени

### Свечение (glow)
```css
/* Точечное свечение — gold dot */
box-shadow: 0 0 10px var(--gold);

/* Частицы / спарклы */
box-shadow: 0 0 8px var(--gold-light);

/* Карточка сессии */
box-shadow: 0 40px 100px -30px rgba(0,0,0,0.6),
            0 0 60px -20px rgba(212,165,116,0.3);

/* Ambient glow (фон секций) */
radial-gradient(circle, rgba(212,165,116,0.13), transparent 60%)
filter: blur(40px)
```

### Blur / Backdrop
```
Nav backdrop: blur(14px)
Caption backdrop: blur(8px)
Form card backdrop: blur(12px)
Ambient glow blur: blur(40px)
Particle glow blur: blur(6–10px)
```

### Градиенты фона
```css
/* Карточки */
linear-gradient(165deg, #0e0d0b 0%, #070707 100%)

/* Avatar detail */
linear-gradient(165deg, rgba(20,17,13,0.7), rgba(7,7,7,0.4))

/* Session card */
linear-gradient(180deg, rgba(20,17,13,0.85), rgba(7,7,7,0.85))
```

---

## Анимации

### Reveal (появление при скролле, только desktop ≥981px)
```css
/* До появления */
opacity: 0;
transform: translateY(28px);

/* После появления (.in класс) */
opacity: 1;
transform: none;
transition: opacity 1s ease,
            transform 1s cubic-bezier(.2,.7,.2,1);
```

### Типовые переходы
| Элемент | Transition |
|---|---|
| Цвет ссылок | `color .25s ease` |
| Цвет/border кнопок | `.4s ease` |
| Slide кнопки | `.5s cubic-bezier(.6,.05,.2,1)` |
| Карточки flip | `.65s cubic-bezier(.4,.05,.2,1)` |
| Текст reveal панели | `opacity .7s ease .15s, transform .7s cubic-bezier(.2,.7,.2,1) .15s` |

### Keyframe анимации
```
pulse (nav dot)      — 2.4s ease-in-out infinite, opacity + scale
heroPulse            — 7s, opacity 0.55→0.95 + scale 1→1.06
heroParticle         — 5–11s, float up 56px + drift ±40px
heroStreak           — 7s, горизонтальное пересечение
scrollDown           — 2.4s, вертикальная линия-бегунок
shadowTwinkle        — 2.6s, мерцание частиц
flashH               — 0.9s, вспышка при завершении слайдера
```

---

## Компоненты — паттерны

### Eyebrow (надпись перед заголовком)
```
Font: body / 11px / 500 / uppercase / 0.32em
Color: var(--gold)
Перед текстом: линия 28×1px с градиентом transparent → gold
```

### Numeral (счётчик секции "01 / 07")
```
Font: display / 300 / 14px / 0.3em
Color: var(--gold)
Курсив часть (" / 07 — Название"): var(--muted), normal style
```

### Разделитель секций
```
border-top: 1px solid var(--line-soft)  /* rgba(244,236,226,0.08) */
```

### Dot-accent (живая точка)
```
6×6px, border-radius: 50%
background: var(--gold)
box-shadow: 0 0 12px var(--gold)
animation: pulse 2.4s infinite
```

---

## Специальные UI-паттерны

### Flip-карточка (diagnosis)
- 3D flip через `rotateY(180deg)` на `perspective: 1400px`
- Лицо: тёмный фон, сигнал
- Обратная сторона: gold акцент, диагноз
- Aspect ratio: `3/2.65`

### Sticky scroll-анимация (shadow)
- Высота секции: `260vh`
- Sticky pin: `100vh`
- Прогресс `0→1` управляет 3 текстами + eclipse-эффектом

### Интерактивный слайдер (vectors)
- Track: `44px` высота, тёмный фон
- Fill: gradient gold-deep → gold → gold-light
- Thumb: 8px золотой блок
- Complete state: glow + flash анимация

### SVG диаграмма (avatar)
- ViewBox: `600×540`
- 3 пересекающихся круга r=150
- radialGradient заливки с rgba золотого
- Hover/active: `drop-shadow(0 0 24px rgba(212,165,116,0.35))`
