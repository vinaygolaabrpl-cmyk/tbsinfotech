import whiteRabbitSkincare from '@/assets/images/caseStudies/Rectangle 353.png';
import adopsStaffing from '@/assets/images/caseStudies/casestudies_adopsstaffing.jpg.jpeg';
import alsharqEntertainment from '@/assets/images/caseStudies/casestudies_alsharq-entertainment.jpg.jpeg';
import churchillRetirement from '@/assets/images/caseStudies/casestudies_churchillretirement.jpg.jpeg';
import dghalchiLaw from '@/assets/images/caseStudies/casestudies_dghalchilaw.jpg.jpeg';
import proviHouse from '@/assets/images/caseStudies/casestudies_provihouse.jpg.jpeg';
import stonehavenSl from '@/assets/images/caseStudies/casestudies_stonehavensl.jpg.jpeg';
import theCouchCounselling from '@/assets/images/caseStudies/casestudies_thecouchcounselling.jpg.jpeg';
import treppenliftKaufenNrw from '@/assets/images/caseStudies/casestudies_treppenlift-kaufen-nrw.jpg.jpeg';

// JSON data can't reference build assets directly (a plain string path won't
// survive Vite's production hashing), so case studies are looked up by slug
// against real imports here instead. Every screen size should read from this
// same map, so there is one source of truth for desktop, tablet, and mobile —
// as long as the rendering component(s) key off caseStudyImages[slug] rather
// than hardcoding a path of their own.
export const caseStudyImages = {
  'white-rabbit-skincare': whiteRabbitSkincare,
  'adopsstaffing': adopsStaffing,
  'alsharq-entertainment': alsharqEntertainment,
  'churchillretirement': churchillRetirement,
  'dghalchilaw': dghalchiLaw,
  'provihouse': proviHouse,
  'stonehavensl': stonehavenSl,
  'thecouchcounselling': theCouchCounselling,
  'treppenlift-kaufen-nrw': treppenliftKaufenNrw
};
