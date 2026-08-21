import Button from '../Button';
import './TierCards.scss';

/**
 * Simple tiered pricing cards (name, price, feature checklist, CTA) used
 * by pages like PPC Packages. `tiers` is
 * [{ name, price, billing, features: [{ label, included }] }].
 */
export default function TierCards({ tiers, ctaLabel = 'Contact Us', ctaTo = '/contact' }) {
  return (
    <div className="tier-cards">
      {tiers.map((tier, i) => (
        <div
          key={tier.name}
          className={`tier ${tier.popular ? 'popular' : ''}`}
          data-aos="fade-up"
          data-aos-delay={i * 80}
        >
          {tier.popular && <span className="badge">Most Popular</span>}
          <span className="tierName">{tier.name}</span>
          <div className="tierPrice">
            {tier.price}
            {tier.billing && <span className="billing"> / {tier.billing}</span>}
          </div>
          <ul className="tierFeatures">
            {tier.features.map((f) => (
              <li key={f.label} className={f.included ? 'yes' : 'no'}>
                <span className="mark" aria-hidden="true">{f.included ? '✓' : '✕'}</span>
                {f.label}
              </li>
            ))}
          </ul>
          <Button to={ctaTo} variant="outline" className="tierCta">{ctaLabel}</Button>
        </div>
      ))}
    </div>
  );
}
