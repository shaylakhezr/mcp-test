# Token Map — Crustdata MCP Redesign

These are the design tokens. Claude Code MUST use these exact values.
No hex codes inline. No Tailwind arbitrary values for colors.

Source: drafts/styles.css (validated color audit) + Crustdata's live site.

## Colors

### Surfaces (dark theme)
- --bg:        #09090F  (page background)
- --surface:   #111119  (card background)
- --raised:    #18181F  (elevated card)
- --overlay:   #1E1E28  (nested elements, code blocks)

### Brand — indigo-purple
- --purple:    #5448B8  (primary action)
- --purple-h:  #7B6FE0  (hover, accent highlights)
- --purple-s:  rgba(84,72,184,0.14)  (subtle background tint)
- --purple-b:  rgba(84,72,184,0.32)  (border tint)

### Text
- --text-1:    #EEEEF5  (primary)
- --text-2:    #B5B2CC  (secondary)
- --text-3:    #636079  (muted/tertiary)

### Borders
- --border:    #242332
- --border-l:  #2E2C42  (lighter border for hover/active)

### Semantic (status colors)
- --green:     #1BA87A  (success — CONNECTED, AUTHED)
- --green-s:   rgba(27,168,122,0.13)
- --amber:     #EDA626  (warning — EDITING, WAITING)
- --amber-s:   rgba(237,166,38,0.13)
- --coral:     #D95C30  (danger — errors, removals)
- --coral-s:   rgba(217,92,48,0.13)

## Typography

- Font: Inter (provided by Vega preset / Geist)
- Mono: JetBrains Mono or system mono

### Scale
- H1: 56px / 1.05 / -0.02em / weight 600
- H2: 40px / 1.1 / -0.015em / weight 600
- H3: 20px / 1.3 / -0.01em / weight 600
- Body: 16px / 1.55 / weight 400
- Small: 14px / 1.5 / weight 400
- Mono: 13px / 1.6 / weight 400
- Kicker: 11px / 1.0 / 0.12em tracking / weight 600 / uppercase

## Spacing

- Container max: 1152px
- Container padding: 24px
- Section gap: 120px (between major sections)
- Block gap: 64px (between blocks within section)
- Element gap: 24px (between elements)

## Radius

- --radius-xs: 4px
- --radius-sm: 6px
- --radius-md: 10px (nested cards, code blocks)
- --radius-lg: 14px (main cards)
- --radius-pill: 9999px (buttons, status pills)

## Easing

- --ease: 150ms ease

## Rules

1. Never use hex codes inline. Always reference CSS variables.
2. Never introduce new font sizes. Use only the scale above.
3. Never use Tailwind arbitrary color values like text-[#fff].
4. The brand purple (#5448B8) is for primary CTAs and accents.
   Do not use for body text — fails WCAG AA.
5. Status colors only for status pills, never decoration.