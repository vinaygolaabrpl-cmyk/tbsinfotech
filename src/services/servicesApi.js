import servicesData from '../data/services.json';
import { servicesImages } from '../data/servicesImages';

const services = servicesData.map((s) => ({
  ...s,
  image: { ...s.image, src: servicesImages[s.slug] ?? s.image.src }
}));

// JSON-backed today; swap the bodies for axios calls tomorrow without
// touching any component — they all consume this module, never the JSON directly.
export function getAllServices() {
  return Promise.resolve(services);
}

export function getServiceBySlug(slug) {
  const found = services.find((s) => s.slug === slug);
  return Promise.resolve(found || null);
}

export function getServicesByCategory(category) {
  if (!category || category === 'All Services') return Promise.resolve(services);
  return Promise.resolve(services.filter((s) => s.category === category));
}
