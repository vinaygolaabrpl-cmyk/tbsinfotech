import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import { useTestimonials } from '../../features/testimonials';
import TestimonialCard from '../../features/testimonials/components/TestimonialCard';
import Loader from '../../components/common/Loader';

export default function ClientReviews() {
  const { data: testimonials, loading } = useTestimonials();

  return (
    <section className="section">
      <SEO
        title="Client Reviews | What Our Clients Say — TBS Infotech"
        description="Read verified Google reviews from TBS Infotech clients who have stayed with us for years, not months, across SEO, PPC, web development and branding engagements."
        keywords="TBS Infotech reviews, SEO agency reviews, client testimonials, Google reviews"
      />
      <div className="container">
        <SectionTitle
          eyebrow="Client Reviews"
          title="Trusted By Founders Across The World"
          subtitle="Verified Google reviews from clients who stayed with us for years, not months."
        />
        {loading ? (
          <Loader />
        ) : (
          <div className="grid-auto">
            {testimonials?.map((t, i) => <TestimonialCard key={t.id} testimonial={t} index={i} />)}
          </div>
        )}
      </div>
    </section>
  );
}
