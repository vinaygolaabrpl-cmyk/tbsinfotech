import { useState } from 'react';
import { FiSearch, FiTrendingUp, FiCode, FiEdit3, FiMapPin, FiClock, FiMail, FiPhone } from 'react-icons/fi';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import ApplicationForm from './ApplicationForm';
import siteConfig from '../../data/siteConfig.json';
import './Career.scss';

const OPEN_ROLES = [
  {
    title: 'SEO Executive (AI SEO & GEO)',
    icon: <FiSearch />,
    location: 'Noida, India',
    type: 'Full-Time',
    experience: '1 - 3 Years'
  },
  {
    title: 'PPC Campaign Manager',
    icon: <FiTrendingUp />,
    location: 'Noida, India',
    type: 'Full-Time',
    experience: '2 - 4 Years'
  },
  {
    title: 'React / Frontend Developer',
    icon: <FiCode />,
    location: 'Noida, India',
    type: 'Full-Time',
    experience: '2 - 5 Years'
  },
  {
    title: 'Content Strategist',
    icon: <FiEdit3 />,
    location: 'Remote',
    type: 'Full-Time',
    experience: '1 - 3 Years'
  }
];

export default function Career() {
  const [activeJob, setActiveJob] = useState(null);

  return (
    <div className="career-page">
      <SEO
        title="Careers At TBS Infotech | Join Our Growth Team"
        description="Explore open roles at TBS Infotech across SEO & GEO, PPC, frontend development and content strategy. Join 85+ specialists building the future of AI search."
        keywords="TBS Infotech careers, SEO jobs Noida, digital marketing jobs, PPC jobs, frontend developer jobs"
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Career"
            title="Build The Future Of Search With Us"
            subtitle="Join 85+ in-house specialists helping brands win both organic rankings and AI answer boxes."
          />

          <div className="career-page__intro" data-aos="fade-up">
            <p>
              Send your resume to{' '}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or apply directly
              below and our hiring team will get back to you.
            </p>
            <div className="career-page__introMeta">
              <span><FiMail aria-hidden="true" /> {siteConfig.email}</span>
              <span><FiPhone aria-hidden="true" /> {siteConfig.phones[1]}</span>
            </div>
          </div>

          <div className="grid-auto roles">
            {OPEN_ROLES.map((role, i) => (
              <Card key={role.title} className="career-page__card" data-aos="fade-up" data-aos-delay={i * 60}>
                <span className="career-page__cardIcon" aria-hidden="true">{role.icon}</span>
                <h3>{role.title}</h3>
                <p className="meta">
                  <span><FiMapPin aria-hidden="true" /> {role.location}</span>
                  <span><FiClock aria-hidden="true" /> {role.experience}</span>
                </p>
                <span className="career-page__type">{role.type}</span>
                <Button size="sm" className="career-page__apply" onClick={() => setActiveJob(role.title)}>
                  Apply Now
                </Button>
              </Card>
            ))}
          </div>

          <p className="career-page__fallback" data-aos="fade-up">
            Don&apos;t see a role that fits?{' '}
            <button type="button" className="career-page__fallbackBtn" onClick={() => setActiveJob('General Application')}>
              Send us a general application
            </button>
          </p>
        </div>
      </section>

      <Modal
        open={!!activeJob}
        onClose={() => setActiveJob(null)}
        title="Apply Now"
        size="lg"
      >
        {activeJob && (
          <ApplicationForm position={activeJob} onSubmitted={() => {}} />
        )}
      </Modal>
    </div>
  );
}
