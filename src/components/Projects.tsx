import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: '2D Car Simulation with Genetic Algorithms',
      description:
        'Implemented a sophisticated neural network-driven car simulation using genetic algorithms for autonomous navigation. Features include real-time evolution visualization, collision detection, and performance metrics tracking.',
      technologies: ['Python', 'Neural Networks', 'Genetic Algorithms', 'PyGame'],
      github: 'https://github.com/aaditpujari',
      highlights: ['AI-Powered Navigation', 'Real-time Evolution', 'Performance Analytics'],
    },
    {
      title: 'Sustainable Travel Planner',
      description:
        'Developed a comprehensive travel planning application focused on eco-friendly routes and carbon footprint reduction. Integrates multiple transportation APIs to suggest optimal sustainable travel options.',
      technologies: ['React', 'Node.js', 'API Integration', 'MongoDB'],
      github: 'https://github.com/aaditpujari',
      highlights: ['Carbon Tracking', 'Multi-modal Transport', 'Route Optimization'],
    },
    {
      title: 'PersonalAIs: Mood Music Assistant',
      description:
        'Created an intelligent music recommendation system that adapts to user mood through sentiment analysis. Features real-time emotion detection and dynamic playlist generation.',
      technologies: ['Python', 'TensorFlow', 'Spotify API', 'NLP'],
      github: 'https://github.com/aaditpujari',
      highlights: ['Sentiment Analysis', 'ML-Powered Recommendations', 'Real-time Adaptation'],
    },
  ];

  return (
    // Rule of Thirds: Middle third placement - main content focus area
    <div className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Communicable: Clear section header with visual hierarchy */}
        {/* Contrast: Large bold title stands out from content */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, sustainability, and user experience
          </p>
        </div>

        {/* Gestalt: Similarity - cards grouped for visual consistency */}
        {/* Alignment: Grid layout maintains order and balance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            // Functional: Interactive project cards with hover effects
            // Aesthetic: Elevated cards with shadows and rounded corners
            <Card
              key={index}
              className="group hover-lift bg-card border-border shadow-lg overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                {/* Proportion: Title positioned at top for visual balance */}
                <CardTitle className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Gestalt: Proximity - technologies grouped together */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs font-medium px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Communicable: Key features highlighted */}
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Key Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Affordance: Buttons clearly indicate interactivity */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 shadow-md hover-scale"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="mr-2" size={16} />
                      View Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover-scale"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
