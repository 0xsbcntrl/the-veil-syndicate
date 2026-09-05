import type { Metadata } from 'next';
import { Cormorant, Newsreader, Space_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Veil Syndicate — The asset behind the veil',
  description:
    'The Veil Syndicate is building an activated Cipher protocol on Robinhood Chain, with ZEC as its reserve asset.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${newsreader.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}