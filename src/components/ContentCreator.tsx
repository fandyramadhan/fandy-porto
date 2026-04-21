import { socialPlatforms } from "../data/siteData";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const ContentCreator = () => {
  return (
    <section id="content-creator" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-widest uppercase">
            CONTENT CREATOR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Sharing What I Learn
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-xl p-5 hover:border-accent/50 transition-all group block"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-text-primary text-sm group-hover:text-accent transition">
                    {platform.name}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition" />
                </div>
                <p className="text-xs text-accent mt-1">{platform.handle}</p>
                <p className="text-xs text-text-muted mt-2">
                  {platform.content}
                </p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentCreator;
