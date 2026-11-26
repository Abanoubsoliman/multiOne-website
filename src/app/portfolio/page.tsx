'use client';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useLang } from '@/lib/i18n';

export default function Portfolio() {
  const { t } = useLang();
  const p = t.portfolio;
  const imgs = ['villa-night', 'office', 'living', 'lock-app', 'dashboard', 'villa-night']; // placeholder photos: see public/images/stock/README.md
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} sub={p.sub} />
      <section className="container-x pb-24">
        <p className="mb-8 inline-block rounded-full border border-volt/40 px-4 py-1.5 text-xs text-volt">{p.note}</p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {p.items.map((it, i) => (
            <Reveal key={it.t} delay={(i % 3) * 90}>
              <div className="card glow-card group relative flex h-96 flex-col justify-between p-8" data-cursor>
                <Image src={`/images/stock/${imgs[i]}.jpg`} alt={it.t} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <span className="relative text-xs uppercase tracking-widest text-volt">{it.c}</span>
                <div className="relative">
                  <h3 className="h-display text-3xl transition-transform group-hover:-translate-y-1">{it.t}</h3>
                  <p className="mt-2 text-white/55">{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
