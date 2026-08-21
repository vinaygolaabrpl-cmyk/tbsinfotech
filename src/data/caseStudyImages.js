import hookahFilters from '../assets/images/Rectangle 342.png';
import bangerRally from '../assets/images/Rectangle 348.png';
import whiteRabbitSkincare from '../assets/images/Rectangle 353.png';

// JSON data can't reference build assets directly (a plain string path won't
// survive Vite's production hashing), so case studies are looked up by slug
// against real imports here instead.
export const caseStudyImages = {
  'hookah-filters': hookahFilters,
  'banger-rally': bangerRally,
  'white-rabbit-skincare': whiteRabbitSkincare
};
