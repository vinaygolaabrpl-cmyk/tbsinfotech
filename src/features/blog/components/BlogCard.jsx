import { Link } from 'react-router-dom';
import { formatDate } from '../../../utils/formatDate';
import './BlogCard.scss';

/**
 * Single blog listing card. Reused on the Blog index page and on the
 * "related articles" rail of the Blog Details page, so both surfaces
 * always render the exact same card design.
 */
export default function BlogCard({ post, index = 0 }) {
  return (
    <article className="blog-card" data-aos="fade-up" data-aos-delay={(index % 4) * 60}>
      <Link to={`/blog/${post.slug}`} className="thumb" aria-label={post.title}>
        <img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} loading="lazy" />
      </Link>
      <div className="body">
        <span className="meta">{post.readTime} · {formatDate(post.date)}</span>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="footRow">
          <span className="author">By {post.author}</span>
          <Link to={`/blog/${post.slug}`} className="readMore">Read More</Link>
        </div>
      </div>
    </article>
  );
}
