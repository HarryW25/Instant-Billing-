# Instant Billing Partners website (instantbillings.com)

React + Vite single-page app, deployed on Vercel. Blog content comes from Sanity (project 7ftzdq2d); forms send through EmailJS (keys in src/ibp/emailjsConfig.js).

- `npm install`
- `npm run dev` for local development
- `npm run build` builds to `dist/` and then runs `scripts/postbuild-seo.mjs`, which writes a per-route `index.html` with the right title, description, canonical and Open Graph tags, plus `dist/sitemap.xml` (static pages and Sanity blog posts).
- Per-page SEO text lives in `src/ibp/seoData.js`.
- Facts that still need confirmation are rendered with the `<Confirm>` component; search for `<Confirm` to find them.
- Old `/servicespage/*`, `/specialties/*` and `/Blogpage` URLs 301 to the new pages (see `vercel.json`).
