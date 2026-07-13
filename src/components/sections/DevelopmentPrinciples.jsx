import { SectionIntro } from '../ui/SectionIntro.jsx';

export function DevelopmentPrinciples({ principles }) {
  return (
    <section className="principles-section section-shell" aria-labelledby="principles-title">
      <SectionIntro
        label="Principles carried forward"
        titleId="principles-title"
        title="What the work has taught me."
      />
      <ol className="principle-track">
        {principles.map((principle, index) => (
          <li key={principle}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{principle}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
