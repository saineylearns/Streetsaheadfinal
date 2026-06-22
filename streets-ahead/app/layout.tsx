import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Streets Ahead — The Archive',
  description:
    'The archive of Streets Ahead, the Manchester street arts festival by Manchester International Arts. Street arts for the 21st century, 1988 onwards.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
