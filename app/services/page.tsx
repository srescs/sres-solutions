import Link from 'next/link';
import { services } from '@/lib/content';

export const metadata = {
  title: 'Services | SRES Solutions — AI Strategy, Development, Integration, Data and Governance',
  description:
    'Explore SRES Solutions services for AI strategy, custom AI development, integration, data engineering, analytics, and governance.',
};

export default function ServicesPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-label">Services</p>
            <h1>AI services built for enterprise delivery.</h1>
            <p className="hero-copy">
              Choose the service that matches your stage: strategy, custom build, integration, data operations, analytics or governance.
            </p>
          </div>
          <div className="hero-card">
            <p className="hero-copy">Each engagement begins with business outcomes, not technology. We map AI to measurable KPIs and deploy production-ready systems.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our services</p>
            <h2>Choose a service path for your AI transformation.</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card service-card">
                <div>
                  <span className="badge badge-pill">{service.badge}</span>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                </div>
                <span className="service-link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
