import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
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
            <div className="max-w-4xl mx-auto">
              <Reveal>
                <style dangerouslySetInnerHTML={{ __html: `
                  .blog-content h2 {
                    font-size: 1.75rem;
                    font-weight: 600;
                    color: white;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(255,255,255,0.1);
                    line-height: 1.3;
                  }
                  @media (min-width: 768px) {
                    .blog-content h2 {
                      font-size: 2rem;
                    }
                  }
                  .blog-content h2 strong {
                    font-weight: 600;
                  }
                  .blog-content h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: white;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    line-height: 1.3;
                  }
                  .blog-content p {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.8);
                    margin-bottom: 1.5rem;
                  }
                  @media (min-width: 768px) {
                    .blog-content p {
                      font-size: 1.375rem;
                    }
                  }
                  .blog-content strong {
                    color: white;
                    font-weight: 600;
                  }
                  .blog-content em {
                    font-style: italic;
                  }
                  .blog-content a {
                    color: #5BA3F5;
                    text-decoration: none;
                    font-weight: 500;
                  }
                  .blog-content a:hover {
                    text-decoration: underline;
                    color: #7BB8FF;
                  }
                  .blog-content ul, .blog-content ol {
                    font-size: 1.25rem;
                    line-height: 1.8;
                    color: rgba(255,255,255,0.8);
                    margin: 1.5rem 0;
                    padding-left: 1.5rem;
                  }
                  @media (min-width: 768px) {
                    .blog-content ul, .blog-content ol {
                      font-size: 1.375rem;
                    }
                  }
                  .blog-content li {
                    margin-bottom: 0.75rem;
                    padding-left: 0.5rem;
                  }
                  .blog-content li::marker {
                    color: #021da8;
                    font-weight: 700;
                  }
                  .blog-content blockquote {
                    border-left: 4px solid #021da8;
                    background: rgba(255,255,255,0.05);
                    padding: 1rem 1.5rem;
                    margin: 2rem 0;
                    border-radius: 0 0.5rem 0.5rem 0;
                    font-style: italic;
                    color: rgba(255,255,255,0.7);
                  }
                  .blog-content img {
                    border-radius: 0.75rem;
                    margin: 2rem 0;
                  }
                  .blog-content hr {
                    border-color: rgba(255,255,255,0.1);
                    margin: 3rem 0;
                  }
                `}} />
                <div 
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Reveal>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}

