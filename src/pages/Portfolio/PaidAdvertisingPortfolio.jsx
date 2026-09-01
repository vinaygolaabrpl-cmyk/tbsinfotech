import { FiTrendingUp } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import DataTable from '../../components/common/DataTable';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import FaqAccordion from '../../components/common/FaqAccordion';
import paidAdsBanner from '../../assets/images/services/service_3_banner_img.jpg.jpeg';

const CAMPAIGN_TABLE = {
  headers: ['Client Sector', 'Paid Media Platform', 'Core Strategy Executed', 'Business Results Delivered'],
  rows: [
    { label: 'B2B Enterprise Software', values: ['Google Search & Remarketing', 'High-Intent Keyword Targeting', '3.8x ROAS, 42% Lower CPL'] },
    { label: 'Direct-to-Consumer Brand', values: ['Meta (Facebook/Instagram)', 'Dynamic Retargeting Funnels', '4.6x ROAS, Scaled Monthly Revenue'] },
    { label: 'Professional Services', values: ['Google Performance Max', 'PMax Shopping & Search Feed', '+215% Lead Volume Growth'] }
  ]
};

const OPTIMIZATION_STEPS = [
  { icon: <FiTrendingUp />, title: 'Conversion Setup Check', desc: 'Installing GA4 custom event tracking to capture accurate lead metrics.' },
  { icon: <FiTrendingUp />, title: 'Creative Ad Testing', desc: 'Running multi-variant creative tests across ad copy, headlines, and call-to-action buttons.' },
  { icon: <FiTrendingUp />, title: 'Budget Reallocation', desc: 'Scaling daily budgets into high-converting audience segments while cutting spend on low-performing targets.' }
];

const FAQS = [
  {
    id: 'pp-1',
    question: 'How do you verify our company owns all advertising accounts and assets?',
    answer: "All ad campaigns are built inside your company's own ad managers (Google Ads, Meta Business Manager). Your business retains full admin access and asset ownership at all times."
  },
  {
    id: 'pp-2',
    question: 'What initial daily budget do you recommend for testing new paid media campaigns?',
    answer: 'We recommend starting with an initial monthly budget of $1,000 to $3,000 per platform. This provides enough conversion data to optimize audience targeting and ad performance efficiently.'
  }
];

export default function PaidAdvertisingPortfolio() {
  return (
    <div className="paid-portfolio-page">
      <SEO
        title="Paid Advertising Portfolio | Scalable Customer Acquisition — TBS Infotech"
        description="Review verified performance outcomes from Google Ads and Meta campaigns managed by TBS Infotech — data-driven paid advertising funnels that control ad costs and generate predictable revenue."
        keywords="paid advertising portfolio, PPC case studies, Google Ads results, Meta Ads results, ROAS"
      />

      <PageHero
        eyebrow="Portfolio / Paid Advertising Portfolio"
        title="Paid Media Performance Portfolio: Scalable Customer Acquisition"
        description="Review verified performance outcomes from Google Ads and Meta campaigns managed by Think Biz Solution Private Limited. We engineer data-driven paid advertising funnels that control ad costs, improve ad engagement, and generate predictable business revenue."
        image={paidAdsBanner}
        imageAlt="Paid media campaign performance portfolio"
      />

      <BlufCallout>
        We engineer data-driven paid advertising funnels that control ad costs, improve ad engagement, and generate
        predictable business revenue.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Results" title="Campaign Performance Summary" />
          <DataTable headers={CAMPAIGN_TABLE.headers} rows={CAMPAIGN_TABLE.rows} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Process" title="Systematic Campaign Optimization Process" />
          <NumberedFeatureGrid items={OPTIMIZATION_STEPS} />
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
