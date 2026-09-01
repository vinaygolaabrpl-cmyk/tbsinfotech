import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import Card from '../../components/common/Card';
import './BadLinkRemovalPackages.scss';
import badLinkBanner from '../../assets/images/services/service_6_banner_img.jpg.jpeg';

const PRICE_ROWS = [
  { label: 'Up to 500 links', price: '$200' },
  { label: 'Up to 1000 links', price: '$400' }
];

const PROCESS_STEPS = [
  'Backlink Data Extraction',
  'Link Profile Analysis',
  'Link Removal Processing',
  'Guaranteed Link Removal',
  'Prepare Disavow Files',
  'Google Re-Inclusion',
  'Full Analysis Of Your Bad Links/Domain',
  'Submit The Disavow List',
  'Reconsideration Requests By Google Webmaster'
];

const ANALYSIS_SUB_STEPS = [
  'Find The Links That Actually Harm Your Site',
  'Build Your Back-Link Report',
  'Diagnose The Penalty',
  'Analyze Links And Identify Manipulation',
  'Check And Compare Do Follow Vs. No Follow (No Follow Links Can Be Avoided)',
  'Check Links From Bad Domain Which Is Already Removed Or Not Found',
  'Anchor Text Linking (It Should Be Linked With Targeted URL)',
  'Links With Duplicate Texts'
];

export default function BadLinkRemovalPackages() {
  return (
    <div className="bad-link-removal-page">
      <SEO
        title="Bad Link Removal Packages | Unnatural Link Removal & Disavow — TBS Infotech"
        description="Reclaim your website rankings with TBS Infotech's unnatural/bad link removal service — backlink audit, disavow file preparation and Google reconsideration requests."
        keywords="bad link removal, unnatural link removal, disavow links, Google penalty recovery"
      />
      <PackageHero title="Bad Link Removal Packages" breadcrumbLabel="Bad Link Removal Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=Bad+Link+Removal" />

      <section className="section">
        <div className="container">
          <h2 className="pickTitle" data-aos="fade-up">Unnatural/<span className="gradient">Bad</span> Link Removal Packages</h2>

          <div className="linkRemovalGrid">
            <div className="copy" data-aos="fade-right">
              <h3>Reclaim Your Website Rankings With Our Unnatural/Bad Link Removal Service</h3>
              <p>
                As all of us know that Google has recently dropped rankings of many websites which have unnatural
                links and link profile which contains paid links. You can check unnatural links of your site by
                signing up your Google Webmaster Tools account. With our assistance, you can easily identify and
                delete these unnatural links and get your ranking back.
              </p>
              <p>
                We offer excellent link removal services to our clients so that they can easily survive from Google
                update. The price of our services is very low. Our professionals will assist you in clean up all
                sitewide links, low quality incoming links, footer links, Google Penguin unnatural links and many
                more. With our excellent services, you can easily grow your business nationwide and worldwide. As
                well, you can increase your sales and revenue by generating high quality leads.
              </p>
              <p>
                Our SEO experts will analyze your website and provide you the robust solution of your issues at very
                affordable budget. To remove bad and low quality links, we adopt different methods so that your
                website can get top ranking in Google and other search engines once again. We will assist to remove
                all the bad elements from your site. So, call us now to start the Google penguin recovery process
                immediately!
              </p>
            </div>

            <Card className="pricingPanel" data-aos="fade-left">
              <div className="panelHeader">Unnatural/Bad Links Removal Packages</div>
              {PRICE_ROWS.map((r) => (
                <div className="priceRow" key={r.label}>
                  <span>{r.label} –</span>
                  <strong>{r.price}</strong>
                </div>
              ))}

              <ol className="processList">
                {PROCESS_STEPS.map((step) => (
                  <li key={step}>
                    {step}
                    {step === 'Full Analysis Of Your Bad Links/Domain' && (
                      <ol className="subList" type="a">
                        {ANALYSIS_SUB_STEPS.map((s) => (
                          <li key={s}>{s}</li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>

              <div className="reportingBox">
                <strong>Reporting:</strong>
                <span>Disavow file</span>
                <span>Reports (XLS, PDF)</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
