import { useMemo, useState } from 'react';
import { FiCloud, FiShoppingBag, FiServer } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import FaqAccordion from '../../components/common/FaqAccordion';
import Loader from '../../components/common/Loader';
import { usePortfolio } from '../../features/portfolio';
import PortfolioGrid from '../../features/portfolio/components/PortfolioGrid';
import './Portfolio.scss';
import portfolioBanner from '../../assets/images/services/ourwork_2_banner_img.jpg.jpeg';

const BLUEPRINT_BRANCHES = [
  { icon: <FiCloud />, title: 'Enterprise SaaS Portal', items: ['Tech: React / Node', 'Speed: 99/100 Mobile'] },
  { icon: <FiShoppingBag />, title: 'Global E-Com Storefront', items: ['Tech: Shopify Plus', 'Conv: +48% Checkout'] },
  { icon: <FiServer />, title: 'Local Services Engine', items: ['Tech: Custom PHP', 'Schema: Full Nested'] }
];

const FEATURED_PROJECTS = [
  {
    title: 'Enterprise SaaS Application',
    stack: 'React.js, Next.js, Tailwind CSS.',
    achievements: 'Sub-second global page loads, seamless dynamic app navigation, and mobile-first responsiveness.'
  },
  {
    title: 'Global Direct-to-Consumer E-Commerce Store',
    stack: 'Shopify Plus Custom Liquid Architecture.',
    achievements: 'Increased mobile conversions by 48%, streamlined checkout funnels, and dynamic product schema integration.'
  },
  {
    title: 'B2B Corporate Portal',
    stack: 'Modular Custom PHP / WordPress Architecture.',
    achievements: 'Core Web Vitals optimized out of the box, automated CRM lead capture, and instant indexation across search engines.'
  }
];

const FAQS = [
  {
    id: 'pf-1',
    question: 'Can Think Biz redesign our existing website without disrupting database operations?',
    answer: 'Yes. We perform complete database backups, mirror development environments, and conduct thorough testing before pushing updates live.'
  },
  {
    id: 'pf-2',
    question: 'Are all websites built by Think Biz optimized for mobile screens?',
    answer: 'Yes. Every website is built using responsive mobile design standards, ensuring smooth display and rapid load performance on all devices.'
  }
];

export default function Portfolio() {
  const { data: items, loading } = usePortfolio();
  const [filter, setFilter] = useState('All');

  const categories = useMemo(() => ['All', ...new Set((items ?? []).map((i) => i.category))], [items]);
  const filtered = useMemo(
    () => (filter === 'All' ? items ?? [] : (items ?? []).filter((i) => i.category === filter)),
    [items, filter]
  );

  return (
    <div className="portfolio-page">
      <SEO
        title="Website Development Portfolio | Fast, High-Converting Web Architectures — TBS Infotech"
        description="Explore TBS Infotech's project portfolio — from custom React SaaS applications to high-volume Shopify stores and custom PHP enterprise portals."
        keywords="web design portfolio, website development portfolio, ecommerce portfolio, TBS Infotech projects"
      />

      <PageHero
        eyebrow="Portfolio / Website Portfolio"
        title="Web Development Portfolio: Fast, High-Converting Web Architectures"
        description="Explore Think Biz Solution Private Limited's project portfolio. From custom React SaaS applications to high-volume Shopify stores and custom PHP enterprise portals, our digital builds deliver fast page speed, intuitive UX, and clean, search-optimized code."
        image={portfolioBanner}
        imageAlt="Website portfolio project blueprints"
        ctaLabel="Discuss A New Build"
      />

      <BlufCallout>
        Our digital builds deliver fast page speed, intuitive UX, and clean, search-optimized code — across custom
        React SaaS applications, high-volume Shopify stores, and custom PHP enterprise portals.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Blueprints" title="Featured Project Blueprints" />
          <SystemDiagram hub="Portfolio Blueprints" branches={BLUEPRINT_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-auto">
            {FEATURED_PROJECTS.map((p, i) => (
              <Card key={p.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <h3>{p.title}</h3>
                <p><strong>Technology Framework:</strong> {p.stack}</p>
                <p><strong>Key Achievements:</strong> {p.achievements}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Work That Looks Sharp And Performs Harder"
            subtitle="Design, engineering and growth shipped by one in-house team."
          />

          {!loading && (
            <div className="filters" data-aos="fade-up">
              {categories.map((c) => (
                <button
                  key={c}
                  className={`filter ${filter === c ? 'filterActive' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>
          )}

          {loading ? <Loader label="Loading portfolio…" /> : <PortfolioGrid items={filtered} />}

          <div className="portfolioMoreLink" data-aos="fade-up">
            <Button to="/seo-case-study" variant="outline">See Our SEO Case Studies ↗</Button>
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
