export default function Footer() {
  return (
    <footer className="bg-ink text-cream px-6 md:px-10 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 gap-12 pb-14 border-b-2 border-cream/20">
          <div>
            <p className="font-bold uppercase text-2xl tracking-tight">Streets Ahead</p>
            <p className="label text-apricot mt-1">Manchester International Arts</p>
            <p className="text-cream/70 mt-5 max-w-xs">
              An archive of street festivals presented across Greater Manchester
              and the North of England, 1988 — 2019.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label text-apricot mb-5">Index</p>
            <ul className="space-y-3">
              {[
                { label: 'Collection', href: '#collection' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="nav-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label text-apricot mb-5">Elsewhere</p>
            <ul className="space-y-3">
              {['Flickr', 'Facebook', 'YouTube'].map((s) => (
                <li key={s}>
                  <a href="#" className="nav-link">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-4 text-cream/60 text-sm">
          <p>© Manchester International Arts. All rights reserved.</p>
          <p>Original MIA photography © Paul Herrmann.</p>
        </div>
      </div>
    </footer>
  );
}
