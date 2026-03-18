export default function Input({ value, onChange, placeholder, style = {}, ...props }) {
  return (
    <input 
      value={value} 
      onChange={onChange} 
      placeholder={placeholder}
      style={{
        backgroundColor: 'transparent',
        border: 'none',
        outline: 'none',
        fontFamily: "'EB Garamond', serif",
        color: 'var(--ink)',
        borderBottom: '1px solid var(--rule-faint)',
        padding: '2px 0',
        width: '100%',
        ...style
      }}
      {...props}
    />
  );
}
