import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SectionTitle.scss';

gsap.registerPlugin(ScrollTrigger);

/**
 * Encapsulates the GSAP + ScrollTrigger heading reveal so every page
 * gets the same title animation just by reusing this component.
 * AOS is intentionally NOT used here — cards/sections use AOS,
 * headings use GSAP, so the two libraries never fight over the same node.
 */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  subtitlePill = false,
  align = 'center',
  as: Tag = 'h2'
}) {
  const ref = useRef(null);

  useGSAP(() => {
    if (!ref.current) return;
    const words = ref.current.querySelectorAll('[data-word]');
    gsap.fromTo(
      words,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%'
        }
      }
    );
  }, { scope: ref });

  const words = title.split(' ');

  return (
    <div className={`section-title ${align}`} ref={ref}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag className="title">
        {words.map((word, i) => (
          <span className="wordMask" key={`${word}-${i}`}>
            <span data-word className="word">
              {word}&nbsp;
            </span>
          </span>
        ))}
      </Tag>
      {subtitle &&
        (subtitlePill ? (
          <span className="eyebrow subtitlePill mt-5">{subtitle}</span>
        ) : (
          <p className="subtitle">{subtitle}</p>
        ))}
    </div>
  );
}
