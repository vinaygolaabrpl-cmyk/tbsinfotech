import SEO from '../../components/common/SEO';
import Button from '../../components/common/Button';
import './NotFound.scss';

export default function NotFound() {
  return (
    <section className="container not-found-page">
      <SEO
        title="404 - Page Not Found | TBS Infotech"
        description="The page you're looking for doesn't exist or has moved. Return to the TBS Infotech homepage."
        noindex
      />
      <span className="code">404</span>
      <h1>Page Not Found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button to="/" size="lg">Back To Home</Button>
    </section>
  );
}
