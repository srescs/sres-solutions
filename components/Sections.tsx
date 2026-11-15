import Image from 'next/image';
import Link from 'next/link';
import { company, faqs, testimonials, type CaseStudy, type Service } from '@/lib/content';

const iconPaths: Record<Service['icon'], React.ReactNode> = {
  apps: (
    <>
      <rect x="3" y="4" width="12" height="16" rx="2" />
      <path d="M15 8h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4M7 16h4" />
    </>
  ),
  spark: <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3zM19 16v4M17 18h4" />,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  )
};

export function ServiceIcon({ name }: { readonly name: Service['icon'] }) {
  return (
    <span className="icon-tile">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {iconPaths[name]}
      </svg>
    </span>
  );
}

export function Arrow() {
  return (
    <span className="btn-arrow" aria-hidden="true">
      →
    </span>
  );
}

export function CaseFeature({ item }: { readonly item: CaseStudy }) {
  const results = (
    <div className={item.image ? 'result-grid inline' : 'result-grid'}>
      {item.results.map((result) => (
        <div key={result.label} className="result-item">
          <strong>{result.value}</strong>
          <span>{result.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <article id={item.id} className={item.image ? 'case-feature reveal' : 'case-feature no-visual reveal'}>
      <div>
        <span className="badge">{item.industry}</span>
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        {item.image && results}
        {item.note && <p className="case-note">{item.note}</p>}
        {item.link && (
          <a href={item.link.href} target="_blank" rel="noreferrer" className="case-link">
            {item.link.label} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {item.image ? (
        <div className="case-visual">
          {item.image.kind === 'browser' ? (
            <div className="frame-browser">
              <div className="frame-browser-bar">
                <i />
                <i />
                <i />
              </div>
              <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} />
            </div>
          ) : (
            <div className="frame-phone">
              <Image src={item.image.src} alt={item.image.alt} width={item.image.width} height={item.image.height} />
            </div>
          )}
        </div>
      ) : (
        results
      )}
    </article>
  );
}

// Renders nothing until lib/content.ts has at least one real client quote.
export function Testimonials() {
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="container">
        <div className="section-heading reveal">
          <p className="section-label">Client voice</p>
          <h2>What our clients say</h2>
        </div>
        <div className={testimonials.length === 1 ? 'grid-2' : 'grid-3'}>
          {testimonials.map((item) => (
            <figure key={item.name + item.company} className="card quote-card reveal">
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                {item.role}, {item.company}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer }
    }))
  };

  return (
    <section id="faq">
      <div className="container split faq-split">
        <div className="reveal">
          <p className="section-label">FAQ</p>
          <h2>
            Questions buyers <span className="accent-text">ask us first.</span>
          </h2>
          <p className="lede">Pricing, speed, who does the work and how to start.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-ghost">
              Ask something else <Arrow />
            </Link>
          </div>
        </div>
        <div className="faq-list reveal">
          {faqs.map((item, index) => (
            <details key={item.question} className="faq-item" name="faq" open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card reveal">
          <div>
            <p className="section-label">Next step</p>
            <h2>Start with a 2-week audit or a fixed-price MVP.</h2>
            <p>
              Tell us what you want to ship, cut or automate, and we will come back with a scoped, fixed-price
              proposal.
            </p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">
              Start a project <Arrow />
            </Link>
            <a href={company.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
