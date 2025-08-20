import Image from 'next/image';
import map from '@/public/assets/images/assets-map.json';

export default function LogosStrip() {
  const r1 = (map as any).logosRow1 as string[] | undefined;
  const r2 = (map as any).logosRow2 as string[] | undefined;
  const all = (map as any).logos as string[] | undefined;
  const defaultsAll = [
    '/assets/images/logo-1.png',
    '/assets/images/logo-2.png',
    '/assets/images/logo-3.png',
    '/assets/images/logo-4.png',
    '/assets/images/logo-5.png',
    '/assets/images/logo-6.png',
    '/assets/images/logo-7.png',
    '/assets/images/logo-8.png',
    '/assets/images/logo-9.png',
    '/assets/images/logo-10.png',
    '/assets/images/logo-11.png',
    '/assets/images/logo-12.png',
  ];
  const split = (list: string[] = []) => {
    const mid = Math.ceil(list.length / 2);
    return [list.slice(0, mid), list.slice(mid)];
  };
  let [row1List, row2List] = r1 && r2 ? [r1, r2] : split(all && all.length ? all : defaultsAll);
  if ((row1List?.length ?? 0) === 0 && (row2List?.length ?? 0) === 0) {
    // Fallback to known local filenames if mapping was cleared by an assets run
    row1List = ['/assets/images/logo-1.png','/assets/images/logo-2.png','/assets/images/logo-3.png','/assets/images/logo-4.png','/assets/images/logo-5.png','/assets/images/logo-6.png'];
    row2List = ['/assets/images/logo-7.png','/assets/images/logo-8.png','/assets/images/logo-9.png','/assets/images/logo-10.png','/assets/images/logo-11.png','/assets/images/logo-12.png'];
  }
  // Ensure rows contain unique sets; if any overlap, rebuild row2 from remaining defaults
  const overlap = new Set(row1List.filter((s) => row2List.includes(s)));
  if (overlap.size > 0) {
    row2List = (all && all.length ? all : defaultsAll).filter((s) => !new Set(row1List).has(s));
    if (row2List.length === 0) {
      row2List = defaultsAll.filter((s) => !new Set(row1List).has(s));
    }
  }
  const row1 = row1List.map((src, i) => ({ src, alt: `Logo ${i + 1}` }));
  const row2 = row2List.map((src, i) => ({ src, alt: `Logo ${i + 1 + row1List.length}` }));
  return (
    <section className="bg-white text-black">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <h2 className="text-center text-4xl md:text-5xl font-semibold tracking-tight mb-8 pb-4">B2B brands we've helped grow</h2>
        <div className="space-y-8">
          {/* Row 1 (reverse direction) */}
          <div className="relative overflow-hidden motion-reduce:overflow-visible">
            <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex items-center gap-x-12 animate-marquee will-change-transform motion-reduce:animate-none" style={{ animationDirection: 'reverse' }}>
                {[...row1, ...row1].map((l, idx) => (
                  <div key={`r1-${idx}`} className="relative h-6 w-24 md:h-8 md:w-32 shrink-0">
                    <Image src={l.src} alt={l.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative overflow-hidden motion-reduce:overflow-visible">
            <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
              <div className="flex items-center gap-x-12 animate-marquee will-change-transform motion-reduce:animate-none">
                {[...row2, ...row2].map((l, idx) => (
                  <div key={`r2-${idx}`} className="relative h-6 w-24 md:h-8 md:w-32 shrink-0">
                    <Image src={l.src} alt={l.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


