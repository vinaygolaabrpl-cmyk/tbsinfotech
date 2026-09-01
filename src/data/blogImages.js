import blogImage1 from '../assets/images/blog/tbs_blog1.jpg';
import blogImage2 from '../assets/images/blog/tbs_blog2.jpg';
import blogImage3 from '../assets/images/blog/tbs_blog3.jpg';
import blogImage4 from '../assets/images/blog/tbs_blog4.jpg';
import blogImage5 from '../assets/images/blog/tbs_blog5.jpg';
import blogImage6 from '../assets/images/blog/tbs_blog6.jpg';
import blogImage7 from '../assets/images/blog/tbs_blog7.jpg';
import blogImage8 from '../assets/images/blog/tbs_blog8.jpg';
import blogImage9 from '../assets/images/blog/tbs_blog9.jpg';
// JSON data can't reference build assets directly (a plain string path won't
// survive Vite's production hashing), so blog cover images are looked up by
// slug against real imports here instead — same pattern as caseStudyImages
// and servicesImages. No dedicated "blog" asset folder was provided, so
// these reuse the existing service banner images rather than relying on
// external placehold.co images (which can render blank if that host is
// unreachable).
export const blogImages = {
  'generative-engine-optimization-2026': blogImage1,
  'entity-first-content-models': blogImage2,
  'beyond-roas-incrementality': blogImage3,
  'core-web-vitals-for-react-apps': blogImage4
};
