import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/components/atoms/button";
import { Card, CardContent } from "~/components/molecules/card";

export default function OutcomesPage() {
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
                className='text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium'
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
                  window.location.href = "/#contact-us";
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
                className='block text-blue-600 hover:text-blue-700 transition-colors py-2 font-medium'
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
                  window.location.href = "/#contact-us";
                }}
              >
                Contact us
              </Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className='pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            Measurable outcomes across your dealership
          </h1>
          <p className='text-xl text-slate-600'>
            AI-powered campaigns that turn your data into revenue
          </p>
        </div>
      </section>

      {/* Outcomes Grid */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Dormant Leads */}
            <div>
              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>
                    Dormant Leads
                  </h3>
                  <p className='text-slate-600 mb-4'>
                    <strong>Problem:</strong> Old leads go cold because manual
                    follow-up is inconsistent.
                  </p>
                  <p className='text-slate-600 mb-4'>
                    <strong>AI Solution:</strong> Salientic's AI automatically
                    identifies leads that haven't engaged in 60+ days and sends
                    personalized re-engagement emails with optimal timing and
                    content.
                  </p>
                  <p className='text-slate-600 mb-6'>
                    <strong>Expected Impact:</strong> 16–25% of dormant leads
                    re-engage, leading to showroom visits and test drives.
                  </p>
                </div>
              </div>

              <Card className='bg-slate-50 border-none mt-6'>
                <CardContent className='p-6'>
                  <div className='text-sm text-slate-500 mb-2'>
                    Email Preview
                  </div>
                  <div className='bg-white p-4 rounded-lg border border-slate-200'>
                    <div className='text-xs text-slate-500 mb-2'>
                      To: customer@email.com
                    </div>
                    <div className='font-semibold text-slate-900 mb-2'>
                      Subject: Still thinking about that 2024 Explorer?
                    </div>
                    <p className='text-sm text-slate-600'>
                      Hi John,
                      <br />
                      <br />
                      Your 2022 Honda Accord is due for its 30K service on Nov
                      22. Book now and get a free multi-point inspection.
                      <br />
                      <br />
                      [Book Service Button]
                      <br />
                      <br />— Service Team, [Dealership Name]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Service Bookings */}
            <div>
              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>
                    Service Bookings
                  </h3>
                  <p className='text-slate-600 mb-4'>
                    <strong>Problem:</strong> Service bays aren't consistently
                    full because customers forget or delay maintenance.
                  </p>
                  <p className='text-slate-600 mb-4'>
                    <strong>AI Solution:</strong> Automated 14/7/1-day reminders
                    based on mileage and service history. AI optimizes send
                    times to smooth capacity and lift RO value.
                  </p>
                  <p className='text-slate-600 mb-6'>
                    <strong>Expected Impact:</strong> 20–30% booking rate,
                    improved bay utilization, $120+ RO value with accessory
                    upsells.
                  </p>
                </div>
              </div>

              <Card className='bg-slate-50 border-none mt-6'>
                <CardContent className='p-6'>
                  <div className='text-sm text-slate-500 mb-2'>
                    Service Reminder
                  </div>
                  <div className='bg-white p-4 rounded-lg border border-slate-200'>
                    <div className='text-xs text-slate-500 mb-2'>
                      To: customeratyourdeal.com
                    </div>
                    <div className='font-semibold text-slate-900 mb-2'>
                      Subject: Your [Vehicle] is due for service in 7 days
                    </div>
                    <p className='text-sm text-slate-600'>
                      Hi [Name],
                      <br />
                      <br />
                      Your 2022 Honda Accord is due for its 30K service on Nov
                      22. Book now and get a free multi-point inspection.
                      <br />
                      <br />
                      [Book Service Button]
                      <br />
                      <br />— Service Team, [Dealership Name]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trade-ins */}
            <div>
              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>
                    Trade-ins (Positive Equity)
                  </h3>
                  <p className='text-slate-600 mb-4'>
                    <strong>Problem:</strong> Customers with positive equity
                    don't know they can upgrade, miss opportunities and
                    interest.
                  </p>
                  <p className='text-slate-600 mb-4'>
                    <strong>AI Solution:</strong> Equity = valuation – payoff.
                    When positive, AI triggers upgrade emails with personalized
                    vehicle suggestions and appraisal links.
                  </p>
                  <p className='text-slate-600 mb-6'>
                    <strong>Expected Impact:</strong> 16–15% appraisal request
                    rate, converting to trade-in and new vehicle sales.
                  </p>
                </div>
              </div>

              <Card className='bg-slate-50 border-none mt-6'>
                <CardContent className='p-6'>
                  <div className='text-sm text-slate-500 mb-2'>
                    Equity Alert
                  </div>
                  <div className='bg-white p-4 rounded-lg border border-slate-200'>
                    <div className='text-xs text-slate-500 mb-2'>
                      To: mike.johnson@email.com
                    </div>
                    <div className='font-semibold text-slate-900 mb-2'>
                      Subject: Your [Vehicle] has $4,200 in equity—ready to
                      upgrade?
                    </div>
                    <p className='text-sm text-slate-600'>
                      Hi Mike,
                      <br />
                      <br />
                      Great news! Your 2020 Honda Civic has approximately $4,200
                      in positive equity. That means you can trade up to a newer
                      model with minimal out-of-pocket cost.
                      <br />
                      <br />
                      Want a free appraisal? Get here. [Get Appraisal]
                      <br />
                      <br />— Sales Team, [Dealership Name]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* After-sales */}
            <div>
              <div className='flex items-start gap-4 mb-6'>
                <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1'>
                  <svg
                    className='w-6 h-6 text-blue-600'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  <h3 className='text-2xl font-bold text-slate-900 mb-3'>
                    After-sales
                  </h3>
                  <p className='text-slate-600 mb-4'>
                    <strong>Problem:</strong> Post-service upsell opportunities
                    (parts, accessories) are often missed.
                  </p>
                  <p className='text-slate-600 mb-4'>
                    <strong>AI Solution:</strong> Post-service NPS prompts
                    paired with model-aware accessory bundles to drive parts
                    revenue.
                  </p>
                  <p className='text-slate-600 mb-6'>
                    <strong>Expected Impact:</strong> 8–12% accessory/parts
                    conversion, improved customer satisfaction scores.
                  </p>
                </div>
              </div>

              <Card className='bg-slate-50 border-none mt-6'>
                <CardContent className='p-6'>
                  <div className='text-sm text-slate-500 mb-2'>
                    Post-Service follow-up
                  </div>
                  <div className='bg-white p-4 rounded-lg border border-slate-200'>
                    <div className='text-xs text-slate-500 mb-2'>
                      To: linda.brown@email.com
                    </div>
                    <div className='font-semibold text-slate-900 mb-2'>
                      Subject: How was your recent service? Plus a special offer
                    </div>
                    <p className='text-sm text-slate-600'>
                      Hi Linda,
                      <br />
                      <br />
                      Thanks for bringing in your Honda at week. How'd we do?
                      Give us a rating: [Star Rating].
                      <br />
                      <br />
                      While you're here: We noticed your vehicle could benefit
                      from [All-Weather Floor Mats]. Get 15% off this week.
                      [Shop Accessories]
                      <br />
                      <br />— Service Team, [Dealership Name]
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-24 px-4 bg-blue-600 text-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to turn your data into outcomes?
          </h2>
          <p className='text-xl text-blue-100 mb-10'>
            Contact us and see how AI campaigns work for your dealership
          </p>
          <Button
            size='lg'
            className='bg-slate-900 text-white hover:bg-slate-800 text-lg px-10 py-6 shadow-lg rounded-lg'
            onClick={() => {
              window.location.href = "/#contact-us";
            }}
          >
            Contact us
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
                    Contact us
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
