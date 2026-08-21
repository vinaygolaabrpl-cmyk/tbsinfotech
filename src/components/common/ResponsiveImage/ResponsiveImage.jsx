/**
 * Thin wrapper that enforces the width/height/alt/loading contract
 * across the app so images never cause layout shift (CLS).
 */
export default function ResponsiveImage({ src, alt, width, height, className = '', ...rest }) {
  return (
    <img
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={className}
      {...rest}
    />
  );
}
