'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Eye } from 'lucide-react';
// Fix the import statements - use default imports for images
import image1 from '../assets-video/1.png';
import image2 from '../assets-video/2.png';
import image3 from '../assets-video/3.png';
import image4 from '../assets-video/4.png';

interface VideoProject {
  id: number;
  title: string;
  category: string;
  thumbnail: string; // This should be a string URL
  videoUrl: string;
  description: string;
}

const FeaturedVideos = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const featuredProjects: VideoProject[] = [
    {
      id: 1,
      title: "Commercial",
      category: "Cinematic Edit",
      thumbnail: image1, // Use the imported image directly
      videoUrl: "https://www.instagram.com/reel/DM7vEXZof2g/",
      description: "A stunning visual journey of makeup artistry through cinematic storytelling"
    },
    {
      id: 2,
      title: "Business",
      category: "Promotional",
      thumbnail: image2, // Use the imported image directly
      videoUrl: "https://www.instagram.com/reel/DIgzqHLyqVp/",
      description: "Cinematic storytelling for impactful business branding and promotion"
    },
    {
      id: 3,
      title: "Event Stories",
      category: "Event Highlight",
      thumbnail: image3, // Use the imported image directly
      videoUrl: "https://www.instagram.com/reel/DERaxuvyWZ2/",
      description: "Dynamic event storytelling with compelling visual narratives"
    },
    {
      id: 4,
      title: "Cultural Festival",
      category: "Cultural Edit",
      thumbnail: image4, // Use the imported image directly
      videoUrl: "https://www.instagram.com/reel/DOD0dhbkuiH/",
      description: "Vibrant cultural festival captured through cinematic visuals"
    }
  ];

  // Function to handle opening video in new window
  const handleVideoClick = (videoUrl: string) => {
    if (videoUrl && videoUrl !== "#") {
      window.open(videoUrl, '_blank');
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
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
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my latest projects showcasing cinematic storytelling and creative editing
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredVideo(project.id)}
              onMouseLeave={() => setHoveredVideo(null)}
              className="group"
            >
              <Card 
                className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                onClick={() => handleVideoClick(project.videoUrl)}
              >
                <div className="relative aspect-video overflow-hidden">
                  {/* Thumbnail - Use the imported image directly */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.thumbnail})` }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredVideo === project.id ? 1 : 0, 
                      opacity: hoveredVideo === project.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-primary/90 backdrop-blur-sm rounded-full p-4 hover:bg-primary transition-colors duration-300">
                      <Play className="h-8 w-8 text-primary-foreground fill-current" />
                    </div>
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground px-3 py-1">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        Preview
                      </span>
                    </div>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ 
                        x: hoveredVideo === project.id ? 0 : -10, 
                        opacity: hoveredVideo === project.id ? 1 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Play className="h-4 w-4 text-primary" />
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-8">
            Ready to bring your vision to life?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <div className="w-8 h-8 border-2 border-primary rounded-full" />
              <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-primary" />
              <div className="w-8 h-8 border-2 border-primary" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedVideos;