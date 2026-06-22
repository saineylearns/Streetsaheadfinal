export default function About() {
  return (
    <section id="about" className="bg-ink text-cream px-6 md:px-10 py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto">
        <p className="label text-apricot mb-6">About · Manchester International Arts</p>

        <h2 className="headline text-4xl md:text-6xl max-w-4xl">
          Street arts for the 21st century
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="space-y-6 text-cream/90">
            <p>
              Manchester International Arts was created in 1988 to present
              international, multi-cultural and animatory street art events and
              festivals in Greater Manchester — mostly outdoors and mostly free.
            </p>
            <p>
              For over three decades our energy and imagination was devoted to
              organising large and vibrant street festivals in urban centres and
              parks: Streets Ahead, the Commonwealth Games Festival, The Garden
              of Delights, and Feast — picnic by the lake.
            </p>
            <p>
              We took the Streets Ahead concept to Liverpool for Capital of
              Culture 2008, programmed Lakes Alive across Cumbria as part of the
              Cultural Olympiad, directed SIRF — one of the biggest street
              festivals in the UK — and brought street spectacle to the newly
              renovated Piece Hall in Halifax.
            </p>
          </div>

          <figure className="border-l-4 border-apricot pl-8 self-center">
            <blockquote className="text-2xl md:text-3xl font-bold leading-snug">
              &ldquo;To create an exciting, energising atmosphere in a town or
              city centre that maximises its existing potential by the addition
              of carefully chosen special events and street arts.&rdquo;
            </blockquote>
            <figcaption className="label text-apricot mt-6">
              The company&rsquo;s founding goal
            </figcaption>
          </figure>
        </div>

        {/* Founders + facts strip */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 border-t-2 border-cream/20">
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
