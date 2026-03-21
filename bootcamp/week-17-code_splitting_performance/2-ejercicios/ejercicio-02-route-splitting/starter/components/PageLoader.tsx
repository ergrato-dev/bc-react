// ============================================
// EJERCICIO 02: Page Loader (STARTER)
// ============================================
// Componente de loading para transiciones entre rutas

import { type FC } from 'react';

// ============================================
// COMPONENTE
// ============================================
// Descomenta el componente:
// export const PageLoader: FC = () => {
//   return (
//     <div className="page-loader" role="status" aria-label="Cargando página">
//       <div className="page-loader-content">
//         <div className="page-loader-spinner" />
//         <p>Cargando página...</p>
//       </div>
//     </div>
//   );
// };

// Placeholder
export const PageLoader: FC = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <p>Cargando página... (implementar spinner)</p>
    </div>
  );
};

// ============================================
// CSS sugerido
// ============================================
/*
.page-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.page-loader-content {
  text-align: center;
}

.page-loader-spinner {
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border: 4px solid #2a2a2a;
  border-top-color: #61DAFB;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
*/
