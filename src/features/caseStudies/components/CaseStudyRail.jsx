import CaseStudyCard from './CaseStudyCard';
import './CaseStudyRail.scss';

export default function CaseStudyRail({ items }) {
  return (
    <div className="case-study-rail">
      {items.map((cs, i) => (
        <CaseStudyCard key={cs.slug} caseStudy={cs} index={i} />
      ))}
    </div>
  );
}
