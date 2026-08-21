import { Link } from 'react-router-dom';
import './PackageCard.scss';

export default function PackageCard({ pkg, index = 0 }) {
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
        <span className="currency">$</span>
        {pkg.price}
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
    </article>
  );
}

function CheckIcon() {
  return (
    
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  );
}
