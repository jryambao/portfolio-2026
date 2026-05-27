import { ScrollReveal } from '../motion/ScrollReveal.jsx';

export function SectionHeading({ eyebrow, title, children, className = '' }) {
  return (
    <ScrollReveal className={`section-heading ${className}`.trim()} direction="none">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </ScrollReveal>
  );
}
