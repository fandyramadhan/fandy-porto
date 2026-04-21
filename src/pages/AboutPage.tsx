import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Download,
  MapPin,
  Mail,
  Phone,
  PenTool,
  Bot,
  Code,
  CornerDownRight,
} from "lucide-react";
import {
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";
import {
  siteConfig,
  aboutPageBio,
  aboutStats,
  experiences,
  education,
} from "../data/siteData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn, href: siteConfig.socials.linkedin },
  { label: "Dribbble", icon: FaDribbble, href: siteConfig.socials.dribbble },
  { label: "Behance", icon: FaBehance, href: siteConfig.socials.behance },
  { label: "Instagram", icon: FaInstagram, href: siteConfig.socials.instagram },
];

const AboutPage = () => {
  useDocumentMeta({
    title: "About · Fandy Ramadhan",
    description:
      "About Fandy Ramadhan, a Senior Product Designer with 7+ years shipping SaaS products end to end through design, motion, and frontend code. AI-assisted workflow with Claude, Gemini, and Figma Make.",
    canonicalPath: "/about",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Fandy Ramadhan",
      url: "https://fandyramadhan.com/about",
      mainEntity: {
        "@type": "Person",
        name: "Fandy Ramadhan",
        jobTitle: "Senior Product Designer",
        worksFor: { "@type": "Organization", name: "Linkit360" },
      },
    },
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

            <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
              {/* Left - Text */}
              <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                <span className="text-text-muted text-sm uppercase tracking-widest mb-4 block">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
                  Fandy Ramadhan
                </h1>
                <p className="text-accent text-lg mt-3">
                  {siteConfig.title} — {siteConfig.tagline}
                </p>

                {/* Contact info */}
                <div className="flex flex-wrap gap-6 mt-8 text-text-muted text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {siteConfig.location}
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 hover:text-accent transition">
                    <Mail className="w-4 h-4" />
                    {siteConfig.email}
                  </a>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {siteConfig.phone}
                  </span>
                </div>

                {/* Social links */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs border border-border rounded-full px-4 py-2 text-text-muted hover:text-accent hover:border-accent/40 transition">
                      <link.icon className="w-3.5 h-3.5" />
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Resume CTA */}
                <a
                  target="_blank"
                  href={siteConfig.resumeUrl}
                  className="inline-flex items-center gap-2 mt-8 bg-accent text-bg text-sm font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </motion.div>

              {/* Right - Photo */}
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border border-border shrink-0">
                <img
                  src="/images/fandy-photo.webp"
                  alt="Portrait of Fandy Ramadhan, Senior Product Designer at Linkit360"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-12 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {aboutStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border rounded-xl p-6 text-center">
                  <span className="text-3xl md:text-4xl font-bold text-accent block">
                    {stat.value}
                  </span>
                  <span className="text-text-muted text-sm mt-2 block whitespace-pre-line">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Bio ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                My Story
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Who I Am
              </h2>
              <div className="max-w-3xl space-y-6">
                {aboutPageBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-text-muted text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Capabilities — Service Cards ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Capabilities
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-10">
                What I Can Do For You
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 — Product Design */}
                <div className="bg-surface border border-border rounded-2xl p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <PenTool className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold bg-accent text-bg rounded-full px-3 py-1">
                      Figma
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Product Design
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    End-to-end product design from research to high-fidelity UI,
                    design systems, and interactive prototypes that drive
                    results.
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                    {[
                      "User Research",
                      "UI/UX Design",
                      "Design System",
                      "Prototyping",
                      "Wireframing",
                      "Usability Testing",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="text-text-muted text-sm flex items-center gap-2">
                        <CornerDownRight className="w-3 h-3 text-accent shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-auto border border-border rounded-full px-6 py-2.5 text-sm font-semibold text-text-primary text-center hover:border-accent/40 hover:text-accent transition">
                    Hire Me!
                  </a>
                </div>

                {/* Card 2 — AI Strategy */}
                <div className="bg-surface border border-border rounded-2xl p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold bg-accent text-bg rounded-full px-3 py-1">
                      Claude & ChatGPT
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    AI Strategy
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    Leverage AI tools to supercharge design and development
                    workflows — from ideation to implementation.
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                    {[
                      "AI Guidelines",
                      "Proof of Concept",
                      "Workflow Automation",
                      "AI-assisted Code",
                      "Prompt Engineering",
                      "Content Strategy",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="text-text-muted text-sm flex items-center gap-2">
                        <CornerDownRight className="w-3 h-3 text-accent shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-auto border border-border rounded-full px-6 py-2.5 text-sm font-semibold text-text-primary text-center hover:border-accent/40 hover:text-accent transition">
                    Hire Me!
                  </a>
                </div>

                {/* Card 3 — Frontend & Motion */}
                <div className="bg-surface border border-border rounded-2xl p-7 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Code className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-xs font-semibold bg-accent text-bg rounded-full px-3 py-1">
                      React & After Effects
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    Frontend & Motion
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-6">
                    Bring designs to life with clean code slicing and SaaS
                    motion graphics that make products feel premium.
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                    {[
                      "React / Next.js",
                      "Tailwind CSS",
                      "Design-to-Code",
                      "Responsive Web",
                      "SaaS Motion",
                      "Video Editing",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="text-text-muted text-sm flex items-center gap-2">
                        <CornerDownRight className="w-3 h-3 text-accent shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="mt-auto border border-border rounded-full px-6 py-2.5 text-sm font-semibold text-text-primary text-center hover:border-accent/40 hover:text-accent transition">
                    Hire Me!
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Experience Timeline ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Journey
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Professional Experience
              </h2>

              <div className="divide-y divide-border">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="py-8 grid lg:grid-cols-[200px_1fr] gap-4">
                    <p className="text-text-muted text-sm">{exp.period}</p>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-bold text-text-primary">
                          {exp.role}
                        </h3>
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
            </motion.div>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Education
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Academic Background
              </h2>

              <div className="divide-y divide-border">
                {education.map((edu, i) => (
                  <div
                    key={i}
                    className="py-8 grid lg:grid-cols-[200px_1fr] gap-4">
                    <p className="text-text-muted text-sm">{edu.period}</p>
                    <div>
                      <h3 className="font-bold text-text-primary">
                        {edu.institution}
                      </h3>
                      <p className="text-text-muted text-sm mt-1">
                        {edu.degree}
                      </p>
                    </div>
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
                Let's Work Together
              </h2>
              <p className="text-text-muted text-base mb-8 max-w-md mx-auto">
                Have a project in mind? I'd love to hear about it and explore
                how we can create something great together.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
                  Get In Touch
                </a>
                <Link
                  to="/projects"
                  className="border border-border text-text-primary text-sm font-semibold rounded-full px-8 py-3 hover:border-accent/40 transition">
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
