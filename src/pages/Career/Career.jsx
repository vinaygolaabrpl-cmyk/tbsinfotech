import { useState } from 'react';
import SEO from '../../components/common/SEO';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';
import './Career.scss';

const OPEN_ROLES = [
  { title: 'SEO Executive (AI SEO & GEO)', location: 'Noida, India', type: 'Full-Time' },
  { title: 'PPC Campaign Manager', location: 'Noida, India', type: 'Full-Time' },
  { title: 'React / Frontend Developer', location: 'Noida, India', type: 'Full-Time' },
  { title: 'Content Strategist', location: 'Remote', type: 'Full-Time' }
];

export default function Career() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

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
          <div className="grid-auto roles">
            {OPEN_ROLES.map((role, i) => (
              <Card key={role.title} data-aos="fade-up" data-aos-delay={i * 60}>
                <h3>{role.title}</h3>
                <p className="meta">{role.location} · {role.type}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Apply" title="Send Us Your Resume" align="center" />
          <form className="form" onSubmit={handleSubmit} data-aos="fade-up">
            <div className="row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>
            <input type="text" placeholder="Role You're Applying For" />
            <textarea rows={4} placeholder="Tell us a bit about yourself" />
            <Button type="submit" size="lg">Submit Application</Button>
            {submitted && <p className="success">Thanks — your application has been received.</p>}
          </form>
        </div>
      </section>
    </div>
  );
}
