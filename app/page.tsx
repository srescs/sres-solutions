import Image from 'next/image';
import Link from 'next/link';
import {
  aiCapabilities,
  aiInProduction,
  caseStudies,
  clients,
  company,
  credentials,
  engagement,
  forge,
  problems,
  regions,
  techStack
} from '@/lib/content';
import { Arrow, CaseFeature, CtaBand, Faq, Testimonials } from '@/components/Sections';
import ServiceTabs from '@/components/ServiceTabs';

export default function HomePage() {
  const [cloudCost] = caseStudies[0].results;

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Four services, one senior team</span>
            <h1>
              AI-native engineering, <span className="accent-text">built to ship.</span>
            </h1>
            <p className="hero-copy">{company.summary}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn-primary">
                Start with a 2-week audit <Arrow />
              </Link>
              <Link href="/case-studies" className="btn-ghost">
                See our work <Arrow />
              </Link>
            </div>
            <p className="hero-meta">
              {company.location} · {company.serving}
            </p>
          </div>
          <div className="hero-visual">
            <div className="logo-card lameris">
              <Image src="/work/lameris-logo.png" alt="Laméris" width={270} height={276} priority />
              <span className="logo-card-stat">2 countries · 3 languages</span>
              <span className="logo-card-note">Website built from scratch</span>
            </div>
            <div className="logo-card meeteaze">
              <Image src="/work/meeteaze-logo.png" alt="MeetEaze" width={490} height={454} priority />
              <span className="logo-card-stat">2 weeks</span>
              <span className="logo-card-note">From idea to prototype</span>
            </div>
            <div className="proof-chip">
              <span className="proof-value">{cloudCost.value}</span>
              <span className="proof-label">lower cloud cost after an Azure to AWS migration</span>
              <span className="proof-source">Mediminds</span>
            </div>
          </div>
        </div>
      </section>

      <div className="client-strip">
        <div className="container client-strip-inner">
          <span className="client-strip-label">Where we have delivered</span>
          <ul className="client-names">
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </div>

      <section className="section-raised" style={{ borderTop: 'none' }}>
        <div className="container">
          <div className="section-heading center reveal">
            <p className="section-label">What we do</p>
            <h2>
              Four services, <span className="accent-text">one senior team.</span>
            </h2>
            <p className="lede">
              Architects stay hands-on from discovery to delivery, whether you need a product built, work automated
              or a stack reviewed.
            </p>
          </div>
          <ServiceTabs />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-label">Problems we solve</p>
            <h2>
              Start from the problem, <span className="accent-text">not the technology.</span>
            </h2>
          </div>
          <div className="problem-table reveal">
            <div className="problem-row problem-head">
              <span>The problem</span>
              <span>Our answer</span>
              <span>Proof</span>
            </div>
            {problems.map((row) => (
              <div key={row.problem} className="problem-row">
                <strong>{row.problem}</strong>
                <span>{row.answer}</span>
                <span className="problem-proof">{row.proof}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <Link href="/use-cases" className="btn-ghost">
              All use cases <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="band-dark">
        <div className="container split">
          <div className="reveal">
            <p className="section-label">AI capabilities</p>
            <h2>
              AI that takes <span className="accent-text">real work</span> off your team.
            </h2>
            <p className="note-line">{aiInProduction}</p>
            <div className="hero-actions">
              <Link href="/services/ai-automation-and-agents" className="btn-primary">
                AI automation and agents <Arrow />
              </Link>
            </div>
          </div>
          <div className="case-list">
            {aiCapabilities.map((item, index) => (
              <div key={item.title} className="card reveal">
                <span className="numbered">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-label">Case studies</p>
            <h2>
              Healthcare, enterprise and <span className="accent-text">consumer products.</span>
            </h2>
          </div>
          <div className="case-list">
            {caseStudies.slice(0, 3).map((item) => (
              <CaseFeature key={item.id} item={item} />
            ))}
          </div>
          <div className="hero-actions">
            <Link href="/case-studies" className="btn-ghost">
              All case studies <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-raised">
        <div className="container split stack-split">
          <div className="reveal">
            <p className="section-label">Technologies and standards</p>
            <h2>
              We build and audit <span className="accent-text">across your stack.</span>
            </h2>
            <p className="lede">
              The same senior team builds new products and reviews existing ones, so an audit comes from people who
              ship on these technologies every day.
            </p>
            <div className="hero-actions">
              <Link href="/services/audits-and-modernization" className="btn-primary">
                Start with a 2-week audit <Arrow />
              </Link>
            </div>
          </div>
          <div className="stack-grid">
            {techStack.map((group) => (
              <div key={group.title} className="stack-card reveal">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading reveal">
            <p className="section-label">How we work with you</p>
            <h2>
              Fixed price or outcome-based, <span className="accent-text">led by senior engineers.</span>
            </h2>
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
          <ul className="chip-list reveal" style={{ marginTop: 24 }}>
            <li style={{ border: 'none', background: 'none', paddingLeft: 0 }}>Founder credentials:</li>
            {credentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-raised">
        <div className="container split">
          <div className="reveal">
            <p className="section-label">Where we work</p>
            <h2>
              From Vancouver <span className="accent-text">to Bengaluru.</span>
            </h2>
            <p className="lede">{company.serving}, from a senior team based in Bengaluru.</p>
            <ul className="chip-list" style={{ marginTop: 28 }}>
              {regions.map((place) => (
                <li key={place}>{place}</li>
              ))}
            </ul>
          </div>
          <div className="card reveal">
            <span className="badge">Product team · {forge.status}</span>
            <h3 style={{ marginTop: 16, fontSize: '1.5rem' }}>{forge.title}</h3>
            <p>{forge.summary}</p>
            <ul className="contact-list" style={{ marginTop: 26 }}>
              {forge.points.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Testimonials />

      <Faq />

      <CtaBand />
    </>
  );
}
