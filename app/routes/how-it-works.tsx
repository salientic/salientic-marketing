import { useState } from "react";
import {
  Menu,
  X,
  Upload,
  Settings,
  Send,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";
import { Button } from "~/components/atoms/button";
import { Card, CardContent } from "~/components/molecules/card";

export default function HowItWorksPage() {
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
                className='text-blue-600 hover:text-blue-700 transition-colors text-sm font-medium'
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
                className='block text-slate-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Outcomes
              </a>
              <a
                href='/how-it-works'
                className='block text-blue-600 hover:text-blue-700 transition-colors py-2 font-medium'
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
      <section className='pt-32 pb-20 px-4 bg-white'>
        <div className='container mx-auto max-w-5xl text-center'>
          <h1 className='text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            How Salientic Works
          </h1>
          <p className='text-xl text-slate-600'>
            Three simple steps from data upload to automated campaigns
          </p>
        </div>
      </section>

      {/* Three Steps */}
      <section className='py-12 px-4 bg-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='grid md:grid-cols-3 gap-12'>
            <div className='text-center'>
              <div className='bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm'>
                <Upload className='h-8 w-8' />
              </div>
              <div className='text-sm text-blue-600 mb-2 font-medium'>
                Step 1
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>Upload</h3>
              <p className='text-slate-600 leading-relaxed'>
                Upload your CRM/DMS export (.csv, API). No manual list building,
                segmentation, or rules needed.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm'>
                <Settings className='h-8 w-8' />
              </div>
              <div className='text-sm text-blue-600 mb-2 font-medium'>
                Step 2
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                AI decides
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                AI auto-segments leads by priority (Recall → Service → Equity),
                enforces caps, exclusions, and quiet hours automatically.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm'>
                <Send className='h-8 w-8' />
              </div>
              <div className='text-sm text-blue-600 mb-2 font-medium'>
                Step 3
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Sends & tracks
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Personalized emails sent via your ESP. Dashboards show bookings,
                RO proxy, trade-in leads, and transparent (Suppressed / Policy)
                reasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Decisioning */}
      <section className='py-20 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              AI decisioning under the hood
            </h2>
            <p className='text-lg text-slate-600 max-w-3xl mx-auto'>
              AI decides who gets what and when—then shows why, with transparent
              suppression reasons
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <Card className='bg-white border border-slate-200'>
              <CardContent className='p-8 text-center'>
                <div className='bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto'>
                  <TrendingUp className='h-8 w-8 text-blue-600' />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>
                  Priority Arbitration
                </h3>
                <p className='text-slate-600 text-sm leading-relaxed'>
                  When a lead qualifies for multiple campaigns, AI prioritizes:
                  Recall alerts → Service reminders → Equity upgrades.
                  Highest-value action wins.
                </p>
              </CardContent>
            </Card>
            <Card className='bg-white border border-slate-200'>
              <CardContent className='p-8 text-center'>
                <div className='bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto'>
                  <Shield className='h-8 w-8 text-blue-600' />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>
                  Caps & Consent
                </h3>
                <p className='text-slate-600 text-sm leading-relaxed'>
                  2 emails/week cap per lead. Unsubscribe and Do Not Contact
                  lists honored. SHPR/ADM/DARC authentication ensures
                  deliverability.
                </p>
              </CardContent>
            </Card>
            <Card className='bg-white border border-slate-200'>
              <CardContent className='p-8 text-center'>
                <div className='bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto'>
                  <Clock className='h-8 w-8 text-blue-600' />
                </div>
                <h3 className='text-xl font-bold text-slate-900 mb-4'>
                  Quiet Hours
                </h3>
                <p className='text-slate-600 text-sm leading-relaxed'>
                  No sends between 9 PM and 8 AM local time. AI adjusts for time
                  zones and schedules optimal send windows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Decision Flow */}
      <section className='py-20 px-4 bg-white'>
        <div className='container mx-auto max-w-5xl'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              Decision flow
            </h2>
          </div>
          <div className='flex flex-col items-center gap-6'>
            <div className='bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-sm'>
              Lead Data (CRM/DMS)
            </div>
            <div className='text-slate-400'>↓</div>
            <div className='bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-sm'>
              AI Analyzer
            </div>
            <div className='text-slate-400'>↓</div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
              <div className='border-2 border-blue-200 px-6 py-4 rounded-xl text-center font-semibold text-slate-700 bg-blue-50'>
                Recall
              </div>
              <div className='border-2 border-blue-200 px-6 py-4 rounded-xl text-center font-semibold text-slate-700 bg-blue-50'>
                Service
              </div>
              <div className='border-2 border-blue-200 px-6 py-4 rounded-xl text-center font-semibold text-slate-700 bg-blue-50'>
                Equity
              </div>
              <div className='border-2 border-blue-200 px-6 py-4 rounded-xl text-center font-semibold text-slate-700 bg-blue-50'>
                After-sales
              </div>
            </div>
            <div className='text-slate-400'>↓</div>
            <div className='bg-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-base'>
              Policy Check (Caps/Consent/Quiet Hours)
            </div>
            <div className='text-slate-400'>↓</div>
            <div className='bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-sm'>
              Send via ESP + Track
            </div>
          </div>
        </div>
      </section>

      {/* Example Emails */}
      <section className='py-20 px-4 bg-gradient-to-br from-slate-50 to-white'>
        <div className='container mx-auto max-w-6xl'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
              Example emails
            </h2>
          </div>
          <div className='grid md:grid-cols-2 gap-8'>
            <Card className='bg-white border border-slate-200'>
              <CardContent className='p-8'>
                <div className='text-sm text-blue-600 mb-4 font-semibold'>
                  Service Due Reminder
                </div>
                <div className='bg-slate-50 p-6 rounded-lg'>
                  <div className='text-xs text-slate-500 mb-2'>
                    To: customer@email.com
                  </div>
                  <div className='font-semibold text-slate-900 mb-4'>
                    Subject: Your [Vehicle] is due for service in 7 days
                  </div>
                  <p className='text-sm text-slate-700 leading-relaxed'>
                    Hi [Name],
                    <br />
                    <br />
                    Your [Year Make Model] is due for its [Service Type] on
                    [Date]. Book now and get a free multi-point inspection.
                    <br />
                    <br />
                    [Book Service Button]
                    <br />
                    <br />— Service Team, [Dealership Name]
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className='bg-white border border-slate-200'>
              <CardContent className='p-8'>
                <div className='text-sm text-blue-600 mb-4 font-semibold'>
                  Equity Upgrade
                </div>
                <div className='bg-slate-50 p-6 rounded-lg'>
                  <div className='text-xs text-slate-500 mb-2'>
                    To: customer@email.com
                  </div>
                  <div className='font-semibold text-slate-900 mb-4'>
                    Subject: Your [Vehicle] has $[Amount] in equity—upgrade?
                  </div>
                  <p className='text-sm text-slate-700 leading-relaxed'>
                    Hi [Name],
                    <br />
                    <br />
                    Great news! Your [Year Make Model] has approximately
                    $[Amount] in positive equity. Trade up to a newer model with
                    minimal out-of-pocket cost.
                    <br />
                    <br />
                    [Get Appraisal Button]
                    <br />
                    <br />— Sales Team, [Dealership Name]
                  </p>
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
            See it in action
          </h2>
          <p className='text-xl text-blue-100 mb-10'>
            Contact us and we'll walk you through the entire system
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
