"use client";

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import ContactHero from "@/components/sections/ContactHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactInfo } from "@/components/sections/ContactInfo";
import ContactCTA from "@/components/sections/ContactCTA";

const Contact: React.FC = () => {
  // Example: You can programmatically navigate using router.push()
  // e.g. router.push("/thank-you") after successful form submission

  return (
    <>
      <ContactHero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <ContactForm />
          <ContactInfo />
        </div>

        {/* Example Link navigation instead of useNavigate */}
        <div className="mt-10 text-center">
          <Link to="/" className="text-primary hover:underline">
            Back to Home
          </Link>
        </div>
      </section>

      <ContactCTA />
    </>
  );
};

export default Contact;
