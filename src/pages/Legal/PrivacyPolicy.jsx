import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import siteConfig from '../../data/siteConfig.json';

export default function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy | TBS Infotech"
        description="How TBS Infotech collects, uses and protects information submitted through this website."
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`This Privacy Policy explains how ${siteConfig.name} collects, uses and safeguards information you share with us through this website, our forms, and our communications.`}
        ctaLabel=""
      />
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p>
            We collect the information you provide directly to us — such as your name, email address, phone number
            and project details — when you submit a contact form, request a quote, or otherwise reach out to{' '}
            {siteConfig.name}. We use this information solely to respond to your enquiry, deliver the services you
            request, and share relevant updates about your project.
          </p>
          <p>
            We do not sell your personal information to third parties. We may share information with trusted
            service providers who help us operate this website and deliver our services, under confidentiality
            obligations consistent with this policy.
          </p>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by
            contacting us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
