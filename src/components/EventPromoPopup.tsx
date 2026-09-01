import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, Users, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { eventPromo } from "../data/eventData";
import WhatsAppCta from "./WhatsAppCta";

/**
 * Times, measured from page load, at which the offer is shown. Dismissing it
 * schedules the next one in this list that has not passed yet. Nothing is
 * persisted, so a refresh starts the schedule over.
 */
const SHOW_AT_MS = [10_000, 60_000];

type Props = {
  /** Lets the page hide its sticky bar while this is open. */
  onOpenChange?: (open: boolean) => void;
};

/** Promo offer shown ten seconds in, and once more at the sixty second mark. */
const EventPromoPopup = ({ onOpenChange }: Props) => {
  const [open, setOpen] = useState(false);
  const loadedAt = useRef(Date.now());
  const timesShown = useRef(0);
  const timerRef = useRef<number | null>(null);

  /**
   * Queue the next slot the visitor has not seen yet that is still ahead of us.
   *
   * The bookkeeping counts slots actually shown rather than slots queued, so
   * calling this twice (as StrictMode does on mount) schedules the same slot
   * instead of skipping one.
   */
  const scheduleNext = useCallback(() => {
    const elapsed = Date.now() - loadedAt.current;
    const slot = SHOW_AT_MS.findIndex(
      (at, i) => i >= timesShown.current && at > elapsed,
    );
    if (slot === -1) return;

    timerRef.current = window.setTimeout(() => {
      timesShown.current = slot + 1;
      setOpen(true);
    }, SHOW_AT_MS[slot] - elapsed);
  }, []);

  useEffect(() => {
    scheduleNext();
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, [scheduleNext]);

  const close = () => {
    setOpen(false);
    scheduleNext();
  };

  // Report state, close on Escape, and lock scrolling while open.
  useEffect(() => {
    onOpenChange?.(open);
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    const lenis = (
      window as unknown as { __lenis?: { stop: () => void; start: () => void } }
    ).__lenis;
    lenis?.stop();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Penawaran promo"
          className="fixed inset-0 z-[110] bg-bg/90 backdrop-blur-md flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative overflow-hidden w-full max-w-lg rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/[0.10] via-surface to-surface p-6 md:p-8">
            {/* Accent glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -left-16 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
            />

            <button
              type="button"
              onClick={close}
              aria-label="Tutup penawaran"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition">
              <X className="w-4 h-4" />
            </button>

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Promo Paket {eventPromo.tier}
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 leading-tight pr-10">
                {eventPromo.headline}
              </h2>

              {/* Price */}
              <div className="flex items-end gap-3 mt-5">
                <span className="text-text-muted text-base line-through">
                  {eventPromo.originalPrice}
                </span>
                <span className="text-4xl font-bold text-accent leading-none">
                  {eventPromo.price}
                </span>
              </div>

              <p className="text-text-muted text-sm leading-relaxed mt-4">
                {eventPromo.body}
              </p>

              {/* Scarcity */}
              <div className="grid sm:grid-cols-2 gap-3 mt-6">
                <div className="flex items-start gap-3 bg-surface-2/60 border border-border rounded-xl p-3.5">
                  <Users className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-primary text-xs leading-relaxed">
                    {eventPromo.quotaNote}
                  </span>
                </div>
                <div className="flex items-start gap-3 bg-surface-2/60 border border-border rounded-xl p-3.5">
                  <CalendarClock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-text-primary text-xs leading-relaxed">
                    {eventPromo.capacityNote}
                  </span>
                </div>
              </div>

              <WhatsAppCta
                source="promo-popup"
                context={eventPromo.waContext}
                value={1600000}
                onClick={close}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-6 py-3.5 hover:bg-accent-dark transition">
                <FaWhatsapp className="w-4 h-4" />
                {eventPromo.cta}
              </WhatsAppCta>

              <button
                type="button"
                onClick={close}
                className="w-full text-text-muted text-xs mt-3 hover:text-text-primary transition">
                Nanti aja
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventPromoPopup;
