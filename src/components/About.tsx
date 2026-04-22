import { Link } from "react-router-dom";
import { aboutHeading, aboutBio, siteConfig } from "../data/siteData";
import {
  FaBehance,
  FaDribbble,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaBehance, href: siteConfig.socials.behance },
  { icon: FaDribbble, href: siteConfig.socials.dribbble },
  { icon: FaInstagram, href: siteConfig.socials.instagram },
  { icon: FaLinkedinIn, href: siteConfig.socials.linkedin },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div
          data-gsap="fade-up"
          className="flex items-start justify-between mb-16">
          <span className="text-[#777777] text-sm uppercase tracking-widest">
            About Me
          </span>
          <Link
            to="/about"
            className="text-[#CCFF00] text-sm flex items-center gap-2 hover:gap-3 transition-all">
            See More <span>↗</span>
          </Link>
        </div>

        {/* Heading */}
        <h2
          data-gsap="text-reveal"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl text-[#f5f5f5]">
          {aboutHeading}
        </h2>

        {/* Content area */}
        <div
          data-gsap="fade-up"
          className="grid lg:grid-cols-[auto_1fr] gap-16 mt-16">
          {/* Left column */}
          <div className="flex gap-12">
            {/* Social icons vertical */}
            <div className="flex flex-col gap-4">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#222222] flex items-center justify-center text-[#777777] hover:text-[#CCFF00] hover:border-[#CCFF00] transition">
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Photo */}
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden border border-[#222222]">
              <img
                src="/images/fandy-photo.webp"
                alt="Portrait of Fandy Ramadhan, Senior Product Designer"
                title="Fandy Ramadhan"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-center">
            <p className="text-[#777777] text-base lg:text-lg leading-relaxed max-w-lg">
              {aboutBio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
