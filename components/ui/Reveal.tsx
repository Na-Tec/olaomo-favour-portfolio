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
  const onceRef = useRef(once);

  useEffect(() => {
    onceRef.current = once;
  }, [once]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        const shouldShow = entry.isIntersecting;
        setVisible((prev) => (prev === shouldShow ? prev : shouldShow));
        if (shouldShow && onceRef.current) observer.disconnect();
      },
      { threshold: 0.12, rootMargin: '80px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
