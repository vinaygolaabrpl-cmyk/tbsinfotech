import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import TierCards from '../../components/common/TierCards';
import './PackagesShared.scss';

const TIERS = [
  {
    name: 'Bronze',
    price: '$250',
    billing: 'Month',
    features: [
      { label: 'Suggested Number of Keywords 50', included: true },
      { label: 'Network Account Set-Up (Google Adwords)', included: true },
      { label: 'Campaign Set-Up', included: true },
      { label: 'Keyword Optimization', included: true },
      { label: 'Ad Copy Optimization', included: true },
      { label: 'Conversion Tracking', included: true },
      { label: 'Display Ad (Banner/Image Ads)', included: false },
      { label: 'Text Ad', included: true },
      { label: 'Extension Setup & Optimization', included: true },
      { label: 'Google Shopping Feed Management (Ecommerce Website)', included: false },
      { label: 'Remarketing', included: false },
      { label: 'ROI Tracking', included: true },
      { label: 'A/B Testing', included: false },
      { label: 'Landing Page Optimization', included: true },
      { label: 'Google Analytics Setup', included: true },
      { label: 'Monthly Reports', included: true }
    ]
  },
  {
    name: 'Silver',
    price: '$450',
    billing: 'Month',
    popular: true,
    features: [
      { label: 'Suggested Number of Keywords 100', included: true },
      { label: 'Network Account Set-Up (Microsoft Adcenter, Google Adwords)', included: true },
      { label: 'Campaign Set-Up', included: true },
      { label: 'Keyword Optimization', included: true },
      { label: 'Ad Copy Optimization', included: true },
      { label: 'Conversion Tracking', included: true },
      { label: 'Display Ad (Banner/Image Ads)', included: false },
      { label: 'Text Ad', included: true },
      { label: 'Extension Setup & Optimization', included: true },
      { label: 'Google Shopping Feed Management (Ecommerce Website)', included: true },
      { label: 'Remarketing', included: true },
      { label: 'ROI Tracking', included: true },
      { label: 'A/B Testing', included: false },
      { label: 'Landing Page Optimization', included: true },
      { label: 'Google Analytics Setup', included: true },
      { label: 'Monthly Reports', included: true }
    ]
  },
  {
    name: 'Gold',
    price: '$650',
    billing: 'Month',
    features: [
      { label: 'Suggested Number of Keywords Unlimited', included: true },
      { label: 'Network Account Set-Up (Microsoft Adcenter, Google Adwords, Facebook)', included: true },
      { label: 'Campaign Set-Up', included: true },
      { label: 'Keyword Optimization', included: true },
      { label: 'Ad Copy Optimization', included: true },
      { label: 'Conversion Tracking', included: true },
      { label: 'Display Ad (Banner/Image Ads)', included: true },
      { label: 'Text Ad', included: true },
      { label: 'Extension Setup & Optimization', included: true },
      { label: 'Google Shopping Feed Management (Ecommerce Website)', included: true },
      { label: 'Remarketing', included: true },
      { label: 'ROI Tracking', included: true },
      { label: 'A/B Testing', included: true },
      { label: 'Landing Page Optimization', included: true },
      { label: 'Google Analytics Setup', included: true },
      { label: 'Monthly Reports', included: true }
    ]
  }
];

export default function PpcPackages() {
  return (
    <div className="ppc-packages-page">
      <SEO
        title="PPC Packages | Google Ads Management Pricing — TBS Infotech"
        description="Bronze, Silver and Gold PPC management packages covering campaign setup, keyword and ad copy optimization, remarketing and ROI tracking."
        keywords="PPC packages, Google Ads management pricing, pay per click packages"
      />
      <PackageHero title="PPC Packages" breadcrumbLabel="PPC Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=PPC+Packages" />

      <section className="section">
        <div className="container">
          <SectionTitle title="PPC Packages" />
          <TierCards tiers={TIERS} ctaLabel="Contact Us" ctaTo="/contact" />
        </div>
      </section>
    </div>
  );
}
