import { useState } from 'react';
import './FaqAccordion.scss';

export default function FaqAccordion({ faqs }) {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <div className="faq-accordion">
      {faqs.map((faq, i) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="item"
            data-open={isOpen}
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            <button
              className="question"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              aria-expanded={isOpen}
            >
              {faq.question}
              <span className="chevron" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
            </button>
            <div className="answerWrap">
              <p className="answer">{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
