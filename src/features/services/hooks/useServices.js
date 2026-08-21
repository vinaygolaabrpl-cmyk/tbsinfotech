import { useFetch } from '../../../hooks/useFetch';
import { getAllServices, getServicesByCategory } from '../../../services/servicesApi';

export function useServices(category) {
  return useFetch(() => (category ? getServicesByCategory(category) : getAllServices()), [category]);
}
