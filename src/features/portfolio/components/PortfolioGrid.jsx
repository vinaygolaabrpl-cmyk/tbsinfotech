import PortfolioItem from './PortfolioItem';
import './PortfolioGrid.scss';

export default function PortfolioGrid({ items, columns = 'auto' }) {
  const gridClass = [
    'portfolio-grid',
    columns === 2 ? 'two-up' : '',
    items.length === 1 ? 'single-item' : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={gridClass}>
      {items.map((item, i) => (
        <PortfolioItem key={item.slug} item={item} index={i} />
      ))}
    </div>
  );
}
