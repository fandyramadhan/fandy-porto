import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { eventTestimonials } from "../data/eventData";

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

/** Same layout as the homepage testimonial section, with event copy. */
const EventTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % eventTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = eventTestimonials[activeIndex];

  return (
    <section
      id="testimoni"
      className="py-20 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <span className="text-text-muted text-sm uppercase tracking-widest">
          Testimoni
        </span>

        {/* Quote area */}
        <div className="mt-12 max-w-3xl">
          {/* Big quote mark */}
          <div className="text-7xl lg:text-8xl text-accent/30 font-serif leading-none mb-4">
            &ldquo;
          </div>

          {/* Quote text */}
          <motion.h3
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-text-primary">
            {current.text}
          </motion.h3>

          {/* Author info */}
          <motion.div
            key={`author-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mt-12">
            <div className="w-16 h-16 rounded-full bg-surface-2 border border-border flex items-center justify-center shrink-0">
              <span className="text-sm font-bold text-text-muted">
                {getInitials(current.name)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-text-primary">{current.name}</p>
              <p className="text-text-muted text-sm">{current.role}</p>
            </div>
          </motion.div>

          {/* Navigation dots */}
          <div className="flex gap-2 mt-8">
            {eventTestimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Testimoni ${index + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === activeIndex
                    ? "bg-accent"
                    : "bg-border hover:bg-text-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTestimonials;
