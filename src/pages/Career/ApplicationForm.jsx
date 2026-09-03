import { useRef, useState } from 'react';
import { FiAlertCircle, FiUpload } from 'react-icons/fi';
import Button from '../../components/common/Button';
import Recaptcha from '../../components/common/Recaptcha';
import siteConfig from '../../data/siteConfig.json';
import { submitForm } from '../../services/mailApi';
import { showSuccessAlert } from '../../utils/swalAlerts';

const RECAPTCHA_ENABLED = Boolean(import.meta.env.VITE_RECAPTCHA_SITE_KEY);

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

const INITIAL_VALUES = {
  fullName: '', email: '', phone: '', location: '', totalExperience: '',
  relevantExperience: '', currentCompany: '', currentDesignation: '',
  qualification: '', noticePeriod: '', salary: '', linkedin: '', portfolio: '',
  coverLetter: '', additionalInfo: ''
};

const NAME_REGEX = /^[a-zA-Z\s.'-]+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[\d\s()-]{7,15}$/;
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

const REQUIRED_FIELDS = ['fullName', 'email', 'phone', 'location', 'totalExperience', 'qualification', 'noticePeriod'];
const OPTIONAL_VALIDATED_FIELDS = ['linkedin', 'portfolio'];

export default function ApplicationForm({ position, onSubmitted }) {
  const [status, setStatus] = useState('idle'); // idle | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

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

  async function handleSubmit(e) {
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

    if (RECAPTCHA_ENABLED && !recaptchaToken) {
      setStatus('error');
      setErrorMsg('Please complete the reCAPTCHA check.');
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
      additionalInfo: values.additionalInfo.trim(),
      recaptcha_token: recaptchaToken
    };

    setIsSubmitting(true);
    try {
      await submitForm('application', { ...fields, resume: resumeFile });
      const submittedResumeName = resumeName;
      setStatus('idle');
      setErrorMsg('');
      setValues(INITIAL_VALUES);
      setFieldErrors({});
      setTouched({});
      setResumeFile(null);
      setResumeName('');
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
      onSubmitted?.();
      showSuccessAlert({
        title: 'Application received!',
        text: `Thanks for applying to ${siteConfig.name}. Your details${submittedResumeName ? ` and resume (${submittedResumeName})` : ''} have been sent to our hiring team.`
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong sending your application. Please email us directly instead.');
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
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
        Submitting sends these details, along with your resume, directly to our hiring team.
      </p>

      <Recaptcha ref={recaptchaRef} onChange={setRecaptchaToken} />

      <Button type="submit" size="lg" className="application-form__submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit Application'}
      </Button>
    </form>
  );
}
