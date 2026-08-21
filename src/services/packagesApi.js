import packages from '../data/packages.json';

export function getAllPackages() {
  return Promise.resolve(packages);
}

export function getPackageBySlug(slug) {
  const found = packages.find((p) => p.slug === slug);
  return Promise.resolve(found || null);
}
