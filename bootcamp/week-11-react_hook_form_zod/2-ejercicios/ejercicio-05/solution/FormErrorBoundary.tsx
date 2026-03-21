// ============================================
// EJERCICIO 05: Error Boundary con Formularios
// SOLUCIÓN COMPLETA
// ============================================

import { Component, ErrorInfo, ReactNode, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// ============================================
// PASO 1: Error Boundary (Componente de Clase)
// ============================================

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class FormErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // Método estático que actualiza el estado cuando ocurre un error
  // Se llama durante la fase de "render"
  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Retorna el nuevo estado para mostrar la UI de fallback
    return { hasError: true, error };
  }

  // Método para logging y side effects
  // Se llama durante la fase de "commit"
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Logging detallado del error
    console.error('🔴 Error capturado por FormErrorBoundary:');
    console.error('Error:', error);
    console.error('Mensaje:', error.message);
    console.error('Stack:', error.stack);
    console.error('Component Stack:', errorInfo.componentStack);

    // Guardamos la información del error
    this.setState({ errorInfo });

    // En producción, enviarías esto a un servicio como Sentry, LogRocket, etc.
    // sendToErrorService({ error, errorInfo, timestamp: new Date() });
  }

  // PASO 3: Método para reintentar
  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });

    // Llamar callback opcional para limpiar estado externo
    this.props.onReset?.();
  };

  render(): ReactNode {
    if (this.state.hasError) {
      // PASO 2: Fallback UI personalizada o por defecto
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // UI de fallback por defecto
      return (
        <div
          style={{
            padding: '24px',
            backgroundColor: '#fee2e2',
            border: '2px solid #ef4444',
            borderRadius: '12px',
            textAlign: 'center',
            maxWidth: '400px',
            margin: '20px auto',
          }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>😕</div>

          <h3
            style={{
              color: '#dc2626',
              marginBottom: '12px',
              fontSize: '20px',
            }}>
            Algo salió mal
          </h3>

          <p
            style={{
              color: '#7f1d1d',
              marginBottom: '20px',
              fontSize: '14px',
            }}>
            Ha ocurrido un error inesperado en el formulario. Puedes intentar
            nuevamente.
          </p>

          {/* Detalles del error (colapsables) */}
          <details
            style={{
              marginBottom: '20px',
              textAlign: 'left',
              backgroundColor: '#ffffff',
              padding: '12px',
              borderRadius: '6px',
            }}>
            <summary
              style={{
                cursor: 'pointer',
                color: '#991b1b',
                fontWeight: 'bold',
              }}>
              🔍 Ver detalles técnicos
            </summary>
            <pre
              style={{
                backgroundColor: '#1a1a1a',
                color: '#f87171',
                padding: '12px',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '11px',
                marginTop: '12px',
                textAlign: 'left',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}>
              {this.state.error?.message}
              {'\n\n'}
              {this.state.error?.stack}
            </pre>
          </details>

          {/* Botón de reintentar */}
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
              fontSize: '16px',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#3178C6';
            }}>
            🔄 Reintentar
          </button>
        </div>
      );
    }

    // Si no hay error, renderizar los hijos normalmente
    return this.props.children;
  }
}

// ============================================
// PASO 4: Formulario de Demostración
// ============================================

const schema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email no válido'),
  triggerError: z.boolean(),
});

type FormData = z.infer<typeof schema>;

// Componente que puede lanzar un error durante el render
const ProblematicForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      triggerError: false,
    },
  });

  const triggerError = watch('triggerError');

  // Este error ocurre durante el render, por lo que el Error Boundary lo captura
  if (triggerError) {
    throw new Error(
      'Error simulado: El checkbox de error está activado.\n' +
        'Este error fue lanzado intencionalmente para demostrar ' +
        'el funcionamiento del Error Boundary.',
    );
  }

  const onSubmit = (data: FormData): void => {
    console.log('Datos enviados:', data);
    alert(`¡Hola, ${data.name}! Tu email es ${data.email}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        padding: '24px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
      }}>
      <h3 style={{ marginBottom: '20px' }}>📝 Formulario de Prueba</h3>

      <div style={{ marginBottom: '16px' }}>
        <label
          style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
          Nombre:
        </label>
        <input
          {...register('name')}
          placeholder="Tu nombre"
          style={{
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: errors.name ? '1px solid #ef4444' : '1px solid #ccc',
          }}
        />
        {errors.name && (
          <span style={{ color: '#ef4444', fontSize: '12px' }}>
            {errors.name.message}
          </span>
        )}
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label
          style={{ display: 'block', marginBottom: '4px', fontWeight: 'bold' }}>
          Email:
        </label>
        <input
          {...register('email')}
          type="email"
          placeholder="tu@email.com"
          style={{
            width: '100%',
            padding: '10px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            border: errors.email ? '1px solid #ef4444' : '1px solid #ccc',
          }}
        />
        {errors.email && (
          <span style={{ color: '#ef4444', fontSize: '12px' }}>
            {errors.email.message}
          </span>
        )}
      </div>

      <div
        style={{
          marginBottom: '20px',
          padding: '12px',
          backgroundColor: '#fef3c7',
          borderRadius: '6px',
          border: '1px solid #f59e0b',
        }}>
        <label
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#92400e',
            cursor: 'pointer',
          }}>
          <input
            type="checkbox"
            {...register('triggerError')}
          />
          <span>
            ⚠️ <strong>Activar error</strong> (para probar Error Boundary)
          </span>
        </label>
        <p
          style={{
            margin: '8px 0 0 24px',
            fontSize: '12px',
            color: '#a16207',
          }}>
          Al marcar esto, el componente lanzará un error durante el render.
        </p>
      </div>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#4ade80',
          color: '#1a1a1a',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '16px',
        }}>
        ✅ Enviar Formulario
      </button>
    </form>
  );
};

// Componente principal que integra todo
const App: React.FC = () => {
  // Usamos una key para forzar la recreación del componente al resetear
  const [resetKey, setResetKey] = useState(0);

  const handleReset = (): void => {
    // Incrementar la key causa que React desmonte y remonte el componente
    setResetKey((prev) => prev + 1);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h2>🛡️ Error Boundary Demo</h2>

      <p
        style={{
          color: '#666',
          marginBottom: '24px',
          lineHeight: '1.6',
        }}>
        Este ejemplo demuestra cómo un Error Boundary protege la aplicación de
        errores en componentes de formulario. Activa el checkbox para simular un
        error y ver el comportamiento.
      </p>

      {/* El Error Boundary envuelve el formulario problemático */}
      {/* La key permite recrear el componente al hacer reset */}
      <FormErrorBoundary
        key={resetKey}
        onReset={handleReset}>
        <ProblematicForm />
      </FormErrorBoundary>

      <div
        style={{
          marginTop: '24px',
          padding: '16px',
          backgroundColor: '#e0f2fe',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#0369a1',
        }}>
        <strong>💡 Nota:</strong> Los Error Boundaries capturan errores durante
        el renderizado. Los errores en event handlers deben manejarse con
        try/catch.
      </div>
    </div>
  );
};

export { FormErrorBoundary };
export default App;
