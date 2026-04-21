import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/siteData";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHash = (hashId: string) => {
    const el = document.getElementById(hashId);
    if (!el) return;
    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Returns true if click was handled in place (caller should preventDefault
  // and avoid triggering navigation). Returns false if the caller should let
  // the normal Link/anchor navigation happen.
  const handleNavClick = (href: string): boolean => {
    setMobileOpen(false);

    // "/" or "#" -> scroll to top on home
    if (href === "/" || href === "#") {
      if (isHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return true;
      }
      return false;
    }

    // Hash-only like "#testimonials"
    if (href.startsWith("#")) {
      if (isHome) {
        scrollToHash(href.slice(1));
        return true;
      }
      return false;
    }

    // Path with hash like "/#testimonials"
    const hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      const targetPath = href.slice(0, hashIndex) || "/";
      const hashId = href.slice(hashIndex + 1);
      if (location.pathname === targetPath) {
        scrollToHash(hashId);
        return true;
      }
      return false;
    }

    return false;
  };

  const NavLinkItem = ({
    href,
    label,
    className,
    onAfterClick,
  }: {
    href: string;
    label: string;
    className: string;
    onAfterClick?: () => void;
  }) => {
    // Determine if this href targets current page (should use <a> with
    // preventDefault for smooth scroll, not <Link>).
    const targetsCurrentPage =
      href === "/" ||
      href === "#" ||
      href.startsWith("#") ||
      (href.includes("#") &&
        (href.slice(0, href.indexOf("#")) || "/") === location.pathname);

    if (targetsCurrentPage && isHome) {
      return (
        <a
          href={href}
          onClick={(e) => {
            const handled = handleNavClick(href);
            if (handled) e.preventDefault();
            onAfterClick?.();
          }}
          className={className}>
          {label}
        </a>
      );
    }

    return (
      <Link
        to={href === "#" ? "/" : href}
        onClick={() => {
          handleNavClick(href);
          onAfterClick?.();
        }}
        className={className}>
        {label}
      </Link>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#222222]"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo-fr.webp"
              alt="Fandy Ramadhan"
              className="h-8"
            />
            <span className="text-lg font-bold tracking-tight text-[#f5f5f5]">
              Fandy Ramadhan
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLinkItem
                key={item.label}
                href={item.href}
                label={item.label}
                className="text-sm text-[#777777] hover:text-[#f5f5f5] transition"
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <NavLinkItem
            href="/#contact"
            label="Let's Talk ↗"
            className="hidden lg:flex items-center gap-2 text-[#CCFF00] text-sm font-medium hover:gap-3 transition-all"
          />

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[#777777] hover:text-[#f5f5f5] transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-start justify-center px-12 gap-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}>
                <NavLinkItem
                  href={item.href}
                  label={item.label}
                  className="text-3xl font-bold text-[#f5f5f5] hover:text-[#CCFF00] transition"
                  onAfterClick={() => setMobileOpen(false)}
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ delay: navItems.length * 0.08, duration: 0.4 }}>
              <NavLinkItem
                href="/#contact"
                label="Let's Talk ↗"
                className="flex items-center gap-2 text-[#CCFF00] text-xl font-medium mt-4 hover:gap-4 transition-all"
                onAfterClick={() => setMobileOpen(false)}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
