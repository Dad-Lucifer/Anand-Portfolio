import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedVideos from '@/components/sections/FeaturedVideos';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <FeaturedVideos />
      
      {/* Contact Section */}
      <section id="contact" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5 w-full">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Have a project in mind? Let's create something remarkable together.
          </p>
          
          {/* Responsive Button Container */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center px-2">
            <a 
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-none px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              Learn More About Me
            </a>
            <a 
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-none px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              View Services
            </a>
            <a 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-none px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Get In Touch
            </a>
          </div>
          
          {/* Additional responsive elements for better mobile experience */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Available for projects</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;