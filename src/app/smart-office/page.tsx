'use client';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FeatureGrid from '@/components/FeatureGrid';
import CtaBand from '@/components/CtaBand';
import Reveal from '@/components/Reveal';
import { useLang } from '@/lib/i18n';

export default function Page() {
  const { t } = useLang();
  const c = t.office;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
      <section className="container-x pb-20">
        <Reveal>
          <div className="theme-dark relative h-[60vh] min-h-[320px] overflow-hidden rounded-3xl">
            <Image src="/images/stock/office.jpg" alt={c.title} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg0/50 to-transparent" />
          </div>
        </Reveal>
      </section>
      <section className="container-x pb-24"><FeatureGrid items={c.features} /></section>
      <CtaBand />
    </>
  );
}
