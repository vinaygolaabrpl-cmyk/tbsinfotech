import { useEffect, useState } from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialSlider.scss';

export default function TestimonialSlider({ testimonials }) {
  const [page, setPage] = useState(0);
  const perPage = useResponsivePerPage();
  const pageCount = Math.ceil(testimonials.length / perPage);

  useEffect(() => {
    if (page > pageCount - 1) setPage(0);
  }, [pageCount, page]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="testimonial-slider">
      <div className="track">
        {visible.map((t, i) => (
          <TestimonialCard key={t.id} testimonial={t} index={i} />
        ))}
      </div>
      <div className="dots">
        {Array.from({ length: pageCount }).map((_, i) => (
          <button
            key={i}
            className={i === page ? 'dotActive' : 'dot'}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>
    </div>
  );
}

function useResponsivePerPage() {
  const [perPage, setPerPage] = useState(getPerPage());

  useEffect(() => {
    const onResize = () => setPerPage(getPerPage());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return perPage;
}

function getPerPage() {
  if (typeof window === 'undefined') return 3;
  const w = window.innerWidth;
  if (w < 576) return 1;
  if (w < 992) return 2;
  return 3;
}
