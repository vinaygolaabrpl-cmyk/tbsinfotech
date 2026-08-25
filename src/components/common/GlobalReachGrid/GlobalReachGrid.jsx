import './GlobalReachGrid.scss';

/**
 * Modern replacement presentation for the About page "Global Reach" band.
 * `lead` is an optional { icon, title, desc } summary strip; `regions` is
 * [{ icon, title, desc? }] rendered as a responsive card grid.
 */
export default function GlobalReachGrid({ lead, regions }) {
  return (
    <div className="global-reach">
      {lead && (
        <div className="global-reach__lead" data-aos="fade-up">
          <span className="global-reach__leadIcon" aria-hidden="true">{lead.icon}</span>
          <div className="global-reach__leadText">
            <strong>{lead.title}</strong>
            <p>{lead.desc}</p>
          </div>
          <span className="global-reach__leadStat">
            <strong>{regions.length}</strong>
            <span>Regions Served</span>
          </span>
        </div>
      )}

      <div className="global-reach__grid">
        {regions.map((region, i) => (
          <div
            className="global-reach__card"
            key={region.title}
            data-aos="fade-up"
            data-aos-delay={i * 60}
          >
            <span className="global-reach__index" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="global-reach__icon" aria-hidden="true">{region.icon}</span>
            <h4>{region.title}</h4>
            {region.desc && <p>{region.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
