'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const services = [
  {
    id: 'paid-media',
    label: 'Paid Media',
    header: 'Fractional Paid Media',
    description: 'Senior performance marketers running LinkedIn, Meta, Google, X, and Reddit campaigns tied directly to your pipeline goals.',
    items: [
      'Senior performance marketers with years of in-house and agency experience',
      'Demand creation + demand capture frameworks tied to pipeline',
      'Creative + messaging testing that constantly improves CTR → CPL → SQL',
      'Embedded collaboration to ensure clean attribution and real revenue impact',
    ],
    image: '/assets/images/paid-media-preview.png',
  },
  {
    id: 'head-of-marketing',
    label: 'Head of Marketing',
    header: 'Fractional Head of Marketing',
    description: 'A hands-on-keyboard marketing leader who owns your GTM strategy and executes alongside your team.',
    items: [
      'Own GTM strategy end-to-end',
      'Lead campaigns from idea to launch',
      'Execute hands-on to remove work from your plate',
      'Align marketing with sales and revenue goals',
    ],
    image: '/assets/images/hom-preview.png',
  },
  {
    id: 'revops',
    label: 'RevOps',
    header: 'Fractional RevOps',
    description: 'HubSpot experts and GTM engineers who build the infrastructure that turns leads into revenue.',
    items: [
      'HubSpot architecture, routing, dashboards and reporting',
      'Clay, Apollo, ZoomInfo, Zapier workflows',
      'Lead scoring, enrichment, and intent → sales-ready leads',
      'Clean data and automated handoffs between teams',
    ],
    image: '/assets/images/revops-preview.png',
  },
  {
    id: 'lifecycle',
    label: 'Lifecycle Marketing',
    header: 'Email / Lifecycle Marketing',
    description: 'Nurture sequences and lifecycle journeys that actually move pipeline and drive expansion revenue.',
    items: [
      'Build lifecycle journeys from first touch → closed won → expansion',
      'Nurture sequences for in-trial, in-pipeline, and post-sale',
      'Campaign strategy, copy, and build out',
      'Automated triggers based on intent and behavior',
    ],
    image: '/assets/images/lifecycle-preview.png',
  },
];

export default function HomeSection5() {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <section className="bg-black text-white relative overflow-hidden">
      <div className="energy-line" />
      <div className="container mx-auto px-4 py-24 md:py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <Reveal as="h2" className="text-4xl md:text-5xl  tracking-tight mb-6">
            Plug in the senior help you actually need
          </Reveal>
          <Reveal as="p" className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            One partner, four offerings—all run by experienced operators.
          </Reveal>
        </div>

        {/* Tab Buttons */}
        <Reveal className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`btn btn-sm transition-all duration-300 ${
                activeTab === service.id
                  ? 'btn-primary btn-shine'
                  : 'bg-transparent text-white/70 border border-white/20 hover:border-white/40 hover:text-white'
              }`}
            >
              {service.label}
            </button>
          ))}
        </Reveal>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          <div className="energy-card rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image/Preview Side */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                <div className="w-full h-full rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <span className="text-white/30 text-lg">Preview</span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl  mb-4">{activeService.header}</h3>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {activeService.description}
                </p>
                <ul className="space-y-4">
                  {activeService.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-blue-500 mt-0.5 shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="energy-line energy-line--delayed" />
    </section>
  );
}
