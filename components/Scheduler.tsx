"use client";

import { useEffect } from 'react';

export default function Scheduler() {
  useEffect(() => {
    // Load Calendly inline widget script once
    if (document.getElementById('calendly-widget')) return;
    const s = document.createElement('script');
    s.id = 'calendly-widget';
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="bg-gradient-to-b from-white/5 to-black text-white">
      <div className="container mx-auto px-4 py-24 md:py-28">
        <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight mb-8">Schedule a 1-on-1 Strategy Session</h2>
        <div className="rounded-3xl overflow-hidden shadow-sm">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/fractionaldemand/30min"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>
      </div>
    </section>
  );
}


