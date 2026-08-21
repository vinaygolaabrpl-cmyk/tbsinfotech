import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initializes AOS once at the app root. Call refresh() after routes
 * change or content loads asynchronously so new [data-aos] nodes animate.
 */
export function useScrollAnimation() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60
    });
  }, []);

  return { refresh: () => AOS.refresh() };
}
