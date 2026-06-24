import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { archiveItems, getArchiveItem } from '@/lib/archive';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export function generateStaticParams() {
  return archiveItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const item = getArchiveItem((await params).slug);
  if (!item) return {};
  return {
    title: `${item.title} — Streets Ahead Archive`,
    description: item.summary,
  };
}

export default async function ArchiveEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const item = getArchiveItem((await params).slug);
  if (!item) notFound();

  const index = archiveItems.findIndex((i) => i.slug === item.slug);
  const prev = archiveItems[index - 1];
  const next = archiveItems[index + 1];

  return (
    <main>
      <Navigation />

      <article className="px-6 md:px-10 py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/#collection" className="label nav-link inline-block mb-10">
            ← Back to the collection
          </Link>

          <p className="label text-ink/70 mb-4">
            The collection · Entry {String(index + 1).padStart(2, '0')} of{' '}
            {archiveItems.length}
          </p>

          <h1 className="headline text-5xl md:text-7xl lg:text-8xl max-w-5xl">
            {item.title}
          </h1>

          {/* Catalog facts strip */}
          <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 border-t-2 border-ink">
            {[
              { k: 'Years', v: item.years },
              { k: 'Place', v: item.place },
              { k: 'Series', v: item.era },
            ].map((f) => (
              <div key={f.k} className="py-6 pr-6 border-b-2 sm:border-b-0 border-ink/20">
                <dt className="label text-ink/70 mb-2">{f.k}</dt>
                <dd className="text-2xl font-bold">{f.v}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 items-start">
            {/* Recovered archive photograph at its natural size, or stand-in until one is found */}
            <figure className="self-start">
              <div className="tile-frame rounded-card bg-ink">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.title}, ${item.years}`}
                    className="w-full h-auto"
                  />
                ) : (
                  <div
                    className="aspect-[4/5]"
                    style={{ backgroundImage: item.art }}
                    role="img"
                    aria-label={`${item.title}, ${item.years}`}
                  />
                )}
              </div>
              {item.imageCaption && (
                <figcaption className="label text-ink/70 mt-3">
                  {item.imageCaption}
                </figcaption>
              )}
            </figure>

            <div>
              <p className="text-2xl font-medium leading-snug mb-8">{item.summary}</p>
              <div className="space-y-6 text-ink/80">
                {item.body.map((para) => (
                  <p key={para.slice(0, 32)}>{para}</p>
                ))}
              </div>

              {item.companies && (
                <div className="mt-10">
                  <p className="label text-ink/70 mb-4">Featured companies</p>
                  <ul className="flex flex-wrap gap-3">
                    {item.companies.map((c) => (
                      <li
                        key={c}
                        className="label px-4 py-2.5 border-2 border-ink rounded-full"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Prev / next catalog navigation */}
          <nav
            aria-label="Collection navigation"
            className="mt-20 pt-8 border-t-2 border-ink flex justify-between gap-6"
          >
            {prev ? (
              <Link href={`/collection/${prev.slug}`} className="group max-w-xs">
                <p className="label text-ink/70 mb-2">← Previous</p>
                <p className="text-xl font-bold group-hover:underline underline-offset-4">
                  {prev.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/collection/${next.slug}`} className="group max-w-xs text-right">
                <p className="label text-ink/70 mb-2">Next →</p>
                <p className="text-xl font-bold group-hover:underline underline-offset-4">
                  {next.title}
                </p>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>
      </article>

      <Footer />
    </main>
  );
}
