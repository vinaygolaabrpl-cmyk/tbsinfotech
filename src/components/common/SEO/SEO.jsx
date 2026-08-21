import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import siteConfig from '../../../data/siteConfig.json';

const DEFAULT_IMAGE = 'https://placehold.co/1200x630/0ea5b5/ffffff?text=TBS+Infotech';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Drives document.title + <meta>/<link> tags for the active route. Plain
 * DOM writes on mount/update rather than react-helmet — this is a client-only
 * SPA (no SSR to reconcile against), so a dependency for it is unnecessary.
 */
export default function SEO({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  noindex = false
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${siteConfig.url}${pathname === '/' ? '' : pathname}`;

  useEffect(() => {
    if (title) document.title = title;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'keywords', keywords);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertMeta('name', 'author', siteConfig.name);

    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:site_name', siteConfig.name);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);

    upsertLink('canonical', canonicalUrl);
  }, [title, description, keywords, image, type, canonicalUrl, noindex]);

  return null;
}
