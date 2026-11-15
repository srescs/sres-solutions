import Link from 'next/link';
import { problems, services } from '@/lib/content';
import { CtaBand } from '@/components/Sections';

export const metadata = {
  title: 'Use cases | SRES Solutions — Start from the problem, not the technology',
  description:
    'Six problems SRES Solutions solves: launch a product fast, go multi-region, cut cloud cost, speed up onboarding, audit a stack and put AI to work on your data.'
};

export default function UseCasesPage() {
  return (
    <>
      <section className="hero-section page-hero">
        <div className="container">
          <p className="section-label">Use cases</p>
          <h1>
            Start from the problem, <span className="accent-text">not the technology.</span>
          </h1>
          <p className="hero-copy">
            Six problems we are asked to solve most often, each with our answer and a named client where we have done
            it.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid-2">
            {problems.map((item, index) => {
              const service = services.find((entry) => entry.slug === item.service);
              return (
                <article key={item.problem} className="card usecase-card reveal">
                  <span className="numbered" style={{ alignSelf: 'flex-start' }}>
                    0{index + 1}
                  </span>
                  <h3>{item.problem}</h3>
                  <p className="usecase-answer">Our answer: {item.answer}</p>
                  <p>{item.detail}</p>
                  <div className="usecase-foot">
                    <span className="problem-proof">{item.proof}</span>
                    <span className="usecase-links">
                      {service && <Link href={`/services/${service.slug}`}>{service.badge} service</Link>}
                      <Link href={`/case-studies#${item.caseId}`}>Case study</Link>
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
