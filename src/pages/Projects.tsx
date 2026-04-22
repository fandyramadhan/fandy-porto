import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projects, siteConfig } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, Trophy } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const Projects = () => {
  useDocumentMeta({
    title: "Projects · Fandy Ramadhan",
    description:
      "Selected product design, motion, and frontend work by Fandy Ramadhan, including MEFFYS Award 2026 and Google Play Best App for Good 2022.",
    canonicalPath: "/projects",
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
            name: "Projects",
            item: "https://fandyramadhan.com/projects",
          },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Projects by Fandy Ramadhan",
        url: "https://fandyramadhan.com/projects",
        hasPart: projects.map((p) => ({
          "@type": "CreativeWork",
          name: p.title,
          url: `https://fandyramadhan.com/projects/${p.id}`,
        })),
      },
    ],
  });

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Mobile App",
    "SaaS & Web",
    "Health Tech",
    "AI-Powered",
  ];

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        );

      let matchesCategory = activeCategory === "All";
      if (!matchesCategory) {
        if (activeCategory === "AI-Powered") {
          matchesCategory = project.tags.some((t) =>
            ["AI Voice", "AI Chatbot", "AI Assistant", "AI Suggest"].some(
              (ai) => t.toLowerCase().includes(ai.toLowerCase()),
            ),
          );
        } else {
          matchesCategory = project.category === activeCategory;
        }
      }

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <section className="pt-40 pb-32 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Back link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition mb-12">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12">
              <span className="text-text-muted text-sm uppercase tracking-widest mb-4 block">
                All Projects
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
                Featured Work
              </h1>
              <p className="text-text-muted text-base mt-6 max-w-xl">
                A curated collection of projects spanning UI/UX design, SaaS
                products, mobile apps, and design systems.
              </p>
            </motion.div>

            {/* Search & Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 space-y-6">
              {/* Search */}
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-surface border border-border rounded-xl pl-11 pr-4 py-3 text-sm text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-accent/50 transition"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs rounded-full px-4 py-2 border transition ${
                      activeCategory === cat
                        ? "bg-accent text-bg border-accent font-semibold"
                        : "border-border text-text-muted hover:border-accent/40 hover:text-text-primary"
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Results count */}
            <p className="text-text-muted text-sm mb-8">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""} found
            </p>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={index % 2 === 1 ? "md:mt-16" : ""}>
                    <Link
                      to={`/projects/${project.id}`}
                      className="group block">
                      {/* Thumbnail — drop file: public/images/projects/{id}/thumb.jpg */}
                      <div className="aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden relative group-hover:-translate-y-2 transition-transform duration-500">
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                          }}
                        />
                        <img
                          src={`/images/projects/${project.id}/thumbnail.webp`}
                          alt={`${project.title} project thumbnail by Fandy Ramadhan`}
                          title={`${project.title} — ${project.subtitle}`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover z-[1]"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display =
                              "none";
                          }}
                        />
                        <div className="absolute top-4 right-4 z-[2] bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-text-primary">
                          {project.year}
                        </div>
                        {project.award && (
                          <div className="absolute top-4 left-4 z-[2] bg-accent/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-bg font-semibold flex items-center gap-1">
                            <Trophy className="w-3 h-3" /> {project.award}
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-text-primary mt-5 group-hover:text-accent transition">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-text-muted text-sm mt-2 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs border border-border rounded-full px-3 py-1 text-text-muted">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24">
                <p className="text-text-muted text-lg">
                  No projects found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="text-accent text-sm mt-4 hover:underline">
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      {/* ── CTA ── */}
      <section className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Let's Work Together
            </h2>
            <p className="text-text-muted text-base mb-8 max-w-md mx-auto">
              Have a project in mind? I'd love to hear about it and explore how
              we can create something great together.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
                Get In Touch
              </a>
              <Link
                to="/about"
                className="border border-border text-text-primary text-sm font-semibold rounded-full px-8 py-3 hover:border-accent/40 transition">
                About Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
