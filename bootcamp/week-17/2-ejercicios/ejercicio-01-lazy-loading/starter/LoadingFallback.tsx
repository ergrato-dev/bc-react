// ============================================
// EJERCICIO 01: LOADING FALLBACK (STARTER)
// ============================================
// Componente que se muestra mientras carga el componente lazy

import { type FC } from 'react';

// ============================================
// PASO 1: Props del componente
// ============================================
console.log('--- LoadingFallback: Props ---');

// Descomenta la interfaz:
// interface LoadingFallbackProps {
//   name?: string;
// }

// ============================================
// PASO 2: Componente de loading
// ============================================
console.log('--- LoadingFallback: Componente ---');

// Descomenta el componente:
// export const LoadingFallback: FC<LoadingFallbackProps> = ({ name = 'Contenido' }) => {
//   return (
//     <div className="loading-fallback" role="status" aria-label={`Cargando ${name}`}>
//       <div className="loading-spinner">
//         <div className="spinner"></div>
//       </div>
//       <p className="loading-text">Cargando {name}...</p>
//     </div>
//   );
// };

// Placeholder temporal
interface LoadingFallbackProps {
  name?: string;
}

export const LoadingFallback: FC<LoadingFallbackProps> = ({
  name = 'Contenido',
}) => {
  return (
    <div className="loading-fallback">
      <p>Cargando {name}... (implementa el spinner)</p>
    </div>
  );
};

// ============================================
// CSS sugerido (agregar a styles.css):
// ============================================
/*
.loading-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 200px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
}

.spinner {
  width: 100%;
  height: 100%;
  border: 4px solid #2a2a2a;
  border-top-color: #61DAFB;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-text {
  margin-top: 16px;
  color: #b0b0b0;
}
*/
