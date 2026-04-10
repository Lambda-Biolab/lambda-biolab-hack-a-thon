# Design System — Lambda Hack Basel

Inspired by Linear's precision design. System light/dark via `prefers-color-scheme`.

## 1. Visual Theme & Atmosphere

Clean, precise, tool-grade. Inter Variable with OpenType `"cv01","ss03"` for a geometric, purposeful character. Hierarchy through size and letter-spacing compression, not weight. The only chromatic color is the brand accent — everything else is neutral gray scale.

System light/dark: respects `prefers-color-scheme`. Light mode is warm off-white (`#f7f8f8`), dark mode is near-black (`#08090a`). Both share the same accent and track colors.

## 2. Color Palette

### Light Mode
- **Background**: `#f7f8f8`
- **Surface**: `#ffffff`
- **Border**: `rgba(0,0,0,0.08)`
- **Border Hover**: `rgba(0,0,0,0.15)`
- **Text Primary**: `#1a1a1a`
- **Text Secondary**: `#6b6f76`
- **Text Muted**: `#8a8f98`

### Dark Mode
- **Background**: `#08090a`
- **Surface**: `rgba(255,255,255,0.03)`
- **Border**: `rgba(255,255,255,0.08)`
- **Border Hover**: `rgba(255,255,255,0.15)`
- **Text Primary**: `#f7f8f8`
- **Text Secondary**: `#d0d6e0`
- **Text Muted**: `#8a8f98`

### Accent
- **Brand Indigo**: `#5e6ad2` (CTA backgrounds)
- **Accent Violet**: `#7170ff` (links, active states)
- **Accent Hover**: `#828fff`

### Track Colors
- Bio: `#27a644`, Compute: `#5e6ad2`, Hardware: `#7c3aed`, BYOT: `#e5a00d`

## 3. Typography

- **Primary**: Inter Variable, `"cv01","ss03"`, weights 400/500
- **Mono**: `"Fira Code"`, fallback monospace
- Hero: 48px, weight 500, line-height 1.05, letter-spacing -0.03em
- Section heading: 28px, weight 500, line-height 1.2, tracking -0.02em
- Card title: 18px, weight 500, line-height 1.33
- Body: 16px, weight 400, line-height 1.6
- Small/label: 13px, weight 400
- Mono label: 11px, weight 400, uppercase, tracking 0.08em

## 4. Components

- **Primary button**: `#5e6ad2` bg, white text, 6px radius, hover `#828fff`
- **Secondary button**: transparent bg, border `var(--border)`, 6px radius
- **Cards**: `var(--surface)` bg, `1px solid var(--border)`, 10px radius, hover border lightens
- **Inputs**: `var(--surface)` bg, `1px solid var(--border)`, 6px radius, focus border accent
- **Nav**: bg matches page, bottom border, sticky
- **Dividers**: `1px solid var(--border)`
