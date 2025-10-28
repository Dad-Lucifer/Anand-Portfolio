'use client';

import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      {/* Geometric shapes - Squid Game inspired */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Triangle accent in corner */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.15 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-10 right-10 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] md:border-l-[60px] md:border-l-transparent md:border-r-[60px] md:border-r-transparent md:border-b-[100px] border-b-primary"
        />
        
        {/* Square accent */}
        <motion.div
          initial={{ rotate: 45, scale: 0, opacity: 0 }}
          animate={{ rotate: 45, scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute bottom-10 left-10 w-16 h-16 md:w-24 md:h-24 border-4 border-secondary"
        />
        
        {/* Circle accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute top-1/3 left-1/4 w-20 h-20 md:w-32 md:h-32 border-4 border-accent rounded-full"
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
            The Story Behind{' '}
            <span className="text-primary">the Lens</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Every frame I edit, every story I tell — reflects the power of perspective.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-primary rounded-full" />
            <span className="text-sm font-medium">Vision</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-accent" />
            <span className="text-sm font-medium">Creativity</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-secondary" />
            <span className="text-sm font-medium">Precision</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;