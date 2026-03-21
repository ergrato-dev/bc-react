// ============================================
// ERROR BOUNDARY PARA FORMULARIOS
// ============================================

import { Component, ErrorInfo, ReactNode } from 'react';

interface FormErrorBoundaryProps {
  children: ReactNode;
  onReset?: () => void;
}

interface FormErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary especializado para proteger formularios
 * Captura errores durante el render y muestra una UI de fallback
 */
class FormErrorBoundary extends Component<
  FormErrorBoundaryProps,
  FormErrorBoundaryState
> {
  constructor(props: FormErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): FormErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // TODO: Enviar a servicio de monitoreo en producción
    console.error('FormErrorBoundary capturó un error:', error);
    console.error('Component stack:', errorInfo.componentStack);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: '24px',
            backgroundColor: '#fee2e2',
            border: '2px solid #ef4444',
            borderRadius: '8px',
            textAlign: 'center',
            margin: '16px 0',
          }}>
          <h3 style={{ color: '#dc2626', marginBottom: '16px' }}>
            😕 Error en el Formulario
          </h3>

          <p style={{ color: '#7f1d1d', marginBottom: '16px' }}>
            Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
          </p>

          <details style={{ marginBottom: '16px', textAlign: 'left' }}>
            <summary style={{ cursor: 'pointer', color: '#991b1b' }}>
              Ver detalles técnicos
            </summary>
            <pre
              style={{
                backgroundColor: '#1a1a1a',
                color: '#fca5a5',
                padding: '12px',
                borderRadius: '4px',
                fontSize: '12px',
                overflow: 'auto',
                marginTop: '8px',
              }}>
              {this.state.error?.message}
            </pre>
          </details>

          <button
            onClick={this.handleReset}
            style={{
              padding: '12px 24px',
              backgroundColor: '#3178C6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}>
            🔄 Reintentar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default FormErrorBoundary;
