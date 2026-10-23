import { useEffect } from 'react';
import { seoRoutes, SITE_URL, SITE_NAME } from './seoData';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function useSeo(path, override = {}) {
  const base = seoRoutes[path] || {};
  const title = override.title || base.title || SITE_NAME;
  const description = override.description || base.description || '';
  const canonicalPath = override.path || path;
  useEffect(() => {
    document.title = title;
    const url = SITE_URL + (canonicalPath === '/' ? '/' : canonicalPath);
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', override.type || 'website');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    if (override.image) setMeta('property', 'og:image', override.image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
    let robots = document.head.querySelector('meta[name="robots"]');
    if (override.noindex) {
      if (!robots) { robots = document.createElement('meta'); robots.setAttribute('name', 'robots'); document.head.appendChild(robots); }
      robots.setAttribute('content', 'noindex');
    } else if (robots) robots.remove();
  }, [title, description, canonicalPath, override.type, override.image, override.noindex]);
}
