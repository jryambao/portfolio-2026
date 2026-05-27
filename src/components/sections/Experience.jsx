import { BriefcaseBusiness } from 'lucide-react';
import { ChipList } from '../ui/ChipList.jsx';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function Experience({ experience }) {
  return (
    <SectionReveal className="section-pad" id="experience">
      <SectionHeading
        eyebrow="Work Experience"
        title="Frontend delivery across CMS platforms, AEM, and API-backed builds"
      />
      <div className="timeline">
        {experience.map((item, index) => (
          <ScrollReveal as="article" className="timeline-item" key={`${item.company}-${item.role}`} delay={index * 0.05}>
            <div className="timeline-marker">
              <BriefcaseBusiness size={18} />
            </div>
            <div className="timeline-content">
              <div className="timeline-title">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <span>{item.period}</span>
              </div>
              {item.meta ? <p className="timeline-meta">{item.meta}</p> : null}
              <ChipList items={item.tags} compact />
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionReveal>
  );
}
