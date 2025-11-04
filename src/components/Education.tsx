import { GraduationCap, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      institution: 'Veermata Jijabai Technological Institute (VJTI)',
      degree: 'B.Tech in Computer Engineering',
      duration: '2022 - 2026',
      location: 'Mumbai, Maharashtra',
      achievements: [
        { label: 'CGPA', value: '8.9/10.0' },
        { label: 'Department Rank', value: 'Top 10%' },
      ],
      icon: GraduationCap,
    },
    {
      institution: 'Junior College',
      degree: 'HSC (Science)',
      duration: '2020 - 2022',
      location: 'Mumbai, Maharashtra',
      achievements: [
        { label: 'Percentage', value: '94.5%' },
        { label: 'Merit Rank', value: 'Top 5%' },
      ],
      icon: Award,
    },
    {
      institution: 'Secondary School',
      degree: 'SSC',
      duration: '2019 - 2020',
      location: 'Mumbai, Maharashtra',
      achievements: [
        { label: 'Percentage', value: '95.8%' },
        { label: 'Achievement', value: 'School Topper' },
      ],
      icon: TrendingUp,
    },
  ];

  return (
    // Rule of Thirds: Middle third - key content area
    <div className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Communicable: Clear section title with visual emphasis */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Academic <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A strong foundation in computer science and engineering
          </p>
        </div>

        {/* Alignment: Vertical timeline creates visual flow */}
        {/* Gestalt: Continuity - connected elements guide the eye */}
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 relative">
          {/* Aesthetic: Timeline connector line */}
          <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-transparent hidden md:block" />

          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative animate-slide-in-right"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Functional: Interactive card with hover effect */}
              <Card className="bg-card border-border shadow-lg hover-lift overflow-hidden ml-0 md:ml-24">
                {/* Aesthetic: Timeline node indicator */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block" />
                <div className="absolute -left-16 top-6 text-primary hidden md:block">
                  <edu.icon size={32} strokeWidth={1.5} />
                </div>

                <CardHeader>
                  {/* Contrast: Bold institution name vs lighter details */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                        {edu.institution}
                      </CardTitle>
                      <p className="text-base sm:text-lg text-primary font-semibold">
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.location}
                      </p>
                    </div>
                    {/* Balance: Duration aligned to right for visual equilibrium */}
                    <div className="text-sm sm:text-base font-medium text-muted-foreground bg-secondary px-3 sm:px-4 py-2 rounded-lg self-start">
                      {edu.duration}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Gestalt: Proximity - achievements grouped together */}
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    {edu.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="bg-secondary/50 rounded-lg p-4 text-center hover:bg-secondary transition-smooth"
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                          {achievement.label}
                        </p>
                        <p className="text-lg sm:text-xl font-bold text-primary">
                          {achievement.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
