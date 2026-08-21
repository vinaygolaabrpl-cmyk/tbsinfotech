import './BlufCallout.scss';

/**
 * "Bottom Line Up Front" highlight panel used near the top of every
 * inner page to summarize the page in one scannable block.
 */
export default function BlufCallout({ label = 'Bottom Line Up Front', children }) {
  return (
    <section className="section bluf-callout">
      <div className="container">
        <div className="panel" data-aos="fade-up">
          <span className="eyebrow">{label}</span>
          <p>{children}</p>
        </div>
      </div>
    </section>
  );
}
