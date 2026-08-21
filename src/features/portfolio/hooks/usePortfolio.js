import { useFetch } from '../../../hooks/useFetch';
import { getAllPortfolio } from '../../../services/portfolioApi';

export function usePortfolio() {
  return useFetch(() => getAllPortfolio(), []);
}
