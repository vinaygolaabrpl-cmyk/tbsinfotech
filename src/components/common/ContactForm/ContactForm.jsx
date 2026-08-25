import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from '../Button';
import siteConfig from '../../../data/siteConfig.json';
import './ContactForm.scss';

export const HELP_OPTIONS = [
  'AI SEO & GEO',
  'PPC Advertising',
  'Web & App Development',
  'Branding',
  'Something Else'
];

const CONTACT_EMAIL = siteConfig.email;

/**
 * The single enquiry form used by both the homepage CTA and the contact page,
 * so the fields, validation and success state never drift apart. On submit
 * it validates required fields, then opens the visitor's email app with a
 * pre-filled `mailto:` message addressed to the team.
 */
export default function ContactForm({ title = 'What Do You Need Help With?', eyebrow = 'Contact', className = '' }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const phone = data.get('phone')?.toString().trim();
    const service = data.get('service')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!name || !email) {
      setStatus('error');
      setErrorMsg('Please fill in your name and email address.');
      return;
    }

    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone && `Phone: ${phone}`,
      service && `Service Needed: ${service}`,
      '',
      message ? `Message:\n${message}` : ''
    ].filter(Boolean);

    const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      `Website Enquiry From ${name}`
    )}&body=${encodeURIComponent(lines.join('\n'))}`;

    try {
      window.location.href = mailtoLink;
      setStatus('success');
      setErrorMsg('');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong opening your email app. Please email us directly instead.');
    }
  }

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit} noValidate>
      {eyebrow && <span className="eyebrow-plain">{eyebrow}</span>}
      <h3 className="title">{title}</h3>

      {status === 'error' && (
        <p className="feedback error" role="alert">
          <FiAlertCircle aria-hidden="true" /> {errorMsg}
        </p>
      )}

      <div className="row">
        <input type="text" name="name" placeholder="Full Name" aria-label="Full name" required />
        <input type="email" name="email" placeholder="Email Address" aria-label="Email address" required />
      </div>

      <div className="row">
        <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone number" />
        <select name="service" defaultValue="" aria-label="Service you need help with">
          <option value="" disabled>Select A Service</option>
          {HELP_OPTIONS.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <textarea name="message" rows={4} placeholder="Tell Us About Your Project" aria-label="Project details" />

      <Button type="submit" size="lg" className="submit">
        Submit <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></span>
      </Button>

      {status === 'success' && (
        <p className="success" role="status">
          <FiCheckCircle aria-hidden="true" /> Your email app should now be open with your
          message pre-filled — hit send to reach us. Didn&apos;t open?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>Email us directly</a>.
        </p>
      )}
    </form>
  );
}
