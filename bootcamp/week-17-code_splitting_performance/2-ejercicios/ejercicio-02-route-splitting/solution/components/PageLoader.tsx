// ============================================
// EJERCICIO 02: Page Loader (SOLUTION)
// ============================================

import { type FC } from 'react';

export const PageLoader: FC = () => {
  return (
    <div
      className="page-loader"
      role="status"
      aria-label="Cargando página"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
      }}>
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            margin: '0 auto 20px',
            border: '4px solid #2a2a2a',
            borderTopColor: '#61DAFB',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
          }}
        />
        <p>Cargando página...</p>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  );
};
