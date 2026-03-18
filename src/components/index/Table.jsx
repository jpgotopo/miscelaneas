import { useMiscelaneas } from '../../context/MiscelaneasContext.jsx';

export default function Table({ data, onOpen }) {
  return (
    <div style={{ border: '1px solid var(--rule)', borderRadius: '2px', overflow: 'hidden' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '104px 1fr 148px 60px',
        backgroundColor: 'var(--ink-mid)', 
        padding: '10px 20px', 
        gap: '12px' 
      }}>
        {['N°', 'Tema', 'Referencia', ''].map((h, i) => (
          <div key={i} style={{ 
            fontFamily: "'Cinzel', Georgia, serif",
            color: 'var(--sidebar-text)', 
            fontSize: '10px', 
            letterSpacing: '0.18em', 
            fontWeight: 600 
          }}>
            {h}
          </div>
        ))}
      </div>
      {data.map((m, i) => (
        <div key={m.id} onClick={() => onOpen(m.id)} style={{ 
          display: 'grid', 
          gridTemplateColumns: '104px 1fr 148px 60px',
          padding: '13px 20px', 
          gap: '12px', 
          cursor: 'pointer',
          backgroundColor: i % 2 === 0 ? 'var(--bg)' : 'var(--paper)',
          borderBottom: '1px solid var(--rule-faint)', 
          transition: 'background-color 0.13s'
        }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e8d8a8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = i % 2 === 0 ? 'var(--bg)' : 'var(--paper)'}  
        >
          <div style={{ 
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: '13px', 
            color: 'var(--accent)', 
            fontWeight: 600, 
            letterSpacing: '0.08em', 
            alignSelf: 'center' 
          }}>
            {m.id}
          </div>
          <div style={{ fontSize: '17px', color: 'var(--ink)', alignSelf: 'center' }}>
            {m.title}
          </div>
          <div style={{ fontSize: '14px', color: 'var(--ink-light)', fontStyle: 'italic', alignSelf: 'center' }}>
            {m.reference || '—'}
          </div>
          <div style={{ alignSelf: 'center', textAlign: 'center' }}>
            <span style={{ color: 'var(--gold-light)', fontSize: '20px' }}>→</span>
          </div>
        </div>
      ))}
    </div>
  );
}
