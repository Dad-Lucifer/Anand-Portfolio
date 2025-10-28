'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Eye, Calendar, Clock } from 'lucide-react';

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

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 rounded-2xl">
        <div className="relative aspect-video overflow-hidden">
          {/* Thumbnail/Video Container */}
          <div className="absolute inset-0">
            {/* Default thumbnail */}
            <div 
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${isHovered ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}
              style={{ backgroundImage: `url(${project.thumbnail})` }}
            />
            
            {/* Video preview overlay (simulated with image) */}
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
              />
            )}
            
            {/* Play Button Overlay */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: isHovered ? 1 : 0, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="bg-primary/90 backdrop-blur-sm rounded-full p-6 hover:bg-primary transition-all duration-300 hover:scale-110">
                <Play className="h-10 w-10 text-primary-foreground fill-current ml-1" />
              </div>
            </motion.div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm text-secondary-foreground px-3 py-1 text-sm font-medium">
              {project.category}
            </Badge>
          </div>
          
          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-accent text-accent-foreground px-3 py-1 text-sm font-medium">
              {project.year}
            </Badge>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute bottom-4 left-4">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/50 text-primary-foreground px-3 py-1 text-sm font-medium flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {project.duration}
            </Badge>
          </div>
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1 hover:text-primary transition-colors duration-300">
                <Eye className="h-4 w-4" />
                Preview
              </span>
              <span className="flex items-center gap-1 hover:text-accent transition-colors duration-300">
                <Calendar className="h-4 w-4" />
                {project.year}
              </span>
            </div>
            
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ 
                x: isHovered ? 0 : -10, 
                opacity: isHovered ? 1 : 0 
              }}
              transition={{ duration: 0.3 }}
            >
              <Play className="h-5 w-5 text-primary" />
            </motion.div>
          </div>
          
          {/* Hover indicator line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
            className="h-0.5 bg-gradient-to-r from-primary to-accent mt-4"
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PortfolioCard;