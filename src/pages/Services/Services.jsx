import { FiSearch, FiCode, FiTarget } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import Loader from '../../components/common/Loader';
import { useServices } from '../../features/services';
import ServiceCard from '../../features/services/components/ServiceCard';
import servicesBanner from '@/assets/images/services/service_banner_img.jpg.jpeg';

const ECOSYSTEM_BRANCHES = [
  {
    icon: <FiSearch />,
    title: 'Search & GEO Layer',
    items: ['Traditional SEO', 'Generative Engine Optimization', 'Technical Schemas', 'E-E-A-T Authority']
  },
  {
    icon: <FiCode />,
    title: 'Web & App Engineering',
    items: ['WordPress & PHP', 'React.js Applications', 'Shopify E-Commerce', 'iOS & Android Mobile']
  },
  {
    icon: <FiTarget />,
    title: 'Paid Media & SMO Layer',
    items: ['Google Ads (PMax)', 'Meta (FB/IG) Funnels', 'Brand Social (SMO)', 'Conversion Tracking']
  }
];

const CORE_CAPABILITIES = [
  {
    icon: <FiSearch />,
    title: 'Integrated SEO & GEO Infrastructure',
    desc: 'Dual-layer optimization securing top rankings on traditional Google SERPs while driving citations inside AI engines like ChatGPT, Gemini, and Perplexity.'
  },
  {
    icon: <FiCode />,
    title: 'Performant Web & Mobile App Development',
    desc: 'Enterprise website builds across WordPress, React, Shopify, Wix, Squarespace, and custom PHP platforms, complemented by native and cross-platform mobile apps.'
  },
  {
    icon: <FiTarget />,
    title: 'Performance Advertising & Social Optimization (SMO)',
    desc: 'Low-CAC, high-ROAS campaign management across Google Ads and Meta platforms paired with organic brand authority building.'
  }
];

export default function Services() {
  const { data: services, loading } = useServices();

  return (
    <div className="services-overview-page">
      <SEO
        title="Unified Digital Engineering: SEO, GEO, Web Development & Paid Media | TBS Infotech"
        description="Think Biz Solution is a full-service digital agency engineering high-converting web architectures, data-driven paid advertising funnels, and integrated SEO + GEO strategies."
        keywords="digital marketing services, AI SEO services, PPC services, web development services, GEO services"
      />

      <PageHero
        eyebrow="Services / Unified Digital Engineering"
        title="Unified Digital Engineering: SEO, GEO, Web Development & Paid Media"
        description="Think Biz Solution Private Limited is a full-service digital agency engineering high-converting web architectures, data-driven paid advertising funnels, and integrated Search Engine Optimization (SEO) + Generative Engine Optimization (GEO) strategies."
        image={servicesBanner}
        imageAlt="Think Biz digital engineering analytics dashboard"
      />

      <BlufCallout>
        Designed for growth-focused enterprises across the USA, Canada, UK, Europe, Middle East, Asia, and
        Australia, we turn complex digital channels into predictable revenue assets.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Our Ecosystem"
            title="What Digital Services Do We Engineer?"
            subtitle="Think Biz combines search visibility, digital engineering and paid acquisition into one connected ecosystem, so every channel reinforces the others instead of operating in isolation."
          />
          <SystemDiagram hub="Think Biz Integrated Digital Ecosystem" branches={ECOSYSTEM_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Capabilities" title="How Do Our Core Capabilities Drive Digital Growth?" />
          <NumberedFeatureGrid items={CORE_CAPABILITIES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Explore"
            title="Every Service, One Growth Stack"
            subtitle="Browse the full lineup — each service links through to a dedicated page with packages, FAQs and proof."
          />
          {loading ? (
            <Loader label="Loading services…" />
          ) : (
            <div className="grid-auto">
              {services?.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
