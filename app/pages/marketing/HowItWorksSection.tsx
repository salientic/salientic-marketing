import { Button } from "~/components/atoms/button";
import { Upload, Settings, Send } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section id='how-it-works' className='py-20 px-4 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Three steps to automated campaigns
          </h2>
          <p className='text-base text-slate-600 max-w-3xl mx-auto'>
            AI prioritizes Recall → Service → Equity, personalizes by VIN, and respects caps, consent, and quiet hours
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-12 mb-12'>
          <div className='text-center'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm'>
              <Upload className='h-8 w-8' />
            </div>
            <div className='text-sm text-slate-500 mb-2'>Step 1</div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>
              Upload
            </h3>
            <p className='text-slate-600 leading-relaxed'>
              Upload your CRM/DMS export. No lists to build.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm'>
              <Settings className='h-8 w-8' />
            </div>
            <div className='text-sm text-slate-500 mb-2'>Step 2</div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>
              AI decides
            </h3>
            <p className='text-slate-600 leading-relaxed'>
              Auto-segment leads, prioritize campaigns, enforce rules and consent.
            </p>
          </div>
          <div className='text-center'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm'>
              <Send className='h-8 w-8' />
            </div>
            <div className='text-sm text-slate-500 mb-2'>Step 3</div>
            <h3 className='text-2xl font-bold text-slate-900 mb-4'>
              Sends & tracks
            </h3>
            <p className='text-slate-600 leading-relaxed'>
              Personalized emails with dashboards showing bookings and policy transparency.
            </p>
          </div>
        </div>
        <div className='text-center'>
          <Button
            variant='outline'
            className='border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-lg'
            onClick={() => {
              window.location.href = '/how-it-works';
            }}
          >
            See how it works in detail
          </Button>
        </div>
      </div>
    </section>
  );
}
