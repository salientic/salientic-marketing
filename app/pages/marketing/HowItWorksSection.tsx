export function HowItWorksSection() {
  return (
    <section id='how-it-works' className='py-20 px-4 bg-slate-50'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            How It Works
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            From integration to revenue generation in four simple steps
          </p>
        </div>
        <div className='grid md:grid-cols-4 gap-8'>
          <div className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg'>
              01
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
              Integrate
            </h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              We connect to your existing DMS and CRM
            </p>
          </div>
          <div className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg'>
              02
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
              Analyze
            </h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              Our AI identifies revenue opportunities in your data
            </p>
          </div>
          <div className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg'>
              03
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
              Engage
            </h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              The AI launches automated, human-like conversations via voice,
              SMS, and email
            </p>
          </div>
          <div className='relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto shadow-lg'>
              04
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-4 text-center'>
              Deliver
            </h3>
            <p className='text-slate-600 text-center leading-relaxed'>
              We deliver appointment-set, pre-qualified customers to your
              teams
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
