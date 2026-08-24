import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

// Client-side (pushState) navigation never triggers the browser's native
// "scroll to the element matching this hash" behaviour the way a real page
// load does — and even on a real load, the target element may not exist in
// the DOM yet (it's rendered by React, not present in the initial HTML). So
// hash links (e.g. the footer's "FAQ" -> "/#faq") need to be scrolled to
// manually. This polls for a couple of frames in case the target page's
// content (and therefore the element) hasn't finished rendering yet, then
// scrolls to it with an offset for the sticky header so the section isn't
// tucked underneath it.
function scrollToHashTarget(hash) {
  const id = hash.replace('#', '');
  if (!id) return;

  let attempts = 0;

  const tryScroll = () => {
    const el = document.getElementById(id);

    if (el) {
      const headerOffset = document.querySelector('.site-header')?.offsetHeight ?? 0;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset - 16;
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }

    attempts += 1;
    if (attempts < 30) {
      requestAnimationFrame(tryScroll);
    }
  };

  requestAnimationFrame(tryScroll);
}

/**
 * Global scroll-restoration fix, mounted once inside <BrowserRouter>.
 *
 * - On a normal navigation (clicking a Link/NavLink/Button "to" anywhere —
 *   header, dropdowns, footer, cards, breadcrumbs) the new route always
 *   opens scrolled to the top.
 * - On browser Back/Forward (POP navigation) the browser's native scroll
 *   position restoration is left alone, so users land back where they were.
 * - If the URL includes a hash (e.g. "/#faq"), we scroll to that element
 *   ourselves (see scrollToHashTarget above) — existing hash links (like
 *   the Home FAQ jump and the footer FAQ link) actually land on the
 *   section instead of leaving the scroll position untouched.
 *
 * This replaces the need for any per-page window.scrollTo() calls.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();
  const firstRender = useRef(true);

  // Tell the browser we'll manage scroll ourselves on PUSH/REPLACE, but
  // let it manage (restore) scroll natively on POP (back/forward).
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  useLayoutEffect(() => {
    // A hash is present (in-page anchor link, e.g. "/#faq"): scroll to it
    // ourselves, whether this is the first render (a shared "/#faq" link
    // opened directly) or a later in-app navigation (the footer FAQ link).
    if (hash) {
      firstRender.current = false;
      scrollToHashTarget(hash);
      return;
    }

    // Skip the very first mount so the page doesn't jump on initial load.
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Back/forward: don't fight the browser's own scroll restoration.
    if (navigationType === 'POP') return;

    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
}
