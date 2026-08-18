# Step 03 — Preloader, Navigation, Mobile Menu, and Cursor

## Objective

Build the persistent interaction layer first because it affects z-index, body overflow, hero appearance, and page-wide GSAP behavior.

## 1. `Preloader`

Recreate the fixed full-screen ink panel with centered NIVAS wordmark and the `Dhaka / Since 1998` metadata row.

Markup requirements:

- `position: fixed; inset: 0`.
- z-index above navbar and page.
- initial brand text translated below its overflow mask.
- stable IDs or data attributes for GSAP.

Recommended attributes:

```text
data-preloader
data-preloader-brand
```

Do not conditionally render it based on hydration state. Let GSAP hide/translate it after mount; reduced-motion mode should hide it immediately.

## 2. `Navbar`

Port the desktop navigation exactly:

- fixed to top.
- transparent/white text over hero initially.
- NIVAS display wordmark left.
- center links: Projects, Philosophy, Services, Journal.
- right-side Enquire CTA with circular arrow.
- responsive menu button on mobile.

Scrolled state should switch to cream glass + ink text after roughly 80px scroll, matching the prototype.

### Implementation choice

Make `Navbar` a Client Component only because it owns mobile menu state and menu button accessibility. Keep `app/page.tsx`, `BrandShowcase`, and surrounding static sections server-side. The scrolled visual state can be controlled either by the navbar itself or by the global GSAP controller. Prefer one owner only to avoid class conflicts. If `Navbar` approaches ~50–60 lines, move the sheet markup/state details into `MobileMenu` rather than growing one large client component.

## 3. Use shadcn `Sheet` for the mobile menu

The prototype uses a full-screen right-to-left menu. Use shadcn `Sheet` as the accessibility primitive, but restyle it heavily:

- side: right.
- width: full viewport.
- no default max-width.
- ink background / cream text.
- no visible generic Sheet title styling.
- menu links set in oversized Playfair Display (`~13vw` on mobile).
- bottom metadata row: Dhaka, Bangladesh / © 2026.

Include a visually hidden accessible title if required by the Sheet/Dialog primitive.

When a mobile anchor is clicked:

1. close the Sheet.
2. restore body scrolling through the primitive's normal cleanup.
3. allow the anchor jump/smooth scroll.

Avoid manually mutating `document.body.style.overflow` unless Sheet behavior is insufficient.

## 4. Menu button

Match the two-line source icon instead of using a generic hamburger if visual parity matters.

Requirements:

- actual `<button>`.
- accessible label changes between `Open menu` and `Close menu`.
- keyboard focus visible.
- target size around 40×40px.

## 5. `CustomCursor`

Client-only component:

- render one fixed dot.
- enable only when `(hover: hover) and (pointer: fine)` matches.
- animate position using GSAP for the same slight easing lag.
- enlarge over `[data-interactive]`, anchors, and buttons.
- cleanup all listeners on unmount.

Do not hide the native cursor until the custom cursor has mounted and the input device qualifies.

## 6. Z-index contract

Use a simple documented stack so future sections do not accidentally sit above global UI:

```text
content              0–20
mobile sheet          shadcn/dialog layer
navbar                50
noise                  100
preloader              200
custom cursor          999
```

If the noise overlay visually interferes with dialog content, keep it pointer-events-none and verify stacking visually.

## 7. Anchor navigation behavior

Use plain anchor tags for same-page targets:

```tsx
<a href="#projects">Projects</a>
```

No Next `Link` is necessary for in-page anchors.

The final section IDs must be exactly:

```text
home
projects
philosophy
services
journal
contact
```

## Done when

- [ ] Desktop nav matches initial and scrolled states.
- [ ] Mobile menu is full-screen, keyboard accessible, and closes after navigation.
- [ ] Preloader markup is ready for the Step 06 timeline.
- [ ] Custom cursor works only on fine-pointer devices.
- [ ] All same-page navigation targets exist or are stubbed.
