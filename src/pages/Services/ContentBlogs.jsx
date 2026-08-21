import { FiFileText, FiCode, FiLink } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';

const FORMAT_TABLE = {
  headers: ['Content Format', 'Primary Business Goal', 'Target Audience', 'AI Engine & Search Impact'],
  rows: [
    { label: 'High-Intent Blog Posts', values: ['Solve active buyer questions', 'Active Buyers', 'Ranks for secondary search terms'] },
    { label: 'Informational Articles', values: ['Build deep industry authority', 'Decision Makers', 'Source citations for AI platforms'] },
    { label: 'Press Releases', values: ['Distribute corporate news', 'Media & Outlets', 'Creates authority links & trust badges'] }
  ]
};

const ARCHITECTURE_BRANCHES = [
  { icon: <FiFileText />, title: 'Direct Answer Blocks', items: ['Direct BLUF Summary', 'Clear Q&A Formats'] },
  { icon: <FiCode />, title: 'Structured Schema', items: ['Article Schema Markup', 'Author Verification'] },
  { icon: <FiLink />, title: 'Contextual Link Loops', items: ['Strategic Internal Linking to Services'] }
];

const ENGINEERING_STEPS = [
  { title: 'Direct-Answer Formatting', desc: 'Summarizing key facts into clear Q&A blocks to secure zero-click search spots and AI citations.' },
  { title: 'Schema Integration', desc: 'Using article and publisher schema tags so search engines extract topic details accurately.' },
  { title: 'Internal Linking Loops', desc: 'Linking contextual keywords directly to money pages to route domain authority across your site.' }
];

const FAQS = [
  {
    id: 'cb-1',
    question: 'Does your content team write for technical or specialized industries?',
    answer: 'Yes. Our editorial process combines market research, competitor benchmarking, and outline approvals to ensure technical accuracy in every piece.'
  },
  {
    id: 'cb-2',
    question: 'How frequently should our site publish new content to increase ranks?',
    answer: 'Publishing 4 to 8 high-intent articles monthly maintains fresh content signals, expands keyword coverage, and provides steady data for AI engines to index.'
  },
  {
    id: 'cb-3',
    question: 'Is all content checked for originality and AI compliance?',
    answer: 'Every piece undergoes editorial review, original plagiarism verification, and structural tuning to guarantee high E-E-A-T scores.'
  }
];

export default function ContentBlogs() {
  return (
    <div className="content-blogs-page">
      <SEO
        title="High-Intent Authority Content & Blogs | E-E-A-T Content — TBS Infotech"
        description="Targeted blog posts, informational articles and press releases designed to meet Google's E-E-A-T standards and convert informational searches into qualified leads."
        keywords="content marketing agency, blog writing services, E-E-A-T content, press release distribution"
      />

      <PageHero
        eyebrow="Services / High-Intent Authority Content & Blogs"
        title="Search-Optimized Content Creation: Build Lasting Industry Authority"
        description="Think Biz Solution Private Limited produces targeted blog posts, informational articles, and press releases designed to meet Google's E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) standards. Built for both human readers and AI crawlers, our content converts targeted informational searches into qualified enterprise leads."
        image="https://placehold.co/700x460/0b1220/22d3ee?text=E-E-A-T+Content"
        imageAlt="E-E-A-T content architecture for search and AI engines"
      />

      <BlufCallout>
        Built for both human readers and AI crawlers, our content converts targeted informational searches into
        qualified enterprise leads.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Formats" title="Content Format & Execution Matrix" />
          <DataTable headers={FORMAT_TABLE.headers} rows={FORMAT_TABLE.rows} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Architecture" title="Engineering Content for Search & AI Engines" />
          <SystemDiagram hub="E-E-A-T Content Architecture" branches={ARCHITECTURE_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Process" title="How We Engineer Every Piece" align="left" />
          <NumberedFeatureGrid items={ENGINEERING_STEPS} />
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
