"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface LenisOptions {
  duration?: number;
  smooth?: boolean;
  easing?: (t: number) => number;
  direction?: "vertical" | "horizontal";
  gestureDirection?: "vertical" | "horizontal" | "both";
  mouseMultiplier?: number;
  touchMultiplier?: number;
  wheelMultiplier?: number;
  infinite?: boolean;
}

interface Props {
  children: React.ReactNode;
  options?: LenisOptions;
}

export default function LenisScrollWrapper({ children, options = {} }: Props) {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let rafId: number;

    try {
      lenis = new Lenis({
        duration: 0.5,
        smooth: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
        direction: "vertical",
        gestureDirection: "vertical",
        mouseMultiplier: 1,
        touchMultiplier: 2,
        wheelMultiplier: 1,
        infinite: false,
        ...options,
      });

      function raf(time: number) {
        if (lenis) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }

      rafId = requestAnimationFrame(raf);
    } catch (error) {
      console.error("Failed to initialize Lenis smooth scroll:", error);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [options]);

  return <>{children}</>;
}
