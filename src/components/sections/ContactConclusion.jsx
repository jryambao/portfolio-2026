import { ArrowUp, ArrowUpRight, Download, Mail } from 'lucide-react';

export function ContactConclusion({ profile }) {
  return (
    <footer className="contact-section" id="contact">
      <div className="section-shell contact-layout">
        <div>
          <p className="section-label">Contact</p>
          <h2>The next useful system could be yours.</h2>
          <p>
            I am open to frontend and WordPress roles involving design-to-code implementation,
            component systems, AEM or enterprise CMS work, API-driven websites, and AI-assisted
            development workflows.
          </p>
        </div>

        <nav className="contact-actions" aria-label="Contact and profile links">
          <a className="contact-primary" href={profile.emailHref}>
            Email John
            <Mail aria-hidden="true" />
          </a>
          <div>
            <a href={profile.resumeHref} target="_blank" rel="noreferrer">
              Download resume
              <Download aria-hidden="true" />
            </a>
            {profile.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
            <a href="#top">
              Back to top
              <ArrowUp aria-hidden="true" />
            </a>
          </div>
        </nav>

        <address>
          <span>{profile.name}</span>
          <span>{profile.location}</span>
          <a href={profile.emailHref}>{profile.email}</a>
        </address>
      </div>
    </footer>
  );
}
