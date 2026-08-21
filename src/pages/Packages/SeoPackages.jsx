import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';
import './PackagesShared.scss';

const PLANS = [
  { name: 'Value', price: '$125', billing: 'Per Month', note: 'Up To 10 Keywords' },
  { name: 'Bronze', price: '$225', billing: 'Per Month', note: 'Up To 25 Keywords' },
  { name: 'Silver', price: '$400', billing: 'Per Month', note: 'Up To 50 Keywords', popular: true },
  { name: 'Gold', price: '$700', billing: 'Per Month', note: 'Up To 100 Keywords' },
  { name: 'Platinum', price: '$1050', billing: 'Per Month', note: 'Up To 150 Keywords' }
];

const GROUPS = [
  {
    title: 'Initial Review And Analysis (First Month SEO Task)',
    rows: [
      { label: 'Preliminary SEO Check', values: [true, true, true, true, true] },
      { label: 'Detailed SEO Strategy & Plan', values: [true, true, true, true, true] },
      { label: 'Keywords Research & Analysis', values: [true, true, true, true, true] },
      { label: 'Competitor Analysis', values: [true, true, true, true, true] },
      { label: 'Initial Backlinks Analysis', values: [true, true, true, true, true] },
      { label: 'Google Penalty Check', values: [true, true, true, true, true] },
      { label: 'Cross Browser Compatibility', values: [true, true, true, true, true] },
      { label: 'Website Loading Time', values: [true, true, true, true, true] },
      { label: 'Crawler Compliance Implementation', values: [true, true, true, true, true] },
      { label: 'Checking Page Size', values: [true, true, true, true, true] },
      { label: 'Checking Broken Links', values: [true, true, true, true, true] },
      { label: 'Duplicate Content Checking', values: [true, true, true, true, true] }
    ]
  },
  {
    title: 'On-Page Optimization (First Month SEO Task)',
    rows: [
      { label: 'Meta Tags Optimization (Title & Description)', values: ['10 Web Page (Max)', '20 Web Page (Max)', '40 Web Page (Max)', '75 Web Page (Max)', '100 Web Page (Max)'] },
      { label: 'Robots.txt Creation & Analysis', values: [true, true, true, true, true] },
      { label: 'Creation & Implementation Of XML Sitemap', values: [true, true, true, true, true] },
      { label: 'Creation & Implementation Of HTML Sitemap', values: [true, true, true, true, true] },
      { label: 'Working With HTML Source Code', values: [true, true, true, true, true] },
      { label: 'Google Analytics Setup & Conversion Tracking', values: [true, true, true, true, true] },
      { label: 'Google Search Console Account Setup', values: [false, true, true, true, true] },
      { label: 'Bing Webmaster Tool Setup', values: [false, true, true, true, true] },
      { label: 'Image Optimization (Alt & Title Tags)', values: [false, true, true, true, true] },
      { label: 'Anchor Tag Optimization', values: [true, true, true, true, true] },
      { label: 'Heading Tag Optimization', values: [true, true, true, true, true] },
      { label: 'Existing Web Content Optimization', values: [true, true, true, true, true] },
      { label: 'URL Mapping', values: [true, true, true, true, true] },
      { label: 'Geo-Tagging', values: [false, true, true, true, true] },
      { label: 'Author Tag', values: [false, true, true, true, true] },
      { label: 'Canonical Tag', values: [true, true, true, true, true] }
    ]
  },
  {
    title: 'Content Marketing (Every Month)',
    rows: [
      { label: 'Article Writing', values: [1, 2, 4, 8, 12] },
      { label: 'Press Releases Writing', values: [false, 1, 2, 4, 6] },
      { label: 'Blog Content Writing', values: [1, 2, 4, 8, 12] },
      { label: 'Classified Ad Writing', values: [1, 2, 4, 8, 12] },
      { label: 'Infographics Content Writing', values: [false, true, true, true, true] }
    ]
  },
  {
    title: 'Local SEO Optimization (Every Month)',
    rows: [
      { label: 'Local Listings (Google My Business & Bing)', values: [false, true, true, true, true] },
      { label: 'Classified Submission', values: [7, 15, 30, 60, 90] },
      { label: 'Search Engine Submission', values: [false, true, true, true, true] }
    ]
  },
  {
    title: 'Off-Page Optimization And Link Strategy Factors (Every Month)',
    rows: [
      { label: 'Quality Social Bookmarking', values: [5, 10, 20, 40, 60] },
      { label: 'Article Submission', values: [1, 2, 4, 8, 12] },
      { label: 'Article Link Promotion', values: [5, 10, 20, 40, 60] },
      { label: 'Press Release Submission', values: [false, 5, 10, 20, 30] },
      { label: 'Press Release Promotion', values: [false, 5, 10, 20, 30] },
      { label: 'InfoGraphic Creation', values: [false, true, true, true, true] },
      { label: 'Infographic Distribution', values: [false, 3, 6, 12, 18] },
      { label: 'Link Syndication', values: [2, 5, 10, 20, 30] },
      { label: '"No Follow" Links Check', values: [false, true, true, true, true] },
      { label: 'Blog Setup', values: [true, true, true, true, true] },
      { label: 'Blog Optimization', values: [true, true, true, true, true] },
      { label: 'Blog Submission', values: [1, 2, 4, 8, 12] },
      { label: 'Blog Promotion', values: [5, 10, 20, 40, 60] }
    ]
  },
  {
    title: 'SEO Reports',
    rows: [
      { label: 'Bi-Weekly Search Engine Rank Report', values: [true, true, true, true, true] },
      { label: 'Bi-Weekly SEO Activity Reports', values: [true, true, true, true, true] },
      { label: 'Monthly Google Analytics Report', values: [true, true, true, true, true] }
    ]
  },
  {
    title: 'Customer Support',
    rows: [{ label: 'Email, Chat, Phone', values: [true, true, true, true, true] }]
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

export default function SeoPackages() {
  return (
    <div className="seo-packages-page">
      <SEO
        title="SEO Packages | Value, Bronze, Silver, Gold & Platinum — TBS Infotech"
        description="Compare TBS Infotech's monthly SEO packages — from the $125 Value plan to the $1050 Platinum plan — covering on-page, content, local and off-page SEO."
        keywords="SEO packages, monthly SEO plans, SEO pricing, affordable SEO packages"
      />
      <PackageHero title="Seo Packages" breadcrumbLabel="Seo Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=SEO+Packages" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Pick <span className="gradient">Your</span> Package</h2>
          <PricingMatrix planColumnLabel="Pick Your Package Keywords Plan Activities" plans={PLANS} groups={GROUPS} />

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
