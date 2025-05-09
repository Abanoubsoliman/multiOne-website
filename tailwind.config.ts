import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B46C1',
          light: '#9F7AEA',
          dark: '#553C9A',
        },
        secondary: {
          DEFAULT: '#FFFFFF',
          dark: '#F7FAFC',
        },
      },
      fontFamily: {
        sans: ['var(--font-cairo)'],
      },
    },
  },
  plugins: [],
};

export default config; 