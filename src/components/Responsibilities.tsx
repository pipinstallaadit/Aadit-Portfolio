import { Users, TrendingUp, Code, Megaphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Responsibilities = () => {
  const responsibilities = [
    {
      organization: 'Project X',
      role: 'Core Technical Team Member',
      duration: '2023 - Present',
      icon: Code,
      description:
        'Part of the core technical team developing innovative software solutions. Leading development of key features, conducting code reviews, and mentoring junior developers.',
      contributions: [
        'Architected and implemented major product features',
        'Established coding standards and best practices',
        'Mentored 5+ team members in modern development practices',
        'Reduced deployment time by 40% through CI/CD automation',
      ],
      color: 'text-blue-500',
      bgGradient: 'from-blue-500/10 to-blue-600/5',
    },
    {
      organization: 'Pratibimb',
      role: 'Marketing Executive',
      duration: '2022 - 2023',
      icon: Megaphone,
      description:
        'Led marketing initiatives and social media campaigns to increase brand awareness and engagement. Coordinated events and managed digital content strategy.',
      contributions: [
        'Increased social media engagement by 150%',
        'Organized 10+ successful technical events',
        'Managed content strategy across multiple platforms',
        'Collaborated with 20+ sponsors and partners',
      ],
      color: 'text-green-500',
      bgGradient: 'from-green-500/10 to-green-600/5',
    },
  ];

  return (
    // Rule of Thirds: Bottom third - supporting content area
    <div className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Communicable: Clear section header with visual hierarchy */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Leadership & <span className="text-gradient">Responsibilities</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to technical and organizational growth through active involvement
          </p>
        </div>

        {/* Balance: Two-column layout for visual equilibrium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {responsibilities.map((resp, index) => (
            // Functional: Interactive cards with detailed information
            // Aesthetic: Gradient backgrounds and shadows
            <Card
              key={index}
              className={`bg-gradient-to-br ${resp.bgGradient} border-border shadow-lg hover-lift animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                {/* Contrast: Icon and role create visual emphasis */}
                <div className="flex items-start gap-4 mb-3">
                  <div className={`${resp.color} mt-1`}>
                    <resp.icon size={32} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                      {resp.organization}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <p className="text-base sm:text-lg font-semibold text-primary">
                        {resp.role}
                      </p>
                      <span className="hidden sm:inline text-muted-foreground">•</span>
                      <p className="text-sm text-muted-foreground">
                        {resp.duration}
                      </p>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  {resp.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                {/* Gestalt: Proximity - contributions grouped together */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Users size={18} className="text-primary" />
                    <p className="text-sm font-semibold text-foreground">Key Contributions:</p>
                  </div>
                  <ul className="space-y-2.5">
                    {resp.contributions.map((contribution, contIndex) => (
                      // Repetition: Consistent list styling
                      <li
                        key={contIndex}
                        className="flex items-start gap-3 text-sm sm:text-base text-foreground/90"
                      >
                        {/* Affordance: Checkmark indicates completed achievements */}
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="flex-1">{contribution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Communicable: Additional context about involvement */}
        <div className="mt-12 text-center animate-fade-in-delayed">
          <Card className="bg-card border-border shadow-lg max-w-3xl mx-auto">
            <CardContent className="py-8 sm:py-10 px-6 sm:px-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="text-primary" size={28} />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Continuous Growth
                </h3>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Actively seeking new opportunities to contribute, learn, and make a positive impact 
                through technical expertise and collaborative leadership.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Responsibilities;
