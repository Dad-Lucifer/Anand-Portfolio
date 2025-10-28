import React from 'react';
import ServicesHero from '@/components/sections/ServicesHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessSection } from '@/components/sections/ProcessSection';
import ServicesCTA from '@/components/sections/ServicesCTA';

const Services: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section - Full Width */}
      <section className="w-full">
        <ServicesHero />
      </section>
      
      {/* Main Content Container with Responsive Spacing */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {/* Services Grid Section */}
          <section className="w-full">
            <ServicesGrid />
          </section>
          
          {/* Process Section */}
          <section className="w-full">
            <ProcessSection />
          </section>
        </div>
      </div>
      
      {/* CTA Section - Full Width */}
      <section className="w-full">
        <ServicesCTA />
      </section>
    </div>
  );
};

export default Services;