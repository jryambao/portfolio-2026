import { ArrowDownRight, ArrowUpRight, Download, Mail } from 'lucide-react';

export function OpeningStatement({ profile }) {
  return (
    <section className="opening" aria-labelledby="opening-heading">
      <div className="opening-rail">
        <div>
          <p className="section-label">Identity</p>
          <p className="identity-name" aria-label={profile.name}>
            <span>John</span>
            <span>Ralph</span>
            <span>Yambao</span>
          </p>
        </div>

        <dl className="identity-meta">
          <div>
            <dt>Practice</dt>
            <dd>{profile.roleLine}</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{profile.availability}</dd>
          </div>
        </dl>

        <nav className="opening-actions" aria-label="Introduction actions">
          <a className="text-action is-primary" href="#projects-title">
            Explore project dossiers
            <ArrowDownRight aria-hidden="true" />
          </a>
          <a className="text-action" href="#progression-title">
            View progression
            <ArrowDownRight aria-hidden="true" />
          </a>
          <a className="text-action" href={profile.resumeHref} target="_blank" rel="noreferrer">
            Download resume
            <Download aria-hidden="true" />
          </a>
          <a className="text-action" href={profile.emailHref}>
            Contact me
            <Mail aria-hidden="true" />
          </a>
        </nav>

        <div className="opening-trace" aria-hidden="true">
          <span />
        </div>
      </div>

      <div className="opening-thesis">
        <h1 id="opening-heading" aria-label={profile.heading}>
          <span>I build websites where</span>
          <span>design, content systems,</span>
          <span>and production code meet.</span>
        </h1>
        <p>{profile.introduction}</p>

        <a className="mobile-opening-action" href="#projects-title">
          Explore project dossiers
          <ArrowDownRight aria-hidden="true" />
        </a>

        <a className="next-chapter" href="#progression-title">
          <span className="next-chapter-label">Next chapter</span>
          <strong>01</strong>
          <span>
            <small>WordPress foundations</small>
            Building the system behind the page
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
