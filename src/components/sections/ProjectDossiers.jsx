import { ArrowUpRight } from 'lucide-react';
import { SectionIntro } from '../ui/SectionIntro.jsx';

function Fact({ label, children }) {
  if (!children) return null;

  return (
    <div>
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function ProjectDossier({ project }) {
  return (
    <article className="project-dossier">
      <header className="dossier-header" id={`project-${project.id}`}>
        <span className="dossier-number">{project.index}</span>
        <h3>{project.name}</h3>
        <dl className="dossier-meta">
          <div>
            <dt>Type</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack}</dd>
          </div>
          <div>
            <dt>Integration</dt>
            <dd>{project.integration}</dd>
          </div>
        </dl>
        <a className="external-link" href={project.url} target="_blank" rel="noreferrer">
          Visit {project.name}
          <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <figure className="project-media">
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <p className="media-caption">{project.image.alt}</p>

      <dl className="dossier-facts">
        <Fact label="Context">{project.context}</Fact>
        <Fact label="Challenge">{project.challenge}</Fact>
        <Fact label="Approach">{project.approach}</Fact>
        <Fact label="Result">{project.outcome}</Fact>
        <Fact label="Learning">{project.learning}</Fact>
      </dl>

      <details className="implementation-notes">
        <summary>Open implementation notes</summary>
        <div className="implementation-body">
          <div>
            <p className="field-label">My role</p>
            <p>{project.role}</p>
          </div>
          <div>
            <p className="field-label">Implementation</p>
            <ul className="evidence-line">
              {project.implementation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {project.contentGap ? (
            <p className="content-gap">
              <span>Documentation note</span>
              {project.contentGap}
            </p>
          ) : null}
        </div>
      </details>
    </article>
  );
}

export function ProjectDossiers({ projects }) {
  return (
    <section className="projects-section" id="project-dossiers" aria-labelledby="projects-title">
      <div className="section-shell projects-intro-layout">
        <SectionIntro
          label="Project dossiers"
          titleId="projects-title"
          title="Selected work, documented as decisions."
          introduction="The useful part of a project is not just how it looked. It is the system, constraint, and production problem behind it."
        />

        <nav className="project-index" aria-label="Project dossier index">
          <ol>
            {projects.map((project) => (
              <li key={project.id}>
                <a href={`#project-${project.id}`}>
                  <span>{project.index}</span>
                  {project.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      <div className="dossier-stack">
        {projects.map((project) => (
          <ProjectDossier key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
