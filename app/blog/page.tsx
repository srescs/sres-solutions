import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { Arrow } from '@/components/Sections';

export const metadata = {
  title: 'Insights | SRES Solutions',
  description: 'Practical notes on AI-native engineering, agents, audits and modernization from the SRES Solutions team.'
};

export default function BlogPage() {
  return (
    <>
      <section className="hero-section page-hero">
        <div className="container">
          <p className="section-label">Insights</p>
          <h1>Notes from the team that ships</h1>
          <p className="hero-copy">
            Practical writing on AI-native engineering, agents, audits and modernization.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="card blog-card reveal">
                <span className="badge" style={{ alignSelf: 'flex-start' }}>
                  {post.tag}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.author}</span>
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
          <div className="blog-footer-cta">
            <Link href="/contact" className="btn-primary">
              Talk to us about a topic <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
