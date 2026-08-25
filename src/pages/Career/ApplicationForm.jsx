import { useState } from 'react';
import { FiCheckCircle, FiAlertCircle, FiUpload } from 'react-icons/fi';
import Button from '../../components/common/Button';
import siteConfig from '../../data/siteConfig.json';

const APPLICATION_EMAIL = 'vinaygola.abrpl@gmail.com';

const NOTICE_PERIODS = [
  'Immediate Joiner',
  '15 Days Or Less',
  '30 Days',
  '45 Days',
  '60 Days',
  '90 Days Or More'
];

const QUALIFICATIONS = [
  'High School',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'MBA / PGDM',
  'Ph.D.',
  'Other'
];

const MAX_MESSAGE_LEN = 600;

/**
 * Builds a `mailto:` link from the application details. mailto cannot carry
 * a file attachment, so the resume file name is included in the body and
 * the applicant is told, before and after submitting, to attach it manually
 * once their mail client opens.
 */
function buildMailtoLink(fields, resumeFileName) {
  const lines = [
    `Position Applied For: ${fields.position}`,
    `Full Name: ${fields.fullName}`,
    `Email Address: ${fields.email}`,
    `Phone Number: ${fields.phone}`,
    `Current Location: ${fields.location}`,
    `Total Experience: ${fields.totalExperience}`,
    fields.relevantExperience && `Relevant Experience: ${fields.relevantExperience}`,
    fields.currentCompany && `Current / Previous Company: ${fields.currentCompany}`,
    fields.currentDesignation && `Current Designation: ${fields.currentDesignation}`,
    `Highest Qualification: ${fields.qualification}`,
    `Notice Period: ${fields.noticePeriod}`,
    fields.salary && `Current / Expected Salary: ${fields.salary}`,
    fields.linkedin && `LinkedIn Profile: ${fields.linkedin}`,
    fields.portfolio && `Portfolio / Website: ${fields.portfolio}`,
    '',
    fields.coverLetter && `Cover Letter / Message:\n${fields.coverLetter}`,
    fields.additionalInfo && `\nAdditional Information:\n${fields.additionalInfo}`,
    '',
    resumeFileName
      ? `Resume File: ${resumeFileName} (please attach this file before sending — mailto links cannot carry attachments automatically)`
      : 'Resume File: not attached'
  ].filter(Boolean);

  const subject = `Job Application — ${fields.position} — ${fields.fullName}`;
  const body = lines.join('\n');

  return `mailto:${APPLICATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function ApplicationForm({ position, onSubmitted }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [resumeName, setResumeName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);
    const resumeFile = data.get('resume');

    if (!resumeFile || !resumeFile.name) {
      setStatus('error');
      setErrorMsg('Please attach your resume/CV before submitting.');
      return;
    }

    const fields = {
      position: data.get('position')?.toString().trim(),
      fullName: data.get('fullName')?.toString().trim(),
      email: data.get('email')?.toString().trim(),
      phone: data.get('phone')?.toString().trim(),
      location: data.get('location')?.toString().trim(),
      totalExperience: data.get('totalExperience')?.toString().trim(),
      relevantExperience: data.get('relevantExperience')?.toString().trim(),
      currentCompany: data.get('currentCompany')?.toString().trim(),
      currentDesignation: data.get('currentDesignation')?.toString().trim(),
      qualification: data.get('qualification')?.toString().trim(),
      noticePeriod: data.get('noticePeriod')?.toString().trim(),
      salary: data.get('salary')?.toString().trim(),
      linkedin: data.get('linkedin')?.toString().trim(),
      portfolio: data.get('portfolio')?.toString().trim(),
      coverLetter: data.get('coverLetter')?.toString().trim(),
      additionalInfo: data.get('additionalInfo')?.toString().trim()
    };

    const mailtoLink = buildMailtoLink(fields, resumeFile.name);

    try {
      window.location.href = mailtoLink;
      setStatus('success');
      setErrorMsg('');
      onSubmitted?.();
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong opening your email app. Please email us directly instead.');
    }
  }

  if (status === 'success') {
    return (
      <div className="application-form__feedback success" role="status">
        <FiCheckCircle />
        <div>
          <strong>Almost done!</strong>
          <p>
            Your email app should now be open with your application pre-filled for{' '}
            <strong>{siteConfig.name}</strong>. Please attach your resume file
            {resumeName ? ` (${resumeName})` : ''} and hit send. If nothing opened, email your
            details directly to <a href={`mailto:${APPLICATION_EMAIL}`}>{APPLICATION_EMAIL}</a>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="application-form" onSubmit={handleSubmit} noValidate>
      {status === 'error' && (
        <div className="application-form__feedback error" role="alert">
          <FiAlertCircle />
          <p>{errorMsg}</p>
        </div>
      )}

      <input type="hidden" name="position" value={position} />

      <p className="application-form__applyingFor">
        Applying for <strong>{position}</strong>
      </p>

      <div className="application-form__grid">
        <label>
          Full Name <span className="req">*</span>
          <input type="text" name="fullName" placeholder="Your full name" required />
        </label>

        <label>
          Email Address <span className="req">*</span>
          <input type="email" name="email" placeholder="you@example.com" required />
        </label>

        <label>
          Phone Number <span className="req">*</span>
          <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
        </label>

        <label>
          Current Location <span className="req">*</span>
          <input type="text" name="location" placeholder="City, Country" required />
        </label>

        <label>
          Total Experience <span className="req">*</span>
          <input type="text" name="totalExperience" placeholder="e.g. 3 Years" required />
        </label>

        <label>
          Relevant Experience
          <input type="text" name="relevantExperience" placeholder="e.g. 2 Years" />
        </label>

        <label>
          Current / Previous Company
          <input type="text" name="currentCompany" placeholder="Company name" />
        </label>

        <label>
          Current Designation
          <input type="text" name="currentDesignation" placeholder="Your current role" />
        </label>

        <label>
          Highest Qualification <span className="req">*</span>
          <select name="qualification" defaultValue="" required>
            <option value="" disabled>Select qualification</option>
            {QUALIFICATIONS.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
        </label>

        <label>
          Notice Period <span className="req">*</span>
          <select name="noticePeriod" defaultValue="" required>
            <option value="" disabled>Select notice period</option>
            {NOTICE_PERIODS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>

        <label>
          Current / Expected Salary
          <input type="text" name="salary" placeholder="e.g. 6 LPA / Negotiable" />
        </label>

        <label>
          LinkedIn Profile
          <input type="url" name="linkedin" placeholder="https://linkedin.com/in/..." />
        </label>

        <label className="span-2">
          Portfolio / Website URL
          <input type="url" name="portfolio" placeholder="https://..." />
        </label>
      </div>

      <label>
        Cover Letter / Message
        <textarea
          name="coverLetter"
          rows={4}
          maxLength={MAX_MESSAGE_LEN}
          placeholder="Tell us why you're a great fit for this role"
        />
      </label>

      <label>
        Any Other Relevant Information
        <textarea
          name="additionalInfo"
          rows={3}
          maxLength={MAX_MESSAGE_LEN}
          placeholder="Anything else you'd like us to know (optional)"
        />
      </label>

      <label className="application-form__upload">
        Resume / CV Upload <span className="req">*</span>
        <span className="application-form__uploadBox">
          <FiUpload aria-hidden="true" />
          <span>{resumeName || 'Choose a file (PDF or Word, max 5MB)'}</span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            required
            onChange={(e) => setResumeName(e.target.files?.[0]?.name || '')}
          />
        </span>
      </label>

      <p className="application-form__note">
        Submitting opens your default email app with these details pre-filled, addressed to our
        hiring team — mailto links can't attach files automatically, so please attach your resume
        before hitting send.
      </p>

      <Button type="submit" size="lg" className="application-form__submit">
        Submit Application
      </Button>
    </form>
  );
}
