import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

/**
 * Smooth scrolling without GSAP.
 *
 * `useSmoothScroll` wires Lenis into GSAP's ticker and ScrollTrigger, which is
 * needed on the homepage because that page drives `data-gsap` animations. The
 * event pages don't, so importing GSAP there costs ~110 KB for a ticker they
 * never use. This hook is the same behaviour on a plain rAF loop.
 *
 * Exposes the instance on `window.__lenis`, which ScrollToTop, the navbar
 * anchors, and the modals use to scroll and to lock scrolling.
 */
export function useLenis() {
  useEffect(() => {
    // Native scrolling is smoother and cheaper on touch devices.
    const isCoarsePointer =
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Same-page anchors scroll through Lenis so they ease rather than jump.
    const onAnchorClick = (e: Event) => {
      const anchor = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      const href = anchor?.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -80 });
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);
}
