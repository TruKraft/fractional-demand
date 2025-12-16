import './globals.css';
import type { Metadata } from 'next';
import Preconnects from './next-head';
import { Libre_Franklin, Source_Serif_4, DM_Sans } from 'next/font/google';
import { CalendlyPopupProvider } from '@/components/CalendlyPopup';

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre-franklin',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'Fractional Demand | B2B Demand Gen Agency',
    template: '%s | Fractional Demand'
  },
  description: 'We help B2B companies generate qualified pipeline through paid media and demand gen best practices. Senior fractional operators for paid media, CMO leadership, RevOps, and lifecycle marketing.',
  keywords: ['B2B demand generation', 'fractional CMO', 'paid media agency', 'revenue operations', 'lifecycle marketing', 'B2B marketing', 'LinkedIn ads', 'Google ads', 'demand gen agency', 'marketing strategy'],
  authors: [{ name: 'Fractional Demand' }],
  creator: 'Fractional Demand',
  publisher: 'Fractional Demand',
  metadataBase: new URL('https://www.fractionaldemand.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Fractional Demand | B2B Demand Gen Agency',
    description: 'We help B2B companies generate qualified pipeline through paid media and demand gen best practices.',
    url: 'https://www.fractionaldemand.com',
    siteName: 'Fractional Demand',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fractional Demand - B2B Demand Generation Agency' }]
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
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'verification_code',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`bg-black ${libreFranklin.variable} ${sourceSerif.variable} ${dmSans.variable}`}>
      <head>
        <Preconnects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.fractionaldemand.com/#organization',
              name: 'Fractional Demand',
              url: 'https://www.fractionaldemand.com',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.fractionaldemand.com/favicon.png',
                width: '512',
                height: '512'
              },
              description: 'B2B demand generation agency specializing in paid media, fractional CMO services, RevOps, and lifecycle marketing. We help B2B tech companies generate qualified pipeline through senior-level fractional marketing operators.',
              sameAs: [
                'https://www.linkedin.com/company/fractional-demand/'
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                url: 'https://www.fractionaldemand.com/#contact',
                availableLanguage: ['English']
              },
              areaServed: {
                '@type': 'Country',
                name: 'United States'
              },
              knowsAbout: [
                'B2B Marketing',
                'Demand Generation',
                'Paid Media Management',
                'LinkedIn Advertising',
                'Google Ads Management',
                'Meta Advertising',
                'Fractional CMO Services',
                'Revenue Operations',
                'Marketing Strategy',
                'Pipeline Generation',
                'Marketing Automation',
                'HubSpot Consulting',
                'Clay Automation',
                'Email Marketing',
                'Lifecycle Marketing',
                'B2B Lead Generation',
                'Performance Marketing',
                'Marketing Attribution',
                'GTM Strategy'
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'B2B Marketing Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fractional Paid Media',
                      description: 'Senior performance marketers managing LinkedIn, Google, Meta, X, and Reddit ads'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fractional Head of Marketing',
                      description: 'Senior marketing leader for GTM strategy and execution'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Fractional RevOps',
                      description: 'HubSpot architecture, Clay automation, and GTM engineering'
                    }
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Email & Lifecycle Marketing',
                      description: 'Full-funnel lifecycle and nurture campaigns'
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased font-body">
        <CalendlyPopupProvider>
          <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[3000] focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
          {children}
        </CalendlyPopupProvider>
      </body>
    </html>
  );
}


