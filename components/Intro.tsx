'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Intro() {
  const [show, setShow] = useState(true);

  // Skip the intro if already seen this session or reduced motion is preferred.
  useEffect(() => {
    const seen = sessionStorage.getItem('miaIntroShown');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (seen || reduce) setShow(false);
  }, []);

  // Lock scroll while showing; always restore + flag once dismissed.
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
      // Safety fallback in case the animation never ends (e.g. backgrounded tab).
      const fallback = setTimeout(() => setShow(false), 4500);
      return () => clearTimeout(fallback);
    }
    document.body.style.overflow = '';
    sessionStorage.setItem('miaIntroShown', '1');
  }, [show]);

  if (!show) return null;

  return (
    <div
      className="intro-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 bg-black cursor-pointer"
      onAnimationEnd={(e) => {
        // Only the overlay's own fade-out should dismiss (ignore child item fades).
        if (e.target === e.currentTarget) setShow(false);
      }}
      onClick={() => setShow(false)}
    >
      <p className="intro-item label text-apricot" style={{ animationDelay: '0.25s' }}>
        Presented by
      </p>
      <Image
        src="/mia-logo.jpeg"
        alt="Manchester International Arts"
        width={220}
        height={77}
        priority
        className="intro-item invert w-44 md:w-64 h-auto"
        style={{ animationDelay: '0.55s' }}
      />
    </div>
  );
}
