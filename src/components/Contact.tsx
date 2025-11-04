import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'appujari80@gmail.com',
      href: 'appujari80@gmail.com',
      color: 'text-red-500',
      bgColor: 'bg-red-50 dark:bg-red-950/30',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 93724 59337',
      href: 'tel:+919372459337',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/30',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aaditpujari',
      href: 'https://linkedin.com/in/aaditpujari',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/30',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/pipinstallaadit',
      href: 'https://github.com/pipinstallaadit',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/30',
    },
  ];

  return (
    // Rule of Thirds: Bottom third - contact and footer
    <div className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Communicable: Clear call-to-action header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        {/* Gestalt: Proximity - contact methods grouped logically */}
        {/* Balance: Grid creates symmetrical visual weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
          {contactLinks.map((contact, index) => (
            // Functional: Interactive contact cards with clear affordance
            // Aesthetic: Color-coded cards with hover effects
            <Card
              key={index}
              className={`${contact.bgColor} border-border shadow-md hover-lift animate-fade-in overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block space-y-3"
                >
                  {/* Contrast: Icon provides visual anchor */}
                  <div className={`${contact.color} mb-3`}>
                    <contact.icon size={32} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      {contact.label}
                    </p>
                    <p className="text-sm font-medium text-foreground break-words">
                      {contact.value}
                    </p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Communicable: Primary call-to-action button */}
        {/* Affordance: Large button clearly indicates primary action */}
        <div className="text-center animate-fade-in-delayed">
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground hover:shadow-glow transition-smooth font-semibold text-lg px-8 py-6 rounded-xl"
            asChild
          >
            <a href="mailto:aaditpujari@gmail.com" className="flex items-center gap-2">
              <Send size={20} />
              Send Me an Email
            </a>
          </Button>
        </div>

        {/* Aesthetic: Footer with copyright and branding */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Aadit Pujari. Designed with attention to Human-Computer Interaction principles.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
