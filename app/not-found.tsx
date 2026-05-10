import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px 24px' }}>
      <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', letterSpacing: '3px', color: '#c0392b', textTransform: 'uppercase', marginBottom: '16px' }}>404</p>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800, color: '#e8e8e8', marginBottom: '16px', letterSpacing: '-1px' }}>
        Page not found<span style={{ color: '#c0392b' }}>.</span>
      </h1>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#888', marginBottom: '40px', maxWidth: '400px', lineHeight: 1.7 }}>
        Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <Link href="/"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#c0392b', color: '#fff', borderRadius: '8px', padding: '13px 28px', fontSize: '14px', fontWeight: 500, fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
