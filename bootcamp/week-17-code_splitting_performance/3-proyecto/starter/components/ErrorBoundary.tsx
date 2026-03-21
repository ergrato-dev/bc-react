// ============================================
// PROYECTO WEEK-17: components/ErrorBoundary.tsx (STARTER)
// ============================================

import { Component, type ReactNode, type ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Error Boundary para capturar errores de componentes lazy
 *
 * TODO: Implementar el Error Boundary completo
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // TODO: Implementar UI de error personalizada
      return (
        this.props.fallback || (
          <div className="error-container">
            <h2>Algo salió mal</h2>
            <p>{this.state.error?.message}</p>
            <button
              onClick={() => this.setState({ hasError: false, error: null })}>
              Reintentar
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
