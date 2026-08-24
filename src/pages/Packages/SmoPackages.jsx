import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import PricingMatrix from '../../components/common/PricingMatrix';
import { openPaypalLink } from '../../utils/openPaypalLink';
import './PackagesShared.scss';

const PLANS = [
  { name: 'Bronze', price: '$150', billing: 'Per Month', paypalLink: '' },
  { name: 'Silver', price: '$250', billing: 'Per Month', popular: true, paypalLink: '' },
  { name: 'Gold', price: '$350', billing: 'Per Month', paypalLink: '' },
  { name: 'Platinum', price: '$450', billing: 'Per Month', paypalLink: '' }
];

const GROUPS = [
  {
    title: 'Facebook',
    rows: [
      { label: 'Page Creation', values: [true, true, true, true] },
      { label: 'Facebook Cover And Profile Pic Creation', values: [true, true, true, true] },
      { label: 'Page Optimization', values: [true, true, true, true] },
      { label: 'Posting Per Week', values: [2, 3, 5, 10] },
      { label: 'Facebook Story Creation', values: [false, true, true, true] },
      { label: 'Post Sharing In Groups', values: [false, false, true, true] },
      { label: 'Video Creation', values: [false, false, true, true] },
      { label: 'Video Posting', values: [false, false, true, true] },
      { label: 'Page Monitoring', values: [true, true, true, true] },
      { label: 'Facebook Tabs Creation', values: [true, true, true, true] },
      { label: 'Call To Action Button Creation', values: [true, true, true, true] },
      { label: 'Influencer Research', values: [false, false, true, true] },
      { label: 'Creation Of Facebook Polls/Quizzes', values: [false, false, true, true] },
      { label: 'Responding To Comments', values: [false, true, true, true] },
      { label: 'Competitor Analysis', values: [false, true, true, true] }
    ]
  },
  {
    title: 'Instagram',
    rows: [
      { label: 'Page Creation', values: [true, true, true, true] },
      { label: 'Page Optimization', values: [true, true, true, true] },
      { label: 'Posting Per Week', values: [2, 3, 5, 10] },
      { label: 'Engagement Strategy', values: [true, true, true, true] },
      { label: 'Instagram Stories Creation', values: [false, true, true, true] },
      { label: 'Competitors Analysis', values: [false, true, true, true] },
      { label: 'Responding To Comments', values: [false, true, true, true] },
      { label: 'Link With Facebook Page', values: [true, true, true, true] },
      { label: 'IGTV Upload', values: [false, false, true, true] },
      { label: 'Outreach With Influencers', values: [false, false, true, true] },
      { label: 'Image Tagging', values: [true, true, true, true] },
      { label: 'Instagram Analytics Monitoring', values: [true, true, true, true] }
    ]
  },
  {
    title: 'Twitter',
    rows: [
      { label: 'Profile Creation', values: [true, true, true, true] },
      { label: 'Profile & Background Picture Creation', values: [true, true, true, true] },
      { label: 'Tweet Per Week', values: [2, 3, 5, 10] },
      { label: 'Retweets', values: [false, true, true, true] },
      { label: 'List Creation', values: [true, true, true, true] },
      { label: 'Active In Trending Hashtag', values: [false, true, true, true] },
      { label: 'Creation Of Poll', values: [false, false, true, true] },
      { label: 'Following Industry Related People', values: [true, true, true, true] },
      { label: 'Creation Of Moments', values: [false, true, true, true] },
      { label: 'Twitter Analytics Monitoring', values: [true, true, true, true] }
    ]
  },
  {
    title: 'LinkedIn',
    rows: [
      { label: 'Profile Creation', values: [true, true, true, true] },
      { label: 'Profile Pic & Cover Pic Creation', values: [true, true, true, true] },
      { label: 'Profile Optimization', values: [true, true, true, true] },
      { label: 'Company Page Creation', values: [true, true, true, true] },
      { label: 'Competitors Analysis', values: [false, true, true, true] },
      { label: 'Video Posting', values: [false, false, true, true] },
      { label: 'Posting Per Week', values: [2, 3, 5, 10] },
      { label: 'Creation Of Showcase Page', values: [true, true, true, true] },
      { label: 'Invite Connection To Like Your Page', values: [false, true, true, true] },
      { label: 'Responding To Comments', values: [false, false, true, true] },
      { label: 'Relevant Group Joining', values: [false, false, true, true] },
      { label: 'Sharing In Groups', values: [false, false, true, true] }
    ]
  },
  {
    title: 'Pinterest',
    rows: [
      { label: 'Profile Creation', values: [true, true, true, true] },
      { label: 'Board Creation', values: [true, true, true, true] },
      { label: 'Content Creation', values: [true, true, true, true] },
      { label: 'Posting Per Week - 10', values: [2, 3, 5, 10] },
      { label: 'Business Account Creation', values: [true, true, true, true] },
      { label: 'Monthly Visitors Analysis', values: [false, true, true, true] },
      { label: 'Follow Relevant Account And Boards', values: [false, true, true, true] },
      { label: 'Inviting Relevant Pinners On Board', values: [false, true, true, true] }
    ]
  },
  {
    title: 'Youtube',
    rows: [
      { label: 'Channel Creation', values: [true, true, true, true] },
      { label: 'Channel Pic & Cover Pic Creation', values: [true, true, true, true] },
      { label: 'Video Optimization', values: [true, true, true, true] },
      { label: 'Thumbnail Creation', values: [true, true, true, true] },
      { label: 'Keyword Research', values: [true, true, true, true] },
      { label: 'Youtube Status Posting', values: [true, true, true, true] },
      { label: 'Comment Moderation', values: [false, false, true, true] },
      { label: 'End Screen Cards Creation', values: [false, false, true, true] },
      { label: 'Information Cards Creation', values: [false, false, true, true] },
      { label: 'Video Tags Creation', values: [true, true, true, true] },
      { label: 'Playlist Creation', values: [true, true, true, true] },
      { label: 'Youtube Analytics Monitoring', values: [false, true, true, true] },
      { label: 'Competitors Analysis', values: [false, true, true, true] },
      { label: 'Video Backlinks', values: [false, 5, 10, 20] }
    ]
  },
  {
    title: 'Project Update',
    rows: [
      { label: 'Monthly SMO Reports', values: [true, true, true, true] },
      { label: 'Monthly Social Media Insight Reports', values: [true, true, true, true] }
    ]
  },
  {
    title: 'Support',
    rows: [
      { label: 'Phone Support', values: [true, true, true, true] },
      { label: 'E-Mail/Chat/Skype Support', values: [true, true, true, true] }
    ]
  }
];

export default function SmoPackages() {
  return (
    <div className="smo-packages-page">
      <SEO
        title="SMO Packages | Social Media Optimization Pricing — TBS Infotech"
        description="Bronze, Silver, Gold and Platinum Social Media Optimization packages covering Facebook, Instagram, Twitter, LinkedIn, Pinterest and YouTube management."
        keywords="SMO packages, social media optimization pricing, social media management packages"
      />
      <PackageHero title="SMO Packages" breadcrumbLabel="SMO Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=SMO+Packages" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Social Media <span className="gradient">Optimization</span> Packages</h2>
          <PricingMatrix
            planColumnLabel="Activities"
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
