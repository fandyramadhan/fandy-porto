import { useRef, useState, useEffect } from "react";
import { motionShowcase } from "../data/siteData";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const MotionShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = () => {
      video.play().catch(() => {
        setIsPlaying(false);
      });
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener("loadeddata", playVideo, { once: true });
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section id="motion" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Top Header */}
        <div className="flex items-start justify-between mb-16">
          <span className="text-text-muted text-sm uppercase tracking-widest">
            Motion Showcase
          </span>
          <span className="text-text-muted text-sm">
            After Effects &middot; SaaS
          </span>
        </div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          <div
            className="rounded-2xl bg-surface border border-border aspect-video relative overflow-hidden group cursor-pointer"
            onClick={togglePlay}>
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover">
              <source src="/video/motion.mp4" type="video/mp4" />
            </video>

            {/* Play/Pause overlay */}
            <div
              className={`absolute inset-0 z-10 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}>
              <div className="w-20 h-20 rounded-full border-2 border-accent/60 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110">
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-accent" />
                ) : (
                  <Play className="w-8 h-8 text-accent ml-1" />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {motionShowcase.map((category, index) => (
            <div
              key={index}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition">
              <h4 className="text-text-primary font-semibold text-sm">
                {category.title}
              </h4>
              <p className="text-text-muted text-xs mt-1">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionShowcase;
