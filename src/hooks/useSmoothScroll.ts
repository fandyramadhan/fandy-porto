import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export function useSmoothScroll() {
  useEffect(() => {
    // Skip Lenis on touch/coarse-pointer devices (mobile/tablet).
    // Native scrolling is smoother and lighter on mobile CPUs.
    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    // Lenis smooth scroll + GSAP ScrollTrigger integration
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expose lenis instance so ScrollToTop can reset it
    (window as any).__lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Handle anchor link clicks for smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
        if (href && href !== "#") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            lenis.scrollTo(target as HTMLElement, { offset: -80 });
          }
        }
      });
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      delete (window as any).__lenis;
    };
  }, []);
}
