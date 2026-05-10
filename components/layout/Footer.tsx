'use client';

import { GitFork, Link as LinkIcon, AtSign, BookOpen, Camera, Mail, Globe } from 'lucide-react';

export default function Footer() {
  const icons = [
    { icon: <GitFork size={16} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <LinkIcon size={16} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <AtSign size={16} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <BookOpen size={16} />, href: 'https://medium.com', label: 'Medium' },
    { icon: <Camera size={16} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Mail size={16} />, href: 'mailto:olaomofavour@gmail.com', label: 'Email' },
    { icon: <Globe size={16} />, href: '#', label: 'Website' },
  ];

  return (
    <footer
      style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '13px',
            color: 'var(--muted)',
          }}
        >
          © {new Date().getFullYear()} Olaomo Favour. All rights reserved.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {icons.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="footer-icon"
              style={{ color: 'var(--muted)' }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* No styled-jsx needed anymore */}
      <style>{`
        .footer-icon {
          display: inline-flex;
          transition: all 0.25s ease;
        }

        .footer-icon:hover {
          color: var(--primary);
          transform: translateY(-2px) scale(1.08);
        }
      `}</style>
    </footer>
  );
}