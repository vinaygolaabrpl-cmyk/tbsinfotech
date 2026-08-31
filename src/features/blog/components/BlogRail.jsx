import BlogCard from './BlogCard';
import './BlogRail.scss';

export default function BlogRail({ items }) {
  return (
    <div className="blog-rail">
      {items.map((post, i) => (
        <BlogCard key={post.slug} post={post} index={i} />
      ))}
    </div>
  );
}
