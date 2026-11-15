import { caseStudies } from '@/lib/content';
import { CaseFeature, CtaBand, Testimonials } from '@/components/Sections';

export const metadata = {
  title: 'Work | SRES Solutions — Case studies in healthcare, enterprise and consumer products',
  description:
    'How SRES Solutions cut cloud cost by 40% for Mediminds, took Laméris digital in 2 countries and 3 languages, and is building MeetEaze with AI-native development.'
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-section page-hero">
        <div className="container">
          <p className="section-label">Where we have delivered</p>
          <h1>Healthcare, enterprise and consumer products</h1>
          <p className="hero-copy">
            Named clients and measured results, from a hospital information system in Bengaluru to a 115-year-old
            MedTech brand in the Netherlands.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container case-list">
          {caseStudies.map((item) => (
            <CaseFeature key={item.id} item={item} />
          ))}
        </div>
      </section>

      <Testimonials />

      <div style={{ paddingTop: 104 }}>
        <CtaBand />
      </div>
    </>
  );
}
