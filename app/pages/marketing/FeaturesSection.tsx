import { Card, CardContent } from "~/components/molecules/card";
import { Phone, Zap, Calendar, Database, CheckCircle2 } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id='features' className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Powerful Features That Drive Results
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Everything you need to transform your dealership's revenue engine
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <Card className='bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <CardContent className='p-8'>
              <div className='bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Phone className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Handle Inbound Calls
              </h3>
              <p className='text-slate-600 text-lg mb-4 leading-relaxed'>
                Our AI answers inbound service and sales calls to schedule
                appointments, freeing up your staff
              </p>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>24/7 availability</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Natural conversation flow</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Automatic appointment booking</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className='bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <CardContent className='p-8'>
              <div className='bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Zap className='h-8 w-8 text-green-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Instantly Engage Every Lead
              </h3>
              <p className='text-slate-600 text-lg mb-4 leading-relaxed'>
                Turn every web lead into a qualified appointment, day or night
              </p>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Instant response times</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Multi-channel engagement</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Lead qualification & scoring</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className='bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <CardContent className='p-8'>
              <div className='bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Calendar className='h-8 w-8 text-purple-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Proactively Generate Service Appointments
              </h3>
              <p className='text-slate-600 text-lg mb-4 leading-relaxed'>
                Automatically contact customers due for service and deferred
                services and get them on the books
              </p>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Automated service reminders</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Deferred service follow-up</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Personalized outreach</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card className='bg-white border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1'>
            <CardContent className='p-8'>
              <div className='bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Database className='h-8 w-8 text-orange-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Mine Your DMS for Hidden Sales
              </h3>
              <p className='text-slate-600 text-lg mb-4 leading-relaxed'>
                Proactively identify and engage with high-potential sales
                opportunities within your existing customer data
              </p>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>AI-powered opportunity detection</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Customer lifecycle tracking</span>
                </li>
                <li className='flex items-start gap-3 text-slate-600'>
                  <CheckCircle2 className='h-5 w-5 text-green-600 mt-1 flex-shrink-0' />
                  <span>Automated sales outreach</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
