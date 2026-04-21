import { useState, useCallback } from "react";
import { awards } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, X, Trophy } from "lucide-react";

const Awards = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSwiperUpdate = useCallback((swiper: SwiperType) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % awards.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  return (
    <>
      <section
        id="awards"
        className="py-32 px-6 lg:px-12 border-t border-border overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <span className="text-text-muted text-sm uppercase tracking-widest">
                Recognition
              </span>
              <h2
                data-gsap="text-reveal"
                className="text-3xl md:text-4xl font-bold mt-4"
              >
                Awards & Achievements
              </h2>
            </div>
            {/* Custom nav buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button
                disabled={isBeginning}
                className={`awards-prev w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  isBeginning
                    ? "border-border/50 text-text-muted/40 cursor-not-allowed"
                    : "border-accent text-accent hover:bg-accent hover:text-bg cursor-pointer"
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                disabled={isEnd}
                className={`awards-next w-10 h-10 rounded-full border flex items-center justify-center transition ${
                  isEnd
                    ? "border-border/50 text-text-muted/40 cursor-not-allowed"
                    : "border-accent text-accent hover:bg-accent hover:text-bg cursor-pointer"
                }`}
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".awards-prev",
              nextEl: ".awards-next",
            }}
            onSwiper={handleSwiperUpdate}
            onSlideChange={handleSwiperUpdate}
            onReachBeginning={handleSwiperUpdate}
            onReachEnd={handleSwiperUpdate}
            onFromEdge={handleSwiperUpdate}
            onResize={handleSwiperUpdate}
            slidesPerView={1.2}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.5, spaceBetween: 24 },
            }}
            className="!overflow-visible"
          >
            {awards.map((award, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Certificate Image */}
                  <div className="aspect-[4/3] rounded-xl bg-surface border border-border overflow-hidden relative">
                    <img
                      src={award.image}
                      alt={`${award.title} certificate from ${award.event}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        target.parentElement!.classList.add(
                          "flex",
                          "items-center",
                          "justify-center"
                        );
                        const icon = document.createElement("div");
                        icon.innerHTML = `<div class="flex flex-col items-center gap-2 text-text-muted"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg><span class="text-xs">Certificate</span></div>`;
                        target.parentElement!.appendChild(icon);
                      }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Certificate
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-accent" />
                      <h4 className="text-text-primary font-semibold text-sm">
                        {award.title}
                      </h4>
                    </div>
                    <p className="text-text-muted text-xs mt-1">
                      {award.event} — {award.location}
                    </p>
                    <p className="text-text-muted/60 text-xs mt-0.5">
                      {award.year}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image + Info */}
            <div
              className="max-w-4xl w-full mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="bg-surface rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-[4/3] relative">
                    <img
                      src={awards[lightboxIndex].image}
                      alt={`${awards[lightboxIndex].title} certificate from ${awards[lightboxIndex].event}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain bg-white"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "";
                        target.alt = "Certificate image not found";
                        target.className =
                          "w-full h-full flex items-center justify-center";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="w-4 h-4 text-accent" />
                      <h3 className="text-text-primary font-bold text-lg">
                        {awards[lightboxIndex].title}
                      </h3>
                    </div>
                    <p className="text-text-muted text-sm">
                      {awards[lightboxIndex].event} —{" "}
                      {awards[lightboxIndex].location}
                    </p>
                    <p className="text-text-muted/60 text-xs mt-1">
                      {awards[lightboxIndex].year}
                    </p>
                  </div>
                </div>

                {/* Counter */}
                <p className="text-center text-white/50 text-sm mt-4">
                  {lightboxIndex + 1} / {awards.length}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Awards;
