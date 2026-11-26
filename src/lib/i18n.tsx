'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { dict, Lang } from './dict';

type Ctx = { lang: Lang; t: (typeof dict)['en']; toggle: () => void };
const LangCtx = createContext<Ctx>({ lang: 'en', t: dict.en, toggle: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'ar' || saved === 'en') setLang(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }, [lang]);
  return (
    <LangCtx.Provider value={{ lang, t: dict[lang], toggle: () => setLang(lang === 'en' ? 'ar' : 'en') }}>
      {children}
    </LangCtx.Provider>
  );
}
export const useLang = () => useContext(LangCtx);
