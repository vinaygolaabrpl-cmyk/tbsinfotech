import { FiSmartphone, FiLayers } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import PageHero from '../../components/common/PageHero';
import BlufCallout from '../../components/common/BlufCallout';
import SystemDiagram from '../../components/common/SystemDiagram';
import NumberedFeatureGrid from '../../components/common/NumberedFeatureGrid';
import DataTable from '../../components/common/DataTable';
import FaqAccordion from '../../components/common/FaqAccordion';
import appDevBanner from '../../assets/images/services/service_2_banner_img.jpg.jpeg';

const ENGINE_BRANCHES = [
  { icon: <FiSmartphone />, title: 'Native Development', items: ['iOS: Swift', 'Android: Kotlin', 'Maximum Hardware Access'] },
  { icon: <FiLayers />, title: 'Cross-Platform Engines', items: ['React Native', 'Flutter', 'Unified Codebase Deployments'] }
];

const NATIVE_FEATURES = [
  { title: 'Swift & Kotlin Codebases', desc: 'High-performance, OS-native applications built to adapt directly to Apple and Google software updates.' },
  { title: 'Hardware API Integrations', desc: 'Full integration with biometric security, device camera streams, Bluetooth protocols, and local storage pipelines.' }
];

const CROSS_PLATFORM_FEATURES = [
  { title: 'Unified Development', desc: 'Shared cross-platform codebases that lower development costs by up to 40%.' },
  { title: 'Consistent UI/UX Execution', desc: 'Identical visual styling across mobile screen sizes and aspect ratios.' }
];

const MATRIX_TABLE = {
  headers: ['Metric / Consideration', 'Native (Swift / Kotlin)', 'Cross-Platform (React Native / Flutter)'],
  rows: [
    { label: 'Hardware Processing Speed', values: ['Maximum Possible', 'High (Near-Native)'] },
    { label: 'Code Reusability', values: ['OS Specific (0%)', 'High (Up to 85%)'] },
    { label: 'Development Timeline', values: ['Extended', 'Accelerated'] },
    { label: 'Ideal Application Type', values: ['Heavy Hardware Apps / 3D Graphics', 'E-Commerce, Portals, SaaS Extensions'] }
  ]
};

const FAQS = [
  {
    id: 'ad-1',
    question: 'How does Think Biz Solution handle App Store and Google Play submissions?',
    answer: 'Our engineering team manages the complete submission, app review documentation, asset preparation, and launch approval process across both official stores.'
  },
  {
    id: 'ad-2',
    question: 'How do you ensure user data security within the mobile app?',
    answer: 'We enforce end-to-end data encryption, secure token authentication, biometric login integrations, and regular vulnerability patches aligned with global privacy standards.'
  },
  {
    id: 'ad-3',
    question: 'Do you provide post-launch application maintenance and updates?',
    answer: 'Yes. We offer maintenance retainers covering OS update patches, bug fixes, feature expansion, and API integrations.'
  }
];

export default function AppDevelopment() {
  return (
    <div className="app-development-page">
      <SEO
        title="App Development | Native & Cross-Platform Mobile Apps — TBS Infotech"
        description="Think Biz Solution designs, builds, and deploys high-performance mobile applications for iOS and Android with native APIs and secure cloud backends."
        keywords="mobile app development, iOS app development, Android app development, React Native, Flutter"
      />

      <PageHero
        eyebrow="Services / App Development"
        title="Enterprise Mobile Engineering: Native & Cross-Platform Apps"
        description="Think Biz Solution Private Limited designs, builds, and deploys high-performance mobile applications for iOS and Android. Combining user-centered UX design, native API integrations, and secure cloud backends, we deliver scalable mobile applications engineered for global store distribution."
        image={appDevBanner}
        imageAlt="Native and cross-platform mobile app engineering"
      />

      <BlufCallout>
        High-performance iOS and Android applications combining user-centered UX design, native API integrations,
        and secure cloud backends — engineered for global store distribution.
      </BlufCallout>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Frameworks" title="Native vs. Cross-Platform Frameworks" />
          <SystemDiagram hub="Mobile Application Engine" branches={ENGINE_BRANCHES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Native" title="Native iOS & Android Development" align="left" />
          <NumberedFeatureGrid items={NATIVE_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Cross-Platform" title="Cross-Platform Frameworks (React Native & Flutter)" align="left" />
          <NumberedFeatureGrid items={CROSS_PLATFORM_FEATURES} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Comparison" title="Framework Capability Matrix" />
          <DataTable headers={MATRIX_TABLE.headers} rows={MATRIX_TABLE.rows} />
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
