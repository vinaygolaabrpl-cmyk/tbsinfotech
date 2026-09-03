/**
 * Minimal IP-based country detection, used only to decide between
 * INR (India) and USD (everywhere else) pricing.
 *
 * Uses a free, keyless, CORS-friendly geo-IP endpoint. If the request
 * fails, times out, or returns something unexpected, this resolves to
 * `null` so callers can safely fall back to USD pricing.
 */

const GEO_IP_ENDPOINT = 'https://get.geojs.io/v1/ip/country.json';
const TIMEOUT_MS = 4000;

/**
 * Resolves to a 2-letter ISO country code (e.g. "IN", "US"), or `null`
 * if detection failed for any reason. Never throws.
 */
export async function detectCountryCode() {
  if (typeof fetch !== 'function') return null;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const response = await fetch(GEO_IP_ENDPOINT, { signal: controller.signal });
    if (!response.ok) return null;

    const data = await response.json();
    const code = data?.country_code || data?.country;
    return typeof code === 'string' && code.length === 2 ? code.toUpperCase() : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}
