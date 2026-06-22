# Design Language: CULTISH™ 5

> Extracted from `https://5.cultish.com` on May 13, 2026
> 64 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#e9e0d0` | rgb(233, 224, 208) | hsl(38, 36%, 86%) | 6 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#ffffff` | hsl(0, 0%, 100%) | 128 |
| `#000000` | hsl(0, 0%, 0%) | 4 |

### Background Colors

Used on large-area elements: `#000000`

### Text Colors

Text color palette: `#ffffff`

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#ffffff` | text, border | 128 |
| `#e9e0d0` | background | 6 |
| `#000000` | background | 4 |

## Typography

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 12px | 0.75rem | 400 | 18px | normal | html, head, meta, link |

### Font Weights in Use

`400` (64x)

## Spacing

| Token | Value | Rem |
|-------|-------|-----|
| spacing-2 | 2px | 0.125rem |
| spacing-202 | 202px | 12.625rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| sm | 3px | 6 |

## CSS Custom Properties

### Colors

```css
--color-white: #fff;
--color-loader-bar-fill: #65523c;
--color-loader-bar-bg: #65523c1a;
--color-text: #fff;
--color-background: #000;
--color-link-hover: #fff;
--color-loader-bg: #000;
--color-link: #fff;
--color-black: #000;
```

### Spacing

```css
--hero-noise-size: 128px 128px;
--spacing: .25rem;
--page-padding: 1.5rem;
```

### Typography

```css
--font-mono: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
--font-sans: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
--default-mono-font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
--default-font-family: ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
```

### Radii

```css
--radius-sm: .25rem;
```

### Other

```css
--hero-noise-image: none;
--cursor-interactive: url(../assets/pointers/pointer-click-cursor.png) 2 2,pointer;
--cursor-default: url(../assets/pointers/pointer-arrow-cursor.png) 2 2,auto;
--tw-translate-z: 0;
--default-transition-duration: .15s;
--default-transition-timing-function: cubic-bezier(.4,0,.2,1);
--tw-translate-y: 0;
--tw-translate-x: 0;
--ease-out: cubic-bezier(0,0,.2,1);
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Transitions & Animations

**Easing functions:** `[object Object]`

**Durations:** `0.5s`

### Common Transitions

```css
transition: all;
transition: opacity 0.5s cubic-bezier(0, 0, 0.2, 1);
```

### Keyframe Animations

**fadeInUp**
```css
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0px); }
}
```

**fadeIn**
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**menuFadeIn**
```css
@keyframes menuFadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**menuFadeOut**
```css
@keyframes menuFadeOut {
  0% { opacity: 1; }
  100% { opacity: 0; }
}
```

**soundBarPulse**
```css
@keyframes soundBarPulse {
  0% { transform: scaleY(0.25); }
  100% { transform: scaleY(var(--sound-bar-scale-y,.8)); }
}
```

**animateGrain**
```css
@keyframes animateGrain {
  0%, 100% { transform: translate(0px); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, -20%); }
  30% { transform: translate(-5%, -10%); }
  40% { transform: translate(-15%, -20%); }
  50% { transform: translate(-5%, -10%); }
  60% { transform: translate(-15%, -20%); }
  70% { transform: translate(-5%, -10%); }
  80% { transform: translate(-15%, -20%); }
  90% { transform: translate(-5%, -10%); }
  100% { transform: translate(-15%, -20%); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (1 instances)

```css
.button {
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(255, 255, 255);
  font-size: 12px;
  font-weight: 400;
```

## Layout System

**0 grid containers** and **9 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 600px | 0px |

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 7x |
| column/nowrap | 2x |

**Gap values:** `1.5px`, `24px`, `9px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 91/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 100/100 |
| Spacing System | 70/100 |
| Shadow Consistency | 85/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 6 !important rules — prefer specificity over overrides
- 128 duplicate CSS declarations

## Z-Index Map

**4 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2000,3000 | div.f.i.x.e.d. .i.n.s.e.t.-.0. .z.-.2.0.0.0. .f.l.e.x. .f.l.e.x.-.c.o.l. .i.t.e.m.s.-.c.e.n.t.e.r. .j.u.s.t.i.f.y.-.c.e.n.t.e.r. .g.a.p.-.8. .b.g.-.(.-.-.c.o.l.o.r.-.l.o.a.d.e.r.-.b.g.). .t.r.a.n.s.i.t.i.o.n.-.o.p.a.c.i.t.y. .d.u.r.a.t.i.o.n.-.5.0.0. .e.a.s.e.-.o.u.t. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.a.u.t.o. .o.p.a.c.i.t.y.-.1.0.0, div.h.e.r.o. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .f.i.x.e.d. .z.-.3.0.0.0 |
| dropdown | 997,997 | div.f.i.x.e.d. .t.o.p.-.1.0. .r.i.g.h.t.-.6. .z.-.9.9.7. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .f.l.e.x. .i.t.e.m.s.-.s.t.a.r.t. .j.u.s.t.i.f.y.-.e.n.d, div.f.i.x.e.d. .b.o.t.t.o.m.-.6. .l.e.f.t.-.6. .z.-.9.9.7. .p.o.i.n.t.e.r.-.e.v.e.n.t.s.-.n.o.n.e. .f.l.e.x. .i.t.e.m.s.-.s.t.a.r.t. .j.u.s.t.i.f.y.-.e.n.d, div.f.i.x.e.d. .t.o.p.-.1.0. .l.e.f.t.-.6. .z.-.9.9.7. .f.l.e.x. .i.t.e.m.s.-.s.t.a.r.t. .j.u.s.t.i.f.y.-.e.n.d |
| base | 1,1 | div.a.b.s.o.l.u.t.e. .i.n.s.e.t.-.0. .z.-.1. .h.-.f.u.l.l. .w.-.f.u.l.l. .t.o.u.c.h.-.n.o.n.e |

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Asul | google-fonts | 400, 700 | normal |
| DM Sans | google-fonts | 100, 100 1000 | italic, normal |

**Google Fonts URL:** `https://fonts.googleapis.com/`

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 5 | objectFit: fill, borderRadius: 0px, shape: square |

**Aspect ratios:** 3.61:1 (2x), 3:2 (1x), 4:3 (1x), 2.78:1 (1x)

## Motion Language

**Feel:** responsive · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `lg` | `500ms` | 500 |

### Easing Families

- **ease-out** (1 uses) — `cubic-bezier(0, 0, 0.2, 1)`

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** 5 Years of Cultish - A celebration of the past, present, and future of Cultish.

## Material Language

**Label:** `flat` (confidence 0.55)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.036 |
| Shadow profile | none |
| Avg shadow blur | 0px |
| Max radius | 3px |
| backdrop-filter in use | no |
| Gradients | 0 |

## Imagery Style

**Label:** `mixed` (confidence 0)
**Counts:** total 5, svg 0, icon 2, screenshot-like 0, photo-like 0
**Dominant aspect:** ultra-wide
**Radius profile on images:** square

## Component Library

**Detected:** `tailwindcss` (confidence 0.758)

Evidence:
- tailwind-like class density 73%

## Quick Start

To recreate this design in a new project:

2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
