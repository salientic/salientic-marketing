import { Card, CardContent } from "~/components/molecules/card";
import { Clock, Users, Database } from "lucide-react";

export function ProblemSection() {
  return (
    <section className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            You're Leaking Revenue
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Every dealership struggles with the same core problems
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          <Card className='bg-gradient-to-br from-red-50 to-white border border-red-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700'>
            <CardContent className='p-8'>
              <div className='bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Clock className='h-8 w-8 text-red-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Lost Leads
              </h3>
              <p className='text-slate-600 text-lg leading-relaxed'>
                High-intent leads that come in after hours or are lost due to
                delayed engagement
              </p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150'>
            <CardContent className='p-8'>
              <div className='bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Users className='h-8 w-8 text-orange-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Overworked Teams
              </h3>
              <p className='text-slate-600 text-lg leading-relaxed'>
                Your best people are stuck making routine calls instead of
                closing deals and developing relationships
              </p>
            </CardContent>
          </Card>
          <Card className='bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300'>
            <CardContent className='p-8'>
              <div className='bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md'>
                <Database className='h-8 w-8 text-yellow-600' />
              </div>
              <h3 className='text-2xl font-bold text-slate-900 mb-4'>
                Lost Longtail
              </h3>
              <p className='text-slate-600 text-lg leading-relaxed'>
                Your DMS is a goldmine of service and sales opportunities that
                you don't have the manpower to act on
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
