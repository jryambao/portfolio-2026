import { SectionIntro } from '../ui/SectionIntro.jsx';

export function WorkingMethod({ workflow, aiPractice }) {
  return (
    <section className="method-section" id="how-i-work" aria-labelledby="method-title">
      <div className="section-shell method-layout">
        <div>
          <SectionIntro
            label="Working method"
            titleId="method-title"
            title="How I move work from design to production."
          />

          <ol className="workflow-list">
            {workflow.map((step) => (
              <li key={step.index}>
                <span>{step.index}</span>
                <p>{step.title}</p>
              </li>
            ))}
          </ol>
        </div>

        <aside className="ai-note">
          <p className="field-label">AI note</p>
          <h3>{aiPractice.heading}</h3>
          <p>{aiPractice.body}</p>
          <ul className="evidence-line" aria-label="AI development tools">
            {aiPractice.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
