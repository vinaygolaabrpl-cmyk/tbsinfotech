import portfolio from '../data/portfolio.json';

export function getAllPortfolio() {
  return Promise.resolve(portfolio);
}

export function getPortfolioCategories() {
  const categories = new Set(portfolio.map((p) => p.category));
  return Promise.resolve(['All', ...Array.from(categories)]);
}

export function getPortfolioBySlug(slug) {
  const found = portfolio.find((p) => p.slug === slug);
  return Promise.resolve(found || null);
}
