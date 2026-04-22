import { useState, useCallback, useRef, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects, siteConfig } from "../data/siteData";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Play,
  Pause,
  Trophy,
  Mic,
  Smartphone,
  TrendingUp,
  Award,
  PenLine,
  Palette,
  ExternalLink,
  Clapperboard,
  Code,
  PenTool,
  Bot,
  Component,
  MessageCircle,
  Gamepad2,
  BarChart3,
  ArrowLeftRight,
  Moon,
  LayoutDashboard,
  Radio,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const iconMap: Record<string, LucideIcon> = {
  Trophy,
  Mic,
  Smartphone,
  TrendingUp,
  Award,
  PenLine,
  Palette,
  ExternalLink,
  Clapperboard,
  Code,
  PenTool,
  Bot,
  Component,
  MessageCircle,
  Gamepad2,
  BarChart3,
  ArrowLeftRight,
  Moon,
  LayoutDashboard,
  Radio,
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const galleryLabels = [
  "Main Screen",
  "Key Feature",
  "User Flow",
  "UI Detail",
  "Responsive View",
  "Design System",
  "Component",
  "Demo Video",
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  useDocumentMeta({
    title: project
      ? `${project.title} · Fandy Ramadhan`
      : "Project · Fandy Ramadhan",
    description:
      project?.description?.slice(0, 160) ??
      "Project case study by Fandy Ramadhan.",
    canonicalPath: project ? `/projects/${project.id}` : "/projects",
    jsonLd: project
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
                name: "Projects",
                item: "https://fandyramadhan.com/projects",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: project.title,
                item: `https://fandyramadhan.com/projects/${project.id}`,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            headline: project.subtitle ?? project.title,
            description: project.description,
            url: `https://fandyramadhan.com/projects/${project.id}`,
            image: `https://fandyramadhan.com/images/projects/${project.id}/hero.webp`,
            dateCreated: project.year,
            keywords: project.tags?.join(", "),
            creator: {
              "@type": "Person",
              name: "Fandy Ramadhan",
              url: "https://fandyramadhan.com/",
            },
            ...(("award" in project && project.award)
              ? { award: project.award }
              : {}),
          },
        ]
      : undefined,
  });

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Hero video for Q-Fast
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [isHeroPlaying, setIsHeroPlaying] = useState(true);

  useEffect(() => {
    if (project?.id !== "qfast") return;
    const video = heroVideoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {
        setIsHeroPlaying(false);
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
    }
  }, [project?.id]);

  const toggleHeroVideo = () => {
    const video = heroVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsHeroPlaying(true);
    } else {
      video.pause();
      setIsHeroPlaying(false);
    }
  };

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  }, []);

  const galleryCount = project
    ? ["kimee", "criptofy"].includes(project.id)
      ? 8
      : 6
    : 6;

  // Gallery video ref (for kimee gallery item 8)
  const galleryVideoRef = useRef<HTMLVideoElement>(null);
  const [isGalleryVideoPlaying, setIsGalleryVideoPlaying] = useState(true);

  const toggleGalleryVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = galleryVideoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsGalleryVideoPlaying(true);
    } else {
      video.pause();
      setIsGalleryVideoPlaying(false);
    }
  };

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryCount);
  }, [galleryCount]);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryCount) % galleryCount);
  }, [galleryCount]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        {/* ── 1. Hero Banner ── */}
        <section className="pt-40 pb-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-accent transition mb-12">
              <ArrowLeft className="w-4 h-4" />
              All Projects
            </Link>

            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-border rounded-full px-3 py-1 text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-text-primary">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="text-accent text-lg mt-3">{project.subtitle}</p>
              )}
              <p className="text-text-muted text-lg mt-6 max-w-2xl">
                {project.description}
              </p>

              {(project as any).liveUrlDisabled ? (
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center gap-2 mt-8 bg-surface border border-border text-text-muted text-sm font-semibold rounded-full px-6 py-3 cursor-not-allowed opacity-70">
                  <ExternalLink className="w-4 h-4" />
                  {(project as any).liveUrlLabel || "Under Maintenance"}
                </button>
              ) : (project as any).liveUrl ? (
                <a
                  href={(project as any).liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 bg-accent text-bg text-sm font-semibold rounded-full px-6 py-3 hover:bg-accent-dark transition">
                  <ExternalLink className="w-4 h-4" />
                  {project.id === "bicarakan-id"
                    ? "View on Google Play"
                    : "Visit Website"}
                </a>
              ) : null}
            </motion.div>

            {/* Hero Image / Video */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-12">
              {project.id === "qfast" ? (
                <div
                  className="aspect-video rounded-2xl bg-surface border border-border overflow-hidden relative group cursor-pointer"
                  onClick={toggleHeroVideo}>
                  <video
                    ref={heroVideoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster="/images/projects/qfast/thumbnail.webp"
                    className="absolute inset-0 w-full h-full object-cover">
                    <source
                      src="/video/Qfast-video-h264.mp4"
                      type="video/mp4"
                    />
                  </video>
                  {/* Play/Pause overlay */}
                  <div
                    className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                      isHeroPlaying
                        ? "opacity-0 group-hover:opacity-100"
                        : "opacity-100"
                    }`}>
                    <div className="w-20 h-20 rounded-full border-2 border-accent/60 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                      {isHeroPlaying ? (
                        <Pause className="w-8 h-8 text-accent" />
                      ) : (
                        <Play className="w-8 h-8 text-accent ml-1" />
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video rounded-2xl bg-surface border border-border overflow-hidden relative">
                  <img
                    src={`/images/projects/${project.id}/hero.webp`}
                    alt={`${project.title} hero visual for the case study by Fandy Ramadhan`}
                    title={`${project.title} — ${project.subtitle}`}
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── 2. Project Overview ── */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-t border-b border-border">
              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">
                  Client
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {project.client}
                </span>
              </div>
              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">
                  Role
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">
                  Duration
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {project.duration}
                </span>
              </div>
              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">
                  Team
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {project.team}
                </span>
              </div>
              <div>
                <span className="text-text-muted text-xs uppercase tracking-widest block mb-2">
                  Tools
                </span>
                <span className="text-text-primary text-sm font-medium">
                  {project.tools.join(", ")}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 3. Problem Statement ── */}
        <section className="py-16 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                The Challenge
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-6">
                Problem Statement
              </h2>
              <p className="text-text-muted text-base leading-relaxed max-w-3xl">
                {project.problem.statement}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                {project.problem.goals.map((goal, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-5">
                    <span className="text-accent text-xs font-bold block mb-2">
                      Goal {i + 1}
                    </span>
                    <p className="text-text-primary text-sm">{goal}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 4. Research & Discovery ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Discovery
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-6">
                Research & Insights
              </h2>

              {/* Methods */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.research.methods.map((method) => (
                  <span
                    key={method}
                    className="text-xs bg-accent/10 text-accent rounded-full px-4 py-1.5 font-medium">
                    {method}
                  </span>
                ))}
              </div>

              {/* Key Findings */}
              <div className="space-y-4">
                {project.research.findings.map((finding, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-5 flex gap-4">
                    <span className="text-accent text-lg font-bold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {finding}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 5. Design Decisions ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Process
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Design Decisions
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.design.decisions.map((decision, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold"
                        style={{
                          background: `${project.color}20`,
                          color: project.color,
                        }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {decision}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 6. Showcase ── */}
        {project.showcase && project.showcase.length > 0 && (
          <section className="py-16 px-6 lg:px-12 border-t border-border">
            <div className="max-w-7xl mx-auto">
              <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
                <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                  Showcase
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                  Key Highlights
                </h2>
                <div className="space-y-4">
                  {project.showcase.map(
                    (
                      item: {
                        icon: string;
                        title: string;
                        description: string;
                      },
                      i: number,
                    ) => (
                      <div
                        key={i}
                        className="bg-surface border border-border rounded-xl p-6 flex gap-5 hover:border-accent/30 transition">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${project.color}15` }}>
                          {(() => {
                            const IconComp = iconMap[item.icon];
                            return IconComp ? (
                              <IconComp
                                className="w-5 h-5"
                                style={{ color: project.color }}
                              />
                            ) : (
                              <span className="text-xl">{item.icon}</span>
                            );
                          })()}
                        </div>
                        <div>
                          <h4 className="text-text-primary font-semibold text-sm mb-1">
                            {item.title}
                          </h4>
                          <p className="text-text-muted text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* ── Visual Design Gallery ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Gallery
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Visual Design
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {Array.from({ length: galleryCount }, (_, idx) => idx + 1).map(
                  (item, idx) => {
                    const isVideo =
                      project.id === "kimee" && item === galleryCount;

                    return (
                      <div
                        key={item}
                        className="aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden relative group cursor-pointer"
                        onClick={() => openLightbox(idx)}>
                        {isVideo ? (
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            <source
                              src={`/images/projects/${project.id}/gamess.mp4`}
                              type="video/mp4"
                            />
                          </video>
                        ) : (
                          <img
                            src={`/images/projects/${project.id}/gallery-${item}.webp`}
                            alt={`${project.title} gallery preview ${galleryLabels[idx]}`}
                            title={`${project.title} — ${galleryLabels[idx]}`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                            }}
                          />
                        )}
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {isVideo ? "Play" : "View"}
                          </span>
                        </div>
                      </div>
                    );
                  },
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 7. Results & Impact ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Outcomes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mt-3 mb-8">
                Results & Impact
              </h2>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {project.results.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="bg-surface border border-border rounded-xl p-6 text-center">
                    <span
                      className="text-3xl md:text-4xl font-bold block mb-2"
                      style={{ color: project.color }}>
                      {metric.value}
                    </span>
                    <span className="text-text-primary text-sm font-semibold block">
                      {metric.label}
                    </span>
                    <span className="text-text-muted text-xs mt-1 block">
                      {metric.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learnings & Next Steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-4">
                    Key Learnings
                  </h3>
                  <div className="space-y-3">
                    {project.results.learnings.map((learning, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-accent mt-1 shrink-0">-</span>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {learning}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-4">
                    Next Steps
                  </h3>
                  <div className="space-y-3">
                    {project.results.nextSteps.map((step, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="text-accent mt-1 shrink-0">-</span>
                        <p className="text-text-muted text-sm leading-relaxed">
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 8. Navigation ── */}
        <section className="py-16 px-6 lg:px-12 border-t border-border">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              to={`/projects/${prevProject.id}`}
              className="group flex items-center gap-3 text-text-muted hover:text-accent transition">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-xs uppercase tracking-widest block mb-1">
                  Previous
                </span>
                <span className="text-text-primary text-sm font-medium group-hover:text-accent transition">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.id}`}
              className="group flex items-center gap-3 text-text-muted hover:text-accent transition text-right">
              <div>
                <span className="text-xs uppercase tracking-widest block mb-1">
                  Next
                </span>
                <span className="text-text-primary text-sm font-medium group-hover:text-accent transition">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
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
                to="/projects"
                className="border border-border text-text-primary text-sm font-semibold rounded-full px-8 py-3 hover:border-accent/40 transition">
                View Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* ── Gallery Lightbox ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}>
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              aria-label="Close">
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              aria-label="Previous">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition z-10"
              aria-label="Next">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              className="max-w-5xl w-full mx-4 md:mx-8"
              onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}>
                <div className="bg-surface rounded-2xl overflow-hidden border border-border">
                  <div className="aspect-video relative bg-surface-2">
                    {project.id === "kimee" &&
                    lightboxIndex + 1 === galleryCount ? (
                      <div
                        className="w-full h-full relative cursor-pointer"
                        onClick={toggleGalleryVideo}>
                        <video
                          ref={galleryVideoRef}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          className="w-full h-full object-contain">
                          <source
                            src={`/images/projects/${project.id}/gamess.mp4`}
                            type="video/mp4"
                          />
                        </video>
                        <div
                          className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                            isGalleryVideoPlaying
                              ? "opacity-0 hover:opacity-100"
                              : "opacity-100"
                          }`}>
                          <div className="w-16 h-16 rounded-full border-2 border-accent/60 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                            {isGalleryVideoPlaying ? (
                              <Pause className="w-7 h-7 text-accent" />
                            ) : (
                              <Play className="w-7 h-7 text-accent ml-1" />
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={`/images/projects/${project.id}/gallery-${lightboxIndex + 1}.webp`}
                        alt={`${project.title} full size ${galleryLabels[lightboxIndex]}`}
                        title={`${project.title} — ${galleryLabels[lightboxIndex]}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    )}
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <span className="text-text-muted text-xs">
                      {lightboxIndex + 1} / {galleryCount}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
