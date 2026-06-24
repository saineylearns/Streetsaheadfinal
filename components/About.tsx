import Reveal from '@/components/Reveal';

const energyWords = [
  'Fire',
  'Stilts',
  'Puppets',
  'Aerial',
  'Carnival',
  'Procession',
  'Circus',
  'Light',
  'Drumming',
  'Spectacle',
];

const companies = [
  'Transe Express',
  'Theater Titanick',
  'Grupo Puja',
  'Sarruga',
  'Quidams',
  'Theater Tol',
  'Gandini Jugglers',
  'Les Goulus',
  'Whalley Range All Stars',
  'Desperate Men',
];

function Marquee({
  items,
  tone = 'cream',
}: {
  items: string[];
  tone?: 'cream' | 'apricot';
}) {
  const row = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="marquee-item">
            <span
              className={`headline text-3xl md:text-5xl px-6 md:px-9 ${
                tone === 'apricot' ? 'text-apricot' : 'text-cream/90'
              }`}
            >
              {t}
            </span>
            <span className="text-apricot/70 text-xl md:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const photos = [
  { src: '/archive/stilts.jpg', cap: 'Stilt-walkers over the crowd', rot: '-rotate-2', shift: 'mt-8' },
  { src: '/archive/dbg.jpg', cap: 'Carnival, full colour', rot: 'rotate-2', shift: '' },
  { src: '/archive/carabosse2.jpeg', cap: 'A night of lanterns', rot: 'rotate-1', shift: '-mt-2' },
  { src: '/archive/fullmooncalvos26.jpeg', cap: 'Object & aerial theatre', rot: '-rotate-1', shift: 'mt-4' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-ink text-cream overflow-hidden">
      {/* Kinetic energy marquee */}
      <div className="py-5 md:py-7 border-y-2 border-cream/15">
        <Marquee items={energyWords} tone="apricot" />
      </div>

      <div className="px-6 md:px-10 py-20 md:py-28 max-w-[1400px] mx-auto">
        <Reveal>
          <p className="label text-apricot mb-6">About · Manchester International Arts</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="headline text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            Street arts
            <br />
            for the 21st century
          </h2>
        </Reveal>

        {/* Photo cluster + lead text */}
        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              {photos.map((p) => (
                <figure
                  key={p.src}
                  className={`relative ${p.rot} ${p.shift} transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.04] hover:z-10`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.cap}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover rounded-card shadow-2xl"
                  />
                  <figcaption className="label text-cream/55 mt-2.5">{p.cap}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>

          <div className="order-1 lg:order-2 space-y-6 text-lg md:text-xl text-cream/85">
            <Reveal>
              <p className="text-2xl md:text-3xl font-medium leading-snug text-cream">
                Manchester International Arts was founded in 1988 to present
                ‘world music’ and performances by the many cultural communities
                of Greater Manchester, but soon expanded to cover all art forms —
                especially multi-cultural and animatory street art events and
                festivals.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p>
                For over three decades our energy and imagination was devoted to
                organising large and vibrant street festivals in urban centres
                and parks: Streets Ahead, the Commonwealth Games Festival, Urban
                Moves, The Garden of Delights, and Feast — picnic by the lake.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p>
                We took the Streets Ahead concept to Liverpool for Capital of
                Culture 2008, programmed Lakes Alive across Cumbria as part of the
                Cultural Olympiad, directed SIRF — one of the biggest street
                festivals in the UK — and brought street spectacle to
                Huddersfield, Gateshead, Dewsbury, Birmingham and the newly
                renovated Piece Hall in Halifax.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Cinematic pull quote */}
        <Reveal>
          <figure className="mt-20 md:mt-28 max-w-5xl">
            <blockquote className="headline text-3xl md:text-5xl lg:text-6xl leading-[1.05] text-apricot">
              “To create an exciting, energising atmosphere in a town or city
              centre that maximises its existing potential by the addition of
              carefully chosen special events and street arts.”
            </blockquote>
            <figcaption className="label text-cream/55 mt-7">
              The company’s founding goal
            </figcaption>
          </figure>
        </Reveal>

        {/* M.I.A. now */}
        <div className="mt-20 md:mt-28 border-t-2 border-cream/15 pt-12 grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <div>
              <p className="label text-apricot mb-6">M.I.A. now</p>
              <ul className="space-y-4 text-xl md:text-2xl font-bold leading-snug">
                <li>We present occasional performances and events in mostly unusual spaces.</li>
                <li>We support festivals and event organisers with programming.</li>
                <li>We offer outdoor artists free mentoring.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6 text-cream/85 self-center">
              <p>
                The Archive features our principal festivals and some of our major
                events — more details and other presentations will be added before
                the end of 2026.
              </p>
              <p>
                The M.I.A. physical archive is now hosted by the local history
                archive at Manchester Central Library, where it is available for
                viewing and research purposes. It is currently being catalogued,
                which should be finished by the end of 2026.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Company marquee — celebrate the artists */}
      <div className="py-6 md:py-8 border-y-2 border-cream/15">
        <p className="label text-cream/45 text-center mb-4 px-6">
          A few of the companies we brought to the streets
        </p>
        <Marquee items={companies} tone="cream" />
      </div>

      {/* Founders + facts strip */}
      <div className="px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 border-t-2 border-cream/15">
          {[
            { k: 'Founded by', v: 'Anne Tucker & Jeremy Shine' },
            { k: 'Photography', v: 'Paul Herrmann' },
            { k: 'Network', v: 'UK & international companies' },
          ].map((f) => (
            <div key={f.k} className="py-8 pr-8">
              <p className="label text-apricot mb-2">{f.k}</p>
              <p className="text-xl font-bold">{f.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
