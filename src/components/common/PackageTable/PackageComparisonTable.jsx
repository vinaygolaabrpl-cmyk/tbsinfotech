import './PackageComparisonTable.scss';

/**
 * Renders packages.json as a full comparison table on desktop and a
 * stacked-card view on mobile (pure CSS switch via media query).
 */
export default function PackageComparisonTable({ packages }) {
  const allFeatures = Array.from(new Set(packages.flatMap((p) => p.features)));

  return (
    <div className="package-table">
      <table className="table">
        <thead>
          <tr>
            <th>Feature</th>
            {packages.map((p) => (
              <th key={p.slug}>
                {p.name}
                <span className="price">${p.price}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature) => (
            <tr key={feature}>
              <td>{feature}</td>
              {packages.map((p) => (
                <td key={p.slug}>{p.features.includes(feature) ? <Check /> : <span className="dash">—</span>}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="stacked">
        {packages.map((p) => (
          <div key={p.slug} className="stackCard">
            <h4>{p.name} <span>${p.price}</span></h4>
            <ul>
              {p.features.map((f) => (
                <li key={f}><Check /> {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  );
}
