import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getPackageBySlug } from '../../services/packagesApi';
import SEO from '../../components/common/SEO';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import NotFound from '../NotFound/NotFound';
import './PackageDetail.scss';

export default function PackageDetail() {
  const { slug } = useParams();
  const { data: pkg, loading } = useFetch(() => getPackageBySlug(slug), [slug]);

  if (loading) return <Loader label="Loading package…" />;
  if (!pkg) return <NotFound />;

  return (
    <section className="section package-detail-page">
      <SEO
        title={`${pkg.name} Package | TBS Infotech`}
        description={`${pkg.tagline} Starting at $${pkg.price} / ${pkg.billing} — ${pkg.features.slice(0, 3).join(', ')}.`}
        keywords={`${pkg.name} SEO package, SEO pricing, ${pkg.tagline}`}
      />
      <div className="container wrap" data-aos="fade-up">
        <span className="eyebrow">{pkg.billing}</span>
        <h1 className="title">{pkg.name}</h1>
        <p className="tagline">{pkg.tagline}</p>
        <div className="price">
          ${pkg.price} <span>/ {pkg.billing}</span>
        </div>
        <ul className="features">
          {pkg.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <Button to="/contact" size="lg">Get Started</Button>
      </div>
    </section>
  );
}
