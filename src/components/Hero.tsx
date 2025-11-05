import { ArrowRight, Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePicture from '@/assets/profile-picture.png';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Rule of Thirds: Top third placement, visual weight at intersection points
    // Aesthetic: Gradient background with subtle animation
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[hsl(270,50%,15%)] via-[hsl(275,55%,20%)] to-[hsl(280,60%,25%)]">
      {/* Aesthetic: Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,50%,10%)] to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(280,70%,30%),transparent_70%)]" />
      
      {/* Aesthetic: Decorative animated orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[hsl(285,75%,60%)]/30 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(280,70%,65%)]/25 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Proportion: Centered content aligned to rule of thirds grid */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          {/* Aesthetic: Profile picture with elegant styling */}
          {/* Rule of Thirds: Positioned at upper intersection point */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[hsl(285,75%,60%)]/60 to-[hsl(280,70%,70%)]/60 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-smooth animate-glow-pulse" />
              <img
                src={profilePicture}
                alt="Aadit Pujari"
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white/30 shadow-2xl group-hover:scale-105 transition-smooth"
              />
            </div>
          </div>

          {/* Communicable: Clear hierarchy with name as primary element */}
          <div className="space-y-3 sm:space-y-4">
            <p className="text-white/80 text-base sm:text-lg font-medium tracking-wide uppercase">
              Computer Engineering Student
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Aadit Pujari
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light">
              B.Tech, VJTI Mumbai
            </p>
          </div>

          {/* Communicable: Brief, impactful description */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
            Passionate about AI/ML and building innovative solutions. 
            Exploring the intersection of technology and finance.
          </p>

          {/* Functional: Interactive contact buttons with clear affordance */}
          {/* Gestalt: Proximity - buttons grouped for related actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-8 animate-fade-in-delayed px-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-[hsl(270,70%,40%)] hover:bg-white/90 shadow-xl hover-lift font-semibold text-base sm:text-lg px-6 sm:px-8"
            >
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Affordance: Icon buttons with hover states */}
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-[hsl(270,70%,40%)] transition-smooth shadow-lg h-12 w-12"
                asChild
              >
                <a href="mailto:appujari80@gmail.com" aria-label="Email">
                  <Mail size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-[hsl(270,70%,40%)] transition-smooth shadow-lg h-12 w-12"
                asChild
              >
                <a href="https://linkedin.com/in/aaditpujari" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-[hsl(270,70%,40%)] transition-smooth shadow-lg h-12 w-12"
                asChild
              >
                <a href="https://github.com/pipinstallaadit" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-[hsl(270,70%,40%)] transition-smooth shadow-lg h-12 w-12"
                asChild
              >
                <a href="tel:+919372459337" aria-label="Phone">
                  <Phone size={20} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic: Scroll indicator for discoverability */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
