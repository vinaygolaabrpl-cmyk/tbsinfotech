import { createContext, useEffect, useMemo, useState } from 'react';
import { detectCountryCode } from '../utils/detectCountry';

export const CurrencyContext = createContext(null);

const STORAGE_KEY = 'tbs-country-code';

function getCachedCountryCode() {
  if (typeof window === 'undefined') return null;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function cacheCountryCode(code) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, code);
  } catch {
    // sessionStorage unavailable (private browsing, etc.) — safe to ignore.
  }
}

/**
 * Detects whether the visitor is browsing from India (via IP) and exposes
 * the resulting display currency ('INR' | 'USD') to the rest of the app.
 *
 * Defaults to 'USD' immediately and while detection is in progress, and
 * falls back to 'USD' permanently if detection fails — pricing never
 * breaks or blocks on this.
 */
export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('USD');

  useEffect(() => {
    let cancelled = false;

    const cached = getCachedCountryCode();
    if (cached) {
      if (!cancelled) setCurrency(cached === 'IN' ? 'INR' : 'USD');
      return undefined;
    }

    detectCountryCode().then((code) => {
      if (cancelled) return;
      if (code) {
        cacheCountryCode(code);
        setCurrency(code === 'IN' ? 'INR' : 'USD');
      }
      // On failed detection (code === null) currency simply stays 'USD'.
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const value = useMemo(() => ({ currency }), [currency]);

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}
