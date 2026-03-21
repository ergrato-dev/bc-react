// ============================================
// EJERCICIO 05: Context Avanzado
// Archivo: OptimizedContext.tsx
// ============================================

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  memo,
  type ReactNode,
  type Dispatch,
} from 'react';

console.log('--- Paso 3: Context Splitting para Optimización ---');

// ============================================
// PASO 1: El Problema - Context sin optimizar
// ============================================

// QUÉ: Cuando State y Dispatch están juntos, todo re-renderiza
// PARA: Entender por qué separar contextos
// IMPACTO: Componentes que solo dispatchean no deberían re-renderizar

// Este es el enfoque NO optimizado (no usar en producción para apps grandes):
// interface CounterContextValue {
//   count: number;
//   increment: () => void;
//   decrement: () => void;
// }
// Si usamos un solo contexto, CADA componente que use el hook
// se re-renderiza cuando count cambia, incluso si solo usa increment

// ============================================
// PASO 2: Context Splitting - Separar State y Dispatch
// ============================================

// QUÉ: Separar estado y funciones en contextos diferentes
// PARA: Componentes que solo dispatchean no re-renderizan
// IMPACTO: Mejor rendimiento en apps con muchos consumidores

// Descomenta las siguientes líneas:
// interface CounterState {
//   count: number;
//   history: number[];
// }
//
// type CounterAction =
//   | { type: 'INCREMENT' }
//   | { type: 'DECREMENT' }
//   | { type: 'SET'; payload: number }
//   | { type: 'RESET' };
//
// const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1,
//         history: [...state.history, state.count + 1],
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - 1,
//         history: [...state.history, state.count - 1],
//       };
//     case 'SET':
//       return {
//         count: action.payload,
//         history: [...state.history, action.payload],
//       };
//     case 'RESET':
//       return { count: 0, history: [0] };
//     default:
//       return state;
//   }
// };

// ============================================
// PASO 3: Crear Contextos Separados
// ============================================

// Descomenta las siguientes líneas:
// const CounterStateContext = createContext<CounterState | undefined>(undefined);
// const CounterDispatchContext = createContext<Dispatch<CounterAction> | undefined>(undefined);
//
// // Hook para estado - re-renderiza cuando cambia el estado
// export const useCounterState = () => {
//   const context = useContext(CounterStateContext);
//   if (context === undefined) {
//     throw new Error('useCounterState must be used within CounterProvider');
//   }
//   return context;
// };
//
// // Hook para dispatch - NUNCA causa re-render (dispatch es estable)
// export const useCounterDispatch = () => {
//   const context = useContext(CounterDispatchContext);
//   if (context === undefined) {
//     throw new Error('useCounterDispatch must be used within CounterProvider');
//   }
//   return context;
// };
//
// // Hook combinado para cuando necesitas ambos
// export const useCounter = () => ({
//   ...useCounterState(),
//   dispatch: useCounterDispatch(),
// });

// ============================================
// PASO 4: Implementar Provider
// ============================================

// Descomenta las siguientes líneas:
// interface CounterProviderProps {
//   children: ReactNode;
//   initialCount?: number;
// }
//
// export const CounterProvider = ({
//   children,
//   initialCount = 0,
// }: CounterProviderProps) => {
//   const [state, dispatch] = useReducer(counterReducer, {
//     count: initialCount,
//     history: [initialCount],
//   });
//
//   return (
//     <CounterStateContext.Provider value={state}>
//       <CounterDispatchContext.Provider value={dispatch}>
//         {children}
//       </CounterDispatchContext.Provider>
//     </CounterStateContext.Provider>
//   );
// };

// ============================================
// PASO 5: Componentes de Ejemplo
// ============================================

// QUÉ: Componentes que demuestran cuándo re-renderizan
// PARA: Verificar que la optimización funciona
// IMPACTO: CounterButtons no re-renderiza cuando count cambia

// Descomenta las siguientes líneas:
// // Este componente RE-RENDERIZA cuando count cambia (usa state)
// export const CounterDisplay = memo(() => {
//   const { count } = useCounterState();
//   console.log('🔄 CounterDisplay rendered');
//   return (
//     <div style={{ fontSize: '48px', fontWeight: 'bold', textAlign: 'center' }}>
//       {count}
//     </div>
//   );
// });
//
// // Este componente NO RE-RENDERIZA cuando count cambia (solo usa dispatch)
// export const CounterButtons = memo(() => {
//   const dispatch = useCounterDispatch();
//   console.log('🔄 CounterButtons rendered');
//   return (
//     <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//       <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//     </div>
//   );
// });
//
// // Este componente muestra el historial (usa state)
// export const CounterHistory = memo(() => {
//   const { history } = useCounterState();
//   console.log('🔄 CounterHistory rendered');
//   return (
//     <div style={{ marginTop: '16px', textAlign: 'center' }}>
//       <strong>Historial:</strong> {history.join(' → ')}
//     </div>
//   );
// });

// Exportaciones temporales
export const useCounterState = () => ({ count: 0, history: [0] });
export const useCounterDispatch = () => (() => {}) as Dispatch<unknown>;
export const useCounter = () => ({
  count: 0,
  history: [0],
  dispatch: () => {},
});
export const CounterProvider = ({ children }: { children: ReactNode }) =>
  children;
export const CounterDisplay = () => <div>0</div>;
export const CounterButtons = () => <div>Buttons</div>;
export const CounterHistory = () => <div>History</div>;

console.log('OptimizedContext.tsx cargado');
