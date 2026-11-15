import Link from 'next/link';
import Logo from '@/components/Logo';
import { company, services } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-copy">{company.tagline} Fixed price, or paid on outcomes.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                {service.title}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/use-cases">Use cases</Link>
            <Link href="/case-studies">Work</Link>
            <Link href="/blog">Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h4>Get in touch</h4>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href={company.whatsapp} target="_blank" rel="noreferrer">
              {company.phone}
            </a>
            <a href={company.calendly} target="_blank" rel="noreferrer">
              Book a call
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SRES Solutions</span>
          <span>
            {company.location} · {company.serving}
          </span>
        </div>
      </div>
    </footer>
  );
}
