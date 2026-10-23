// After `vite build`: write dist/<route>/index.html with route-specific
// <title>, description, canonical and OG tags, so crawlers that do not run JS
// still see correct metadata. Also writes dist/sitemap.xml (static routes plus
// blog posts from Sanity, when reachable).
import fs from 'node:fs';
import path from 'node:path';
import { seoRoutes, SITE_URL } from '../src/ibp/seoData.js';

const dist = path.resolve('dist');
const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function render(route, { title, description }) {
  const url = SITE_URL + (route === '/' ? '/' : route);
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*"/, `$1${esc(description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${esc(title)}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${esc(description)}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${esc(title)}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${esc(description)}"`);
  return html;
}

for (const [route, meta] of Object.entries(seoRoutes)) {
  const html = render(route, meta);
  const out = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
}

const today = new Date().toISOString().slice(0, 10);
const urls = Object.keys(seoRoutes).map((r) => ({ loc: SITE_URL + (r === '/' ? '/' : r), lastmod: today }));

try {
  const q = encodeURIComponent('*[_type == "post" && defined(slug.current)]{"slug": slug.current, _updatedAt}');
  const res = await fetch(`https://7ftzdq2d.apicdn.sanity.io/v2023-01-01/data/query/production?query=${q}`, { signal: AbortSignal.timeout(10000) });
  if (res.ok) {
    const { result = [] } = await res.json();
    for (const p of result) urls.push({ loc: `${SITE_URL}/blog/${encodeURIComponent(p.slug)}`, lastmod: (p._updatedAt || today).slice(0, 10) });
    console.log(`sitemap: added ${result.length} blog posts from Sanity`);
  }
} catch (e) {
  console.warn('sitemap: Sanity not reachable, blog posts skipped:', e.message);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod></url>`)
  .join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
console.log(`postbuild-seo: wrote ${Object.keys(seoRoutes).length} route pages and sitemap.xml (${urls.length} URLs)`);
