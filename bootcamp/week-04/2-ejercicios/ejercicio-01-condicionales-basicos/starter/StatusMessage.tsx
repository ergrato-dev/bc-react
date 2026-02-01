// ============================================
// EJERCICIO 01: Renderizado Condicional Básico
// ============================================
// Aprende a usar ternarios, &&, || y ?? en JSX

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
// El ternario elige entre dos opciones
// Descomenta las siguientes líneas:

// const getStatusIcon = (status: Status): string => {
//   return status === 'success' ? '✅' : status === 'error' ? '❌' : '⏳';
// };
//
// const getStatusColor = (status: Status): string => {
//   return status === 'success'
//     ? 'text-green-500'
//     : status === 'error'
//     ? 'text-red-500'
//     : 'text-gray-500';
// };

// ============================================
// PASO 2: Operador AND (&&)
// ============================================
// Muestra contenido solo si la condición es true
// Descomenta las siguientes líneas:

// interface DetailsProps {
//   show: boolean;
//   message?: string;
// }
//
// const Details: React.FC<DetailsProps> = ({ show, message }) => {
//   // && renderiza el contenido SOLO si show es true
//   return (
//     <>
//       {show && (
//         <div className="details">
//           <p>📋 Detalles: {message || 'Sin información adicional'}</p>
//         </div>
//       )}
//     </>
//   );
// };

// ============================================
// PASO 3: Operador OR (||) para defaults
// ============================================
// Proporciona valor por defecto si el original es falsy
// Descomenta las siguientes líneas:

// const Greeting: React.FC<{ username?: string }> = ({ username }) => {
//   // || usa 'Invitado' si username es '', null, undefined, 0, false
//   const displayName = username || 'Invitado';
//
//   return <p>👋 Hola, {displayName}!</p>;
// };

// ============================================
// PASO 4: Nullish Coalescing (??)
// ============================================
// Solo usa default si es null o undefined (NO para 0 o '')
// Descomenta las siguientes líneas:

// const ItemCounter: React.FC<{ count?: number | null }> = ({ count }) => {
//   // ⚠️ Con ||: si count es 0, mostraría 'Sin items'
//   const displayWithOr = count || 'Sin items (usando ||)';
//
//   // ✅ Con ??: si count es 0, muestra 0
//   const displayWithNullish = count ?? 'Sin items (usando ??)';
//
//   return (
//     <div className="counter-comparison">
//       <p>Con ||: {displayWithOr}</p>
//       <p>Con ??: {displayWithNullish}</p>
//       {/* Nota: Si count = 0, || muestra 'Sin items', ?? muestra 0 */}
//     </div>
//   );
// };

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
// Descomenta para usar todo junto:

// const StatusMessage: React.FC<StatusMessageProps> = ({
//   status,
//   message,
//   showDetails = false,
//   username,
//   itemCount,
// }) => {
//   return (
//     <div className={`status-message ${getStatusColor(status)}`}>
//       {/* Ternario para el icono */}
//       <span className="icon">{getStatusIcon(status)}</span>
//
//       {/* Ternario para el mensaje principal */}
//       <h3>
//         {status === 'success'
//           ? '¡Operación exitosa!'
//           : status === 'error'
//           ? 'Ocurrió un error'
//           : status === 'loading'
//           ? 'Procesando...'
//           : 'Esperando acción'}
//       </h3>
//
//       {/* AND para detalles opcionales */}
//       <Details show={showDetails} message={message} />
//
//       {/* OR para nombre de usuario */}
//       <Greeting username={username} />
//
//       {/* Nullish coalescing para contador */}
//       <ItemCounter count={itemCount} />
//     </div>
//   );
// };

// ============================================
// APP DE DEMOSTRACIÓN
// ============================================
export const App: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [showDetails, setShowDetails] = useState<boolean>(false);

  return (
    <div className="app">
      <h1>Ejercicio 01: Renderizado Condicional</h1>

      {/* Controles */}
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

      {/* Descomenta cuando completes los pasos */}
      {/* <StatusMessage
        status={status}
        message="Esta es información adicional"
        showDetails={showDetails}
        username="" // Prueba con '' para ver || en acción
        itemCount={0} // Prueba con 0 para ver ?? vs ||
      /> */}

      <p className="hint">
        💡 Descomenta el código paso a paso siguiendo el README.md
      </p>
    </div>
  );
};

export default App;
