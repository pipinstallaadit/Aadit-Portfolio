import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'responsibilities', label: 'Responsibilities' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Functional: Fixed navigation with backdrop blur for clarity */}
      {/* Aesthetic: Smooth transition on scroll, shadow for depth */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Communicable: Clear brand identity */}
            <button
              onClick={() => scrollToSection('hero')}
              className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-smooth"
            >
              Aadit<span className="text-gradient">Pujari</span>
            </button>

            {/* Desktop Navigation - Principle: Repetition and Alignment */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-smooth ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-secondary hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button - Affordance: Clear interactive element */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Responsive design requirement */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-smooth ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-secondary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
