import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import siteConfig from '../../data/siteConfig.json';

export default function TermsOfUse() {
  return (
    <div className="legal-page">
      <SEO
        title="Terms of Service | TBS Infotech"
        description="The terms and conditions governing your use of the TBS Infotech website and services."
      />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`These Terms of Service govern your access to and use of ${siteConfig.name}'s website and the digital marketing, web development and paid media services we deliver.`}
        ctaLabel=""
      />
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p>
            By engaging {siteConfig.name} for any service, you agree to the scope, deliverables, and timelines
            outlined in your signed proposal or statement of work. Service packages, pricing and features described
            on this website are subject to change and are confirmed in writing before any engagement begins.
          </p>
          <p>
            You retain full ownership of your website source code, domain, media assets and advertising accounts
            upon project completion or as specified in your agreement. {siteConfig.name} retains ownership of
            internal processes, templates and methodologies used to deliver the work.
          </p>
          <p>
            For questions about these terms, contact us at{' '}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
