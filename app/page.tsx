import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import WorksSection from './components/WorksSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorksSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </>
  );
}