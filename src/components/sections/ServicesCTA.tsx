'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MessageSquare } from 'lucide-react';

const ServicesCTA = () => {
  const navigateToContact = () => {
    window.location.href = '/contact';
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
            Every Vision Deserves to Be{' '}
            <span className="text-primary">Seen</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's create something cinematic together. Whether you have a detailed brief or just a spark of an idea, 
            I'm here to help bring your story to life with professional expertise and creative passion.
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
            onClick={navigateToContact}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105 group"
          >
            Start a Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="outline"
            onClick={navigateToContact}
            size="lg"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Schedule Consultation
            
          </Button>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-primary/20">
            <Mail className="w-6 h-6 text-primary mb-2" />
            <span className="text-sm font-medium text-foreground">Email</span>
            <span className="text-xs text-muted-foreground">gaudanand2@gmail.com</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-accent/20">
            <Phone className="w-6 h-6 text-accent mb-2" />
            <span className="text-sm font-medium text-foreground">Phone</span>
            <span className="text-xs text-muted-foreground">+91 9136970848</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card/20 backdrop-blur-sm border border-secondary/20">
            <MessageSquare className="w-6 h-6 text-secondary mb-2" />
            <span className="text-sm font-medium text-foreground">Response Time</span>
            <span className="text-xs text-muted-foreground">Within 24 hours</span>
          </div>
        </motion.div>

        {/* Geometric accent indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-12 text-muted-foreground"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;