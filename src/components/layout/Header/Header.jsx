import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import ThemeToggle from '../../common/ThemeToggle';
import Button from '../../common/Button';
import siteConfig from '../../../data/siteConfig.json';
import logo1 from '../../../assets/images/icons/logo.png';
import './Header.scss';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container inner">
        <Link to="/" className="brand">
          <img src={logo1} alt={`${siteConfig.name} logo`} />
        </Link>

        <Navbar />

        <div className="actions">
          <ThemeToggle />
          <a href={`tel:${siteConfig.phones[1].replace(/\s/g, '')}`} className="phone btn outline sm">
            {siteConfig.phones[1]}
          </a>
          <Button to="/contact" size="sm">Free SEO & GEO Audit</Button>
        </div>
      </div>
    </header>
  );
}
