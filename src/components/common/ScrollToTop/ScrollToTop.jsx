import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Global scroll-restoration fix, mounted once inside <BrowserRouter>.
 *
 * - On a normal navigation (clicking a Link/NavLink/Button "to" anywhere —
 *   header, dropdowns, footer, cards, breadcrumbs) the new route always
 *   opens scrolled to the top.
 * - On browser Back/Forward (POP navigation) the browser's native scroll
 *   position restoration is left alone, so users land back where they were.
 * - If the URL includes a hash (e.g. "/#faq"), we let the browser/anchor
 *   scroll to that element instead of forcing the top — existing hash
 *   links (like the Home FAQ jump) keep working exactly as before.
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
    // Skip the very first mount so the page doesn't jump on initial load
    // if the URL was opened with a hash (e.g. a shared "/#faq" link).
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    // Back/forward: don't fight the browser's own scroll restoration.
    if (navigationType === 'POP') return;

    // A hash is present (in-page anchor link): let the browser handle it.
    if (hash) return;

    window.scrollTo(0, 0);
  }, [pathname, hash, navigationType]);

  return null;
}
