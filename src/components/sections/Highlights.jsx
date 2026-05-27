import { CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';

export function Highlights({ highlights }) {
  return (
    <SectionReveal className="section-pad highlight-band" aria-label="Profile highlights">
      {highlights.map((highlight) => (
        <ScrollReveal key={highlight} as="article" className="highlight-item">
          <CheckCircle2 size={20} />
          <p>{highlight}</p>
        </ScrollReveal>
      ))}
    </SectionReveal>
  );
}
