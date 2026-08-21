import './PortfolioItem.scss';

export default function PortfolioItem({ item, index = 0 }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="portfolio-item"
      data-aos="zoom-in"
      data-aos-delay={(index % 4) * 70}
    >
      <div className="thumb">
        <img src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} loading="lazy" />
        <span className="tag">{item.category}</span>
        <div className="overlay">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <span className="link">View Website &rarr;</span>
        </div>
      </div>
    </a>
  );
}
