# CodeTimur Design System

An elegant, comprehensive design system for **CodeTimur** — a digital ecosystem for human development, self-understanding, and conscious living.

---

## About CodeTimur

**CodeTimur** is an author-created system of personal development that helps individuals understand themselves, develop their abilities, discover their purpose, and build a conscious life. The visual design embodies luxury minimalism with cosmic aesthetics, combining technology, depth, exploration, and a sense of a digital universe.

### Design Principles

- **Dark luxury**: Deep black backgrounds (#070707) with golden accents
- **Spacious elegance**: Generous whitespace and breathing room
- **Soft luminosity**: Gentle glows and subtle gradients
- **Gold as primary accent**: The only color accent used throughout
- **Cosmic exploration**: Layered visuals suggesting depth, discovery, and interconnection
- **Sharp geometry**: Acute angles on buttons and cards—no rounding
- **Interactive discovery**: Smooth animations revealing content as users explore

---

## Design System Structure

### Tokens (`tokens/`)

**Color Tokens** (`colors.css`)
- **Backgrounds**: `--black` (#070707), `--black-2` (#0c0c0e), `--black-3` (#131211)
- **Accents**: `--gold` (#d4a574), `--gold-light` (#e8c79a), `--gold-deep` (#a87f4f)
- **Text**: `--text` (#f4ece2), `--text-muted` (#8a8278)
- **Borders**: `--line` (gold @ 18% opacity), `--line-soft` (white @ 8%)

**Typography Tokens** (`typography.css`)
- **Display font**: Cormorant Garamond (300, 400, 500, italic)
- **Body font**: Manrope (200–700)
- **Scales**: H1 `clamp(40px, 5.4vw, 84px)`, H2 `clamp(34px, 4.4vw, 64px)`, H3 `clamp(22px, 2vw, 30px)`
- **Eyebrow**: 11px, 500, uppercase, 0.32em letter-spacing
- **Body**: Fluid 14–18px, 1.65 line-height

**Spacing & Layout** (`spacing.css`)
- **Container**: max-width 1280px, padding 48px (desktop) → 22px (mobile)
- **Section padding**: `clamp(96px, 12vw, 168px)` vertical
- **Grid gaps**: Fluid from 24px to 80px

**Animations** (`animations.css`)
- **Easing**: `cubic-bezier(0.2, 0.7, 0.2, 1)` (smooth deceleration)
- **Reveal**: opacity + translateY(28px) on scroll (desktop ≥981px)
- **Pulse**: 2.4s ease-in-out for status dots
- **Transitions**: 0.3–0.9s depending on property

### Components (`components/`)

**Buttons** (`buttons/`)
- `Button` — Outline (fill-up on hover with arrow), Solid (gradient), Ghost (minimal)
- Sizes: sm, md (default), lg
- Optional icons, arrows, disabled states

**Surfaces** (`surfaces/`)
- `Card` — Content container with border, elevated gradient, hover effects

**Feedback** (`feedback/`)
- `Badge` — Small tags with variant colors
- `Dot` — Animated status indicator with pulse animation

### Guidelines (`guidelines/`)

Foundation specimen cards showcasing:
- Color palette and semantics
- Typography scales (display, body, labels)
- Component variants (buttons, cards, badges)
- Brand assets (logos, imagery)

---

## Content Fundamentals

### Tone & Voice

- **Language**: Russian, informal "ты" (you) address
- **Eyebrows**: Conceptual, caps, poetic ("СОЗВЕЗДИЯ ВОЗМОЖНОСТЕЙ", "ЛИЧНАЯ РАБОТА")
- **Headings**: Metaphor-driven, introspective ("Пробуди свой внутренний огонь")
- **CTAs**: Imperative, active ("Исследовать", "Узнать подробнее", "Покорить")
- **Copy**: Precise, no filler; max 44 characters per line
- **Numbering**: "01 · Title", "— 03 / Tools"
- **No emoji** unless in brand identity

### Writing Principles

- Avoid redundancy—every word earns its place
- Embrace silence and whitespace in design
- Use italicized serif accents sparingly for emphasis
- Lead with concrete benefit, not features

---

## Visual Foundations

### Colors & Swatches

| Token | Value | Use |
|-------|-------|-----|
| `--black` | #070707 | Page backgrounds |
| `--black-2` | #0c0c0e | Card / section backgrounds |
| `--gold` | #d4a574 | Icons, accents, CTAs |
| `--gold-light` | #e8c79a | Hover states, italic accents |
| `--text` | #f4ece2 | Primary text (warm cream) |
| `--text-muted` | #8a8278 | Secondary, meta, labels |

### Imagery & Textures

- **Background**: Deep black with 1px ambient grain (opacity 0.018)
- **Photography**: Warm color grading, medium contrast, subtle desaturation
- **Illustrations**: Minimal line work, SVG, gold or cream color
- **Gradients**: Radial overlays for depth; never full-bleed on content
- **Blur**: Backdrop-filter (14px) on nav, scrim overlays for text legibility

### Buttons & Interactive

- **Outline buttons**: 1px gold border, transparent bg, sharp corners (border-radius: 0)
  - Hover: Gold fill (bottom-up), text turns black, arrow extends 14px → 22px
  - Duration: 0.5s `cubic-bezier(0.6, 0.05, 0.2, 1)`
- **Solid buttons**: Gold gradient bg (90deg), dark text
  - Hover: Fade to transparent, text turns gold-light
- **Ghost buttons**: Subtle border, muted text, minimal hover
- **All borders**: Sharp (0 radius) unless noted

### Cards & Containers

- **Border**: 1px solid `rgba(244, 236, 226, 0.08)` (--line-soft)
- **Background**: Linear gradient (180deg, rgba(255,255,255,.012) → transparent) or transparent
- **Hover**: Border → gold-soft, shadow (0 30px 60px -30px rgba(212,165,116,.25))
- **Corner radius**: 0 (sharp); only inline elements like badges use radius-sm (2px)

### Shadows & Depth

- **Card shadow**: `0 24px 60px -20px rgba(0,0,0,0.8)`
- **Glow (gold)**: `box-shadow: 0 0 12px var(--gold)`, optional `0 0 34px` for emphasis
- **No drop-shadows on text**—use color contrast instead

### Hover & Interactive States

- **Links**: Color 0.3s ease → var(--gold)
- **Cards**: translateY(-4px), border-color shift, shadow intensify
- **Buttons**: See above; all 0.4–0.5s duration
- **Icons**: Scale + color shift (e.g., 1.0 → 1.05)
- **No shrink/press states**—only opacity + color

### Breakpoints & Responsiveness

| Breakpoint | Behavior |
|------------|----------|
| ≥1200px | Full desktop, reveal animations enabled |
| 980–1199px | Reduced padding, 1-column grids |
| 880–979px | Navigation collapses to burger menu |
| ≤720px | Compact padding (22px), single-column layouts |
| ≤620px | Hero stacks vertically, compact spacing |

### Animation & Motion

- **Entrance (reveal)**: opacity 0 + translateY(28px) → 1 + 0, 0.9s ease
- **IntersectionObserver threshold**: 0.10, rootMargin `0px 0px -6% 0px`
- **Hover transitions**: 0.3–0.5s smooth easing, avoid snappy jumps
- **Pulse animations**: 2.4–4s ease-in-out infinite (breathing effect)
- **Canvas animations** (hero): 3D particles, orbital motion, breathing scale
- **Reduced motion**: All animations → 0.01ms, no decorative loops

---

## Markup Conventions

### Naming & Structure

- **CSS classes**: kebab-case (`hero-title`, `card-glyph`)
- **Components**: PascalCase exports (`Button`, `Card`, `Badge`)
- **Props interfaces**: Semantic names, optional with defaults
- **Tokens**: `--token-name` in `:root`, composable aliases

### HTML Principles

- **Canonical HTML**: Double quotes, explicit closes, no self-close non-void tags
- **Semantic**: Use `<section>`, `<nav>`, `<footer>` appropriately
- **Accessibility**: ARIA labels on interactive elements, alt text on images
- **No inline styles** in component templates (use className or style props)
- **Text wrap**: `text-wrap: pretty` on headings where supported

---

## Sources & References

This design system is derived from:
- **Live site**: codetimur.com (explored via local codebase)
- **Design tokens**: Extracted from DESIGN_SYSTEM_CodeTimur.md
- **Brand assets**: CODE_TIMUR_LOGO.svg, CODE_TIMUR_rocket.svg, hero and portrait images
- **Navigation & footer**: Global patterns from _nav.css and _nav.html

The codebase demonstrates:
- Fluid typography using CSS `clamp()`
- IntersectionObserver for scroll-triggered reveals
- Canvas animations for hero particles
- Responsive grids and flexbox layouts
- Backdrop filters for frosted-glass nav effects
- SVG glyph systems for icons

---

## Files & Manifests

### Root Files
- `styles.css` — Main entry point (@import list only)
- `tokens/` — Color, type, spacing, animation CSS

### Components
- `components/buttons/Button` — Primary interactive element
- `components/surfaces/Card` — Content container
- `components/feedback/Badge`, `Dot` — Small UI elements

### Guidelines
- `guidelines/colors-primary.html` — Color swatches
- `guidelines/typography-*.html` — Type scales
- `guidelines/components-*.html` — Component showcase
- `guidelines/brand-assets.html` — Logos and imagery

### UI Kits
*(Forthcoming)*
- `ui_kits/landing/` — codetimur.com homepage recreation

---

## Getting Started

1. **Use the colors** from `tokens/colors.css` in your designs
2. **Reference typography** from `tokens/typography.css` for scale and rhythm
3. **Import components** into your projects via the bundled `_ds_bundle.js`
4. **Follow the tone** guide above for copy
5. **Respect the motion** principles—smooth, deliberate, not gratuitous

---

## Next Steps

- [ ] Expand component library (Input, Select, Tabs, Tooltip, Dialog)
- [ ] Create UI kit for landing page and sub-products
- [ ] Document animation patterns with interactive examples
- [ ] Add light mode variant (optional)
- [ ] Create Figma mirror for design handoff

---

*CodeTimur Design System v1.0 — Built with clarity, intention, and cosmic wonder.*
