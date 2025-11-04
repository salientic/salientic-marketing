export function RoiStatsSection() {
  return (
    <section className='py-20 px-4 bg-slate-900 text-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4'>
            What to expect !
          </h2>
          <p className='text-xl text-slate-300 max-w-2xl mx-auto'>
            Measurable impact on your key performance indicators from day one
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center'>
            <div className='text-6xl font-bold text-blue-400 mb-4'>50%</div>
            <h3 className='text-2xl font-bold mb-2'>Lead Conversion Boost</h3>
            <p className='text-slate-300 text-lg'>
              Experience up to a 50% increase in your lead-to-appointment
              conversion rates
            </p>
          </div>
          <div className='text-center'>
            <div className='text-6xl font-bold text-green-400 mb-4'>
              $247K
            </div>
            <h3 className='text-2xl font-bold mb-2'>Monthly Gross Profit</h3>
            <p className='text-slate-300 text-lg'>
              Average new monthly gross profit for a typical 10-store group
            </p>
          </div>
          <div className='text-center'>
            <div className='text-6xl font-bold text-purple-400 mb-4'>
              9.9x
            </div>
            <h3 className='text-2xl font-bold mb-2'>Return on Investment</h3>
            <p className='text-slate-300 text-lg'>
              Platform delivers nearly 10x ROI, making it a self-funding
              investment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
