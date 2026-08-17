import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from "next-themes";
import { CyberBackground } from "./components/layout/CyberBackground";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { StatsSection } from "./components/sections/StatsSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ProjectDetailPage } from "./pages/ProjectDetailPage";

const HomePage: FC = () => {
  return (
    <div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      style={{ fontFamily: 'var(--font-body)' }}
    >
      <CyberBackground />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <ExperienceSection />
        <EducationSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const App: FC = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;