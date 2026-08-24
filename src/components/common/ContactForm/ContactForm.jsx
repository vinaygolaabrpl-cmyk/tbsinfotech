import { useState } from 'react';
import Button from '../Button';
import './ContactForm.scss';

export const HELP_OPTIONS = [
  'AI SEO & GEO',
  'PPC Advertising',
  'Web & App Development',
  'Branding',
  'Something Else'
];

/**
 * The single enquiry form used by both the homepage CTA and the contact page,
 * so the fields, validation and success state never drift apart.
 */
export default function ContactForm({ title = 'What Do You Need Help With?', eyebrow = 'Contact', className = '' }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className={`contact-form ${className}`} onSubmit={handleSubmit}>
      {eyebrow && <span className="eyebrow-plain">{eyebrow}</span>}
      <h3 className="title">{title}</h3>

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

      {submitted && (
        <p className="success" role="status">
          Thanks — your message has been received. We&apos;ll be in touch shortly.
        </p>
      )}
    </form>
  );
}
