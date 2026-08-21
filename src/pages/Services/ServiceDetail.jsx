import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { getServiceBySlug } from '../../services/servicesApi';
import SEO from '../../components/common/SEO';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import NotFound from '../NotFound/NotFound';
import './ServiceDetail.scss';

export default function ServiceDetail() {
  const { slug } = useParams();
  const { data: service, loading } = useFetch(() => getServiceBySlug(slug), [slug]);

  if (loading) return <Loader label="Loading service…" />;
  if (!service) return <NotFound />;

  return (
    <section className="section service-detail-page">
      <SEO
        title={`${service.title} | TBS Infotech`}
        description={service.shortDescription}
        keywords={`${service.title}, ${service.category}, ${service.features.join(', ')}`}
        image={service.image.src}
      />
      <div className="container wrap">
        <div data-aos="fade-right">
          <span className="eyebrow">{service.category}</span>
          <h1 className="title">{service.title}</h1>
          <p className="desc">{service.description}</p>
          <ul className="features">
            {service.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Button to="/contact" size="lg">Get A Free Consultation</Button>
        </div>
        <img
          data-aos="fade-left"
          className="image"
          src={service.image.src}
          alt={service.image.alt}
          width={service.image.width}
          height={service.image.height}
        />
      </div>
    </section>
  );
}
