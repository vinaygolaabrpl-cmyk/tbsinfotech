import PackageHero from '../../components/common/PackageHero';
import SEO from '../../components/common/SEO';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import { useCurrency } from '../../hooks/useCurrency';
import { getPrice, formatPrice } from '../../config/pricing';
import './WebDesigningPackages.scss';
import webDesigningBanner from '../../assets/images/services/service_4_banner_img.jpg.jpeg';

const PACKAGES = [
  {
    name: 'Customized Package',
    priceLabel: 'Ask',
    desc: 'We also provide tailored website development services, specific to your business needs. You just tell us your requirement and we will develop.'
  },
  {
    name: 'Web Shop Package',
    priceKey: 'webDesigning.webShop',
    desc: 'Entry level Shopping Cart will allow you to start selling your business online and manage small changes on your website yourself.'
  },
  {
    name: 'Go-Pro Package',
    priceKey: 'webDesigning.goPro',
    desc: 'Build a professional website to show your services and products online and enhance your company image amongst your client base. This will allow you to have a strong digital presence.'
  },
  {
    name: 'Biz Start-up Package',
    priceKey: 'webDesigning.bizStartup',
    desc: 'This will allow you to show your company brochure online in a very presentable manner. All we need from you is text for pages, images you want to put on the site.'
  },
  {
    name: 'Budget Package',
    priceKey: 'webDesigning.budget',
    desc: 'With Included: Simple yet Professional Designs, which will give your company a perfect platform to commence your online business.',
    boldLead: 'With Included:'
  }
];

export default function WebDesigningPackages() {
  const { currency } = useCurrency();

  return (
    <div className="web-designing-packages-page">
      <SEO
        title="Web Designing Packages | Custom, Web Shop, Go-Pro & Budget — TBS Infotech"
        description="TBS Infotech offers professional website designing packages at affordable offshore pricing — from budget brochure sites to full e-commerce web shops."
        keywords="web designing packages, website design pricing, affordable website packages"
      />
      <PackageHero title="Web Designing Packages" breadcrumbLabel="Web Designing Packages" image="https://placehold.co/1600x400/05080f/22d3ee?text=Web+Designing+Packages" />

      <section className="section">
        <div className="container">
          <div className="introRow" data-aos="fade-up">
            <div>
              <h2>Website Designing Packages</h2>
              <p className="lead">Tbsinfotech Website Designing Packages.</p>
              <p>
                We offer professional Website Designing service at a very affordable offshore Price with good value
                for money. Please visit our past work to see our Designing Skills. As we are a SEO Company Too, we
                know the importance of optimized website designing.
              </p>
            </div>
            <Button to="/portfolio" size="md">Portfolio</Button>
          </div>

          <div className="grid-auto packageGrid">
            {PACKAGES.map((pkg, i) => (
              <Card key={pkg.name} data-aos="fade-up" data-aos-delay={i * 60} className="webPkgCard">
                <span className="priceTag">
                  Best Price {pkg.priceKey ? formatPrice(getPrice(pkg.priceKey, currency), currency) : pkg.priceLabel}
                </span>
                <h3>{pkg.name}</h3>
                <p>{pkg.boldLead ? <><strong>{pkg.boldLead}</strong> {pkg.desc.replace(pkg.boldLead, '')}</> : pkg.desc}</p>
                <Button to="/contact" variant="primary">Click Here</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
