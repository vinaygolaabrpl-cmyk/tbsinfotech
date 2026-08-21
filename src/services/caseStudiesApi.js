import caseStudiesData from '../data/caseStudies.json';
import { caseStudyImages } from '../data/caseStudyImages';

const caseStudies = caseStudiesData.map((cs) => ({
  ...cs,
  image: { ...cs.image, src: caseStudyImages[cs.slug] ?? cs.image.src }
}));

// JSON-backed today; swap the bodies for axios calls tomorrow without
// touching any component — they all consume this module, never the JSON directly.
export function getAllCaseStudies() {
  return Promise.resolve(caseStudies);
}

export function getCaseStudyBySlug(slug) {
  return Promise.resolve(caseStudies.find((c) => c.slug === slug) || null);
}
