import { Fragment } from 'react';
import './PricingMatrix.scss';

function Check() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
  );
}

function Cross() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cell({ value }) {
  if (value === true) return <Check />;
  if (value === false) return <Cross />;
  return <span>{value}</span>;
}

/**
 * Renders the dense multi-plan feature-comparison tables used across the
 * Packages section (SEO, AEO SEO, Local SEO, SMO, Reputation Management…).
 * `plans` is [{ name, price, billing, note, popular }]. `groups` is
 * [{ title, rows: [{ label, values: [] }] }] — a value is `true`/`false`
 * for a check/cross, or any string/number to render as-is.
 */
export default function PricingMatrix({ planColumnLabel = 'Activities', plans, groups, ctaLabel = 'Add to Cart', onCta }) {
  return (
    <div className="pricing-matrix" data-aos="fade-up">
      <div className="scrollWrap">
        <table className="matrixTable">
          <thead>
            <tr>
              <th className="labelCol">{planColumnLabel}</th>
              {plans.map((p) => (
                <th key={p.name} className={p.popular ? 'popular' : ''}>
                  {p.popular && <span className="popularTag">Most Popular</span>}
                  <span className="planName">{p.name}</span>
                  <span className="planPrice">
                    {p.price}
                    {p.billing && <span className="billing"> {p.billing}</span>}
                  </span>
                  {p.note && <span className="planNote">{p.note}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment key={group.title}>
                <tr className="groupHeader">
                  <td colSpan={plans.length + 1}>{group.title}</td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.label}>
                    <td className="labelCol">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className={plans[i]?.popular ? 'popular' : ''}>
                        <Cell value={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
          {ctaLabel && (
            <tfoot>
              <tr>
                <td className="labelCol" />
                {plans.map((p) => (
                  <td key={p.name} className={p.popular ? 'popular' : ''}>
                    <button type="button" className="ctaBtn" onClick={() => onCta?.(p)}>
                      {ctaLabel}
                    </button>
                  </td>
                ))}
              </tr>
            </tfoot>
          )}
        </table>
      </div>
      <p className="scrollHint">Swipe sideways to compare all plans →</p>
    </div>
  );
}
