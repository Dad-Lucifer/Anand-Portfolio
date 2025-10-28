'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Mail, ArrowDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      {/* Geometric shapes - Squid Game inspired */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 border-4 border-primary rounded-full"
        />
        
        {/* Triangle */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute bottom-20 right-10 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] md:border-l-[80px] md:border-l-transparent md:border-r-[80px] md:border-r-transparent md:border-b-[140px] border-b-accent"
        />
        
        {/* Square */}
        <motion.div
          initial={{ rotate: 45, scale: 0, opacity: 0 }}
          animate={{ rotate: 45, scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute top-1/2 right-1/4 w-24 h-24 md:w-32 md:h-32 border-4 border-secondary"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-primary">Anand Gaud</span>
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-muted-foreground">
              Creative Videographer & Editor
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting visuals that tell unforgettable stories through cinematic excellence and creative storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('portfolio')}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105"
          >
            <Play className="mr-2 h-5 w-5" />
            View My Work
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={navigateToContact}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection('portfolio')}
        >
          <span className="text-sm font-medium">Let's create something remarkable</span>
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;