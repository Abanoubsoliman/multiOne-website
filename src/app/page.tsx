'use client';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import Network from '@/components/Network';
import Counter from '@/components/Counter';
import FeatureGrid from '@/components/FeatureGrid';
import CtaBand from '@/components/CtaBand';
import { useLang } from '@/lib/i18n';
import { STATS } from '@/lib/site';

const logos = [
  ['/images/knx-logo.png', 'KNX'], ['/images/fibaro.png', 'Fibaro'], ['/images/Hikvision_logo.jpeg', 'Hikvision'],
  ['/images/dhua.png', 'Dahua'], ['/images/philips.png', 'Philips'],
];

export default function Home() {
  const { t } = useLang();
  const m = [...t.marquee, ...t.marquee];
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden noise">
        <div className="grid-bg absolute inset-0" />
        <Network />
        <div className="absolute start-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-volt/10 blur-[140px]" />
        <div className="container-x relative pt-24">
          <Reveal><span className="eyebrow">{t.hero.eyebrow}</span></Reveal>
          <h1 className="h-display mt-8 text-[clamp(3.2rem,10vw,9rem)]">
            <Reveal delay={100}><span className="block">{t.hero.l1}</span></Reveal>
            <Reveal delay={250}><span className="block text-volt">{t.hero.l2}</span></Reveal>
          </h1>
          <Reveal delay={400}><p className="mt-8 max-w-xl text-lg text-white/60 sm:text-xl">{t.hero.sub}</p></Reveal>
          <Reveal delay={550}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-primary">{t.hero.c1} →</Link>
              <Link href="/services" className="btn btn-ghost">{t.hero.c2}</Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 start-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40 sm:flex">
          {t.hero.scroll}
          <span className="h-10 w-px animate-float bg-gradient-to-b from-volt to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-ink-line bg-ink-2 py-6" dir="ltr">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {m.map((w, i) => (
            <span key={i} className="font-display text-3xl font-bold text-outline sm:text-5xl">{w} <span className="text-volt">✦</span></span>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="container-x py-24">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.key} delay={i * 100}>
              <div className="border-s border-ink-line ps-6">
                <div className="h-display text-5xl text-volt sm:text-6xl" dir="ltr"><Counter value={s.value} suffix={s.suffix} placeholder={s.placeholder} /></div>
                <div className="mt-2 text-sm text-white/50">{t.stats[s.key as keyof typeof t.stats]}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="container-x pb-28">
        <Reveal><span className="eyebrow">{t.why.eyebrow}</span></Reveal>
        <Reveal delay={100}><h2 className="h-display mb-14 mt-5 max-w-3xl text-4xl sm:text-6xl">{t.why.title}</h2></Reveal>
        <FeatureGrid items={t.why.items} cols={4} />
      </section>

      {/* SPLIT: HOME / OFFICE */}
      <section className="container-x pb-28">
        <Reveal><span className="eyebrow mb-8">{t.split.eyebrow}</span></Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {([['/smart-home', '/images/stock/villa-night.jpg', t.split.home], ['/smart-office', '/images/stock/office.jpg', t.split.office]] as const).map(([href, img, c], i) => (
            <Reveal key={href} delay={i * 150}>
              <Link href={href} data-cursor className="group relative block h-[520px] overflow-hidden rounded-3xl">
                <Image src={img} alt={c.t} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                  <h3 className="h-display text-4xl sm:text-5xl">{c.t}</h3>
                  <p className="mt-3 max-w-md text-white/70">{c.d}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-volt transition-all group-hover:gap-4">{c.c} →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-ink-line bg-ink-2 py-28">
        <div className="container-x">
          <Reveal><span className="eyebrow">{t.process.eyebrow}</span></Reveal>
          <Reveal delay={100}><h2 className="h-display mb-16 mt-5 max-w-3xl text-4xl sm:text-6xl">{t.process.title}</h2></Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-ink-line md:grid-cols-5">
            {t.process.steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 100} className="bg-ink-2">
                <div className="group h-full p-8 transition-colors hover:bg-ink-3" data-cursor>
                  <div className="h-display text-6xl text-outline transition-colors group-hover:text-volt">{i + 1}</div>
                  <h3 className="font-display mt-6 text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/55">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="container-x py-28">
        <Reveal><span className="eyebrow">{t.tech.eyebrow}</span></Reveal>
        <Reveal delay={100}><h2 className="h-display mb-12 mt-5 max-w-3xl text-4xl sm:text-5xl">{t.tech.title}</h2></Reveal>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {logos.map(([src, n], i) => (
            <Reveal key={n} delay={i * 80}>
              <div className="relative flex h-28 items-center justify-center rounded-2xl bg-white p-5 transition-transform hover:-translate-y-1" data-cursor>
                <Image src={src} alt={n} width={160} height={70} className="max-h-full w-auto object-contain" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
