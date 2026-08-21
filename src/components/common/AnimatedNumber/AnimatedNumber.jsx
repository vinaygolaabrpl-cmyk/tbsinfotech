import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Splits "1,000+" / "98%" / "18+" into a leading prefix, the numeric
// target, and a trailing suffix, remembering whether to keep thousands
// separators while the count animates.
function parseValue(raw) {
  const match = String(raw).match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: '', target: 0, suffix: String(raw), hasComma: false };
  const [, prefix, numStr, suffix] = match;
  return { prefix, target: Number(numStr.replace(/,/g, '')), suffix, hasComma: numStr.includes(',') };
}

export default function AnimatedNumber({ value, duration = 1.8 }) {
  const ref = useRef(null);
  const { prefix, target, suffix, hasComma } = parseValue(value);

  useGSAP(
    () => {
      if (!ref.current) return;

      if (!target) {
        ref.current.textContent = String(value);
        return;
      }

      const counter = { val: 0 };
      gsap.fromTo(
        counter,
        { val: 0 },
        {
          val: target,
          duration,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
          onUpdate: () => {
            const current = Math.round(counter.val);
            ref.current.textContent = `${prefix}${hasComma ? current.toLocaleString('en-US') : current}${suffix}`;
          }
        }
      );
    },
    { scope: ref, dependencies: [value] }
  );

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
