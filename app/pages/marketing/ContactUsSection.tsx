import { Button } from "~/components/atoms/button";
import { Input } from "~/components/atoms/input";
import { Label } from "~/components/atoms/label";
import { Textarea } from "~/components/atoms/textarea";
import { useState } from "react";

export function ContactUsSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionMessage("Thanks for your submission!");
        form.reset();
      } else {
        const data = await response.json();
        setSubmissionMessage(data.error || "Sorry, there was a problem submitting your form.");
      }
    } catch (error) {
      setSubmissionMessage("Sorry, there was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id='contact-us' className='py-20 px-4 bg-white'>
      <div className='container mx-auto max-w-2xl'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-slate-900 mb-4'>
            Contact Us
          </h2>
          <p className='text-xl text-slate-600'>
            Have a question? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className='bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg'>
          <form 
            action="https://formkeep.com/f/d11d201ad29b" 
            acceptCharset="UTF-8" 
            encType="multipart/form-data" 
            method="POST" 
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" id="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile (Optional)</Label>
              <Input type="text" name="mobile" id="mobile" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea name="message" id="message" rows={4} required />
            </div>
            <Button type="submit" className='w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-3 shadow-lg hover:shadow-xl transition-all' disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
            {submissionMessage && <p className="text-center mt-4">{submissionMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
