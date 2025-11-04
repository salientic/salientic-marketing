import type { Route } from "./+types/home";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/atoms/button";
import { MarketingChatWidget } from "~/components/marketing-chat-widget";
import { ContactUsSection } from "~/pages/marketing/ContactUsSection";
import { DesignPartnerSection } from "~/pages/marketing/DesignPartnerSection";
import { FaqSection } from "~/pages/marketing/FaqSection";
import { FeaturesSection } from "~/pages/marketing/FeaturesSection";
import { FinalCtaSection } from "~/pages/marketing/FinalCtaSection";
import { HeroSection } from "~/pages/marketing/HeroSection";
import { HowItWorksSection } from "~/pages/marketing/HowItWorksSection";
import { ProblemSection } from "~/pages/marketing/ProblemSection";
import { RoiStatsSection } from "~/pages/marketing/RoiStatsSection";
import { SolutionSection } from "~/pages/marketing/SolutionSection";

export default function MarketingWebsite() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className='min-h-screen bg-white overflow-y-auto absolute inset-0 scroll-smooth'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50 shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <img
                src='/assets/logo.png'
                alt='Salientic Logo'
                className='h-9 w-9 object-contain'
              />
              <span className='text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
                Salientic AI
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-6'>
              <a
                href='#features'
                className='text-slate-600 hover:text-blue-600 transition-colors font-medium'
              >
                Features
              </a>
              <a
                href='#how-it-works'
                className='text-slate-600 hover:text-blue-600 transition-colors font-medium'
              >
                How It Works
              </a>
              <a
                href='#partners'
                className='text-slate-600 hover:text-blue-600 transition-colors font-medium'
              >
                Partners
              </a>
              <Button
                className='bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all'
                onClick={() => {
                  document
                    .getElementById("contact-us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request Demo
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
                href='#features'
                className='block text-slate-600 hover:text-blue-600 transition-colors font-medium py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href='#how-it-works'
                className='block text-slate-600 hover:text-blue-600 transition-colors font-medium py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href='#partners'
                className='block text-slate-600 hover:text-blue-600 transition-colors font-medium py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partners
              </a>
              <Button
                className='w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all'
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("contact-us")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Request Demo
              </Button>
            </div>
          )}
        </div>
      </nav>

      <HeroSection />

      <ProblemSection />

      <SolutionSection />

      <HowItWorksSection />

      <FeaturesSection />

      <RoiStatsSection />

      <FaqSection />

      <DesignPartnerSection />

      <FinalCtaSection />

      <ContactUsSection />

      {/* Footer */}
      <footer className='bg-slate-900 text-white py-16 px-4 border-t border-slate-800'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid md:grid-cols-4 gap-12 mb-12'>
            <div className='col-span-2'>
              <div className='flex items-center gap-3 mb-6'>
                <img
                  src='/assets/logo.png'
                  alt='Salientic Logo'
                  className='h-10 w-10 object-contain'
                />
                <span className='text-2xl font-bold'>Salientic AI</span>
              </div>
              <p className='text-slate-400 mb-6 leading-relaxed text-lg'>
                Building the self-driving auto dealership with AI-powered
                revenue engine that transforms how dealerships engage with
                customers.
              </p>
            </div>
            <div>
              <h4 className='font-bold mb-6 text-lg'>Product</h4>
              <ul className='space-y-3 text-slate-400'>
                <li>
                  <a
                    href='#features'
                    className='hover:text-white transition-colors'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href='#how-it-works'
                    className='hover:text-white transition-colors'
                  >
                    How It Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-6 text-lg'>Company</h4>
              <ul className='space-y-3 text-slate-400'>
                <li>
                  <a
                    href='#partners'
                    className='hover:text-white transition-colors'
                  >
                    Design Partners
                  </a>
                </li>
                <li>
                  <a
                    href='/careers'
                    className='hover:text-white transition-colors'
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white transition-colors'>
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href='mailto:abhishek@salientic.com'
                    className='hover:text-white transition-colors'
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-slate-400'>
              © 2025 Salientic AI. All rights reserved.
            </p>
            <div className='flex gap-8 text-slate-400'>
              <a
                href='/sample.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                Privacy Policy
              </a>
              <a
                href='/sample.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      {/* <MarketingChatWidget
        companyName='Salientic AI'
        welcomeMessage="Hi! I'm an AI assistant. How can I help you learn about Salientic AI today?"
        placeholder='Ask me anything...'
      /> */}
    </div>
  );
}
