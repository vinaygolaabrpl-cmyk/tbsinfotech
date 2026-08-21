import './StatTiles.scss';

/**
 * Big-number stat tiles, e.g. "+312% Organic Traffic". `items` is
 * [{ value, label }].
 */
export default function StatTiles({ items }) {
  return (
    <div className="stat-tiles" data-aos="fade-up">
      {items.map((item, i) => (
        <div className="tile" key={item.label} data-aos="fade-up" data-aos-delay={i * 60}>
          <strong>{item.value}</strong>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
