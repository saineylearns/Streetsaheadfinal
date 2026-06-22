export default function Contact() {
  // Email split to deter scrapers
  const user = 'jeremy';
  const domain = 'streetsahead.org.uk';

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
            <div>
              <dt className="label text-ink/70 mb-1">Email</dt>
              <dd className="text-xl font-bold">
                <a
                  href={`mailto:${user}@${domain}`}
                  className="hover:underline underline-offset-4"
                >
                  {user}&#64;{domain}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-ink/70 mb-1">Address</dt>
              <dd className="text-xl font-bold leading-snug">
                Apt 10, 4 Barton Street
                <br />
                Manchester M3 4NN
              </dd>
            </div>
          </dl>
        </div>

        <div className="self-end">
          <p className="text-sm text-ink/60 leading-relaxed max-w-sm">
            Manchester International Arts is the trading name of Multi-Cultural
            Arts Ltd (Co. Number 2763418), a Registered Charity (No.&nbsp;1015459).
            Registered address: Apt 10, 4 Barton Street, Manchester M3 4NN.
          </p>
        </div>
      </div>
    </section>
  );
}
