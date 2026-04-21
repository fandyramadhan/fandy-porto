import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Disable browser's automatic scroll restoration
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // When pathname changes: always reset to top first (instant), unless navigating
  // to a hash, in which case the hash effect below takes over.
  useLayoutEffect(() => {
    if (hash) return;

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  // When hash changes or we land on a page with a hash, smooth-scroll to the
  // element after the DOM settles.
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    // Small delay so lazy-loaded routes and animations finish mounting.
    const tick = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80 });
      } else {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
    return () => clearTimeout(tick);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
