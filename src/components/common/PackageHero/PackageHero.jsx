import { Link } from 'react-router-dom';
import Button from '../Button';
import './PackageHero.scss';

/**
 * Dark banner header used on every package page: breadcrumb, title and a
 * "Request A Quote" CTA over a background image — matches the reference
 * screenshots for the Packages section.
 */
export default function PackageHero({ title, breadcrumbLabel, image }) {
  return (
    <section
      className="package-hero"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className="container inner">
        <div>
          <h1>{title}</h1>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <span>{breadcrumbLabel || title}</span>
          </nav>
        </div>
        <Button to="/contact" variant="outline" className="quoteBtn">Request A Quote</Button>
      </div>
    </section>
  );
}
