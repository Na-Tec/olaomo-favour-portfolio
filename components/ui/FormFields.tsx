'use client';

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  padding: '14px 16px',
  fontSize: '14px',
  fontFamily: 'Segoe UI, sans-serif',
  color: 'var(--text)',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'all 0.2s ease',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '13px',
  fontWeight: 500,
  color: 'var(--muted)',
  marginBottom: '7px',
  fontFamily: 'Segoe UI, sans-serif',
};

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string }[];
}

export function FormInput({
  label,
  ...props
}: InputProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <label style={labelStyle}>{label}</label>}

      <input
        {...props}
        style={{
          ...inputStyle,
          ...props.style,
        }}
      />
    </div>
  );
}

export function FormTextarea({
  label,
  ...props
}: TextareaProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <label style={labelStyle}>{label}</label>}

      <textarea
        {...props}
        rows={5}
        style={{
          ...inputStyle,
          resize: 'vertical',
          minHeight: '120px',
          lineHeight: 1.7,
          ...props.style,
        }}
      />
    </div>
  );
}

export function FormSelect({
  label,
  options,
  ...props
}: SelectProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {label && <label style={labelStyle}>{label}</label>}

      <div style={{ position: 'relative' }}>
        <select
          {...props}
          style={{
            ...inputStyle,
            appearance: 'none',
            cursor: 'pointer',
            paddingRight: '42px',
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
            right: '14px',
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

export function SubmitButton({
  children,
  disabled,
}: {
  children: React.ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      style={{
        width: '100%',
        background: '#c0392b',
        color: 'var(--text-inverse)',
        border: 'none',
        borderRadius: '10px',
        padding: '15px',
        fontSize: '14px',
        fontWeight: 700,
        fontFamily: 'Segoe UI, sans-serif',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.7 : 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '10px',
        transition: 'all 0.2s ease',
      }}
      className={disabled ? '' : 'hover:opacity-90'}
    >
      {children}
    </button>
  );
}
