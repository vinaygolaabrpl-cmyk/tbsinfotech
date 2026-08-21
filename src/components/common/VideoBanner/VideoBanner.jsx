import { useState } from 'react';
import './VideoBanner.scss';

export default function VideoBanner({ src = '/videos/banner.mp4', poster, children }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="video-banner">
      {!failed ? (
        <video
          className="video"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          onError={() => setFailed(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img className="video" src={poster} alt="" aria-hidden="true" />
      )}
      <div className="overlay" />
      <div className="content">{children}</div>
    </div>
  );
}
