'use client';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: '#2b2623',
  border: '1px solid #243040',
  borderRadius: '8px',
  padding: '12px 14px',
  fontSize: '14px',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#e2e8f0',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 500,
  color: '#94a3b8',
  marginBottom: '6px',
  fontFamily: 'Segoe UI, sans-serif',
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function FormInput({ label, ...props }: InputProps) {
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && <label style={labelStyle}>{label}</label>}
      <input {...props} style={{ ...inputStyle, ...props.style }} />
    </div>
  );
}

export function FormTextarea({ label, ...props }: TextareaProps) {
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && <label style={labelStyle}>{label}</label>}
      <textarea {...props} rows={4} style={{ ...inputStyle, resize: 'vertical', ...props.style }} />
    </div>
  );
}

export function FormSelect({ label, options, ...props }: SelectProps) {
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && <label style={labelStyle}>{label}</label>}
      <div style={{ position: 'relative' }}>
        <select {...props}
          style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', paddingRight: '36px', ...props.style }}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} style={{ background: '#1a2332' }}>
              {opt.label}
            </option>
          ))}
        </select>
        {/* Chevron */}
        <span style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: '#64748b', fontSize: '12px' }}>
          ▾
        </span>
      </div>
    </div>
  );
}

export function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      style={{
        width: '100%',
        background: '#c0392b',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
        padding: '13px',
        fontSize: '14px',
        fontWeight: 700,
        fontFamily: 'Segoe UI, sans-serif',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '8px',
        transition: 'opacity 0.2s',
      }}
      className="hover:!opacity-85"
    >
      {children}
    </button>
  );
}
