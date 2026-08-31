import { FiCheckCircle } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import SeoAuditForm from '../../components/common/SeoAuditForm';
import siteConfig from '../../data/siteConfig.json';
import './FreeSeoAudit.scss';

const WHAT_YOU_GET = [
  'A full technical, on-page and GEO health check of your website',
  'A competitor gap analysis against the site you enter',
  'A prioritized keyword & content opportunity list',
  'A short call with a senior strategist to walk through the findings'
];

export default function FreeSeoAudit() {
  return (
    <section className="section free-seo-audit-page">
      <SEO
        title="Free SEO & GEO Audit Request | TBS Infotech"
        description="Request a free technical, on-page and AI search (GEO) audit of your website. Share your site, a competitor and your target keywords and a senior strategist will get back to you."
        keywords="free SEO audit, free GEO audit, SEO audit request, website audit, competitor analysis"
      />
      <div className="container">
        <SectionTitle
          eyebrow="Free SEO Audit"
          title="Audit Request Form"
          subtitle="Tell us about your site and we'll send back a prioritized action plan — no obligation."
        />

        <div className="wrap">
          <div className="info" data-aos="fade-right">
            <h3>What You&apos;ll Get</h3>
            <ul className="benefits">
              {WHAT_YOU_GET.map((item) => (
                <li key={item}>
                  <FiCheckCircle aria-hidden="true" /> {item}
                </li>
              ))}
            </ul>
            <a href={`tel:${siteConfig.phones[1].replace(/\s/g, '')}`}>{siteConfig.phones[1]}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p>{siteConfig.address}</p>
          </div>

          <div data-aos="fade-left">
            <SeoAuditForm eyebrow={null} />
          </div>
        </div>
      </div>
    </section>
  );
}
