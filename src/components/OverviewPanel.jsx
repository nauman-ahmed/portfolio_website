import { useEffect, useRef } from 'react';

/**
 * Replaces the old four-tab modal. One scrollable panel, no tabs, no Next button —
 * the content is now short enough that paging through it made no sense.
 */
export default function OverviewPanel({ project, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    returnFocusRef.current = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      // Keep tabbing inside the dialog.
      const focusable = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || !focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = overflow;
      returnFocusRef.current?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="panel-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="panel-title"
        ref={panelRef}
      >
        <header className="panel__head">
          <div>
            <p className="panel__kind">{project.kind}</p>
            <h2 className="panel__title" id="panel-title">{project.title}</h2>
          </div>
          <button
            type="button"
            className="panel__close"
            onClick={onClose}
            aria-label="Close"
            ref={closeRef}
          >
            &times;
          </button>
        </header>

        {project.metric && (
          <div className="panel__metric">
            <span className="panel__metric-value">{project.metric.value}</span>
            <span className="panel__metric-label">{project.metric.label}</span>
          </div>
        )}

        <div
          className="panel__body"
          dangerouslySetInnerHTML={{ __html: project.overview }}
        />

        <footer className="panel__foot">
          <ul className="chips" aria-label="Technologies">
            {project.stack.map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
          {project.links?.length > 0 && (
            <div className="panel__links">
              {project.links.map((l) => (
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
          )}
        </footer>
      </div>
    </div>
  );
}
