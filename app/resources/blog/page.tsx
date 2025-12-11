import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import BlogFilter from '@/components/BlogFilter';
import { fetchBlogs, fetchFeaturedBlogs } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Real insights from the trenches. No fluff, no theory. Just practical, proven strategies and tactics we use with clients.',
  openGraph: {
    title: 'Blog | Fractional Demand',
    description: 'Real insights from the trenches. No fluff, no theory. Just practical, proven strategies and tactics we use with clients.',
  },
};

export default async function BlogPage() {
  const [blogs, featuredBlogs] = await Promise.all([
    fetchBlogs(),
    fetchFeaturedBlogs()
  ]);

  // Filter out featured blogs from the regular list to avoid duplication
  const featuredIds = new Set(featuredBlogs.map(b => b.id));
  const regularBlogs = blogs.filter(b => !featuredIds.has(b.id));

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
                  Demand Decoded
                </div>
              </Reveal>
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Fractional Demand Blog
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl">
                Real insights from the trenches. No fluff, no theory. Just practical, proven strategies and tactics we use with clients and what we're learning along the way.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && (
          <section className="bg-black text-white relative overflow-hidden border-b border-white/10">
            <div className="container mx-auto px-4 py-20 md:py-24">
              <div className="max-w-6xl mx-auto">
                <Reveal className="mb-10">
                  <p className="text-[#021da8] text-sm uppercase tracking-widest mb-4 font-medium">Featured</p>
                  <h2 className="text-3xl md:text-4xl tracking-tight">
                    Must-read articles
                  </h2>
                </Reveal>

                <div className={`grid gap-8 ${featuredBlogs.length === 1 ? 'grid-cols-1' : 'grid-cols-1 lg:grid-cols-2'}`}>
                  {featuredBlogs.map((post, index) => {
                    const tags = post.tags || [];
                    const category = tags.length > 0 ? tags[0] : 'Insights';
                    const isFirst = index === 0;

                    return (
                      <Reveal key={post.id}>
                        <Link href={`/resources/blog/${post.slug}`} className="group block h-full">
                          <article className={`relative border border-white/10 rounded-2xl overflow-hidden hover:border-[#021da8]/50 transition-all h-full ${isFirst && featuredBlogs.length > 1 ? 'lg:row-span-2' : ''}`}>
                            {post.coverImage && (
                              <div className={`relative w-full overflow-hidden ${isFirst && featuredBlogs.length > 1 ? 'h-64 lg:h-80' : 'h-48'}`}>
                                <Image
                                  src={post.coverImage.url}
                                  alt={post.coverImage.alternativeText || post.title}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute top-4 left-4">
                                  <span className="px-3 py-1 rounded-full bg-[#021da8] text-white text-xs font-medium">
                                    Featured
                                  </span>
                                </div>
                              </div>
                            )}
                            <div className="p-6 md:p-8">
                              <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium">
                                  {category}
                                </span>
                                {post.readTime > 0 && (
                                  <span className="text-white/50 text-sm">{post.readTime} min read</span>
                                )}
                              </div>
                              
                              <h3 className={`mb-3 group-hover:text-white/80 transition-colors ${isFirst && featuredBlogs.length > 1 ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}>
                                {post.title}
                              </h3>
                              
                              <p className="text-white/60 text-base leading-relaxed mb-4 line-clamp-3">
                                {post.excerpt}
                              </p>
                              
                              <div className="flex items-center gap-2 text-[#021da8] text-sm font-medium group-hover:gap-3 transition-all">
                                Read article
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </div>
                            </div>
                          </article>
                        </Link>
                      </Reveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="bg-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-6xl mx-auto">
              <Reveal className="mb-12">
                <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Latest articles</p>
                <h2 className="text-3xl md:text-4xl tracking-tight">
                  {featuredBlogs.length > 0 ? 'More from the team' : 'Insights from the team'}
                </h2>
              </Reveal>
              
              {regularBlogs.length > 0 ? (
                <BlogFilter blogs={regularBlogs} />
              ) : blogs.length > 0 && featuredBlogs.length > 0 ? (
                <Reveal className="text-center py-12">
                  <p className="text-white/50 text-lg">All articles are featured above.</p>
                </Reveal>
              ) : (
                <Reveal className="text-center py-12">
                  <p className="text-white/50 text-lg mb-4">No articles yet</p>
                  <p className="text-white/40">Check back soon for insights on B2B demand generation.</p>
                </Reveal>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
