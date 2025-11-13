import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "What makes Salientic AI different from other AI solutions?",
    answer:
      "Unlike reactive tools that wait for customers to reach out, Salientic AI is proactive. Our platform analyzes your DMS data to identify hidden opportunities and automatically engages customers with personalized outreach. We're built by automotive industry insiders who understand dealership operations.",
  },
  {
    question: "How is our conversational AI better than others?",
    answer:
      "Our AI is fine-tuned for automotive use cases, featuring advanced memory and context management. We can directly inject customer context from your DMS, enabling highly personalized and relevant interactions.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most dealerships start seeing results within the first 30 days. You'll notice immediate improvements in lead response times and appointment booking rates. The full impact on revenue typically materializes within 90 days as the AI learns your customer patterns and optimizes engagement strategies.",
  },
  {
    question: "What is the Design Partner program?",
    answer:
      "Our Design Partner program offers select dealerships the opportunity to shape our product roadmap while receiving the platform free during development and POC phases. Partners get lifetime 50% discounts and priority support. It's a risk-free way to gain a competitive advantage while helping us build the future of automotive retail.",
  },
  {
    question: "Is my customer data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption. Your data is never shared with third parties and we comply with all industry regulations including CCPA and GDPR. We maintain SOC 2 Type II compliance and conduct regular security audits.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide dedicated support throughout your journey. During onboarding, you'll work directly with our team for setup and training. Ongoing support includes a dedicated success manager, 24/7 technical support, and regular optimization sessions to ensure you're maximizing ROI.",
  },
];

export function FaqSection() {
  return (
    <section id='faq' className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-slate-600 max-w-2xl mx-auto'>
            Everything you need to know about Salientic AI
          </p>
        </div>
        <Accordion type='single' collapsible className='space-y-4'>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className='bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 px-8 hover:shadow-xl transition-all duration-300'
            >
              <AccordionTrigger className='text-xl font-bold text-slate-900 py-6 hover:no-underline cursor-pointer'>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className='text-slate-600 leading-relaxed pb-6'>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
