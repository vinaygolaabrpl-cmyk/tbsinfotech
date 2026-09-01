import portfolioData from '../data/portfolio.json';
import { portfolioImages } from '../data/portfolioImages';

const portfolio = portfolioData.map((p) => ({
  ...p,
  image: { ...p.image, src: portfolioImages[p.slug] ?? p.image.src }
}));

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
