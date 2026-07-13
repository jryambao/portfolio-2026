import { SectionIntro } from '../ui/SectionIntro.jsx';

export function CareerProgression({ chapters, learningBackground }) {
  return (
    <section className="career-section section-shell" id="progression" aria-labelledby="progression-title">
      <SectionIntro
        label="Career progression"
        titleId="progression-title"
        title="Progression, not a flat skills list."
        introduction="Each role changed the scale of the problems I could take on."
      />

      <ol className="career-list">
        {chapters.map((chapter) => (
          <li id={`career-chapter-${chapter.chapter}`} key={chapter.chapter}>
            <article className="career-entry">
              <div className="chapter-meta">
                <span className="chapter-number">{chapter.chapter}</span>
                <p>{chapter.period}</p>
              </div>

              <div className="career-marker" aria-hidden="true">
                <span />
              </div>

              <div className="chapter-role">
                <h3>{chapter.title}</h3>
                <p>{chapter.role}</p>
                <span>{chapter.company}</span>
              </div>

              <div className="chapter-growth">
                <p className="field-label">Capability gained</p>
                <p className="capability-copy">{chapter.capability}</p>
                <ul className="responsibility-list">
                  {chapter.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="evidence-line" aria-label={`${chapter.title} evidence`}>
                  {chapter.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="chapter-lesson">
                  <span>Carried forward</span>
                  {chapter.lesson}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ol>

      <div className="progression-summary">
        <p className="field-label">What changed</p>
        <p>Page implementation → reusable systems → production ownership</p>
      </div>

      <aside className="learning-background" aria-labelledby="learning-title">
        <p className="field-label" id="learning-title">Before the first role</p>
        <div>
          {learningBackground.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.place}</p>
              <span>{item.period}</span>
              {item.note ? <small>{item.note}</small> : null}
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
