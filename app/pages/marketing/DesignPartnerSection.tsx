import { Button } from "~/components/atoms/button";
import { Card, CardContent } from "~/components/molecules/card";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Users } from "lucide-react";

export function DesignPartnerSection() {
  return (
    <section
      id='partners'
      className='py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50'
    >
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <div className='inline-block mb-6'>
            <div className='bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse'>
              Limited Opportunity - Only 7 Spots Available
            </div>
          </div>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Become a Design Partner
          </h2>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Join innovative dealerships partnering with us to build the future
            of automotive retail. Work directly with our founding team to shape
            the product and gain early-mover advantage.
          </p>
        </div>

        {/* Why Become a Design Partner */}
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border border-blue-100'>
          <h3 className='text-3xl font-bold text-slate-900 mb-8 text-center'>
            Why Become a Design Partner?
          </h3>
          <div className='grid md:grid-cols-2 gap-8 mb-8'>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
              </div>
              <div>
                <h4 className='font-bold text-slate-900 mb-2'>
                  Shape the Product Roadmap
                </h4>
                <p className='text-slate-600'>
                  Have direct influence on features and capabilities. Your
                  feedback drives development priorities.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
              </div>
              <div>
                <h4 className='font-bold text-slate-900 mb-2'>
                  Zero Risk, High Reward
                </h4>
                <p className='text-slate-600'>
                  9 months free (3 months development + 6 months POC) to prove
                  value before any investment.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
              </div>
              <div>
                <h4 className='font-bold text-slate-900 mb-2'>
                  Competitive Moat
                </h4>
                <p className='text-slate-600'>
                  Deploy AI capabilities 12-18 months before competitors in your
                  market can access similar technology.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
              </div>
              <div>
                <h4 className='font-bold text-slate-900 mb-2'>
                  White-Glove Support
                </h4>
                <p className='text-slate-600'>
                  Dedicated engineering resources and priority support
                  throughout the partnership.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
              </div>
              <div>
                <h4 className='font-bold text-slate-900 mb-2'>
                  Lifetime 50% Discount
                </h4>
                <p className='text-slate-600'>
                  Lock in permanent pricing advantage - half price for the life
                  of your subscription.
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              <div className='flex-shrink-0'>
                <CheckCircle2 className='h-6 w-6 text-green-600' />
              </div>
              <div>
                <h4 className='font-bold text-slate-900 mb-2'>
                  Industry Recognition
                </h4>
                <p className='text-slate-600'>
                  Featured in case studies and industry publications as an
                  innovation leader.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-12'>
          <Card className='bg-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105'>
            <CardContent className='p-8 text-center'>
              <div className='bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <TrendingUp className='h-10 w-10 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-4'>
                Competitive Advantage
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Be the first to deploy a proactive AI revenue engine in your
                market
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105'>
            <CardContent className='p-8 text-center'>
              <div className='bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Zap className='h-10 w-10 text-green-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-4'>
                No Financial Risk
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Development and POC phases are completely free of charge
              </p>
            </CardContent>
          </Card>
          <Card className='bg-white border border-blue-100 hover:shadow-2xl transition-all duration-300 hover:scale-105'>
            <CardContent className='p-8 text-center'>
              <div className='bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg'>
                <Users className='h-10 w-10 text-purple-600' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 mb-4'>
                Lifetime Discount
              </h3>
              <p className='text-slate-600 leading-relaxed'>
                Receive 50% off list price for the lifetime of your contract
              </p>
            </CardContent>
          </Card>
        </div>
        <div className='bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100'>
          <h3 className='text-3xl font-bold text-slate-900 mb-8 text-center'>
            Partnership Structure
          </h3>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg'>
                01
              </div>
              <h4 className='text-xl font-bold text-slate-900 mb-3'>
                Shape the Product
              </h4>
              <p className='text-slate-600 mb-2'>
                <strong>3 Months</strong>
              </p>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Deep integration and platform refinement based on your feedback.
                No cost during this phase.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg'>
                02
              </div>
              <h4 className='text-xl font-bold text-slate-900 mb-3'>
                Prove the Value
              </h4>
              <p className='text-slate-600 mb-2'>
                <strong>6 Months</strong>
              </p>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Deploy live, prove ROI, and measure results. Free of charge.
              </p>
            </div>
            <div className='text-center'>
              <div className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto shadow-lg'>
                03
              </div>
              <h4 className='text-xl font-bold text-slate-900 mb-3'>
                Rollout & Scale
              </h4>
              <p className='text-slate-600 mb-2'>
                <strong>Lifetime Discount</strong>
              </p>
              <p className='text-slate-600 text-sm leading-relaxed'>
                Transition to full subscription with 50% lifetime discount
              </p>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-slate-200 text-center'>
            <Button
              size='lg'
              className='bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all'
              onClick={() => {
                document
                  .getElementById("contact-us")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Apply for Design Partnership
              <ArrowRight className='ml-2 h-5 w-5' />
            </Button>
            <p className='mt-4 text-sm text-slate-600'>
              Limited to select dealership groups committed to innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
