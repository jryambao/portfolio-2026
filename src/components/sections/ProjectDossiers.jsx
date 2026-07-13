import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../motion/Reveal.jsx';
import { SectionIntro } from '../ui/SectionIntro.jsx';

function ProjectCard({ project, position }) {
  return (
    <Reveal
      as="article"
      className="project-card"
      delay={(position % 3) * 70}
      id={`project-${project.id}`}
    >
      <figure className="project-media">
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          loading="lazy"
          decoding="async"
        />
        <figcaption>{project.category}</figcaption>
      </figure>

      <div className="project-card-body">
        <div className="project-card-heading">
          <span>{project.index}</span>
          <h3>{project.name}</h3>
          <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.name}`}>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <p className="project-context">{project.context}</p>
        <p className="project-outcome"><span>Proof</span>{project.outcome}</p>

        <ul className="project-stack" aria-label={`${project.name} technologies`}>
          {project.implementation.map((item) => <li key={item}>{item}</li>)}
        </ul>

        <details className="project-details">
          <summary>Implementation notes</summary>
          <div>
            <p><span>Role</span>{project.role}</p>
            {project.challenge ? <p><span>Challenge</span>{project.challenge}</p> : null}
            <p><span>Approach</span>{project.approach}</p>
            {project.contentGap ? <small>{project.contentGap}</small> : null}
          </div>
        </details>
      </div>
    </Reveal>
  );
}

export function ProjectDossiers({ projects }) {
  return (
    <section className="projects-section" id="work" aria-labelledby="work-title">
      <Reveal className="section-shell projects-intro-layout">
        <SectionIntro
          label="Selected work"
          titleId="work-title"
          title="Live work. Real constraints."
          introduction="Scan the outcome first; open the implementation notes only when you want the engineering detail."
        />
        <p className="project-count"><strong>{projects.length}</strong> production projects</p>
      </Reveal>

      <div className="section-shell project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} position={index} />
        ))}
      </div>
    </section>
  );
}
