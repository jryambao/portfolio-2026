import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';
import { SectionHeading } from '../ui/SectionHeading.jsx';
import { handleHashLinkClick } from '../../utils/smoothScroll.js';

function getScreenshotUrl(url) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
}

export function Projects({ projects }) {
  return (
    <SectionReveal className="section-pad ankor-section" id="ankor-work">
      <SectionHeading
        eyebrow="Ankor IO / Ingnius"
        title="Live projects shipped for yacht charter and real estate clients"
        className="split-heading"
      >
        <a className="text-link" href="#experience" onClick={(event) => handleHashLinkClick(event, '#experience')}>
          See role details
          <ArrowUpRight size={16} />
        </a>
      </SectionHeading>

      <div className="project-grid">
        {projects.map((project, index) => (
          <ScrollReveal as="article" className="project-card" key={project.name} delay={index * 0.05}>
            <a
              className="project-image"
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name}`}
            >
              <img src={getScreenshotUrl(project.url)} alt={`${project.name} website preview`} loading="lazy" />
            </a>
            <div className="project-body">
              <div>
                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
              </div>
              <p>{project.detail}</p>
              <a href={project.url} target="_blank" rel="noreferrer">
                Visit site
                <ExternalLink size={15} />
              </a>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </SectionReveal>
  );
}
