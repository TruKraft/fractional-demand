import Image from 'next/image';
import Reveal from './Reveal';
import map from '@/public/assets/images/assets-map.json';
import biosContent from '@/content/bios.json';

type Bio = { name: string; title: string; img?: string; blurb: string | string[]; linkedin?: string };

const biosRaw = (biosContent as any[]) || [];
// Fallback content if extractor fails or returns empty
const fallbackBios: Bio[] = [
  {
    name: 'Gavin Tanner',
    title: 'Founder & CEO',
    blurb:
      'Gavin has been doing demand gen for almost a decade, focusing on running paid media for B2B tech companies. He started out in the agency world running paid search, LinkedIn ads, and more for B2B tech clients. From there, he did demand gen in-house with stops at Lucidchart, Drip, and Matillion. Along the way, he would take on clients at night and on the weekends for friends - working with several growth-stage tech companies running their Google, Facebook, and LinkedIn ads. He always had the "entrepreneurial itch", and finally decided to scratch it and go full-time into consulting.',
  },
  {
    name: 'Jordan Barker',
    title: 'Partner & CMO',
    blurb:
      "Jordan brings 16+ years of data-driven marketing expertise running marketing  teams at B2B tech companies like Pluralsight, Drip, and most recently Clicklease. He’s passionate about all things marketing, and delivering measurable results that generate revenue and sustainable ROI.\n\nJordan is a husband to an amazing wife, father to two small humans, and one very fluffy dog.  He also loves being outdoors, but he's been told he is more 'outsidesy' than outdoorsy (think hikes, as opposed to survivalist training).",
  },
  {
    name: 'Cindy Westra',
    title: 'Sr. Demand Gen Manager',
    blurb:
      "Cindy has 12 years of experience driving leads for B2B companies, both in-house and at agencies. She has managed paid media for brands like AT&T Cybersecurity, Insights Learning & Development, and Wiley, optimizing campaigns across Google, Bing, LinkedIn, Meta, and Reddit. Outside of work, Cindy is a mom to three little ones and has two lazy labs. She runs on ice-cold energy drinks, a good heated blanket, and a passion for sloths.",
  },
  {
    name: 'Jacob Cullum',
    title: 'Sr. Demand Gen Manager',
    blurb:
      "Jacob has been scaling marketing programs for over 7 years on both the agency side and in-house. As a Senior Demand Gen Manager, he acts like a member of his clients' marketing teams and will go above and beyond to get the results that they are looking for. Jacob has spent millions of dollars of ad spend across Google, LinkedIn, and Meta on paid ad programs that have led to 50%+ increases in ARR and over $100M raised in private equity. When he's not writing creative briefs for a new split test or running strategy sessions with his clients, Jacob enjoys spending time in the sun in Tampa, Florida where he lives with his wife Caitlin and their dog, a mini schnauzer named Reggie.",
  },
  {
    name: 'Walter Silveira',
    title: 'Sr. Demand Gen Manager',
    blurb:
      "Walter Silveira is a Sr. Demand Gen Manager with 3 successful exits and over 13 years of experience launching & scaling B2B SaaS and Technology companies from their Go-To-Market stage to their Series C and beyond! Walter specializes in inbound channels that connect directly with a bespoke, technical ICP—meeting key decision makers exactly when their buying triggers are strongest. Walter's work drove over $8M in attributable recurring revenue for his startup & SMB clients in 2024.",
  },
];
const bioImages = ((map as any).bioImages || {}) as Record<string, string>;
const linkedinUrlsByName: Record<string, string> = {
  'Gavin Tanner': 'https://www.linkedin.com/in/gavin-tanner/',
  'Jordan Barker': 'https://www.linkedin.com/in/jordanpbarker/',
  'Cindy Westra': 'https://www.linkedin.com/in/cindywestra/',
  'Jacob Cullum': 'https://www.linkedin.com/in/jacob-cullum/',
  'Walter Silveira': 'https://www.linkedin.com/in/walterandrewsilveira/',
};
// Merge content bios with fallback bios by name, preserving fallback order and allowing overrides from content
const fallbackMap = new Map<string, any>(fallbackBios.map((b) => [b.name, b]));
const rawMap = new Map<string, any>((biosRaw || []).map((b) => [b.name, b]));
const orderedNames = Array.from(fallbackMap.keys());
const merged: any[] = orderedNames.map((name) => ({ ...(fallbackMap.get(name) as any), ...(rawMap.get(name) || {}) }));
for (const [name, b] of rawMap) {
  if (!fallbackMap.has(name)) merged.push(b);
}

const bios: Bio[] = merged.map((b) => ({
  name: b.name,
  title: b.title || '',
  blurb: b.blurb as string | string[],
  img: bioImages[b.name] || '/assets/images/placeholder-avatar.jpg',
  linkedin: (b as any).linkedin || linkedinUrlsByName[b.name],
}));

export default function Bios() {
  return (
    <section id="about-us" className="bg-black text-white">
      <div className="container mx-auto px-4 py-24 md:py-28">
        <Reveal as="h2" className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-8">About us</Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bios.map((b) => (
            <Reveal key={b.name} className="rounded-3xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/20">
                    <Image src={b.img || '/assets/images/placeholder-avatar.jpg'} alt={b.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{b.name}</h3>
                    <p className="text-white/70 text-lg">{b.title}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  {b.linkedin ? (
                    <a
                      href={b.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn profile for ${b.name}`}
                      className="group inline-flex items-center justify-center w-10 h-10 rounded-lg border border-transparent text-white/70 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:scale-[1.03] will-change-transform"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-120"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24H8z"/>
                      </svg>
                    </a>
                  ) : (
                    <span className="group inline-flex items-center justify-center w-10 h-10 rounded-lg border border-transparent text-white/30 hover:border-white/10 hover:bg-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-none hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:scale-[1.03] will-change-transform">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-120"
                        aria-hidden="true"
                      >
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 5.99 3.33 5.99 7.66V24h-5v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24H8z"/>
                      </svg>
                    </span>
                  )}
                </div>
              </div>
              {Array.isArray(b.blurb)
                ? b.blurb.map((paragraph, idx) => (
                    <p key={idx} className={`text-white/80 text-lg leading-relaxed ${idx === 0 ? 'mt-4' : 'mt-3'}`}>{paragraph}</p>
                  ))
                : String(b.blurb)
                    .split(/\n\s*\n/)
                    .map((paragraph, idx) => (
                      <p key={idx} className={`text-white/80 text-lg leading-relaxed ${idx === 0 ? 'mt-4' : 'mt-3'}`}>{paragraph}</p>
                    ))}
              {/* Removed bottom LinkedIn button to avoid duplication; icon in header links to profile */}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


