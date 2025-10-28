import HeroSection from '@/components/sections/HeroSection';
import FeaturedVideos from '@/components/sections/FeaturedVideos';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturedVideos />
      
      {/* Contact Section Placeholder */}
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
              href="/about"
              className="inline-flex items-center justify-center rounded-none px-8 py-6 text-base font-medium border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              Learn More About Me
            </a>
            <a 
              href="/services"
              className="inline-flex items-center justify-center rounded-none px-8 py-6 text-base font-medium border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 hover:scale-105"
            >
              View Services
            </a>
            <a 
              href="/contact"
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