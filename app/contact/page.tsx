import { company, services } from '@/lib/content';
import { Arrow } from '@/components/Sections';

export const metadata = {
  title: 'Contact SRES Solutions | Start with a 2-week audit or a fixed-price MVP',
  description:
    'Tell us what you want to ship, cut or automate, and we will come back with a scoped, fixed-price proposal. Email hello@sres.solutions .'
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-label">Next step</p>
            <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)' }}>Start with a 2-week audit or a fixed-price MVP.</h1>
            <p className="hero-copy">
              Tell us what you want to ship, cut or automate, and we will come back with a scoped, fixed-price
              proposal.
            </p>
            <div className="hero-actions">
              <a href={company.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                Book a call <Arrow />
              </a>
              <a href={`mailto:${company.email}`} className="btn-ghost">
                {company.email}
              </a>
            </div>
          </div>
          <div className="panel">
            <div>
              <h3>Contact details</h3>
              <ul className="contact-list">
                <li>
                  <strong>Email</strong>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <strong>Location</strong>
                  <span>
                    {company.location} · {company.serving}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3>We can help with</h3>
              <ul className="feature-list">
                {services.map((service) => (
                  <li key={service.slug}>{service.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-raised">
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-label">How to reach us</p>
            <h2>Three ways to start</h2>
          </div>
          <div className="contact-grid">
            <div className="card contact-card reveal">
              <span className="numbered">01</span>
              <h3>Book a call</h3>
              <p>Pick a time and walk us through what you want to ship, cut or automate.</p>
              <a href={company.calendly} target="_blank" rel="noreferrer" className="btn-primary">
                Schedule on Calendly
              </a>
            </div>
            <div className="card contact-card reveal">
              <span className="numbered">02</span>
              <h3>Email us</h3>
              <p>Send your current stack and goals, and we will reply with a scoped proposal.</p>
              <a href={`mailto:${company.email}`} className="btn-ghost">
                {company.email}
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
