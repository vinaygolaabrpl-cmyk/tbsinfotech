import { useFetch } from '../../../hooks/useFetch';
import { getAllCaseStudies } from '../../../services/caseStudiesApi';

export function useCaseStudies() {
  return useFetch(() => getAllCaseStudies(), []);
}
