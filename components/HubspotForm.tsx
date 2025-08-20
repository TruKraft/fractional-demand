"use client";

import { useEffect, useId, useRef, useState } from 'react';

type HubspotFormProps = {
  portalId?: string;
  formId?: string;
  region?: string; // e.g., "na1"
  className?: string;
};

declare global {
  interface Window {
    hbspt?: any;
  }
}

export default function HubspotForm({ portalId, formId, region = "na1", className }: HubspotFormProps) {
  const containerId = useId().replace(/:/g, "");
  const [loaded, setLoaded] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (!portalId || !formId) return;
    const scriptId = "hs-embed";
    const ensureScript = () => {
      return new Promise<void>((resolve) => {
        if (document.getElementById(scriptId)) return resolve();
        const s = document.createElement("script");
        s.id = scriptId;
        s.src = "https://js.hsforms.net/forms/embed/v2.js";
        s.async = true;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });
    };

    ensureScript().then(() => {
      if (initializedRef.current) return;
      initializedRef.current = true;
      if (window.hbspt?.forms?.create) {
        try {
          window.hbspt.forms.create({
            region,
            portalId,
            formId,
            target: `#${containerId}`,
            onFormReady: () => setLoaded(true),
          });
        } catch (e) {
          // noop, keep skeleton
        }
      }
    });
  }, [portalId, formId, region, containerId]);

  const showSkeleton = !portalId || !formId || !loaded;

  return (
    <div className={className}>
      <div id={containerId} />
      {showSkeleton && (
        <div className="mt-4 space-y-3 animate-pulse" aria-hidden>
          <div className="h-10 rounded-md bg-white/10" />
          <div className="h-10 rounded-md bg-white/10" />
          <div className="h-10 rounded-md bg-white/10" />
          <div className="h-14 rounded-md bg-white/20" />
        </div>
      )}
    </div>
  );
}


