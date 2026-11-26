import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#07080c', 2: '#0d0f16', 3: '#151925', line: '#232838' },
        volt: { DEFAULT: '#f5b301', soft: '#ffd45e', deep: '#c58a00' },
        cyan2: '#4cc9f0',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'var(--font-ar)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-ar)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
      animation: { marquee: 'marquee 30s linear infinite', float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};
export default config;
