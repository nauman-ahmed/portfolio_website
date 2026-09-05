import { useEffect, useState } from 'react';

const links = [
  { href: '#project',        label: 'Work' },
  { href: '#resume',         label: 'Experience' },
  { href: '#skills',         label: 'Skills' },
  { href: '#certifications', label: 'Publications' },
  { href: '#contact',        label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#about">
          <span className="nav__mark" aria-hidden="true" />
          Nauman Ahmed
          <span className="nav__role">Applied AI Engineer</span>
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav id="nav-links" className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
