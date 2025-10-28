'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  color: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  onLearnMore: () => void; // Added this prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, onLearnMore }) => {
  const navigateToContact = () => {
    window.location.href = '/contact';
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group h-full"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-0 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 rounded-2xl overflow-hidden">
        <CardContent className="p-6 h-full flex flex-col">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            viewport={{ once: true }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          >
            <div className={service.color}>
              {service.icon}
            </div>
          </motion.div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
              {service.description}
            </p>
            
            {/* Features */}
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, featureIndex) => (
                <motion.li
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 + featureIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </motion.li>
              ))}
            </ul>
            
            {/* Learn More Button */}
            <button
              onClick={navigateToContact}
              className="flex items-center justify-between w-full py-2 text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
            >
              <span>Learn More</span>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </button>
            
            {/* Bottom accent line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
              viewport={{ once: true }}
              className="h-0.5 bg-gradient-to-r from-primary to-accent mt-4"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export { ServiceCard };