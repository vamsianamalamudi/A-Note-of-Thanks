import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'To the people who made the journey memorable.',
  description: 'A small collection of words for the people I had the privilege of working with.',
  metadataBase: new URL('https://example.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
