import { Award, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { certifications } from '@/data/certifications';

export default function CertificationsPage() {
  return (
    <div style={{ background: '#0d0d0d', fontFamily: 'Segoe UI, sans-serif', minHeight: '100vh' }}>
      <div className=" px-8 py-14">
        <SectionHeader title="Certifications & Trainings" subtitle="Professional certifications and specialized training programs I've completed." />

        {/* 2-col grid exactly like screenshot */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', maxWidth: '860px', margin: '0 auto' }}
          className="!grid-cols-1 md:!grid-cols-2"
        >
          {certifications.map((cert) => (
            <div key={cert.id}
              style={{ background: '#161616', border: '1px solid #222', borderRadius: '10px', padding: '22px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start', transition: 'border-color 0.2s' }}
              className="hover:!border-[#333]"
            >
              {/* Red award icon */}
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <Award size={19} style={{ color: '#c0392b' }} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                  <h3 style={{ fontFamily: 'Segoe UI', fontSize: '14px', fontWeight: 600, color: '#e8e8e8', lineHeight: 1.4, marginBottom: '4px' }}>
                    {cert.title}
                  </h3>
                  {cert.url && (
                    <a href={cert.url} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, color: '#555' }} className="hover:!text-[#ccc]">
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
                <p style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '13px', color: '#777', marginBottom: '10px' }}>
                  {cert.organization}
                </p>
                <span style={{ display: 'inline-block', background: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '4px', padding: '2px 10px', fontSize: '11px', fontFamily: 'Segoe UI, sans-serif', color: '#999' }}>
                  {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
