import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CornerDownRight, ExternalLink } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { servicesData, type ServiceSlug } from "../data/servicesData";
import { projects, siteConfig } from "../data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug as ServiceSlug] : undefined;

  const related = service
    ? projects.filter((p) => service.relatedProjects.includes(p.id))
    : [];

  useDocumentMeta({
    title: service?.metaTitle ?? "Services · Fandy Ramadhan",
    description:
      service?.metaDescription ??
      "Design, motion, and frontend services by Fandy Ramadhan.",
    canonicalPath: service ? `/services/${service.slug}` : "/",
    jsonLd: service
      ? [
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
              {
                "@type": "ListItem",
                position: 3,
                name: service.h1,
                item: `https://fandyramadhan.com/services/${service.slug}`,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.h1,
            description: service.metaDescription,
            url: `https://fandyramadhan.com/services/${service.slug}`,
            provider: {
              "@type": "Person",
              name: "Fandy Ramadhan",
              url: "https://fandyramadhan.com/",
            },
            areaServed: "Worldwide",
            serviceType: service.keywords.join(", "),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]
      : undefined,
  });

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const Icon = service.icon;

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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <span className="text-text-muted text-sm uppercase tracking-widest">
                  Services
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary max-w-4xl">
                {service.h1}
              </h1>
              <p className="text-accent text-lg mt-4 max-w-3xl">
                {service.subtitle}
              </p>
              <p className="text-text-muted text-base md:text-lg mt-8 max-w-3xl leading-relaxed">
                {service.intro}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-bg text-sm md:text-base font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition">
                  <FaWhatsapp className="w-4 h-4" />
                  Chat on WhatsApp ↗
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 border border-border text-text-primary text-sm md:text-base font-semibold rounded-full px-6 py-3 hover:border-accent/40 transition">
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── What I Do ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                What I Do
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Scope &amp; Deliverables
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
                {service.whatIDo.map((item, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-5 flex items-start gap-3">
                    <CornerDownRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Related Projects ── */}
        {related.length > 0 && (
          <section className="py-16 px-6 lg:px-12 border-t border-border">
            <div className="max-w-7xl mx-auto">
              <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                  Related Work
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                  Case Studies for This Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition">
                      <div className="aspect-video bg-surface-2 relative overflow-hidden">
                        <img
                          src={`/images/projects/${project.id}/thumbnail.webp`}
                          alt={`${project.title} case study thumbnail`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-text-primary font-semibold text-base mb-1">
                          {project.title}
                        </h3>
                        <p className="text-text-muted text-sm">
                          {project.subtitle}
                        </p>
                        <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                          View case study
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Common Questions
              </h2>
              <div className="space-y-4 max-w-3xl">
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-6">
                    <h3 className="text-text-primary font-semibold text-base mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {faq.answer}
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

export default ServiceDetail;
