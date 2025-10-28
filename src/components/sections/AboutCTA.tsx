'use client';

// Framer Motion is no longer needed and has been removed
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Mail } from 'lucide-react';

const AboutCTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Using window.location.href for maximum compatibility
  const navigateToHome = () => {
    window.location.href = '/'; // Changed from '/Home' to the standard '/'
  };

  const navigateToContact = () => {
    window.location.href = '/Contact';
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-primary/10" />
      
      {/* Geometric shapes background - now static divs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-primary rounded-full opacity-5"
        />
        
        {/* Triangle */}
        <div
          className="absolute bottom-10 right-20 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-accent opacity-8"
        />
        
        {/* Square */}
        <div
          className="absolute top-20 left-20 w-32 h-32 border-4 border-secondary opacity-6 transform rotate-45"
        />
      </div>

      {/* Main content - now a static div */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Collaborate and Create{' '}
            <span className="text-primary">Something Unforgettable</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Every project is an opportunity to push creative boundaries and tell compelling stories. 
            Whether you need a cinematic commercial, a heartfelt documentary, or dynamic social content, 
            I'm here to bring your vision to life with precision and passion.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={navigateToHome}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105 group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={navigateToContact}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105 group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
        </div>

        {/* Geometric accent indicators - now a static div */}
        <div className="flex items-center justify-center gap-6 mt-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-primary/50 rounded-full hover:border-primary transition-colors duration-300" />
            <span className="text-sm font-medium hover:text-primary transition-colors duration-300">Vision</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-accent/50 hover:border-accent transition-colors duration-300" />
            <span className="text-sm font-medium hover:text-accent transition-colors duration-300">Creativity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-secondary/50 hover:border-secondary transition-colors duration-300" />
            <span className="text-sm font-medium hover:text-secondary transition-colors duration-300">Precision</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;