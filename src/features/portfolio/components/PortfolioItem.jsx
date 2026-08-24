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
          <span className="link">View Website <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg></span>
        </div>
      </div>
    </a>
  );
}
