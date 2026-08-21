import { Link } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import Loader from '../../components/common/Loader';
import Card from '../../components/common/Card';
import { usePackages } from '../../features/packages';
import PackageCard from '../../features/packages/components/PackageCard';
import PackageComparisonTable from '../../components/common/PackageTable';
import navLinks from '../../data/navLinks.json';

const PACKAGE_CATEGORIES = navLinks.find((l) => l.label === 'Packages')?.children ?? [];

export default function Packages() {
  const { data: packages, loading } = usePackages();

  if (loading) return <Loader label="Loading packages…" />;

  const monthly = packages.filter((p) => p.billing === 'Per Month');
  const oneTime = packages.filter((p) => p.billing === 'One Time');

  return (
    <>
      <SEO
        title="SEO & GEO Pricing Packages | TBS Infotech"
        description="Transparent monthly SEO & GEO packages from $300 — Bronze, Silver and Gold plans with no lock-in contracts, plus a one-time technical SEO setup."
        keywords="SEO pricing packages, GEO pricing, SEO package cost, monthly SEO plans"
      />
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Packages"
            title="Transparent Pricing, No Lock-In Surprises"
            subtitle="Monthly subscription plans built around your search visibility goals."
          />
          <div className="grid-auto">
            {monthly.map((pkg, i) => <PackageCard key={pkg.slug} pkg={pkg} index={i} />)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Compare" title="Compare What's Included" />
          <PackageComparisonTable packages={monthly} />
        </div>
      </section>

      {oneTime.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle eyebrow="One Time" title="One Time SEO Package" />
            <div className="grid-auto">
              {oneTime.map((pkg, i) => <PackageCard key={pkg.slug} pkg={pkg} index={i} />)}
            </div>
          </div>
        </section>
      )}

      {PACKAGE_CATEGORIES.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Every Category"
              title="Browse All Package Categories"
              subtitle="Detailed pricing for every service line — SEO, AEO, local, social, paid media, design, content, reputation and link cleanup."
            />
            <div className="grid-auto">
              {PACKAGE_CATEGORIES.map((cat, i) => (
                <Card key={cat.path} data-aos="fade-up" data-aos-delay={i * 50}>
                  <h3><Link to={cat.path}>{cat.label}</Link></h3>
                  <Link to={cat.path} className="link">View Pricing ↗</Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
