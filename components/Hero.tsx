import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top">
      <div className="px-6 md:px-10 pt-20 md:pt-28 max-w-[1400px] mx-auto">
        <p className="label mb-6">The archive · 1988 — 2025</p>

        <h1 className="headline text-[15vw] md:text-[120px] lg:text-[150px]">
          View our
          <br />
          highlights
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-10 items-end">
          <p className="text-xl md:text-2xl font-medium leading-snug max-w-xl">
            Street arts for the 21st century. Three decades of international,
            multi-cultural street festivals across Greater Manchester — mostly
            outdoors, and mostly free.
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <a
              href="#collection"
              className="bg-ink text-apricot font-bold px-8 py-4 rounded-full transition-colors duration-200 hover:bg-ink/85"
            >
              Browse the collection
            </a>
            <a
              href="#about"
              className="border-2 border-ink font-bold px-8 py-4 rounded-full transition-colors duration-200 hover:bg-ink hover:text-apricot"
            >
              Our story
            </a>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-14 md:mt-20 w-full aspect-[16/7] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Titanick — Streets Ahead Festival"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <p className="absolute bottom-6 left-6 md:left-10 text-cream/80 text-sm font-medium">
          Titanick · Streets Ahead Festival, Manchester
        </p>
      </div>

      {/* Catalog facts strip */}
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <dl className="grid grid-cols-2 md:grid-cols-4 border-t-2 border-ink">
          {[
            { k: 'Founded', v: '1988' },
            { k: 'Festivals presented', v: '30+' },
            { k: 'Home city', v: 'Manchester' },
            { k: 'Admission', v: 'Free' },
          ].map((f) => (
            <div key={f.k} className="py-6 pr-6 border-b-2 md:border-b-0 border-ink/20">
              <dt className="label text-ink/70 mb-2">{f.k}</dt>
              <dd className="text-2xl font-bold">{f.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
