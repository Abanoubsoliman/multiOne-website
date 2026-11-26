'use client';
import Link from 'next/link';
import Reveal from './Reveal';
import { useLang } from '@/lib/i18n';

export default function CtaBand() {
  const { t } = useLang();
  return (
    <section className="container-x pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-volt p-10 text-black sm:p-16">
          <div className="absolute -end-20 -top-20 h-80 w-80 rounded-full bg-black/10" />
          <h2 className="h-display max-w-2xl text-4xl sm:text-6xl">{t.cta.title}</h2>
          <p className="mt-5 max-w-lg text-lg text-black/70">{t.cta.sub}</p>
          <Link href="/contact" className="btn mt-8 bg-black text-white hover:bg-ink-3">{t.cta.c} →</Link>
        </div>
      </Reveal>
    </section>
  );
}
