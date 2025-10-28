'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Camera, 
  Scissors, 
  Send,
  ArrowRight
} from 'lucide-react';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ProcessSection: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Concept & Storyboarding",
      description: "We collaborate to develop your vision, create storyboards, and plan the visual narrative that will bring your story to life.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Production",
      description: "Professional filming with cinematic techniques, proper lighting, and creative composition to capture stunning footage.",
      icon: <Camera className="w-6 h-6" />,
      color: "text-accent"
    },
    {
      id: 3,
      title: "Editing",
      description: "Transforming raw footage into a polished story with seamless transitions, perfect pacing, and emotional impact.",
      icon: <Scissors className="w-6 h-6" />,
      color: "text-secondary"
    },
    {
      id: 4,
      title: "Delivery",
      description: "Final color grading, sound design, and delivery in your preferred format ready for distribution across all platforms.",
      icon: <Send className="w-6 h-6" />,
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Creative <span className="text-primary">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to transforming your vision into cinematic reality
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-secondary transform -translate-y-1/2" />
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number Badge */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="hidden lg:flex absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-background border-2 border-primary rounded-full items-center justify-center z-10"
                >
                  <span className="text-sm font-bold text-primary">{step.id}</span>
                </motion.div>

                {/* Mobile Step Number */}
                <div className="lg:hidden flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{step.id}</span>
                  </div>
                </div>

                {/* Step Content */}
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 lg:mt-8">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4"
                  >
                    <div className={step.color}>
                      {step.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-6 h-6 text-accent" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              From concept to delivery, I'm committed to bringing your vision to life with cinematic excellence and creative storytelling.
            </p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-primary rounded-full" />
                <span className="text-sm font-medium">Collaborative</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-accent" />
                <span className="text-sm font-medium">Creative</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 border-2 border-secondary" />
                <span className="text-sm font-medium">Professional</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ProcessSection };