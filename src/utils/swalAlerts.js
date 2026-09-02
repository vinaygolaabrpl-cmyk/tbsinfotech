import Swal from 'sweetalert2';

/**
 * Shows a SweetAlert2 success popup styled with the site's existing CSS
 * variables, so it automatically matches the current light/dark theme
 * instead of hardcoding colors.
 */
export function showSuccessAlert({ title = 'Success!', text }) {
  return Swal.fire({
    icon: 'success',
    title,
    text,
    confirmButtonText: 'OK',
    background: 'var(--card-bg)',
    color: 'var(--text)',
    confirmButtonColor: 'var(--primary)',
    iconColor: 'var(--primary)'
  });
}
