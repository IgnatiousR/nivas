# Step 02 — Design System, Fonts, and Global CSS

## Objective

Move the prototype's embedded Tailwind/CSS theme into a proper Next.js + Tailwind v4 design system while retaining the exact brand character.

## 1. Fonts

The source uses:

- DM Sans — main sans/body.
- Playfair Display — display/editorial headlines.
- Manrope — clean supporting headings such as service names.

Use `next/font/google` in `app/layout.tsx` so fonts are optimized/self-hosted by Next.js rather than loaded through `<link>` tags.

Expose the generated font variables on `<body>` and map them into Tailwind theme variables in `globals.css`.

Suggested semantic utilities:

```text
font-sans     → DM Sans
font-display  → Playfair Display
font-clean    → Manrope
```

## 2. Tailwind v4 theme tokens

The prototype defines these brand colors:

```css
--color-ink: #12130f;
--color-cream: #f2efe8;
--color-warm: #ded8cb;
--color-olive: #67705b;
--color-sage: #aab19e;
--color-gold: #b99b65;
```

Move them into top-level `@theme` declarations in `app/globals.css` so utilities such as `bg-ink`, `text-cream`, and `text-olive` remain available.

Recommended shape:

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-dm-sans);
  --font-display: var(--font-playfair);
  --font-clean: var(--font-manrope);
}

@theme {
  --color-ink: #12130f;
  --color-cream: #f2efe8;
  --color-warm: #ded8cb;
  --color-olive: #67705b;
  --color-sage: #aab19e;
  --color-gold: #b99b65;
}
```

Keep shadcn's semantic CSS variables too. Do not replace the NIVAS palette with shadcn defaults.

## 3. Global base styles

Port these source behaviors into `globals.css`:

- `box-sizing: border-box`.
- cream page background and ink foreground.
- thin custom scrollbar.
- dark selection / cream selected text.
- `overflow-x: hidden` on body.
- smooth scroll unless reduced motion is preferred.

Use Tailwind utilities in JSX for section-level styles; reserve global CSS for behavior/tokens that are truly global.

## 4. Port special CSS effects

Keep the following as named classes in `globals.css` because they are awkward or clearer than long arbitrary Tailwind expressions:

### `.noise`

Fixed viewport grain texture from the inline SVG turbulence background. Preserve:

- fixed inset coverage.
- pointer-events none.
- high z-index.
- low opacity.
- multiply blend mode.

### `.nav-glass`

Scrolled navbar state:

- `rgba(242, 239, 232, .86)` background.
- subtle ink border.
- 18px backdrop blur.

### `.grid-lines`

The philosophy section's faint 4-column vertical grid + horizontal line texture.

### `.marquee-track`

Keep the 28-second linear infinite marquee animation. Duplicate marquee contents twice exactly as the source does so the loop is seamless.

### `.custom-cursor`

Keep fixed, circular, blend-mode difference cursor behavior for fine pointers only.

### Project hover rules

Preserve the slow project image scale and diagonal arrow translation.

## 5. Shared layout utility

The source repeats the same max-width and horizontal padding across almost every section:

```text
max-w-[1600px]
px-5 md:px-8 lg:px-12
mx-auto
```

Create a lightweight `Container` component or a reusable utility constant/component. Do not introduce a heavy abstraction.

Example:

```tsx
export function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1600px] px-5 md:px-8 lg:px-12", className)}
      {...props}
    />
  )
}
```

## 6. Shared visual micro-patterns

Optionally extract only patterns that repeat several times:

- Eyebrow label with horizontal rule.
- Circular arrow button.
- Section container.
- `ArrowUpRight` icon treatment.

Do not abstract unique editorial layouts into generic cards.

## 7. Reduced motion foundation

Keep the source's `prefers-reduced-motion` behavior in global CSS:

- disable smooth scrolling.
- collapse CSS animation/transition durations.

GSAP also needs a runtime reduced-motion branch in Step 06.

## Done when

- [ ] No Google Fonts `<link>` tags are required.
- [ ] Brand colors are available as Tailwind utilities.
- [ ] shadcn variables coexist with the brand tokens.
- [ ] Noise, grid, marquee, cursor, nav glass, and project hover behaviors are represented in `globals.css`.
- [ ] The page background, typography, selection, and scrollbar visually match the prototype before sections are fully ported.
