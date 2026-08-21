import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import Loader from '../../components/common/Loader';
import { useBlogPosts } from '../../features/blog/hooks/useBlog';
import { formatDate } from '../../utils/formatDate';
import './Blog.scss';

export default function Blog() {
  const { data: posts, loading } = useBlogPosts();

  return (
    <section className="section blog-page">
      <SEO
        title="Blog | AI SEO, GEO & Digital Marketing Insights — TBS Infotech"
        description="Field notes on Generative Engine Optimization, entity-first content, incrementality measurement and Core Web Vitals from the strategists running these programs every day."
        keywords="SEO blog, GEO blog, AI search optimization articles, digital marketing insights"
      />
      <div className="container">
        <SectionTitle eyebrow="Insights" title="Knowledge Hub For The AI Search Era" subtitle="Field notes from the strategists running these programs every day." />
        {loading ? (
          <Loader label="Loading articles…" />
        ) : (
          <div className="grid-auto grid">
            {posts?.map((post, i) => (
              <article key={post.slug} className="card" data-aos="fade-up" data-aos-delay={i * 60}>
                <img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} loading="lazy" />
                <div className="body">
                  <span className="meta">{post.readTime} · {formatDate(post.date)}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <span className="author">By {post.author}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
