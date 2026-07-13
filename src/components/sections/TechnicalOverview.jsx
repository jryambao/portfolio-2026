import { Reveal } from '../motion/Reveal.jsx';
import { SectionIntro } from '../ui/SectionIntro.jsx';

export function TechnicalOverview({ experience, groups, workflow, aiPractice }) {
  return (
    <Reveal as="section" className="systems-section section-shell" id="systems" aria-labelledby="systems-title">
      <SectionIntro
        label="Systems + delivery"
        titleId="systems-title"
        title="CMS depth, frontend craft, production judgment."
        introduction="The stack matters when it solves an authoring, data, delivery, or maintenance problem."
      />

      <div className="systems-grid">
        <article className="enterprise-card">
          <p className="field-label">Enterprise CMS</p>
          <h3>{experience.heading}</h3>
          <p>{experience.introduction}</p>
          <ol className="system-flow" aria-label="Simplified AEM component flow">
            {experience.flow.map((item) => <li key={item}>{item}</li>)}
          </ol>
          <ul className="enterprise-tags" aria-label="Enterprise experience evidence">
            {experience.evidence.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <details>
            <summary>Technical scope</summary>
            <p>{experience.details}</p>
          </details>
        </article>

        <div className="capability-grid">
          {groups.map((group, index) => (
            <Reveal as="article" key={group.index} delay={index * 45}>
              <span>{group.index}</span>
              <h3>{group.title}</h3>
              <p>{group.items.join(' / ')}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="delivery-row">
        <div>
          <p className="field-label">Delivery loop</p>
          <ol className="workflow-list">
            {workflow.map((step) => (
              <li key={step.index}><span>{step.index}</span>{step.title}</li>
            ))}
          </ol>
        </div>

        <aside className="ai-note">
          <p className="field-label">AI-assisted development</p>
          <h3>{aiPractice.heading}</h3>
          <p>{aiPractice.body}</p>
          <p className="ai-tools">{aiPractice.tools.join(' / ')}</p>
        </aside>
      </div>
    </Reveal>
  );
}
