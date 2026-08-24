import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import SectionTitle from '../../components/common/SectionTitle';
import FaqAccordion from '../../components/common/FaqAccordion';
import faqs from '../../data/faqs.json';

export default function Faq() {
  return (
    <div className="faq-page">
      <SEO
        title="FAQ | Frequently Asked Questions — TBS Infotech"
        description="Answers to the questions we hear most about AI SEO & GEO, timelines, AI search optimization and PPC reporting at TBS Infotech."
        keywords="TBS Infotech FAQ, SEO questions, GEO questions, AI search FAQ, PPC reporting FAQ"
      />

      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Answers to what we get asked every week — about GEO, timelines, AI search visibility and how we report on results."
      />

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Questions We Get Every Week" />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </div>
  );
}
