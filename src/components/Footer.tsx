'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/lib/i18n';
import { SITE } from '@/lib/site';

export default function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="relative overflow-hidden theme-dark border-t border-line bg-bg0">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Image src="/images/logo-full-white.png" alt="The MultiOne Smart Solutions" width={220} height={130} className="h-auto w-48" />
            <p className="mt-4 max-w-xs text-fg/50">{t.footer.tag}</p>
          </div>
          <div>
            <h4 className="eyebrow mb-5">{t.footer.links}</h4>
            <ul className="space-y-3 text-fg/70">
              {[['/smart-home', t.nav.smartHome], ['/smart-office', t.nav.smartOffice], ['/services', t.nav.services], ['/portfolio', t.nav.portfolio], ['/about', t.nav.about]].map(([h, l]) => (
                <li key={h}><Link href={h} className="transition hover:text-volt">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="eyebrow mb-5">{t.footer.contact}</h4>
            <ul className="space-y-3 text-fg/70">
              <li><a href={SITE.phoneHref} className="hover:text-volt" dir="ltr">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-volt">{SITE.email}</a></li>
              <li>{lang === 'ar' ? SITE.addressAr : SITE.address}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-sm text-fg/40 sm:flex-row">
          <span>© {new Date().getFullYear()} MultiOne. {t.footer.rights}</span>
          <span className="flex gap-6"><Link href="/privacy-policy" className="hover:text-volt">{t.footer.privacy}</Link><Link href="/terms" className="hover:text-volt">{t.footer.terms}</Link></span>
        </div>
      </div>
      <div className="pointer-events-none select-none text-center font-display text-[22vw] font-bold leading-none text-outline opacity-40" aria-hidden>MULTIONE</div>
    </footer>
  );
}
