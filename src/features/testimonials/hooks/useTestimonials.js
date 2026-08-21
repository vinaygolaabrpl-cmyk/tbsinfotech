import { useFetch } from '../../../hooks/useFetch';
import testimonials from '../../../data/testimonials.json';

export function useTestimonials() {
  return useFetch(() => Promise.resolve(testimonials), []);
}
