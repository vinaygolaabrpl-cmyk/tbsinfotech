import { FiTarget, FiFacebook } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';
import googleAdsBanner from '../../assets/images/services/service_5_banner_img.jpg.jpeg';

const ARCHITECTURE_BRANCHES = [
  { icon: <FiTarget />, title: 'Google Ads Engine', items: ['High-Intent Search Ads', 'Shopping & Product Feeds', 'Performance Max (PMax)'] },
  { icon: <FiFacebook />, title: 'Meta Ads Engine', items: ['Interest & Behavior Target', 'Dynamic Funnel Retargeting', 'Lookalike Audience Models'] }
];

const GOOGLE_FEATURES = [
  { title: 'High-Intent Search Campaigns', desc: 'Precise keyword bidding targeting active purchase searches.' },
  { title: 'Performance Max & Shopping Feeds', desc: 'E-commerce feed optimization maximizing placement across Search, Shopping, YouTube, and Display networks.' },
  { title: 'GA4 Conversion Tracking', desc: 'Strict tracking configuration inside Google Analytics 4 to track actual sales performance.' }
];

const META_FEATURES = [
  { title: 'Audience Targeting', desc: 'Custom interest targeting combined with dynamic lookalike models.' },
  { title: 'Creative Testing Pipelines', desc: 'Iterative testing across single-image formats, video ads, and carousel sets.' },
  { title: 'Retargeting Funnels', desc: 'Structured re-engagement campaigns designed to turn drop-offs into customers.' }
];

const COMPARISON_TABLE = {
  headers: ['Metric / Parameter', 'Google Ads Search', 'Meta Ads (FB/IG)'],
  rows: [
    { label: 'User Intent Level', values: ['High (Active Searchers)', 'Passive to Medium (Interests)'] },
    { label: 'Best Campaign Goal', values: ['High-Intent Sales & Leads', 'Visual E-Com & Brand Awareness'] },
    { label: 'Average Conversion Speed', values: ['Fast (Immediate Query Match)', 'Requires Multi-Touch Funnels'] }
  ]
};

const FAQS = [
  {
    id: 'ga-1',
    question: 'How quickly will our campaign go live and track conversions?',
    answer: 'Campaign structures are typically built, audited, and launched within 5 to 7 business days. Real-time conversion tracking logs lead metrics immediately upon launch.'
  },
  {
    id: 'ga-2',
    question: 'How do you prevent wasted ad spend on irrelevant search traffic?',
    answer: 'We set up exact phrase matching, build extensive negative keyword lists, and run regular search query audits to protect your daily budget.'
  },
  {
    id: 'ga-3',
    question: 'Who owns the advertising accounts and historical campaign data?',
    answer: 'Your business retains full admin ownership of your Google Ads and Meta Business Manager accounts at all times.'
  }
];

export default function GoogleAdsMetaAds() {
  return (
    <div className="ads-page">
      <SEO
        title="Google Ads + Meta Ads | Paid Media Engineering — TBS Infotech"
        description="Think Biz Solution designs and manages paid advertising campaigns across Google Search, Shopping, Performance Max and Meta to lower CAC and maximize ROAS."
        keywords="Google Ads management, Meta Ads management, PPC agency, Performance Max, paid media agency"
      />

      <PageHero
        eyebrow="Services / Google Ads + Meta Ads"
        title="Paid Media Engineering: Targeted Acquisition across Google & Meta"
        description="Think Biz Solution Private Limited designs and manages paid advertising campaigns that drive scalable revenue. Operating across Google Search, Shopping, Performance Max, and Meta platforms (Facebook/Instagram), we focus on lowering Customer Acquisition Costs (CAC) while maximizing Return on Ad Spend (ROAS)."
        image={googleAdsBanner}
        imageAlt="Paid media campaign architecture across Google and Meta"
      />

      <BlufCallout>
        Operating across Google Search, Shopping, Performance Max, and Meta platforms, we focus on lowering
        Customer Acquisition Costs (CAC) while maximizing Return on Ad Spend (ROAS).
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Framework" title="Paid Media Campaign Framework" />
          <SystemDiagram hub="Paid Media Architecture" branches={ARCHITECTURE_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Google Ads" title="Google Ads Campaign Management" align="left" />
          <NumberedFeatureGrid items={GOOGLE_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Meta Ads" title="Meta Ads Campaign Management (Facebook & Instagram)" align="left" />
          <NumberedFeatureGrid items={META_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Comparison" title="Paid Channel Comparison" />
          <DataTable headers={COMPARISON_TABLE.headers} rows={COMPARISON_TABLE.rows} />
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
