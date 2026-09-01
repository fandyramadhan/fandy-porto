import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Check,
  GraduationCap,
  Landmark,
  Music,
  Presentation,
  Rocket,
  Trophy,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EventNavbar from "../components/EventNavbar";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLenis } from "../hooks/useLenis";
import EventProjectCard from "../components/EventProjectCard";
import EventScarcityBanner from "../components/EventScarcityBanner";
import EventTestimonials from "../components/EventTestimonials";
import EventProjectLightbox from "../components/EventProjectLightbox";
import EventPromoPopup from "../components/EventPromoPopup";
import EventMobileCTA from "../components/EventMobileCTA";
import WhatsAppCta from "../components/WhatsAppCta";
import type { CtaSource } from "../lib/tracking";
import {
  featuredEventProjects,
  type EventProject,
} from "../data/eventProjects";
import seoRoutes from "../data/seoRoutes.json";
import {
  eventAbout,
  eventCtas,
  eventFaqs,
  eventHero,
  eventPricing,
  eventProblems,
  eventProcess,
  eventTypes,
} from "../data/eventData";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const inView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

// Icon per event type, index-matched to eventTypes in eventData.
const eventTypeIcons = [
  Presentation,
  Landmark,
  Trophy,
  GraduationCap,
  Rocket,
  Music,
];

const SITE = "https://fandyramadhan.com";
const PAGE = `${SITE}/event`;

const prices = eventPricing.map((tier) => tier.priceValue);

const provider = {
  "@type": "Person",
  name: "Fandy Ramadhan",
  jobTitle: "Senior Product Designer",
  url: SITE,
  image: `${SITE}/images/fandy-photo.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Depok",
    addressRegion: "Jawa Barat",
    addressCountry: "ID",
  },
  sameAs: [
    "https://instagram.com/fandyyramadhan",
    "https://linkedin.com/in/fandyramadhan",
    "https://dribbble.com/fandyramadhan",
    "https://behance.net/fandyramadhan2",
  ],
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Jasa Pembuatan Website Event",
        item: PAGE,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${PAGE}#service`,
    name: "Jasa Pembuatan Website Event",
    alternateName: [
      "Jasa Bikin Website Event",
      "Jasa Landing Page Acara",
      "Jasa Website Pendaftaran Event",
      "Jasa Pembuatan Website Event Indonesia",
      "Jasa Pembuatan Website Event Jakarta",
      "Jasa Pembuatan Website Event Jabodetabek",
      "Jasa Pembuatan Website Event Bandung",
      "Jasa Pembuatan Website Event Surabaya",
      "Jasa Pembuatan Website Event Jogja",
      "Jasa Pembuatan Website Event Bali",
      "Jasa Pembuatan Website Event Depok",
    ],
    serviceType: "Pembuatan website event dan landing page acara",
    description: eventAbout.paragraphs[0],
    url: PAGE,
    image: `${SITE}/images/og-event.jpg`,
    inLanguage: "id-ID",
    provider,
    // Everything is delivered remotely, so the whole country is served; the
    // named places are the ones people actually type into a search.
    areaServed: [
      { "@type": "Country", name: "Indonesia" },
      { "@type": "AdministrativeArea", name: "Jabodetabek" },
      { "@type": "City", name: "Jakarta" },
      { "@type": "City", name: "Depok" },
      { "@type": "City", name: "Bogor" },
      { "@type": "City", name: "Tangerang" },
      { "@type": "City", name: "Bekasi" },
      { "@type": "City", name: "Bandung" },
      { "@type": "City", name: "Surabaya" },
      { "@type": "City", name: "Yogyakarta" },
      { "@type": "AdministrativeArea", name: "Bali" },
    ],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: PAGE,
      availableLanguage: [
        { "@type": "Language", name: "Indonesian", alternateName: "id" },
        { "@type": "Language", name: "English", alternateName: "en" },
      ],
    },
    // The kinds of events these pages get built for. Gives search engines
    // concrete terms to match long-tail queries against.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Jenis event yang dilayani",
      itemListElement: eventAbout.eventList.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item },
      })),
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: String(Math.min(...prices)),
      highPrice: String(Math.max(...prices)),
      offerCount: String(eventPricing.length),
      availability: "https://schema.org/InStock",
      offers: eventPricing.map((tier) => ({
        "@type": "Offer",
        name: `Paket ${tier.tier}`,
        description: tier.features.join(". "),
        price: String(tier.priceValue),
        priceCurrency: "IDR",
        availability: "https://schema.org/InStock",
        url: `${PAGE}#harga`,
        itemOffered: {
          "@type": "Service",
          name: `Website event paket ${tier.tier}`,
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": PAGE,
    url: PAGE,
    name: "Jasa Pembuatan Website Event",
    inLanguage: "id-ID",
    description: eventAbout.paragraphs[0],
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE}/images/og-event.jpg`,
      width: 1200,
      height: 630,
    },
    about: { "@id": `${PAGE}#service` },
    isPartOf: {
      "@type": "WebSite",
      url: `${SITE}/`,
      name: "Fandy Ramadhan",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cara pesan website event",
    description:
      "Empat langkah dari brief sampai halaman event lu online dan siap dibagikan.",
    totalTime: "P3D",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "IDR",
      value: String(Math.min(...prices)),
    },
    step: eventProcess.map((item, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: item.title,
      text: item.body,
      url: `${PAGE}#proses`,
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: eventFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

const Event = () => {
  useLenis();
  useDocumentMeta({
    ...seoRoutes.routes["/event"],
    canonicalPath: "/event",
    jsonLd,
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeProject, setActiveProject] = useState<EventProject | null>(null);
  const [promoOpen, setPromoOpen] = useState(false);

  const heroHeadline = eventHero.headline.split(eventHero.headlineAccent);

  return (
    <div className="min-h-screen bg-bg">
      <EventNavbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 lg:px-12 pt-32 md:pt-36 pb-16">
          {/* Background illustration */}
          <div aria-hidden="true" className="absolute inset-0">
            <img
              src="/images/hero-illustration.webp"
              alt=""
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-left md:object-center"
            />
            {/* Scrims. On phones the copy spans the full width, so the whole
                frame needs an even wash; from md up only the side the copy
                sits on is darkened, which keeps the illustration readable. */}
            <div className="absolute inset-0 bg-bg/55 md:hidden" />
            <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-bg via-bg/80 via-[52%] to-transparent" />
            {/* Blend under the navbar and into the next section. */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/45" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-text-muted text-sm uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                {eventHero.eyebrow}
              </span>
              <h1 className="text-[clamp(2.2rem,5.5vw,4.25rem)] font-bold leading-[1.1] tracking-tight text-text-primary max-w-4xl">
                {heroHeadline[0]}
                <span className="text-accent">
                  {eventHero.headlineAccent}
                </span>
                {heroHeadline[1]}
              </h1>
              <p className="text-text-muted text-sm md:text-base mt-6 max-w-xl leading-relaxed">
                {eventHero.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <WhatsAppCta
                  source="hero"
                  className="inline-flex items-center gap-2 bg-accent text-bg text-sm md:text-base font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition">
                  <FaWhatsapp className="w-4 h-4" />
                  {eventCtas.cold}
                  <span>↗</span>
                </WhatsAppCta>
                <Link
                  to="/event-portfolio"
                  className="inline-flex items-center gap-2 border border-border text-text-primary text-sm md:text-base font-semibold rounded-full px-6 py-3 hover:border-accent/40 hover:text-accent transition">
                  Lihat Contoh Kerjaan
                </Link>
              </div>
              <p className="text-text-muted text-xs mt-3">
                Biasanya dibalas dalam 24 jam
              </p>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-12 md:mt-16">
              <div className="border-t border-border pt-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                  <p className="text-text-muted text-sm max-w-sm leading-relaxed">
                    {eventHero.statsNote}
                  </p>
                  <div className="grid grid-cols-2 gap-8 sm:flex sm:items-start sm:gap-10 lg:gap-16">
                    {eventHero.stats.map((stat) => (
                      <div key={stat.value}>
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary">
                          {stat.value}
                        </div>
                        <div className="text-[11px] sm:text-xs text-text-muted mt-2 whitespace-pre-line leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Event types ── */}
        <section
          id="jenis-event"
          className="py-20 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...inView} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Cocok Untuk Acara Apa Aja
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-10 max-w-3xl leading-tight">
                Selama event lu butuh orang daftar atau tau infonya, ini cocok.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eventTypes.map((type, i) => {
                const Icon = eventTypeIcons[i];
                return (
                  <motion.div
                    key={type.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/40 transition group">
                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-5 group-hover:border-accent/40 transition">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-text-primary font-bold text-base mb-2">
                      {type.name}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              {...inView}
              transition={{ duration: 0.5 }}
              className="text-text-muted text-sm mt-8">
              Nggak nemu jenis event lu di atas?{" "}
              <WhatsAppCta
                source="event-types"
                context="jenis event lain"
                className="text-accent font-semibold hover:underline">
                Chat aja
              </WhatsAppCta>
              , kemungkinan besar tetap bisa dibantu.
            </motion.p>
          </div>
        </section>

        {/* ── Problem — split layout with a numbered list instead of cards ── */}
        <section className="py-20 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-20">
            {/* Heading column */}
            <motion.div {...inView} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Kenapa Ini Penting
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mt-3 leading-tight">
                Event tanpa website yang bagus, kehilangan kesan profesional
                dari awal.
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mt-5 max-w-sm">
                Tiga hal ini yang paling sering kejadian. Di sebelahnya, apa
                yang berubah begitu event lu punya satu link resmi.
              </p>
              <WhatsAppCta
                source="problem-section"
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold mt-6 hover:gap-3 transition-all">
                {eventCtas.warm} ↗
              </WhatsAppCta>
            </motion.div>

            {/* Numbered list column */}
            <div className="divide-y divide-border border-t border-b border-border">
              {eventProblems.map((problem, i) => (
                <motion.div
                  key={problem.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group grid grid-cols-[auto_1fr] gap-5 md:gap-8 py-8">
                  <span className="text-2xl md:text-3xl font-bold tabular-nums text-text-muted/30 group-hover:text-accent transition-colors duration-300 leading-none">
                    {problem.num}
                  </span>
                  <div>
                    {/* The complaint */}
                    <div className="flex items-start gap-3">
                      <X className="w-4 h-4 text-text-muted shrink-0 mt-1.5" />
                      <p className="text-text-primary text-base md:text-lg leading-relaxed">
                        {problem.text}
                      </p>
                    </div>

                    {/* What the website does about it */}
                    <div className="flex items-start gap-3 mt-4 rounded-xl border border-accent/30 bg-accent/[0.06] px-4 py-3">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-text-primary text-sm leading-relaxed">
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contoh kerjaan — showreel of event sites, video on hover ── */}
        <section
          id="contoh-kerjaan"
          className="py-20 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            {/* Top section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <motion.div {...inView} transition={{ duration: 0.6 }}>
                <span className="text-text-muted text-sm uppercase tracking-widest mb-4 block">
                  Contoh Kerjaan
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
                  Standar Kualitas
                  <br />
                  Yang Lu Dapat
                </h2>
              </motion.div>
              <motion.div
                {...inView}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex flex-col justify-end">
                <p className="text-text-muted text-sm max-w-md leading-relaxed">
                  Ini standar desain dan website event yang lu dapet: rapi,
                  cepat, dan responsive di semua device, dari layar HP sampai
                  desktop. Arahin kursor ke salah satu buat lihat gerakannya.
                </p>
                <Link
                  to="/event-portfolio"
                  className="text-accent text-sm mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all">
                  Lihat Design Lainnya ↗
                </Link>
              </motion.div>
            </div>

            {/* Staggered showreel grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredEventProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={index % 2 === 1 ? "md:mt-20" : ""}>
                  <EventProjectCard
                    project={project}
                    onOpen={setActiveProject}
                  />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              {...inView}
              transition={{ duration: 0.6 }}
              className="mt-16 text-center">
              <p className="text-text-muted text-sm mb-5">
                Masih ada puluhan desain event lain yang bisa lu lihat.
              </p>
              <Link
                to="/event-portfolio"
                className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
                Lihat Design Lainnya
                <span>↗</span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Process ── */}
        <section
          id="proses"
          className="py-20 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...inView} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Cara Kerja
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-10 leading-tight">
                Empat langkah, nggak ribet.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {eventProcess.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-surface border border-border rounded-2xl p-6">
                  <span className="text-accent text-xs font-bold tracking-widest block mb-2">
                    {item.step}
                  </span>
                  <h3 className="text-text-primary font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section
          id="harga"
          className="py-20 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...inView} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Investasi
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mt-3 mb-10 leading-tight">
                Pilih paket yang sesuai kebutuhan event lu.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {eventPricing.map((tier, i) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex flex-col rounded-2xl p-7 border ${
                    tier.featured
                      ? "border-accent/50 bg-gradient-to-b from-accent/[0.07] to-surface"
                      : "border-border bg-surface"
                  }`}>
                  {tier.featured && tier.badge && (
                    <span className="absolute -top-3 left-7 bg-accent text-bg text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1">
                      {tier.badge}
                    </span>
                  )}
                  <span className="text-text-muted text-xs uppercase tracking-widest font-semibold">
                    {tier.tier}
                  </span>
                  <div className="mt-3 mb-6">
                    {tier.originalPrice && (
                      <span className="block text-text-muted text-base line-through decoration-text-muted/60">
                        {tier.originalPrice}
                      </span>
                    )}
                    <span className="text-3xl md:text-4xl font-bold text-text-primary">
                      {tier.price}
                    </span>
                    {tier.priceSuffix && (
                      <span className="text-text-muted text-sm ml-0.5">
                        {tier.priceSuffix}
                      </span>
                    )}
                    {tier.priceNote && (
                      <span className="block text-accent text-xs font-semibold mt-2 leading-snug">
                        {tier.priceNote}
                      </span>
                    )}
                  </div>
                  <ul className="flex flex-col gap-3 grow">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-text-muted text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <WhatsAppCta
                    source={
                      `pricing-${tier.tier
                        .toLowerCase()
                        .replace(/\s+/g, "-")}` as CtaSource
                    }
                    context={tier.waContext}
                    value={tier.priceValue}
                    className={`mt-8 inline-flex items-center justify-center gap-2 text-sm font-semibold rounded-full px-6 py-3 transition ${
                      tier.featured
                        ? "bg-accent text-bg hover:bg-accent-dark"
                        : "border border-border text-text-primary hover:border-accent/40 hover:text-accent"
                    }`}>
                    {tier.featured && <FaWhatsapp className="w-4 h-4" />}
                    {tier.cta}
                  </WhatsAppCta>
                </motion.div>
              ))}
            </div>

            {/* Scarcity banner */}
            <EventScarcityBanner className="mt-6" />
          </div>
        </section>

        {/* ── FAQ — same accordion pattern as the What I Do section on the homepage ── */}
        <section
          id="faq"
          className="py-20 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            {/* Top bar */}
            <div className="flex items-start justify-between mb-12">
              <span className="text-text-muted text-sm uppercase tracking-widest">
                Sering Ditanya
              </span>
              <motion.div whileHover={{ x: 4 }} className="shrink-0 ml-4">
                <WhatsAppCta
                  source="faq"
                  context="ada pertanyaan lain"
                  className="text-accent text-sm">
                  Tanya Langsung ↗
                </WhatsAppCta>
              </motion.div>
            </div>

            {/* Heading */}
            <motion.h2
              {...inView}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-16 text-text-primary">
              Yang Biasanya Ditanya{" "}
              <span className="hidden md:inline">
                <br />
              </span>
              Sebelum Mulai
            </motion.h2>

            {/* Accordion list */}
            <div className="divide-y divide-border border-t border-b border-border">
              {eventFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="group">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between py-7 text-left">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text-primary group-hover:text-accent transition pr-4">
                        {faq.question}
                      </h3>
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:text-accent transition shrink-0 ml-4">
                        {isOpen ? (
                          <ArrowDownLeft className="w-5 h-5" />
                        ) : (
                          <ArrowUpRight className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden">
                          <p className="pb-8 text-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Testimoni ── */}
        <EventTestimonials />

        {/* ── Final CTA ── */}
        <section className="py-24 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div {...inView} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Siap Mulai?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mt-4 mb-4 max-w-2xl mx-auto leading-tight">
                Ceritain event lu, gua bantu bikinin halamannya.
              </h2>
              <p className="text-text-muted text-base mb-8 max-w-md mx-auto leading-relaxed">
                Balasan biasanya cepat. Langsung chat aja, nggak perlu isi form
                panjang.
              </p>
              <WhatsAppCta
                source="final-cta"
                className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
                <FaWhatsapp className="w-4 h-4" />
                {eventCtas.ready} ↗
              </WhatsAppCta>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />

      <EventProjectLightbox
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <EventPromoPopup onOpenChange={setPromoOpen} />
      <EventMobileCTA hidden={promoOpen || activeProject !== null} />
    </div>
  );
};

export default Event;
