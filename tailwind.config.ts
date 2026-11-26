import type { Config } from 'tailwindcss';

const v = (n: string) => `rgb(var(--${n}) / <alpha-value>)`;
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg0: v('bg0'), bg1: v('bg1'), bg2: v('bg2'), line: v('line'), fg: v('fg'), volt: v('accent'),
        brand: { DEFAULT: '#0A75BB', light: '#3AA0E8', deep: '#06314f', grey: '#71706F', charcoal: '#3D3D3C' },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'var(--font-ar)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-ar)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      animation: { marquee: 'marquee 32s linear infinite', float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};
export default config;
