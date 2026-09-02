import { useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Button from '../Button';
import { submitForm } from '../../../services/mailApi';
import { showSuccessAlert } from '../../../utils/swalAlerts';
import './ContactForm.scss';

export const HELP_OPTIONS = [
  'AI SEO & GEO',
  'PPC Advertising',
  'Web & App Development',
  'Branding',
  'Something Else'
];

const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;

function validateField(name, value) {
  const v = value.trim();
  switch (name) {
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
    case 'message':
      if (v && v.length < 10) return 'Message should be at least 10 characters.';
      return '';
    default:
      return '';
  }
}

/**
 * The single enquiry form used by both the homepage CTA and the contact page,
 * so the fields, validation and success state never drift apart. Validation
 * is fully custom (no native browser popups) with per-field inline errors.
 * On submit it opens the visitor's email app with a pre-filled `mailto:`
 * message addressed to the team.
 */
export default function ContactForm({ title = 'What Do You Need Help With?', eyebrow = 'Contact', className = '' }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [values, setValues] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

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

    const nextErrors = {
      name: validateField('name', values.name),
      email: validateField('email', values.email),
      phone: validateField('phone', values.phone),
      message: validateField('message', values.message)
    };
    setFieldErrors(nextErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setStatus('error');
      setErrorMsg('Please fix the highlighted fields below.');
      return;
    }

    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();
    const service = values.service.trim();
    const message = values.message.trim();

    setIsSubmitting(true);
    try {
      await submitForm('contact', { name, email, phone, service, message });
      setStatus('idle');
      setErrorMsg('');
      setValues({ name: '', email: '', phone: '', service: '', message: '' });
      setFieldErrors({});
      setTouched({});
      showSuccessAlert({ text: "Your message has been sent. We'll get back to you shortly." });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong sending your message. Please email us directly instead.');
    } finally {
      setIsSubmitting(false);
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
        <div className="field">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
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
            type="email"
            name="email"
            placeholder="Email Address"
            aria-label="Email address"
            aria-invalid={Boolean(fieldErrors.email)}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
        </div>
      </div>

      <div className="row">
        <div className="field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            aria-label="Phone number"
            aria-invalid={Boolean(fieldErrors.phone)}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
        </div>
        <div className="field">
          <select
            name="service"
            value={values.service}
            onChange={handleChange}
            aria-label="Service you need help with"
          >
            <option value="" disabled>Select A Service</option>
            {HELP_OPTIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell Us About Your Project"
          aria-label="Project details"
          aria-invalid={Boolean(fieldErrors.message)}
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {fieldErrors.message && <span className="field-error">{fieldErrors.message}</span>}
      </div>

      <Button type="submit" size="lg" className="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'Submit'} <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></span>
      </Button>
    </form>
  );
}
