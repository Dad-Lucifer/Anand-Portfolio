import AboutHero from '@/components/sections/AboutHero';
import BioSection from '@/components/sections/BioSection';
import SkillsGrid from '@/components/sections/SkillsGrid';
import AboutCTA from '@/components/sections/AboutCTA';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AboutHero />
      <BioSection />
      <SkillsGrid />
      <AboutCTA />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Have a project in mind? Let's create something remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:alex@example.com"
              className="inline-flex items-center justify-center rounded-none px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}