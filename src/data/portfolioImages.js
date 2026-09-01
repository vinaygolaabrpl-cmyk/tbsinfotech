import adopsStaffing from '../assets/images/portfolio/adopsstaffing.jpg.jpeg';
import alsharqEntertainment from '../assets/images/portfolio/alsharq-entertainment.jpg.jpeg';
import beepvision from '../assets/images/portfolio/beepvission.png';
import churchillEstatesRetirement from '../assets/images/portfolio/churchillretirement.jpg.jpeg';
import dghalchiLaw from '../assets/images/portfolio/dghalchilaw.jpg.jpeg';
import dragonsDen from '../assets/images/portfolio/dragonsdenchinesefood.jpg.jpeg';
import lmaoConstruction from '../assets/images/portfolio/lmaoconstruction.jpg.jpeg';
import macesMalinois from '../assets/images/portfolio/macesmalinois.jpg.jpeg';
import northcharge from '../assets/images/portfolio/northcharge.jpg.jpeg';
import providenceAssistedLiving from '../assets/images/portfolio/provihouse.jpg.jpeg';
import stonehavenSeniorLiving from '../assets/images/portfolio/stonehavensl.jpg.jpeg';
import theCouchCounselling from '../assets/images/portfolio/thecouchcounselling.jpg.jpeg';
import treppenliftExpertenNrw from '../assets/images/portfolio/treppenlift-kaufen-nrw.jpg.jpeg';
import voyagesALaMecque from '../assets/images/portfolio/voyagesalamecque.jpg.jpeg';
import westCentralDevelopmentGroup from '../assets/images/portfolio/wccdg.jpg.jpeg';

// JSON data can't reference build assets directly (a plain string path won't
// survive Vite's production hashing, and filenames with spaces served from
// /public can render blank on some hosts), so portfolio images are looked
// up by slug against real imports here instead — same pattern as
// caseStudyImages, servicesImages and blogImages. Every screen size reads
// from this same map, so there is a single source of truth for desktop,
// tablet, and mobile — as long as the rendering component(s) also key off
// portfolioImages[slug] rather than hardcoding a path of their own.
export const portfolioImages = {
  'adops-staffing': adopsStaffing,
  'alsharq-entertainment': alsharqEntertainment,
  'beepvision': beepvision,
  'churchill-estates-retirement': churchillEstatesRetirement,
  'dghalchi-law': dghalchiLaw,
  'dragons-den-chinese-food': dragonsDen,
  'lmao-construction': lmaoConstruction,
  'maces-malinois': macesMalinois,
  'northcharge': northcharge,
  'providence-assisted-living': providenceAssistedLiving,
  'stonehaven-senior-living': stonehavenSeniorLiving,
  'the-couch-counselling': theCouchCounselling,
  'treppenlift-experten-nrw': treppenliftExpertenNrw,
  'voyages-a-la-mecque': voyagesALaMecque,
  'west-central-development-group': westCentralDevelopmentGroup
};