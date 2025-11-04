import { Zap, TrendingUp, CheckCircle2 } from "lucide-react";

export function SolutionSection() {
  return (
    <section className='py-20 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            Your AI-Powered Revenue Engine
          </h2>
          <p className='text-xl text-blue-100 max-w-3xl mx-auto'>
            A single, intelligent platform that transforms dealership
            operations from reactive to proactive
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <div className='text-center hover:scale-105 transition-transform duration-300'>
            <div className='bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors'>
              <Zap className='h-10 w-10 text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>First Engagement</h3>
            <p className='text-blue-100 text-lg'>
              Be the first to engage meaningfully with every lead
            </p>
          </div>
          <div className='text-center hover:scale-105 transition-transform duration-300'>
            <div className='bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors'>
              <TrendingUp className='h-10 w-10 text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Dead Data to Revenue</h3>
            <p className='text-blue-100 text-lg'>
              Your DMS becomes a proactive outreach engine that generates
              revenue
            </p>
          </div>
          <div className='text-center hover:scale-105 transition-transform duration-300'>
            <div className='bg-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover:bg-white/20 transition-colors'>
              <CheckCircle2 className='h-10 w-10 text-white' />
            </div>
            <h3 className='text-2xl font-bold mb-4'>Systemic Automation</h3>
            <p className='text-blue-100 text-lg'>
              Offload administrative tasks like booking appointments and
              inventory checks
            </p>
          </div>
        </div>
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center'>
          <div className='text-5xl font-bold mb-2'>9.9x ROI</div>
          <p className='text-xl text-blue-100 mb-4'>
            Turn your existing data into over{" "}
            <span className='font-bold text-white'>
              $247,000 in new monthly gross profit
            </span>{" "}
            for a typical 10-store group
          </p>
        </div>
      </div>
    </section>
  );
}
