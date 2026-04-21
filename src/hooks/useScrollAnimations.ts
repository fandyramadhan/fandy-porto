import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimations() {
  useEffect(() => {
    // Small delay to ensure DOM is fully rendered and Lenis is ready
    const timeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        // ── Fade up ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='fade-up']").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Slide from left ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='slide-left']").forEach((el) => {
          gsap.fromTo(
            el,
            { x: -80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Slide from right ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='slide-right']").forEach((el) => {
          gsap.fromTo(
            el,
            { x: 80, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Scale reveal ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='scale']").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.9, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Text reveal via clip-path ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='text-reveal']").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0 0 100% 0)", y: 30 },
            {
              clipPath: "inset(0 0 0% 0)",
              y: 0,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // ── Counter animation ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='counter']").forEach((el) => {
          const target = parseInt(el.getAttribute("data-value") || "0", 10);
          const suffix = el.getAttribute("data-suffix") || "+";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.floor(obj.val) + suffix;
            },
          });
        });

        // ── Parallax ──
        gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-speed") || "0.5");
          gsap.to(el, {
            y: () => (1 - speed) * 200,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });

        // ── Line grow ──
        gsap.utils.toArray<HTMLElement>("[data-gsap='line-grow']").forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.2,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      });

      // Store cleanup
      return () => ctx.revert();
    }, 300);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
