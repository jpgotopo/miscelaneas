import { useState, useEffect } from 'react';
import { useMiscelaneas } from '../../context/MiscelaneasContext.jsx';
import Label from '../common/Label.jsx';
import Input from '../common/Input.jsx';

export default function EditorView({ selectedId }) {
  const misc = useMiscelaneas();
  const [localEntry, setLocalEntry] = useState(null);

  useEffect(() => {
    const entry = misc.data.find(m => m.id === selectedId);
    setLocalEntry(entry);
  }, [misc.data, selectedId]);

  if (!localEntry) return <div>Cargando...</div>;

  const saveChanges = (field, value) => {
    misc.update(selectedId, { [field]: value });
    setLocalEntry(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '32px 28px', display: 'grid', gridTemplateColumns: '1fr 290px', gap: '22px' }}>
      <div>
        <div style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '2px', padding: '22px 26px', marginBottom: '18px', borderTop: '3px solid var(--accent)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 160px', gap: '20px', alignItems: 'end' }}>
            <div>
              <Label>NÚMERO</Label>
              <div style={{ fontFamily: "'Cinzel', Georgia, serif", fontSize: '24px', color: 'var(--accent)', fontWeight: 700, letterSpacing: '0.08em' }}>
                {localEntry.id}
              </div>
            </div>
            <div>
              <Label>TEMA</Label>
              <Input value={localEntry.title} onChange={(e) => saveChanges('title', e.target.value)} style={{ fontSize: '22px', fontWeight: 600 }} />
            </div>
            <div>
              <Label>REFERENCIA BÍBLICA</Label>
              <Input value={localEntry.reference} onChange={(e) => saveChanges('reference', e.target.value)} style={{ fontSize: '16px', fontStyle: 'italic', color: 'var(--ink-mid)' }} placeholder="Ej. Ro 3:24" />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: '2px', padding: '22px 26px' }}>
          <Label>REFLEXIÓN TEOLÓGICA</Label>
          <textarea 
            value={localEntry.body} 
            onChange={(e) => saveChanges('body', e.target.value)}
            placeholder="Escribe aquí tu reflexión teológica..."
            rows={14}
            style={{ 
              width: '100%', 
              fontFamily: "'EB Garamond', serif", 
              fontSize: '16.5px', 
              lineHeight: '2', 
              color: 'var(--ink)',
              backgroundColor: 'transparent', 
              border: 'none', 
              outline: 'none', 
              resize: 'vertical',
              backgroundImage: `repeating-linear-gradient(transparent, transparent 31px, var(--rule-faint) 31px, var(--rule-faint) 32px)`,
              backgroundSize: '100% 32px',
              backgroundPositionY: '7px', 
              padding: '5px 0' 
            }}
          />
        </div>

        <div style={{ backgroundColor: 'var(--paper-dark)', border: '1px solid var(--rule)', borderLeft: '3px solid var(--gold-light)', borderRadius: '2px', padding: '22px 26px', marginTop: '18px' }}>
          <Label>SISTEMA DE CONTINUACIÓN</Label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '14px', color: 'var(--ink-mid)', fontStyle: 'italic' }}>Viene de la Miscelánea N°</span>
              <Input value={localEntry.continuesFrom} onChange={(e) => saveChanges('continuesFrom', e.target.value)} style={{ width: '80px', textAlign: 'center', fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 600, color: 'var(--accent)', borderBottom: '1px solid var(--rule)' }} />
            </div>
            <span style={{ fontSize: '20px', color: 'var(--rule)' }}>⸻</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '14px', color: 'var(--ink-mid)', fontStyle: 'italic' }}>Continúa en la Miscelánea N°</span>
              <Input value={localEntry.continuesTo} onChange={(e) => saveChanges('continuesTo', e.target.value)} style={{ width: '80px', textAlign: 'center', fontFamily: "'Cinzel', serif", fontSize: '14px', fontWeight: 600, color: 'var(--accent)', borderBottom: '1px solid var(--rule)' }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'var(--sidebar)', borderRadius: '2px', border: '1px solid var(--sidebar-light)', padding: '20px' }}>
        <div style={{ fontFamily: "'Cinzel', Georgia, serif", fontSize: '10px', letterSpacing: '0.2em', color: 'var(--sidebar-text)', fontWeight: 600, marginBottom: '14px' }}>
          BIBLIA EN BLANCO
        </div>
        <div style={{ color: 'var(--sidebar-muted)', fontSize: '12px', fontStyle: 'italic', marginBottom: '14px' }}>
          Referencias cruzadas y pasajes relacionados
        </div>
        <div style={{ fontSize: '13px', color: 'var(--sidebar-text)' }}>
          {localEntry.crossRefs.map(ref => <span key={ref}>{ref} </span>)}
        </div>
      </div>
    </main>
  );
}
