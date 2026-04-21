import type { LucideIcon } from "lucide-react";
import { PenTool, Palette, Clapperboard, Bot } from "lucide-react";

export type ServiceSlug =
  | "product-designer"
  | "ui-ux-designer"
  | "saas-motion-designer"
  | "ai-assisted-design";

export type ServiceData = {
  slug: ServiceSlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subtitle: string;
  icon: LucideIcon;
  intro: string;
  whatIDo: string[];
  keywords: string[];
  relatedProjects: string[];
  faqs: { question: string; answer: string }[];
};

export const servicesData: Record<ServiceSlug, ServiceData> = {
  "product-designer": {
    slug: "product-designer",
    metaTitle:
      "Senior Product Designer for SaaS & Mobile | Fandy Ramadhan",
    metaDescription:
      "Freelance and full-time Senior Product Designer in Indonesia with 7+ years shipping SaaS and mobile products end to end. MEFFYS Award 2026 Top 3. Open for design engagements.",
    h1: "Senior Product Designer for SaaS & Mobile Products",
    subtitle:
      "End-to-end product design from research and strategy to design systems and prototyping.",
    icon: PenTool,
    intro:
      "I help product teams in Indonesia and globally turn ambitious ideas into SaaS experiences that users actually stay for. Over 7+ years I've led end-to-end product design for apps that generate revenue, win international awards, and serve thousands of daily users. Available as a senior hire, freelance designer, or project partner.",
    whatIDo: [
      "User research, interviews, and usability testing",
      "Product strategy and roadmap collaboration with PM and engineering",
      "Information architecture, user flows, and wireframing",
      "High-fidelity UI design and interactive prototyping",
      "Design systems with Figma tokens and React/Storybook components",
      "Design QA and handoff to engineering with production-ready specs",
    ],
    keywords: [
      "Senior Product Designer",
      "Product Designer Indonesia",
      "SaaS Product Designer",
      "Mobile App Product Designer",
      "End-to-end Product Design",
      "Design Systems",
    ],
    relatedProjects: ["lulladream", "speakeasy", "kimee", "booksnap"],
    faqs: [
      {
        question: "Are you available for full-time or freelance?",
        answer:
          "Both. I work as a Senior Product Designer at Linkit360 and take on selected freelance or short project engagements on the side. Let's talk on WhatsApp to see which fits your timeline.",
      },
      {
        question: "What industries do you work in?",
        answer:
          "SaaS, mobile apps, health tech, EdTech, fintech, sports tech, and environmental tech. My portfolio includes enterprise dashboards, AI-powered consumer apps, and landing pages.",
      },
      {
        question: "Can you lead design for an early-stage product?",
        answer:
          "Yes. I've shipped products from 0 to 1, including the design system, brand alignment, and motion language. AI-assisted workflow (Claude, Figma Make) helps compress the usual timeline.",
      },
    ],
  },
  "ui-ux-designer": {
    slug: "ui-ux-designer",
    metaTitle: "UI/UX Designer Indonesia for SaaS & Mobile | Fandy Ramadhan",
    metaDescription:
      "UI/UX Designer based in Indonesia with 7+ years designing SaaS and mobile experiences. Hi-fi UI, interaction design, usability testing, and design systems. Open for projects.",
    h1: "UI/UX Designer for SaaS, Mobile, and Web",
    subtitle:
      "Hi-fi UI, visual hierarchy, and interaction patterns built for usability and brand.",
    icon: Palette,
    intro:
      "If your product needs polished screens that feel intentional, not decorative, I'm your UI/UX Designer. I combine strong visual craft with usability research to produce interfaces that convert, retain, and scale. I've designed for Google Play Best App for Good 2022 (Bicarakan.id), MEFFYS Top 3 (Lulladreams), and enterprise dashboards serving thousands of users.",
    whatIDo: [
      "High-fidelity UI design in Figma with accessible color and typography",
      "Interaction design including hover states, transitions, and micro-interactions",
      "Usability testing with Maze and moderated sessions",
      "Mobile-first responsive design patterns for iOS, Android, and web",
      "Visual hierarchy, information density, and readability tuning",
      "Component library and design token setup",
    ],
    keywords: [
      "UI/UX Designer",
      "UI Designer",
      "UX Designer",
      "UI/UX Designer Indonesia",
      "Mobile UX Designer",
      "SaaS UI Designer",
    ],
    relatedProjects: ["bicarakan-id", "speakeasy", "criptofy", "lulladream"],
    faqs: [
      {
        question: "Do you design only UI or also UX research?",
        answer:
          "Both. Every project begins with research (interviews, competitive analysis, or usability testing) before moving to wireframes and hi-fi UI. That's why my designs ship with fewer revisions.",
      },
      {
        question: "How fast can you deliver a full UI set?",
        answer:
          "Depending on scope, 2 to 6 weeks. AI-assisted workflow with Figma Make lets me explore three directions in the time others build one, compressing the usual timeline.",
      },
      {
        question: "Do you work with design systems?",
        answer:
          "Yes. I've architected a 40+ component design system at Linkit360 adopted across 5+ product teams. I can set one up from scratch or contribute to an existing one.",
      },
    ],
  },
  "saas-motion-designer": {
    slug: "saas-motion-designer",
    metaTitle:
      "SaaS Motion Designer & Explainer Video | Fandy Ramadhan",
    metaDescription:
      "SaaS motion designer in Indonesia specializing in After Effects, Lottie micro-interactions, and explainer videos that make SaaS products feel alive and premium.",
    h1: "SaaS Motion Design & Explainer Videos",
    subtitle:
      "After Effects motion, Lottie micro-interactions, and product explainer videos that make SaaS products feel alive.",
    icon: Clapperboard,
    intro:
      "Motion is what separates functional products from premium ones. I design and animate SaaS motion in After Effects, produce Lottie micro-interactions for developer handoff, and create explainer videos that accelerate B2B onboarding by 3x compared to written documentation. Available for one-off motion projects or ongoing motion design engagement.",
    whatIDo: [
      "SaaS product motion (onboarding flows, state transitions, loading states)",
      "Micro-interactions in After Effects exported to Lottie JSON for developers",
      "Product explainer videos for marketing, sales, and onboarding",
      "Hero section motion and attention-grabbing animations",
      "Brand motion language and motion design system",
      "Motion design reviews and feedback on existing animations",
    ],
    keywords: [
      "SaaS Motion Designer",
      "Motion Designer",
      "After Effects Designer",
      "Explainer Video Designer",
      "Lottie Animation",
      "Product Motion Design",
    ],
    relatedProjects: ["qfast", "speakeasy", "lulladream"],
    faqs: [
      {
        question: "What's the typical turnaround for motion work?",
        answer:
          "A 30-second explainer video usually takes 2 to 3 weeks from script to final render. Micro-interactions are faster, around 1 to 5 business days per interaction depending on complexity.",
      },
      {
        question: "Can you deliver Lottie JSON for developers?",
        answer:
          "Yes. I work with developers daily, so I deliver Lottie files that work out of the box in React, React Native, and web. Supporting docs and usage examples included.",
      },
      {
        question: "Do you also design the UI for the motion?",
        answer:
          "Yes. I can design and animate, or just animate based on your existing UI files. Owning both sides keeps motion consistent with the design system.",
      },
    ],
  },
  "ai-assisted-design": {
    slug: "ai-assisted-design",
    metaTitle:
      "AI-Assisted Design & Development | Fandy Ramadhan",
    metaDescription:
      "AI-assisted product design and frontend development with Claude, Gemini, ChatGPT, Figma Make, and Cursor. Iteration cycles compressed from weeks to days.",
    h1: "AI-Assisted Design & Frontend Development",
    subtitle:
      "Ship faster with a design workflow built on Claude, Gemini, Figma Make, and Cursor.",
    icon: Bot,
    intro:
      "AI isn't a gimmick in my workflow, it's how I ship. Claude and Gemini help me refine problem statements and synthesize research. Figma Make lets me explore three design directions in the time others build one. Claude and Cursor accelerate frontend slicing so designs reach production in hours instead of days. If your team wants to move faster without sacrificing craft, this is what I do.",
    whatIDo: [
      "AI-assisted research synthesis using Claude and Gemini",
      "Parallel UI exploration with Figma Make across learning paths, onboarding flows, and more",
      "AI-assisted frontend slicing with Claude, Cursor, and React/Tailwind",
      "Design QA powered by multimodal AI feedback loops",
      "Workflow consulting for teams adopting AI tools for design and engineering",
      "Proof of concept development for AI-native product features",
    ],
    keywords: [
      "AI-Assisted Design",
      "AI Design Workflow",
      "AI-Assisted Development",
      "Claude AI Design",
      "Figma Make Designer",
      "AI Frontend Developer",
    ],
    relatedProjects: ["lulladream", "speakeasy", "kimee", "booksnap"],
    faqs: [
      {
        question: "Is AI-generated output reliable for production?",
        answer:
          "Not automatically. AI accelerates exploration and slicing, but I still review, refine, and ship every deliverable as the responsible designer. The result is faster iteration without lower quality.",
      },
      {
        question: "Can you train my team to use AI in their workflow?",
        answer:
          "Yes. I run short workshops and ongoing mentoring sessions covering Claude, Gemini, Figma Make, and Cursor for design and engineering teams. Let's talk on WhatsApp about your team's needs.",
      },
      {
        question: "What kind of time savings should we expect?",
        answer:
          "Typical projects: iteration cycles from weeks to days, UI exploration from one direction to three in parallel, slicing from days to hours. Results depend on scope and team readiness.",
      },
    ],
  },
};

export const serviceSlugs = Object.keys(servicesData) as ServiceSlug[];
