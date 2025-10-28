import ContactHero from '@/components/sections/ContactHero';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';
import ContactCTA from '@/components/sections/ContactCTA';

export default function Contact() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <ContactCTA />
    </main>
  );
}