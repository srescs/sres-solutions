export const metadata = {
  title: 'Contact SRES Solutions | Book a Free AI Strategy Call',
  description:
    'Get in touch with SRES Solutions for a free strategy call, email hello@sres.solutions, or WhatsApp +91 99850 20218.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-label">Contact</p>
            <h1>Book a free 45-minute AI strategy call.</h1>
            <p className="hero-copy">
              Reach out to SRES Solutions for custom AI product delivery, automation, analytics, or governance support.
            </p>
            <div className="hero-actions">
              <a href="mailto:hello@sres.solutions" className="btn-primary">
                Email hello@sres.solutions
              </a>
              <a href="https://wa.me/919985020218" target="_blank" rel="noreferrer" className="btn-ghost">
                WhatsApp Us
              </a>
            </div>
          </div>
          <div className="hero-card contact-card-panel">
            <div>
              <h3>Contact details</h3>
              <ul className="contact-list">
                <li>
                  <strong>Email</strong>
                  <span>hello@sres.solutions</span>
                </li>
                <li>
                  <strong>Phone</strong>
                  <span>+91 99850 20218</span>
                </li>
                <li>
                  <strong>Location</strong>
                  <span>India · Global clients</span>
                </li>
              </ul>
            </div>
            <div>
              <h3>Need help with...</h3>
              <ul className="feature-list">
                <li>AI strategy and roadmaps</li>
                <li>Custom AI and LLM apps</li>
                <li>Workflow automation</li>
                <li>Data engineering and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">How to connect</p>
            <h2>Fastest ways to start your AI transformation.</h2>
          </div>
          <div className="contact-grid">
            <div className="card contact-card">
              <h3>Book a call</h3>
              <p>Schedule a free AI strategy session so we can scope the right solution for your business.</p>
              <a href="https://calendly.com/chaitanyareddy-pr" target="_blank" rel="noreferrer" className="btn-primary">
                Schedule on Calendly
              </a>
            </div>
            <div className="card contact-card">
              <h3>Email us</h3>
              <p>Send details about your AI opportunity, current systems, and business goals.</p>
              <a href="mailto:hello@sres.solutions" className="btn-ghost">
                hello@sres.solutions
              </a>
            </div>
            <div className="card contact-card">
              <h3>WhatsApp</h3>
              <p>Message us directly for a fast response and quick scoping conversation.</p>
              <a href="https://wa.me/919985020218" target="_blank" rel="noreferrer" className="btn-primary">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
