'use client';
import Link from 'next/link';
import Reveal from './Reveal';
import { useLang } from '@/lib/i18n';

export default function CtaBand() {
  const { t } = useLang();
  return (
    <section className="container-x pb-28">
      <Reveal>
        <div className="relative overflow-hidden theme-dark rounded-3xl bg-gradient-to-br from-brand-deep via-bg1 to-brand p-10 text-fg sm:p-16">
          <div className="absolute -end-20 -top-20 h-80 w-80 rounded-full bg-white/10" />
          <h2 className="h-display max-w-2xl text-4xl sm:text-6xl">{t.cta.title}</h2>
          <p className="mt-5 max-w-lg text-lg text-fg/75">{t.cta.sub}</p>
          <Link href="/contact" className="btn mt-8 bg-white text-brand-deep hover:bg-bg0">{t.cta.c} →</Link>
        </div>
      </Reveal>
    </section>
  );
}
