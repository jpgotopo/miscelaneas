# 🗞️ **Misceláneas** - Cuaderno Digital de Reflexiones Teológicas

[![React](https://img.shields.io/badge/React-18-brightgreen)](https://reactjs.org/) [![Vite](https://img.shields.io/badge/Vite-5-orange)](https://vitejs.dev/) [![localStorage](https://img.shields.io/badge/Persistence-localStorage-blue)](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

> *Refactor profesional de la app original en arquitectura React moderna. Inspirado en las Misceláneas de Jonathan Edwards (1722-1758).*

## ✨ **Características**

- 📝 **Editor completo**: Título, referencia bíblica, reflexión teológica (textarea lined), sistema de continuación
- 🔍 **Búsqueda inteligente**: Filtra por título, ID o referencia
- ➕ **Nueva entrada**: Auto-genera ID (M-001 → M-006...)
- 💾 **Persistencia automática**: localStorage - datos sobreviven refresh/cierre
- 🎨 **UI original preservada**: Papel aesthetic, EB Garamond + Cinzel fonts, CSS vars theme, hover effects
- 📱 **Responsive grid**: Index (880px) + Editor (1120px sidebar)

## 🚀 **Inicio Rápido**

```bash
cd miscelaneas
npm install
npm run dev
```

**Abre** [http://localhost:5173](http://localhost:5173)

### Comandos
| Script | Descripción |
|--------|-------------|
| `npm run dev` | Dev server con HMR |
| `npm run build` | Build producción (`dist/`) |
| `npm run preview` | Preview build local |

## 🏗️ **Arquitectura (Refactor Pro)**

```
src/
├── components/         # UI reutilizables
│   ├── common/         # Input, Label, Ornament
│   ├── index/          # SearchBar, Table
│   ├── editor/         # EditorView (main + sidebar stub)
│   └── layout/         # AppHeader
├── hooks/              # useMiscelaneasData (CRUD/search/persist)
├── context/            # MiscelaneasProvider
├── utils/              # constants (fonts), helpers (ID gen)
├── data/               # seed.json (5 entries originales)
└── styles/             # theme.css (CSS vars), globals.css
```

## 📊 **Funcionalidades Implementadas**

✅ **Index View**: Tabla searchable, nueva entry  
✅ **Editor View**: Campos editables, auto-save  
✅ **Data Flow**: Context + hook → localStorage sync  
✅ **Visual Fidelity**: Estilos inline → CSS vars preservados  
✅ **Performance**: useCallback/useMemo optimizado  

## 🛠️ **Próximas Features (expansión fácil)**

- [ ] Sidebar panels: CrossRefs, RelatedMisc, PartialRefs, Backlinks (con add/remove)
- [ ] Export/Import JSON
- [ ] Dark mode (CSS vars ready)
- [ ] PWA offline
- [ ] TypeScript

## 🎯 **Inspiración**

Recrea el sistema manuscrito de Edwards: remisiones parciales (backlinks), continuación, referencias cruzadas en cuaderno teológico digital.

## 📄 **Licencia**
MIT - ¡Usa libremente!

---

**Desarrollado con ❤️ por BLACKBOXAI - Arquitectura React profesional desde un solo archivo.**
