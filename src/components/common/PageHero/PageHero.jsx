import Button from '../Button';
import './PageHero.scss';

/**
 * Reusable inner-page hero: eyebrow / H1 / description / CTA on the left,
 * a supporting image on the right. Used by every new inner page so they
 * all read as part of the same site as the homepage.
 */
export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = '',
  ctaLabel = 'Get A Free Consultation',
  ctaTo = '/contact'
}) {
  return (
    <section className="section page-hero">
      <div className="container wrap">
        <div data-aos="fade-right">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="title">{title}</h1>
          {description && <p className="desc">{description}</p>}
          {ctaLabel && (
            <Button to={ctaTo} size="lg">
              {ctaLabel}
            </Button>
          )}
        </div>
        {image && (
          <img
            data-aos="fade-left"
            className="image"
            src={image}
            alt={imageAlt}
            loading="eager"
          />
        )}
      </div>
    </section>
  );
}
