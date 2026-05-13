import Link from 'next/link';
import Reveal from '@/components/ui/Reveal';

export default function NotFound() {
  return (
    <div
      style={{
        background: 'var(--bg)',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px',
      }}
    >
      <Reveal delayMs={60} variant="fade">
        <p
          style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            letterSpacing: '3px',
            color: '#c0392b',
            textTransform: 'uppercase',
            marginBottom: '16px',
          }}
        >
          404
        </p>
      </Reveal>

      <Reveal delayMs={130} variant="scale">
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(36px, 6vw, 60px)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}
        >
          Page not found<span style={{ color: '#c0392b' }}>.</span>
        </h1>
      </Reveal>

      <Reveal delayMs={200} variant="up">
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '16px',
            color: 'var(--muted)',
            marginBottom: '40px',
            maxWidth: '400px',
            lineHeight: 1.7,
          }}
        >
          Looks like this page doesn&apos;t exist. Let&apos;s get you back on
          track.
        </p>
      </Reveal>

      <Reveal delayMs={270} variant="scale">
        <Link
          href="/"
          className="hover-lift"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: '8px',
            padding: '13px 28px',
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'DM Sans, sans-serif',
            textDecoration: 'none',
          }}
        >
          Back to Home
        </Link>
      </Reveal>
    </div>
  );
}
