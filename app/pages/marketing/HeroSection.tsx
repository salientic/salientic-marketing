import { Button } from "~/components/atoms/button";
import { Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className='pt-32 pb-20 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50'>
      <div className='container mx-auto max-w-5xl'>
        <div className='text-center space-y-8'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight'>
            AI campaign system that revives dormant leads, fills service bays, and sources trade-ins automatically
          </h1>
          <p className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Upload your CRM/DMS export and Salientic's AI handles targeting, timing, and compliance—no segmentation or rules—so you see bookings, appraisals, and upsells in days.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-6 shadow-sm rounded-lg'
              onClick={() => {
                document.getElementById('partners')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Become a design partner
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-base px-8 py-6 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg'
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See how it works
            </Button>
          </div>
          <div className='pt-8 flex flex-wrap justify-center gap-6 text-slate-600'>
            <div className='flex items-center gap-2'>
              <Check className='h-4 w-4 text-green-600' />
              <span className='text-sm'>Live in &lt;48h</span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='h-4 w-4 text-green-600' />
              <span className='text-sm'>2 emails/week cap</span>
            </div>
            <div className='flex items-center gap-2'>
              <Check className='h-4 w-4 text-green-600' />
              <span className='text-sm'>Consent honored</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
