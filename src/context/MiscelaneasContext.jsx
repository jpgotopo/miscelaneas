import { createContext, useContext } from 'react';
import { useMiscelaneasData } from '../hooks/useMiscelaneasData.js';

const MiscelaneasContext = createContext();

export function MiscelaneasProvider({ children }) {
  const dataHooks = useMiscelaneasData();

  return (
    <MiscelaneasContext.Provider value={dataHooks}>
      {children}
    </MiscelaneasContext.Provider>
  );
}

export function useMiscelaneas() {
  const context = useContext(MiscelaneasContext);
  if (!context) {
    throw new Error('useMiscelaneas must be used within MiscelaneasProvider');
  }
  return context;
}
