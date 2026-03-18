export default function SearchBar({ value, onChange, onCreate }) {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '22px' }}>
      <input 
        type="text" 
        value={value} 
        onChange={onChange}
        placeholder="Buscar por tema, número o referencia bíblica…"
        style={{ 
          flex: 1, 
          padding: '9px 16px', 
          fontFamily: "'EB Garamond', serif", 
          fontSize: '15px',
          border: '1px solid var(--rule)', 
          borderRadius: '2px',
          backgroundColor: 'var(--paper)', 
          color: 'var(--ink)', 
          outline: 'none' 
        }} 
      />
      <button onClick={onCreate} style={{ 
        padding: '9px 22px', 
        fontFamily: "'Cinzel', Georgia, serif", 
        fontSize: '12px',
        letterSpacing: '0.12em', 
        fontWeight: 700, 
        backgroundColor: 'var(--accent)', 
        color: '#fff',
        border: 'none', 
        borderRadius: '2px', 
        cursor: 'pointer' 
      }}>
        + NUEVA
      </button>
    </div>
  );
}
