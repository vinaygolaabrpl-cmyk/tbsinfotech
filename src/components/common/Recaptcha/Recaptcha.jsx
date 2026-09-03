import { forwardRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './Recaptcha.scss';

const SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';

/**
 * Shared Google reCAPTCHA v2 ("I'm not a robot" checkbox) widget used by
 * every form on the site (Contact, Free SEO Audit, Career Application).
 * Centralizing it here means the site key, styling and the
 * not-yet-configured fallback only need to be handled in one place.
 *
 * Forwards a ref to the underlying `react-google-recaptcha` instance so
 * the parent form can call `.reset()` after a submit (a v2 token is
 * single-use and expires, so it must be reset before the next submit).
 */
const Recaptcha = forwardRef(function Recaptcha({ onChange }, ref) {
  if (!SITE_KEY) {
    // No site key configured yet (e.g. local dev without a .env value).
    // Fail safe by not blocking the form, but make it obvious in the
    // console so it isn't missed before going live.
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('VITE_RECAPTCHA_SITE_KEY is not set — reCAPTCHA widget is hidden. Forms will submit without it.');
    }
    return null;
  }

  return (
    <div className="recaptcha-field">
      <ReCAPTCHA ref={ref} sitekey={SITE_KEY} onChange={onChange} onExpired={() => onChange(null)} />
    </div>
  );
});

export default Recaptcha;
