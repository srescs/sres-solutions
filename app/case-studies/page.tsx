import Link from 'next/link';
import { caseStudies } from '@/lib/content';

export const metadata = {
  title: 'Case Studies | SRES Solutions — Real AI Results Across Industries',
  description:
    'Explore SRES Solutions case studies and AI outcomes for finance, healthcare, manufacturing, and enterprise operations.',
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-label">Case Studies</p>
            <h1>Real AI outcomes delivered for enterprise teams.</h1>
            <p className="hero-copy">
              Read how SRES Solutions helped companies reduce fraud, reclaim hours, and improve operational resilience.
            </p>
          </div>
          <div className="hero-card">
            <p className="hero-copy">
              Each engagement is designed to move beyond pilots and deliver measurable business results.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Results</p>
            <h2>Case studies with clear ROI and real adoption.</h2>
          </div>
          <div className="case-grid">
            {caseStudies.map((item) => (
              <div key={item.id} className="card case-card">
                <span className="badge badge-pill">{item.industry}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <div className="result-grid">
                  {item.results.map((result) => (
                    <div key={result.label} className="result-item">
                      <strong>{result.value}</strong>
                      <span>{result.label}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-ghost">
                  Talk to Us
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
