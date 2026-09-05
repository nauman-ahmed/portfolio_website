import { useRef } from 'react';

/**
 * One full-width entry. Media and content alternate sides down the page so the
 * eye has somewhere to go, rather than six identical cards in a grid.
 */
export default function FeaturedProject({ project, index, onOpen }) {
  const videoRef = useRef(null);
  const isImage = Boolean(project.imagePath);
  const poster = project.videoPath
    ? project.videoPath.replace(/\.mp4$/, '-poster.webp')
    : undefined;

  return (
    <article className={`entry ${index % 2 === 1 ? 'entry--flip' : ''}`}>
      <div className="entry__media">
        {isImage ? (
          <img src={project.imagePath} alt={project.title} loading="lazy" />
        ) : (
          <video
            ref={videoRef}
            controls
            muted
            loop
            preload="none"
            poster={poster}
          >
            <source src={project.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="entry__body">
        <p className="entry__kind">{project.kind}</p>
        <h3 className="entry__title">{project.title}</h3>
        <p className="entry__outcome">{project.outcome}</p>

        {project.metric && (
          <div className="entry__metric">
            <span className="entry__metric-value">{project.metric.value}</span>
            <span className="entry__metric-label">{project.metric.label}</span>
          </div>
        )}

        <ul className="chips" aria-label="Technologies">
          {project.stack.map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>

        <div className="entry__actions">
          <button type="button" className="btn-quiet" onClick={() => onOpen(project)}>
            Overview
          </button>
          {project.links?.map((l) => (
            <a
              key={l.href}
              className="btn-quiet"
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
