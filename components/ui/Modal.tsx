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

export default function Modal({ isOpen, onClose, title, description, bulletPoints, icon, children }: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) { document.addEventListener('keydown', handleKey); document.body.style.overflow = 'hidden'; }
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = ''; };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={overlayRef} onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
    >
      <div style={{ background: '#161616', border: '1px solid #243040', borderRadius: '16px', padding: '36px', width: '100%', maxWidth: '520px', maxHeight: '90vh', overflowY: 'auto', position: 'relative' }}>
        {/* Close */}
        <button onClick={onClose} style={{ position: 'absolute', top: '18px', right: '18px', background: 'none', border: 'none', color: '#475569', cursor: 'pointer' }} className="hover:!text-[#cbd5e1]">
          <X size={20} />
        </button>

        {/* Icon */}
        <div style={{ width: '46px', height: '46px', background: 'rgba(94,207,191,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', color: '#c0392b' }}>
          {icon}
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '22px', fontWeight: 700, color: '#f1f5f9', marginBottom: '10px' }}>{title}</h2>

        {description && (
          <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: bulletPoints ? '10px' : '24px' }}>{description}</p>
        )}

        {/* Bullet points — like in screenshot 10 */}
        {bulletPoints && bulletPoints.length > 0 && (
          <ul style={{ marginBottom: '24px', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {bulletPoints.map((pt) => (
              <li key={pt} style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '14px', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', flexShrink: 0 }} />
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
