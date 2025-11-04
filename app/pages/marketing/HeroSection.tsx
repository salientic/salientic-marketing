import { Button } from "~/components/atoms/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className='pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center space-y-8'>
          <div className='inline-block'>
            <div className='bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg'>
              The AI Platform for Automotive Dealerships
            </div>
          </div>
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight'>
            Building the Self-Driving
            <span className='block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent'>
              Auto Dealership
            </span>
          </h1>
          <p className='text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Transform your dealership with an intelligent platform that works
            24/7 to turn leads into revenue while your team focuses on closing
            deals.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center pt-4'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all'
              onClick={() => {
                document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request a Demo
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-lg px-8 py-6 border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
            >
              Become a Design Partner
            </Button>
          </div>
          <div className='pt-8 flex flex-wrap justify-center gap-8 text-slate-700'>
            <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md'>
              <CheckCircle2 className='h-5 w-5 text-green-600' />
              <span className='font-semibold'>9.9x ROI</span>
            </div>
            <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md'>
              <CheckCircle2 className='h-5 w-5 text-green-600' />
              <span className='font-semibold'>24/7 AI Engagement</span>
            </div>
            <div className='flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md'>
              <CheckCircle2 className='h-5 w-5 text-green-600' />
              <span className='font-semibold'>50% Lead Conversion Boost</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
