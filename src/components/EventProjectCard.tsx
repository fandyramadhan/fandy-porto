import { useRef, useState } from "react";
import { Play } from "lucide-react";
import {
  posterSrc,
  videoSrc,
  type EventProject,
} from "../data/eventProjects";

type Props = {
  project: EventProject;
  onOpen: (project: EventProject) => void;
  /** Skip lazy-loading for the first row so it paints immediately. */
  eager?: boolean;
};

/**
 * A showreel card that looks like a paused thumbnail until it is hovered.
 *
 * The still is a plain lazy <img> of the video's first frame, so the page can
 * be rendered without touching the multi-megabyte .webm files. The <video> is
 * only mounted on hover and unmounted on leave, which both stops the download
 * and keeps at most one clip in memory at a time.
 */
const EventProjectCard = ({ project, onOpen, eager = false }: Props) => {
  const [hovered, setHovered] = useState(false);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const start = () => setHovered(true);
  const stop = () => {
    setHovered(false);
    setPlaying(false);
  };

  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className="group block w-full text-left cursor-pointer">
      {/* Media */}
      <div className="aspect-video rounded-2xl bg-surface border border-border overflow-hidden relative group-hover:-translate-y-2 group-focus-visible:-translate-y-2 transition-transform duration-500">
        {/* Still frame — always present, so the card never goes blank */}
        <img
          src={posterSrc(project)}
          alt={`Preview website event ${project.name} oleh Fandy Ramadhan`}
          title={`${project.name} · ${project.category}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Clip — mounted on hover only, fades in once it actually plays */}
        {hovered && (
          <video
            ref={videoRef}
            src={videoSrc(project)}
            poster={posterSrc(project)}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            onCanPlay={(e) => {
              // Belt and braces: the autoPlay attribute covers most browsers,
              // but an explicit play() also recovers cases where it is ignored.
              void e.currentTarget.play().catch(() => {});
            }}
            onPlaying={() => setPlaying(true)}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
              playing ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Play affordance */}
        <div
          className={`absolute inset-0 z-[2] flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0" : "opacity-100"
          }`}>
          <span className="w-12 h-12 rounded-full bg-bg/70 backdrop-blur-sm border border-white/15 flex items-center justify-center">
            <Play className="w-4 h-4 text-accent fill-accent ml-0.5" />
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-text-primary mt-5 group-hover:text-accent transition">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm mt-2 leading-relaxed">
        {project.description}
      </p>

      {/* Category */}
      <div className="flex flex-wrap gap-2 mt-3">
        <span className="text-xs border border-border rounded-full px-3 py-1 text-text-muted">
          {project.category}
        </span>
      </div>

      <span className="sr-only">Putar preview</span>
    </button>
  );
};

export default EventProjectCard;
