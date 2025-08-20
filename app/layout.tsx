import './globals.css';
import type { Metadata } from 'next';
import Preconnects from './next-head';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: {
    default: 'Fractional Demand | B2B Demand Gen Agency',
    template: '%s | Fractional Demand'
  },
  description: 'We help B2B companies generate qualified pipeline through paid media and demand gen best practices.',
  metadataBase: new URL('https://www.fractionaldemand.com'),
  openGraph: {
    type: 'website',
    title: 'Fractional Demand | B2B Demand Gen Agency',
    description: 'We help B2B companies generate qualified pipeline through paid media and demand gen best practices.',
    url: 'https://www.fractionaldemand.com',
    siteName: 'Fractional Demand',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fractional Demand' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Demand | B2B Demand Gen Agency',
    description: 'We help B2B companies generate qualified pipeline through paid media and demand gen best practices.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://www.fractionaldemand.com'
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/favicon.png', type: 'image/png', media: '(prefers-color-scheme: dark)' },
    ],
  }
};

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <Preconnects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Fractional Demand',
              url: 'https://www.fractionaldemand.com',
              sameAs: [
                'https://www.linkedin.com/company/fractional-demand/'
              ],
              logo: 'https://www.fractionaldemand.com/favicon.png'
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'B2B Demand Generation',
              provider: { '@type': 'Organization', name: 'Fractional Demand' },
              areaServed: 'US',
              serviceType: 'Paid Search, LinkedIn Ads, Demand Gen Strategy',
              url: 'https://www.fractionaldemand.com/#services'
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Offer',
              name: '2 months free on a 12-month plan',
              url: 'https://www.fractionaldemand.com/lp/landing-page',
              price: 0,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              eligibleCustomerType: 'https://schema.org/BusinessCustomer'
            })
          }}
        />
      </head>
      <body className={`min-h-screen bg-black text-white antialiased ${inter.className}`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[3000] focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
        {children}
      </body>
    </html>
  );
}


