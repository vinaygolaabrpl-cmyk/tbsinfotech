import aiSeoGeo from '../assets/images/services/service_1_banner_img.jpg.jpeg';
import localSeo from '../assets/images/services/service_2_banner_img.jpg.jpeg';
import googleAdsMeta from '../assets/images/services/service_3_banner_img.jpg.jpeg';
import webApp from '../assets/images/services/service_4_banner_img.jpg.jpeg';
import branding from '../assets/images/services/service_5_banner_img.jpg.jpeg';
import hosting from '../assets/images/services/service_6_banner_img.jpg.jpeg';
import socialMedia from '../assets/images/services/ourwork_1_banner_img.jpg.jpeg';
import productDevelopment from '../assets/images/services/ourwork_2_banner_img.jpg.jpeg';
import appDevelopment from '../assets/images/services/aboutus_banner_img.jpg.jpeg';
import contentBlogs from '../assets/images/services/service_banner_img.jpg.jpeg';

// JSON data can't reference build assets directly (a plain string path won't
// survive Vite's production hashing), so service images are looked up by
// slug against real imports here instead — same pattern as caseStudyImages.
export const servicesImages = {
  'ai-seo-geo-services': aiSeoGeo,
  'search-engine-optimization': localSeo,
  'ppc-advertising-service-india': googleAdsMeta,
  'web-development': webApp,
  'branding': branding,
  'hosting-maintenance': hosting,
  'social-media': socialMedia,
  'product-development': productDevelopment,
  'app-development': appDevelopment,
  'seo-geo-services': aiSeoGeo,
  'google-ads-meta-ads': googleAdsMeta,
  'content-blogs': contentBlogs
};
