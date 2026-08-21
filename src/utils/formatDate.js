export function formatDate(isoDate, locale = 'en-US') {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}
