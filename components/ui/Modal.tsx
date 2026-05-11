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
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      {/* Modal Card */}
      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: '20px',
          padding: '32px 32px 28px',
          width: '100%',
          maxWidth: '640px',
          maxHeight: '90vh',
          overflowY: 'auto',
          scrollbarWidth: 'thin',
          position: 'relative',
          color: 'var(--text)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.45)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'transparent',
            border: 'none',
            color: 'var(--muted)',
            cursor: 'pointer',
            transition: 'color 0.2s ease',
          }}
          className="hover:text-[var(--text)]"
        >
          <X size={21} />
        </button>

        {/* Icon */}
        <div
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(192,57,43,0.12)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '22px',
            color: 'var(--primary)',
          }}
        >
          {icon}
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: 'Segoe UI, sans-serif',
            fontSize: '30px',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.2,
            marginBottom: '14px',
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p
            style={{
              fontFamily: 'Segoe UI, sans-serif',
              fontSize: '15px',
              color: 'var(--muted)',
              lineHeight: 1.75,
              marginBottom: bulletPoints ? '16px' : '28px',
              maxWidth: '95%',
            }}
          >
            {description}
          </p>
        )}

        {/* Bullet Points */}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul
            style={{
              marginBottom: '30px',
              paddingLeft: '2px',
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
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
                  alignItems: 'flex-start',
                  gap: '10px',
                  lineHeight: 1.7,
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: '#c0392b',
                    flexShrink: 0,
                    marginTop: '8px',
                  }}
                />

                <span>{pt}</span>
              </li>
            ))}
          </ul>
        )}

        {/* FORM */}
        <div style={{ marginTop: '10px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}