'use client';
import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useLang } from '@/lib/i18n';

export default function Services() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} sub={t.services.sub} />
      <section className="container-x pb-24"><FeatureGrid items={t.services.items} /></section>
      <section className="theme-dark bg-bg0 py-24">
        <div className="container-x">
          <Reveal><h2 className="h-display mb-12 text-4xl sm:text-5xl">{t.process.title}</h2></Reveal>
          <div className="grid gap-6 md:grid-cols-5">
            {t.process.steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 90}>
                <div className="border-t-2 border-volt pt-5"><div className="font-display text-sm text-volt">0{i + 1}</div><h3 className="font-display mt-2 text-lg font-semibold">{s.t}</h3><p className="mt-2 text-sm text-fg/55">{s.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <div className="pt-24"><CtaBand /></div>
    </>
  );
}
