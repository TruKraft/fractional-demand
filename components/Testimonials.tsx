'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Testimonial = {
  quote: string;
  author: string;
  company: string;
  image?: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
  headline?: string;
  className?: string;
};

export default function Testimonials({ testimonials, headline = "Customer Stories", className = '' }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className={`text-white relative overflow-hidden ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-black" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="energy-line relative z-10" />
      <div className="container mx-auto px-4 py-24 md:py-28 relative z-10">
        <div className="text-center mb-16">
          <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
            {headline}
          </Reveal>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>

          {/* Slider */}
          <div ref={sliderRef} className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  {/* Glass Card */}
                  <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Glass background */}
                    <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-xl rounded-3xl" />
                    
                    {/* Gradient shine */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.1] via-transparent to-purple-500/[0.05]" />
                    
                    {/* Border */}
                    <div className="absolute inset-0 rounded-3xl border border-white/[0.15]" />
                    <div className="absolute inset-[1px] rounded-[23px] border border-white/[0.05]" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Quote icon */}
                      <svg className="w-12 h-12 text-white/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      
                      <blockquote className="text-white/90 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="relative h-14 w-14 md:h-16 md:w-16 overflow-hidden rounded-full ring-2 ring-white/20 shrink-0">
                          <Image
                            src={testimonial.image || '/assets/images/placeholder-avatar.jpg'}
                            alt={`${testimonial.author} from ${testimonial.company}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                          <p className="text-white/60">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="energy-line energy-line--delayed relative z-10" />
    </section>
  );
}

