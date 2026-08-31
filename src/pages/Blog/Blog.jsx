import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import Loader from '../../components/common/Loader';
import Button from '../../components/common/Button';
import BlogCard from '../../features/blog/components/BlogCard';
import { useBlogPosts } from '../../features/blog/hooks/useBlog';
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
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}

        <div className="blog-audit-cta" data-aos="fade-up">
          <SectionTitle title="Want A Custom Action Plan For Your Site?" />
          <Button to="/free-seo-audit" size="lg">Get My Free SEO Audit</Button>
        </div>
      </div>
    </section>
  );
}
