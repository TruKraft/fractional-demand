import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';

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
        {/* Hero */}
        <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
          <div className="absolute inset-0 bg-grid-dots opacity-30" />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white/80 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#021da8]" />
                  Resources
                </div>
              </Reveal>
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Blog
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl">
                Resources and insights on B2B demand generation, paid media, and GTM strategy
              </Reveal>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-6xl mx-auto">
              <Reveal className="mb-12">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Latest articles</p>
                <h2 className="text-3xl md:text-4xl tracking-tight">
                  Insights from the team
                </h2>
              </Reveal>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Reveal key={post.slug}>
                    <Link href={`/resources/blog/${post.slug}`} className="group block">
                      <article className="border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all h-full flex flex-col">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 rounded-full bg-[#021da8] text-white text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-white/50 text-sm">
                            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                          </span>
                        </div>
                        
                        <h2 className="text-xl md:text-2xl mb-3 group-hover:text-white/80 transition-colors">
                          {post.title}
                        </h2>
                        
                        <p className="text-white/60 text-base leading-relaxed mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                          Read article
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

