"use client";

import { createContext, useContext, useEffect, ReactNode, useCallback } from 'react';

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

// Context for popup
type CalendlyPopupContextType = {
  openPopup: () => void;
};

const CalendlyPopupContext = createContext<CalendlyPopupContextType | null>(null);

export function useCalendlyPopup() {
  const context = useContext(CalendlyPopupContext);
  if (!context) {
    throw new Error('useCalendlyPopup must be used within CalendlyPopupProvider');
  }
  return context;
}

export function CalendlyPopupProvider({ children }: { children: ReactNode }) {
  // Load Calendly script and CSS
  useEffect(() => {
    // Add CSS
    if (!document.getElementById('calendly-widget-css')) {
      const link = document.createElement('link');
      link.id = 'calendly-widget-css';
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    
    // Add Script
    if (!document.getElementById('calendly-widget-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-widget-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const openPopup = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/fractionaldemand/30min?hide_gdpr_banner=1&primary_color=021da8'
      });
    }
  }, []);

  return (
    <CalendlyPopupContext.Provider value={{ openPopup }}>
      {children}
    </CalendlyPopupContext.Provider>
  );
}

// Button component that triggers the popup
export function LetsTalkButton({ 
  children = "Let's Talk", 
  className = "btn btn-primary btn-md btn-shine" 
}: { 
  children?: ReactNode; 
  className?: string;
}) {
  const { openPopup } = useCalendlyPopup();
  
  return (
    <button onClick={openPopup} className={className}>
      {children}
    </button>
  );
}

