import { useRef, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Button from '../Button';
import Recaptcha from '../Recaptcha';
import { submitForm } from '../../../services/mailApi';
import { showSuccessAlert } from '../../../utils/swalAlerts';
import './SeoAuditForm.scss';

const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,15}$/;
const URL_REGEX = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i;
const RECAPTCHA_ENABLED = Boolean(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

function validateField(name, value) {
  const v = value.trim();
  switch (name) {
    case 'website':
      if (!v) return 'Please enter your website URL.';
      if (!URL_REGEX.test(v)) return 'Please enter a valid website URL.';
      return '';
    case 'name':
      if (!v) return 'Please enter your name.';
      if (v.length < 2) return 'Name must be at least 2 characters.';
      if (!NAME_REGEX.test(v)) return "Name can only contain letters, spaces and - ' .";
      return '';
    case 'email':
      if (!v) return 'Please enter your email address.';
      if (!EMAIL_REGEX.test(v)) return 'Please enter a valid email address.';
      return '';
    case 'phone':
      if (!v) return 'Please enter your phone number.';
      if (!PHONE_REGEX.test(v)) return 'Please enter a valid phone number.';
      return '';
    default:
      return '';
  }
}

/**
 * Free SEO/GEO Audit request form. Mirrors ContactForm's fields-plus-mailto
 * pattern (same validation, success/error states and submit-via-email
 * flow) so the two forms never drift apart, but collects the audit-specific
 * fields — target site, competitor, keywords, Skype ID — a growth
 * strategist needs to scope the audit before the call.
 *
 * Spam protection combines a hidden honeypot field (catches simple bots)
 * with the shared Google reCAPTCHA v2 checkbox (blocks scripted
 * submissions), verified again server-side in send-mail.php.
 */
export default function SeoAuditForm({ title = 'Request Your Free Audit', eyebrow = 'Free SEO Audit', className = '' }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({
    website: '', competitor: '', keywords: '', name: '', phone: '', email: '', skype: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  function handleReset() {
    setStatus('idle');
    setErrorMsg('');
    setValues({ website: '', competitor: '', keywords: '', name: '', phone: '', email: '', skype: '' });
    setFieldErrors({});
    setTouched({});
    setRecaptchaToken(null);
    recaptchaRef.current?.reset();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const honeypot = data.get('company_website')?.toString().trim();

    // Honeypot — real visitors never see or fill this field.
    if (honeypot) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }

    const nextErrors = {
      website: validateField('website', values.website),
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      phone: validateField('phone', values.phone)
    };
    setFieldErrors(nextErrors);
    setTouched({ website: true, name: true, email: true, phone: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setStatus('error');
      setErrorMsg('Please fix the highlighted fields below.');
      return;
    }

    if (RECAPTCHA_ENABLED && !recaptchaToken) {
      setStatus('error');
      setErrorMsg('Please complete the reCAPTCHA check.');
      return;
    }

    const website = values.website.trim();
    const competitor = values.competitor.trim();
    const keywords = values.keywords.trim();
    const name = values.name.trim();
    const phone = values.phone.trim();
    const email = values.email.trim();
    const skype = values.skype.trim();

    setIsSubmitting(true);
    try {
      await submitForm('seo_audit', {
        website, competitor, keywords, name, phone, email, skype, company_website: honeypot, recaptcha_token: recaptchaToken
      });
      setStatus('idle');
      setErrorMsg('');
      setValues({ website: '', competitor: '', keywords: '', name: '', phone: '', email: '', skype: '' });
      setFieldErrors({});
      setTouched({});
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
      showSuccessAlert({ text: "Your audit request has been sent. We'll be in touch shortly." });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong sending your message. Please email us directly instead.');
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className={`seo-audit-form ${className}`} onSubmit={handleSubmit} onReset={handleReset} noValidate>
      {eyebrow && <span className="eyebrow-plain">{eyebrow}</span>}
      <h3 className="title">{title}</h3>

      {status === 'error' && (
        <p className="feedback error" role="alert">
          <FiAlertCircle aria-hidden="true" /> {errorMsg}
        </p>
      )}

      {/* Honeypot field — hidden from real visitors, left blank by them. */}
      <input
        type="text"
        name="company_website"
        className="hp-field"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field">
        <input
          type="text"
          name="website"
          placeholder="Website :"
          aria-label="Your website URL"
          aria-invalid={Boolean(fieldErrors.website)}
          value={values.website}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {fieldErrors.website && <span className="field-error">{fieldErrors.website}</span>}
      </div>

      <div className="field">
        <input
          type="text"
          name="competitor"
          placeholder="Competitor :"
          aria-label="Competitor website"
          value={values.competitor}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <textarea
          name="keywords"
          rows={4}
          placeholder="Enter Keywords"
          aria-label="Target keywords"
          value={values.keywords}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        <div className="field">
          <input
            type="text"
            name="name"
            placeholder="Name"
            aria-label="Full name"
            aria-invalid={Boolean(fieldErrors.name)}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.name && <span className="field-error">{fieldErrors.name}</span>}
        </div>
        <div className="field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone :*"
            aria-label="Phone number"
            aria-required="true"
            aria-invalid={Boolean(fieldErrors.phone)}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
        </div>
      </div>

      <div className="row">
        <div className="field">
          <input
            type="email"
            name="email"
            placeholder="Email Address :"
            aria-label="Email address"
            aria-invalid={Boolean(fieldErrors.email)}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
        </div>
        <div className="field">
          <input
            type="text"
            name="skype"
            placeholder="Skype Id :"
            aria-label="Skype ID"
            value={values.skype}
            onChange={handleChange}
          />
        </div>
      </div>

      <Recaptcha ref={recaptchaRef} onChange={setRecaptchaToken} />

      <div className="actions">
        <Button type="submit" size="lg" className="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Submit'}
        </Button>
        <Button type="reset" size="lg" variant="outline" className="reset">
          Reset
        </Button>
      </div>
    </form>
  );
}