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
    <section id="about-us" className="bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-28">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-12">
            <p className="text-white/50 text-sm uppercase tracking-widest mb-4">Our team</p>
            <h2 className="text-4xl md:text-5xl tracking-tight">
              Senior operators, not junior account managers
            </h2>
          </Reveal>
          
          <div className="space-y-8">
            {bios.map((b, idx) => (
              <Reveal key={b.name}>
                <div className="group border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Photo */}
                    <div className="shrink-0">
                      <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-2xl ring-1 ring-white/10">
                        <Image src={b.img || '/assets/images/placeholder-avatar.jpg'} alt={b.name} fill className="object-cover" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl md:text-3xl mb-1">{b.name}</h3>
                          <p className="text-white/60 text-lg">{b.title}</p>
                        </div>
                        {b.linkedin && (
                          <a
                            href={b.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn profile for ${b.name}`}
                            className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#0A66C2]/80 transition-colors shrink-0"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                      
                      <div className="text-white/70 text-base leading-relaxed space-y-3">
                        {Array.isArray(b.blurb)
                          ? b.blurb.map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))
                          : String(b.blurb)
                              .split(/\n\s*\n/)
                              .map((paragraph, pIdx) => (
                                <p key={pIdx}>{paragraph}</p>
                              ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


