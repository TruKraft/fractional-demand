import type { MetadataRoute } from 'next';
import { fetchBlogs } from '@/lib/strapi';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.fractionaldemand.com';
  const now = new Date();

  // Main pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/how-we-work`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Service pages
    {
      url: `${baseUrl}/services/fractional-paid-media`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/fractional-head-of-marketing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/fractional-revops`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/email-lifecycle-marketing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Landing pages (for SEO and organic discovery)
    {
      url: `${baseUrl}/lp/paid-media`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/lp/fractional-head-of-marketing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Blog
    {
      url: `${baseUrl}/resources/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Privacy policy
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Fetch and add blog posts
  try {
    const blogs = await fetchBlogs();
    const blogRoutes = blogs.map((post) => ({
      url: `${baseUrl}/resources/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
    routes.push(...blogRoutes);
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  return routes;
}


