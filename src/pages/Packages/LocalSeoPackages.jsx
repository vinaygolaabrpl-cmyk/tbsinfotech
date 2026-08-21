import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';
import './PackagesShared.scss';

const PLANS = [
  { name: 'Bronze', price: '$150', billing: 'Per Month' },
  { name: 'Silver', price: '$225', billing: 'Per Month', popular: true },
  { name: 'Gold', price: '$350', billing: 'Per Month' }
];

const GROUPS = [
  {
    title: 'Package Overview',
    rows: [
      { label: 'Target', values: ['Google Maps', 'Google Maps', 'Google Maps'] },
      { label: 'Best Suited For', values: ['Local/Niche Business', 'Local/Niche Business', 'Local/Niche Business'] },
      { label: 'Keywords', values: ['Long Tail/Location/City Specific', 'Long Tail/Location/City Specific', 'Long Tail/Location/City Specific'] },
      { label: 'Covers', values: ['SEO On-Page/Off-Page/Technical/Local Listing', 'SEO On-Page/Off-Page/Technical/Local Listing', 'SEO On-Page/Off-Page/Technical/Local Listing'] },
      { label: 'Result To Achieve', values: ['Ranking In Google Maps/Local Traffic/Calls/Enquiries', 'Ranking In Google Maps/Local Traffic/Calls/Enquiries', 'Ranking In Google Maps/Local Traffic/Calls/Enquiries'] }
    ]
  },
  {
    title: 'On-Page Optimization',
    rows: [
      { label: 'Local Keyword Research & Analysis (Targeting Local Market)', values: [5, 10, 20] },
      { label: 'Location Based Keywords Targeting', values: [true, true, true] },
      { label: 'Onsite Optimisation (Max Pages)', values: [true, true, true] },
      { label: 'Title & Meta Tag Optimization', values: [true, true, true] },
      { label: 'Header Tag Optimization', values: [true, true, true] },
      { label: 'Image & Hyperlink Optimization', values: [true, true, true] },
      { label: 'Robots.Txt Optimization', values: [true, true, true] },
      { label: 'Canonicalization Check', values: [true, true, true] },
      { label: 'Internal Link Structuring & Optimization', values: [true, true, true] },
      { label: 'Existing Web Content Optimization', values: [true, true, true] },
      { label: 'XML Sitemap Setup', values: [true, true, true] },
      { label: 'Schema Implementation For Contact Address', values: [true, true, true] },
      { label: 'Schema Implementation For Reviews', values: [true, true, true] },
      { label: 'Google Search Console Setup', values: [true, true, true] },
      { label: 'Google Analytics Setup', values: [true, true, true] },
      { label: 'Geo Targeting Implementation', values: [true, true, true] },
      { label: 'Location Based Page Analysis & Setup', values: [true, true, true] }
    ]
  },
  {
    title: 'Technical Website Optimization',
    rows: [
      { label: 'HTML Code Cleanup & Optimization', values: [false, false, true] },
      { label: 'Broken Link Check And Fix', values: [false, false, true] },
      { label: 'Desktop Webpage Speed Optimization', values: [false, true, true] },
      { label: 'Mobile Webpage Speed Optimization', values: [false, true, true] }
    ]
  },
  {
    title: 'Local Search Optimization',
    rows: [
      { label: 'Number Of Location Covered', values: [1, 2, 3] },
      { label: 'Google Business Page Setup & Verification', values: [true, true, true] },
      { label: 'Google Business Page Optimization', values: [true, true, true] },
      { label: 'Happy Review Response', values: [true, true, true] },
      { label: 'Negative Reviews Management', values: [false, true, true] },
      { label: 'Customer Reviews Posting/Rating', values: [2, 4, 10] },
      { label: 'Regular Posting On GMP (Local Story, Event, Release Etc.)', values: [true, true, true] },
      { label: 'Stragical Directories Submission', values: [true, true, true] },
      { label: 'Business Listing/Local Citations', values: [true, true, true] },
      { label: 'Bing Local Listing Setup', values: [false, true, true] },
      { label: 'NAP Syndication', values: [false, true, true] }
    ]
  },
  {
    title: 'Local Content Marketing',
    rows: [
      { label: 'Article Writing', values: [1, 2, 4] },
      { label: 'Blog Writing', values: [2, 3, 5] },
      { label: 'Web Blog Writing', values: [1, 2, 3] },
      { label: 'Classified Writing', values: [2, 3, 4] }
    ]
  },
  {
    title: 'Off Page Optimization',
    rows: [
      { label: 'Article Submission', values: [1, 2, 4] },
      { label: 'Blog Submission', values: [2, 3, 5] },
      { label: 'Local Classified Listing', values: [5, 10, 15] },
      { label: 'Local Search Engine Submission (One Time)', values: [true, true, true] },
      { label: 'Link Syndication', values: [true, true, true] },
      { label: 'Web Blog Submission', values: [1, 2, 3] },
      { label: 'Web Blog Promotions', values: [5, 10, 20] },
      { label: 'Profile Listing', values: [false, true, true] },
      { label: 'GMP Page Promotions', values: [true, true, true] }
    ]
  },
  {
    title: 'Monthly Reporting',
    rows: [
      { label: 'Search Engine Rank Report', values: ['Google Maps/Local', true, true] },
      { label: 'Google Maps Rank Report', values: [false, true, true] },
      { label: 'Google Analytics Report', values: ['SEO On-Page/Off/Technical/Local', false, true] },
      { label: 'Google My Business (GMP) Insight Report', values: ['Ranking In Google Maps/Local', true, true] }
    ]
  }
];

export default function LocalSeoPackages() {
  return (
    <div className="local-seo-packages-page">
      <SEO
        title="Local SEO Packages | Google Maps & Local Search Optimization — TBS Infotech"
        description="Bronze, Silver and Gold local SEO packages built to rank your business in Google Maps and drive local traffic, calls and enquiries."
        keywords="local SEO packages, Google Maps ranking, GMB optimization, local search optimization"
      />
      <PackageHero title="Local Seo Packages" breadcrumbLabel="Local Seo Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=Local+SEO+Packages" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Local SEO <span className="gradient">Optimization</span> Package</h2>
          <PricingMatrix planColumnLabel="Pick Monthly Package" plans={PLANS} groups={GROUPS} ctaLabel="Order Now!" />
        </div>
      </section>
    </div>
  );
}
