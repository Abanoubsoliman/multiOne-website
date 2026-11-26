'use client';
import Reveal from './Reveal';

export default function FeatureGrid({ items, cols = 3 }: { items: { t: string; d: string }[]; cols?: 2 | 3 | 4 }) {
  return (
    <div className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? 'lg:grid-cols-3' : cols === 4 ? 'lg:grid-cols-4' : ''}`}>
      {items.map((it, i) => (
        <Reveal key={it.t} delay={(i % 3) * 90}>
          <div className="card glow-card h-full p-8" data-cursor>
            <div className="font-display text-sm text-volt/80">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="font-display mt-6 text-xl font-semibold">{it.t}</h3>
            <p className="mt-3 text-white/55">{it.d}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
