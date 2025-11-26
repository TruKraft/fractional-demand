import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import EyebrowHeading from '@/components/EyebrowHeading';
import EnergyCard from '@/components/EnergyCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Resources and insights on B2B demand generation, paid media, and GTM strategy',
  openGraph: {
    title: 'Blog | Fractional Demand',
    description: 'Resources and insights on B2B demand generation, paid media, and GTM strategy',
  },
};

// Faux blog posts - will be replaced with Strapi CMS data
const blogPosts = [
  {
    slug: 'getting-started-with-b2b-paid-media',
    title: 'Getting Started with B2B Paid Media',
    excerpt: 'A comprehensive guide to launching your first B2B paid media campaigns and building a foundation for scalable demand generation.',
    date: '2024-01-15',
    category: 'Paid Media',
  },
  {
    slug: 'linkedin-ads-best-practices',
    title: 'LinkedIn Ads Best Practices for B2B',
    excerpt: 'Learn how to optimize your LinkedIn advertising campaigns to reach the right decision-makers and generate qualified leads.',
    date: '2024-01-10',
    category: 'Paid Media',
  },
  {
    slug: 'demand-generation-framework',
    title: 'Building a Demand Generation Framework',
    excerpt: 'Discover how to create a repeatable demand generation system that connects your marketing efforts to pipeline and revenue.',
    date: '2024-01-05',
    category: 'Strategy',
  },
  {
    slug: 'measuring-marketing-attribution',
    title: 'Measuring Marketing Attribution in B2B',
    excerpt: 'Understanding how to properly attribute marketing efforts to pipeline and revenue in complex B2B sales cycles.',
    date: '2023-12-20',
    category: 'Analytics',
  },
];

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-black text-white relative overflow-hidden bg-grid-dots">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-32">
            <div className="text-center">
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl  tracking-tight mb-6">
                Blog
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Resources and insights on B2B demand generation, paid media, and GTM strategy
              </Reveal>
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>

        <section className="bg-black text-white relative overflow-hidden bg-noise">
          <div className="energy-line" />
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {blogPosts.map((post, idx) => (
                <Reveal key={post.slug}>
                  <div className="energy-card rounded-3xl border border-white/10 p-8 bg-white/5 bg-noise hover:bg-white/10 transition-colors h-full flex flex-col">
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/60 text-xs font-medium mb-4 w-fit">
                      {post.category}
                    </div>
                    <h2 className="text-2xl md:text-3xl  mb-3 flex-grow">
                      <Link href={`/resources/blog/${post.slug}`} className="hover:text-white/80 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="text-white/60 text-sm mt-auto">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="energy-line energy-line--delayed" />
        </section>
      </main>
      <Footer />
    </>
  );
}

