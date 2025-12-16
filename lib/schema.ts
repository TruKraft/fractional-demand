/**
 * Centralized Schema.org JSON-LD utilities for SEO
 * Optimized for both traditional search engines and AI crawlers
 */

import { Organization, WithContext, WebSite, Service, BreadcrumbList, Article, FAQPage, Offer, Review, AggregateRating } from 'schema-dts';

const BASE_URL = 'https://www.fractionaldemand.com';

/**
 * Organization Schema - Use globally across site
 */
export function getOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Fractional Demand',
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    description: 'B2B demand generation agency specializing in paid media, fractional CMO services, and RevOps. We help B2B companies generate qualified pipeline through senior-level fractional marketing operators.',
    sameAs: [
      'https://www.linkedin.com/company/fractional-demand/'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      url: `${BASE_URL}/#contact`
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    },
    knowsAbout: [
      'B2B Marketing',
      'Demand Generation',
      'Paid Media',
      'LinkedIn Advertising',
      'Google Ads',
      'Meta Advertising',
      'Fractional CMO',
      'Revenue Operations',
      'Marketing Strategy',
      'Pipeline Generation'
    ]
  };
}

/**
 * WebSite Schema - Use on homepage
 */
export function getWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Fractional Demand',
    description: 'Get a GTM Team That Builds Pipeline Fast. Fractional Demand embeds senior operators across strategy, paid media, RevOps, and lifecycle to build and run a demand system that accelerates pipeline.',
    publisher: {
      '@id': `${BASE_URL}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/resources/blog?q={search_term_string}`
      },
      // @ts-ignore - query-input is valid Schema.org but not in types
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Service Schema Generator
 */
export function getServiceSchema(params: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  areaServed?: string;
  offers?: {
    name: string;
    description: string;
  };
}): WithContext<Service> {
  const schema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: params.name,
    description: params.description,
    provider: {
      '@id': `${BASE_URL}/#organization`
    },
    serviceType: params.serviceType,
    url: params.url,
    areaServed: params.areaServed || 'United States',
    audience: {
      '@type': 'Audience',
      audienceType: 'B2B Companies'
    }
  };

  if (params.offers) {
    schema.offers = {
      '@type': 'Offer',
      name: params.offers.name,
      description: params.offers.description,
      availability: 'https://schema.org/InStock'
    };
  }

  return schema;
}

/**
 * Breadcrumb Schema Generator
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Article Schema Generator - For blog posts
 */
export function getArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  author: string;
  publishedAt: string;
  modifiedAt?: string;
  tags?: string[];
}): WithContext<Article> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    image: params.imageUrl,
    author: {
      '@type': 'Person',
      name: params.author
    },
    publisher: {
      '@id': `${BASE_URL}/#organization`
    },
    datePublished: params.publishedAt,
    dateModified: params.modifiedAt || params.publishedAt,
    keywords: params.tags?.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.url
    }
  };
}

/**
 * FAQ Schema Generator
 */
export function getFAQSchema(items: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
}

/**
 * Aggregate Rating Schema - For testimonials/reviews
 */
export function getAggregateRatingSchema(params: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}): AggregateRating {
  return {
    '@type': 'AggregateRating',
    ratingValue: params.ratingValue,
    reviewCount: params.reviewCount,
    bestRating: params.bestRating || 5
  };
}

/**
 * Review Schema Generator
 */
export function getReviewSchema(params: {
  author: string;
  reviewBody: string;
  ratingValue?: number;
  company?: string;
}): Review {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: params.author,
      ...(params.company && { worksFor: { '@type': 'Organization', name: params.company } })
    },
    reviewBody: params.reviewBody,
    ...(params.ratingValue && {
      reviewRating: {
        '@type': 'Rating',
        ratingValue: params.ratingValue,
        bestRating: 5
      }
    })
  };
}


