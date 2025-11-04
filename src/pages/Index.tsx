import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Responsibilities from '@/components/Responsibilities';
import Contact from '@/components/Contact';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'education', 'skills', 'responsibilities', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Functional Requirement: Intuitive navigation with smooth scrolling */}
      <Navigation activeSection={activeSection} />
      
      {/* Rule of Thirds: Top Third - Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Rule of Thirds: Middle Third - Projects & Education (Main Focus) */}
      <section id="projects">
        <Projects />
      </section>

      <section id="education">
        <Education />
      </section>

      {/* Rule of Thirds: Bottom Third - Skills & Responsibilities */}
      <section id="skills">
        <Skills />
      </section>

      <section id="responsibilities">
        <Responsibilities />
      </section>

      {/* Communicable: Contact section with clear call-to-action */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Index;
