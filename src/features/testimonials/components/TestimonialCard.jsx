import './TestimonialCard.scss';

export default function TestimonialCard({ testimonial, index = 0 }) {
  const initial = testimonial.name.trim().charAt(0).toUpperCase();

  return (
    <article className="testimonial-card" data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
      <QuoteIcon />

      <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {'★'.repeat(testimonial.rating)}
      </div>

      <p className="quote">{testimonial.quote}</p>

      <div className="person">
        <span className="avatar" aria-hidden="true">{initial}</span>
        <div className="who">
          <strong>{testimonial.name}</strong>
          <span className="company">{testimonial.company || 'Verified Google Review'}</span>
        </div>
      </div>
    </article>
  );
}

function QuoteIcon() {
  return (
    <svg className="quoteMark" width="34" height="26" viewBox="0 0 34 26" fill="currentColor" aria-hidden="true">
      <path d="M0 26V14.3C0 6.4 4.4 1.6 13.2 0v5.2c-4.2 1-6.2 3.2-6.1 6.6H13V26H0zm21 0V14.3C21 6.4 25.4 1.6 34 0v5.2c-4.2 1-6.2 3.2-6.1 6.6H34V26H21z" />
    </svg>
  );
}
