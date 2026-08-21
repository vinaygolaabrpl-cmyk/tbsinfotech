import PortfolioItem from './PortfolioItem';
import './PortfolioGrid.scss';

export default function PortfolioGrid({ items, columns = 'auto' }) {
  return (
    <div className={`portfolio-grid ${columns === 2 ? 'two-up' : ''}`}>
      {items.map((item, i) => (
        <PortfolioItem key={item.slug} item={item} index={i} />
      ))}
    </div>
  );
}
