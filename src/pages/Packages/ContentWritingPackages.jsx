import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import DataTable from '../../components/common/DataTable';
import './PackagesShared.scss';

const TABLE = {
  headers: ['Word Count', 'Website Content Writing', 'Article Copywriting', 'Press Release Writing', 'Blog Writing'],
  rows: [
    { label: '200 Words', values: ['$10', '$7', '$8', '$6'] },
    { label: '400 Words', values: ['$20', '$15', '$16', '$13'] },
    { label: '600 Words', values: ['$28', '$20', '$22', '$18'] }
  ]
};

export default function ContentWritingPackages() {
  return (
    <div className="content-writing-packages-page">
      <SEO
        title="Content Writing Packages | Website, Article, Press Release & Blog Pricing — TBS Infotech"
        description="Transparent per-word pricing for website content, article copywriting, press release writing and blog writing from TBS Infotech."
        keywords="content writing packages, article writing pricing, blog writing pricing, press release writing"
      />
      <PackageHero title="Content Writing Packages" breadcrumbLabel="Content Writing Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=Content+Writing+Packages" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Content <span className="gradient">Writing</span> Packages</h2>
          <DataTable headers={TABLE.headers} rows={TABLE.rows} />
        </div>
      </section>
    </div>
  );
}
