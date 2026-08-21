import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import siteConfig from '../../../data/siteConfig.json';
import logo from '../../../assets/images/icons/logo.png';
import './Footer.scss';

const serviceLinks = [
  { label: 'AI SEO & GEO', to: '/services/ai-seo-geo-services' },
  { label: 'Local SEO', to: '/services/search-engine-optimization' },
  { label: 'Google & Meta Ads', to: '/services/ppc-advertising-service-india' },
  { label: 'Web Development', to: '/services/web-development' },
  { label: 'App Development', to: '/services/web-development' },
  { label: 'Brand Design', to: '/services/branding' }
];

const companyLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/seo-case-study' },
  { label: 'Packages', to: '/packages' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'ROI Calculator', to: '/contact' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/#faq' }
];

const socialIcons = [
  { Icon: FaFacebookF, href: siteConfig.socials.facebook, label: 'Facebook' },
  { Icon: FaTwitter, href: siteConfig.socials.twitter, label: 'Twitter' },
  { Icon: FaInstagram, href: siteConfig.socials.instagram, label: 'Instagram' },
  { Icon: FaLinkedinIn, href: siteConfig.socials.linkedin, label: 'LinkedIn' }
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-of-use' },
  { label: 'Sitemap', to: '/sitemap' }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid">
        <div className="about">
          <Link to="/" className="brand">
            <img src={logo} alt={`${siteConfig.name} logo`} />
          </Link>
          <p>A premium digital marketing and engineering partner for brands competing in AI search.</p>
          <span className="certified">
            <FiCheckCircle /> Google Partner Certified
          </span>
        </div>

        <FooterColumn title="Services" links={serviceLinks} />
        <FooterColumn title="Company" links={companyLinks} />

        <div className="follow">
          <h4>Follow Us</h4>
          <div className="socials">
            {socialIcons.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="social">
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="container bottomInner">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <ul className="legal">
            {legalLinks.map((l, i) => (
              <li key={l.label}>
                {i > 0 && <span className="dot" aria-hidden="true">·</span>}
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="col">
      <h4>{title}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.label}>
            {l.to.startsWith('/#') ? <a href={l.to}>{l.label}</a> : <Link to={l.to}>{l.label}</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
}
