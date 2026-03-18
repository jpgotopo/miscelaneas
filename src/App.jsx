import { useState } from 'react';
import { MiscelaneasProvider, useMiscelaneas } from './context/MiscelaneasContext.jsx';
import AppHeader from './components/layout/AppHeader.jsx';
import Ornament from './components/common/Ornament.jsx';
import SearchBar from './components/index/SearchBar.jsx';
import Table from './components/index/Table.jsx';
import EditorView from './components/editor/EditorView.jsx';

function AppContent() {
  const [view, setView] = useState('index');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const misc = useMiscelaneas();
  const data = misc.data;
  const filteredData = misc.getFilteredData(search);
  const entryCount = data.length;

  const goBack = () => {
    setView('index');
    setSelectedId(null);
  };

  const openEntry = (id) => {
    setSelectedId(id);
    setView('editor');
  };

  const createNewEntry = () => {
    const newId = misc.createNew();
    openEntry(newId);
  };

  return (
    <>
      <AppHeader showBack={view === 'editor'} onBack={goBack} entryCount={entryCount} />
      {view === 'index' && (
        <main style={{ maxWidth: '880px', margin: '0 auto', padding: '48px 28px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '28px',
              letterSpacing: '0.18em',
              color: 'var(--ink)',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
              TABLA DE CONTENIDOS
            </div>
            <div style={{
              fontStyle: 'italic',
              fontSize: '15px'
            }}>
              «Las primeras páginas reservadas al índice general»
            </div>
            <Ornament />
          </div>
          <SearchBar 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            onCreate={createNewEntry} 
          />
          <Table data={filteredData} onOpen={openEntry} />
        </main>
      )}
{view === 'editor' && (
        <EditorView selectedId={selectedId} />
      )}
    </>
  );
}

export default function App() {
  return (
    <MiscelaneasProvider>
      <AppContent />
    </MiscelaneasProvider>
  );
}
