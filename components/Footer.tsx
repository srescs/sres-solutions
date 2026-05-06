import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="nav-logo footer-logo">
            <div className="nav-logo-mark">SRES</div>
            <span>Solutions</span>
          </Link>
          <p className="footer-copy">AI-native software and transformation services for enterprise teams.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@sres.solutions">hello@sres.solutions</a>
            <a href="https://wa.me/919985020218" target="_blank" rel="noreferrer">
              +91 99850 20218
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
