import gsap from "gsap";

export function setupHero(reduceMotion: boolean): () => void {
  const preloader = document.querySelector<HTMLElement>("[data-preloader]");
  if (!preloader) return () => {};

  const run = () => {
    if (reduceMotion) {
      preloader.style.display = "none";
      gsap.set("[data-hero-line]", { y: 0 });
      gsap.set("[data-hero-kicker], [data-hero-bottom]", { opacity: 1 });
      return;
    }

    const intro = gsap.timeline();
    intro
      .to("[data-preloader-brand]", { y: 0, duration: 0.9, ease: "power4.out" })
      .to(
        "[data-preloader-brand]",
        { y: "-110%", duration: 0.8, delay: 0.35, ease: "power4.in" },
      )
      .to(preloader, { yPercent: -100, duration: 1, ease: "power4.inOut" }, "-=.28")
      .to("[data-hero-image]", { scale: 1, duration: 1.8, ease: "power3.out" }, "-=.75")
      .to(
        "[data-hero-line]",
        { y: 0, stagger: 0.1, duration: 1.05, ease: "power4.out" },
        "-=1.25",
      )
      .to("[data-hero-kicker]", { opacity: 1, y: 0, duration: 0.7 }, "-=.85")
      .to(
        "[data-hero-bottom]",
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8 },
        "-=.55",
      );
  };

  if (document.readyState === "complete") {
    run();
  } else {
    window.addEventListener("load", run, { once: true });
  }

  return () => window.removeEventListener("load", run);
}