import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CornerDownRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { servicesData, serviceSlugs } from "../data/servicesData";
import { siteConfig } from "../data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

// Maps each service slug to its preview image in public/images/services/
const serviceImages: Record<(typeof serviceSlugs)[number], string> = {
  "product-designer": "/images/services/service-1.webp",
  "ui-ux-designer": "/images/services/service-2.webp",
  "saas-motion-designer": "/images/services/service-3.webp",
  "ai-assisted-design": "/images/services/service-4.webp",
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Services = () => {
  useDocumentMeta({
    title: "Services · Fandy Ramadhan",
    description:
      "Product design, UI/UX, SaaS motion, and AI-assisted development services by Fandy Ramadhan. Senior Product Designer with 7+ years shipping SaaS products end to end.",
    canonicalPath: "/services",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://fandyramadhan.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://fandyramadhan.com/services",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Services offered by Fandy Ramadhan",
        itemListElement: serviceSlugs.map((slug, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: servicesData[slug].h1,
          url: `https://fandyramadhan.com/services/${slug}`,
        })),
      },
    ],
  });

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="pt-40 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-text-muted text-sm uppercase tracking-widest mb-4 block">
                Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary max-w-4xl">
                What I Can Do For You
              </h1>
              <p className="text-text-muted text-base md:text-lg mt-6 max-w-3xl leading-relaxed">
                Four specialized tracks, one senior operator. Whether you need
                product design end to end, polished UI, SaaS motion, or an
                AI-assisted workflow to ship faster, I can plug in as a senior
                hire, freelance designer, or project partner.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Service Cards ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceSlugs.map((slug, i) => {
                const service = servicesData[slug];
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}>
                    <Link
                      to={`/services/${slug}`}
                      className="group block bg-surface border border-border rounded-2xl overflow-hidden h-full hover:border-accent/40 transition">
                      {/* Preview image (replaces icon) */}
                      <div className="aspect-video bg-surface-2 border-b border-border overflow-hidden relative">
                        <img
                          src={serviceImages[slug]}
                          alt={`${service.h1} preview illustration`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            target.parentElement!.classList.add(
                              "flex",
                              "items-center",
                              "justify-center",
                            );
                            const span = document.createElement("span");
                            span.className = "text-text-muted/30 text-sm";
                            span.textContent = "Preview";
                            target.parentElement!.appendChild(span);
                          }}
                        />
                        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bg/80 backdrop-blur flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                        </div>
                      </div>

                      <div className="p-7">
                        <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition">
                          {service.h1}
                        </h2>
                        <p className="text-accent text-sm mt-1 mb-4">
                          {service.subtitle}
                        </p>
                        <p className="text-text-muted text-sm leading-relaxed mb-6">
                          {service.intro.split(".").slice(0, 2).join(".")}.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.keywords.slice(0, 3).map((kw) => (
                            <span
                              key={kw}
                              className="text-xs border border-border rounded-full px-3 py-1 text-text-muted">
                              {kw}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-text-primary group-hover:text-accent transition">
                          Learn More
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                How I Work
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Process &amp; Principles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
                {[
                  {
                    step: "01",
                    title: "Discover",
                    body: "Short discovery call to understand product goals, audience, and constraints. Faster than a long brief.",
                  },
                  {
                    step: "02",
                    title: "Explore",
                    body: "Research, wireframes, and parallel UI exploration with Figma Make and Claude to compress weeks into days.",
                  },
                  {
                    step: "03",
                    title: "Refine",
                    body: "Hi-fi UI, motion, and prototypes refined through testing and team feedback until the design is production-ready.",
                  },
                  {
                    step: "04",
                    title: "Ship",
                    body: "Handoff and slicing support with Claude and Cursor so designs reach production in hours, not days.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
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
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── What's Included (overview) ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-10">
                Scope at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-5xl">
                {[
                  "End-to-end product design from research to handoff",
                  "Design systems with Figma tokens and React/Storybook components",
                  "SaaS motion in After Effects and Lottie for developer handoff",
                  "Frontend slicing with React, Next.js, and Tailwind CSS",
                  "AI-assisted research, design exploration, and slicing workflows",
                  "Design reviews and feedback on existing products",
                  "Workshops and mentoring for design and engineering teams",
                  "Long-form explainer videos and product motion storytelling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-2 border-b border-border">
                    <CornerDownRight className="w-4 h-4 text-accent shrink-0 mt-1" />
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Have a product in mind?
              </h2>
              <p className="text-text-muted text-base mb-8 max-w-md mx-auto">
                Whether it's a senior design role, a freelance project, or a
                short collaboration, I'm open to conversations. I usually reply
                within 24 hours.
              </p>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
                <FaWhatsapp className="w-4 h-4" />
                Chat on WhatsApp ↗
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
