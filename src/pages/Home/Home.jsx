import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import Button from '../../components/common/Button';
import AnimatedNumber from '../../components/common/AnimatedNumber';
import SectionTitle from '../../components/common/SectionTitle';
import Loader from '../../components/common/Loader';
import FaqAccordion from '../../components/common/FaqAccordion';
import ContactForm from '../../components/common/ContactForm';
import { useServices } from '../../features/services';
import ServiceCard from '../../features/services/components/ServiceCard';
import { usePackages } from '../../features/packages';
import PackageCard from '../../features/packages/components/PackageCard';
import { usePortfolio } from '../../features/portfolio';
import PortfolioGrid from '../../features/portfolio/components/PortfolioGrid';
import { useCaseStudies } from '../../features/caseStudies';
import CaseStudyRail from '../../features/caseStudies/components/CaseStudyRail';
import { useTestimonials } from '../../features/testimonials';
import TestimonialSlider from '../../features/testimonials/components/TestimonialSlider';
import { useBlogPosts } from '../../features/blog/hooks/useBlog';
import faqs from '../../data/faqs.json';
import siteConfig from '../../data/siteConfig.json';
import './Home.scss';
import bannerVideo from '../../assets/videos/banner.mp4';

const CATEGORIES = ['All Services', 'Search & GEO', 'Ads & PPC', 'Web & App', 'Branding'];

export default function Home() {
  const [category, setCategory] = useState('All Services');
  const [videoReady, setVideoReady] = useState(false);
  const { data: services, loading: servicesLoading } = useServices(category === 'All Services' ? null : category);
  const { data: caseStudies, loading: caseStudiesLoading } = useCaseStudies();
  const { data: packages, loading: packagesLoading } = usePackages();
  const { data: portfolio, loading: portfolioLoading } = usePortfolio();
  const { data: testimonials, loading: testimonialsLoading } = useTestimonials();
  const { data: posts, loading: postsLoading } = useBlogPosts();
  const { hash } = useLocation();


  return (
    <div className="home-page">
      <SEO
        title="TBS Infotech | AI SEO, GEO & Digital Marketing Agency"
        description="TBS Infotech is a full-cycle digital growth agency delivering AI SEO & GEO, PPC, web & app development and branding — trusted by 1,000+ brands and backed by 18+ years of experience."
        keywords="AI SEO agency, Generative Engine Optimization, GEO services, SEO company India, PPC advertising agency, web development agency, digital marketing agency Noida"
      />

      {/* HERO */}
      <section className="heroSection">
        <div className="heroMedia" aria-hidden="true">
          <span className="heroPattern" />
          <span className="heroGlow" />
          <video
            className={`heroVideo ${videoReady ? 'heroVideoReady' : ''}`}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onCanPlay={() => setVideoReady(true)}
          >
            <source src={bannerVideo} type="video/mp4" />
          </video>
          <span className="heroOverlay" />
        </div>

        <div className="container heroInner">
          <div className="heroContent">
            <span className="eyebrow heroEyebrow" data-aos="fade-down">
              <SparkIcon /> Pioneering AI SEO &amp; Generative Engine Optimization (GEO)
            </span>
            <h1 data-aos="fade-up" data-aos-delay="60">
              We Don&apos;t Just Rank You On Google.{' '}
              <span className="gradient">We Make You The Top Answer For AI Search.</span>
            </h1>
            <p className="heroStat" data-aos="fade-up" data-aos-delay="120">Data-driven digital growth with <strong>{siteConfig.stats.experience}</strong> years of expertise, {' '}
              <strong>{siteConfig.stats.projects}</strong> delivered projects, and 85+ in-house growth specialists.</p>
            <div className="heroCtas" data-aos="fade-up" data-aos-delay="180">
              <Button to="/free-seo-audit" size="lg"><SparkIcon /> Get Free Audit &amp; Proposal</Button>
              <Button to="/seo-case-study" variant="outline" size="lg">Explore Our Case Studies</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES / SERVICES */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Capabilities"
            title="A Full Growth Stack Built For The AI Search Era"
            subtitle="Every engagement blends search visibility, paid demand and conversion-grade engineering."
          />

          <div className="tabs" data-aos="fade-up">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`tab ${category === c ? 'tabActive' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {servicesLoading ? (
            <Loader label="Loading services…" />
          ) : (
            <div className="grid-auto servicesGrid">
              {services?.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Case Studies" title="Results We Can Put A Number On" />
          {caseStudiesLoading ? <Loader /> : <CaseStudyRail items={caseStudies ?? []} />}
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Packages"
            title="Transparent Pricing, No Lock-In Surprises"
            subtitle="Monthly Subscription"
            subtitlePill
          />
          {packagesLoading ? (
            <Loader />
          ) : (
            <div className="grid-auto packagesGrid">
              {packages
                ?.filter((p) => p.billing === 'Per Month')
                .map((pkg, i) => <PackageCard key={pkg.slug} pkg={pkg} index={i} />)}
            </div>
          )}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Work That Looks Sharp And Performs Harder"
            subtitle="Design, engineering and growth shipped by one in-house team."
          />
          {portfolioLoading ? (
            <Loader />
          ) : (
            <PortfolioGrid items={portfolio?.slice(0, 4) ?? []} columns={2} />
          )}
        </div>
      </section>

      {/* STATS */}
      <section className="container stats" data-aos="fade-up">
        <StatBlock value={siteConfig.stats.experience} label="Years Experience" highlighted />
        <StatBlock value={siteConfig.stats.projects} label="Projects Delivered" />
        <StatBlock value={siteConfig.stats.team} label="In-House Experts" />
        <StatBlock value={siteConfig.stats.retention} label="Client Retention" />
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonials"
            title="Trusted By Founders Across The World"
            subtitle="Verified Google reviews from clients who stayed with us for years, not months."
          />
          {testimonialsLoading ? <Loader /> : <TestimonialSlider testimonials={testimonials ?? []} />}
        </div>
      </section>

      {/* INSIGHTS / BLOG */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Insights"
            title="Knowledge Hub For The AI Search Era"
            subtitle="Field notes from the strategists running these programs every day."
          />
          {postsLoading ? (
            <Loader />
          ) : (
            <div className="blogGrid">
              {posts?.map((post, i) => (
                <article key={post.slug} className="blogCard" data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="blogMeta">
                    <span className="blogCategory">{post.category}</span>
                    <span className="blogReadTime">{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blogFooter">
                    <span className="blogAuthor">By {post.author}</span>
                    <span className="blogLink">Read Article ↗</span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Questions We Get Every Week" />
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="container ctaSection">
        <div className="ctaPanel" data-aos="zoom-in">
          <div className="ctaGrid">
            <div className="ctaCopy">
              <h2>
                Ready To Scale Your <span className="gradient">Digital Revenue?</span>
              </h2>
              <p>Book A 30-Minute Strategy Call With A Senior Growth Strategist. You&apos;ll Leave With A Prioritized AI SEO, GEO And Paid Media Plan — Whether You Work With Us Or Not.</p>
              <ul className="ctaContact">
                <li>
                  <a href={`tel:${siteConfig.phones[1].replace(/\s/g, '')}`}>
                    <span className="ctaIcon"><FiPhone /></span>
                    {siteConfig.phones[1]}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteConfig.email}`}>
                    <span className="ctaIcon"><FiMail /></span>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <span className="ctaIcon"><FiMapPin /></span>
                  {siteConfig.address}
                </li>
              </ul>
            </div>
            <ContactForm eyebrow="E-Commerce" />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBlock({ value, label, highlighted = false }) {
  return (
    <div className={`statBlock ${highlighted ? 'highlighte' : ''}`}>
      <strong><AnimatedNumber value={value} /></strong>
      <span className="statLabel">{label}</span>
    </div>
  );
}

function SparkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  );
}
