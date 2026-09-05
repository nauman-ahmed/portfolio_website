import { publications, certifications } from '../data/resume';

export default function Publications() {
  return (
    <section className="pubs" id="certifications">
      <div className="work__inner">
        <header className="sec-head" data-reveal>
          <span className="sec-head__num">04</span>
          <div>
            <h2 className="sec-head__title">Publications</h2>
            <p className="sec-head__note">Peer-reviewed research.</p>
          </div>
        </header>

        {publications.map((p) => (
          <article className="pub" key={p.title}>
            <div className="pub__body">
              <h3 className="pub__title">{p.title}</h3>
              <p className="pub__authors">{p.authors}</p>
              <p className="pub__venue">
                {p.venue} <span className="pub__where">· {p.where}</span>
              </p>
              <p className="pub__summary">{p.summary}</p>
              <a className="btn-quiet" href={p.href} target="_blank" rel="noopener noreferrer">
                Read the paper
              </a>
            </div>
            <dl className="pub__metrics">
              {p.metrics.map((m) => (
                <div className="pub__metric" key={m.label}>
                  <dt>{m.value}</dt>
                  <dd>{m.label}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}

        <div className="certs">
          <div className="archive__head">
            <h3 className="archive__title">Certifications</h3>
            <p className="archive__note">{certifications.length} courses completed</p>
          </div>
          <ul className="certs__list">
            {certifications.map((c) => (
              <li className="cert" key={c.title}>
                <div className="cert__main">
                  <a
                    className="cert__title"
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.title}
                  </a>
                  <span className="cert__note">{c.note}</span>
                </div>
                <span className="cert__issuer">{c.issuer}</span>
                <span className="cert__year">{c.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
