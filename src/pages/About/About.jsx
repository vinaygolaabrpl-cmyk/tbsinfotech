import { FiGlobe } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import Card from '../../components/common/Card';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';
import siteConfig from '../../data/siteConfig.json';
import './About.scss';

const WHY_US = [
  { title: 'Exceptional Digital Presence', desc: 'We believe your online presence should stand out and drive real impact.' },
  { title: '10 Years of Proven Expertise', desc: 'A decade of delivering excellence across diverse industries with deep technical know-how.' },
  { title: '85+ Skilled Professionals', desc: 'Our dedicated team brings passion and precision to every project we undertake.' },
  { title: '1000+ Successful Projects', desc: 'We have transformed business objectives into measurable success stories worldwide.' },
  { title: 'Transparent & Data-Driven Strategies', desc: 'Clear performance insights aligned with the latest industry trends and search engine updates.' },
  { title: 'Customized Campaigns for Maximum ROI', desc: 'From Enterprise SEO to Local & Video SEO, campaigns designed for superior returns.' }
];

const FOOTPRINT_REGIONS = [
  { icon: <FiGlobe />, title: 'USA' },
  { icon: <FiGlobe />, title: 'Canada' },
  { icon: <FiGlobe />, title: 'UK' },
  { icon: <FiGlobe />, title: 'Europe' },
  { icon: <FiGlobe />, title: 'Middle East' },
  { icon: <FiGlobe />, title: 'Asia & Australia' }
];

const PARTNER_REASONS = [
  {
    title: 'Enterprise Technical Standards',
    desc: 'We do not use generic site templates or outdated marketing checklists. Our development projects feature clean custom code, and our search strategies integrate cutting-edge GEO tactics designed specifically for generative AI engines.'
  },
  {
    title: 'Unified Performance Services',
    desc: 'Our internal teams unite web developers, paid ads managers, and technical search strategists to execute seamless digital growth campaigns across every channel.'
  },
  {
    title: 'Global Market Expertise',
    desc: 'Managing campaigns across the USA, Canada, UK, Europe, Middle East, Asia, and Australia, we adapt our growth strategies to match local market intent and regional privacy standards.'
  }
];

const CAPABILITY_TABLE = {
  headers: ['Core Capability', 'Technical Scope & Deliverables', 'Primary Business Impact'],
  rows: [
    { label: 'Search & AI Optimization', values: ['Dual SEO + GEO Framework, Custom Nested Schema', 'Dominates SERPs & Captures AI Citations'] },
    { label: 'Web & App Engineering', values: ['WordPress, React, Shopify, PHP, Mobile Apps', 'Drives Sub-1.5s Load Times & Conversions'] },
    { label: 'Paid Media Acquisition', values: ['Google Search, PMax, Meta Ads, GA4 Tracking', 'Delivers Predictable Sales with Low CAC'] },
    { label: 'Off-Page Authority (SMO)', values: ['Profile Standardization, Citation Building, Quora', 'Strengthens Domain Trust & Brand Reach'] }
  ]
};

const FAQS = [
  {
    id: 'ab-1',
    question: 'Which international markets does Think Biz Solution Private Limited serve?',
    answer: 'We partner with companies across the USA, Canada, United Kingdom, Europe, Middle East, Asia, and Australia.'
  },
  {
    id: 'ab-2',
    question: 'How does your team manage ongoing communication across different time zones?',
    answer: 'We provide dedicated account teams, scheduled update syncs, and direct access via email, chat, and WhatsApp to ensure clear, ongoing communication regardless of location.'
  }
];

export default function About() {
  return (
    <div className="about-page">
      <SEO
        title="About Think Biz Solution Private Limited | Global Digital Agency — TBS Infotech"
        description="Meet TBS Infotech — 85+ in-house specialists and 18+ years of experience delivering AI SEO, GEO, PPC, web development and branding for enterprise clients across the USA, Canada, UK, Europe, APAC, Australia and the Middle East."
        keywords="about TBS Infotech, digital marketing agency team, SEO agency Noida, AI SEO experts, global digital agency"
      />

      <PageHero
        eyebrow="Corporate Profile / About Us"
        title="About Think Biz Solution Private Limited: Global Digital Agency"
        description="Think Biz Solution Private Limited is a full-service digital agency delivering enterprise web architecture, custom software development, Search Engine Optimization (SEO), Generative Engine Optimization (GEO), and paid acquisition ads. Serving enterprise clients across North America, Europe, APAC, Australia, and the Middle East, we combine technical precision with performance marketing to drive scalable business revenue."
        image="https://placehold.co/700x460/0b1220/22d3ee?text=Global+Digital+Agency"
        imageAlt="Think Biz Solution global digital agency team"
      />

      <BlufCallout>
        Serving enterprise clients across North America, Europe, APAC, Australia, and the Middle East, we combine
        technical precision with performance marketing to drive scalable business revenue.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Global Reach" title="International Operational Footprint" />
          <SystemDiagram hub="Global Service Footprint" branches={FOOTPRINT_REGIONS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Why Partner With Us" title="Why Organizations Partner With Think Biz Solution" align="left" />
          <div className="grid-auto">
            {PARTNER_REASONS.map((r, i) => (
              <Card key={r.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Capabilities" title="Executive Capabilities Overview" />
          <DataTable headers={CAPABILITY_TABLE.headers} rows={CAPABILITY_TABLE.rows} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="lead" data-aos="fade-up">
            With over a decade of expertise, a passionate team of specialists, and {siteConfig.stats.projects} successful projects
            worldwide, we empower businesses with cutting-edge solutions in SEO, social media, branding, web development, and beyond.
            Our commitment is simple: to transform your vision into measurable growth.
          </p>
          <div className="mb-2"></div>
          <SectionTitle eyebrow="Why Us" title="Why Choose TBS Infotech" align="center" />
          <div className="grid-auto grid">
            {WHY_US.map((item, i) => (
              <Card key={item.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Card>
            ))}
          </div>
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
