/**
 * Opens a package/plan's manually configured PayPal link in a new tab.
 * Does nothing if no link has been configured yet — this never builds,
 * derives or falls back to any URL, it only ever opens the exact string
 * stored on that specific package/plan's own data.
 */
export function openPaypalLink(paypalLink) {
  if (!paypalLink) return;
  window.open(paypalLink, '_blank', 'noopener,noreferrer');
}
