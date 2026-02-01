// ============================================
// EJERCICIO 03: Compound Components
// Archivo: Select.tsx
// ============================================

import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  type ReactNode,
} from 'react';

console.log('--- Paso 3: Select Compound Component ---');

// ============================================
// PASO 1: Definir Context Type
// ============================================

// QUÉ: Context para select/dropdown personalizado
// PARA: Estado de apertura y selección compartido
// IMPACTO: Select flexible sin dependencias externas

// Descomenta las siguientes líneas:
// interface SelectContextValue {
//   isOpen: boolean;
//   toggle: () => void;
//   close: () => void;
//   value: string;
//   displayValue: string;
//   onChange: (value: string, display: string) => void;
// }

// ============================================
// PASO 2: Crear Context Interno
// ============================================

// Descomenta las siguientes líneas:
// const SelectContext = createContext<SelectContextValue | undefined>(undefined);
//
// const useSelectContext = () => {
//   const context = useContext(SelectContext);
//   if (!context) {
//     throw new Error('Select components must be used within <Select>');
//   }
//   return context;
// };

// ============================================
// PASO 3: Componente Principal Select
// ============================================

// QUÉ: Contenedor que maneja estado de apertura y valor
// PARA: Dropdown personalizado accesible
// IMPACTO: Control total sobre estilos y comportamiento

// Descomenta las siguientes líneas:
// interface SelectProps {
//   children: ReactNode;
//   value?: string;
//   defaultValue?: string;
//   onChange?: (value: string) => void;
//   placeholder?: string;
// }
//
// const SelectRoot = ({
//   children,
//   value: controlledValue,
//   defaultValue = '',
//   onChange,
//   placeholder = 'Seleccionar...',
// }: SelectProps) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [internalValue, setInternalValue] = useState(defaultValue);
//   const [displayValue, setDisplayValue] = useState('');
//   const containerRef = useRef<HTMLDivElement>(null);
//
//   const value = controlledValue ?? internalValue;
//
//   const toggle = () => setIsOpen((prev) => !prev);
//   const close = () => setIsOpen(false);
//
//   const handleChange = (newValue: string, display: string) => {
//     if (controlledValue === undefined) {
//       setInternalValue(newValue);
//     }
//     setDisplayValue(display);
//     onChange?.(newValue);
//     close();
//   };
//
//   // Cerrar al hacer click fuera
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
//         close();
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);
//
//   const containerStyles: React.CSSProperties = {
//     position: 'relative',
//     width: '250px',
//   };
//
//   return (
//     <SelectContext.Provider value={{ isOpen, toggle, close, value, displayValue: displayValue || placeholder, onChange: handleChange }}>
//       <div ref={containerRef} style={containerStyles}>
//         {children}
//       </div>
//     </SelectContext.Provider>
//   );
// };

// ============================================
// PASO 4: Sub-componente Trigger
// ============================================

// QUÉ: Botón que abre/cierra el dropdown
// PARA: Mostrar valor seleccionado y controlar apertura
// IMPACTO: Punto de interacción principal

// Descomenta las siguientes líneas:
// const SelectTrigger = () => {
//   const { toggle, displayValue, isOpen } = useSelectContext();
//
//   const styles: React.CSSProperties = {
//     width: '100%',
//     padding: '10px 14px',
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     border: '1px solid #e0e0e0',
//     borderRadius: '6px',
//     backgroundColor: '#ffffff',
//     cursor: 'pointer',
//     fontSize: '14px',
//   };
//
//   return (
//     <button style={styles} onClick={toggle} type="button">
//       <span>{displayValue}</span>
//       <span style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
//         ▼
//       </span>
//     </button>
//   );
// };

// ============================================
// PASO 5: Sub-componente Content
// ============================================

// QUÉ: Contenedor del dropdown con opciones
// PARA: Mostrar lista de opciones cuando está abierto
// IMPACTO: Renderizado condicional del dropdown

// Descomenta las siguientes líneas:
// interface SelectContentProps {
//   children: ReactNode;
// }
//
// const SelectContent = ({ children }: SelectContentProps) => {
//   const { isOpen } = useSelectContext();
//
//   if (!isOpen) return null;
//
//   const styles: React.CSSProperties = {
//     position: 'absolute',
//     top: '100%',
//     left: 0,
//     right: 0,
//     marginTop: '4px',
//     backgroundColor: '#ffffff',
//     border: '1px solid #e0e0e0',
//     borderRadius: '6px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     zIndex: 100,
//     maxHeight: '200px',
//     overflowY: 'auto',
//   };
//
//   return <div style={styles}>{children}</div>;
// };

// ============================================
// PASO 6: Sub-componente Option
// ============================================

// QUÉ: Opción individual seleccionable
// PARA: Mostrar y seleccionar un valor
// IMPACTO: Cada opción conoce su valor y puede seleccionarse

// Descomenta las siguientes líneas:
// interface SelectOptionProps {
//   children: ReactNode;
//   value: string;
// }
//
// const SelectOption = ({ children, value: optionValue }: SelectOptionProps) => {
//   const { value, onChange } = useSelectContext();
//   const isSelected = value === optionValue;
//
//   const styles: React.CSSProperties = {
//     padding: '10px 14px',
//     cursor: 'pointer',
//     backgroundColor: isSelected ? '#e3f2fd' : 'transparent',
//     fontWeight: isSelected ? 600 : 400,
//   };
//
//   return (
//     <div
//       style={styles}
//       onClick={() => onChange(optionValue, children as string)}
//       onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
//       onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isSelected ? '#e3f2fd' : 'transparent')}
//     >
//       {children}
//     </div>
//   );
// };

// ============================================
// PASO 7: Exportar como Compound Component
// ============================================

// Descomenta las siguientes líneas:
// export const Select = Object.assign(SelectRoot, {
//   Trigger: SelectTrigger,
//   Content: SelectContent,
//   Option: SelectOption,
// });

// Exportación temporal para evitar errores
export const Select = {
  Trigger: () => null,
  Content: () => null,
  Option: () => null,
};

console.log('Select.tsx cargado');
