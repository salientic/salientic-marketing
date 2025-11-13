import { Check, Shield } from "lucide-react";

export function ProofSection() {
  return (
    <section id='proof' className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-8'>
            Built for compliance and trust
          </h2>
          <div className='flex flex-wrap justify-center gap-6 mb-16'>
            <div className='flex items-center gap-2 text-slate-600'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-sm font-medium'>SHPR/ADM/DARC</span>
            </div>
            <div className='flex items-center gap-2 text-slate-600'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-sm font-medium'>Consent & Unsubscribe</span>
            </div>
            <div className='flex items-center gap-2 text-slate-600'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-sm font-medium'>Caps & Exclusions</span>
            </div>
            <div className='flex items-center gap-2 text-slate-600'>
              <Check className='h-5 w-5 text-green-600' />
              <span className='text-sm font-medium'>Quiet Hours</span>
            </div>
          </div>
        </div>
        <div className='space-y-6 max-w-4xl mx-auto'>
          <div className='bg-slate-50 border border-slate-200 rounded-xl p-8'>
            <p className='text-slate-700 text-lg italic mb-4 leading-relaxed'>
              "We went from manual follow-ups to automated bookings in under 48 hours. Service bays are consistently full now."
            </p>
            <p className='text-slate-500 text-sm'>
              — Service Manager, Regional Dealership
            </p>
          </div>
          <div className='bg-slate-50 border border-slate-200 rounded-xl p-8'>
            <p className='text-slate-700 text-lg italic mb-4 leading-relaxed'>
              "The equity alerts brought in 12 trade-in appraisals in the first month. Our sales team loves it."
            </p>
            <p className='text-slate-500 text-sm'>
              — Dealer Principal, Multi-location Group
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
