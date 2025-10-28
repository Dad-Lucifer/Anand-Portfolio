'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactCTA = () => {
  const navigate = useNavigate();

  const navigateToPortfolio = () => {
    navigate('/portfolio');
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-primary/10" />
      
      {/* Geometric shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.05 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-primary rounded-full"
        />
        
        {/* Triangle */}
        <motion.div
          initial={{ rotate: 180, opacity: 0 }}
          whileInView={{ rotate: 0, opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-10 right-20 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-accent"
        />
        
        {/* Square */}
        <motion.div
          initial={{ rotate: 45, scale: 0, opacity: 0 }}
          whileInView={{ rotate: 45, scale: 1, opacity: 0.06 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute top-20 left-20 w-32 h-32 border-4 border-secondary"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Every Frame Begins with a{' '}
            <span className="text-primary">Conversation</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's start ours. Whether you have a detailed brief or just a spark of an idea, I'm here to listen, collaborate, and create something extraordinary together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            onClick={navigateToPortfolio}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105 group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Thank You for Visiting
          </h3>
          <p className="text-muted-foreground mb-6">
            I appreciate you taking the time to explore my work. Every project is an opportunity to create something meaningful, and I'd be honored to discuss how we can collaborate on your next vision.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-primary/50 rounded-full hover:border-primary transition-colors duration-300" />
              <span className="text-sm font-medium hover:text-primary transition-colors duration-300">Creative</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-accent/50 hover:border-accent transition-colors duration-300" />
              <span className="text-sm font-medium hover:text-accent transition-colors duration-300">Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border-2 border-secondary/50 hover:border-secondary transition-colors duration-300" />
              <span className="text-sm font-medium hover:text-secondary transition-colors duration-300">Passionate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;