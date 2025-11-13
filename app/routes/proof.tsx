import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/atoms/button";
import { Card, CardContent } from "~/components/molecules/card";

export default function ProofPage() {
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
                className='text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium'
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
                className='text-slate-700 hover:text-blue-600 transition-colors text-sm'
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
                className='block text-blue-600 hover:text-blue-700 transition-colors py-2 font-medium'
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
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
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
            Results that speak for themselves
          </h1>
          <p className='text-xl text-slate-600'>
            Real outcomes from dealerships using Salientic
          </p>
        </div>
      </section>

      {/* Case Study */}
      <section className='py-12 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-6xl'>
          <Card className='bg-gradient-to-br from-blue-50 to-slate-50 border-none shadow-lg'>
            <CardContent className='p-12'>
              <div className='text-center mb-12'>
                <div className='text-blue-600 text-sm font-semibold mb-4 uppercase tracking-wider'>
                  CASE STUDY
                </div>
                <h2 className='text-4xl font-bold text-slate-900 mb-4'>
                  Regional Honda Dealership
                </h2>
                <p className='text-lg text-slate-600'>
                  3-month pilot with 12,000 monthly active leads
                </p>
              </div>
              <div className='grid md:grid-cols-4 gap-8'>
                <Card className='bg-white border-none shadow-md'>
                  <CardContent className='p-6 text-center'>
                    <div className='text-sm text-slate-600 mb-2'>Service Appointments</div>
                    <div className='text-4xl font-bold text-slate-900 mb-2'>847</div>
                    <div className='text-green-600 font-semibold text-sm'>+156%</div>
                  </CardContent>
                </Card>
                <Card className='bg-white border-none shadow-md'>
                  <CardContent className='p-6 text-center'>
                    <div className='text-sm text-slate-600 mb-2'>Trade-in Appraisals</div>
                    <div className='text-4xl font-bold text-slate-900 mb-2'>94</div>
                    <div className='text-green-600 font-semibold text-sm'>+312%</div>
                  </CardContent>
                </Card>
                <Card className='bg-white border-none shadow-md'>
                  <CardContent className='p-6 text-center'>
                    <div className='text-sm text-slate-600 mb-2'>Unsubscribe Rate</div>
                    <div className='text-4xl font-bold text-slate-900 mb-2'>0.4%</div>
                    <div className='text-green-600 font-semibold text-sm'>-60%</div>
                  </CardContent>
                </Card>
                <Card className='bg-white border-none shadow-md'>
                  <CardContent className='p-6 text-center'>
                    <div className='text-sm text-slate-600 mb-2'>Avg. RO Value</div>
                    <div className='text-4xl font-bold text-slate-900 mb-2'>$487</div>
                    <div className='text-green-600 font-semibold text-sm'>+19%</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              Dashboard overview
            </h2>
          </div>

          <Card className='bg-white border border-slate-200 shadow-lg mb-8'>
            <CardContent className='p-8'>
              <h3 className='text-2xl font-bold text-slate-900 mb-8'>
                Campaign Performance (Last 30 Days)
              </h3>
              <div className='grid md:grid-cols-4 gap-6'>
                <div>
                  <div className='text-sm text-slate-600 mb-2'>Total Sends</div>
                  <div className='text-3xl font-bold text-slate-900'>24,847</div>
                </div>
                <div>
                  <div className='text-sm text-slate-600 mb-2'>Bookings</div>
                  <div className='text-3xl font-bold text-green-600 mb-1'>847</div>
                  <div className='text-sm text-slate-500'>3.4% conversion</div>
                </div>
                <div>
                  <div className='text-sm text-slate-600 mb-2'>Appraisal Leads</div>
                  <div className='text-3xl font-bold text-green-600 mb-1'>94</div>
                  <div className='text-sm text-slate-500'>11.2% of equity sends</div>
                </div>
                <div>
                  <div className='text-sm text-slate-600 mb-2'>Suppressed (Policy)</div>
                  <div className='text-3xl font-bold text-slate-900 mb-1'>1,284</div>
                  <div className='text-sm text-slate-500'>5.2% of candidates</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-white border border-slate-200 shadow-lg'>
            <CardContent className='p-8'>
              <h3 className='text-xl font-bold text-slate-900 mb-6'>
                Suppression Reasons (Transparency)
              </h3>
              <div className='space-y-4'>
                <div className='flex justify-between items-center py-3 border-b border-slate-100'>
                  <span className='text-slate-700'>Weekly cap reached</span>
                  <span className='text-slate-900 font-semibold'>687 leads</span>
                </div>
                <div className='flex justify-between items-center py-3 border-b border-slate-100'>
                  <span className='text-slate-700'>Unsubscribed / DNC</span>
                  <span className='text-slate-900 font-semibold'>421 leads</span>
                </div>
                <div className='flex justify-between items-center py-3'>
                  <span className='text-slate-700'>Quiet hours (timezone)</span>
                  <span className='text-slate-900 font-semibold'>176 leads</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              What dealers are saying
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <Card className='bg-white border border-slate-200 shadow-md'>
              <CardContent className='p-8'>
                <p className='text-lg text-slate-700 italic mb-6 leading-relaxed'>
                  "We went from manual follow-ups to automated bookings in under 48 hours. Service bays are consistently full now. The AI handles the timing perfectly—we don't think about it anymore."
                </p>
                <div>
                  <div className='font-bold text-slate-900'>Michael Chen</div>
                  <div className='text-sm text-slate-500'>Service Manager, Regional Honda Dealership</div>
                </div>
              </CardContent>
            </Card>
            <Card className='bg-white border border-slate-200 shadow-md'>
              <CardContent className='p-8'>
                <p className='text-lg text-slate-700 italic mb-6 leading-relaxed'>
                  "The equity alerts brought in 12 trade-in appraisals in the first month alone. Our sales team loves it because the leads are warm and already interested. It's like having a full-time BDC without the overhead."
                </p>
                <div>
                  <div className='font-bold text-slate-900'>Sarah Martinez</div>
                  <div className='text-sm text-slate-500'>Dealer Principal, Multi-location Toyota Group</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 px-4 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to see these results at your dealership?
          </h2>
          <p className='text-xl text-blue-100 mb-10'>
            Book a demo and we'll show you how
          </p>
          <Button
            size='lg'
            className='bg-slate-900 text-white hover:bg-slate-800 text-lg px-10 py-6 shadow-lg rounded-lg'
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
