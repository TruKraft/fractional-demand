"use client";

import { useEffect } from 'react';

type CalendlyInlineProps = {
  url: string;
  height?: number;
  className?: string;
};

export default function CalendlyInline({ url, height = 620, className }: CalendlyInlineProps) {
  useEffect(() => {
    if (document.getElementById('calendly-widget')) return;
    const s = document.createElement('script');
    s.id = 'calendly-widget';
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className={className}>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: 320, height }}
      />
    </div>
  );
}


