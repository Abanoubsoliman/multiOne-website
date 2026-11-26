'use client';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useLang } from '@/lib/i18n';

export default function Page() {
  const { t } = useLang();
  const c = t.home;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
      <section className="container-x pb-20">
        <Reveal>
          <div className="theme-dark relative h-[60vh] min-h-[320px] overflow-hidden rounded-3xl">
            <Image src="/images/stock/living.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg0/50 to-transparent" />
          </div>
        </Reveal>
      </section>
      <section className="container-x pb-24"><FeatureGrid items={c.features} /></section>
      <section className="container-x pb-24">
        <Reveal><h2 className="h-display mb-10 text-4xl">{t.home.faqTitle}</h2></Reveal>
        <div className="divide-y divide-line border-y border-line">
          {t.home.faq.map((f) => (
            <Reveal key={f.q}>
              <details className="group py-6" data-cursor>
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl font-semibold">{f.q}<span className="text-2xl text-volt transition-transform group-open:rotate-45">+</span></summary>
                <p className="mt-4 max-w-2xl text-fg/60">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
