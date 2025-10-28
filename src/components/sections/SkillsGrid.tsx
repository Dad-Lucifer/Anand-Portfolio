'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Video, 
  Palette, 
  Camera, 
  Film, 
  Music, 
  Layers,
  Zap,
  Eye,
  Scissors
} from 'lucide-react';

interface Skill {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const SkillsGrid = () => {
  const skills: Skill[] = [
    {
      id: 1,
      title: "Cinematic Editing",
      description: "Professional video editing with dramatic pacing and visual storytelling",
      icon: <Scissors className="w-6 h-6" />,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Color Grading",
      description: "Advanced color correction and grading for cinematic aesthetics",
      icon: <Palette className="w-6 h-6" />,
      color: "text-accent"
    },
    {
      id: 3,
      title: "Drone Videography",
      description: "Aerial cinematography and drone footage capture and editing",
      icon: <Camera className="w-6 h-6" />,
      color: "text-secondary"
    },
    {
      id: 4,
      title: "Storyboarding",
      description: "Visual planning and shot sequencing for optimal storytelling",
      icon: <Film className="w-6 h-6" />,
      color: "text-primary"
    },
    {
      id: 5,
      title: "Sound Syncing",
      description: "Audio synchronization and sound design for enhanced impact",
      icon: <Music className="w-6 h-6" />,
      color: "text-accent"
    },
    {
      id: 6,
      title: "Motion Graphics",
      description: "Dynamic titles, transitions, and visual effects integration",
      icon: <Zap className="w-6 h-6" />,
      color: "text-secondary"
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
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiency and creative capabilities that bring your vision to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-0 hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <div className={skill.color}>
                      {skill.icon}
                    </div>
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-primary to-accent mt-4"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card/30 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-border" />
              
              <div className="flex items-center gap-3">
                <Video className="w-8 h-8 text-accent" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">20+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-border" />
              
              <div className="flex items-center gap-3">
                <Layers className="w-8 h-8 text-secondary" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;