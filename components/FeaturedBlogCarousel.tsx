'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import { BlogPost } from '@/lib/strapi';

interface FeaturedBlogCarouselProps {
  posts: BlogPost[];
}

export default function FeaturedBlogCarousel({ posts }: FeaturedBlogCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (posts.length === 0) return null;

  // If only one post, show it without carousel controls
  if (posts.length === 1) {
    const post = posts[0];
    const tags = post.tags || [];
    const category = tags.length > 0 ? tags[0] : 'Insights';

    return (
      <Reveal>
        <Link href={`/resources/blog/${post.slug}`} className="group block">
          <article className="relative border border-white/10 rounded-2xl overflow-hidden hover:border-[#021da8]/50 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Content - Left Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="mb-6">
                  <span className="px-3 py-1 rounded-full bg-[#021da8] text-white text-xs font-medium font-heading">
                    Featured
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium font-heading">
                    {category}
                  </span>
                  {post.readTime > 0 && (
                    <span className="text-white/50 text-sm">{post.readTime} min read</span>
                  )}
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-white/80 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-white text-sm font-semibold font-heading group-hover:gap-3 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
              
              {/* Image - Right Side */}
              {post.coverImage && (
                <div className="relative w-full flex items-center justify-center p-8 order-1 lg:order-2 bg-white/5">
                  <Image
                    src={post.coverImage.url}
                    alt={post.coverImage.alternativeText || post.title}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </article>
        </Link>
      </Reveal>
    );
  }

  // Multiple posts - show carousel
  const post = posts[currentIndex];
  const tags = post.tags || [];
  const category = tags.length > 0 ? tags[0] : 'Insights';

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex">
            {posts.map((slidePost, index) => {
              const slideTags = slidePost.tags || [];
              const slideCategory = slideTags.length > 0 ? slideTags[0] : 'Insights';
              
              return (
                <div key={slidePost.id} className="min-w-full">
                  <Link href={`/resources/blog/${slidePost.slug}`} className="group block">
                    <article className="relative border border-white/10 rounded-2xl overflow-hidden hover:border-[#021da8]/50 transition-all">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Content - Left Side */}
                        <div className="p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                          <div className="mb-6">
                            <span className="px-3 py-1 rounded-full bg-[#021da8] text-white text-xs font-medium font-heading">
                              Featured
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium font-heading">
                              {slideCategory}
                            </span>
                            {slidePost.readTime > 0 && (
                              <span className="text-white/50 text-sm">{slidePost.readTime} min read</span>
                            )}
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4 group-hover:text-white/80 transition-colors">
                            {slidePost.title}
                          </h3>
                          
                          <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                            {slidePost.excerpt}
                          </p>
                          
                          <div className="flex items-center gap-2 text-white text-sm font-semibold font-heading group-hover:gap-3 transition-all">
                            Read article
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Image - Right Side */}
                        {slidePost.coverImage && (
                          <div className="relative w-full flex items-center justify-center p-8 order-1 lg:order-2 bg-white/5">
                            <Image
                              src={slidePost.coverImage.url}
                              alt={slidePost.coverImage.alternativeText || slidePost.title}
                              width={800}
                              height={600}
                              className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentIndex
                ? 'w-8 h-2 bg-white rounded-full'
                : 'w-2 h-2 bg-white/30 hover:bg-white/50 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
