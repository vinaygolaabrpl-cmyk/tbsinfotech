import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';
import { openPaypalLink } from '../../utils/openPaypalLink';
import './PackagesShared.scss';

const PLANS = [
  { name: 'Bronze', price: '$300', billing: 'Per Month', note: 'Up To 25 Keywords', paypalLink: '' },
  { name: 'Silver', price: '$600', billing: 'Per Month', note: 'Up To 50 Keywords', popular: true, paypalLink: '' },
  { name: 'Gold', price: '$900', billing: 'Per Month', note: 'Up To 100 Keywords', paypalLink: '' }
];

const GROUPS = [
  {
    title: 'Initial Analysis & Setup',
    rows: [
      { label: 'Full Technical, SEO & GEO Web Audit', values: [true, true, true] },
      { label: 'Initial Backlink & Domain Toxicity Review', values: [true, true, true] },
      { label: 'AI-Driven Competitor Benchmark Analysis', values: [true, true, 'Advanced (Deep-Dive)'] },
      { label: 'Targeted Keyword Research (Primary & Secondary)', values: ['Up To 25', 'Up To 50', 'Up To 100'] },
      { label: 'GEO Conversational & Intent-Based Keyword Mapping', values: ['Up To 10', 'Up To 25', 'Up To 50'] },
      { label: 'Cross-Browser & Mobile-First Compatibility Check', values: [true, true, true] },
      { label: 'Page Speed & Core Web Vitals Diagnostic', values: [true, true, true] },
      { label: 'Indexing & Crawler Compliance Audit', values: [true, true, true] }
    ]
  },
  {
    title: 'On-Page & Generative Engine Optimization (GEO)',
    rows: [
      { label: 'AI-Optimized Meta Titles & Descriptions', values: ['20 Pages', '40 Pages', '80 Pages'] },
      { label: 'Header Structure Optimization (H1-H6)', values: [true, true, true] },
      { label: 'Semantic Internal Link Architecture', values: [true, true, true] },
      { label: 'Image Optimization (Alt Text, Compression, Filenames)', values: [true, true, true] },
      { label: 'Advanced Schema Markup (Organization, FAQ, Local, Product/Service)', values: [true, true, 'Yes (Custom Nested Schemas)'] },
      { label: 'GEO Content Structure & Direct Answer Formatting', values: [true, true, true] },
      { label: 'Robots.txt Creation & Optimization', values: [true, true, true] },
      { label: 'Dynamic XML & HTML Sitemap Setup', values: [true, true, true] },
      { label: 'LLMS.txt Creation & Implementation', values: [true, true, true] },
      { label: 'Google Search Console & Bing Webmaster Setup', values: [true, true, true] },
      { label: 'Google Analytics 4 (GA4) & Conversion Tracking Setup', values: [true, true, 'Yes (Advanced Event Tracking)'] },
      { label: 'Canonical Tag & URL Structure Optimization', values: [true, true, true] },
      { label: 'Broken Link Identification & Redirection Fixes', values: [true, true, true] }
    ]
  },
  {
    title: 'GEO Content Marketing (Monthly)',
    rows: [
      { label: 'High-Intent Blog Posts (E-E-A-T Focused)', values: [2, 4, 8] },
      { label: 'Informational Authority Articles', values: [2, 4, 6] },
      { label: 'Press Release Creation', values: [1, 1, 2] },
      { label: 'FAQ Content Creation with Direct Answer Blocks', values: [true, true, true] },
      { label: 'Brand Asset & Infographic Content Drafting', values: [1, 2, 4] }
    ]
  },
  {
    title: 'Local SEO & Profile Management (Monthly)',
    rows: [
      { label: 'Google Business Profile (GBP) Management & Setup', values: [true, true, true] },
      { label: 'GBP Posts & Updates', values: [8, 15, 25] },
      { label: 'Local Niche Citations & Business Directory Submissions', values: [15, 30, 50] },
      { label: 'Web-Wide NAP (Name, Address, Phone) Consistency Audit', values: [true, true, true] },
      { label: 'Local Map Pack Optimization & Geo-Tagging', values: [true, true, true] }
    ]
  },
  {
    title: 'Authority Building & Brand Syndication (Monthly)',
    rows: [
      { label: 'Digital Press Release Distribution', values: [true, 'Yes (Premium Outlets)', 'Yes (Tier 1 Outlets)'] },
      { label: 'High-Authority Brand Content Syndication', values: [5, 10, 20] },
      { label: 'Content Promotion & Social Asset Distribution', values: [10, 20, 40] },
      { label: 'Infographic & Visual Media Submissions', values: [3, 6, 12] },
      { label: 'Guest Blog Writing & Publishing', values: [1, 3, 5] },
      { label: 'Quora, Reddit & Community Q&A Brand Citations', values: ['Yes (4 Responses)', 'Yes (8 Responses)', 'Yes (15 Responses)'] }
    ]
  },
  {
    title: 'AI Technical Maintenance & Performance',
    rows: [
      { label: 'Continuous Page Speed & Load Time Optimization', values: [true, true, true] },
      { label: 'Mobile Usability Maintenance', values: [true, true, true] },
      { label: 'Dynamic Search Console Indexing Monitoring', values: [true, true, true] },
      { label: 'New Web Blog Suggestions (AI Based)', values: [true, true, true] }
    ]
  },
  {
    title: 'Reporting & Client Support',
    rows: [
      { label: 'Search Engine Rank Reports', values: ['Bi-Weekly', 'Weekly', 'Weekly'] },
      { label: 'Monthly AI Engine Visibility Report (ChatGPT/Gemini/Perplexity)', values: [true, true, 'Yes (Incl. Competitor AI Share)'] },
      { label: 'Monthly Google Analytics & Conversion Performance Report', values: [true, true, true] },
      { label: 'Dedicated Support', values: ['Email, Chat, WhatsApp', 'Email, Chat, WhatsApp', 'Dedicated Account Manager + Strategy Call'] }
    ]
  }
];

const NOTES = [
  'All on-page Optimization & Technical Analysis work will be in first month only',
  'All Off-page Optimization and content writing work will start from second month',
  'Send TONS OF TRAFFIC to your website by using the power of our SEO packages',
  'All work done as per google panda and google penguin guidelines.',
  'Tbsinfotech SEO Packages will make your website RISE TO THE TOP of all major search engines',
  'All Your Backlinks get indexed',
  'All the links we build pass more link juice to your website',
  'High Authority Relevant Links',
  'Increase your Ranking & Sales'
];

export default function AeoSeoPackages() {
  return (
    <div className="aeo-seo-packages-page">
      <SEO
        title="AEO SEO Packages | AI-Powered SEO & Search Intent Mastery — TBS Infotech"
        description="AI-Powered SEO and Answer Engine Optimization packages with advanced keyword strategies, user intent optimization and data-driven results."
        keywords="AEO SEO packages, Answer Engine Optimization, AI SEO packages, search intent optimization"
      />
      <PackageHero title="Aeo Seo Packages" breadcrumbLabel="Aeo Seo Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=AI-Powered+SEO+%26+AEO" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Pick <span className="gradient">Your</span> Package</h2>
          <PricingMatrix
            planColumnLabel="Pick Your Package Keywords Plan Activities"
            plans={PLANS}
            groups={GROUPS}
            onCta={(plan) => openPaypalLink(plan.paypalLink)}
          />

          <ul className="noteList" data-aos="fade-up">
            {NOTES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}