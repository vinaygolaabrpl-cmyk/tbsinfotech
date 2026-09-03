import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import DataTable from '../../components/common/DataTable';
import { useCurrency } from '../../hooks/useCurrency';
import { getPrice, formatPrice } from '../../config/pricing';
import './PackagesShared.scss';
import contentWritingBanner from '../../assets/images/services/service_1_banner_img.jpg.jpeg';

const TABLE = {
  headers: ['Word Count', 'Website Content Writing', 'Article Copywriting', 'Press Release Writing', 'Blog Writing'],
  rows: [
    { label: '200 Words', priceKeys: ['contentWriting.website200', 'contentWriting.article200', 'contentWriting.pressRelease200', 'contentWriting.blog200'] },
    { label: '400 Words', priceKeys: ['contentWriting.website400', 'contentWriting.article400', 'contentWriting.pressRelease400', 'contentWriting.blog400'] },
    { label: '600 Words', priceKeys: ['contentWriting.website600', 'contentWriting.article600', 'contentWriting.pressRelease600', 'contentWriting.blog600'] }
  ]
};

export default function ContentWritingPackages() {
  const { currency } = useCurrency();
  const rows = TABLE.rows.map((row) => ({
    ...row,
    values: row.priceKeys.map((key) => formatPrice(getPrice(key, currency), currency))
  }));

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
          <DataTable headers={TABLE.headers} rows={rows} />
        </div>
      </section>
    </div>
  );
}
