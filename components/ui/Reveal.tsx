'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'blur';
  once?: boolean;
};

export default function Reveal({
  children,
  className,
  delayMs = 0,
  variant = 'up',
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (visible) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) setVisible(true);
        else if (!once) setVisible(false);
        if (entry.isIntersecting && once) observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, visible]);

  return (
    <div
      ref={ref}
      className={`${className ?? ''} reveal reveal--${variant} ${visible ? 'reveal--visible' : ''}`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
