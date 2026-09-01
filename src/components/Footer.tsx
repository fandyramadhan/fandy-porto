import { siteConfig, footerLinks } from "../data/siteData";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-border pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">
              Quick Links
            </h3>
            {footerLinks.quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-muted text-sm hover:text-text-primary transition block mb-2">
                {link.label}
              </a>
            ))}
          </div>

          {/* Elsewhere */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">
              Elsewhere
            </h3>
            {footerLinks.elsewhere.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted text-sm hover:text-text-primary transition block mb-2">
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm mb-4">
              Contact
            </h3>
            <p className="text-text-muted text-sm mb-2">{siteConfig.phone}</p>
            <p className="text-text-muted text-sm mb-4">{siteConfig.email}</p>
            <div className="flex gap-3 mt-2">
              {[
                {
                  icon: FaBehance,
                  href: siteConfig.socials.behance,
                  label: "Behance",
                },
                {
                  icon: FaDribbble,
                  href: siteConfig.socials.dribbble,
                  label: "Dribbble",
                },
                {
                  icon: FaLinkedinIn,
                  href: siteConfig.socials.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: FaInstagram,
                  href: siteConfig.socials.instagram,
                  label: "Instagram",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} (buka di tab baru)`}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition">
                  <social.icon className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="text-text-muted text-xs">
            &copy; 2026 Fandy Ramadhan. Designed, animated, and sliced with
            React, Framer Motion, and AI.
          </p>
        </div>

        {/* Giant Name */}
        <div className="mt-8 overflow-hidden">
          <div
            aria-hidden="true"
            data-gsap="fade-up"
            className="footer-watermark text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-text-primary/5 leading-none tracking-tighter select-none whitespace-nowrap"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
