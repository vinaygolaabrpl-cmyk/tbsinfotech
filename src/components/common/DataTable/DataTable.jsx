import './DataTable.scss';

/**
 * Generic responsive comparison table used for the "How Do Our X Compare?"
 * sections. `headers` is an array of column labels (first column is the
 * row label). `rows` is [{ label, values: [] }]. Renders a real table on
 * desktop and a stacked card list on mobile, matching PackageComparisonTable.
 */
export default function DataTable({ headers, rows }) {
  return (
    <div className="data-table" data-aos="fade-up">
      <div className="scrollWrap">
        <table className="table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <td className="rowLabel">{row.label}</td>
                {row.values.map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="stacked">
        {rows.map((row) => (
          <div key={row.label} className="stackCard">
            <h4>{row.label}</h4>
            <dl>
              {row.values.map((v, i) => (
                <div className="stackRow" key={i}>
                  <dt>{headers[i + 1]}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}
