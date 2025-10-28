import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* 404 Number with animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-8xl sm:text-9xl font-bold text-primary">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl sm:text-3xl font-semibold text-foreground mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground mb-12"
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back to creating something remarkable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link to="/">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Button>
          </Link>

          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 py-6 rounded-none font-medium transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 left-10 w-32 h-32 border-4 border-primary rounded-full"
        />
        
        <motion.div
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 0.1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="absolute bottom-20 right-10 w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-b-[100px] border-b-accent"
        />
        
        <motion.div
          initial={{ rotate: 45, scale: 0, opacity: 0 }}
          animate={{ rotate: 45, scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 1.4 }}
          className="absolute top-1/2 right-1/4 w-24 h-24 border-4 border-secondary"
        />
      </motion.div>
    </div>
  );
};

export default NotFound;