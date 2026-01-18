import { HeroSection } from '@/components/sections/hero-section';
import { AboutSkillsSection } from '@/components/sections/about-skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
