'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormState({
        status: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormState({
        status: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setFormState({ status: 'loading', message: '' });

    try {
      const response = await fetch('https://formspree.io/f/xqagpwrv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Thank you for your message! I\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset status after 5 seconds
        setTimeout(() => {
          setFormState({ status: 'idle', message: '' });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto"
    >
      <div className="bg-card/50 backdrop-blur-md border border-border rounded-2xl shadow-xl p-8">
        <form 
          action="https://formspree.io/f/xqagpwrv" 
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Label htmlFor="name" className="text-foreground font-medium mb-2 block">
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your name"
              className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300"
              required
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Label htmlFor="email" className="text-foreground font-medium mb-2 block">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your.email@example.com"
              className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300"
              required
            />
          </motion.div>

          {/* Subject Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Label htmlFor="subject" className="text-foreground font-medium mb-2 block">
              Subject
            </Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Project inquiry, collaboration, etc."
              className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Label htmlFor="message" className="text-foreground font-medium mb-2 block">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell me about your project, vision, or idea..."
              rows={6}
              className="bg-background/50 border-border focus:border-primary focus:ring-primary/20 rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground transition-all duration-300 resize-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={formState.status === 'loading'}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg px-6 py-3 text-base font-medium transition-all duration-300 hover:scale-[1.02] group"
            >
              {formState.status === 'loading' ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </div>
              ) : (
                <div className="flex items-center justify-center">
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </div>
              )}
            </Button>
          </motion.div>

          {/* Form Status Messages */}
          {formState.message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`flex items-center gap-2 p-4 rounded-lg ${
                formState.status === 'success' 
                  ? 'bg-primary/10 text-primary border border-primary/20' 
                  : 'bg-destructive/10 text-destructive border border-destructive/20'
              }`}
            >
              {formState.status === 'success' ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <span className="text-sm">{formState.message}</span>
            </motion.div>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export { ContactForm };