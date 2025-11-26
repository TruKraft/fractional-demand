import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { fetchBlogBySlug, fetchBlogs } from '@/lib/strapi';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    title: `${post.title} | Fractional Demand Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: post.coverImage ? [post.coverImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await fetchBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const tags = post.tags || [];

  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #000000 0%, #0a1628 50%, #021da8 150%)' }}>
          <div className="absolute inset-0 bg-grid-dots opacity-30" />
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <Link 
                  href="/resources/blog" 
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                  </svg>
                  Back to Blog
                </Link>
              </Reveal>

              <Reveal>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#021da8] text-white text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  <span className="text-white/50 text-sm">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="text-white/50 text-sm">·</span>
                  <span className="text-white/50 text-sm">{post.readTime} min read</span>
                </div>
              </Reveal>

              <Reveal as="h1" className="text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6">
                {post.title}
              </Reveal>

              <Reveal as="p" className="text-white/80 text-xl leading-relaxed mb-8">
                {post.excerpt}
              </Reveal>

              <Reveal>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-white/80">{post.author}</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post.coverImage && (
          <section className="bg-black">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto -mt-8 relative z-20">
                <Reveal>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={post.coverImage.url}
                      alt={post.coverImage.alternativeText || post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="bg-black text-white">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
              <Reveal>
                <div 
                  className="prose prose-invert prose-lg max-w-none
                    prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-white/80 prose-p:leading-relaxed
                    prose-a:text-[#021da8] prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-white
                    prose-ul:text-white/80 prose-ol:text-white/80
                    prose-li:marker:text-[#021da8]
                    prose-blockquote:border-l-[#021da8] prose-blockquote:text-white/70
                    prose-code:text-[#021da8] prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                    prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white border-t border-white/10">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <Reveal as="h2" className="text-2xl md:text-3xl tracking-tight mb-4">
                Ready to accelerate your demand generation?
              </Reveal>
              <Reveal as="p" className="text-white/60 mb-8">
                Let&apos;s discuss how we can help you build a scalable pipeline.
              </Reveal>
              <Reveal>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#021da8] text-white rounded-lg hover:bg-[#021da8]/80 transition-colors"
                >
                  Get in touch
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

