import type { Route } from "./+types/home";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/atoms/button";
import { ContactUsSection } from "~/pages/marketing/ContactUsSection";
import { DesignPartnerSection } from "~/pages/marketing/DesignPartnerSection";
import { FeaturesSection } from "~/pages/marketing/FeaturesSection";
import { FinalCtaSection } from "~/pages/marketing/FinalCtaSection";
import { HeroSection } from "~/pages/marketing/HeroSection";
import { HowItWorksSection } from "~/pages/marketing/HowItWorksSection";
import { ProofSection } from "~/pages/marketing/ProofSection";
import { TeamSection } from "~/pages/marketing/TeamSection";

export default function MarketingWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className='min-h-screen bg-white overflow-y-auto absolute inset-0 scroll-smooth'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50 shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <a href='/' className='flex items-center gap-3'>
              <img
                src='/assets/logo.png'
                alt='Salientic Logo'
                className='h-9 w-9 object-contain'
              />
              <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
                Salientic AI
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-6'>
              <a
                href='/outcomes'
                className='text-slate-700 hover:text-blue-600 transition-colors text-sm'
              >
                Outcomes
              </a>
              <a
                href='/how-it-works'
                className='text-slate-700 hover:text-blue-600 transition-colors text-sm'
              >
                How it works
              </a>
              <a
                href='/faq'
                className='text-slate-700 hover:text-blue-600 transition-colors text-sm'
              >
                FAQ
              </a>
              <Button
                className='bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg px-6 py-2'
                onClick={() => {
                  document
                    .getElementById("contact-us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className='md:hidden mt-4 pb-4 space-y-4'>
              <a
                href='/outcomes'
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Outcomes
              </a>
              <a
                href='/how-it-works'
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </a>
              <a
                href='/faq'
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                className='w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg'
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("contact-us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact us
              </Button>
            </div>
          )}
        </div>
      </nav>

      <HeroSection />

      <FeaturesSection />

      <HowItWorksSection />

      <ProofSection />

      <TeamSection />

      <DesignPartnerSection />

      <FinalCtaSection />

      <ContactUsSection />

      {/* Footer */}
      <footer className='bg-white py-16 px-4 border-t border-slate-200'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid md:grid-cols-3 gap-12 mb-12'>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <img
                  src='/assets/logo.png'
                  alt='Salientic Logo'
                  className='h-8 w-8 object-contain'
                />
                <span className='text-lg font-bold text-slate-900'>Salientic</span>
              </div>
              <p className='text-slate-600 text-sm leading-relaxed'>
                AI campaigns system for auto dealerships
              </p>
            </div>
            <div>
              <h4 className='font-bold mb-4 text-sm text-slate-900'>Product</h4>
              <ul className='space-y-3 text-slate-600 text-sm'>
                <li>
                  <a
                    href='/outcomes'
                    className='hover:text-blue-600 transition-colors'
                  >
                    Outcomes
                  </a>
                </li>
                <li>
                  <a
                    href='/how-it-works'
                    className='hover:text-blue-600 transition-colors'
                  >
                    How it works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4 text-sm text-slate-900'>Contact</h4>
              <ul className='space-y-3 text-slate-600 text-sm'>
                <li>
                  <a
                    href='mailto:contact@salientic.com'
                    className='hover:text-blue-600 transition-colors'
                  >
                    contact@salientic.com
                  </a>
                </li>
                <li>
                  <a
                    href='#contact-us'
                    className='hover:text-blue-600 transition-colors'
                  >
                    Book a demo
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-8 border-t border-slate-200 text-center'>
            <p className='text-slate-500 text-sm'>
              © 2025 Salientic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
