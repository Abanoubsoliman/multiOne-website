'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/i18n';

export default function Navbar() {
  const { t, lang, toggle } = useLang();
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const f = () => setScrolled(window.scrollY > 30); f(); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f); }, []);
  useEffect(() => setOpen(false), [path]);
  const links = [
    ['/smart-home', t.nav.smartHome], ['/smart-office', t.nav.smartOffice], ['/services', t.nav.services],
    ['/portfolio', t.nav.portfolio], ['/about', t.nav.about],
  ];
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? 'bg-ink/80 backdrop-blur-xl border-b border-ink-line' : ''}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight">
          Multi<span className="text-volt">One</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([h, l]) => (
            <Link key={h} href={h} className={`relative text-sm transition-colors hover:text-volt ${path === h ? 'text-volt' : 'text-white/70'}`}>{l}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggle} aria-label="Switch language" className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-volt hover:text-volt">
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <Link href="/contact" className="btn btn-primary hidden !py-2.5 sm:inline-flex">{t.nav.cta}</Link>
          <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="container-x flex flex-col gap-1 pb-6 lg:hidden">
          {[...links, ['/contact', t.nav.contact]].map(([h, l]) => (
            <Link key={h} href={h} className="border-b border-ink-line py-3 text-lg font-display">{l}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
