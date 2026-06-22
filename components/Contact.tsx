export default function Contact() {
  const user = 'jeremy';
  const domain = 'streetsahead.org.uk';

  return (
    <section id="contact" className="px-6 md:px-10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
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

        <dl>
          <dt className="label text-ink/70 mb-1">Email</dt>
          <dd className="text-xl font-bold">
            <a
              href={`mailto:${user}@${domain}`}
              className="hover:underline underline-offset-4"
            >
              {user}{'@'}{domain}
            </a>
          </dd>
        </dl>
      </div>
    </section>
  );
}
