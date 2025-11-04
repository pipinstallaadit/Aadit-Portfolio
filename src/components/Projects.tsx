import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: '2D Car Simulation with Genetic Algorithms',
      description:
        'Developed a 2D car simulation using p5.js for visuals and plank.js for physics, including collision detection, impulses, and joint constraints. Implemented genetic algorithms to evolve car designs through fitness evaluation, crossover, and mutation, enhancing stability and range.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'p5.js', 'plank.js'],
      github: 'https://github.com/pipinstallaadit/2D-Car-Simulator',
      highlights: [
        'Physics-based Simulation',
        'Genetic Algorithm Optimization',
        'Adaptive Vehicle Design',
      ],
    },
    {
      title: 'Sustainable Travel Planner',
      description:
        'Developed a personalized itinerary generator that tailors travel plans based on user preferences. Integrated carbon footprint calculations to suggest eco-friendly options and implemented Agentic AI for real-time itinerary adjustment based on weather and safety.',
      technologies: ['Python', 'LangChain', 'Flask', 'Agentic AI'],
      github: 'https://github.com/YashviMehta03/travelplanner',
      highlights: [
        'Personalized Itineraries',
        'Carbon Footprint Tracking',
        'Real-time AI Adjustments',
      ],
    },
    {
      title: 'PersonalAIs: Mood Music Assistant',
      description:
        'Built an empathetic conversational music assistant using Streamlit and LangChain to generate personalized playlists from user mood and musical preferences. Integrated Spotify OAuth/API for seamless playlist creation and adaptive user experience.',
      technologies: ['Python', 'LangChain', 'Spotify API', 'Streamlit'],
      github: 'https://github.com/pipinstallaadit/PersonalAIs',
      highlights: [
        'Mood-based Playlist Generation',
        'Spotify Integration',
        'Adaptive Conversation Engine',
      ],
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
