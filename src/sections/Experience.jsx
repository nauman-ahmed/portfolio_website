import { experience, education } from '../data/resume';

function Entry({ item }) {
  const heading = item.role || item.qualification;
  return (
    <li className="rentry">
      <div className="rentry__period">{item.period}</div>
      <div className="rentry__body">
        <h4 className="rentry__role">{heading}</h4>
        <p className="rentry__org">{item.org}</p>

        {item.detail?.length > 0 && (
          <dl className="grades">
            {item.detail.map((d) => (
              <div className="grade" key={d.label}>
                <dt>{d.label}</dt>
                <dd>{d.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {item.points?.length > 0 && (
          <ul className="rentry__points">
            {item.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
        )}

        {item.note && <p className="rentry__note">{item.note}</p>}

        {item.link && (
          <a
            className="btn-quiet rentry__link"
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.link.label}
          </a>
        )}
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="resume" id="resume">
      <div className="work__inner">
        <header className="sec-head">
          <span className="sec-head__num">02</span>
          <div>
            <h2 className="sec-head__title">Experience &amp; education</h2>
            <p className="sec-head__note">Where the work was done.</p>
          </div>
        </header>

        <div className="rgroup">
          <h3 className="rgroup__title">Experience</h3>
          <ul className="rlist">
            {experience.map((e) => <Entry item={e} key={e.period + e.role} />)}
          </ul>
        </div>

        <div className="rgroup">
          <h3 className="rgroup__title">Education</h3>
          <ul className="rlist">
            {education.map((e) => <Entry item={e} key={e.period + e.qualification} />)}
          </ul>
        </div>
      </div>
    </section>
  );
}
