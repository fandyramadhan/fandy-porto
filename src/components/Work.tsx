import { Link } from "react-router-dom";
import { projects } from "../data/siteData";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const featuredIds = ["lulladream", "bicarakan-id", "qfast", "speakeasy"];
const featuredProjects = featuredIds
  .map((id) => projects.find((p) => p.id === id)!)
  .filter(Boolean);

const Work = () => {
  return (
    <section id="work" className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div data-gsap="slide-left">
            <span className="text-text-muted text-sm uppercase tracking-widest mb-4 block">
              Featured Projects
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-text-primary">
              What I've Been
              <br />
              Working On
            </h2>
          </div>
          <div data-gsap="slide-right" className="flex flex-col justify-end">
            <p className="text-text-muted text-sm max-w-md">
              Over The Years, I've Worked On A Variety Of Projects Ranging From
              User Interfaces And Mobile Apps To Full Digital Experiences.
            </p>
            <Link
              to="/projects"
              className="text-accent text-sm mt-4 inline-flex items-center gap-2 hover:gap-3 transition-all">
              View All Works ↗
            </Link>
          </div>
        </div>

        {/* Staggered project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={index % 2 === 1 ? "md:mt-20" : ""}>
              <Link
                to={`/projects/${project.id}`}
                className="group block cursor-pointer">
                {/* Thumbnail — drop file: public/images/projects/{id}/thumb.jpg */}
                <div className="aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden relative group-hover:-translate-y-2 transition-transform duration-500">
                  {/* Gradient fallback (visible when no image) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`,
                    }}
                  />
                  {/* Actual thumbnail image */}
                  <img
                    src={`/images/projects/${project.id}/thumbnail.webp`}
                    alt={`${project.title} project thumbnail by Fandy Ramadhan`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover z-[1]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Award badge */}
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
        </div>

        {/* CTA — View all projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center">
          <p className="text-text-muted text-sm mb-5">
            These are just a few highlights — there's more to explore.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-semibold rounded-full px-8 py-3 hover:bg-accent-dark transition">
            View All Projects
            <span>↗</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
