import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppCta from "./WhatsAppCta";

// Nav for the event pages, mirroring the original event brief
// (Jenis Event · Portofolio · Proses · Harga · FAQ). Items carry either a
// section anchor or `to` for a route of its own.
type EventNavItem = { label: string; href?: string; to?: string };

const eventNavItems: EventNavItem[] = [
  { label: "Jenis Event", href: "#jenis-event" },
  { label: "Portofolio", to: "/event-portfolio" },
  { label: "Proses", href: "#proses" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

const EventNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // The same nav serves /event-portfolio, where the sections live one page over.
  const onEventPage = useLocation().pathname === "/event";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHash = (href: string) => {
    const el = document.getElementById(href.slice(1));
    if (!el) return;
    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (target: HTMLElement, opts?: { offset?: number }) => void;
        };
      }
    ).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -80 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClick = (e: React.MouseEvent, href: string) => {
    setMobileOpen(false);
    if (!onEventPage) return; // let the <Link> navigate to /event#section
    e.preventDefault();
    scrollToHash(href);
  };

  const NavItem = ({
    item,
    className,
  }: {
    item: EventNavItem;
    className: string;
  }) => {
    // Items with their own route always navigate.
    if (item.to) {
      return (
        <Link
          to={item.to}
          onClick={() => setMobileOpen(false)}
          className={className}>
          {item.label}
        </Link>
      );
    }

    const href = item.href!;
    return onEventPage ? (
      <a href={href} onClick={(e) => handleClick(e, href)} className={className}>
        {item.label}
      </a>
    ) : (
      <Link
        to={`/event${href}`}
        onClick={() => setMobileOpen(false)}
        className={className}>
        {item.label}
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
            ? "bg-bg/90 backdrop-blur-xl border-b border-border"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* Logo — back to the event landing page */}
          <Link
            to="/event"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-2.5">
            {/* Decorative: the wordmark next to it already names the site. */}
            <img
              src="/images/logo-fr.svg"
              alt=""
              width="32"
              height="32"
              className="h-8 w-auto"
            />
            <span className="text-lg font-bold tracking-tight text-text-primary">
              Fandy Ramadhan
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {eventNavItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                className="text-sm text-text-muted hover:text-text-primary transition"
              />
            ))}
          </div>

          {/* Desktop CTA */}
          <WhatsAppCta
            source="navbar"
            className="hidden lg:inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-accent-dark transition">
            <FaWhatsapp className="w-4 h-4" />
            Chat via WhatsApp
          </WhatsAppCta>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-text-muted hover:text-text-primary transition"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/98 backdrop-blur-xl flex flex-col items-start justify-center px-12 gap-6">
            {eventNavItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}>
                <NavItem
                  item={item}
                  className="text-3xl font-bold text-text-primary hover:text-accent transition"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ delay: eventNavItems.length * 0.08, duration: 0.4 }}>
              <WhatsAppCta
                source="navbar-mobile"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 bg-accent text-bg text-base font-semibold rounded-full px-6 py-3 mt-4 hover:bg-accent-dark transition">
                <FaWhatsapp className="w-4 h-4" />
                Chat via WhatsApp
              </WhatsAppCta>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EventNavbar;
