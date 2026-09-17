import { faq } from '../data/faq';

export default function Faq() {
  // FAQPage structured data — lets search engines show these as rich results
  // when someone searches the name.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section className="faq" id="faq">
      <div className="work__inner">
        <header className="sec-head" data-reveal>
          <span className="sec-head__num">05</span>
          <div>
            <h2 className="sec-head__title">Questions</h2>
            <p className="sec-head__note">The things worth knowing before you write.</p>
          </div>
        </header>

        <div className="qlist">
          {faq.map((item, i) => (
            <details className="qitem" key={item.q} open={i === 0}>
              <summary className="qitem__q">
                <span>{item.q}</span>
                <span className="qitem__mark" aria-hidden="true" />
              </summary>
              <p className="qitem__a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
