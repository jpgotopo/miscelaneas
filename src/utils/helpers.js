import { ID_PREFIX } from './constants.js';

export const generateId = () => {
  const n = (Math.max(...window.miscData?.map(m => parseInt(m.id.slice(2))) || [0]) + 1);
  return `${ID_PREFIX}${String(n).padStart(3, '0')}`;
};

export const replaceNewlines = (str) => str.replace(/\\n/g, '\\n\\n');
