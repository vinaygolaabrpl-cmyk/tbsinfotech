import { Link } from 'react-router-dom';
import './CaseStudyCard.scss';

export default function CaseStudyCard({ caseStudy, index = 0 }) {
  return (
    <article className="case-study-card" data-aos="fade-up" data-aos-delay={(index % 4) * 80}>
      <div className="shot">
        <img
          src={caseStudy.image.src}
          alt={caseStudy.image.alt}
          width={caseStudy.image.width}
          height={caseStudy.image.height}
          loading="lazy"
        />
      </div>

      <figcaption className="details">
        <div className="result">
          <span className="rank">
            <strong>{caseStudy.rank}</strong>
            Position
          </span>
          <h3 className="name">{caseStudy.name}</h3>
        </div>
  
        <p className="metric">
          <CheckIcon /> {caseStudy.metric}
        </p>
  
        <Link to={caseStudy.url} className="cta">
          {/* <span className="ctaIcon" aria-hidden="true"><PowerIcon /></span> */}
          View Case Study
        </Link>
      </figcaption>
    </article>
  );
}

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  );
}

function PowerIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
      <path d="M12 2v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M6.3 6.3a9 9 0 1011.4 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
