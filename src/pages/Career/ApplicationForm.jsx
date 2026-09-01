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
const MAX_RESUME_BYTES = 5 * 1024 * 1024;

const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,20}$/;
const URL_REGEX = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i;

function validateField(name, value) {
  const v = (value ?? '').toString().trim();
  switch (name) {
    case 'fullName':
      if (!v) return 'Please enter your full name.';
      if (v.length < 2) return 'Name must be at least 2 characters.';
      if (!NAME_REGEX.test(v)) return "Name can only contain letters, spaces and - ' .";
      return '';
    case 'email':
      if (!v) return 'Please enter your email address.';
      if (!EMAIL_REGEX.test(v)) return 'Please enter a valid email address.';
      return '';
    case 'phone':
      if (!v) return 'Please enter your phone number.';
      if (!PHONE_REGEX.test(v)) return 'Please enter a valid phone number.';
      return '';
    case 'location':
      if (!v) return 'Please enter your current location.';
      return '';
    case 'totalExperience':
      if (!v) return 'Please enter your total experience.';
      return '';
    case 'qualification':
      if (!v) return 'Please select your highest qualification.';
      return '';
    case 'noticePeriod':
      if (!v) return 'Please select your notice period.';
      return '';
    case 'linkedin':
      if (v && !URL_REGEX.test(v)) return 'Please enter a valid URL.';
      return '';
    case 'portfolio':
      if (v && !URL_REGEX.test(v)) return 'Please enter a valid URL.';
      return '';
    default:
      return '';
  }
}

function validateResume(file) {
  if (!file || !file.name) return 'Please attach your resume/CV.';
  const okType = /\.(pdf|docx?|DOCX?|PDF)$/.test(file.name);
  if (!okType) return 'Resume must be a PDF or Word document.';
  if (file.size > MAX_RESUME_BYTES) return 'Resume file must be under 5MB.';
  return '';
}

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

const REQUIRED_FIELDS = ['fullName', 'email', 'phone', 'location', 'totalExperience', 'qualification', 'noticePeriod'];
const OPTIONAL_VALIDATED_FIELDS = ['linkedin', 'portfolio'];

export default function ApplicationForm({ position, onSubmitted }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [resumeName, setResumeName] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [values, setValues] = useState({
    fullName: '', email: '', phone: '', location: '', totalExperience: '',
    relevantExperience: '', currentCompany: '', currentDesignation: '',
    qualification: '', noticePeriod: '', salary: '', linkedin: '', portfolio: '',
    coverLetter: '', additionalInfo: ''
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setFieldErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  function handleResumeChange(e) {
    const file = e.target.files?.[0] || null;
    setResumeFile(file);
    setResumeName(file?.name || '');
    setTouched((prev) => ({ ...prev, resume: true }));
    setFieldErrors((prev) => ({ ...prev, resume: validateResume(file) }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const nextErrors = {};
    [...REQUIRED_FIELDS, ...OPTIONAL_VALIDATED_FIELDS].forEach((name) => {
      nextErrors[name] = validateField(name, values[name]);
    });
    nextErrors.resume = validateResume(resumeFile);

    setFieldErrors(nextErrors);
    setTouched((prev) => {
      const next = { ...prev };
      Object.keys(nextErrors).forEach((k) => { next[k] = true; });
      return next;
    });

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) {
      setStatus('error');
      setErrorMsg('Please fix the highlighted fields below.');
      return;
    }

    const fields = {
      position,
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      location: values.location.trim(),
      totalExperience: values.totalExperience.trim(),
      relevantExperience: values.relevantExperience.trim(),
      currentCompany: values.currentCompany.trim(),
      currentDesignation: values.currentDesignation.trim(),
      qualification: values.qualification.trim(),
      noticePeriod: values.noticePeriod.trim(),
      salary: values.salary.trim(),
      linkedin: values.linkedin.trim(),
      portfolio: values.portfolio.trim(),
      coverLetter: values.coverLetter.trim(),
      additionalInfo: values.additionalInfo.trim()
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
          <input
            type="text"
            name="fullName"
            placeholder="Your full name"
            aria-invalid={Boolean(fieldErrors.fullName)}
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.fullName && <span className="field-error">{fieldErrors.fullName}</span>}
        </label>

        <label>
          Email Address <span className="req">*</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(fieldErrors.email)}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.email && <span className="field-error">{fieldErrors.email}</span>}
        </label>

        <label>
          Phone Number <span className="req">*</span>
          <input
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            aria-invalid={Boolean(fieldErrors.phone)}
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.phone && <span className="field-error">{fieldErrors.phone}</span>}
        </label>

        <label>
          Current Location <span className="req">*</span>
          <input
            type="text"
            name="location"
            placeholder="City, Country"
            aria-invalid={Boolean(fieldErrors.location)}
            value={values.location}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.location && <span className="field-error">{fieldErrors.location}</span>}
        </label>

        <label>
          Total Experience <span className="req">*</span>
          <input
            type="text"
            name="totalExperience"
            placeholder="e.g. 3 Years"
            aria-invalid={Boolean(fieldErrors.totalExperience)}
            value={values.totalExperience}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.totalExperience && <span className="field-error">{fieldErrors.totalExperience}</span>}
        </label>

        <label>
          Relevant Experience
          <input
            type="text"
            name="relevantExperience"
            placeholder="e.g. 2 Years"
            value={values.relevantExperience}
            onChange={handleChange}
          />
        </label>

        <label>
          Current / Previous Company
          <input
            type="text"
            name="currentCompany"
            placeholder="Company name"
            value={values.currentCompany}
            onChange={handleChange}
          />
        </label>

        <label>
          Current Designation
          <input
            type="text"
            name="currentDesignation"
            placeholder="Your current role"
            value={values.currentDesignation}
            onChange={handleChange}
          />
        </label>

        <label>
          Highest Qualification <span className="req">*</span>
          <select
            name="qualification"
            value={values.qualification}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(fieldErrors.qualification)}
          >
            <option value="" disabled>Select qualification</option>
            {QUALIFICATIONS.map((q) => (
              <option key={q} value={q}>{q}</option>
            ))}
          </select>
          {fieldErrors.qualification && <span className="field-error">{fieldErrors.qualification}</span>}
        </label>

        <label>
          Notice Period <span className="req">*</span>
          <select
            name="noticePeriod"
            value={values.noticePeriod}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(fieldErrors.noticePeriod)}
          >
            <option value="" disabled>Select notice period</option>
            {NOTICE_PERIODS.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          {fieldErrors.noticePeriod && <span className="field-error">{fieldErrors.noticePeriod}</span>}
        </label>

        <label>
          Current / Expected Salary
          <input
            type="text"
            name="salary"
            placeholder="e.g. 6 LPA / Negotiable"
            value={values.salary}
            onChange={handleChange}
          />
        </label>

        <label>
          LinkedIn Profile
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/..."
            aria-invalid={Boolean(fieldErrors.linkedin)}
            value={values.linkedin}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.linkedin && <span className="field-error">{fieldErrors.linkedin}</span>}
        </label>

        <label className="span-2">
          Portfolio / Website URL
          <input
            type="url"
            name="portfolio"
            placeholder="https://..."
            aria-invalid={Boolean(fieldErrors.portfolio)}
            value={values.portfolio}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {fieldErrors.portfolio && <span className="field-error">{fieldErrors.portfolio}</span>}
        </label>
      </div>

      <label>
        Cover Letter / Message
        <textarea
          name="coverLetter"
          rows={4}
          maxLength={MAX_MESSAGE_LEN}
          placeholder="Tell us why you're a great fit for this role"
          value={values.coverLetter}
          onChange={handleChange}
        />
      </label>

      <label>
        Any Other Relevant Information
        <textarea
          name="additionalInfo"
          rows={3}
          maxLength={MAX_MESSAGE_LEN}
          placeholder="Anything else you'd like us to know (optional)"
          value={values.additionalInfo}
          onChange={handleChange}
        />
      </label>

      <label className="application-form__upload">
        Resume / CV Upload <span className="req">*</span>
        <span className="application-form__uploadBox" data-invalid={Boolean(fieldErrors.resume)}>
          <FiUpload aria-hidden="true" />
          <span>{resumeName || 'Choose a file (PDF or Word, max 5MB)'}</span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
          />
        </span>
        {fieldErrors.resume && <span className="field-error">{fieldErrors.resume}</span>}
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
