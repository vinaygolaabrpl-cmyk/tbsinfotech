import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from '../Button';
import siteConfig from '../../../data/siteConfig.json';
import './SeoAuditForm.scss';

const CONTACT_EMAIL = siteConfig.email;

function makeChallenge() {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  return { a, b, answer: a + b };
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

  function resetChallenge() {
    setChallenge(makeChallenge());
  }

  function handleReset() {
    setStatus('idle');
    setErrorMsg('');
    resetChallenge();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    // Honeypot — real visitors never see or fill this field.
    if (data.get('company_website')?.toString().trim()) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
      return;
    }

    const website = data.get('website')?.toString().trim();
    const competitor = data.get('competitor')?.toString().trim();
    const keywords = data.get('keywords')?.toString().trim();
    const name = data.get('name')?.toString().trim();
    const phone = data.get('phone')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const skype = data.get('skype')?.toString().trim();
    const captchaAnswer = data.get('captcha')?.toString().trim();

    if (!name || !email || !website) {
      setStatus('error');
      setErrorMsg('Please fill in your website, name and email address.');
      return;
    }

    if (Number(captchaAnswer) !== challenge.answer) {
      setStatus('error');
      setErrorMsg('That captcha answer isn\u2019t quite right — please try again.');
      resetChallenge();
      return;
    }

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
      form.reset();
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

      <input type="url" name="website" placeholder="Website :" aria-label="Your website URL" required />
      <input type="text" name="competitor" placeholder="Competitor :" aria-label="Competitor website" />
      <textarea name="keywords" rows={4} placeholder="Enter Keywords" aria-label="Target keywords" />

      <div className="row">
        <input type="text" name="name" placeholder="Name" aria-label="Full name" required />
        <input type="tel" name="phone" placeholder="Phone :" aria-label="Phone number" />
      </div>

      <div className="row">
        <input type="email" name="email" placeholder="Email Address :" aria-label="Email address" required />
        <input type="text" name="skype" placeholder="Skype Id :" aria-label="Skype ID" />
      </div>

      <div className="captcha-row">
        <span className="captcha-question">Spam check: what is {challenge.a} + {challenge.b}?</span>
        <input
          type="text"
          name="captcha"
          inputMode="numeric"
          placeholder="Enter Captcha Code"
          aria-label={`Spam check, what is ${challenge.a} plus ${challenge.b}`}
          required
        />
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
