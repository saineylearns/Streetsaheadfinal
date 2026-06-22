export default function Hero() {
  return (
    <section id="top" className="px-6 md:px-10 pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="max-w-[1400px] mx-auto">
        <p className="label mb-6">The archive · 1988 — 2019</p>

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

        {/* Catalog facts strip */}
        <dl className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 border-t-2 border-ink">
          {[
            { k: 'Founded', v: '1988' },
            { k: 'Festivals presented', v: '30+' },
            { k: 'Home city', v: 'Manchester' },
            { k: 'Admission', v: 'Mostly free' },
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
