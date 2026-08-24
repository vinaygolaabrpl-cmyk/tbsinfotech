import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getCaseStudyBySlug, getAllCaseStudies } from '../../services/caseStudiesApi';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import StatTiles from '../../components/common/StatTiles';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FaqAccordion from '../../components/common/FaqAccordion';
import Loader from '../../components/common/Loader';
import NotFound from '../NotFound/NotFound';
import CaseStudyRail from '../../features/caseStudies/components/CaseStudyRail';
import './CaseStudyDetail.scss';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const { data: caseStudy, loading } = useFetch(() => getCaseStudyBySlug(slug), [slug]);
  const { data: allCaseStudies } = useFetch(() => getAllCaseStudies(), []);

  if (loading) return <Loader label="Loading case study…" />;
  if (!caseStudy) return <NotFound />;

  const related = (allCaseStudies ?? []).filter((cs) => cs.slug !== caseStudy.slug);

  return (
    <div className="case-study-detail-page">
      <SEO
        title={`${caseStudy.name} Case Study | SEO Results & Strategy — TBS Infotech`}
        description={`See how TBS Infotech helped ${caseStudy.name} reach ${caseStudy.rank} on Google across ${caseStudy.metric.toLowerCase()}. Read the full SEO strategy, challenge and results.`}
        keywords={`${caseStudy.name} case study, ${caseStudy.industry}, SEO case study, ${caseStudy.focusArea}`}
        image={caseStudy.image.src}
      />

      <PageHero
        eyebrow={`Case Studies / ${caseStudy.name}`}
        title={caseStudy.summary}
        description={caseStudy.projectOverview}
        image={caseStudy.image.src}
        imageAlt={caseStudy.image.alt}
        ctaLabel="Get A Free Consultation"
      />

      <section className="section">
        <div className="container">
          <div className="client-info-grid" data-aos="fade-up">
            <div className="infoTile">
              <span className="label">Industry</span>
              <span className="value">{caseStudy.industry}</span>
            </div>
            <div className="infoTile">
              <span className="label">Engagement</span>
              <span className="value">{caseStudy.engagement}</span>
            </div>
            <div className="infoTile">
              <span className="label">Focus Area</span>
              <span className="value">{caseStudy.focusArea}</span>
            </div>
            <div className="infoTile">
              <span className="label">Result</span>
              <span className="value">{caseStudy.rank} · {caseStudy.metric}</span>
            </div>
          </div>
        </div>
      </section>

      <BlufCallout>{caseStudy.conclusion}</BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Overview" title="Project Overview" />
          <p className="lead-text">{caseStudy.projectOverview}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="The Challenge" title="What We Were Up Against" />
          <p className="lead-text">{caseStudy.challenge}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Strategy" title="Our Approach" />
          <div className="grid-auto">
            {caseStudy.strategy.map((item, i) => (
              <Card key={item} data-aos="fade-up" data-aos-delay={i * 80}>
                <p>{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Solutions" title="What We Implemented" />
          <div className="grid-auto">
            {caseStudy.solutions.map((item, i) => (
              <Card key={item} data-aos="fade-up" data-aos-delay={i * 80}>
                <p>{item}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="SEO & Marketing" title="SEO Work Behind The Results" />
          <ul className="seo-work-list" data-aos="fade-up">
            {caseStudy.seoWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Results" title="Key Statistics" />
          <StatTiles items={caseStudy.stats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Project Screenshot" title={`${caseStudy.name} On Google`} />
          <div className="project-shot" data-aos="fade-up">
            <img
              src={caseStudy.image.src}
              alt={caseStudy.image.alt}
              width={caseStudy.image.width}
              height={caseStudy.image.height}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Key Achievements" title="What We Delivered" />
          <ul className="achievements-list" data-aos="fade-up">
            {caseStudy.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Conclusion" title="The Bottom Line" />
          <p className="lead-text">{caseStudy.conclusion}</p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle eyebrow="Related" title="More Case Studies" />
            <CaseStudyRail items={related} />
          </div>
        </section>
      )}

      <section className="section" id="faq">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
          <FaqAccordion faqs={caseStudy.faqs} />
        </div>
      </section>

      <section className="section final-cta">
        <div className="container text-center" data-aos="fade-up">
          <SectionTitle title="Ready For Results Like This?" />
          <Button to="/contact" size="lg">Get A Free Consultation</Button>
        </div>
      </section>
    </div>
  );
}
