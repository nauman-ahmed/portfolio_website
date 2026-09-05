const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="foot">
      <div className="work__inner foot__inner">
        <div className="foot__brand">
          <span className="nav__mark" aria-hidden="true" />
          <span>Nauman Ahmed</span>
          <span className="foot__role">Applied AI Engineer</span>
        </div>

        <nav className="foot__links" aria-label="Elsewhere">
          <a href="https://github.com/nauman-ahmed" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/nauman-ahmed-b190b219a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:naumanahmed449@gmail.com">Email</a>
        </nav>

        <p className="foot__meta">&copy; {year} &middot; Munich, Germany</p>
      </div>
    </footer>
  );
}
