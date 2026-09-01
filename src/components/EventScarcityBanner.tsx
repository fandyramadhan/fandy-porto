import { motion } from "framer-motion";
import { CalendarClock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppCta from "./WhatsAppCta";

type Props = {
  /** Extra classes for spacing, since each page places this differently. */
  className?: string;
};

/** Limited-capacity card, shared by /event and /event-portfolio. */
const EventScarcityBanner = ({ className = "" }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className={`relative overflow-hidden rounded-2xl border border-accent/40 bg-gradient-to-br from-accent/[0.10] via-surface to-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left ${className}`}>
    {/* Accent glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-20 -left-12 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
    />

    <div className="relative flex flex-col sm:flex-row items-start gap-4">
      <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center shrink-0">
        <CalendarClock className="w-5 h-5 text-accent" />
      </div>
      <div>
        <span className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-widest font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Kapasitas Terbatas
        </span>
        <p className="text-text-primary text-sm md:text-base mt-2 max-w-lg leading-relaxed">
          Gua cuma nerima maksimal{" "}
          <strong className="text-accent font-semibold">
            3 project per minggu
          </strong>
          , biar tiap event dapet perhatian penuh, bukan dikerjain buru-buru.
        </p>
      </div>
    </div>

    <WhatsAppCta
      source="scarcity-banner"
      context="cek slot minggu ini"
      className="relative inline-flex items-center justify-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition shrink-0 w-full md:w-auto">
      <FaWhatsapp className="w-4 h-4" />
      Cek Slot Minggu Ini
    </WhatsAppCta>
  </motion.div>
);

export default EventScarcityBanner;
