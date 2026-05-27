import { Code2, Mail, Phone } from 'lucide-react';
import { SectionReveal } from '../motion/SectionReveal.jsx';
import { ScrollReveal } from '../motion/ScrollReveal.jsx';
import { handleHashLinkClick } from '../../utils/smoothScroll.js';

export function Contact() {
  return (
    <SectionReveal className="section-pad contact-section" id="contact">
      <ScrollReveal>
        <p className="eyebrow">Contact</p>
        <h2>Need a frontend developer who can handle CMS complexity?</h2>
        <p>
          I can help with responsive builds, WordPress custom development, AEM components, performance optimization, and
          API-driven website delivery.
        </p>
      </ScrollReveal>
      <ScrollReveal className="contact-actions" delay={0.08}>
        <a className="primary-action" href="mailto:johnralph266@gmail.com">
          <Mail size={18} />
          Email John
        </a>
        <a className="secondary-action" href="tel:09568858581">
          <Phone size={18} />
          Call
        </a>
        <a className="secondary-action" href="#top" onClick={(event) => handleHashLinkClick(event, '#top')}>
          <Code2 size={18} />
          Back to top
        </a>
      </ScrollReveal>
    </SectionReveal>
  );
}
