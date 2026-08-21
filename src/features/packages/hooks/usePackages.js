import { useFetch } from '../../../hooks/useFetch';
import { getAllPackages } from '../../../services/packagesApi';

export function usePackages() {
  return useFetch(() => getAllPackages(), []);
}
