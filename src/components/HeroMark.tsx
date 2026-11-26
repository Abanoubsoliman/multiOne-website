'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

// Big logo mark that drifts with the pointer (parallax) and breathes slowly.
export default function HeroMark() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      el.style.transform = `translate3d(${-x}px, ${-y}px, 0) rotateY(${x / 2}deg) rotateX(${-y / 2}deg)`;
    };
    window.addEventListener('mousemove', on);
    return () => window.removeEventListener('mousemove', on);
  }, []);
  return (
    <div className="pointer-events-none absolute end-[2%] top-1/2 hidden w-[34vw] max-w-[560px] -translate-y-1/2 lg:block" style={{ perspective: 1000 }} aria-hidden>
      <div ref={ref} className="transition-transform duration-300 ease-out">
        <div className="animate-float opacity-90 drop-shadow-[0_30px_80px_rgba(10,117,187,0.55)]">
          <Image src="/images/logo-mark-white.png" alt="" width={1145} height={889} priority />
        </div>
      </div>
    </div>
  );
}
