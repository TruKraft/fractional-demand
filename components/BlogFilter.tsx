'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { BlogPost } from '@/lib/strapi';

interface BlogFilterProps {
  blogs: BlogPost[];
}

function BlogCard({ post }: { post: BlogPost }) {
  const tags = post.tags || [];
  const category = tags.length > 0 ? tags[0] : 'Insights';

  return (
    <Reveal>
      <Link href={`/resources/blog/${post.slug}`} className="group block h-full">
        <article className="border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all h-full flex flex-col">
          {post.coverImage && (
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={post.coverImage.url}
                alt={post.coverImage.alternativeText || post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#021da8] text-white text-xs font-medium">
                {category}
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
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

export default function BlogFilter({ blogs }: BlogFilterProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Extract all unique tags from blogs
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    blogs.forEach(blog => {
      if (blog.tags && Array.isArray(blog.tags)) {
        blog.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return ['All', ...Array.from(tagSet).sort()];
  }, [blogs]);

  // Filter blogs based on active filter
  const filteredBlogs = useMemo(() => {
    if (activeFilter === 'All') return blogs;
    return blogs.filter(blog => 
      blog.tags && Array.isArray(blog.tags) && blog.tags.includes(activeFilter)
    );
  }, [blogs, activeFilter]);

  return (
    <>
      {/* Filter Tabs */}
      {allTags.length > 1 && (
        <Reveal className="mb-10">
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === tag
                    ? 'bg-[#021da8] text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-white/50">No articles found for &ldquo;{activeFilter}&rdquo;</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-4 text-[#021da8] hover:underline"
            >
              View all articles
            </button>
          </div>
        )}
      </div>

      {/* Results count */}
      <Reveal className="mt-8 text-center">
        <p className="text-white/40 text-sm">
          Showing {filteredBlogs.length} of {blogs.length} article{blogs.length !== 1 ? 's' : ''}
        </p>
      </Reveal>
    </>
  );
}

