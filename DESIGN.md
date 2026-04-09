# Design System — Lambda Hack Basel

Inspired by [deepdrop.bio](https://deepdrop.bio/), adapted for a scrappy basement-lab hackathon.

## 1. Visual Theme & Atmosphere

Dark, scientific, slightly raw. The design channels a basement biolab at night — deep navy-black backgrounds with cyan-green accents that evoke bioluminescence and terminal screens. It's technical but not corporate; the scrappiness is intentional. Think: late-night lab notebook meets hacker terminal.

The typeface Bricolage Grotesque brings warmth and personality to an otherwise dark, data-driven aesthetic — it's geometric but slightly irregular, like hand-drawn lab notes refined into type. Fira Code serves as the monospace companion for technical labels, code snippets, and anything that should feel "computed."

**Key Characteristics:**
- Deep navy-black canvas (`#06090f`) — not pure black, preserving depth
- Cyan-green accent (`#00dfa2`) as the primary highlight — bioluminescent, energetic
- Bricolage Grotesque with tight letter-spacing at display sizes — approachable but technical
- Fira Code for monospace/code elements — ligature-enabled developer feel
- Subtle glow effects on interactive elements — buttons, cards, progress indicators
- Gradient borders and shadow glows using the accent color at low opacity
- Minimal use of color — the accent pops precisely because everything else is muted
- Dark surfaces layered at different depths (`#0d1520`, `#1a2536`) for visual hierarchy

## 2. Color Palette & Roles

### Primary
- **Atmosphere Black** (`#06090f`): Page background. Very dark navy with a hint of blue — not pure black.
- **Foreground** (`#e8edf5`): Primary text. Cool off-white that reduces eye strain on dark backgrounds.
- **True White** (`#ffffff`): Headings, high-emphasis text, button text on dark.

### Accent
- **Bio Green** (`#00dfa2`): Primary accent. CTAs, links, active states, highlights. The signature color — bioluminescent cyan-green.
- **Cyan** (`#00b4d8`): Secondary accent. Supporting highlights, hover states, secondary links.
- **Violet** (`#7c3aed`): Tertiary accent. Used sparingly for tags, badges, or track-specific highlights.

### Track Colors (one per hackathon track)
- **Wet Lab Green** (`#00dfa2`): Track 1 — Biology. The primary accent doubles as the bio track color.
- **Compute Blue** (`#00b4d8`): Track 2 — Computational / IT.
- **Hardware Violet** (`#7c3aed`): Track 3 — Hardware / Robotics.
- **BYOT Amber** (`#f59e0b`): Track 4 — Bring Your Own Topic. Warm amber for the wildcard track.

### Semantic
- **Error Red** (`#ff4757`): Form errors, warnings.
- **Success** (`#00dfa2`): Reuses Bio Green — confirmation, success states.
- **Muted** (`#94a3b8`): Secondary text, descriptions, timestamps, placeholder text.

### Surface & Depth
- **Surface** (`#0d1520`): Card backgrounds, raised containers.
- **Surface Hover** (`#1a2536`): Hover state for cards and interactive surfaces.
- **Surface Border** (`#1e2d42`): Subtle borders on cards and sections.
- **Overlay** (`rgba(6, 9, 15, 0.8)`): Modal/dialog backdrop.

## 3. Typography Rules

### Font Family
- **Primary**: `"Bricolage Grotesque"`, fallbacks: `ui-sans-serif, system-ui, -apple-system, sans-serif`
- **Monospace**: `"Fira Code"`, fallbacks: `ui-monospace, SFMono-Regular, monospace`
- **OpenType Features**: `"liga"` enabled on Fira Code for programming ligatures.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Bricolage Grotesque | 48px (3.00rem) | 700 | 1.10 | -0.025em | Event name, big impact |
| Section Heading | Bricolage Grotesque | 36px (2.25rem) | 700 | 1.20 | -0.025em | Track titles, major sections |
| Sub-heading | Bricolage Grotesque | 24px (1.50rem) | 600 | 1.30 | -0.025em | Card headings, schedule blocks |
| Body Large | Bricolage Grotesque | 20px (1.25rem) | 400 | 1.625 | normal | Tagline, intro paragraph |
| Body | Bricolage Grotesque | 16px (1.00rem) | 400 | 1.625 | normal | Standard reading text |
| Body Small | Bricolage Grotesque | 14px (0.875rem) | 400 | 1.50 | normal | Captions, metadata |
| Label | Bricolage Grotesque | 12px (0.75rem) | 600 | 1.33 | 0.05em | Uppercase labels, track tags |
| Mono Body | Fira Code | 14px (0.875rem) | 400 | 1.625 | normal | Code snippets, technical details |
| Mono Label | Fira Code | 12px (0.75rem) | 500 | 1.33 | 0.1em | Uppercase technical labels |

### Principles
- **Tight at the top, relaxed at the bottom**: Display and heading sizes use `-0.025em` tracking. Body text uses normal spacing for readability.
- **Weight signals hierarchy**: 700 for headings, 600 for sub-headings, 500 for emphasis, 400 for body.
- **Mono for the technical**: Anything that references code, compute, or data uses Fira Code. Schedule times, specs, and track labels can optionally use mono.
- **Uppercase sparingly**: Only for small labels (12px) and track tags. Never on headings or body text.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#00dfa2`
- Text: `#06090f` (dark on bright)
- Padding: 12px 24px
- Radius: 8px (lg)
- Font: 16px weight 600
- Hover: slight glow — `box-shadow: 0 0 20px rgba(0, 223, 162, 0.3)`
- Active: slight scale down `transform: scale(0.98)`
- Use: "Register Now", primary actions

**Secondary**
- Background: `transparent`
- Text: `#e8edf5`
- Border: `1px solid #1e2d42`
- Padding: 12px 24px
- Radius: 8px
- Hover: `background: #1a2536`, border color lightens
- Use: "Learn More", "View Schedule"

**Ghost / Link**
- Background: `transparent`
- Text: `#00dfa2`
- Padding: 4px 0
- Border-bottom: `1px solid transparent`
- Hover: `border-bottom-color: #00dfa2`
- Use: Inline links, "See all tracks"

### Cards

**Track Card**
- Background: `#0d1520`
- Border: `1px solid #1e2d42`
- Radius: 12px (xl)
- Padding: 24px
- Hover: border shifts to track color at 40% opacity, subtle glow
- Header: Track tag (uppercase label) in track color + card title
- Body: description in `#94a3b8`

**Schedule Block**
- Background: `#0d1520`
- Border-left: `3px solid` track color
- Radius: 8px
- Padding: 16px 20px
- Time in Fira Code mono, activity in Bricolage Grotesque

**Info Card (Metric/Stat)**
- Background: `#0d1520`
- Border: `1px solid #1e2d42`
- Radius: 12px
- Large number/stat: 36px weight 700 in `#ffffff`
- Label below: 14px weight 400 in `#94a3b8`

### Navigation
- Background: `rgba(6, 9, 15, 0.8)` with `backdrop-filter: blur(20px)`
- Sticky top, full-width
- Logo/event name left-aligned
- Links: 14px weight 500, `#e8edf5`, hover `#00dfa2`
- CTA button right-aligned: "Register" in primary style
- Mobile: hamburger collapse

### Forms (Registration)

**Text Input**
- Background: `#0d1520`
- Border: `1px solid #1e2d42`
- Text: `#e8edf5`
- Placeholder: `#94a3b8`
- Radius: 8px
- Padding: 12px 16px
- Focus: `border-color: #00dfa2`, `box-shadow: 0 0 0 2px rgba(0, 223, 162, 0.2)`

**Select / Dropdown**
- Same base styling as text input
- Chevron icon in `#94a3b8`

**Textarea**
- Same base styling, min-height: 100px

**Radio / Track Selector**
- Custom styled: surface cards that act as radio buttons
- Selected: border changes to track color, subtle glow
- Unselected: default surface border

### Tags / Badges

**Track Tag**
- Background: track color at 10% opacity (e.g., `rgba(0, 223, 162, 0.1)`)
- Text: track color
- Padding: 4px 10px
- Radius: 9999px (full pill)
- Font: 12px weight 600, uppercase, 0.05em tracking

**Status Badge**
- Same structure as track tag
- Colors: green for "Open", amber for "Closing Soon", red for "Closed"

### Dividers
- Horizontal: `1px solid #1e2d42`
- With glow: gradient from transparent → `#00dfa2` at 20% → transparent

## 5. Layout Principles

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card gap: 24px
- Inner card padding: 24px
- Form field gap: 16px

### Grid & Container
- Max content width: 1120px, centered
- Hero: single column centered, generous vertical space
- Track cards: 2×2 grid (desktop), single column (mobile)
- Schedule: single column with time + activity rows
- Registration form: single column, max-width 560px centered

### Whitespace Philosophy
- **Breathe between sections**: 80–96px vertical gaps between major sections. The dark background means dense layouts feel oppressive — generous space keeps it readable.
- **Cards cluster, sections separate**: Cards within a section sit tight (24px gaps) while sections themselves are widely spaced.
- **Asymmetric hero**: The hero section gets disproportionate top padding (120px+) to create drama and draw the eye down.

### Border Radius Scale
- Small (4px): Inline code, small elements
- Medium (8px): Buttons, inputs, schedule blocks
- Large (12px): Cards, main containers
- XL (16px): Hero container, featured sections
- Pill (9999px): Tags, badges

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (Level 0) | `#06090f` background | Page canvas |
| Surface (Level 1) | `#0d1520` background + `1px solid #1e2d42` border | Cards, containers |
| Raised (Level 2) | Surface + `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3)` | Dropdowns, modals |
| Glow (Interactive) | `box-shadow: 0 0 20px rgba(0, 223, 162, 0.15)` | Hovered cards, active buttons |
| Focus (Accessibility) | `0 0 0 2px rgba(0, 223, 162, 0.3)` + border color change | Keyboard focus ring |

### Glow Philosophy
Instead of traditional elevation shadows (which disappear on dark backgrounds), this system uses **colored glow** for interactive depth. When you hover a track card, a soft halo of the track's accent color bleeds outward. This creates a bioluminescent feel — elements light up when touched, like organisms responding to stimulus.

### Decorative Depth
- Hero section: subtle radial gradient from `#0d1520` center fading to `#06090f` edges
- Section dividers: optional gradient line (transparent → accent at 15% → transparent)
- Background texture: none. The depth comes purely from surface layering and glow.

## 7. Do's and Don'ts

### Do
- Use `#06090f` as the base background — not pure black (`#000`)
- Apply the Bio Green (`#00dfa2`) accent consistently for CTAs and interactive states
- Use track-specific colors to visually distinguish the 4 hackathon tracks
- Keep text in `#e8edf5` (not pure white) for comfortable dark-mode reading
- Use Fira Code for anything technical: times, specs, code references
- Apply glow effects on hover/focus — the bioluminescent metaphor is central
- Use uppercase + wide tracking only on small labels (12px)
- Maintain high contrast: accent green on dark passes WCAG AA

### Don't
- Don't use bright backgrounds or white sections — this is a fully dark design
- Don't apply the accent green to large text areas — it's for highlights and interactive elements
- Don't mix track colors within a single component — each card/section uses one track color
- Don't use heavy shadows with black — use colored glow instead
- Don't use Bricolage Grotesque in monospace contexts — switch to Fira Code
- Don't make the glow too intense — keep opacity between 0.1 and 0.3
- Don't center-align body text — left-align for readability, center only for short hero text
- Don't use borders heavier than 1px — the design is delicate on dark surfaces

## 8. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, stacked cards, 48px section padding |
| Tablet | 640–1024px | 2-column card grid, reduced hero size |
| Desktop | >1024px | Full layout, 2×2 card grid, 80px+ section padding |

### Touch Targets
- Buttons: minimum 44px height
- Form inputs: 48px height
- Navigation links: adequate spacing (16px+ gap)
- Track selector cards: full card is tappable

### Collapsing Strategy
- Hero: 48px display → 36px on mobile
- Track cards: 2×2 → single column stacked
- Navigation: horizontal links → hamburger menu
- Registration form: stays single column (already narrow)
- Schedule: maintains single-column layout, tightens padding
- Section spacing: 80px → 48px

## 9. Agent Prompt Guide

### Quick Color Reference
- Page background: `#06090f`
- Card surface: `#0d1520`
- Card border: `#1e2d42`
- Primary text: `#e8edf5`
- Heading text: `#ffffff`
- Muted text: `#94a3b8`
- Accent (CTA/links): `#00dfa2`
- Secondary accent: `#00b4d8`
- Error: `#ff4757`
- Track 1 (Bio): `#00dfa2`
- Track 2 (Compute): `#00b4d8`
- Track 3 (Hardware): `#7c3aed`
- Track 4 (BYOT): `#f59e0b`

### Example Component Prompts
- "Create a hero section on `#06090f` background. Headline 'Lambda Hack Basel' at 48px Bricolage Grotesque weight 700, `#ffffff`, letter-spacing -0.025em. Tagline at 20px weight 400, `#94a3b8`. Date/location at 14px Fira Code, `#00dfa2`. Primary CTA button: `#00dfa2` background, `#06090f` text, 12px 24px padding, 8px radius, glow on hover."
- "Design a track card: `#0d1520` background, `1px solid #1e2d42` border, 12px radius, 24px padding. Track tag pill at top: 12px uppercase Bricolage Grotesque weight 600, track color text on 10% opacity track color background, 9999px radius. Title: 24px weight 600 `#ffffff`. Description: 16px weight 400 `#94a3b8`. Hover: border shifts to track color at 40% opacity."
- "Build a schedule block: `#0d1520` background, 8px radius, `3px solid #00dfa2` left border, 16px 20px padding. Time in 14px Fira Code `#00dfa2`. Activity in 16px Bricolage Grotesque `#e8edf5`."
- "Create a registration form on dark background. Input fields: `#0d1520` background, `1px solid #1e2d42` border, 8px radius, 12px 16px padding, `#e8edf5` text, `#94a3b8` placeholder. Focus: border `#00dfa2` with `0 0 0 2px rgba(0, 223, 162, 0.2)` shadow."
- "Design sticky navigation: `rgba(6, 9, 15, 0.8)` background with `backdrop-filter: blur(20px)`. Logo left, links center (14px weight 500 `#e8edf5`), 'Register' CTA right (`#00dfa2` bg, `#06090f` text, 8px radius)."

### Iteration Guide
1. Start with the dark canvas (`#06090f`) — everything builds up from darkness
2. Use surface (`#0d1520`) for any container that needs to "exist" — cards, inputs, nav
3. Bio Green (`#00dfa2`) is the heartbeat — use it for anything the user should interact with or notice
4. Track colors create visual wayfinding — each track is instantly recognizable
5. Glow replaces shadow — on dark backgrounds, colored glow is how elements "rise"
6. Fira Code for data, Bricolage Grotesque for narrative — this split reinforces the lab-meets-hack identity
7. Keep the mood: scientific, scrappy, nocturnal. This isn't a corporate conference — it's a basement hack.
