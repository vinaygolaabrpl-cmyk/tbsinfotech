import Card from '../Card';
import './NumberedFeatureGrid.scss';

/**
 * Numbered "01 / 02 / 03" capability cards, e.g. "How Do Our Core
 * Capabilities Drive Digital Growth?". `items` is [{ icon, title, desc }].
 */
export default function NumberedFeatureGrid({ items }) {
  return (
    <div className="grid-auto numbered-feature-grid">
      {items.map((item, i) => (
        <Card key={item.title} data-aos="fade-up" data-aos-delay={i * 60} className="numberedCard">
          <div className="cardTop">
            {item.icon && <span className="icon">{item.icon}</span>}
            <span className="index">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </Card>
      ))}
    </div>
  );
}
