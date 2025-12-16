"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Reveal from './Reveal';
import Portal from './Portal';

// Video URL - update this with your actual video URL (YouTube, Vimeo, or direct video file)
const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export default function FractionalCMOHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessUrl: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVideoOpen(false);
    };
    if (videoOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [videoOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://forms.getaltira.com/api/f/fractional-head-of-marketing-lp-3c8d9aa8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed:', response.statusText);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const sessionItems = [
    "Build out positioning + messaging",
    "Set the GTM strategy",
    "Lead execution, not just direct it",
    "Build the offer → messaging → channel mix",
    "Holistic marketing campaigns",
  ];

  return (
    <section className="relative isolate w-full bg-black text-white overflow-x-hidden">
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
          <radialGradient id="triFadeCMO" cx="50%" cy="40%" r="75%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
          </radialGradient>
        </defs>
        {/* Symmetric triangle motif, centered (spread-out full pattern) */}
        <g transform="translate(600,350)" fill="none" stroke="url(#triFadeCMO)" strokeWidth="1.1" className="hero-lines">
          {/* Up-pointing triangles */}
          <polygon vectorEffect="non-scaling-stroke" points="0,-340 295,170 -295,170" />
          <polygon vectorEffect="non-scaling-stroke" points="0,-220 190,110 -190,110" />
          <polygon vectorEffect="non-scaling-stroke" points="0,-100 86,50 -86,50" />

          {/* Animated blip strokes layered on top */}
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

      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="grid gap-10 lg:gap-12 lg:grid-cols-[60%_40%] items-center">
          {/* Left Content Column */}
          <div className="order-1 lg:order-1">
            <Reveal as="h1" className="text-4xl md:text-5xl lg:text-5xl tracking-tight mb-4">
              A Fractional CMO That Builds GTM Momentum Fast.
            </Reveal>
            <Reveal as="p" className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              Get a senior marketing leader embedded directly into your team. Someone who owns strategy, leads execution, and builds the systems that turn ideas into pipeline. Hands-on keyboard doer, not a slide-making strategist who hands you more homework.
            </Reveal>

            {/* Book a Strategy Session */}
            <Reveal>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-5">Book a Strategy Session</h3>
                <ul className="space-y-4">
                  {sessionItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-[#072ef0] shrink-0 mt-1">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right Form Column - Sticky */}
          <div className="order-2 lg:order-2 lg:sticky lg:top-28 self-start">
            <div className="bg-[#072ef0]/10 border border-[#072ef0]/20 rounded-2xl p-6 md:px-8 md:py-16 backdrop-blur-sm">
              <h3 className="text-xl md:text-3xl font-semibold mb-6 text-center">Get Started Today</h3>
              
              {submitted ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-green-500 mb-4">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xl font-semibold mb-2">Thank you!</p>
                  <p className="text-white/70">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#072ef0] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#072ef0] focus:border-transparent transition-all"
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#072ef0] focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessUrl" className="block text-sm font-medium text-white/80 mb-1.5">
                      Business URL
                    </label>
                    <input
                      type="url"
                      id="businessUrl"
                      name="businessUrl"
                      required
                      value={formData.businessUrl}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#072ef0] focus:border-transparent transition-all"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary btn-lg btn-shine mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Started'}
                  </button>
                </form>
              )}

              <p className="text-center text-white/50 text-xs mt-4">
                No spam—ever. By submitting, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-24">
        <Reveal>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center mb-8">
              Watch how we build GTM momentum
            </h2>
            <div className="relative w-full aspect-video bg-black rounded-2xl border border-white/10 overflow-hidden group cursor-pointer hover:border-[#072ef0]/40 transition-all">
              {/* Placeholder image */}
              <Image 
                src="/assets/images/image.png" 
                alt="Video thumbnail"
                fill
                className="object-cover"
              />
              {/* Play button overlay */}
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="absolute inset-0 flex items-center justify-center z-10 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#072ef0] bg-black/20 hover:bg-black/10 transition-all"
                aria-label="Play video"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#072ef0] flex items-center justify-center group-hover:bg-[#072ef0]/90 group-hover:scale-110 transition-all duration-300 shadow-2xl shadow-[#072ef0]/50">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12 text-white ml-1">
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <Portal>
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setVideoOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            
            {/* Modal content */}
            <div
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                aria-label="Close video"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
              
              {/* Video iframe */}
              <iframe
                src={`${VIDEO_URL}?autoplay=1`}
                title="Video preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </Portal>
      )}
    </section>
  );
}
