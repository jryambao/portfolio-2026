import { ChipList } from '../ui/ChipList.jsx';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';

export function Skills({ skillGroups }) {
  return (
    <SectionReveal className="section-pad" id="skills">
      <SectionHeading eyebrow="Technical Skills" title="Tools I use to ship production websites" />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <ScrollReveal as="article" className="skill-card" key={group.title} delay={index * 0.04}>
            <h3>{group.title}</h3>
            <ChipList items={group.items} />
          </ScrollReveal>
        ))}
      </div>
    </SectionReveal>
  );
}
