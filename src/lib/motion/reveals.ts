import gsap from "gsap";

export function setupReveals() {
  gsap.utils.toArray<HTMLElement>("[data-animate='reveal-text']").forEach((el) => {
    gsap.from(el, {
      y: 55,
      opacity: 0,
      duration: 1.15,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 84%", once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-animate='reveal-label']").forEach((el) => {
    gsap.from(el, {
      y: 18,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-animate='reveal-up']").forEach((el) => {
    gsap.from(el, {
      y: 35,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });

  document.querySelectorAll<HTMLElement>("[data-counter]").forEach((counter) => {
    const target = Number(counter.dataset.value);
    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: { trigger: counter, start: "top 88%", once: true },
      onUpdate: () => {
        counter.textContent = String(Math.round(obj.value));
      },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-animate='clip-project']").forEach((wrap) => {
    gsap.from(wrap, {
      clipPath: "inset(100% 0 0 0)",
      duration: 1.25,
      ease: "power4.inOut",
      scrollTrigger: { trigger: wrap, start: "top 84%", once: true },
    });
  });

  gsap.utils.toArray<HTMLElement>("[data-animate='service-row']").forEach((row) => {
    gsap.from(row.children, {
      y: 24,
      opacity: 0,
      stagger: 0.06,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: { trigger: row, start: "top 90%", once: true },
    });
  });

  gsap.from("[data-manifesto-image]", {
    scale: 1.12,
    duration: 1.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "[data-manifesto-image]",
      start: "top 85%",
      once: true,
    },
  });

  gsap.from("[data-animate='journal-card']", {
    y: 45,
    opacity: 0,
    stagger: 0.12,
    duration: 0.9,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "[data-animate='journal-card']",
      start: "top 85%",
      once: true,
    },
  });
}