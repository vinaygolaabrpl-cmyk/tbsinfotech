import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import navLinks from '../../data/navLinks.json';
import './Sitemap.scss';

export default function Sitemap() {
  return (
    <div className="sitemap-page">
      <SEO
        title="Sitemap | TBS Infotech"
        description="Browse every page on the TBS Infotech website — services, packages, portfolio, case studies and more."
      />
      <PageHero eyebrow="Navigate" title="Sitemap" description="Every page on this website, organized by section." ctaLabel="" />

      <section className="section">
        <div className="container">
          <div className="grid-auto">
            {navLinks.map((section) => (
              <div className="sitemapCol" key={section.label}>
                <h3><Link to={section.path}>{section.label}</Link></h3>
                {section.children && (
                  <ul>
                    {section.children.map((child) => (
                      <li key={child.path}><Link to={child.path}>{child.label}</Link></li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="sitemapCol">
              <h3><Link to="/">Home</Link></h3>
              <ul>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/career">Careers</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-of-use">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
