// ============================================
// EJERCICIO 01: Renderizado Condicional Básico
// SOLUCIÓN COMPLETA
// ============================================

import React, { useState } from 'react';

// ============================================
// TIPOS
// ============================================
type Status = 'idle' | 'loading' | 'success' | 'error';

interface StatusMessageProps {
  status: Status;
  message?: string;
  showDetails?: boolean;
  username?: string;
  itemCount?: number | null;
}

// ============================================
// PASO 1: Operador Ternario
// ============================================
const getStatusIcon = (status: Status): string => {
  return status === 'success' ? '✅' : status === 'error' ? '❌' : '⏳';
};

const getStatusColor = (status: Status): string => {
  return status === 'success'
    ? 'text-green-500'
    : status === 'error'
      ? 'text-red-500'
      : 'text-gray-500';
};

// ============================================
// PASO 2: Operador AND (&&)
// ============================================
interface DetailsProps {
  show: boolean;
  message?: string;
}

const Details: React.FC<DetailsProps> = ({ show, message }) => {
  return (
    <>
      {show && (
        <div className="details">
          <p>📋 Detalles: {message || 'Sin información adicional'}</p>
        </div>
      )}
    </>
  );
};

// ============================================
// PASO 3: Operador OR (||) para defaults
// ============================================
const Greeting: React.FC<{ username?: string }> = ({ username }) => {
  const displayName = username || 'Invitado';
  return <p>👋 Hola, {displayName}!</p>;
};

// ============================================
// PASO 4: Nullish Coalescing (??)
// ============================================
const ItemCounter: React.FC<{ count?: number | null }> = ({ count }) => {
  const displayWithOr = count || 'Sin items (usando ||)';
  const displayWithNullish = count ?? 'Sin items (usando ??)';

  return (
    <div className="counter-comparison">
      <p>Con ||: {displayWithOr}</p>
      <p>Con ??: {displayWithNullish}</p>
    </div>
  );
};

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
const StatusMessage: React.FC<StatusMessageProps> = ({
  status,
  message,
  showDetails = false,
  username,
  itemCount,
}) => {
  return (
    <div className={`status-message ${getStatusColor(status)}`}>
      <span className="icon">{getStatusIcon(status)}</span>

      <h3>
        {status === 'success'
          ? '¡Operación exitosa!'
          : status === 'error'
            ? 'Ocurrió un error'
            : status === 'loading'
              ? 'Procesando...'
              : 'Esperando acción'}
      </h3>

      <Details
        show={showDetails}
        message={message}
      />
      <Greeting username={username} />
      <ItemCounter count={itemCount} />
    </div>
  );
};

// ============================================
// APP DE DEMOSTRACIÓN
// ============================================
export const App: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="app">
      <h1>Ejercicio 01: Renderizado Condicional</h1>

      <div className="controls">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}>
          <option value="idle">Idle</option>
          <option value="loading">Loading</option>
          <option value="success">Success</option>
          <option value="error">Error</option>
        </select>

        <label>
          <input
            type="checkbox"
            checked={showDetails}
            onChange={(e) => setShowDetails(e.target.checked)}
          />
          Mostrar detalles
        </label>
      </div>

      <StatusMessage
        status={status}
        message="Esta es información adicional"
        showDetails={showDetails}
        username=""
        itemCount={0}
      />
    </div>
  );
};

export default App;
