import { experiences } from "../data/siteData";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <span className="text-text-muted text-sm uppercase tracking-widest">
          Journey
        </span>
        <h2 data-gsap="text-reveal" className="text-3xl md:text-4xl font-bold mt-4 mb-16">
          Professional Experience
        </h2>

        <div className="divide-y divide-border">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="py-8 grid lg:grid-cols-[200px_1fr] gap-4"
            >
              {/* Left - Period */}
              <p className="text-text-muted text-sm">{exp.period}</p>

              {/* Right - Details */}
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-text-primary">{exp.role}</h3>
                  {exp.current && (
                    <span className="bg-accent/10 text-accent text-xs px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-accent text-sm mt-1">{exp.company}</p>
                <p className="text-text-muted text-sm mt-2">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
