import { useState, useEffect, useMemo, useCallback } from 'react';
import seedData from '../data/seed.json';

const STORAGE_KEY = 'miscelaneas_data';

export function useMiscelaneasData() {
  const [data, setData] = useState(seedData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setData(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load data:', e);
      }
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data, loading]);

  const update = useCallback((id, updates) => {
    setData(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  }, []);

  const createNew = useCallback(() => {
    const n = Math.max(...data.map(m => parseInt(m.id.slice(2)))) + 1;
    const newEntry = {
      id: `M-${String(n).padStart(3, '0')}`,
      title: 'Nueva Miscelánea',
      reference: '',
      body: '',
      crossRefs: [],
      relatedMisc: [],
      partialRefs: [],
      continuesFrom: '',
      continuesTo: ''
    };
    setData(prev => [...prev, newEntry]);
    return newEntry.id;
  }, [data]);

  const addArrayItem = useCallback((id, field, value) => {
    update(id, { [field]: [...(data.find(item => item.id === id)?.[field] || []), value] });
  }, [update, data]);

  const removeArrayItem = useCallback((id, field, value) => {
    update(id, { [field]: (data.find(item => item.id === id)?.[field] || []).filter(item => item !== value) });
  }, [update, data]);

  const getFilteredData = useCallback((searchTerm = '') => {
    return data.filter(m =>
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.reference.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data]);

  const getBacklinks = useCallback((selectedId) => {
    if (!selectedId) return [];
    return data.filter(item => item.id !== selectedId && (item.partialRefs || []).includes(selectedId));
  }, [data]);

  return {
    data,
    loading,
    update,
    createNew,
    addArrayItem,
    removeArrayItem,
    getFilteredData,
    getBacklinks
  };
}
