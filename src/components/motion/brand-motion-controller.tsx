"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setupHero } from "@/lib/motion/hero";
import { setupParallax } from "@/lib/motion/parallax";
import { setupReveals } from "@/lib/motion/reveals";
import { setupMagnetic } from "@/lib/motion/magnetic";

gsap.registerPlugin(ScrollTrigger);

export function BrandMotionController() {
  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let cleanupMagnetic: (() => void) | undefined;

    const ctx = gsap.context(() => {
      setupHero(reduceMotion);
      if (!reduceMotion) {
        setupParallax();
        setupReveals();
      }
      cleanupMagnetic = setupMagnetic();
    });

    return () => {
      cleanupMagnetic?.();
      ctx.revert();
    };
  }, []);

  return null;
}