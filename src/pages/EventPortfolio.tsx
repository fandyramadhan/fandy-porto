import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Search } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EventNavbar from "../components/EventNavbar";
import Footer from "../components/Footer";
import EventProjectCard from "../components/EventProjectCard";
import EventProjectLightbox from "../components/EventProjectLightbox";
import EventScarcityBanner from "../components/EventScarcityBanner";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import {
  eventProjects,
  eventProjectCategories,
  type EventProject,
} from "../data/eventProjects";
import { eventWhatsappUrl } from "../data/eventData";

const INITIAL_COUNT = 6;
const LOAD_STEP = 4;

const categories = ["Semua", ...eventProjectCategories];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Jasa Pembuatan Website Event",
        item: "https://fandyramadhan.com/event",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio Website Event",
        item: "https://fandyramadhan.com/event-portfolio",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Website Event oleh Fandy Ramadhan",
    url: "https://fandyramadhan.com/event-portfolio",
    hasPart: eventProjects.map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      genre: p.category,
      description: p.description,
    })),
  },
];

const EventPortfolio = () => {
  useSmoothScroll();
  useDocumentMeta({
    title: "Portfolio Website Event · Fandy Ramadhan",
    description:
      "Kumpulan desain website event: konferensi, summit, festival, webinar, dan gathering komunitas. Semua dibuat custom, rapi, dan responsive di semua device.",
    canonicalPath: "/event-portfolio",
    lang: "id-ID",
    jsonLd,
  });

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const [activeProject, setActiveProject] = useState<EventProject | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return eventProjects.filter((project) => {
      const matchesSearch =
        q === "" ||
        project.name.toLowerCase().includes(q) ||
        project.category.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q);
      const matchesCategory =
        activeCategory === "Semua" || project.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  // Any change to the filters starts the list over from the first page.
  useEffect(() => {
    setVisible(INITIAL_COUNT);
  }, [search, activeCategory]);

  const shown = filtered.slice(0, visible);
  const hasMore = visible < filtered.length;

  // Infinite scroll: reveal LOAD_STEP more each time the sentinel appears.
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  const loadMore = useCallback(() => {
    if (timerRef.current !== null) return; // a batch is already on its way
    // The data is already in memory, so a batch would otherwise pop in with no
    // feedback at all. A short beat keeps the loading row on screen long enough
    // to read as "more is coming" instead of the page silently growing.
    timerRef.current = window.setTimeout(() => {
      setVisible((v) => Math.min(v + LOAD_STEP, filtered.length));
      timerRef.current = null;
    }, 500);
  }, [filtered.length]);

  // Cancel a queued batch when the filters change under it.
  useEffect(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, [search, activeCategory]);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!hasMore) return;

    let raf = 0;
    const check = () => {
      raf = 0;
      const el = sentinelRef.current;
      if (!el) return;
      // `top` goes negative once the row has been scrolled past, so this covers
      // a jump to the bottom (End key, scrollbar drag) as well as a gradual
      // scroll. An IntersectionObserver only reports threshold crossings and
      // would miss the jump entirely.
      if (el.getBoundingClientRect().top <= window.innerHeight + 100) {
        loadMore();
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(check);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    check(); // the row may already be in range after a batch renders

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hasMore, loadMore, visible]);

  return (
    <div className="min-h-screen bg-bg">
      <EventNavbar />
      <main>
        <section className="pt-32 md:pt-40 pb-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <Link
              to="/event"
              className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition mb-12">
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Home
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12">
              <span className="text-text-muted text-sm uppercase tracking-widest mb-4 block">
                Portfolio Website Event
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
                Semua Desain Event
              </h1>
              <p className="text-text-muted text-base mt-6 max-w-xl leading-relaxed">
                Konferensi, summit, festival, webinar, sampai gathering
                komunitas. Semuanya rapi dan responsive di semua device. Arahin
                kursor buat lihat gerakannya, klik buat lihat versi penuhnya.
              </p>
            </motion.div>

            {/* Search & filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 space-y-6">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Cari desain event..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs rounded-full px-4 py-2 border transition ${
                      activeCategory === cat
                        ? "bg-accent text-bg border-accent font-semibold"
                        : "border-border text-text-muted hover:border-accent/40 hover:text-text-primary"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Results count */}
            <p className="text-text-muted text-sm mb-8">
              {filtered.length} desain ditemukan
            </p>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {shown.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: (index % LOAD_STEP) * 0.05,
                  }}
                  className={index % 2 === 1 ? "md:mt-16" : ""}>
                  <EventProjectCard
                    project={project}
                    onOpen={setActiveProject}
                    eager={index < 2}
                  />
                </motion.div>
              ))}
            </div>

            {/* Infinite scroll sentinel */}
            {hasMore && (
              <div
                ref={sentinelRef}
                className="flex flex-col items-center justify-center gap-4 py-20">
                <span className="w-9 h-9 rounded-full border-2 border-border border-t-accent animate-spin" />
                <span className="text-text-muted text-sm">
                  Memuat desain lainnya...
                </span>
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24">
                <p className="text-text-muted text-lg">
                  Nggak ada desain yang cocok sama pencarian lu.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("Semua");
                  }}
                  className="text-accent text-sm mt-4 hover:underline">
                  Reset filter
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Ada desain yang lu suka?
              </h2>
              <p className="text-text-muted text-base mb-8 max-w-lg mx-auto leading-relaxed">
                Kirim aja nama desainnya atau screenshot-nya, nanti gua
                sesuaikan sama tema dan kebutuhan event lu.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href={eventWhatsappUrl("dari halaman portfolio")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
                  <FaWhatsapp className="w-4 h-4" />
                  Chat via WhatsApp
                </a>
                <Link
                  to="/event#harga"
                  className="border border-border text-text-primary text-sm font-semibold rounded-full px-8 py-3 hover:border-accent/40 transition">
                  Lihat Paket &amp; Harga
                </Link>
              </div>
            </motion.div>

            {/* Limited capacity — same card as on /event */}
            <EventScarcityBanner className="mt-16 max-w-4xl mx-auto" />
          </div>
        </section>
      </main>
      <Footer />

      <EventProjectLightbox
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};

export default EventPortfolio;
