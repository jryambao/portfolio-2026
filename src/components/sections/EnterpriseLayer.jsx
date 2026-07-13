import { SectionIntro } from '../ui/SectionIntro.jsx';

export function EnterpriseLayer({ experience }) {
  return (
    <section className="enterprise-section section-shell" id="enterprise" aria-labelledby="enterprise-title">
      <SectionIntro
        label="Enterprise engineering"
        titleId="enterprise-title"
        title={experience.heading}
        introduction={experience.introduction}
      />

      <div className="system-map" aria-label="Simplified AEM component content flow">
        <ol>
          {experience.flow.map((item) => (
            <li key={item}>
              <span aria-hidden="true" />
              {item}
            </li>
          ))}
        </ol>
      </div>

      <ul className="enterprise-evidence" aria-label="Enterprise experience evidence">
        {experience.evidence.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <details className="enterprise-notes" open>
        <summary>Implementation notes</summary>
        <p>{experience.details}</p>
      </details>
    </section>
  );
}
