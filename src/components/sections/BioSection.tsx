'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Camera, Edit3, Award } from 'lucide-react';

// Import the image from its relative path
import photu from "../assets-video/photu.png";

const BioSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
              {/* Main portrait image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ 
                  // CORRECTED: Use 'photu' directly, not 'photu.src'
                  backgroundImage: `url(${photu})` 
                }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Floating badges */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute top-4 left-4"
              >
                <Badge className="bg-primary/90 text-primary-foreground px-3 py-1">
                  <Camera className="w-3 h-3 mr-1" />
                  5+ Years Experience
                </Badge>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute bottom-4 right-4"
              >
                <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground px-3 py-1">
                  <Award className="w-3 h-3 mr-1" />
                  Award-Winning Editor
                </Badge>
              </motion.div>
              
              {/* Geometric accent */}
              <motion.div
                initial={{ rotate: 45, scale: 0 }}
                whileInView={{ rotate: 45, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 w-24 h-24 border-4 border-accent/30 z-10"
              />
            </div>
          </motion.div>

          {/* Right Column - Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Crafting <span className="text-primary">Visual Stories</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mb-6" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
With over 5 years in the creative industry, I've worked across model shoots, events, weddings, and property shoots, capturing moments that tell a story.              </p>
              
              <p className="text-lg">
                My goal is to create visuals that feel alive — blending cinematic composition, sound, and emotion. My journey began with an Android phone, experimenting with landscape and portrait videography, and understanding the power of visual storytelling.
              </p>
              
              <p className="text-lg">
                Today, I specialize in shooting clips and transforming them into compelling narratives that resonate with audiences and drive results. Every project is an opportunity to push creative boundaries while maintaining the perfect balance between artistic vision and commercial objectives.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <Edit3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">Precision</h3>
                <p className="text-xs text-muted-foreground mt-1">Every frame matters</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-accent/10 rounded-full flex items-center justify-center">
                  <Camera className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">Passion</h3>
                <p className="text-xs text-muted-foreground mt-1">Driven by creativity</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Edit3 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">Vision</h3>
                <p className="text-xs text-muted-foreground mt-1">Seeing the story</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BioSection;