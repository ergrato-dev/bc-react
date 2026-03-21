import { useState, useEffect } from 'react';

// ============================================
// SECCIÓN 2: useLocalStorage
// ============================================
console.log('--- Sección 2: useLocalStorage ---');

// QUÉ: Custom hook que sincroniza estado con localStorage
// PARA: Persistir datos entre recargas de página
// IMPACTO: Estado sobrevive a cierres del navegador

// Descomenta las siguientes líneas:
// /**
//  * QUÉ: Hook que persiste estado en localStorage
//  * PARA: Mantener datos entre sesiones del navegador
//  * IMPACTO: API igual a useState pero con persistencia
//  *
//  * @param key - Clave en localStorage
//  * @param initialValue - Valor inicial si no existe en localStorage
//  * @returns Tupla [valor, setter] como useState
//  *
//  * @example
//  * const [theme, setTheme] = useLocalStorage<string>('theme', 'light');
//  */
// export const useLocalStorage = <T,>(
//   key: string,
//   initialValue: T,
// ): [T, (value: T) => void] => {
//   // QUÉ: useState con inicialización lazy
//   // PARA: Leer de localStorage solo en el primer render
//   // IMPACTO: Optimización, no lee localStorage en cada render
//   const [storedValue, setStoredValue] = useState<T>(() => {
//     try {
//       const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     } catch (error) {
//       console.error(`Error leyendo localStorage key "${key}":`, error);
//       return initialValue;
//     }
//   });
//
//   // QUÉ: useEffect que guarda en localStorage cuando cambia el valor
//   // PARA: Sincronizar estado React con localStorage
//   // IMPACTO: Persistencia automática sin llamadas manuales
//   useEffect(() => {
//     try {
//       window.localStorage.setItem(key, JSON.stringify(storedValue));
//       console.log(`💾 localStorage["${key}"] actualizado`);
//     } catch (error) {
//       console.error(`Error guardando en localStorage key "${key}":`, error);
//     }
//   }, [key, storedValue]);
//
//   return [storedValue, setStoredValue];
// };

console.log('');

// ============================================
// EJEMPLO DE USO
// ============================================

// Descomenta para ver ejemplo:
// import React from 'react';
//
// export const PreferencesPanel: React.FC = () => {
//   // QUÉ: Usar el hook igual que useState
//   // PARA: Estado persistido automáticamente
//   // IMPACTO: Preferencias se mantienen entre sesiones
//   const [theme, setTheme] = useLocalStorage<string>('theme', 'light');
//   const [fontSize, setFontSize] = useLocalStorage<number>('fontSize', 16);
//
//   return (
//     <div>
//       <h2>Preferencias</h2>
//
//       <label>
//         Tema:
//         <select value={theme} onChange={(e) => setTheme(e.target.value)}>
//           <option value="light">Claro</option>
//           <option value="dark">Oscuro</option>
//         </select>
//       </label>
//
//       <label>
//         Tamaño de fuente:
//         <input
//           type="number"
//           value={fontSize}
//           onChange={(e) => setFontSize(Number(e.target.value))}
//         />
//       </label>
//
//       <p className="hint">
//         👉 Recarga la página y verás que las preferencias se mantienen
//       </p>
//     </div>
//   );
// };
