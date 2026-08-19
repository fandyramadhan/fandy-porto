import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const Event = lazy(() => import("./pages/Event"));
const EventPortfolio = lazy(() => import("./pages/EventPortfolio"));

const ProjectDetailWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return <ProjectDetail key={id} />;
};

const RouteFallback = () => (
  <div className="min-h-screen bg-bg flex items-center justify-center">
    <div className="text-text-muted text-sm">Loading…</div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetailWrapper />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event-portfolio" element={<EventPortfolio />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
