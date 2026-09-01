import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from '../Button';
import siteConfig from '../../../data/siteConfig.json';
import './SeoAuditForm.scss';

const CONTACT_EMAIL = siteConfig.email;

const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;
const URL_REGEX = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i;

function makeChallenge() {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  return { a, b, answer: a + b };
}

function validateField(name, value, challenge) {
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
      if (v && !PHONE_REGEX.test(v)) return 'Please enter a valid phone number.';
      return '';
    case 'captcha':
      if (!v) return 'Please answer the spam check.';
      if (Number(v) !== challenge.answer) return 'That answer isn\u2019t quite right.';
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
 * Spam protection is dependency-free by design (no reCAPTCHA key is
 * configured for this project): a hidden honeypot field catches simple
 * bots, and a lightweight arithmetic challenge blocks scripted submissions
 * without adding a third-party library.
 */
export default function SeoAuditForm({ title = 'Request Your Free Audit', eyebrow = 'Free SEO Audit', className = '' }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [challenge, setChallenge] = useState(makeChallenge);
  const [values, setValues] = useState({
    website: '', competitor: '', keywords: '', name: '', phone: '', email: '', skype: '', captcha: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  function resetChallenge() {
    setChallenge(makeChallenge());
  }

  function handleReset() {
    setStatus('idle');
    setErrorMsg('');
    setValues({ website: '', competitor: '', keywords: '', name: '', phone: '', email: '', skype: '', captcha: '' });
    setFieldErrors({});
    setTouched({});
    resetChallenge();
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value, challenge) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value, challenge) }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — real visitors never see or fill this field.
    if (data.get('company_website')?.toString().trim()) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }

    const nextErrors = {
      website: validateField('website', values.website, challenge),
      name: validateField('name', values.name, challenge),
      email: validateField('email', values.email, challenge),
      phone: validateField('phone', values.phone, challenge),
      captcha: validateField('captcha', values.captcha, challenge)
    };
    setFieldErrors(nextErrors);
    setTouched({ website: true, name: true, email: true, phone: true, captcha: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setStatus('error');
      setErrorMsg('Please fix the highlighted fields below.');
      if (nextErrors.captcha) resetChallenge();
      return;
    }

    const website = values.website.trim();
    const competitor = values.competitor.trim();
    const keywords = values.keywords.trim();
    const name = values.name.trim();
    const phone = values.phone.trim();
    const email = values.email.trim();
    const skype = values.skype.trim();

    const lines = [
      `Website: ${website}`,
      competitor && `Competitor: ${competitor}`,
      keywords && `Keywords:\n${keywords}`,
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      skype && `Skype ID: ${skype}`
    ].filter(Boolean);

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Free SEO Audit Request From ${name}`
    )}&body=${encodeURIComponent(lines.join('\n'))}`;

    try {
      window.location.href = mailtoLink;
      setStatus('success');
      setErrorMsg('');
      setValues({ website: '', competitor: '', keywords: '', name: '', phone: '', email: '', skype: '', captcha: '' });
      setFieldErrors({});
      setTouched({});
      resetChallenge();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong opening your email app. Please email us directly instead.');
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
            placeholder="Phone :"
            aria-label="Phone number"
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

      <div className="captcha-row">
        <span className="captcha-question">Spam check: what is {challenge.a} + {challenge.b}?</span>
        <div className="field">
          <input
            type="text"
            name="captcha"
            inputMode="numeric"
            placeholder="Enter Captcha Code"
            aria-label={`Spam check, what is ${challenge.a} plus ${challenge.b}`}
            aria-invalid={Boolean(fieldErrors.captcha)}
            value={values.captcha}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.captcha && <span className="field-error">{fieldErrors.captcha}</span>}
        </div>
      </div>

      <div className="actions">
        <Button type="submit" size="lg" className="submit">
          Submit
        </Button>
        <Button type="reset" size="lg" variant="outline" className="reset">
          Reset
        </Button>
      </div>

      {status === 'success' && (
        <p className="success" role="status">
          <FiCheckCircle aria-hidden="true" /> Your email app should now be open with your
          audit request pre-filled — hit send to reach us. Didn&apos;t open?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>Email us directly</a>.
        </p>
      )}
    </form>
  );
}
