import Link from 'next/link';
import { blogPosts } from '@/lib/content';

export const metadata = {
  title: 'Blog & Resources | SRES Solutions — AI Insights for Enterprise Leaders',
  description:
    'Practical AI insights, transformation playbooks, and research for enterprise leaders from SRES Solutions.',
};

export default function BlogPage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <p className="section-label">Blog</p>
            <h1>AI insights for enterprise leaders and engineering teams.</h1>
            <p className="hero-copy">
              Explore practical articles, playbooks, and frameworks from the SRES Solutions team.
            </p>
          </div>
          <div className="hero-card">
            <p className="hero-copy">
              Our writing focuses on AI strategy, LLM adoption, governance, data engineering, and real-world delivery.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Featured articles</p>
            <h2>Fresh thinking for AI transformation.</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link key={post.id} href="#" className="card blog-card">
                <span className="badge badge-pill">{post.tag}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-meta">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="blog-footer-cta">
            <Link href="/contact" className="btn-primary">
              Talk to us about a topic
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
