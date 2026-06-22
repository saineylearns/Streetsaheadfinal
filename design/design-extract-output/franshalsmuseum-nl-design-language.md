# Design Language: Highlights from our collection

> Extracted from `https://franshalsmuseum.nl/en/collection?onView=false` on June 11, 2026
> 1524 elements analyzed

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#fecd8c` | rgb(254, 205, 140) | hsl(34, 98%, 77%) | 21 |
| Secondary | `#001317` | rgb(0, 19, 23) | hsl(190, 100%, 5%) | 1878 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#fafafa` | hsl(0, 0%, 98%) | 932 |
| `#000000` | hsl(0, 0%, 0%) | 110 |

### Background Colors

Used on large-area elements: `#001317`, `#fecd8c`

### Text Colors

Text color palette: `#000000`, `#fafafa`, `#001317`, `#fecd8c`

### Gradients

```css
background-image: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 58.91%), linear-gradient(rgba(0, 0, 0, 0) 64.82%, rgba(0, 0, 0, 0.5) 97.24%);
```

```css
background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#001317` | background, text, border | 1878 |
| `#fafafa` | text, border, background | 932 |
| `#000000` | text, border | 110 |
| `#fecd8c` | background, border, text | 21 |

## Typography

### Font Families

- **Rubik** — used for all (154 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 60px | 3.75rem | 700 | 60px | normal | h1 |
| 24px | 1.5rem | 700 | 24px | normal | h2, p |
| 18px | 1.125rem | 400 | 28px | normal | p, a, span, input |
| 16px | 1rem | 400 | 24px | normal | html, head, meta, link |
| 14px | 0.875rem | 700 | 14px | normal | p, span, h2 |

### Heading Scale

```css
h1 { font-size: 60px; font-weight: 700; line-height: 60px; }
h2 { font-size: 24px; font-weight: 700; line-height: 24px; }
h2 { font-size: 14px; font-weight: 700; line-height: 14px; }
```

### Body Text

```css
body { font-size: 18px; font-weight: 400; line-height: 28px; }
```

### Font Weights in Use

`400` (1461x), `700` (57x), `600` (6x)

## Spacing

**Base unit:** 4px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-4 | 4px | 0.25rem |
| spacing-56 | 56px | 3.5rem |
| spacing-80 | 80px | 5rem |
| spacing-240 | 240px | 15rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| lg | 12px | 9 |
| xl | 24px | 22 |
| full | 36px | 1 |

## Box Shadows

**sm** — blur: 0px
```css
box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
```

## CSS Custom Properties

### Colors

```css
--mp-color-gray300: #7D8688;
--mp-color-gray200: #7D8688;
--mp-color-gray100: #FAFAFA;
--mp-color-focus-outline: #B9C089;
--mp-color-on-image: #FAFAFA;
--mp-color-on-error: #001317;
--mp-color-on-surface: #FAFAFA;
--mp-color-on-background: #001317;
--mp-color-on-secondary: #001317;
--mp-color-on-primary: #001317;
--mp-color-success: #2CFF70;
--mp-color-error: #EDBAA7;
--mp-color-surface: #001317;
--mp-color-background: #FECD8C;
--mp-color-on-secondary-transparent: #001317;
--mp-color-secondary-transparent-variant: #B9C089;
--mp-color-secondary-transparent: #B9C089;
--mp-color-secondary-variant: #B9C089;
--mp-color-secondary: #B9C089;
--mp-color-on-primary-transparent: #001317;
--mp-color-primary-transparent-variant: #FFB655;
--mp-color-primary-transparent: #FECD8C;
--mp-color-primary-variant: #FFB655;
--mp-color-primary: #FECD8C;
--mp-color-theme: var(--mp-color-primary);
--mp-color-on-theme: var(--mp-color-on-primary);
--mp-color-theme-variant: var(--mp-color-primary-variant);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-ring-inset: ;
--tw-border-spacing-x: 0;
--tw-ring-color: rgb(59 130 246/0.5);
--tw-ring-offset-color: #fff;
--tw-ring-offset-width: 0px;
--tw-shadow-colored: 0 0 #0000;
--tw-border-spacing-y: 0;
```

### Spacing

```css
--tw-numeric-spacing: ;
--tw-contain-size: ;
```

### Shadows

```css
--tw-drop-shadow: ;
--tw-shadow: 0 0 #0000;
```

### Other

```css
--tw-backdrop-sepia: ;
--tw-sepia: ;
--tw-ordinal: ;
--tw-backdrop-saturate: ;
--tw-contain-style: ;
--tw-backdrop-invert: ;
--tw-brightness: ;
--tw-backdrop-grayscale: ;
--tw-hue-rotate: ;
--tw-scale-y: 1;
--tw-pan-y: ;
--tw-backdrop-contrast: ;
--tw-backdrop-brightness: ;
--tw-pan-x: ;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-contrast: ;
--tw-skew-x: 0;
--tw-backdrop-blur: ;
--tw-translate-x: 0;
--tw-gradient-via-position: ;
--tw-scroll-snap-strictness: proximity;
--tw-saturate: ;
--tw-grayscale: ;
--tw-scale-x: 1;
--tw-backdrop-hue-rotate: ;
--tw-gradient-to-position: ;
--tw-numeric-fraction: ;
--tw-skew-y: 0;
--tw-slashed-zero: ;
--tw-blur: ;
--tw-invert: ;
--tw-backdrop-opacity: ;
--tw-gradient-from-position: ;
--tw-numeric-figure: ;
--tw-pinch-zoom: ;
--tw-contain-paint: ;
--tw-contain-layout: ;
```

### Dependencies

```css
--mp-color-theme: --mp-color-primary;
--mp-color-on-theme: --mp-color-on-primary;
--mp-color-theme-variant: --mp-color-primary-variant;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| sm | 460px | min-width |
| sm | 640px | min-width |
| md | 768px | min-width |
| lg | 1024px | min-width |
| 1180px | 1180px | min-width |
| xl | 1280px | min-width |
| 1920px | 1920px | min-width |

## Transitions & Animations

**Easing functions:** `[object Object]`, `[object Object]`, `[object Object]`, `[object Object]`

**Durations:** `0.4s`, `0.2s`, `0.15s`, `1s`

### Common Transitions

```css
transition: all;
transition: 0.4s cubic-bezier(0.42, 0, 0, 1);
transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: opacity cubic-bezier(0, 0, 0.2, 1);
transition: 0.2s cubic-bezier(0, 0, 0.2, 1);
transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
transition: opacity 0.2s cubic-bezier(0.42, 0, 0, 1);
transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
transition: transform 1s cubic-bezier(0.42, 0, 0, 1);
```

### Keyframe Animations

**spin**
```css
@keyframes spin {
  100% { transform: rotate(1turn); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (6 instances)

```css
.button {
  background-color: rgb(254, 205, 140);
  color: rgb(250, 250, 250);
  font-size: 16px;
  font-weight: 400;
  padding-top: 12px;
  padding-right: 12px;
  border-radius: 12px;
}
```

### Cards (121 instances)

```css
.card {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Inputs (1 instances)

```css
.input {
  color: rgb(0, 19, 23);
  border-color: rgb(0, 19, 23);
  border-radius: 0px;
  font-size: 18px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Links (49 instances)

```css
.link {
  color: rgb(250, 250, 250);
  font-size: 16px;
  font-weight: 400;
}
```

### Navigation (27 instances)

```css
.navigatio {
  background-color: rgb(250, 250, 250);
  color: rgb(250, 250, 250);
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  position: static;
}
```

### Modals (1 instances)

```css
.modal {
  border-radius: 0px;
  padding-top: 0px;
  padding-right: 0px;
}
```

### Dropdowns (2 instances)

```css
.dropdown {
  border-radius: 0px;
  border-color: rgb(250, 250, 250);
  padding-top: 0px;
}
```

### Badges (1 instances)

```css
.badge {
  background-color: rgb(250, 250, 250);
  color: rgb(250, 250, 250);
  font-size: 16px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 0px;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 4 instances, 3 variants

**Variant 1** (2 instances)

```css
  background: rgb(254, 205, 140);
  color: rgb(0, 19, 23);
  padding: 12px 12px 12px 12px;
  border-radius: 12px;
  border: 2px solid rgb(254, 205, 140);
  font-size: 16px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 12px 12px 12px 12px;
  border-radius: 12px;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

**Variant 3** (1 instance)

```css
  background: rgb(0, 19, 23);
  color: rgb(254, 205, 140);
  padding: 12px 12px 12px 12px;
  border-radius: 12px;
  border: 2px solid rgb(254, 205, 140);
  font-size: 16px;
  font-weight: 400;
```

### Button — 6 instances, 2 variants

**Variant 1** (4 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 19, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 19, 23);
  font-size: 16px;
  font-weight: 600;
```

**Variant 2** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(250, 250, 250);
  font-size: 16px;
  font-weight: 600;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgb(254, 205, 140);
  color: rgb(0, 19, 23);
  padding: 12px 12px 12px 12px;
  border-radius: 12px;
  border: 2px solid rgb(254, 205, 140);
  font-size: 16px;
  font-weight: 400;
```

### Button — 6 instances, 1 variant

**Variant 1** (6 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Other — 8 instances, 1 variant

**Variant 1** (8 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(250, 250, 250);
  font-size: 16px;
  font-weight: 400;
```

### Button — 2 instances, 1 variant

**Variant 1** (2 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(250, 250, 250);
  font-size: 14px;
  font-weight: 700;
```

### Button — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: 16px;
  font-weight: 400;
```

### Card — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 19, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 19, 23);
  font-size: 16px;
  font-weight: 400;
```

### Card — 20 instances, 1 variant

**Variant 1** (20 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 19, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 19, 23);
  font-size: 16px;
  font-weight: 400;
```

### Card — 20 instances, 1 variant

**Variant 1** (20 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 19, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 19, 23);
  font-size: 16px;
  font-weight: 400;
```

### Card — 20 instances, 1 variant

**Variant 1** (20 instances)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(250, 250, 250);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(250, 250, 250);
  font-size: 18px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 19, 23);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px solid rgb(0, 19, 23);
  font-size: 18px;
  font-weight: 400;
```

## Layout System

**7 grid containers** and **289 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 1200px | 40px |
| 1280px | 0px |
| 100% | 0px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 12-column | 6x |
| 3-column | 1x |

### Grid Templates

```css
grid-template-columns: 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px;
gap: 24px;
grid-template-columns: 357.328px 357.328px 357.344px;
gap: 24px;
grid-template-columns: 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px 84.6562px;
gap: 24px;
grid-template-columns: 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px 71.3281px;
gap: 24px;
grid-template-columns: 42px 42px 42px 42px 42px 42px 42px 42px 42px 42px 42px 42px;
gap: 80px 56px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| row/nowrap | 108x |
| column/nowrap | 178x |
| column/wrap | 1x |
| row/wrap | 2x |

**Gap values:** `12px`, `16px`, `24px`, `32px`, `40px`, `4px`, `56px`, `80px 56px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 0 passing, 0 failing color pairs

## Design System Score

**Overall: 96/100 (Grade: A)**

| Category | Score |
|----------|-------|
| Color Discipline | 100/100 |
| Typography Consistency | 100/100 |
| Spacing System | 100/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 100/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 100/100 |

**Strengths:** Tight, disciplined color palette, Consistent typography system, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance, Good CSS variable tokenization

**Issues:**
- 16 !important rules — prefer specificity over overrides
- 88% of CSS is unused — consider purging
- 2871 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | — | 2 | brand |
| linear | 0deg | 4 | bold |

```css
background: linear-gradient(rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 58.91%);
background: linear-gradient(rgba(0, 0, 0, 0) 64.82%, rgba(0, 0, 0, 0.5) 97.24%);
background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.8) 100%);
```

## Z-Index Map

**5 unique z-index values** across 2 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| sticky | 11,25 | a.b.l.o.c.k. .z.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r. .t.o.p.-.0. .l.e.f.t.-.0. .r.e.l.a.t.i.v.e. .m.a.x.-.l.g.:.z.-.o.v.e.r.-.n.a.v.i.g.a.t.i.o.n.-.m.e.n.u. .l.g.:.z.-.o.v.e.r.-.n.a.v.i.g.a.t.i.o.n.-.m.e.n.u. .h.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.h.e.i.g.h.t.]. .l.g.:.h.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.h.e.i.g.h.t.-.-.d.e.s.k.t.o.p.]. .w.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.w.i.d.t.h.]. .l.g.:.w.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.w.i.d.t.h.-.-.d.e.s.k.t.o.p.], a.b.l.o.c.k. .z.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r. .t.o.p.-.0. .l.e.f.t.-.0. .r.e.l.a.t.i.v.e. .m.a.x.-.l.g.:.z.-.o.v.e.r.-.n.a.v.i.g.a.t.i.o.n.-.m.e.n.u. .l.g.:.z.-.o.v.e.r.-.n.a.v.i.g.a.t.i.o.n.-.m.e.n.u. .h.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.h.e.i.g.h.t.]. .l.g.:.h.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.h.e.i.g.h.t.-.-.d.e.s.k.t.o.p.]. .w.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.w.i.d.t.h.]. .l.g.:.w.-.[.-.-.m.p.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r.-.-.l.o.g.o.-.w.i.d.t.h.-.-.d.e.s.k.t.o.p.], a.z.-.m.o.d.a.l. .s.r.-.o.n.l.y. .t.o.p.-.s.m. .l.e.f.t.-.s.m. .b.l.o.c.k. .f.o.c.u.s.:.n.o.t.-.s.r.-.o.n.l.y. .f.o.c.u.s.:.a.b.s.o.l.u.t.e |
| base | 1,5 | div.w.-.f.u.l.l. .g.r.i.d. .g.r.i.d.-.c.o.l.s.-.m.o.b.i.l.e.-.g.r.i.d. .l.g.:.g.r.i.d.-.c.o.l.s.-.g.r.i.d. .g.a.p.-.x.-.2.x.s. .l.g.:.g.a.p.-.x.-.x.s. .g.a.p.-.y.-.2.x.s. .l.g.:.g.a.p.-.y.-.x.s. .r.e.l.a.t.i.v.e. .z.-.b.a.s.e. .f.l.e.x. .f.l.e.x.-.c.o.l. .h.-.f.u.l.l. .m.i.n.-.s.v.h.-.[.v.a.r.(.-.-.m.p.-.h.e.r.o.-.-.i.m.a.g.e.-.h.e.i.g.h.t.).]. .l.g.:.m.i.n.-.s.v.h.-.[.v.a.r.(.-.-.m.p.-.h.e.r.o.-.-.i.m.a.g.e.-.h.e.i.g.h.t.-.-.d.e.s.k.t.o.p.).]. .i.t.e.m.s.-.e.n.d, div.w.h.i.t.e.s.p.a.c.e.-.n.o.w.r.a.p. .f.i.x.e.d. .z.-.b.a.s.e. .m.a.x.-.l.g.:.b.o.t.t.o.m.-.s.m. .m.a.x.-.l.g.:.l.e.f.t.-.1./.2. .m.a.x.-.l.g.:.-.t.r.a.n.s.l.a.t.e.-.x.-.1./.2. .l.g.:.r.e.l.a.t.i.v.e. .t.r.a.n.s.i.t.i.o.n.-.o.p.a.c.i.t.y. .e.a.s.e.-.s.m.o.o.t.h. .d.u.r.a.t.i.o.n.-.s.h.o.r.t. .o.p.a.c.i.t.y.-.1.0.0, div.z.-.n.a.v.i.g.a.t.i.o.n.-.h.e.a.d.e.r. .a.b.s.o.l.u.t.e. .t.o.p.-.0. .l.e.f.t.-.0. .r.i.g.h.t.-.0 |

## SVG Icons

**8 unique SVG icons** detected. Dominant style: **filled**.

| Size Class | Count |
|------------|-------|
| sm | 6 |
| lg | 1 |
| xl | 1 |

**Icon colors:** `currentColor`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Rubik | self-hosted | 400, 500, 600, 700 | normal |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| general | 20 | objectFit: cover, borderRadius: 0px, shape: square |
| thumbnail | 3 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 3:4 (20x), 1:1 (1x), 21:9 (1x), 2.75:1 (1x), 3.36:1 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

### Duration Tokens

| name | value | ms |
|---|---|---|
| `xs` | `150ms` | 150 |
| `sm` | `200ms` | 200 |
| `md` | `400ms` | 400 |
| `xl` | `1s` | 1000 |

### Easing Families

- **custom** (61 uses) — `cubic-bezier(0.42, 0, 0, 1)`, `cubic-bezier(0.4, 0, 0.2, 1)`
- **ease-out** (36 uses) — `cubic-bezier(0, 0, 0.2, 1)`
- **ease-in** (41 uses) — `cubic-bezier(0.4, 0, 1, 1)`

## Component Anatomy

### card — 61 instances

**Slots:** media, footer
**Sizes:** lg

### button — 21 instances

**Slots:** label
**Variants:** primary
**Sizes:** sm · lg

| variant | count | sample label |
|---|---|---|
| default | 16 | ACCEPT |
| primary | 5 | ACCEPT |

### other — 8 instances


## Brand Voice

**Tone:** friendly · **Pronoun:** third-person · **Headings:** Title Case (tight)

### Top CTA Verbs

- **accept** (2)
- **no** (2)
- **skip** (2)
- **order** (2)
- **filters** (2)
- **subscribe** (2)
- **nl** (1)
- **en** (1)

### Button Copy Patterns

- "accept" (2×)
- "no, rather not" (2×)
- "skip to main content" (2×)
- "order tickets" (2×)
- "filters" (2×)
- "subscribe" (2×)
- "nl" (1×)
- "en" (1×)

### Sample Headings

> VIEW OUR HIGHLIGHTS

## Page Intent

**Type:** `unknown` (confidence 0)
**Description:** Check out our Masterpieces collection featuring old, modern, and contemporary art. Learn more about the different works.

## Section Roles

Reading order (top→bottom): nav → hero → nav → nav → nav

| # | Role | Heading | Confidence |
|---|------|---------|------------|
| 0 | nav | — | 0.9 |
| 1 | hero | VIEW OUR HIGHLIGHTS | 0.85 |
| 2 | nav | — | 0.9 |
| 3 | nav | — | 0.9 |
| 4 | nav | — | 0.9 |

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.362 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 36px |
| backdrop-filter in use | no |
| Gradients | 3 |

## Imagery Style

**Label:** `photography` (confidence 0.479)
**Counts:** total 24, svg 1, icon 1, screenshot-like 0, photo-like 21
**Dominant aspect:** portrait
**Radius profile on images:** square

## Component Library

**Detected:** `shadcn/ui` (confidence 0.65)

Evidence:
- shadcn css tokens

Also considered: tailwindcss (0.3)

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `Rubik` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
