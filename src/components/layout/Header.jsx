import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { handleHashLinkClick } from '../../utils/smoothScroll.js';

export function Header({ navItems, theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="site-header">
      <div className="topbar">
        <a
          className="brand"
          href="#top"
          aria-label="John Ralph Yambao home"
          onClick={(event) => {
            handleHashLinkClick(event, '#top');
            setMenuOpen(false);
          }}
        >
          <span className="brand-mark">JRY</span>
          <span className="brand-copy">
            <strong>John Ralph Yambao</strong>
            <small>Frontend / AEM / WordPress</small>
          </span>
        </a>

        <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          <button className="icon-button close-button" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={20} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => {
                handleHashLinkClick(event, item.href);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${nextTheme} mode`}>
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>
  );
}
