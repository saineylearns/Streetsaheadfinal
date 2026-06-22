'use client';

import { useState } from 'react';
import Link from 'next/link';
import { archiveItems, type Era } from '@/lib/archive';

type Filter = 'All' | Era;

const filters: Filter[] = ['All', 'Streets Ahead', 'Citywide', 'Beyond Manchester'];

export default function Portfolio() {
  const [active, setActive] = useState<Filter>('All');

  const shown =
    active === 'All' ? archiveItems : archiveItems.filter((i) => i.era === active);

  return (
    <section id="collection" className="px-6 md:px-10 py-20 md:py-28 border-t-2 border-ink">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-8 mb-12">
          <div>
            <p className="label mb-4">The collection</p>
            <h2 className="headline text-5xl md:text-6xl">Past events</h2>
          </div>

          {/* Filter chips, museum-catalog style */}
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter the collection">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`label px-5 py-3 rounded-full border-2 border-ink transition-colors duration-200 ${
                  active === f
                    ? 'bg-ink text-apricot'
                    : 'bg-transparent text-ink hover:bg-ink hover:text-apricot'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className="label text-ink/70 mb-8">
          Showing {shown.length} of {archiveItems.length} entries
        </p>

        {/* Portrait catalog grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-14">
          {shown.map((item) => (
            <li key={item.slug} className="tile group">
              <Link href={`/collection/${item.slug}`} className="block">
                <div className="tile-frame rounded-card bg-ink">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.title}, ${item.years}`}
                      className="tile-art aspect-[4/5] w-full object-cover"
                    />
                  ) : (
                    <div
                      className="tile-art aspect-[4/5]"
                      style={{ backgroundImage: item.art }}
                      role="img"
                      aria-label={`${item.title}, ${item.years}`}
                    />
                  )}
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold leading-tight group-hover:underline underline-offset-4">
                      {item.title}
                    </h3>
                    <p className="text-ink/70 mt-1">{item.place}</p>
                  </div>
                  <span className="label whitespace-nowrap mt-1">{item.years}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
