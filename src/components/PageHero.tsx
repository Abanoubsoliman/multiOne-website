'use client';
import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 noise">
      <div className="grid-bg absolute inset-0" />
      <div className="absolute -top-40 end-0 h-[500px] w-[500px] rounded-full bg-volt/10 blur-[120px]" />
      <div className="container-x relative">
        <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
        <Reveal delay={100}><h1 className="h-display mt-6 max-w-4xl text-5xl sm:text-7xl">{title}</h1></Reveal>
        {sub && <Reveal delay={200}><p className="mt-6 max-w-2xl text-lg text-white/60">{sub}</p></Reveal>}
      </div>
    </section>
  );
}
