import gsap from "gsap";

export function setupMagnetic(): () => void {
  const cleanups: Array<() => void> = [];

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
    const onMove = (e: MouseEvent) => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, { x: x * 0.12, y: y * 0.12, duration: 0.3, ease: "power2.out" });
    };
    const onLeave = () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1,.4)" });
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    cleanups.push(() => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
    });
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}