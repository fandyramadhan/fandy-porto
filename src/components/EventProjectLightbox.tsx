import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  posterSrc,
  videoSrc,
  type EventProject,
} from "../data/eventProjects";

type Props = {
  project: EventProject | null;
  onClose: () => void;
};

/** Full-size preview of one showreel clip, autoplaying on a loop. */
const EventProjectLightbox = ({ project, onClose }: Props) => {
  // Close on Escape and lock background scrolling while open.
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const lenis = (
      window as unknown as { __lenis?: { stop: () => void; start: () => void } }
    ).__lenis;
    lenis?.stop();

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${project.name}`}
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl my-auto">
            {/* Video */}
            <div className="rounded-2xl overflow-hidden border border-border bg-surface">
              <video
                src={videoSrc(project.id)}
                poster={posterSrc(project.id)}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onCanPlay={(e) => {
                  void e.currentTarget.play().catch(() => {});
                }}
                className="w-full h-auto block"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-start justify-between gap-4 mt-5">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                  {project.name}
                </h2>
                <p className="text-text-muted text-sm mt-2 max-w-xl leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-block text-xs border border-border rounded-full px-3 py-1 text-text-muted mt-3">
                  {project.category}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup preview"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition shrink-0">
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventProjectLightbox;
