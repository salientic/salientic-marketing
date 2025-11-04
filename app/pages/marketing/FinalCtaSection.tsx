import { Button } from "~/components/atoms/button";
import { Mail } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className='py-24 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 text-white relative overflow-hidden'>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className='container mx-auto max-w-4xl text-center relative z-10'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>
          Ready to Transform Your Dealership?
        </h2>
        <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed'>
          Join innovative dealerships already building the future of
          automotive retail. Request a demo and see how Salientic AI can
          become your proactive revenue engine.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-10'>
          <Button
            size='lg'
            className='bg-white text-blue-600 hover:bg-blue-50 text-lg px-10 py-6 shadow-2xl hover:shadow-3xl transition-all'
            onClick={() => {
              document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Mail className='mr-2 h-5 w-5' />
            Request a Demo
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-10 py-6 transition-all'
          >
            Schedule a Call
          </Button>
        </div>
        <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block'>
          <p className='text-blue-100 text-lg'>
            <strong className='text-white'>Limited Time:</strong> Early
            partners receive lifetime discounts and shape our product roadmap
          </p>
        </div>
      </div>
    </section>
  );
}
