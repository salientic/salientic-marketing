import { Button } from "~/components/atoms/button";

export function FinalCtaSection() {
  return (
    <section className='py-24 px-4 bg-blue-600 text-white'>
      <div className='container mx-auto max-w-4xl text-center'>
        <h2 className='text-4xl md:text-5xl font-bold mb-6'>
          Live in ≤48 hours. No audience work.
        </h2>
        <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed'>
          Start seeing bookings, appraisals, and upsells this week.
        </p>
        <Button
          size='lg'
          className='bg-slate-900 text-white hover:bg-slate-800 text-lg px-10 py-6 shadow-lg rounded-lg'
          onClick={() => {
            document.getElementById('contact-us')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Book a demo
        </Button>
      </div>
    </section>
  );
}
