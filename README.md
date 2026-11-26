# MultiOne Website

Marketing site for MultiOne, a KNX / ELV / smart building integrator in Cairo.

Next.js 14 (App Router, static export) + TypeScript + Tailwind. Bilingual (English / Arabic with RTL), animated hero, custom cursor, scroll reveals.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Contact form (EmailJS)

Copy `.env.example` to `.env.local` and fill in your EmailJS service, template and public key.

## Content

- Text (EN/AR): `src/lib/dict.ts`
- Company details: `src/lib/site.ts`. The three `XX+` stats are placeholders: set real numbers in `STATS` (and `placeholder: false`).
- Photos: `public/images/stock/` are stand-in stock photos. See the README there for how to swap in real project photos.

Contact: 7 Abdel Moneim Fawzy Street, New Nozha, Cairo. info@multione.com
