// ============================================
// SOLUCIÓN: App de demostración
// Hooks con efectos: useFetch + useDebounce
// ============================================

import React, { useState } from 'react';
import { useFetch } from './useFetch';
import { useDebounce } from './useDebounce';

// ============================================
// Tipos para la API de ejemplo
// ============================================

interface User {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

// ============================================
// Demo de useFetch
// ============================================

const FetchDemo: React.FC = () => {
  const { data, loading, error, refetch } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  );

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>📡 useFetch Demo</h2>
      <p style={{ color: '#888' }}>
        Hook que maneja llamadas a API con loading, error y data states
      </p>

      <button
        onClick={refetch}
        disabled={loading}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: loading ? '#444' : '#0066ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '1rem',
        }}>
        {loading ? 'Cargando...' : '🔄 Recargar datos'}
      </button>

      {error && (
        <div
          style={{
            padding: '1rem',
            backgroundColor: '#ff000022',
            border: '1px solid #ff0000',
            borderRadius: '4px',
            color: '#ff6666',
          }}>
          ❌ Error: {error.message}
        </div>
      )}

      {loading && !data && (
        <div style={{ color: '#888', fontStyle: 'italic' }}>
          Cargando usuarios...
        </div>
      )}

      {data && (
        <div
          style={{
            display: 'grid',
            gap: '0.5rem',
          }}>
          {data.slice(0, 5).map((user) => (
            <div
              key={user.id}
              style={{
                padding: '0.75rem',
                backgroundColor: '#1a1a1a',
                borderRadius: '4px',
                border: '1px solid #333',
              }}>
              <strong>{user.name}</strong>
              <br />
              <span style={{ color: '#888', fontSize: '0.9rem' }}>
                {user.email} • {user.company.name}
              </span>
            </div>
          ))}
          <p style={{ color: '#666', fontSize: '0.85rem' }}>
            Mostrando 5 de {data.length} usuarios
          </p>
        </div>
      )}
    </div>
  );
};

// ============================================
// Demo de useDebounce
// ============================================

const DebounceDemo: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [changeCount, setChangeCount] = useState(0);
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Contador de cambios en el input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setChangeCount((prev) => prev + 1);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h2>⏱️ useDebounce Demo</h2>
      <p style={{ color: '#888' }}>
        Hook que retrasa actualizaciones para optimizar búsquedas
      </p>

      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Escribe algo rápidamente..."
        style={{
          padding: '0.75rem',
          width: '100%',
          maxWidth: '300px',
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '4px',
          color: 'white',
          fontSize: '1rem',
          marginBottom: '1rem',
        }}
      />

      <div
        style={{
          display: 'grid',
          gap: '0.5rem',
          backgroundColor: '#1a1a1a',
          padding: '1rem',
          borderRadius: '4px',
        }}>
        <p>
          <strong>Valor actual:</strong>{' '}
          <code style={{ color: '#ff6b6b' }}>&quot;{searchTerm}&quot;</code>
        </p>
        <p>
          <strong>Valor debounced:</strong>{' '}
          <code style={{ color: '#4ecdc4' }}>
            &quot;{debouncedSearch}&quot;
          </code>
        </p>
        <p style={{ color: '#666', fontSize: '0.85rem' }}>
          Cambios en input: {changeCount} | El valor debounced se actualiza
          500ms después de dejar de escribir
        </p>
      </div>
    </div>
  );
};

// ============================================
// Demo combinado: Búsqueda con Debounce
// ============================================

const SearchWithDebounce: React.FC = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);

  // Solo hacer fetch cuando hay query debounced
  const { data, loading, error } = useFetch<User[]>(
    debouncedQuery
      ? `https://jsonplaceholder.typicode.com/users?name_like=${debouncedQuery}`
      : 'https://jsonplaceholder.typicode.com/users',
  );

  return (
    <div>
      <h2>🔍 Búsqueda Combinada</h2>
      <p style={{ color: '#888' }}>useFetch + useDebounce trabajando juntos</p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar usuario por nombre..."
        style={{
          padding: '0.75rem',
          width: '100%',
          maxWidth: '300px',
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '4px',
          color: 'white',
          fontSize: '1rem',
          marginBottom: '1rem',
        }}
      />

      {loading && (
        <p style={{ color: '#888', fontStyle: 'italic' }}>Buscando...</p>
      )}

      {error && <p style={{ color: '#ff6666' }}>Error: {error.message}</p>}

      {data && !loading && (
        <div>
          <p style={{ color: '#666', marginBottom: '0.5rem' }}>
            {data.length} resultado(s) encontrado(s)
          </p>
          {data.map((user) => (
            <div
              key={user.id}
              style={{
                padding: '0.5rem',
                backgroundColor: '#1a1a1a',
                borderRadius: '4px',
                marginBottom: '0.25rem',
              }}>
              {user.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================
// App Principal
// ============================================

const App: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        backgroundColor: '#0a0a0a',
        color: 'white',
        minHeight: '100vh',
      }}>
      <h1 style={{ color: '#61dafb' }}>Ejercicio 03: Hooks con Efectos</h1>

      <hr style={{ borderColor: '#333', margin: '1.5rem 0' }} />
      <FetchDemo />

      <hr style={{ borderColor: '#333', margin: '1.5rem 0' }} />
      <DebounceDemo />

      <hr style={{ borderColor: '#333', margin: '1.5rem 0' }} />
      <SearchWithDebounce />
    </div>
  );
};

export default App;
