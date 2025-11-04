import { Code2, Wrench, Layers } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML/CSS'],
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      skills: ['React', 'Node.js', 'Express', 'TensorFlow', 'PyTorch', 'Django', 'FastAPI', 'Tailwind CSS'],
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'Docker', 'MongoDB', 'PostgreSQL', 'AWS', 'Firebase', 'Figma', 'VS Code'],
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
  ];

  return (
    // Rule of Thirds: Bottom third begins - supporting content
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Communicable: Clear section header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </div>

        {/* Gestalt: Similarity - consistent card design creates unity */}
        {/* Balance: Grid layout distributes visual weight evenly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            // Functional: Interactive cards with hover effects
            // Aesthetic: Rounded corners, shadows, and color accents
            <Card
              key={index}
              className="bg-card border-border shadow-lg hover-lift overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className={`${category.bgColor} pb-6`}>
                {/* Contrast: Icon and title create visual hierarchy */}
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${category.color}`}>
                    <category.icon size={28} strokeWidth={2} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                {/* Gestalt: Proximity - skills grouped by category */}
                {/* Repetition: Consistent badge styling */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    // Affordance: Badge design implies static information
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-sm font-medium px-3 py-1.5 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Communicable: Additional context for technical expertise */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-in-delayed">
          <Card className="bg-gradient-to-br from-primary/5 to-primary-glow/5 border-primary/20 shadow-lg max-w-3xl mx-auto">
            <CardContent className="py-8 sm:py-10 px-6 sm:px-8">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                Continuously expanding my technical expertise through hands-on projects, online courses, 
                and active participation in the developer community. Passionate about staying current 
                with emerging technologies and best practices in software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;
