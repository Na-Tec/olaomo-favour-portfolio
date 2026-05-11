interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
      <h1
        style={{
          fontFamily: 'Segoe UI, sans-serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 800,
          color: '#c0392b',
          marginBottom: subtitle ? '14px' : '20px',
          letterSpacing: '-0.5px',
          lineHeight: 1.1,
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            color: '#555555',
            maxWidth: '540px',
            margin: '0 auto 20px',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
      {/* Short red underline — matches screenshots */}
      <div
        style={{
          width: '48px',
          height: '3px',
          background: '#c0392b',
          borderRadius: '2px',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
