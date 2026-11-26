'use client';
import Image from 'next/image';
import { useState } from 'react';
import Reveal from './Reveal';
import { useLang } from '@/lib/i18n';

type RoomKey = 'living' | 'kitchen' | 'bedroom' | 'office' | 'garden';
type RoomState = { on: boolean; dim: number; shut: number; ac: boolean; temp: number };
const IMG: Record<RoomKey, string> = { living: 'living', kitchen: 'kitchen', bedroom: 'bedroom', office: 'office', garden: 'villa-night' };
const ICON: Record<RoomKey, string> = {
  living: 'M4 11V8a3 3 0 013-3h10a3 3 0 013 3v3M2 13a2 2 0 014 0v2h12v-2a2 2 0 014 0v5H2zM5 18v2M19 18v2',
  kitchen: 'M5 3h14v18H5zM5 9h14M9 5.5h.01M9 13h6M9 16h6',
  bedroom: 'M3 18V7M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5M7 11.5h.01',
  office: 'M3 7h18v13H3zM9 7V4h6v3M3 13h18',
  garden: 'M12 21V10M12 10c0-4 3-6 7-6 0 4-3 6-7 6zM12 14c0-3-2-5-6-5 0 3 2 5 6 5z',
};
const Icon = ({ k }: { k: RoomKey }) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d={ICON[k]} /></svg>
);
const init = (): Record<RoomKey, RoomState> => ({
  living: { on: true, dim: 70, shut: 80, ac: true, temp: 23 },
  kitchen: { on: false, dim: 80, shut: 100, ac: false, temp: 24 },
  bedroom: { on: false, dim: 40, shut: 30, ac: true, temp: 22 },
  office: { on: true, dim: 90, shut: 60, ac: true, temp: 23 },
  garden: { on: true, dim: 50, shut: 100, ac: false, temp: 24 },
});

function Toggle({ on, onClick, label }: { on: boolean; onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} aria-pressed={on} aria-label={label} className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${on ? 'bg-brand' : 'bg-fg/20'}`}>
      <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${on ? 'start-6' : 'start-1'}`} />
    </button>
  );
}

export default function Demo() {
  const { t } = useLang();
  const d = t.demo;
  const [room, setRoom] = useState<RoomKey>('living');
  const [rooms, setRooms] = useState(init);
  const [armed, setArmed] = useState(false);
  const [water, setWater] = useState(false);
  const r = rooms[room];
  const set = (p: Partial<RoomState>) => setRooms({ ...rooms, [room]: { ...r, ...p } });
  const garden = room === 'garden';

  const scene = (k: 'morning' | 'movie' | 'away' | 'night') => {
    const all = (f: (x: RoomState) => RoomState) => Object.fromEntries(Object.entries(rooms).map(([key, v]) => [key, f(v)])) as Record<RoomKey, RoomState>;
    if (k === 'morning') { setRooms(all((x) => ({ ...x, on: false, shut: 100, ac: true, temp: 24 }))); setArmed(false); }
    if (k === 'movie') { setRooms(all((x) => ({ ...x, on: true, dim: 15, shut: 0, ac: true, temp: 22 }))); }
    if (k === 'away') { setRooms(all((x) => ({ ...x, on: false, shut: 0, ac: false }))); setArmed(true); setWater(false); }
    if (k === 'night') { setRooms(all((x) => ({ ...x, on: true, dim: 20, shut: 0 }))); setArmed(true); }
  };

  const light = r.on ? r.dim / 100 : 0;
  const bright = Math.min(0.32 + (garden ? 0.1 : (r.shut / 100) * 0.4) + light * 0.45, 1.05);
  const slats = garden ? 0 : 100 - r.shut;

  return (
    <section id="demo" className="theme-dark bg-gradient-to-b from-bg0 to-bg1 py-28">
      <div className="container-x">
        <Reveal><span className="eyebrow">{d.eyebrow}</span></Reveal>
        <Reveal delay={100}><h2 className="h-display mt-5 max-w-3xl text-4xl sm:text-6xl">{d.title}</h2></Reveal>
        <Reveal delay={200}><p className="mt-5 max-w-2xl text-fg/60">{d.sub}</p></Reveal>

        <Reveal delay={250}>
          <div className="mt-14 grid gap-6 lg:grid-cols-5">
            {/* SCENE */}
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-line lg:col-span-3 lg:h-[600px]" data-cursor>
              <Image src={`/images/stock/${IMG[room]}.jpg`} alt={d.rooms[room]} fill sizes="(min-width:1024px) 60vw, 100vw" className="object-cover transition-[filter] duration-700" style={{ filter: `brightness(${bright}) saturate(${0.8 + light * 0.4}) ${r.ac && !garden ? 'hue-rotate(-8deg)' : ''}` }} />
              <div className="pointer-events-none absolute inset-0 transition-opacity duration-700" style={{ opacity: light, background: 'radial-gradient(ellipse at 50% 20%, rgba(255,214,140,0.55), rgba(255,190,90,0.15) 45%, transparent 75%)', mixBlendMode: 'screen' }} />
              {/* shutter slats */}
              <div className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden transition-all duration-700" style={{ height: `${slats * 0.6}%` }}>
                <div className="h-full w-full" style={{ background: 'repeating-linear-gradient(to bottom, #2a3a49 0 14px, #121c26 14px 18px)', opacity: 0.94 }} />
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-brand-light/70" />
              </div>
              {/* irrigation */}
              {garden && water && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1/2 items-end justify-around px-8">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <span key={i} className="block w-1 animate-float rounded-full bg-cyan-200/70" style={{ height: 60 + (i % 3) * 30, animationDuration: `${1.2 + (i % 4) * 0.3}s` }} />
                  ))}
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-bg0 to-transparent p-6">
                <div>
                  <div className="font-display text-3xl">{d.rooms[room]}</div>
                  <div className="mt-1 text-sm text-fg/70">
                    {!garden && <>{r.ac ? `${r.temp}°C` : '—'} · </>}{r.on ? `${d.lights} ${r.dim}%` : `${d.lights} ${d.off}`}
                  </div>
                </div>
                <span className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${armed ? 'border-red-400/60 text-red-300' : 'border-fg/20 text-fg/60'}`}>
                  <span className={`h-2 w-2 rounded-full ${armed ? 'animate-pulse bg-red-400' : 'bg-fg/40'}`} />
                  {d.security}: {armed ? d.armed : d.disarmed}
                </span>
              </div>
            </div>

            {/* APP PANEL */}
            <div className="rounded-3xl border border-line bg-bg1 p-6 lg:col-span-2">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-lg">{d.welcome}</span>
                <span className="rounded-full bg-brand/20 px-3 py-1 text-xs text-volt">MultiOne</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {(Object.keys(IMG) as RoomKey[]).map((k) => (
                  <button key={k} onClick={() => setRoom(k)} className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-3 text-[11px] transition ${room === k ? 'border-volt bg-brand/20 text-fg' : 'border-line text-fg/60 hover:border-fg/30'}`}>
                    <Icon k={k} /><span className="max-w-full truncate">{d.rooms[k]}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <div className="flex items-center justify-between"><span>{d.lights}</span><Toggle on={r.on} onClick={() => set({ on: !r.on })} label={d.lights} /></div>
                  <input type="range" min={5} max={100} value={r.dim} disabled={!r.on} onChange={(e) => set({ dim: +e.target.value })} className="mt-3 w-full accent-[#3AA0E8] disabled:opacity-30" />
                </div>
                {!garden && (
                  <>
                    <div>
                      <div className="flex items-center justify-between"><span>{d.shutters}</span><span className="text-sm text-fg/60">{r.shut === 0 ? d.closed : r.shut === 100 ? d.open : `${r.shut}%`}</span></div>
                      <input type="range" min={0} max={100} value={r.shut} onChange={(e) => set({ shut: +e.target.value })} className="mt-3 w-full accent-[#3AA0E8]" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between"><span>{d.climate} {r.ac && <span className="text-fg/60">· {r.temp}°C</span>}</span><Toggle on={r.ac} onClick={() => set({ ac: !r.ac })} label={d.climate} /></div>
                      <div className="mt-3 flex items-center gap-3">
                        <button disabled={!r.ac} onClick={() => set({ temp: Math.max(18, r.temp - 1) })} className="h-9 w-9 rounded-full border border-line text-lg disabled:opacity-30">−</button>
                        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-fg/10"><div className="h-full bg-gradient-to-r from-cyan-300 to-orange-300 transition-all" style={{ width: r.ac ? `${((r.temp - 18) / 10) * 100}%` : 0 }} /></div>
                        <button disabled={!r.ac} onClick={() => set({ temp: Math.min(28, r.temp + 1) })} className="h-9 w-9 rounded-full border border-line text-lg disabled:opacity-30">+</button>
                      </div>
                    </div>
                  </>
                )}
                {garden && (
                  <div className="flex items-center justify-between"><span>{d.irrigation} <span className="text-fg/60">· {water ? d.running : d.idle}</span></span><Toggle on={water} onClick={() => setWater(!water)} label={d.irrigation} /></div>
                )}
                <div className="flex items-center justify-between"><span>{d.security}</span><Toggle on={armed} onClick={() => setArmed(!armed)} label={d.security} /></div>
              </div>

              <div className="mt-7 border-t border-line pt-5">
                <div className="mb-3 text-xs uppercase tracking-widest text-fg/50">{d.scenes}</div>
                <div className="grid grid-cols-4 gap-2">
                  {(['morning', 'movie', 'away', 'night'] as const).map((k) => (
                    <button key={k} onClick={() => scene(k)} className="rounded-xl border border-line px-2 py-2.5 text-xs transition hover:border-volt hover:text-volt">{d.sceneNames[k]}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        <p className="mt-6 text-xs text-fg/40">{d.note}</p>
      </div>
    </section>
  );
}
