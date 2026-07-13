import { ArrowDownRight } from 'lucide-react';
import { SectionIntro } from '../ui/SectionIntro.jsx';

export function EvidenceIndex({ groups }) {
  return (
    <section className="evidence-section section-shell" id="evidence" aria-labelledby="evidence-title">
      <SectionIntro
        label="Skills as evidence"
        titleId="evidence-title"
        title="Capabilities, connected to where I used them."
      />

      <ol className="capability-index">
        {groups.map((group) => (
          <li key={group.index}>
            <span className="capability-number">{group.index}</span>
            <h3>{group.title}</h3>
            <p>{group.items.join(', ')}</p>
            <ul>
              {group.evidence.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>
                    {item.label}
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
