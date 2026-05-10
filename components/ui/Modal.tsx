'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  bulletPoints?: string[];
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  bulletPoints,
  icon,
  children,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--overlay, rgba(0,0,0,0.7))',
        backdropFilter: 'blur(10px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      {/* Modal Card */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '16px',
          padding: '36px',
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          position: 'relative',
          color: 'var(--text)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'transparent',
            border: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          className="hover:text-[var(--text)]"
        >
          <X size={20} />
        </button>

        {/* Icon */}
        <div
          style={{
            width: '46px',
            height: '46px',
            background: 'rgba(192,57,43,0.12)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '18px',
            color: 'var(--primary)',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: 'Segoe UI, sans-serif',
            fontSize: '22px',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '10px',
          }}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p
            style={{
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '14px',
              color: 'var(--muted)',
              lineHeight: 1.65,
              marginBottom: bulletPoints ? '10px' : '24px',
            }}
          >
            {description}
          </p>
        )}

        {/* Bullet Points */}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul
            style={{
              marginBottom: '24px',
              paddingLeft: 0,
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            {bulletPoints.map((pt) => (
              <li
                key={pt}
                style={{
                  fontFamily: 'Segoe UI, sans-serif',
                  fontSize: '14px',
                  color: 'var(--text)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    flexShrink: 0,
                  }}
                />
                {pt}
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </div>
  );
}