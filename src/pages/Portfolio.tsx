import React from 'react';
import PortfolioHero from '@/components/sections/PortfolioHero';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';

const Portfolio: React.FC = () => {
  return (
    <>
      <PortfolioHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PortfolioGrid />
      </div>
    </>
  );
};

export default Portfolio;