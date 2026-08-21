import './SystemDiagram.scss';

/**
 * Renders the "hub + branches" architecture diagrams used throughout the
 * inner pages (e.g. "Think Biz Integrated Digital Ecosystem"). `hub` is the
 * top label, `branches` is an array of { icon, title, items[] } cards
 * connected to it. Works for 2, 3, 5 or 6 branches.
 */
export default function SystemDiagram({ hub, hubIcon, branches }) {
  return (
    <div className="system-diagram" data-aos="fade-up">
      <div className="hub">
        {hubIcon && <span className="hubIcon">{hubIcon}</span>}
        <span>{hub}</span>
      </div>
      <div className="connector" aria-hidden="true">
        <span className="stem" />
        <span className="bar" />
      </div>
      <div className={`branches count-${branches.length}`}>
        {branches.map((branch) => (
          <div className="branch" key={branch.title}>
            <span className="drop" aria-hidden="true" />
            <div className="branchCard">
              {branch.icon && <span className="branchIcon">{branch.icon}</span>}
              <h4>{branch.title}</h4>
              {branch.items && (
                <ul>
                  {branch.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
