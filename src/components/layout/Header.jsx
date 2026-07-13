import { useCallback, useEffect, useRef, useState } from 'react';

const DEFAULT_RESUME_HREF = '/john-ralph-yambao-resume.pdf';
const DEFAULT_EMAIL_HREF = 'mailto:johnralph266@gmail.com';

export function Header({
  navItems = [],
  resumeHref = DEFAULT_RESUME_HREF,
  emailHref = DEFAULT_EMAIL_HREF,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    window.requestAnimationFrame(() => menuToggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    firstMobileLinkRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key !== 'Escape') return;

      event.preventDefault();
      closeMenu();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeMenu, menuOpen]);

  const handleMenuToggle = () => {
    if (menuOpen) {
      closeMenu();
      return;
    }

    setMenuOpen(true);
  };

  const handleBrandClick = () => {
    if (menuOpen) closeMenu();
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header" id="top">
        <div className="header-inner">
          <a className="brand" href="#top" onClick={handleBrandClick}>
            <span className="brand-mark" aria-hidden="true">
              JRY / 26
            </span>
            <span className="brand-text">
              <strong>John Ralph Yambao</strong>
              <small>Frontend systems · WordPress · AEM</small>
            </span>
            <span className="sr-only">, back to top</span>
          </a>

          <nav className="primary-nav" aria-label="Primary navigation">
            <div className="nav-links">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="header-actions">
            <a className="header-link" href={resumeHref} target="_blank" rel="noreferrer">
              Résumé
            </a>
            <a className="header-contact" href={emailHref}>
              Start a conversation
            </a>
          </div>

          <button
            ref={menuToggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={handleMenuToggle}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!menuOpen}
        >
          <div className="nav-links">
            {navItems.map((item, index) => (
              <a
                ref={index === 0 ? firstMobileLinkRef : undefined}
                key={item.href}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="header-actions">
            <a className="header-link" href={resumeHref} target="_blank" rel="noreferrer" onClick={closeMenu}>
              View résumé
            </a>
            <a className="header-contact" href={emailHref} onClick={closeMenu}>
              Start a conversation
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}
