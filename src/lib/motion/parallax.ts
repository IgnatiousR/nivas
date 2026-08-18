import gsap from "gsap";

export function setupParallax() {
  gsap.to("[data-hero-image]", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-hero]",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  gsap.to("[data-story-image]", {
    yPercent: 14,
    ease: "none",
    scrollTrigger: {
      trigger: "[data-story-image]",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}