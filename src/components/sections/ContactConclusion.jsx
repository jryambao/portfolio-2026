import { ArrowUp, ArrowUpRight, Download, Mail } from 'lucide-react';
import { Reveal } from '../motion/Reveal.jsx';

export function ContactConclusion({ profile }) {
  return (
    <Reveal as="footer" className="contact-section" id="contact">
      <div className="section-shell contact-layout">
        <div>
          <p className="section-label">Available for the right role</p>
          <h2>Need a frontend developer who can follow the work into production?</h2>
        </div>

        <div className="contact-copy">
          <p>
            I work across design implementation, WordPress systems, AEM components,
            API-driven websites, and the debugging that happens after launch.
          </p>
          <a className="contact-primary" href={profile.emailHref}>
            Email John
            <Mail aria-hidden="true" />
          </a>
        </div>

        <nav className="contact-links" aria-label="Contact and profile links">
          <a href={profile.resumeHref} target="_blank" rel="noreferrer">
            Resume <Download aria-hidden="true" />
          </a>
          {profile.links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
          <a href="#top">Back to top <ArrowUp aria-hidden="true" /></a>
        </nav>
      </div>
    </Reveal>
  );
}
