'use client';
import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useLang } from '@/lib/i18n';

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} />
      <section className="container-x grid gap-10 pb-24 lg:grid-cols-2">
        <Reveal><p className="text-xl text-white/70">{a.p1}</p></Reveal>
        <Reveal delay={120}><p className="text-xl text-white/70">{a.p2}</p></Reveal>
      </section>
      <section className="container-x grid gap-5 pb-24 md:grid-cols-2">
        {[a.vision, a.mission].map((x, i) => (
          <Reveal key={x.t} delay={i * 120}>
            <div className="card glow-card h-full p-10" data-cursor><h2 className="h-display text-3xl text-volt">{x.t}</h2><p className="mt-4 text-lg text-white/65">{x.d}</p></div>
          </Reveal>
        ))}
      </section>
      <section className="container-x pb-24"><FeatureGrid items={a.values} cols={4} /></section>
      <CtaBand />
    </>
  );
}
