import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import BlogFilter from '@/components/BlogFilter';
import { fetchBlogs } from '@/lib/strapi';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Resources and insights on B2B demand generation, paid media, and GTM strategy',
  openGraph: {
    title: 'Blog | Fractional Demand',
    description: 'Resources and insights on B2B demand generation, paid media, and GTM strategy',
  },
};

export default async function BlogPage() {
  const blogs = await fetchBlogs();

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
              
              {blogs.length > 0 ? (
                <BlogFilter blogs={blogs} />
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
