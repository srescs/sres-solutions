import Link from 'next/link';
import { engagement, services } from '@/lib/content';
import { Arrow, CtaBand, ServiceIcon } from '@/components/Sections';

export const metadata = {
  title: 'Services | SRES Solutions — Apps, AI-native development, agents and audits',
  description:
    'Web and mobile apps, AI-native development, AI automation and agents, and technical audits with legacy modernization. Fixed price or outcome-based.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-section page-hero">
        <div className="container">
          <p className="section-label">What we do</p>
          <h1>Four services, one senior team</h1>
          <p className="hero-copy">
            Build a product, put AI to work, or check a stack before you invest. Every engagement is fixed price or
            outcome-based, and led by senior engineers.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="service-grid">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card service-card reveal">
                <ServiceIcon name={service.icon} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <div className="service-card-foot">
                  <span>Proof: {service.proof}</span>
                  <span className="service-link">
                    Learn more <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-raised">
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-label">How we work with you</p>
            <h2>Fixed price or outcome-based, led by senior engineers</h2>
          </div>
          <div className="grid-3">
            {engagement.map((item, index) => (
              <div key={item.title} className="card reveal">
                <span className="numbered">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ paddingTop: 104 }}>
        <CtaBand />
      </div>
    </>
  );
}
