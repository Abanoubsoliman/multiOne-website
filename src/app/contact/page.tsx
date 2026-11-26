'use client';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { useLang } from '@/lib/i18n';
import { SITE } from '@/lib/site';

const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const { t, lang } = useLang();
  const c = t.contact;
  const [f, setF] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [s, setS] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle');
  const on = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setS('loading');
    try {
      if (!SERVICE || !TEMPLATE || !KEY) throw new Error('EmailJS env vars missing');
      await emailjs.send(SERVICE, TEMPLATE, { from_name: f.name, from_email: f.email, phone: f.phone, subject: f.subject, message: f.message }, KEY);
      setS('ok');
      setF({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch {
      setS('err');
    }
  };
  const field = 'w-full rounded-xl border border-line bg-bg1 px-5 py-4 text-fg placeholder-fg/35 outline-none transition focus:border-volt';
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} />
      <section className="container-x grid gap-12 pt-16 pb-28 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="space-y-8">
            {[[`${c.phone} · ${c.cairo}`, SITE.phone, SITE.phoneHref], [`${c.phone} · ${c.dubai}`, SITE.dubaiPhone, SITE.dubaiPhoneHref], [c.email, SITE.email, `mailto:${SITE.email}`], [`${c.address} · ${c.cairo}`, lang === 'ar' ? SITE.addressAr : SITE.address, undefined], ['Instagram', '@the_multione_', SITE.instagram]].map(([l, v, h]) => (
              <div key={l as string}>
                <div className="eyebrow mb-2">{l}</div>
                {h ? <a href={h as string} className="text-xl hover:text-volt" dir="ltr">{v}</a> : <p className="text-xl">{v}</p>}
              </div>
            ))}
            <p className="text-fg/50">{c.hours}. {c.dubai}: {c.dubaiAddr}</p>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:col-span-3">
          <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
            <input required className={field} placeholder={c.name} value={f.name} onChange={on('name')} />
            <input required type="email" className={field} placeholder={c.email} value={f.email} onChange={on('email')} />
            <input className={field} placeholder={c.phone} value={f.phone} onChange={on('phone')} />
            <input required className={field} placeholder={c.subject} value={f.subject} onChange={on('subject')} />
            <textarea required rows={6} className={`${field} sm:col-span-2`} placeholder={c.message} value={f.message} onChange={on('message')} />
            <button disabled={s === 'loading'} className="btn btn-primary sm:col-span-2 disabled:opacity-60">{s === 'loading' ? c.sending : c.send}</button>
            {s === 'ok' && <p className="text-emerald-400 sm:col-span-2">{c.ok}</p>}
            {s === 'err' && <p className="text-red-400 sm:col-span-2">{c.err}</p>}
          </form>
        </Reveal>
      </section>
    </>
  );
}
