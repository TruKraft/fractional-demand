import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Replicated Site',
  description: 'Site replicated into a Next.js app.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


