# Step 06 — GSAP Motion and Interaction Parity

## Objective

Recreate the source's motion language without turning every section into a Client Component.

## 1. Centralize GSAP setup

Create:

```text
components/motion/brand-motion-controller.tsx
```

This should be a small `"use client"` component rendered once near the page root. Its Server Component parent does **not** become client-side just because it renders this child.

Keep the controller component itself around the 50–60 line ceiling. Put animation groups into focused helper functions such as `setupIntroTimeline`, `setupScrollReveals`, `setupCounters`, `setupParallax`, and `setupMagneticElements`; each helper should also stay around that size where practical.

Inside `useLayoutEffect`:

1. import/register `ScrollTrigger`.
2. create a `gsap.context()` scoped to the page root when practical.
3. set up all page-wide animations using data attributes.
4. return cleanup that calls `context.revert()` and kills any manually created triggers/listeners.

This keeps static section components server-renderable.

## 2. Respect reduced motion first

Check:

```ts
window.matchMedia("(prefers-reduced-motion: reduce)").matches
```

If true:

- hide the preloader immediately.
- set hero line/kicker/bottom elements to final visible states.
- do not create scrubbed parallax.
- do not animate counters from zero if that causes delayed comprehension; render final values directly.

The source explicitly contains a reduced-motion branch, so parity includes this behavior.

## 3. Intro timeline

Match source sequencing approximately rather than obsessing over millisecond-perfect timings:

1. preloader brand rises into view.
2. brand exits upward.
3. preloader panel slides upward off-screen.
4. hero image scales from ~1.08 to 1.
5. hero headline lines rise from their masks with stagger.
6. kicker fades in.
7. bottom copy/CTA fades in.

Keep the same overall cinematic tempo and easing family (`power3`, `power4`).

## 4. Navbar transformation

At roughly 80px scroll:

- apply glass cream background.
- switch text from white to ink.

When the mobile menu is open, the navbar/menu controls must remain legible against the ink panel. Avoid two independent animation systems fighting over these classes.

## 5. Scroll animations

Port the source categories:

### Hero parallax

`data-hero-image` moves vertically about 12% while the hero scrolls out.

### Generic heading reveal

`[data-animate="reveal-text"]`:

- from `y: 55`.
- opacity 0 → 1.
- trigger around top 84% viewport.
- once.

### Eyebrow reveal

`[data-animate="reveal-label"]`:

- from `y: 18`.
- shorter/faster reveal.

### Supporting copy reveal

`[data-animate="reveal-up"]`:

- from `y: 35`.
- opacity reveal.

### Counters

For every `[data-counter-value]`:

- animate object value from 0 to target.
- update text with `Math.round`.
- duration ~1.8s.
- once.

Keep suffix (`+`, `%`) outside the animated numeric span.

### Feature image parallax

`data-story-image` moves about 14% through the viewport with scrub.

### Project clip reveal

Each `[data-clip-project]` animates from:

```text
clip-path: inset(100% 0 0 0)
```

to fully revealed.

### Service rows

Animate each row's immediate children upward with a small stagger.

### Manifesto image

Animate scale from ~1.12 to 1 once it enters view.

### Journal cards

Animate the three cards upward/fade with stagger as a group.

## 6. Magnetic elements

Wrap only the source's magnetic CTAs:

- hero `Explore residences`.
- contact `Send enquiry`.

Option A: reusable `Magnetic` client wrapper.
Option B: initialize `[data-magnetic]` elements inside `BrandMotionController`.

B is lighter for a page this small.

Behavior:

- on pointer move: translate toward pointer by ~12% of local offset.
- on leave: return to 0 with a soft elastic ease.
- skip on coarse/no-hover pointers.

## 7. Interaction cleanup

Every event listener and ScrollTrigger must be removed on unmount/hot reload. This matters in Next.js development because effects can be replayed.

Use `gsap.context()` and explicit listener cleanup instead of accumulating handlers.

## 8. Avoid hydration-dependent layout shifts

Elements that animate in should have their initial visual state represented predictably:

- hero line masks can begin translated via CSS class.
- kicker/bottom can begin opacity 0 via CSS.
- preloader is present in server markup.

Then the client animation brings them to final state. For reduced motion, the controller immediately sets final values.

## Done when

- [ ] Intro timeline visually matches the prototype.
- [ ] All scroll reveals happen once at approximately the same points.
- [ ] Counters animate to the exact source values.
- [ ] Parallax is smooth and disabled for reduced motion.
- [ ] Magnetic buttons work only on appropriate pointers.
- [ ] Dev hot reload does not duplicate triggers/listeners.
