import Link from 'next/link';
import { services, caseStudies, blogPosts } from '@/lib/content';

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <div className="badge">AI-Native Software</div>
            <h1>Close the AI gap with custom AI apps, automation, and enterprise transformation.</h1>
            <p className="hero-copy">
              SRES Solutions helps enterprises launch production AI fast with strategy, development,
              integration, analytics, and governance services designed for measurable ROI.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Book a Strategy Call
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-stat-grid">
              <div>
                <span>8 weeks</span>
                <p>To roadmap delivery</p>
              </div>
              <div>
                <span>100+</span>
                <p>AI solutions built</p>
              </div>
              <div>
                <span>92%</span>
                <p>Client adoption rate</p>
              </div>
            </div>
            <div className="hero-note">
              <p>Trusted by enterprises that need AI to deliver real operational and revenue impact.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Services</p>
            <h2>AI strategy, product delivery, and enterprise automation built for scale.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card service-card">
                <div>
                  <span className="badge badge-pill">{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-link">Explore</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="alt-section">
        <div className="container">
          <div className="content-grid">
            <div>
              <p className="section-label">Case Studies</p>
              <h2>Real AI outcomes across finance, healthcare, and manufacturing.</h2>
            </div>
            <div className="card case-summary-card">
              {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className="case-card">
                  <span className="badge badge-pill">{caseStudy.industry}</span>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.summary}</p>
                  <div className="result-grid">
                    {caseStudy.results.map((result) => (
                      <div key={result.label} className="result-item">
                        <strong>{result.value}</strong>
                        <span>{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Insights</p>
            <h2>AI insights for leaders, engineers, and operators.</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} href="/blog" className="card blog-card">
                <span className="badge badge-pill">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <p className="section-label">Ready to transform?</p>
            <h2>Book a free 45-minute AI strategy session with SRES.</h2>
            <p className="hero-copy">We help teams move from AI questions to production value without the usual delays.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">
              Schedule a Call
            </Link>
            <a href="https://wa.me/919985020218" target="_blank" rel="noreferrer" className="btn-ghost">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
