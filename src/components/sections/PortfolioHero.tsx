'use client';

import { motion } from 'framer-motion';

const PortfolioHero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      {/* Geometric shapes - Squid Game inspired */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Triangle accent in top-right */}
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.12 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-10 right-10 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[85px] md:border-l-[70px] md:border-l-transparent md:border-r-[70px] md:border-r-transparent md:border-b-[120px] border-b-primary"
        />
        
        {/* Circle accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.08 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute bottom-20 left-20 w-24 h-24 md:w-32 md:h-32 border-4 border-accent rounded-full"
        />
        
        {/* Square accent */}
        <motion.div
          initial={{ rotate: 45, scale: 0, opacity: 0 }}
          animate={{ rotate: 45, scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute top-1/3 right-1/4 w-20 h-20 md:w-28 md:h-28 border-4 border-secondary"
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
            My <span className="text-primary">Work</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          A glimpse into the worlds I've helped bring to life.
        </motion.p>

        {/* Geometric divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          <div className="w-8 h-8 border-2 border-primary/50 rounded-full hover:border-primary transition-colors duration-300" />
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[18px] border-b-accent/50 hover:border-accent transition-colors duration-300" />
          <div className="w-8 h-8 border-2 border-secondary/50 hover:border-secondary transition-colors duration-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;