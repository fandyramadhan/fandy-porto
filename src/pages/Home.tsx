import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { useScrollAnimations } from "../hooks/useScrollAnimations";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import MotionShowcase from "../components/MotionShowcase";
import AIWorkflow from "../components/AIWorkflow";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Awards from "../components/Awards";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  useSmoothScroll();
  useScrollAnimations();
  useDocumentMeta({
    title: "Fandy Ramadhan · Senior Product Designer",
    description:
      "Senior Product Designer with 7+ years shipping SaaS products end to end. Design, motion, and frontend code accelerated by AI workflows with Claude, Gemini, and Figma Make.",
    canonicalPath: "/",
  });

  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <MotionShowcase />
        <AIWorkflow />
        <Experience />
        <Awards />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
