import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import StatTiles from '../../components/common/StatTiles';
import Card from '../../components/common/Card';
import FaqAccordion from '../../components/common/FaqAccordion';
import Loader from '../../components/common/Loader';
import { useCaseStudies } from '../../features/caseStudies';
import CaseStudyRail from '../../features/caseStudies/components/CaseStudyRail';
import caseStudyBanner from '../../assets/images/services/service_1_banner_img.jpg.jpeg';

const BENCHMARKS = [
  { value: '+312%', label: 'Organic Traffic — SaaS Client Baseline' },
  { value: '42', label: 'AI Engine Citations Per Enterprise Brand' },
  { value: '#1', label: 'Local Map Pack — Multi-Location Client' }
];

const CASE_STUDIES = [
  {
    title: 'Case Study A: International B2B SaaS Enterprise',
    challenge: 'High acquisition costs on paid channels paired with weak organic keyword reach.',
    strategy: 'Deployed the Gold Package framework, integrating custom nested schemas, advanced technical tuning, and regular authority article publication.',
    results: [
      '+312% increase in organic site sessions within 6 months.',
      'Secured consistent citation placements across ChatGPT and Perplexity for target SaaS search terms.'
    ]
  },
  {
    title: 'Case Study B: Multi-Location Healthcare Brand',
    challenge: 'Inconsistent NAP business records and low local map rankings across target regional cities.',
    strategy: 'Completed full local directory submissions, optimized Google Business Profiles, and built high-intent local citation networks.',
    results: [
      '#1 Local Map Pack rankings achieved for 80% of target regional keywords.',
      '+185% increase in direct telephone inquiries and map direction requests.'
    ]
  }
];

const FAQS = [
  {
    id: 'cs-1',
    question: 'Are your agency performance metrics independently verified?',
    answer: 'Yes. We verify all client growth metrics directly using Google Analytics 4 logs, Google Search Console index data, and third-party tools like Ahrefs and SEMrush.'
  },
  {
    id: 'cs-2',
    question: 'Can Think Biz replicate these organic results for our business niche?',
    answer: 'While competitive landscapes vary, our core SEO + GEO methodology scales reliably across B2B, B2C, E-Commerce, and service verticals globally.'
  }
];

export default function SeoCaseStudy() {
  const { data: caseStudies, loading } = useCaseStudies();

  return (
    <div className="seo-case-study-page">
      <SEO
        title="SEO & GEO Case Studies | Documented Results — TBS Infotech"
        description="Review real campaign performance data showing how TBS Infotech's technical site tuning, GEO conversational mapping, and E-E-A-T link strategies drive top rankings and AI citations."
        keywords="SEO case study, SEO results, GEO case study, keyword ranking results, organic traffic growth"
      />

      <PageHero
        eyebrow="Case Studies / SEO & GEO Case Studies"
        title="Documented Results: Proven Organic SEO & GEO Growth"
        description="Think Biz Solution Private Limited delivers transparent, measurable organic growth across international markets. Review real campaign performance data showing how our technical site tuning, GEO conversational mapping, and E-E-A-T link strategies drive top rankings, expanded AI engine citations, and higher conversion volumes."
        image={caseStudyBanner}
        imageAlt="Campaign performance metrics dashboard"
      />

      <BlufCallout>
        Review real campaign performance data showing how our technical site tuning, GEO conversational mapping,
        and E-E-A-T link strategies drive top rankings, expanded AI engine citations, and higher conversion volumes.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Benchmarks" title="Proven Performance Benchmarks" />
          <StatTiles items={BENCHMARKS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Deep Dive" title="Documented Client Outcomes" />
          <div className="grid-auto">
            {CASE_STUDIES.map((cs, i) => (
              <Card key={cs.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <h3>{cs.title}</h3>
                <p><strong>Challenge:</strong> {cs.challenge}</p>
                <p><strong>Strategy Implemented:</strong> {cs.strategy}</p>
                <p><strong>Documented Results:</strong></p>
                <ul>
                  {cs.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Case Studies" title="Results We Can Put A Number On" />
          {loading ? <Loader /> : <CaseStudyRail items={caseStudies ?? []} />}
          {/* {loading ? <Loader /> : <CaseStudyRail items={caseStudies?.slice(0, 2) ?? []} />} */}
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
