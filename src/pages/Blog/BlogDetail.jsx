import { useParams } from 'react-router-dom';
import { useBlogPost, useBlogPosts } from '../../features/blog/hooks/useBlog';
import SEO from '../../components/common/SEO';
import PageHero from '../../components/common/PageHero';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';
import NotFound from '../NotFound/NotFound';
import BlogRail from '../../features/blog/components/BlogRail';
import { formatDate } from '../../utils/formatDate';
import './BlogDetail.scss';

export default function BlogDetail() {
  const { slug } = useParams();
  const { data: post, loading } = useBlogPost(slug);
  const { data: allPosts } = useBlogPosts();

  if (loading) return <Loader label="Loading article…" />;
  if (!post) return <NotFound />;

  const related = (allPosts ?? []).filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="blog-detail-page">
      <SEO
        title={`${post.title} — TBS Infotech Blog`}
        description={post.excerpt}
        keywords={`${post.category}, ${(post.tags ?? []).join(', ')}, SEO blog, GEO blog`}
        image={post.image.src}
        type="article"
      />

      <PageHero
        eyebrow={`Blog / ${post.category}`}
        title={post.title}
        description={post.excerpt}
        image={post.image.src}
        imageAlt={post.image.alt}
        ctaLabel="Get A Free SEO Audit"
        ctaTo="/free-seo-audit"
      />

      <section className="section">
        <div className="container">
          <div className="post-meta-grid" data-aos="fade-up">
            <div className="infoTile">
              <span className="label">Author</span>
              <span className="value">{post.author}</span>
            </div>
            <div className="infoTile">
              <span className="label">Published</span>
              <span className="value">{formatDate(post.date)}</span>
            </div>
            <div className="infoTile">
              <span className="label">Read Time</span>
              <span className="value">{post.readTime}</span>
            </div>
            <div className="infoTile">
              <span className="label">Category</span>
              <span className="value">{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="article-body" data-aos="fade-up">
            {(post.content ?? [post.excerpt]).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {post.tags?.length > 0 && (
            <div className="tags-row" data-aos="fade-up">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionTitle eyebrow="Keep Reading" title="More From The Knowledge Hub" />
            <BlogRail items={related} />
          </div>
        </section>
      )}

      <section className="section final-cta">
        <div className="container text-center" data-aos="fade-up">
          <SectionTitle title="Want Results Like This On Your Site?" />
          <Button to="/free-seo-audit" size="lg">Get My Free SEO Audit</Button>
        </div>
      </section>
    </div>
  );
}
