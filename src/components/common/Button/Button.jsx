import { Link } from 'react-router-dom';
import './Button.scss';

/**
 * Renders an <a>, react-router <Link>, or <button> depending on props,
 * so callers never need to think about the underlying element.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  className = '',
  ...rest
}) {
  const classes = `btn ${variant} ${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
