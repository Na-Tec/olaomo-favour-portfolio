'use client';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '12px 14px',
  fontSize: '14px',
  fontFamily: 'Segoe UI, sans-serif',
  color: 'var(--text)',
  outline: 'none',
  boxSizing: 'border-box',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 500,
  color: 'var(--muted)',
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
      <textarea
        {...props}
        rows={4}
        style={{
          ...inputStyle,
          resize: 'vertical',
          ...props.style,
        }}
      />
    </div>
  );
}

export function FormSelect({ label, options, ...props }: SelectProps) {
  return (
    <div style={{ marginBottom: '12px' }}>
      {label && <label style={labelStyle}>{label}</label>}

      <div style={{ position: 'relative' }}>
        <select
          {...props}
          style={{
            ...inputStyle,
            appearance: 'none',
            cursor: 'pointer',
            paddingRight: '36px',
            ...props.style,
          }}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              style={{
                background: 'var(--card)',
                color: 'var(--text)',
              }}
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron */}
        <span
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: 'var(--muted)',
            fontSize: '12px',
          }}
        >
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
        background: 'var(--primary)',
        color: 'var(--text-inverse)',
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
        transition: 'all 0.2s ease',
      }}
      className="hover:opacity-85"
    >
      {children}
    </button>
  );
}