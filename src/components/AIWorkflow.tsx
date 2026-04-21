import { aiTools, aiWorkflowSteps } from "../data/siteData";
import { motion } from "framer-motion";

const AIWorkflow = () => {
  return (
    <section id="ai-workflow" className="py-32 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <span className="text-text-muted text-sm uppercase tracking-widest">
          AI-Powered
        </span>
        <h2 data-gsap="text-reveal" className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 max-w-3xl">
          Designing Smarter
          <br />
          With AI
        </h2>
        <p className="text-text-muted text-sm max-w-md mb-16">
          I leverage AI tools to accelerate design workflows and deliver faster
          without sacrificing quality.
        </p>

        {/* Workflow Steps */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          {aiWorkflowSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="bg-surface border border-border rounded-xl px-5 py-3">
                <p className="font-semibold text-sm text-text-primary">
                  {step.step}
                </p>
                <p className="text-xs text-accent mt-1">{step.tools}</p>
              </div>
              {index < aiWorkflowSteps.length - 1 && (
                <span className="text-accent/30">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {aiTools.map((tool, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="bg-surface border border-border rounded-xl p-5 hover:border-accent/30 transition-all"
            >
              <h4 className="font-semibold text-sm text-text-primary">
                {tool.name}
              </h4>
              <p className="text-xs text-accent">{tool.company}</p>
              <p className="text-xs text-text-muted mt-2">
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkflow;
