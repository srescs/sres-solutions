import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/content';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = {
  readonly params: {
    readonly slug: string;
  };
};

export default function ServicePage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-label">{service.badge}</p>
            <h1>{service.title}</h1>
            <p className="hero-copy">{service.description}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Book a Call
              </Link>
              <Link href="/services" className="btn-ghost">
                All Services
              </Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="stat-grid">
              {service.stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="hero-copy">{service.cta}</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">What we deliver</p>
            <h2>Core capabilities for this service.</h2>
          </div>
          <div className="feature-grid">
            {service.highlights.map((item) => (
              <div key={item.title} className="card feature-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-card">
          <div>
            <p className="section-label">Next step</p>
            <h2>Start with a free AI discovery call.</h2>
            <p className="hero-copy">We’ll scope the right delivery approach for your enterprise and show you the first practical milestones.</p>
          </div>
          <div className="cta-actions">
            <Link href="/contact" className="btn-primary">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
