'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from './PortfolioCard';
import { Button } from '@/components/ui/button';

interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  year: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  featured?: boolean;
}

const PortfolioGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', count: 12 },
    { id: 'cinematic', label: 'Cinematic', count: 4 },
    { id: 'events', label: 'Events', count: 3 },
    { id: 'commercial', label: 'Commercial', count: 3 },
    { id: 'music', label: 'Music', count: 2 }
  ];

  const projects: PortfolioProject[] = [
    {
      id: 1,
      title: "The Last Frame",
      category: "Cinematic",
      year: "2025",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1516204877951-7a58c496a8b8?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "A powerful short film exploring the boundaries between reality and imagination through stunning visual storytelling."
    },
    {
      id: 2,
      title: "Bloom Tech Launch",
      category: "Commercial",
      year: "2025",
      duration: "1:30",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Dynamic commercial spot for Bloom Tech's innovative product launch, featuring sleek visuals and compelling narrative."
    },
    {
      id: 3,
      title: "Dream Wedding Highlights",
      category: "Events",
      year: "2025",
      duration: "4:20",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Emotional wedding highlights capturing the essence of love and celebration through cinematic editing."
    },
    {
      id: 4,
      title: "Lunar Echoes",
      category: "Music",
      year: "2024",
      duration: "3:15",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Music video for Lunar Echoes' latest single, blending surreal visuals with rhythmic editing techniques."
    },
    {
      id: 5,
      title: "Urban Symphony",
      category: "Cinematic",
      year: "2024",
      duration: "5:00",
      thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "A visual journey through city life, capturing the rhythm and energy of urban environments."
    },
    {
      id: 6,
      title: "Tech Summit 2024",
      category: "Events",
      year: "2024",
      duration: "2:45",
      thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Dynamic coverage of the annual Tech Summit, featuring keynote speakers and innovative presentations."
    },
    {
      id: 7,
      title: "Fashion Forward",
      category: "Commercial",
      year: "2024",
      duration: "1:45",
      thumbnail: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "High-fashion commercial showcasing the latest collection with artistic cinematography."
    },
    {
      id: 8,
      title: "Neon Dreams",
      category: "Music",
      year: "2024",
      duration: "3:30",
      thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Electronic music video featuring neon-lit visuals and syncopated editing patterns."
    },
    {
      id: 9,
      title: "Corporate Excellence",
      category: "Commercial",
      year: "2023",
      duration: "2:15",
      thumbnail: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Professional corporate video highlighting company achievements and team culture."
    },
    {
      id: 10,
      title: "Summer Festival",
      category: "Events",
      year: "2023",
      duration: "3:00",
      thumbnail: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Vibrant festival coverage capturing the energy and excitement of summer celebrations."
    },
    {
      id: 11,
      title: "Silent Streets",
      category: "Cinematic",
      year: "2023",
      duration: "4:15",
      thumbnail: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Mysterious cinematic short exploring empty city streets with dramatic lighting and mood."
    },
    {
      id: 12,
      title: "Horizon",
      category: "Cinematic",
      year: "2023",
      duration: "6:00",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
      videoUrl: "#",
      description: "Epic landscape cinematography showcasing natural beauty and dramatic horizons."
    }
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category.toLowerCase() === activeFilter);
  }, [activeFilter]);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <PortfolioCard 
                key={`${project.id}-${activeFilter}`} 
                project={project} 
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-none font-medium transition-all duration-300 hover:scale-105"
            >
              Load More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export { PortfolioGrid };