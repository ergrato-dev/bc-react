// ============================================
// EJERCICIO 01: ERROR BOUNDARY (STARTER)
// ============================================
// Captura errores cuando falla la carga de componentes lazy

import { Component, type ErrorInfo, type ReactNode } from 'react';

// ============================================
// PASO 1: Definir interfaces
// ============================================
console.log('--- ErrorBoundary: Interfaces ---');

// Descomenta las interfaces:
// interface ErrorBoundaryProps {
//   children: ReactNode;
//   fallback?: ReactNode;
// }

// interface ErrorBoundaryState {
//   hasError: boolean;
//   error: Error | null;
// }

// ============================================
// PASO 2: Crear el Error Boundary
// ============================================
console.log('--- ErrorBoundary: Clase ---');

// Los Error Boundaries DEBEN ser componentes de clase
// No hay equivalente en hooks aún

// Descomenta la clase:
// class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
//   constructor(props: ErrorBoundaryProps) {
//     super(props);
//     this.state = { hasError: false, error: null };
//   }
//
//   // Se llama cuando un hijo lanza un error
//   static getDerivedStateFromError(error: Error): ErrorBoundaryState {
//     return { hasError: true, error };
//   }
//
//   // Para logging de errores
//   componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
//     console.error('Error capturado por ErrorBoundary:', error);
//     console.error('Component stack:', errorInfo.componentStack);
//   }
//
//   // Método para reintentar
//   handleRetry = (): void => {
//     this.setState({ hasError: false, error: null });
//   };
//
//   render(): ReactNode {
//     if (this.state.hasError) {
//       // Si hay un fallback personalizado, usarlo
//       if (this.props.fallback) {
//         return this.props.fallback;
//       }
//
//       // Fallback por defecto
//       return (
//         <div className="error-boundary" role="alert">
//           <h2>¡Algo salió mal!</h2>
//           <p className="error-message">
//             {this.state.error?.message || 'Error desconocido'}
//           </p>
//           <button onClick={this.handleRetry} className="retry-button">
//             Reintentar
//           </button>
//         </div>
//       );
//     }
//
//     return this.props.children;
//   }
// }

// Placeholder temporal (reemplazar por la clase real)
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  render(): ReactNode {
    // Placeholder: solo renderiza los hijos
    // Implementa la lógica de captura de errores
    return this.props.children;
  }
}

export default ErrorBoundary;

// ============================================
// CSS sugerido (agregar a styles.css):
// ============================================
/*
.error-boundary {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 200px;
  background-color: #2a1e1e;
  border: 1px solid #ef4444;
  border-radius: 8px;
  text-align: center;
}

.error-boundary h2 {
  color: #ef4444;
  margin-bottom: 16px;
}

.error-message {
  color: #b0b0b0;
  margin-bottom: 24px;
}

.retry-button {
  padding: 8px 24px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.retry-button:hover {
  background-color: #dc2626;
}
*/
