import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Project from "./components/Project";
import CertificateAndBadges from "./components/CertificateAndBadges";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Section */}
      <div className="fixed top-0 -z-10 h-full w-full bg-neutral-950">
        {/* Animated Radial Gradient */}
        <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.5),rgba(255,255,255,0))] animate-gradient-x"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Content Sections */}
      <div className="container mx-auto px-4 lg:px-8 mt-[72px]">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Technologies Section */}
        <Technology />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Project />

        {/* Certificates & Badges Section */}
        <CertificateAndBadges />

        {/* Education Section */}
        <Education />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}
