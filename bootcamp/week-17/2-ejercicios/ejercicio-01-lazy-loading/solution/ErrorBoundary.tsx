// ============================================
// EJERCICIO 01: ERROR BOUNDARY (SOLUTION)
// ============================================
// Error Boundary completo para manejar errores de componentes lazy

import { Component, type ErrorInfo, type ReactNode } from 'react';

// ============================================
// TIPOS
// ============================================
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ============================================
// ERROR BOUNDARY CLASS
// ============================================
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Se llama cuando un componente hijo lanza un error
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Actualiza el estado para mostrar la UI de error
    return { hasError: true, error };
  }

  // Para logging de errores (analytics, servicios de monitoreo)
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error capturado por ErrorBoundary:', error);
    console.error('Component stack:', errorInfo.componentStack);

    // Notificar callback si existe
    this.props.onError?.(error, errorInfo);
  }

  // Método para reintentar la carga
  handleRetry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // Si hay un fallback personalizado, usarlo
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Fallback por defecto
      return (
        <div
          className="error-boundary"
          role="alert"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            minHeight: '200px',
            backgroundColor: '#2a1e1e',
            border: '1px solid #ef4444',
            borderRadius: '8px',
            textAlign: 'center',
          }}>
          <h2 style={{ color: '#ef4444', marginBottom: '16px' }}>
            ¡Algo salió mal!
          </h2>
          <p style={{ color: '#b0b0b0', marginBottom: '24px' }}>
            {this.state.error?.message || 'Error desconocido'}
          </p>
          <button
            onClick={this.handleRetry}
            style={{
              padding: '8px 24px',
              backgroundColor: '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
            }}>
            Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
