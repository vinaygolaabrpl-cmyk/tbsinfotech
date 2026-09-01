import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';
import { openPaypalLink } from '../../utils/openPaypalLink';
import './PackagesShared.scss';
import reputationBanner from '../../assets/images/services/service_6_banner_img.jpg.jpeg';

const PLANS = [
  { name: 'Starter', price: '$150', paypalLink: '' },
  { name: 'Value', price: '$200', paypalLink: '' },
  { name: 'Premium', price: '$350', popular: true, paypalLink: '' },
  { name: 'Strategic', price: '$550', paypalLink: '' }
];

const GROUPS = [
  {
    title: 'Overview',
    rows: [
      { label: 'No. Of Keywords Protected & Monitored', values: ['Upto 5', 'Upto 10', 'Upto 15', 'As Required'] },
      { label: 'Search Positions Protected', values: ['Page 1', 'Page 1-2', 'Page 1-3', 'Page 1-3'] },
      { label: 'Search Positions Monitored', values: ['1 to 10', '1 to 20', '1 to 30', '1 to 30'] }
    ]
  },
  {
    title: 'Reputation Building',
    rows: [
      { label: 'Google Local Page Setup & Promotion', values: [true, true, true, true] },
      { label: 'Facebook – Setup & Promotion', values: [true, true, true, true] },
      { label: 'Twitter – Setup & Promotion', values: [true, true, true, true] },
      { label: 'LinkedIn – Setup & Promotion', values: [false, false, true, true] },
      { label: 'Flickr – Setup & Promotion', values: [false, false, false, true] },
      { label: 'Youtube – Setup & Promotion', values: [false, false, true, true] },
      { label: 'Brand Page In Apsense – Setup & Promotion', values: [false, false, false, true] },
      { label: 'Development Of Micro Sites', values: [false, false, true, true] },
      { label: 'Social Media Bookmarking', values: [10, 10, 40, 80] },
      { label: 'Setup, Linking & Promotion Of Business Profiles', values: [true, true, true, true] },
      { label: 'Article Writing', values: [1, 2, 4, 8] },
      { label: 'Article Submissions', values: [5, 10, 20, 40] },
      { label: 'Article Marketing', values: [false, false, true, true] },
      { label: 'Press Release Writing', values: [false, 1, 2, 4] },
      { label: 'Press Release Submissions', values: [false, 5, 10, 20] },
      { label: 'Blog Setup & Social Commentary', values: [false, false, true, true] },
      { label: 'Blog Writing', values: [false, false, 2, 4] },
      { label: 'Blog Postings', values: [false, false, 2, 4] },
      { label: 'Blog Promotion', values: [false, false, true, true] },
      { label: 'Forum Profiles Setup & Social Commentary Campaign', values: [false, false, 5, 10] },
      { label: 'Forum Site Review With Aged Accounts', values: [false, false, true, true] },
      { label: 'Squidoo Lens Setup', values: [false, false, true, true] },
      { label: 'Hub Pages Creation', values: [false, true, true, true] },
      { label: 'Yahoo Answers Profile, Setup & Linking', values: [false, false, false, true] },
      { label: 'Wikipedia Profile Setup & Linking', values: [false, false, false, true] },
      { label: 'Photo Sharing', values: [false, false, false, true] },
      { label: 'Customer Review Campaigns', values: [true, true, true, true] },
      { label: 'PPT Creation', values: [1, 2, 4, 8] },
      { label: 'Slideshare Submission', values: [true, true, true, true] },
      { label: 'Video Creations', values: [false, false, 1, 2] },
      { label: 'Video Submissions', values: [false, false, 5, 10] },
      { label: 'Video Promotion', values: [false, false, true, true] },
      { label: 'Guest Blogger Posts', values: [false, false, true, true] }
    ]
  },
  {
    title: 'Reporting & Support',
    rows: [
      { label: 'Monthly Assessment Of Current Online Reputation + Recommendation Plan', values: [true, true, true, true] },
      { label: 'Monthly Report And Updates Pertaining To Keywords Identified', values: [true, true, true, true] },
      { label: 'Google Analysis Report', values: [false, false, true, true] },
      { label: 'E-Mail/Call/Skype Support', values: [true, true, true, true] }
    ]
  }
];

export default function ReputationManagementPackage() {
  return (
    <div className="reputation-management-page">
      <SEO
        title="Reputation Management Package | Online Reputation & Review Management — TBS Infotech"
        description="Starter, Value, Premium and Strategic reputation management packages covering brand profile building, review campaigns and monthly monitoring."
        keywords="reputation management package, online reputation management, ORM services, review management"
      />
      <PackageHero title="Reputation Management Package" breadcrumbLabel="Reputation Management Package" image="https://placehold.co/1600x400/05080f/22d3ee?text=Reputation+Management" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Reputation <span className="gradient">Management</span> Package</h2>
          <PricingMatrix
            plans={PLANS}
            groups={GROUPS}
            ctaLabel="Order Now!"
            onCta={(plan) => openPaypalLink(plan.paypalLink)}
          />
        </div>
      </section>
    </div>
  );
}
