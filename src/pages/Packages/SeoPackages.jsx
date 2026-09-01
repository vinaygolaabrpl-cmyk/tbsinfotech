import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';
import { openPaypalLink } from '../../utils/openPaypalLink';
import './PackagesShared.scss';
import seoPackagesBanner from '../../assets/images/services/service_1_banner_img.jpg.jpeg';

const PLANS = [
  { name: 'Value', price: '$125', billing: 'Per Month', note: 'Up To 10 Keywords', paypalLink: '' },
  { name: 'Bronze', price: '$225', billing: 'Per Month', note: 'Up To 25 Keywords', paypalLink: '' },
  { name: 'Silver', price: '$400', billing: 'Per Month', note: 'Up To 50 Keywords', popular: true, paypalLink: '' },
  { name: 'Gold', price: '$700', billing: 'Per Month', note: 'Up To 100 Keywords', paypalLink: '' },
  { name: 'Platinum', price: '$1050', billing: 'Per Month', note: 'Up To 150 Keywords', paypalLink: '' }
];

const GROUPS = [
  {
    title: 'Initial Review & Analysis (SEO + AEO)',
    rows: [
      { label: 'Foundation Setup (SEO + AEO)', values: [true, true, true, true, true] },
      { label: 'AI-Driven SEO Strategy Development', values: [true, true, true, true, true] },
      { label: 'AI-Driven Competitor Analysis', values: [false, true, true, true, true] },
      { label: 'SEO Research & Analysis', values: ['Up To 5', 'Up To 10', 'Up To 20', 'Up To 25', 'Up To 30'] },
      { label: 'SEO Keyword Research', values: ['Up To 10', 'Up To 25', 'Up To 50', 'Up To 100', 'Up To 150'] },
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
    title: 'On-Page Optimization & AI Implementation',
    rows: [
      { label: 'AI-Optimized Meta Tags (Title & Description)', values: ['10 Web Page (Max)', '20 Web Page (Max)', '40 Web Page (Max)', '75 Web Page (Max)', '100 Web Page (Max)'] },
      { label: 'Automated Header Structure Optimization', values: [true, true, true, true, true] },
      { label: 'Internal Linking Suggestions', values: [true, true, true, true, true] },
      { label: 'Image Optimization (Alt & Title Tags)', values: [true, true, true, true, true] },
      { label: 'Schema Markup Generation & Implementation', values: [true, true, true, true, true] },
      { label: 'AEO AI-Driven Web Content Optimization', values: [false, true, true, true, true] },
      { label: 'Robots.txt Creation & Analysis', values: [true, true, true, true, true] },
      { label: 'Creation & Implementation Of XML Sitemap', values: [false, true, true, true, true] },
      { label: 'Creation & Implementation Of HTML Sitemap', values: [false, true, true, true, true] },
      { label: 'Google Analytics Setup & Conversion Tracking', values: [false, true, true, true, true] },
      { label: 'Google Search Console Account Setup', values: [true, true, true, true, true] },
      { label: 'Bing Webmaster Tool Setup', values: [true, true, true, true, true] },
      { label: 'Anchor Tag Optimization', values: [true, true, true, true, true] },
      { label: 'Heading Tag Optimization', values: [true, true, true, true, true] },
      { label: 'URL Mapping', values: [false, true, true, true, true] },
      { label: 'Geo-Tagging', values: [true, true, true, true, true] },
      { label: 'Canonical Tag', values: [true, true, true, true, true] }
    ]
  },
  {
    title: 'AEO AI-Driven Content Marketing',
    rows: [
      { label: 'Informational Article Writing', values: [1, 2, 3, 5, 7] },
      { label: 'Press Releases Writing', values: [false, 1, 1, 2, 3] },
      { label: 'Premium Press Releases Writing', values: [false, false, 1, 1, 1] },
      { label: 'Guest Blog Writing', values: [false, false, 1, 2, 5] },
      { label: 'Infographic Content Writing', values: [false, true, true, true, true] },
      { label: 'Classified Ad Writing', values: [1, 2, 3, 4, 5] },
      { label: 'Blog Content Writing', values: [1, 2, 3, 5, 7] }
    ]
  },
  {
    title: 'Local SEO Optimization',
    rows: [
      { label: 'Local Listings (Google My Business & Bing)', values: [false, true, true, true, true] },
      { label: 'Google Business Page Posting', values: [false, 8, 12, 16, 20] },
      { label: 'GMB Listing Promotions', values: [false, true, true, true, true] },
      { label: 'Business Listings', values: [false, true, true, true, true] },
      { label: 'Quora Answers', values: [false, true, true, true, true] },
      { label: 'Classified Submission', values: [7, 15, 30, 60, 90] },
      { label: 'NAP & Brand Consistency Across The Web', values: [true, true, true, true, true] },
      { label: 'Search Engine Submission (One Time)', values: [false, true, true, true, true] }
    ]
  },
  {
    title: 'Off-Page Optimization',
    rows: [
      { label: 'Quality Social Bookmarking', values: [5, 10, 15, 20, 30] },
      { label: 'Premium Press Release Submission', values: [false, false, 1, 1, 1] },
      { label: 'Premium PR Distribution', values: [false, false, 5, 5, 5] },
      { label: 'Guest Blog Posting', values: [false, false, 1, 2, 5] },
      { label: 'Guest Blog Posting Promotions', values: [false, false, 5, 10, 15] },
      { label: 'Article Submission', values: [1, 2, 3, 5, 7] },
      { label: 'Article Link Promotion', values: [5, 10, 15, 20, 30] },
      { label: 'Press Release Submission', values: [false, 3, 5, 10, 15] },
      { label: 'Press Release Promotion', values: [false, 5, 10, 20, 30] },
      { label: 'InfoGraphic Creation', values: [false, true, true, true, true] },
      { label: 'Infographic Distribution', values: [false, 3, 5, 10, 15] },
      { label: 'Blog Setup', values: [true, true, true, true, true] },
      { label: 'Blog Optimization', values: [true, true, true, true, true] },
      { label: 'Blog Submission', values: [1, 2, 3, 5, 7] },
      { label: 'Blog Promotion', values: [5, 10, 15, 20, 30] }
    ]
  },
  {
    title: 'AI Technical Website Analysis',
    rows: [
      { label: 'New Web Blog Suggestions (AI Based)', values: Array(5).fill('One Time Additional Cost') },
      { label: 'Page Speed & Core Web Vitals Optimization', values: Array(5).fill('One Time Additional Cost') },
      { label: 'Mobile-First Optimization', values: Array(5).fill('One Time Additional Cost') },
      { label: 'FAQs With Direct Answers', values: Array(5).fill('One Time Additional Cost') },
      { label: 'FAQ Schema', values: Array(5).fill('One Time Additional Cost') },
      { label: 'AI-Friendly Web Pages Suggestions', values: Array(5).fill('One Time Additional Cost') },
      { label: 'Broken Link Fix', values: Array(5).fill('One Time Additional Cost') }
    ]
  },
  {
    title: 'SEO Reports',
    rows: [
      { label: 'Bi-Weekly Search Engine Rank Report', values: [true, true, true, true, true] },
      { label: 'Bi-Weekly SEO Activity Reports', values: [true, true, true, true, true] },
      { label: 'Monthly AI Visibility Report', values: [false, true, true, true, true] },
      { label: 'Monthly Google Analytics Report', values: [false, true, true, true, true] },
      { label: 'Email, Chat, Phone Support', values: [true, true, true, true, true] }
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