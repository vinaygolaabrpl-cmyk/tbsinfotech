import { FiSearch, FiCpu } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';
import { useCurrency } from '../../hooks/useCurrency';
import { getPrice, formatPrice } from '../../config/pricing';
import seoGeoBanner from '../../assets/images/services/service_3_banner_img.jpg.jpeg';

const VISIBILITY_BRANCHES = [
  { icon: <FiSearch />, title: 'Traditional SEO Layer', items: ['Crawlability & Indexing', 'E-E-A-T Articles', 'Technical Schemas', 'High-Intent Keywords'] },
  { icon: <FiCpu />, title: 'GEO & AI Engine Layer', items: ['Direct-Answer Formatting', 'AI Benchmark & Share', 'Vector & Semantic Mapping', 'LLM Citation & Outlets'] }
];

const PACKAGE_TABLE_HEADER_PRICES = [
  { label: 'Bronze Package', priceKey: 'seoGeoServices.bronze' },
  { label: 'Silver Package', priceKey: 'seoGeoServices.silver' },
  { label: 'Gold Package', priceKey: 'seoGeoServices.gold' }
];

const PACKAGE_TABLE = {
  headers: ['Feature / Deliverable', 'Bronze Package', 'Silver Package', 'Gold Package'],
  rows: [
    { label: 'Technical, SEO & GEO Web Audit', values: ['Yes', 'Yes', 'Yes'] },
    { label: 'Initial Backlink & Toxicity Review', values: ['Yes', 'Yes', 'Yes'] },
    { label: 'AI Competitor Benchmark Analysis', values: ['Standard', 'Standard', 'Advanced Deep-Dive'] },
    { label: 'Targeted Keyword Research', values: ['Up to 25 Keywords', 'Up to 50 Keywords', 'Up to 100 Keywords'] },
    { label: 'GEO Intent-Based Keyword Mapping', values: ['Up to 10 Keywords', 'Up to 25 Keywords', 'Up to 50 Keywords'] },
    { label: 'AI-Optimized Meta Titles & Descriptions', values: ['20 Pages', '40 Pages', '80 Pages'] },
    { label: 'Advanced Schema Markup', values: ['Organization, FAQ, Local', 'Organization, FAQ, Local', 'Custom Nested Schemas'] },
    { label: 'High-Intent E-E-A-T Blog Posts', values: ['2 Posts', '4 Posts', '8 Posts'] },
    { label: 'Informational Authority Articles', values: ['2 Articles', '4 Articles', '6 Articles'] },
    { label: 'Press Release Creation & Syndication', values: ['1 (Digital Distribution)', '1 (Premium Outlets)', '2 (Tier 1 Outlets)'] },
    { label: 'Google Business Profile (GBP) & Posts', values: ['Setup + 8 Posts', 'Setup + 15 Posts', 'Setup + 25 Posts'] },
    { label: 'Local Directory Citations & NAP', values: ['15 Citations + Audit', '30 Citations + Audit', '50 Citations + Audit'] },
    { label: 'Brand Content Syndication', values: ['5 Outlets', '10 Outlets', '20 Outlets'] },
    { label: 'Quora Community Q&A Citations', values: ['4 Responses', '8 Responses', '15 Responses'] },
    { label: 'Reporting Frequency', values: ['Bi-Weekly Rank Reports', 'Weekly Rank Reports', 'Weekly Rank Reports'] },
    { label: 'Monthly AI Engine Visibility Report', values: ['Yes', 'Yes', 'Yes (Incl. Competitor AI Share)'] },
    { label: 'Dedicated Client Support Line', values: ['Email, Chat, WhatsApp', 'Email, Chat, WhatsApp', 'Account Manager + Strategy Call'] }
  ]
};

const FAQS = [
  {
    id: 'sg-1',
    question: 'How does GEO ensure our brand is cited in AI engines like ChatGPT and Gemini?',
    answer: 'GEO builds structured entity mappings, direct-answer formatting blocks, and custom nested schemas, while syndicating brand content across high-authority platforms that LLMs use as training sources.'
  },
  {
    id: 'sg-2',
    question: 'How long does it take to see rank improvements across Google Search?',
    answer: 'Technical crawl fixes and indexing updates reflect within 30 days. Consistent rank improvements, local map pack dominance, and expanded organic traffic scale steadily between months 3 and 6.'
  },
  {
    id: 'sg-3',
    question: 'Do you provide technical setup for analytics and performance tracking?',
    answer: 'Yes. Every package includes full Google Search Console setup, Bing Webmaster tools integration, and Google Analytics 4 (GA4) event and conversion tracking configuration.'
  }
];

export default function SeoGeoServices() {
  const { currency } = useCurrency();
  const packageTableHeaders = [
    PACKAGE_TABLE.headers[0],
    ...PACKAGE_TABLE_HEADER_PRICES.map((h) => `${h.label} (${formatPrice(getPrice(h.priceKey, currency), currency)}/mo)`)
  ];

  return (
    <div className="seo-geo-page">
      <SEO
        title="SEO + GEO Services | Dominate Search Engines & Generative AI — TBS Infotech"
        description="Unified SEO and Generative Engine Optimization engineered to win top rankings on Google and authoritative brand citations inside ChatGPT, Gemini and Perplexity."
        keywords="SEO services, Generative Engine Optimization, GEO services, AI search optimization, technical SEO"
      />

      <PageHero
        eyebrow="Services / SEO + GEO Services"
        title="SEO + GEO Services: Dominate Search Engines & Generative AI"
        description="Think Biz Solution Private Limited delivers unified Search Engine Optimization (SEO) and Generative Engine Optimization (GEO) services engineered to achieve top rankings on traditional search engines while securing authoritative brand citations inside AI platforms like ChatGPT, Gemini, and Perplexity."
        image={seoGeoBanner}
        imageAlt="SEO and Generative Engine Optimization visibility framework"
      />

      <BlufCallout>
        Designed for growth enterprises across North America, Europe, APAC, Australia, and the Middle East, our
        framework converts organic search visibility into measurable business revenue.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="What Is GEO?"
            title="What Is Generative Engine Optimization (GEO)?"
            subtitle="Traditional search engine optimization indexes web pages using keyword frequency and backlinks. GEO expands this framework by optimizing content structures, nested schemas, and brand citations so Large Language Models (LLMs) quote your business directly in natural language search answers."
          />
          <SystemDiagram hub="Think Biz Integrated Visibility Framework" branches={VISIBILITY_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Packages"
            title="How Do Our SEO + GEO Packages Compare?"
            subtitle="Our monthly service packages provide targeted optimizations aligned directly with your market competition and expansion goals."
          />
          <DataTable headers={packageTableHeaders} rows={PACKAGE_TABLE.rows} />
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
