import { ArrowUpRight, Download } from 'lucide-react';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';
import { contactIcons } from '../../utils/contactIcons.jsx';
import { handleHashLinkClick } from '../../utils/smoothScroll.js';

export function Hero({ contacts, stats }) {
  return (
    <SectionReveal className="hero section-pad" id="profile" direction="none" amount={0.12}>
      <ScrollReveal className="hero-copy" direction="right" amount={0.15}>
        <p className="eyebrow">Frontend Web Developer / AEM Developer / WordPress Developer</p>
        <h1>John Ralph Yambao</h1>
        <p className="hero-text">
          I build responsive, performant websites across WordPress and Adobe Experience Manager, covering Figma-to-code
          implementation, custom components, API integrations, and launch support.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#ankor-work" onClick={(event) => handleHashLinkClick(event, '#ankor-work')}>
            View Ankor Work
            <ArrowUpRight size={18} />
          </a>
          <a className="secondary-action" href="/john-ralph-yambao-resume.pdf" target="_blank" rel="noreferrer">
            <Download size={18} />
            Resume
          </a>
        </div>
        <div className="contact-strip" aria-label="Contact details">
          {contacts.map((contact) => {
            const Icon = contactIcons[contact.type];

            return (
              <a key={contact.label} href={contact.href} onClick={(event) => handleHashLinkClick(event, contact.href)}>
                <Icon size={16} />
                <span>{contact.label}</span>
              </a>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal className="hero-panel" direction="left" delay={0.12} amount={0.15} aria-label="Professional summary">
        <div className="status-row">
          <span className="status-dot" />
          Available for frontend, WordPress, and AEM work
        </div>
        <div className="metric-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="metric">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="code-window">
          <div className="window-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <pre>{`const focus = [
  'React.js',
  'WordPress',
  'Adobe Experience Manager',
  'API-driven websites'
];`}</pre>
        </div>
      </ScrollReveal>
    </SectionReveal>
  );
}
