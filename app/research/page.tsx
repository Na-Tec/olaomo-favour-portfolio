import { FileText, ExternalLink } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { publications } from '@/data/research';

export default function ResearchPage() {
  return (
    <div style={{ background: '#0d0d0d', minHeight: '100vh' }}>
      <div className="max-w-5xl mx-auto px-8 py-24">
        <SectionHeader title="Research & Publications" subtitle="Peer-reviewed publications in top-tier AI/ML venues." />

        {/* Publication cards — full width, centered, max 820px */}
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {publications.map((pub) => (
            <div key={pub.id}
              style={{ background: '#161616', border: '1px solid #222', borderRadius: '10px', padding: '26px 28px', display: 'flex', gap: '18px', alignItems: 'flex-start', transition: 'border-color 0.2s' }}
              className="hover:!border-[#333]"
            >
              {/* Red file icon */}
              <div style={{ flexShrink: 0, marginTop: '2px' }}>
                <FileText size={20} style={{ color: '#c0392b' }} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                  <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#e8e8e8', lineHeight: 1.45 }}>
                    {pub.title}
                  </h3>
                  {pub.url && (
                    <a href={pub.url} target="_blank" rel="noopener noreferrer" style={{ flexShrink: 0, color: '#555' }} className="hover:!text-[#ccc]">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', marginBottom: '8px' }}>
                  {pub.authors}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  {/* Venue in red monospace — exactly like screenshot */}
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#c0392b' }}>
                    {pub.venue}
                  </span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#555' }}>
                    {pub.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
