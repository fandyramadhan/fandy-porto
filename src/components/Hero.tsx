import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { stats, siteConfig } from "../data/siteData";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;
    const lines = headingRef.current.querySelectorAll(".hero-line");

    // Set initial state explicitly, then animate TO visible
    gsap.set(lines, { opacity: 0, y: 80 });
    gsap.to(lines, {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 1,
      ease: "power4.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-28 md:pt-36 lg:pt-40">
        {/* Two column grid */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left — Heading */}
          <div>
            <h1
              ref={headingRef}
              className="text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-text-primary">
              I design, animate, and ship SaaS products.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-text-muted text-sm md:text-base max-w-md leading-relaxed mt-6">
              Senior Product Designer with 7+ years working across design,
              motion, and frontend code. AI-assisted workflow with Claude,
              Gemini, and Figma Make turns iteration cycles from weeks into
              days.
            </motion.p>

            <div className="mt-8">
              <motion.a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-accent text-bg text-sm md:text-base font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition">
                <FaWhatsapp className="w-4 h-4" />
                Chat on WhatsApp
                <span>↗</span>
              </motion.a>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="text-text-muted text-xs mt-3">
                Usually replies within 24 hours
              </motion.p>
            </div>
          </div>

          {/* Right — 3D holographic image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[420px]" data-speed="0.8">
              <motion.img
                src="/images/hero-3d.webp"
                alt="Abstract 3D hero visual for Fandy Ramadhan's Senior Product Designer portfolio"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-contain drop-shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 md:pb-20 mt-12 md:mt-16">
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-text-muted text-sm max-w-sm leading-relaxed">
              Working end to end across design, motion, and frontend code.
              Open for senior hires, freelance projects, and short
              collaborations.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-start gap-8 sm:gap-12 lg:gap-16">
              {stats.map((stat) => {
                const numericVal = stat.value.replace(/\D/g, "");
                const suffix = stat.value.replace(/[0-9]/g, "");
                return (
                  <div key={stat.label}>
                    <div
                      data-gsap="counter"
                      data-value={numericVal}
                      data-suffix={suffix}
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs text-text-muted mt-2 whitespace-pre-line leading-snug">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
