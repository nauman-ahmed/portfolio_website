/**
 * Everything that isn't featured: a dense row each. Reads as a track record
 * rather than filler, and carries no modal — depth lives in the repos.
 */
export default function ProjectArchive({ projects }) {
  // Years and repo links aren't recorded for every project. Rather than reserve
  // empty columns, drop them until there is something to put in them.
  const hasYears = projects.some((p) => p.year);
  const hasLinks = projects.some((p) => p.href);

  return (
    <div className={`archive ${hasYears ? '' : 'archive--no-year'} ${hasLinks ? '' : 'archive--no-link'}`}>
      <div className="archive__head">
        <h3 className="archive__title">Earlier work</h3>
        <p className="archive__note">
          {projects.length} further projects across full-stack, data and ML.
        </p>
      </div>

      <ul className="archive__list">
        {projects.map((p) => (
          <li className="arow" key={p.title}>
            <div className="arow__main">
              <span className="arow__title">{p.title}</span>
              <span className="arow__kind">{p.kind}</span>
            </div>
            <span className="arow__stack">{p.stack.join(' · ')}</span>
            {hasYears && <span className="arow__year">{p.year || ''}</span>}
            {hasLinks && (
              <span className="arow__link">
                {p.href ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer">Repo &rarr;</a>
                ) : null}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
