import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../data/siteData";
import { serviceSlugs } from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="flex items-start justify-between mb-16">
          <span className="text-text-muted text-sm uppercase tracking-widest">
            What I Do
          </span>
          <motion.div whileHover={{ x: 4 }}>
            <Link to="/services" className="text-accent text-sm">
              Learn More ↗
            </Link>
          </motion.div>
        </div>

        {/* Heading */}
        <h2
          data-gsap="text-reveal"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl mb-16 text-text-primary">
          Crafting Solutions With Skill
          <br />& Precision
        </h2>

        {/* Accordion list */}
        <div
          data-gsap="fade-up"
          className="divide-y divide-border border-t border-b border-border">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.title} className="group">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between py-8 text-left">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary group-hover:text-accent transition">
                    {service.title}
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
                      <div className="pb-8 grid lg:grid-cols-[1fr_300px] gap-8">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs border border-border rounded-full px-4 py-1.5 text-text-muted">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-text-muted text-sm leading-relaxed max-w-lg">
                            {service.description}
                          </p>
                          {serviceSlugs[index] && (
                            <Link
                              to={`/services/${serviceSlugs[index]}`}
                              className="inline-flex items-center gap-2 mt-6 border border-border rounded-full px-5 py-2.5 text-sm font-semibold text-text-primary hover:border-accent/40 hover:text-accent transition">
                              Learn More
                              <ArrowUpRight className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                        {/* Illustration — drop file: public/images/services/service-{1-4}.webp */}
                        <div className="rounded-xl bg-surface-2 border border-border aspect-video overflow-hidden relative">
                          <img
                            src={`/images/services/service-${index + 1}.webp`}
                            alt={`${service.title} service illustration`}
                            title={service.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              target.parentElement!.classList.add(
                                "flex",
                                "items-center",
                                "justify-center",
                              );
                              const span = document.createElement("span");
                              span.className = "text-text-muted/20 text-sm";
                              span.textContent = "Preview";
                              target.parentElement!.appendChild(span);
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
