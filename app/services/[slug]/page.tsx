import Link from 'next/link';
import { notFound } from 'next/navigation';
import { services } from '@/lib/content';
import { Arrow, CtaBand } from '@/components/Sections';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

type Props = {
  readonly params: {
    readonly slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    return {};
  }
  return {
    title: `${service.title} | SRES Solutions`,
    description: service.description
  };
}

export default function ServicePage({ params }: Props) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="hero-section page-hero">
        <div className="container">
          <p className="section-label">{service.title}</p>
          <h1>{service.hero}</h1>
          <p className="hero-copy">{service.description}</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn-primary">
              Start a project <Arrow />
            </Link>
            <Link href="/services" className="btn-ghost">
              All services
            </Link>
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stat-grid cols-3 reveal">
            {service.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-raised">
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-label">What you get</p>
            <h2>{service.summary}</h2>
          </div>
          <div className="grid-3">
            {service.highlights.map((item, index) => (
              <div key={item.title} className="card reveal">
                <span className="numbered">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
          <p className="note-line reveal">
            Proof: {service.proof}. {service.cta}{' '}
            <Link href="/case-studies" className="case-link" style={{ marginTop: 0 }}>
              See the case studies
            </Link>
          </p>
        </div>
      </section>

      <div style={{ paddingTop: 104 }}>
        <CtaBand />
      </div>
    </>
  );
}
