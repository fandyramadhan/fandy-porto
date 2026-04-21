import { siteConfig } from "../data/siteData";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2
            data-gsap="text-reveal"
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Have a product
            <br />
            in mind?
          </h2>
          <motion.a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 bg-accent text-bg text-base font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition">
            <FaWhatsapp className="w-4 h-4" />
            Chat on WhatsApp ↗
          </motion.a>
        </div>

        <div
          data-gsap="fade-up"
          className="mt-16 pt-16 border-t border-border">
          <p className="text-text-muted text-sm max-w-md">
            Whether it's a senior design role, a freelance project, or a short
            collaboration, I'm open to conversations. I usually reply within 24
            hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
