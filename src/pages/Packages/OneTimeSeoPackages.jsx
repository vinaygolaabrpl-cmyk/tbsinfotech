import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';

const PLANS = [{ name: 'One Time SEO Package', price: '$200 USD' }];

const GROUPS = [
  {
    title: 'On-Page Optimization',
    rows: [
      { label: 'SEO Keyword Research', values: [true] },
      { label: 'AI-Optimized Meta Tags (Title & Description)', values: [true] },
      { label: 'Meta Description Optimization', values: [true] },
      { label: 'Robots.txt Creation & Analysis', values: [true] },
      { label: 'Creation & Implementation of XML Sitemap', values: [true] },
      { label: 'Creation & Implementation of HTML Sitemap', values: [true] },
      { label: 'Creation & Implementation of ROR Sitemap', values: [true] },
      { label: 'LLMS Sitemap Creation & Implementation (AI Optimization)', values: [true] },
      { label: 'Google Analytics Setup & Conversion Tracking', values: [true] },
      { label: 'Google Search Console Setup', values: [true] },
      { label: 'Bing Webmaster Setup', values: [true] },
      { label: 'Image Optimization (Alt & Title Tags)', values: [true] },
      { label: 'Anchor Tag Optimization', values: [true] },
      { label: 'Heading Tag Optimization', values: [true] },
      { label: 'Existing Web Content Optimization', values: [true] },
      { label: 'URL Mapping', values: [true] },
      { label: 'Meta Data Structure', values: [true] },
      { label: 'NOODP, NOYDIR Tag', values: [true] },
      { label: 'Geo Tag Creation', values: [true] },
      { label: 'Social Media Button Integration', values: [true] },
      { label: 'Canonical Tag', values: [true] },
      { label: 'Schema Markup Generation & Implementation', values: [true] },
      { label: 'AI-Friendly Web Pages Suggestions', values: [true] },
      { label: 'Website Technical Issue (Fix Which Could Be Possible As Per Technology)', values: [true] }
    ]
  },
  {
    title: 'Technical SEO Setup',
    rows: [
      { label: 'Setup 301 Redirects For Broken URLs', values: [true] },
      { label: 'Create Custom 404 Page', values: [true] },
      { label: 'Redirect HTTP To HTTPS', values: [true] },
      { label: 'Setup SSL Certificate (HTTPS)', values: [true] },
      { label: 'Add FAQ Section', values: [true] },
      { label: 'Add Blog Section', values: [true] },
      { label: 'Page Speed & Core Web Vitals Optimization', values: [true] }
    ]
  },
  {
    title: 'Report',
    rows: [{ label: 'Monthly One Time Report', values: [true] }]
  }
];

export default function OneTimeSeoPackages() {
  return (
    <div className="one-time-seo-page">
      <SEO
        title="One Time SEO Package | $200 Technical SEO Setup — TBS Infotech"
        description="A single one-time technical and on-page SEO setup covering sitemaps, schema, analytics, redirects and Core Web Vitals — no recurring commitment."
        keywords="one time SEO package, one time SEO setup, technical SEO audit"
      />
      <PackageHero title="One Time Seo Packages" breadcrumbLabel="One Time Seo Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=One+Time+SEO" />

      <section className="section">
        <div className="container">
          <PricingMatrix planColumnLabel="On-Page Optimization" plans={PLANS} groups={GROUPS} ctaLabel="Request A Quote" />
        </div>
      </section>
    </div>
  );
}
