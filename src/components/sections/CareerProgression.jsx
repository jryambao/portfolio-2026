import { Reveal } from '../motion/Reveal.jsx';
import { SectionIntro } from '../ui/SectionIntro.jsx';

export function CareerProgression({ chapters, learningBackground }) {
  return (
    <Reveal as="section" className="career-section section-shell" id="experience" aria-labelledby="experience-title">
      <SectionIntro
        label="Experience"
        titleId="experience-title"
        title="Work experience and responsibilities."
        introduction="Production responsibilities across WordPress, AEM, API integrations, and delivery."
      />

      <ol className="career-list">
        {chapters.map((chapter, index) => (
          <Reveal
            as="li"
            id={`career-chapter-${chapter.chapter}`}
            key={chapter.chapter}
            delay={index * 70}
          >
            <article className="career-entry">
              <div className="chapter-meta">
                <span>{chapter.chapter}</span>
                <p>{chapter.period}</p>
              </div>

              <div className="chapter-role">
                <p>{chapter.company}</p>
                <h3>{chapter.role}</h3>
              </div>

              <div className="chapter-proof">
                <p>{chapter.capability}</p>
                <ul className="evidence-line" aria-label={`${chapter.title} technologies`}>
                  {chapter.evidence.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>

              <div className="career-responsibilities">
                <p className="field-label">Responsibilities</p>
                <ul>
                  {chapter.responsibilities.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </ol>

      <aside className="learning-background" aria-label="Education and training">
        <p className="field-label">Education + training</p>
        <div>
          {learningBackground.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.place} / {item.period}</p>
              {item.note ? <small>{item.note}</small> : null}
            </article>
          ))}
        </div>
      </aside>
    </Reveal>
  );
}
