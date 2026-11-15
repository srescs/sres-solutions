'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Logo from '@/components/Logo';

const navItems = [
  { href: '/services', label: 'Services' },
  { href: '/use-cases', label: 'Use cases' },
  { href: '/case-studies', label: 'Work' },
  { href: '/blog', label: 'Insights' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage can be blocked; the toggle still works for this page view.
    }
  };

  const classes = ['site-header', scrolled && 'scrolled', menuOpen && 'open'].filter(Boolean).join(' ');

  return (
    <header className={classes}>
      <div className="container header-inner">
        <Logo />
        <nav className="nav-links" aria-label="Main">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname.startsWith(item.href) ? 'nav-link active' : 'nav-link'}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label="Switch colour theme">
            <svg className="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg className="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <Link href="/contact" className="btn-primary header-btn">
            Start a project
          </Link>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-menu-link">
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
