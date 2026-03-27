# Design System: Tether & Terroir
## Creative North Star: "The Technical Alpinist"

This design system bridges rugged utility and high-end editorial sophistication. Every screen should feel like a curated page from a high-production-value coffee table book.

---

## Colors

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#163328` | Dark forest green — nav, text on light |
| `primary-container` | `#2D4A3E` | Medium green — card headers, hover |
| `secondary` | `#9c440f` | Burnt sienna — CTA buttons, accent |
| `secondary-container` | `#fd8e55` | Light sienna |
| `background` | `#fdf9f3` | Warm cream — page base |
| `surface-container-low` | `#f7f3ed` | Section backgrounds |
| `surface-container-lowest` | `#ffffff` | Cards (lifted) |
| `surface-container-highest` | `#e6e2dc` | Chips, tags |
| `on-surface` | `#1c1c18` | Body text (never pure black) |
| `on-surface-variant` | `#424844` | Secondary text |
| `outline-variant` | `#c1c8c3` | Ghost borders (15% opacity only) |

### Hero Section
- Full-bleed cycling photography (person riding, not landscape)
- Dark green gradient overlay: `#163328` → transparent, bottom half
- White text on top

---

## Typography

| Level | Font | Size | Style |
|---|---|---|---|
| Display / H1 | Space Grotesk | 3.5rem | Bold, tracking -0.04em, UPPERCASE |
| H2 | Space Grotesk | 1.75rem | Bold, tracking -0.02em |
| H3 | Space Grotesk | 1.25rem | SemiBold |
| Body | Manrope | 1rem | Normal, line-height 1.6 |
| Label / Badge | Space Grotesk | 0.75rem | UPPERCASE, tracking +0.05em |

Google Fonts to import: `Space Grotesk` (weights 400, 600, 700) + `Manrope` (weights 400, 500)

---

## Layout Rules

### The "No-Line" Rule
**No 1px borders for sectioning.** Use background color shifts only:
- Page base: `background` (#fdf9f3)
- Sections: `surface-container-low` (#f7f3ed)
- Cards: `surface-container-lowest` (#ffffff) on top of low surface

### Asymmetric Layout
- Left-heavy text placement
- Oversized headlines dominate
- Technical labels (e.g., `DISTANCE: 389KM`) in small caps alongside headlines

### Border Radius
- Cards: `0.5rem` (8px)
- Buttons: `0.375rem` (6px) — no pill shapes
- Badges/chips: `0.25rem` (4px)

### Shadows
- Cards: `0 12px 40px rgba(28, 28, 24, 0.06)` — ambient, not boxed
- No standard drop shadows

### Glassmorphism (Navigation)
- Background: `rgba(253, 249, 243, 0.85)` + `backdrop-blur: 20px`
- Subtle bottom border: `outline-variant` at 10% opacity

---

## Components

### Navigation Bar
- Glassmorphism (see above)
- Logo: Space Grotesk Bold
- Links: Manrope, `on-surface-variant`

### Hero Section
```
[Full-bleed cycling photo]
[Dark green gradient overlay on bottom half]
  LABEL — KOREA · 4 RIVERS · 1,757KM
  DISCOVER KOREA BY BIKE  (display-lg, white)
  Subtitle text  (body, white 80% opacity)
  [CTA Button — burnt sienna]
```

### Route Cards
- White (`surface-container-lowest`) background
- Ambient shadow
- Top: image bleed
- Body: route name (H3), distance badge, difficulty pill, short description
- Difficulty pills: Easy = `#c9ead9` text `#163328` / Moderate = `#ffdcc0` text `#6b3b00` / Hard = `#ffdad6` text `#93000a`

### Buttons
- Primary: `#163328` bg, white text, 0.375rem radius
- CTA/Action: `#9c440f` bg (burnt sienna), white text
- Text: `primary` color, no background

### Section Headings
- Large Space Grotesk, left-aligned
- Small uppercase label above in `on-surface-variant`
- Example: `THE EXPEDITIONS` (label) → `4 Rivers Routes` (heading)

---

## Do's and Don'ts

### Do
- Embrace white space — if in doubt, add more padding
- Asymmetric margins and overlapping elements
- Use `secondary` (burnt sienna) sparingly — one focal point per screen
- Technical accent labels: `ROUTE: 01`, `KM: 389`, `DAYS: 5-7`

### Don't
- No pure black — use `#1c1c18`
- No 1px section borders
- No standard drop shadows
- No pill-shaped buttons (except tiny status chips)
- No centered layouts — left-heavy

---

## Spacing Scale
Base unit: `0.25rem` (4px)
Major sections: `5rem` (80px) vertical padding
Cards: `1.5rem` (24px) padding
