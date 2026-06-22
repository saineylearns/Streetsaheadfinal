'use client';

import { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    const form = e.currentTarget;
    setTimeout(() => {
      form.reset();
      setSent(false);
    }, 2500);
  };

  const fieldClass =
    'w-full bg-transparent border-2 border-ink rounded-card px-5 py-4 placeholder-ink/40 transition-colors duration-200 focus:bg-cream';

  return (
    <section id="contact" className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-14">
        <div>
          <p className="label mb-4">Contact</p>
          <h2 className="headline text-5xl md:text-6xl mb-8">
            Get in
            <br />
            touch
          </h2>
          <p className="max-w-md text-ink/80 mb-10">
            Researching the festival, looking for archive material, or were you
            part of a past edition? We would love to hear from you.
          </p>

          <dl className="space-y-6">
            {[
              { k: 'Email', v: 'jeremy@streetsahead.org.uk' },
              { k: 'Based in', v: 'Manchester, United Kingdom' },
              { k: 'Replies', v: 'Within a few working days' },
            ].map((row) => (
              <div key={row.k}>
                <dt className="label text-ink/70 mb-1">{row.k}</dt>
                <dd className="text-xl font-bold">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 self-start">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="label block mb-2">
                Name
              </label>
              <input id="name" name="name" type="text" required placeholder="Your name" className={fieldClass} />
            </div>
            <div>
              <label htmlFor="email" className="label block mb-2">
                Email
              </label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="label block mb-2">
              Subject
            </label>
            <input id="subject" name="subject" type="text" placeholder="Archive enquiry, memories, press…" className={fieldClass} />
          </div>

          <div>
            <label htmlFor="message" className="label block mb-2">
              Message
            </label>
            <textarea id="message" name="message" required rows={6} placeholder="Tell us your story…" className={`${fieldClass} resize-none`} />
          </div>

          <button
            type="submit"
            className="bg-ink text-apricot font-bold px-10 py-4 rounded-full transition-colors duration-200 hover:bg-ink/85"
          >
            {sent ? 'Sent — thank you' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  );
}
