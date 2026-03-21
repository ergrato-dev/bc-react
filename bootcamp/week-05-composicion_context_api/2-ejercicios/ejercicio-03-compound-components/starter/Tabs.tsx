// ============================================
// EJERCICIO 03: Compound Components
// Archivo: Tabs.tsx
// ============================================

import { createContext, useContext, useState, type ReactNode } from 'react';

console.log('--- Paso 2: Tabs Compound Component ---');

// ============================================
// PASO 1: Definir Context Type
// ============================================

// QUÉ: Context para sistema de tabs
// PARA: Coordinar estado activo entre Tab y Panel
// IMPACTO: Tabs sincronizadas automáticamente

// Descomenta las siguientes líneas:
// interface TabsContextValue {
//   activeTab: string;
//   setActiveTab: (id: string) => void;
// }

// ============================================
// PASO 2: Crear Context Interno
// ============================================

// QUÉ: Context privado para tabs
// PARA: Estado compartido entre List, Tab y Panel
// IMPACTO: Sincronización automática

// Descomenta las siguientes líneas:
// const TabsContext = createContext<TabsContextValue | undefined>(undefined);
//
// const useTabsContext = () => {
//   const context = useContext(TabsContext);
//   if (!context) {
//     throw new Error('Tabs components must be used within <Tabs>');
//   }
//   return context;
// };

// ============================================
// PASO 3: Componente Principal Tabs
// ============================================

// QUÉ: Contenedor raíz que provee el contexto
// PARA: Manejar qué tab está activa
// IMPACTO: Estado centralizado

// Descomenta las siguientes líneas:
// interface TabsProps {
//   children: ReactNode;
//   defaultTab: string;
//   onChange?: (tabId: string) => void;
// }
//
// const TabsRoot = ({ children, defaultTab, onChange }: TabsProps) => {
//   const [activeTab, setActiveTabState] = useState(defaultTab);
//
//   const setActiveTab = (id: string) => {
//     setActiveTabState(id);
//     onChange?.(id);
//   };
//
//   return (
//     <TabsContext.Provider value={{ activeTab, setActiveTab }}>
//       <div>{children}</div>
//     </TabsContext.Provider>
//   );
// };

// ============================================
// PASO 4: Sub-componente List
// ============================================

// QUÉ: Contenedor para los tabs
// PARA: Agrupar visualmente los tabs
// IMPACTO: Estructura semántica

// Descomenta las siguientes líneas:
// interface TabsListProps {
//   children: ReactNode;
// }
//
// const TabsList = ({ children }: TabsListProps) => {
//   const styles: React.CSSProperties = {
//     display: 'flex',
//     borderBottom: '2px solid #e0e0e0',
//     marginBottom: '16px',
//   };
//
//   return <div style={styles} role="tablist">{children}</div>;
// };

// ============================================
// PASO 5: Sub-componente Tab
// ============================================

// QUÉ: Botón individual de tab
// PARA: Cambiar la tab activa al hacer click
// IMPACTO: Control de navegación

// Descomenta las siguientes líneas:
// interface TabProps {
//   children: ReactNode;
//   id: string;
//   disabled?: boolean;
// }
//
// const Tab = ({ children, id, disabled = false }: TabProps) => {
//   const { activeTab, setActiveTab } = useTabsContext();
//   const isActive = activeTab === id;
//
//   const styles: React.CSSProperties = {
//     padding: '12px 24px',
//     border: 'none',
//     background: 'none',
//     cursor: disabled ? 'not-allowed' : 'pointer',
//     fontSize: '14px',
//     fontWeight: isActive ? 600 : 400,
//     color: disabled ? '#999' : isActive ? '#2196f3' : '#666',
//     borderBottom: isActive ? '2px solid #2196f3' : '2px solid transparent',
//     marginBottom: '-2px',
//     opacity: disabled ? 0.5 : 1,
//     transition: 'all 0.2s',
//   };
//
//   return (
//     <button
//       style={styles}
//       onClick={() => !disabled && setActiveTab(id)}
//       role="tab"
//       aria-selected={isActive}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// };

// ============================================
// PASO 6: Sub-componente Panel
// ============================================

// QUÉ: Contenido asociado a cada tab
// PARA: Mostrar solo cuando su tab está activa
// IMPACTO: Renderizado condicional por id

// Descomenta las siguientes líneas:
// interface TabsPanelProps {
//   children: ReactNode;
//   id: string;
// }
//
// const TabsPanel = ({ children, id }: TabsPanelProps) => {
//   const { activeTab } = useTabsContext();
//
//   if (activeTab !== id) return null;
//
//   return (
//     <div role="tabpanel" style={{ padding: '8px 0' }}>
//       {children}
//     </div>
//   );
// };

// ============================================
// PASO 7: Exportar como Compound Component
// ============================================

// Descomenta las siguientes líneas:
// export const Tabs = Object.assign(TabsRoot, {
//   List: TabsList,
//   Tab: Tab,
//   Panel: TabsPanel,
// });

// Exportación temporal para evitar errores
export const Tabs = {
  List: () => null,
  Tab: () => null,
  Panel: () => null,
};

console.log('Tabs.tsx cargado');
