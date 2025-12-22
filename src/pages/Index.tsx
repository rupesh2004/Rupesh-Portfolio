import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import CertificationsSection from "@/components/sections/certifications.tsx";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Rupeshkumar Bhosale | Full Stack Developer & Mobile App Expert</title>
        <meta
          name="description"
          content="Full Stack Web Developer and Android/Flutter Expert with experience at MKCL, GDG, and more. Building scalable web and mobile applications with React, Node.js, and Flutter."
        />
        <meta
          name="keywords"
          content="Rupeshkumar Bhosale, Full Stack Developer, Android Developer, Flutter Developer, React, Node.js, Web Developer, Mobile Developer, MERN Stack"
        />
        <meta name="author" content="Rupeshkumar Bhosale" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rupeshkumar.dev" />
        <meta property="og:title" content="Rupeshkumar Bhosale | Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Web Developer and Android/Flutter Expert building scalable applications."
        />
        <meta property="og:image" content="https://rupeshkumar.dev/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rupeshkumar.dev" />
        <meta property="twitter:title" content="Rupeshkumar Bhosale | Full Stack Developer" />
        <meta
          property="twitter:description"
          content="Full Stack Web Developer and Android/Flutter Expert building scalable applications."
        />
        <meta property="twitter:image" content="https://rupeshkumar.dev/og-image.png" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://rupeshkumar.dev" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
            <CertificationsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
