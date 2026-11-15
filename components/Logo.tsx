import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="nav-logo" aria-label="SRES Solutions home">
      <span className="nav-logo-bar" />
      <span className="nav-logo-name">SRES</span>
      <span className="nav-logo-sub">Solutions</span>
    </Link>
  );
}
