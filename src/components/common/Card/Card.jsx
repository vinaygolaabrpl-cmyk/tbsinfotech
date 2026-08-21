import './Card.scss';

export default function Card({ children, className = '', hover = true, ...rest }) {
  return (
    <div className={`ui-card ${hover ? 'hover' : ''} ${className}`} {...rest}>
      {children}
    </div>
  );
}
