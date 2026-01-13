import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import BlogFilter from '@/components/BlogFilter';
import FeaturedBlogCarousel from '@/components/FeaturedBlogCarousel';
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
        <section className="relative isolate overflow-hidden bg-black text-white">
          {/* Animated block gradient background */}
          <div className="absolute inset-0 -z-20 hero-block-gradient" />
          
          {/* Animated grid blocks overlay */}
          <div className="absolute inset-0 -z-15 hero-blocks">
            <div className="hero-block hero-block-1" />
            <div className="hero-block hero-block-2" />
            <div className="hero-block hero-block-3" />
            <div className="hero-block hero-block-4" />
            <div className="hero-block hero-block-5" />
            <div className="hero-block hero-block-6" />
          </div>

          {/* Geometric line background (subtle) */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full -z-10"
            viewBox="0 0 1200 700"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient id="triFade" cx="50%" cy="40%" r="75%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
              </radialGradient>
            </defs>
            {/* Symmetric triangle motif, centered */}
            <g transform="translate(600,350)" fill="none" stroke="url(#triFade)" strokeWidth="1.1" className="hero-lines">
              {/* Up-pointing triangles */}
              <polygon vectorEffect="non-scaling-stroke" points="0,-340 295,170 -295,170" />
              <polygon vectorEffect="non-scaling-stroke" points="0,-220 190,110 -190,110" />
              <polygon vectorEffect="non-scaling-stroke" points="0,-100 86,50 -86,50" />

              {/* Animated blip strokes */}
              <polygon className="tri-blip" points="0,-340 295,170 -295,170" />
              <polygon className="tri-blip" points="0,-220 190,110 -190,110" />
              <polygon className="tri-blip" points="0,-100 86,50 -86,50" />

              {/* Down-pointing triangles */}
              <polygon vectorEffect="non-scaling-stroke" points="0,340 295,-170 -295,-170" />
              <polygon vectorEffect="non-scaling-stroke" points="0,220 190,-110 -190,-110" />
              <polygon vectorEffect="non-scaling-stroke" points="0,100 86,-50 -86,-50" />

              {/* Animated blip strokes for downward triangles */}
              <polygon className="tri-blip" points="0,340 295,-170 -295,-170" />
              <polygon className="tri-blip" points="0,220 190,-110 -190,-110" />
              <polygon className="tri-blip" points="0,100 86,-50 -86,-50" />

              {/* Light crosshair for symmetry */}
              <g opacity="0.3">
                <line vectorEffect="non-scaling-stroke" x1="-360" y1="0" x2="360" y2="0" />
                <line vectorEffect="non-scaling-stroke" x1="0" y1="-360" x2="0" y2="360" />
              </g>
            </g>
          </svg>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Reveal as="h1" className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
                Demand Decoded
              </Reveal>
              <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
                Real insights from the trenches. No fluff, no theory. Just practical, proven strategies and tactics we use with clients and what we're learning along the way.
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {featuredBlogs.length > 0 && (
          <section className="text-white relative overflow-hidden border-b border-white/10" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
            <div className="container mx-auto px-4 py-20 md:py-24">
              <div className="max-w-6xl mx-auto">
                <Reveal className="mb-10">
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-4 font-medium font-heading">Featured</p>
                  <h2 className="text-3xl md:text-4xl tracking-tight">
                    Must-read articles
                  </h2>
                </Reveal>

<FeaturedBlogCarousel posts={featuredBlogs} />
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
          <div className="container mx-auto px-4 py-24 md:py-28">
            <div className="max-w-7xl mx-auto">
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
