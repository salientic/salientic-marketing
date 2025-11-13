import { Card, CardContent } from "~/components/molecules/card";
import { Button } from "~/components/atoms/button";
import { Users, Wrench, TrendingUp, ShoppingBag } from "lucide-react";

export function FeaturesSection() {
  return (
    <section id='outcomes' className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Turn your data into outcomes
          </h2>
          <p className='text-lg text-slate-600 max-w-3xl mx-auto'>
            AI-powered campaigns that deliver measurable results across your dealership
          </p>
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <Card className='bg-white border border-slate-200 hover:shadow-lg transition-all'>
            <CardContent className='p-6 text-left'>
              <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4'>
                <Users className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>
                Dormant Leads
              </h3>
              <p className='text-slate-600 text-sm mb-4 leading-relaxed'>
                Revive old leads with AI timing & content to turn silence into visits, appraisals, and bookings.
              </p>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                Learn more →
              </a>
            </CardContent>
          </Card>
          <Card className='bg-white border border-slate-200 hover:shadow-lg transition-all'>
            <CardContent className='p-6 text-left'>
              <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4'>
                <Wrench className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>
                Service Bookings
              </h3>
              <p className='text-slate-600 text-sm mb-4 leading-relaxed'>
                14/7/1-day reminders fill bays on time and lift RO value.
              </p>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                Learn more →
              </a>
            </CardContent>
          </Card>
          <Card className='bg-white border border-slate-200 hover:shadow-lg transition-all'>
            <CardContent className='p-6 text-left'>
              <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4'>
                <TrendingUp className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>
                Trade-ins
              </h3>
              <p className='text-slate-600 text-sm mb-4 leading-relaxed'>
                Equity math (valuation - payoff) triggers upgrade emails and appraisal bookings.
              </p>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                Learn more →
              </a>
            </CardContent>
          </Card>
          <Card className='bg-white border border-slate-200 hover:shadow-lg transition-all'>
            <CardContent className='p-6 text-left'>
              <div className='bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4'>
                <ShoppingBag className='h-6 w-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>
                After-sales
              </h3>
              <p className='text-slate-600 text-sm mb-4 leading-relaxed'>
                Post-service NPS prompts accessories and parts upsells.
              </p>
              <a href='#' className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                Learn more →
              </a>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-12'>
          <Button
            className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-sm'
          >
            Explore all outcomes →
          </Button>
        </div>
      </div>
    </section>
  );
}
