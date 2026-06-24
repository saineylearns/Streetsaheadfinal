'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Collection', href: '/#collection' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-apricot border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/streets-ahead-logo.jpeg"
            alt="Streets Ahead logo"
            width={48}
            height={48}
            className="rounded-sm"
          />
          <span className="leading-tight">
            <span className="block font-bold uppercase text-xl tracking-tight">
              Streets Ahead
            </span>
            <span className="label text-ink/70">Manchester International Arts</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link
            href="/#collection"
            className="bg-ink text-apricot font-bold px-7 py-3 rounded-full transition-colors duration-200 hover:bg-ink/85"
          >
            View the archive
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={`block w-7 h-0.5 bg-ink transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-7 h-0.5 bg-ink ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-7 h-0.5 bg-ink transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t-2 border-ink px-6 py-6 flex flex-col gap-5 bg-apricot">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bold uppercase"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
