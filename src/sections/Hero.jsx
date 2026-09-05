import cvFile from '../assets/files/Nauman-Ahmed-Applied-AI-CV.pdf';
import CoverageGrid from '../components/CoverageGrid';
import CountUp from '../components/CountUp';

const metrics = [
  { value: 93.0, decimals: 1, suffix: '%', label: 'Mean coverage', note: '100 held-out environments' },
  { value: 0.81, decimals: 2, suffix: '',  label: "Cohen's κ",  note: 'Agreement with human graders' },
  { value: 17,   decimals: 0, suffix: '',  label: 'Projects built', note: 'AI systems and full-stack' },
  { value: 5,    decimals: 0, suffix: '+', label: 'Years',          note: 'Professional and academic' },
];

export default function Hero() {
  return (
    <section id="about" className="hero">
      <CoverageGrid className="hero__grid" />
      <div className="hero__veil" />

      <div className="hero__inner">
        <p className="hero__eyebrow">Applied AI Engineer &middot; Munich, Germany</p>

        <h1 className="hero__title">
          Nauman Ahmed
        </h1>

        <p className="hero__thesis">
          I build AI systems that are <em>measured</em>, not just demoed &mdash; retrieval-augmented
          assistants, multi-agent workflows and reinforcement learning, taken from experimentation
          through to deployment.
        </p>

        <p className="hero__note">
          My Master&rsquo;s thesis at the University of Passau was the first work to apply
          Liquid Neural Networks to multi-agent coverage path planning.
        </p>

        <div className="hero__actions">
          <a className="btn-signal" href={cvFile} target="_blank" rel="noopener noreferrer">
            View CV
          </a>
          <a className="btn-quiet" href="#project">Featured work</a>
          <a className="btn-quiet" href="#contact">Get in touch</a>
        </div>

        <dl className="hero__metrics">
          {metrics.map((m) => (
            <div className="metric" key={m.label}>
              <dt className="metric__value">
                <CountUp value={m.value} decimals={m.decimals} suffix={m.suffix} />
              </dt>
              <dd className="metric__label">
                {m.label}
                <span className="metric__note">{m.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
