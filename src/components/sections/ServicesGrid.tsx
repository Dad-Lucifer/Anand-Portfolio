'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from './ServiceCard';
import { 
  Video, 
  Scissors, 
  Palette, 
  Camera, 
  Briefcase, 
  Calendar
} from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

const ServicesGrid: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Cinematic Videography",
      description: "Capture visuals that feel immersive and emotionally resonant with professional-grade equipment and artistic vision.",
      icon: <Video className="w-8 h-8" />,
      features: [
        "4K/6K video capture",
        "Professional lighting setups",
        "Creative composition",
        "Story-driven shooting"
      ],
      color: "text-primary"
    },
    {
      id: 2,
      title: "Editing & Post-Production",
      description: "From raw footage to cinematic storytelling through expert editing and seamless narrative construction.",
      icon: <Scissors className="w-8 h-8" />,
      features: [
        "Professional editing software",
        "Seamless transitions",
        "Pacing and rhythm",
        "Story structure optimization"
      ],
      color: "text-accent"
    },
    {
      id: 3,
      title: "Color Grading",
      description: "Enhance tone, contrast, and mood to match your vision with professional color correction and grading.",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "Color correction",
        "Mood enhancement",
        "Consistent visual style",
        "Cinematic color palettes"
      ],
      color: "text-secondary"
    },
    {
      id: 4,
      title: "Drone Footage",
      description: "Aerial perspectives that elevate your storytelling with stunning drone cinematography and smooth movements.",
      icon: <Camera className="w-8 h-8" />,
      features: [
        "4K aerial footage",
        "Smooth gimbal movements",
        "Creative aerial angles",
        "Licensed drone operation"
      ],
      color: "text-primary"
    },
    {
      id: 5,
      title: "Commercial & Branding Videos",
      description: "Crafting visual identity for brands through compelling commercial content that drives engagement.",
      icon: <Briefcase className="w-8 h-8" />,
      features: [
        "Brand storytelling",
        "Product showcases",
        "Corporate messaging",
        "Social media optimization"
      ],
      color: "text-accent"
    },
    {
      id: 6,
      title: "Event Highlights",
      description: "Turning memorable moments into timeless visuals with expert event coverage and highlight editing.",
      icon: <Calendar className="w-8 h-8" />,
      features: [
        "Multi-camera coverage",
        "Real-time editing",
        "Highlight reels",
        "Full event documentation"
      ],
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive videography and editing solutions tailored to bring your creative vision to life
          </p>
        </motion.div>

        {/* Services Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>

        {/* Additional Services Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Custom Solutions Available
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every project is unique. I offer customized packages tailored to your specific needs, budget, and creative vision. Let's discuss how we can bring your story to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 border-2 border-primary rounded-full" />
                <span>Flexible Pricing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-accent" />
                <span>Custom Packages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-4 h-4 border-2 border-secondary" />
                <span>Professional Quality</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ServicesGrid };