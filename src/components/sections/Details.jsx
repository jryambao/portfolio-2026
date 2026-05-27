import { Award, Sparkles } from 'lucide-react';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function Details({ abilities, education }) {
  return (
    <SectionReveal className="section-pad detail-columns">
      <ScrollReveal>
        <SectionHeading eyebrow="Other Strengths" title="Practical delivery habits" />
        <div className="ability-list">
          {abilities.map((ability) => (
            <span key={ability}>
              <Sparkles size={16} />
              {ability}
            </span>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <SectionHeading eyebrow="Education" title="Training and awards" />
        <div className="education-list">
          {education.map((item) => (
            <article key={item.title}>
              <div className="education-icon">
                <Award size={18} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <span>{item.period}</span>
                {item.note ? <small>{item.note}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </SectionReveal>
  );
}
