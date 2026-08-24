import { useLayoutEffect, useRef, useState } from 'react';
import './FaqAccordion.scss';

function FaqItem({ faq, index, isOpen, onToggle }) {
  const answerRef = useRef(null);
  const wrapRef = useRef(null);

  // Measuring the real content height (rather than relying only on the CSS
  // `grid-template-rows: 0fr/1fr` trick) guarantees the accordion opens and
  // closes correctly on every browser/device, with no layout jump — and it
  // is re-measured whenever this item opens/closes or the viewport resizes
  // (answer text can wrap differently on mobile vs. desktop).
  useLayoutEffect(() => {
    const applyHeight = () => {
      if (!wrapRef.current || !answerRef.current) return;
      wrapRef.current.style.maxHeight = isOpen ? `${answerRef.current.scrollHeight}px` : '0px';
    };

    applyHeight();

    if (!isOpen) return undefined;

    window.addEventListener('resize', applyHeight);
    return () => window.removeEventListener('resize', applyHeight);
  }, [isOpen, faq.answer]);

  return (
    <div
      className="item"
      data-open={isOpen}
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      <button
        className="question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {faq.question}
        <span className="chevron" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
      </button>
      <div className="answerWrap" ref={wrapRef}>
        <p className="answer" ref={answerRef}>{faq.answer}</p>
      </div>
    </div>
  );
}

export default function FaqAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, i) => {
        const isOpen = openId === faq.id;
        return (
          <FaqItem
            key={faq.id}
            faq={faq}
            index={i}
            isOpen={isOpen}
            onToggle={() => setOpenId(isOpen ? null : faq.id)}
          />
        );
      })}
    </div>
  );
}
