export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE_DETAIL: (slug) => `/services/${slug}`,
  PACKAGES: '/packages',
  PACKAGE_DETAIL: (slug) => `/packages/${slug}`,
  PORTFOLIO: '/portfolio',
  SEO_CASE_STUDY: '/seo-case-study',
  CLIENT_REVIEWS: '/client-reviews',
  CONTACT: '/contact',
  CAREER: '/career',
  BLOG: '/blog'
};

export const BREAKPOINTS = {
  mobile: 576,
  tablet: 992,
  desktop: 1200
};
