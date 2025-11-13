import { useState } from "react";
import { Menu, X, Check } from "lucide-react";
import { Button } from "~/components/atoms/button";
import { Card, CardContent } from "~/components/molecules/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export default function PricingPage() {
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
                className='text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium'
              >
                Pricing
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
                  window.location.href = "/#contact-us";
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
                className='block text-blue-600 hover:text-blue-700 transition-colors py-2 font-medium'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
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
                  window.location.href = "/#contact-us";
                }}
              >
                Book a demo
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-32 pb-12 px-4 bg-white'>
        <div className='container mx-auto max-w-5xl text-center'>
          <div className='inline-block mb-6'>
            <span className='bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold'>
              🎉 Early Adopter Pricing
            </span>
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            Simple, transparent pricing
          </h1>
          <p className='text-xl text-slate-600 mb-4'>
            Pay only for active leads. No setup fees, no long-term contracts.
          </p>
          <div className='flex flex-wrap justify-center gap-6 text-slate-600 mt-8'>
            <div className='flex items-center gap-2'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-base font-medium'>
                Zero upfront commitment
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-base font-medium'>
                Performance-based pricing
              </span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-base font-medium'>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Early Adopter Banner */}
      <section className='py-8 px-4 bg-gradient-to-r from-blue-600 to-blue-700'>
        <div className='container mx-auto max-w-5xl text-center'>
          <p className='text-white text-lg font-medium'>
            🚀 Early adopters get <strong>lifetime priority support</strong> and{" "}
            <strong>first access to new features</strong>
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className='py-12 px-4 bg-white'>
        <div className='container mx-auto max-w-7xl'>
          <div className='grid md:grid-cols-3 gap-8'>
            {/* Starter */}
            <Card className='bg-white border-2 border-slate-200 shadow-lg'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                  Starter
                </h3>
                <p className='text-slate-600 mb-6'>
                  Perfect for single-location stores
                </p>
                <div className='mb-6'>
                  <span className='text-5xl font-bold text-slate-900'>
                    $299
                  </span>
                  <span className='text-slate-600'>/month</span>
                </div>
                <p className='text-sm text-slate-600 mb-2'>
                  Up to 2,500 active leads/month
                </p>
                <p className='text-xs text-slate-500 mb-8'>
                  Only pay for leads that receive emails
                </p>
                <Button
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-6 mb-8'
                  onClick={() => {
                    window.location.href = "/#contact-us";
                  }}
                >
                  Start pilot
                </Button>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      AI decisioning & arbitration
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Pre-built journeys (Service, Equity, After-sales)
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Caps & quiet hours enforcement
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Consent & unsubscribe handling
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Analytics dashboard
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Email support
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Growth */}
            <Card className='bg-white border-2 border-blue-600 shadow-xl relative'>
              <div className='absolute -top-4 left-1/2 -translate-x-1/2'>
                <span className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                  Most Popular
                </span>
              </div>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-slate-900 mb-2'>
                  Growth
                </h3>
                <p className='text-slate-600 mb-6'>
                  Best for scaling operations
                </p>
                <div className='mb-6'>
                  <span className='text-5xl font-bold text-slate-900'>
                    $599
                  </span>
                  <span className='text-slate-600'>/month</span>
                </div>
                <p className='text-sm text-slate-600 mb-2'>
                  Up to 7,500 active leads/month
                </p>
                <p className='text-xs text-slate-500 mb-8'>
                  Only pay for leads that receive emails
                </p>
                <Button
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-6 mb-8'
                  onClick={() => {
                    window.location.href = "/#contact-us";
                  }}
                >
                  Start pilot
                </Button>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      AI decisioning & arbitration
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Pre-built journeys (Service, Equity, After-sales)
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Caps & quiet hours enforcement
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Consent & unsubscribe handling
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Analytics dashboard
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Email support
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm font-semibold'>
                      Priority support
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm font-semibold'>
                      Custom journey templates
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Pro */}
            <Card className='bg-white border-2 border-slate-200 shadow-lg'>
              <CardContent className='p-8'>
                <h3 className='text-2xl font-bold text-slate-900 mb-2'>Pro</h3>
                <p className='text-slate-600 mb-6'>Built for dealer groups</p>
                <div className='mb-6'>
                  <span className='text-5xl font-bold text-slate-900'>
                    $1,199
                  </span>
                  <span className='text-slate-600'>/month</span>
                </div>
                <p className='text-sm text-slate-600 mb-2'>
                  Up to 20,000 active leads/month
                </p>
                <p className='text-xs text-slate-500 mb-8'>
                  Only pay for leads that receive emails
                </p>
                <Button
                  variant='outline'
                  className='w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg py-6 mb-8'
                  onClick={() => {
                    window.location.href = "/#contact-us";
                  }}
                >
                  Talk to sales
                </Button>
                <ul className='space-y-3'>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      AI decisioning & arbitration
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Pre-built journeys (Service, Equity, After-sales)
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Caps & quiet hours enforcement
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Consent & unsubscribe handling
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Analytics dashboard
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm'>
                      Email support
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm font-semibold'>
                      Dedicated account manager
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm font-semibold'>
                      Multi-location support
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <Check className='h-5 w-5 text-green-600 flex-shrink-0 mt-0.5' />
                    <span className='text-slate-700 text-sm font-semibold'>
                      Custom integrations
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className='py-20 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              What's included in all plans
            </h2>
          </div>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='text-5xl font-bold text-blue-600 mb-4'>≤48h</div>
              <p className='text-slate-600'>Setup time</p>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-blue-600 mb-4'>
                2/week
              </div>
              <p className='text-slate-600'>Email cap per lead</p>
            </div>
            <div className='text-center'>
              <div className='text-5xl font-bold text-blue-600 mb-4'>100%</div>
              <p className='text-slate-600'>Compliance guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-3xl'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              Common questions
            </h2>
          </div>
          <Accordion type='single' collapsible className='space-y-4'>
            <AccordionItem
              value='item-1'
              className='border border-slate-200 rounded-lg px-6'
            >
              <AccordionTrigger className='text-lg font-semibold text-slate-900 hover:text-blue-600'>
                What counts as a "monthly active lead"?
              </AccordionTrigger>
              <AccordionContent className='text-slate-600 leading-relaxed'>
                Any lead in your CRM/DMS that receives at least one email during
                the billing month. Suppressed leads don't count toward your
                limit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-2'
              className='border border-slate-200 rounded-lg px-6'
            >
              <AccordionTrigger className='text-lg font-semibold text-slate-900 hover:text-blue-600'>
                Can I cancel anytime?
              </AccordionTrigger>
              <AccordionContent className='text-slate-600 leading-relaxed'>
                Yes. All plans are month-to-month with no long-term contracts.
                Cancel anytime with 30 days' notice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value='item-3'
              className='border border-slate-200 rounded-lg px-6'
            >
              <AccordionTrigger className='text-lg font-semibold text-slate-900 hover:text-blue-600'>
                What if I exceed my lead limit?
              </AccordionTrigger>
              <AccordionContent className='text-slate-600 leading-relaxed'>
                We'll notify you before you hit your limit. You can upgrade to
                the next tier or pay overage charges at $0.15 per additional
                lead.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 px-4 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Not sure which plan fits?
          </h2>
          <p className='text-xl text-blue-100 mb-10'>
            Book a demo and we'll help you choose the right tier
          </p>
          <Button
            size='lg'
            className='bg-slate-900 text-white hover:bg-slate-800 text-lg px-10 py-6 shadow-lg rounded-lg'
            onClick={() => {
              window.location.href = "/#contact-us";
            }}
          >
            Talk to us
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
                <span className='text-lg font-bold text-slate-900'>
                  Salientic
                </span>
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
