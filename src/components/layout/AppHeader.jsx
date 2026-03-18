import { FONTS } from '../../utils/constants.js';

export default function AppHeader({ showBack, onBack, entryCount }) {
  return (
    <header style={{
      backgroundColor: 'var(--sidebar)',
      borderBottom: '2px solid var(--gold)'
    }}>
      <div style={{
        maxWidth: '1120px',
        margin: '0 auto',
        padding: '14px 28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {showBack && (
            <button onClick={onBack} style={{
              background: 'none',
              border: '1px solid var(--sidebar-light)',
              color: 'var(--sidebar-muted)',
              cursor: 'pointer',
              padding: '5px 14px',
              borderRadius: '2px',
              fontFamily: FONTS.serif,
              fontSize: '14px',
              letterSpacing: '0.04em'
            }}>
              ← Índice
            </button>
          )}
          <div>
            <div style={{
              fontFamily: FONTS.display,
              color: 'var(--sidebar-text)',
              fontSize: '18px',
              letterSpacing: '0.16em',
              fontWeight: 600
            }}>
              MISCELÁNEAS
            </div>
            <div style={{
              fontFamily: FONTS.serif,
              color: 'var(--sidebar-muted)',
              fontSize: '12px',
              letterSpacing: '0.14em',
              fontStyle: 'italic',
              marginTop: '1px'
            }}>
              Cuaderno de Reflexiones Teológicas
            </div>
          </div>
        </div>
        <div style={{
          fontFamily: FONTS.serif,
          color: 'var(--sidebar-muted)',
          fontSize: '13px',
          fontStyle: 'italic'
        }}>
          {entryCount} {entryCount === 1 ? 'entrada' : 'entradas'}
        </div>
      </div>
    </header>
  );
}
