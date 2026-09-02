const API_BASE = (import.meta.env.VITE_API_BASE_URL || '').trim();
const MAIL_ENDPOINT = `${API_BASE || import.meta.env.BASE_URL}php/send-mail.php`;

/**
 * Submits a form to the PHPMailer backend. `fields` may include a File
 * value (e.g. a resume upload) — everything is sent as multipart/form-data
 * so file fields work without extra branching.
 */
export async function submitForm(formType, fields) {
  const formData = new FormData();
  formData.append('form_type', formType);
  Object.entries(fields).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    formData.append(key, value);
  });

  const response = await fetch(MAIL_ENDPOINT, {
    method: 'POST',
    body: formData
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch {
    // Non-JSON response (e.g. a server error page) — falls through to the generic error below.
  }

  if (!response.ok || !payload?.success) {
    throw new Error(payload?.message || 'Something went wrong sending your message. Please try again.');
  }

  return payload;
}
