import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { eventPromo } from "../data/eventData";
import WhatsAppCta from "./WhatsAppCta";

/** Roughly one or two scroll gestures, so it shows up early. */
const SHOW_AFTER_PX = 180;

type Props = {
  /** Kept out of the way while a modal is up. */
  hidden?: boolean;
};

/** Sticky promo bar pinned to the bottom on phones. */
const EventMobileCTA = ({ hidden = false }: Props) => {
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {scrolledPast && !hidden && (
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: 0 }}
          exit={{ y: "110%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="lg:hidden fixed bottom-0 left-0 right-0 z-40 px-3 pb-3 pt-2">
          <div className="relative overflow-hidden rounded-2xl border border-accent/40 bg-surface/95 backdrop-blur-xl shadow-[0_-8px_32px_rgba(0,0,0,0.5)] px-4 py-3 flex items-center gap-3">
            {/* Accent glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -left-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <span className="text-text-muted text-xs line-through shrink-0">
                  {eventPromo.originalPrice}
                </span>
                <span className="text-accent text-lg font-bold leading-none">
                  {eventPromo.price}
                </span>
              </div>
              <p className="text-text-muted text-[11px] mt-1 leading-snug">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent animate-pulse mr-1.5 align-middle" />
                {eventPromo.quotaNote}
              </p>
            </div>

            <WhatsAppCta
              source="mobile-sticky-bar"
              context={eventPromo.waContext}
              value={1600000}
              className="relative shrink-0 inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-5 py-2.5 hover:bg-accent-dark transition">
              <FaWhatsapp className="w-4 h-4" />
              Chat
            </WhatsAppCta>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventMobileCTA;
