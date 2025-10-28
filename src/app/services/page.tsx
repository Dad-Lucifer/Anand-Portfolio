import ServicesHero from '@/components/sections/ServicesHero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { ProcessSection } from '@/components/sections/ProcessSection';
import ServicesCTA from '@/components/sections/ServicesCTA';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <ServicesCTA />
    </main>
  );
}