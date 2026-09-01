import { FiCode, FiLayers, FiShoppingCart } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';
import webDevBanner from '@/assets/images/services/ourwork_1_banner_img.jpg.jpeg';

const TECH_STACK_BRANCHES = [
  { icon: <FiLayers />, title: 'Enterprise CMS & PHP', items: ['WordPress (Custom)', 'Custom PHP / Laravel'] },
  { icon: <FiCode />, title: 'Modern Frontend UI', items: ['React.js', 'Next.js (SSR)'] },
  { icon: <FiShoppingCart />, title: 'Headless & E-Com', items: ['Shopify & Shopify Plus', 'Wix & Squarespace'] }
];

const WORDPRESS_FEATURES = [
  { title: 'Custom Codebases', desc: 'Clean, secure PHP frameworks engineered without slow, bloated page-builder plugins.' },
  { title: 'Database Optimization', desc: 'Efficient database querying delivering page load speeds under 1.5 seconds worldwide.' },
  { title: 'API Integrations', desc: 'Smooth connections linking your website to corporate CRM, ERP, and payment gateway pipelines.' }
];

const REACT_FEATURES = [
  { title: 'High Performance', desc: 'Server-Side Rendering (SSR) for near-instant execution and strong SEO crawlability.' },
  { title: 'Dynamic Interfaces', desc: 'Modular components tailored for SaaS platforms, client portals, and web applications.' }
];

const ECOM_FEATURES = [
  { title: 'Checkout Optimization', desc: 'Streamlined buyer journeys engineered to minimize cart drop-off.' },
  { title: 'Schema Standards', desc: 'Dynamic product schemas built to maximize visibility on Google Shopping networks.' }
];

const PLATFORM_TABLE = {
  headers: ['Technology Stack', 'Best Suited For', 'Speed & Performance', 'Customization Depth', 'Deployment Speed'],
  rows: [
    { label: 'WordPress', values: ['Content Sites & B2B Lead Gen', 'High (Tuned)', 'High (Hooks/APIs)', 'Rapid'] },
    { label: 'React.js / Next.js', values: ['SaaS Platforms & Web Apps', 'Near-Instant', 'Unlimited', 'Phased / Modular'] },
    { label: 'Shopify / Shopify Plus', values: ['Direct-to-Consumer E-Com', 'High (Standardized)', 'Moderate to High', 'Rapid'] },
    { label: 'Custom PHP Frameworks', values: ['Specialized Enterprise Portals', 'High (Tuned)', 'Unlimited', 'Phased'] },
    { label: 'Wix / Squarespace', values: ['Rapid SMB Web Presence', 'Standard', 'Standard', 'Immediate'] }
  ]
};

const FAQS = [
  {
    id: 'wd-1',
    question: 'How do you prevent organic keyword drops during a website redesign?',
    answer: 'We perform full URL mapping, establish zero-downtime 301 redirect paths, transfer all metadata accurately, and verify post-launch indexation via Google Search Console.'
  },
  {
    id: 'wd-2',
    question: 'Are all website builds fully responsive on mobile devices?',
    answer: 'Yes. Every build uses mobile-first design practices, passing strict Google Core Web Vitals and mobile usability diagnostics.'
  },
  {
    id: 'wd-3',
    question: 'Do we retain complete ownership of our code, domain, and media assets?',
    answer: 'Yes. Think Biz Solution transfers full administrative rights, source code ownership, and account credentials to your organization upon project completion.'
  }
];

export default function WebDevelopment() {
  return (
    <div className="web-development-page">
      <SEO
        title="Website Designing & Development | WordPress, React, Shopify — TBS Infotech"
        description="Think Biz Solution designs and builds enterprise-grade websites across WordPress, React, Shopify, Wix, Squarespace and custom PHP environments, built for rapid load speeds and AI crawlability."
        keywords="website development, WordPress development, React.js development, Shopify development, custom PHP development"
      />

      <PageHero
        eyebrow="Services / Website Designing & Development"
        title="Performant Custom Web Architecture: Built for Scale & Conversions"
        description="Think Biz Solution Private Limited designs and builds enterprise-grade websites across WordPress, React, Shopify, Wix, Squarespace, and custom PHP environments. Built for rapid load speeds, strict security standards, and seamless conversational AI crawlability, our web solutions transform online visits into validated sales opportunities."
        image={webDevBanner}
        imageAlt="Custom web architecture across WordPress, React and Shopify"
      />

      <BlufCallout>
        Enterprise-grade websites across WordPress, React, Shopify, Wix, Squarespace, and custom PHP environments —
        built for rapid load speeds, strict security standards, and seamless conversational AI crawlability.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Tech Stack" title="Which Tech Stacks Fit Your Organization?" />
          <SystemDiagram hub="Tech Stack Selection" branches={TECH_STACK_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Enterprise CMS" title="Enterprise CMS: WordPress & Custom PHP" align="left" />
          <NumberedFeatureGrid items={WORDPRESS_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="React.js" title="Single Page Applications & Web Apps: React.js" align="left" />
          <NumberedFeatureGrid items={REACT_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="E-Commerce" title="Global E-Commerce: Shopify, Wix, & Squarespace" align="left" />
          <NumberedFeatureGrid items={ECOM_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Comparison" title="Platform Feature Comparison" />
          <DataTable headers={PLATFORM_TABLE.headers} rows={PLATFORM_TABLE.rows} />
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
          <FaqAccordion faqs={FAQS} />
        </div>
      </section>
    </div>
  );
}
