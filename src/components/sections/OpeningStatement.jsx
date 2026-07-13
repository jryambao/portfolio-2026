import { ArrowDownRight, ArrowUpRight, Download, Mail } from 'lucide-react';

const proofPoints = [
  ['3+ years', 'Professional delivery'],
  ['WordPress + AEM', 'CMS engineering'],
  ['APIs + live data', 'Integration work'],
  ['Staging to production', 'Release ownership'],
];

export function OpeningStatement({ profile }) {
  return (
    <section className="opening section-shell" aria-labelledby="opening-heading">
      <div className="opening-kicker">
        <span>{profile.name}</span>
        <span>{profile.availability}</span>
      </div>

      <div className="opening-grid">
        <div className="opening-copy">
          <p className="section-label">Frontend developer / WordPress / AEM</p>
          <h1 id="opening-heading">
            <span>Frontend systems</span>
            <span>that survive</span>
            <span>production.</span>
          </h1>
          <p className="opening-intro">{profile.introduction}</p>

          <div className="opening-actions" aria-label="Introduction actions">
            <a className="primary-action" href="#work">
              View selected work
              <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="secondary-action" href={profile.emailHref}>
              Contact me
              <Mail aria-hidden="true" />
            </a>
            <a className="utility-action" href={profile.resumeHref} target="_blank" rel="noreferrer">
              Resume
              <Download aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="opening-proof" aria-label="Experience summary">
          <p className="field-label">Current practice</p>
          <p className="proof-role">{profile.roleLine}</p>
          <dl>
            {proofPoints.map(([value, label]) => (
              <div key={value}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <a href="#experience">
            Experience at a glance
            <ArrowUpRight aria-hidden="true" />
          </a>
        </aside>
      </div>

      <div className="build-signal" aria-label="Delivery path">
        {['Design', 'Components', 'Data', 'Production'].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
