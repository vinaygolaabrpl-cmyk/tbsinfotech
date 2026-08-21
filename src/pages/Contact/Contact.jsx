import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import ContactForm from '../../components/common/ContactForm';
import siteConfig from '../../data/siteConfig.json';
import './Contact.scss';

export default function Contact() {
  return (
    <section className="section contact-page">
      <SEO
        title="Contact Us | Get A Free SEO & GEO Audit — TBS Infotech"
        description="Book a 30-minute call with a senior growth strategist or request a free SEO & GEO audit. Call, email or fill out our contact form to get started."
        keywords="contact TBS Infotech, free SEO audit, digital marketing consultation, Noida SEO agency contact"
      />
      <div className="container">
        <SectionTitle eyebrow="Contact" title="Ready To Scale Your Digital Revenue?" subtitle="Book a 30-minute call with a senior growth strategist." />

        <div className="wrap">
          <div className="info" data-aos="fade-right">
            <h3>Get In Touch</h3>
            {siteConfig.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>{p}</a>
            ))}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <p>{siteConfig.address}</p>
          </div>

          <div data-aos="fade-left">
            <ContactForm eyebrow={null} />
          </div>
        </div>
      </div>
    </section>
  );
}
