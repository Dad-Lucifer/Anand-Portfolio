'use client';

import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Youtube, 
  Linkedin,
  ExternalLink
} from 'lucide-react';

interface ContactItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  color: string;
}

interface SocialLink {
  id: number;
  icon: React.ReactNode;
  label: string;
  href: string;
  color: string;
}

const ContactInfo: React.FC = () => {
  const contactItems: ContactItem[] = [
    {
      id: 1,
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "gaudanand2@gmail.com",
      href: "mailto:gaudanand2@gmail.com",
      color: "text-primary hover:text-primary/80"
    },
    {
      id: 2,
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9136970848",
      href: "tel:+91 9136970848",
      color: "text-accent hover:text-accent/80"
    },
    {
      id: 3,
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Available Maharashatra, India",
      color: "text-secondary hover:text-secondary/80"
    }
  ];

  const socialLinks: SocialLink[] = [
    {
      id: 1,
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram",
      href: "https://www.instagram.com/trandygraphy",
      color: "text-pink-400 hover:text-pink-300"
    },
   /* {
      id: 2,
      icon: <Youtube className="w-5 h-5" />,
      label: "YouTube",
      href: "https://youtube.com/alexchen",
      color: "text-red-500 hover:text-red-400"
    },
    {
      id: 3,
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/alexchen",
      color: "text-blue-400 hover:text-blue-300"
    } 
      */
  ];

  return (
    <div className="space-y-12">
      {/* Direct Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
          Get in Touch Directly
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className={item.color}>
                    {item.icon}
                  </div>
                </div>
              </div>
              
              <h4 className="font-medium text-foreground mb-2">{item.label}</h4>
              
              {item.href ? (
                <a 
                  href={item.href}
                  className={`text-muted-foreground ${item.color} transition-colors duration-300 flex items-center justify-center gap-1 group`}
                >
                  <span>{item.value}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ) : (
                <p className="text-muted-foreground">{item.value}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
          Follow My Work
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 ${link.color} transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
            >
              <div className="flex items-center gap-3">
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Availability Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Available for Projects
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Available for freelance and collaborative projects worldwide. Whether you're looking for a full production team or just post-production services, I'm here to help bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary rounded-full" />
              <span className="text-sm font-medium">Freelance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-accent" />
              <span className="text-sm font-medium">Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-secondary" />
              <span className="text-sm font-medium">Worldwide</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export { ContactInfo };