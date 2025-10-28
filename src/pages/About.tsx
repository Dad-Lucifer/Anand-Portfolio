import React from 'react';
import AboutHero from '@/components/sections/AboutHero';
import BioSection from '@/components/sections/BioSection';
import SkillsGrid from '@/components/sections/SkillsGrid';
import AboutCTA from '@/components/sections/AboutCTA';

const About: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <AboutHero />
      
      {/* Main content container with responsive padding */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Bio Section */}
          <section className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <BioSection />
          </section>
          
          {/* Skills Section with responsive spacing */}
          <section className="w-full">
            <SkillsGrid />
          </section>
        </div>
      </div>
      
      {/* CTA Section */}
      <AboutCTA />
    </div>
  );
};

export default About;