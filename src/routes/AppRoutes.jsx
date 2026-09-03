import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import WebDevelopment from '../pages/Services/WebDevelopment';
import AppDevelopment from '../pages/Services/AppDevelopment';
import SeoGeoServices from '../pages/Services/SeoGeoServices';
import SocialMediaOptimization from '../pages/Services/SocialMediaOptimization';
import GoogleAdsMetaAds from '../pages/Services/GoogleAdsMetaAds';
import ContentBlogs from '../pages/Services/ContentBlogs';
import ServiceDetail from '../pages/Services/ServiceDetail';
import Packages from '../pages/Packages/Packages';
import PackageDetail from '../pages/Packages/PackageDetail';
import Portfolio from '../pages/Portfolio/Portfolio';
import PaidAdvertisingPortfolio from '../pages/Portfolio/PaidAdvertisingPortfolio';
import SeoCaseStudy from '../pages/SeoCaseStudy/SeoCaseStudy';
import CaseStudyDetail from '../pages/CaseStudies/CaseStudyDetail';
import Faq from '../pages/Faq/Faq';
import ClientReviews from '../pages/ClientReviews/ClientReviews';
import Contact from '../pages/Contact/Contact';
import Career from '../pages/Career/Career';
import Blog from '../pages/Blog/Blog';
import BlogDetail from '../pages/Blog/BlogDetail';
import FreeSeoAudit from '../pages/FreeSeoAudit/FreeSeoAudit';
import SeoPackages from '../pages/Packages/SeoPackages';
import AeoSeoPackages from '../pages/Packages/AeoSeoPackages';
import OneTimeSeoPackages from '../pages/Packages/OneTimeSeoPackages';
import LocalSeoPackages from '../pages/Packages/LocalSeoPackages';
import SmoPackages from '../pages/Packages/SmoPackages';
import PpcPackages from '../pages/Packages/PpcPackages';
import WebDesigningPackages from '../pages/Packages/WebDesigningPackages';
import ContentWritingPackages from '../pages/Packages/ContentWritingPackages';
import ReputationManagementPackage from '../pages/Packages/ReputationManagementPackage';
import BadLinkRemovalPackages from '../pages/Packages/BadLinkRemovalPackages';
import PrivacyPolicy from '../pages/Legal/PrivacyPolicy';
import TermsOfUse from '../pages/Legal/TermsOfUse';
import Sitemap from '../pages/Legal/Sitemap';
import NotFound from '../pages/NotFound/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Services overview */}
        <Route path="/services" element={<Services />} />

        {/* Dedicated, content-rich service pages — must come before the
            generic "/services/:slug" catch-all below so they take priority. */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/app-development" element={<AppDevelopment />} />
        <Route path="/services/seo-geo-services" element={<SeoGeoServices />} />
        <Route path="/services/social-media" element={<SocialMediaOptimization />} />
        <Route path="/services/google-ads-meta-ads" element={<GoogleAdsMetaAds />} />
        <Route path="/services/content-blogs" element={<ContentBlogs />} />

        {/* Generic template for any other service slug */}
        <Route path="/services/:slug" element={<ServiceDetail />} />

        <Route path="/packages" element={<Packages />} />

        {/* Dedicated package category pages — before the generic "/packages/:slug" catch-all below. */}
        <Route path="/packages/seo-packages" element={<SeoPackages />} />
        <Route path="/packages/aeo-seo-packages" element={<AeoSeoPackages />} />
        <Route path="/packages/one-time-seo-packages" element={<OneTimeSeoPackages />} />
        <Route path="/packages/local-seo-packages" element={<LocalSeoPackages />} />
        <Route path="/packages/smo-packages" element={<SmoPackages />} />
        <Route path="/packages/ppc-packages" element={<PpcPackages />} />
        <Route path="/packages/web-designing-packages" element={<WebDesigningPackages />} />
        <Route path="/packages/content-writing-packages" element={<ContentWritingPackages />} />
        <Route path="/packages/reputation-management-package" element={<ReputationManagementPackage />} />
        <Route path="/packages/bad-link-removal-packages" element={<BadLinkRemovalPackages />} />

        <Route path="/packages/:slug" element={<PackageDetail />} />

        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/paid-advertising-portfolio" element={<PaidAdvertisingPortfolio />} />

        <Route path="/seo-case-study" element={<SeoCaseStudy />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/client-reviews" element={<ClientReviews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/free-seo-audit" element={<FreeSeoAudit />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
