import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/atoms/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What makes Salientic AI different from other AI solutions?",
    answer:
      "Unlike reactive tools that wait for customers to reach out, Salientic AI is proactive. Our platform analyzes your DMS data to identify hidden opportunities and automatically engages customers with personalized outreach. We're built by automotive industry insiders who understand dealership operations.",
  },
  {
    question: "How is our conversational AI better than others?",
    answer:
      "Our AI is fine-tuned for automotive use cases, featuring advanced memory and context management. We can directly inject customer context from your DMS, enabling highly personalized and relevant interactions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most dealerships start seeing results within the first 30 days. You'll notice immediate improvements in lead response times and appointment booking rates. The full impact on revenue typically materializes within 90 days as the AI learns your customer patterns and optimizes engagement strategies.",
  },
  {
    question: "What counts as a 'monthly active lead'?",
    answer:
      "Any lead in your CRM/DMS that receives at least one email during the billing month. Suppressed leads don't count toward your limit.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. All plans are month-to-month with no long-term contracts. Cancel anytime with 30 days' notice.",
  },
  {
    question: "What if I exceed my lead limit?",
    answer:
      "We'll notify you before you hit your limit. You can upgrade to the next tier or pay overage charges at $0.15 per additional lead.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption. Your data is never shared with third parties and we comply with all industry regulations including CCPA and GDPR. We maintain SOC 2 Type II compliance and conduct regular security audits.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide dedicated support throughout your journey. During onboarding, you'll work directly with our team for setup and training. Ongoing support includes a dedicated success manager, 24/7 technical support, and regular optimization sessions to ensure you're maximizing ROI.",
  },
  {
    question: "How does AI prioritize campaigns?",
    answer:
      "When a lead qualifies for multiple campaigns, AI prioritizes: Recall alerts → Service reminders → Equity upgrades. The highest-value action wins, ensuring we maximize revenue opportunities while respecting email caps.",
  },
  {
    question: "Do you integrate with my existing DMS/CRM?",
    answer:
      "Yes. We support all major automotive DMS and CRM systems including CDK, Reynolds & Reynolds, DealerSocket, Elead, and VinSolutions. Integration typically takes less than 48 hours.",
  },
];

export default function FaqPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white overflow-y-auto absolute inset-0 scroll-smooth'>
      {/* Navigation */}
      <nav className='fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50 shadow-sm'>
        <div className='container mx-auto px-4 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
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
            </div>

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
                href='/proof'
                className='text-slate-700 hover:text-blue-600 transition-colors text-sm'
              >
                Proof
              </a>
              <a
                href='/pricing'
                className='text-slate-700 hover:text-blue-600 transition-colors text-sm'
              >
                Pricing
              </a>
              <a
                href='/faq'
                className='text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium'
              >
                FAQ
              </a>
              <Button
                className='bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg px-6 py-2'
                onClick={() => {
                  window.location.href = '/#contact-us';
                }}
              >
                Book a demo
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
                href='/proof'
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Proof
              </a>
              <a
                href='/pricing'
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href='/faq'
                className='block text-blue-600 hover:text-blue-700 transition-colors py-2 font-medium'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <Button
                className='w-full bg-blue-600 hover:bg-blue-700 text-white shadow-sm rounded-lg'
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = '/#contact-us';
                }}
              >
                Book a demo
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 bg-white'>
        <div className='container mx-auto max-w-5xl text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            Frequently Asked Questions
          </h1>
          <p className='text-xl text-slate-600'>
            Everything you need to know about Salientic AI
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-12 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-4xl'>
          <Accordion type='single' collapsible className='space-y-4'>
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='bg-white rounded-xl border border-slate-200 px-8 hover:shadow-lg transition-all duration-300'
              >
                <AccordionTrigger className='text-lg font-semibold text-slate-900 py-6 hover:text-blue-600'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-slate-600 leading-relaxed pb-6 text-base'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still have questions */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-3xl text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
            Still have questions?
          </h2>
          <p className='text-lg text-slate-600 mb-8'>
            Our team is here to help. Book a demo and we'll answer all your questions.
          </p>
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 shadow-sm rounded-lg'
            onClick={() => {
              window.location.href = '/#contact-us';
            }}
          >
            Book a demo
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-white py-16 px-4 border-t border-slate-200'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid md:grid-cols-4 gap-12 mb-12'>
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
                <li>
                  <a
                    href='/proof'
                    className='hover:text-blue-600 transition-colors'
                  >
                    Proof
                  </a>
                </li>
                <li>
                  <a
                    href='/pricing'
                    className='hover:text-blue-600 transition-colors'
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4 text-sm text-slate-900'>Company</h4>
              <ul className='space-y-3 text-slate-600 text-sm'>
                <li>
                  <a
                    href='/faq'
                    className='hover:text-blue-600 transition-colors'
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href='/sample.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-blue-600 transition-colors'
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='/sample.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:text-blue-600 transition-colors'
                  >
                    Terms of Service
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
                    hello@salientic.com
                  </a>
                </li>
                <li>
                  <a
                    href='/#contact-us'
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
