export default function Label({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: "'Cinzel', Georgia, serif",
      fontSize: '10px',
      letterSpacing: '0.2em',
      color: 'var(--ink-light)',
      fontWeight: 600,
      marginBottom: '7px',
      ...style
    }}>
      {children}
    </div>
  );
}
