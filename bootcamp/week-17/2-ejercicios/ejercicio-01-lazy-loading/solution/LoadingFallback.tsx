// ============================================
// EJERCICIO 01: LOADING FALLBACK (SOLUTION)
// ============================================
// Componente de loading con spinner animado

import { type FC } from 'react';

// ============================================
// TIPOS
// ============================================
interface LoadingFallbackProps {
  name?: string;
}

// ============================================
// COMPONENTE
// ============================================
export const LoadingFallback: FC<LoadingFallbackProps> = ({
  name = 'Contenido',
}) => {
  return (
    <div
      className="loading-fallback"
      role="status"
      aria-label={`Cargando ${name}`}>
      <div className="loading-spinner">
        <div className="spinner" />
      </div>
      <p className="loading-text">Cargando {name}...</p>
    </div>
  );
};

// Estilos inline como alternativa a CSS externo
export const LoadingFallbackStyled: FC<LoadingFallbackProps> = ({
  name = 'Contenido',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        minHeight: '200px',
      }}
      role="status"
      aria-label={`Cargando ${name}`}>
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '4px solid #2a2a2a',
          borderTopColor: '#61DAFB',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        }}
      />
      <p style={{ marginTop: '16px', color: '#b0b0b0' }}>Cargando {name}...</p>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
