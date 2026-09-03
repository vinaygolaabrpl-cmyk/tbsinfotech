import { Link } from 'react-router-dom';
import { useCurrency } from '../../../hooks/useCurrency';
import { formatPriceParts } from '../../../config/pricing';
import './PackageCard.scss';

export default function PackageCard({ pkg, index = 0 }) {
  const { currency } = useCurrency();
  const rawPrice = currency === 'INR' ? pkg.priceInr : pkg.price;
  const { symbol, amount } = formatPriceParts(rawPrice, currency);

  return (
    <article
      className={`package-card ${pkg.highlighted ? 'highlighted' : ''}`}
      data-aos="fade-up"
      data-aos-delay={index * 80}
    >
      {pkg.badge && <span className="badge">{pkg.badge}</span>}

      <h3 className="name">{pkg.name}</h3>
      <p className="tagline">{pkg.tagline}</p>

      <div className="price">
        <span className="currency">{symbol}</span>
        {amount}
        <span className="billing">/ {pkg.billing}</span>
      </div>

      <ul className="features">
        {pkg.features.map((f) => (
          <li key={f}>
            <CheckIcon /> {f}
          </li>
        ))}
      </ul>

      <Link to={`/packages/${pkg.slug}`} className="cta">
        {pkg.slug === 'gold' ? 'Custom Enterprise Quote' : 'Choose Package'}
      </Link>

      {/* Package-specific, manually configured link — read straight from
          this package's own data, never generated or shared across
          packages. Omitted/empty on a package (e.g. Gold's custom-quote
          flow) simply means no button renders. */}
      {pkg.paypalLink && (
        <a href={pkg.paypalLink} target="_blank" rel="noopener noreferrer" className="cta paypalCta">
          Pay With PayPal
        </a>
      )}
    </article>
  );
}

function CheckIcon() {
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  );
}
