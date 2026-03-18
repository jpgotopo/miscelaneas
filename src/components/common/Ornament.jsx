export default function Ornament() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px' 
    }}>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
      <span style={{ color: 'var(--gold-light)', fontSize: '14px' }}>✦</span>
      <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--rule)' }} />
    </div>
  );
}
