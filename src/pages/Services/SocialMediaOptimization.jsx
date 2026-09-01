import { FiUsers, FiMessageCircle, FiAward } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';
import smoBanner from '../../assets/images/services/service_4_banner_img.jpg.jpeg';

const ENTITY_BRANCHES = [
  { icon: <FiUsers />, title: 'Social Profiles & Assets' },
  { icon: <FiMessageCircle />, title: 'Quora & Community Citations' },
  { icon: <FiAward />, title: 'High-Tier Brand Outlets' }
];

const SMO_FEATURES = [
  { title: 'Brand Profile Standardization', desc: 'Professional visual and bios alignment across all social channels to enforce brand consistency.' },
  { title: 'Content Creation & Scheduling', desc: 'Regular publishing of educational carousels, short-form video scripts, infographics, and authority updates.' },
  { title: 'Community Outreach & Q&A Citations', desc: 'Managed responses on platforms like Quora to place strategic brand references and link pathways.' }
];

const PLATFORM_TABLE = {
  headers: ['Platform', 'Target Audience', 'Primary Content Medium', 'Strategic Business Value'],
  rows: [
    { label: 'LinkedIn', values: ['B2B Decision Makers', 'Authority Articles & Graphics', 'Executive Leadership & Lead Gen'] },
    { label: 'Meta (FB/IG)', values: ['B2C Consumers', 'Visual Carousels & Reels', 'Brand Engagement & Ad Retargeting'] },
    { label: 'X (Twitter)', values: ['Tech, Media, & Global B2B', 'Real-Time News & Threads', 'Direct Engagement & Indexing Speed'] },
    { label: 'Quora', values: ['Active Question Searchers', 'In-Depth Q&A Answers', 'Referral Traffic & Entity Authority'] }
  ]
};

const FAQS = [
  {
    id: 'smo-1',
    question: 'How does Social Media Optimization support standard organic search results?',
    answer: 'Optimized social profiles rank quickly for branded search terms, giving your company more control over Page 1 search results while building referral traffic pathways.'
  },
  {
    id: 'smo-2',
    question: 'Does social media content creation include visual graphic design?',
    answer: 'Yes. We design brand assets, infographics, carousel slide decks, and promotional graphics formatted specifically for each platform.'
  },
  {
    id: 'smo-3',
    question: 'How do you measure the return on investment (ROI) of an organic SMO package?',
    answer: 'We track profile engagement rates, click-through referral traffic inside GA4, brand mention growth, and total off-page citation placements.'
  }
];

export default function SocialMediaOptimization() {
  return (
    <div className="smo-page">
      <SEO
        title="Social Media Optimization (SMO) | Off-Page Brand Dominance — TBS Infotech"
        description="Think Biz Solution delivers SMO campaigns across LinkedIn, X, Meta, YouTube and Quora to build multi-channel brand authority and off-page trust signals."
        keywords="social media optimization, SMO agency, off-page SEO, brand authority, social media management"
      />

      <PageHero
        eyebrow="Services / Social Media Optimization"
        title="Strategic Social Media Optimization: Off-Page Brand Dominance"
        description="Think Biz Solution Private Limited delivers Social Media Optimization (SMO) campaigns designed to build multi-channel brand authority. We manage social profiles, content production, and community engagement across LinkedIn, X (Twitter), Meta (Facebook/Instagram), YouTube, and Quora to drive user engagement and validate off-page trust signals."
        image={smoBanner}
        imageAlt="Off-page social media entity ecosystem"
      />

      <BlufCallout>
        We manage social profiles, content production, and community engagement across LinkedIn, X, Meta, YouTube,
        and Quora to drive user engagement and validate off-page trust signals.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Off-Page Authority"
            title="How Organic SMO Enhances Search and GEO Engine Indexing"
            subtitle="Search engine algorithms evaluate off-page brand mentions, social signals, and external domain traffic. Strong SMO builds an interconnected off-page network that establishes domain credibility, reinforcing your brand's authority for both Google rankings and AI engine references."
          />
          <SystemDiagram hub="Off-Page Entity Ecosystem" branches={ENTITY_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Management" title="Key Components of Our SMO Management" />
          <NumberedFeatureGrid items={SMO_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Strategy" title="Platform Strategy Matrix" />
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
