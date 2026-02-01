// ============================================
// SOLUCIÓN: App de demostración
// Hooks genéricos: useLocalStorage + useAsync
// ============================================

import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useAsync } from './useAsync';

// ============================================
// Tipos para los demos
// ============================================

interface UserPreferences {
  theme: 'light' | 'dark';
  fontSize: number;
  language: string;
  notifications: boolean;
}

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// ============================================
// Demo de useLocalStorage
// ============================================

const LocalStorageDemo: React.FC = () => {
  // Hook con string simple
  const {
    value: username,
    setValue: setUsername,
    removeValue: clearUsername,
  } = useLocalStorage<string>('user-name', '');

  // Hook con array
  const { value: history, setValue: setHistory } = useLocalStorage<string[]>(
    'search-history',
    [],
  );

  // Hook con objeto complejo
  const { value: preferences, setValue: setPreferences } =
    useLocalStorage<UserPreferences>('user-preferences', {
      theme: 'dark',
      fontSize: 16,
      language: 'es',
      notifications: true,
    });

  // Función para agregar al historial
  const addToHistory = (term: string) => {
    if (term && !history.includes(term)) {
      setHistory((prev) => [term, ...prev].slice(0, 5));
    }
  };

  const containerStyle: React.CSSProperties = {
    padding: '1.5rem',
    backgroundColor: preferences.theme === 'dark' ? '#1a1a1a' : '#f5f5f5',
    color: preferences.theme === 'dark' ? '#fff' : '#000',
    borderRadius: '8px',
    marginBottom: '1rem',
    fontSize: `${preferences.fontSize}px`,
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#61dafb' }}>💾 useLocalStorage Demo</h2>

      {/* String simple */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3>String Simple</h3>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Tu nombre de usuario"
          style={{
            padding: '0.5rem',
            marginRight: '0.5rem',
            backgroundColor: preferences.theme === 'dark' ? '#333' : '#fff',
            border: '1px solid #555',
            borderRadius: '4px',
            color: 'inherit',
          }}
        />
        <button
          onClick={clearUsername}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}>
          Limpiar
        </button>
        <p style={{ color: '#888', marginTop: '0.5rem' }}>
          Guardado: &quot;{username}&quot;
        </p>
      </div>

      {/* Array */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3>Array (Historial)</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target as HTMLFormElement;
            const input = form.elements.namedItem('search') as HTMLInputElement;
            addToHistory(input.value);
            input.value = '';
          }}>
          <input
            name="search"
            type="text"
            placeholder="Agregar al historial"
            style={{
              padding: '0.5rem',
              marginRight: '0.5rem',
              backgroundColor: preferences.theme === 'dark' ? '#333' : '#fff',
              border: '1px solid #555',
              borderRadius: '4px',
              color: 'inherit',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#4ecdc4',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>
            Agregar
          </button>
        </form>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          {history.length === 0 && (
            <li style={{ color: '#666' }}>Sin historial</li>
          )}
        </ul>
      </div>

      {/* Objeto complejo */}
      <div>
        <h3>Objeto (Preferencias)</h3>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <label>
            Tema:{' '}
            <select
              value={preferences.theme}
              onChange={(e) =>
                setPreferences((p) => ({
                  ...p,
                  theme: e.target.value as 'light' | 'dark',
                }))
              }
              style={{
                padding: '0.25rem',
                backgroundColor: preferences.theme === 'dark' ? '#333' : '#fff',
                color: 'inherit',
                border: '1px solid #555',
                borderRadius: '4px',
              }}>
              <option value="dark">Oscuro</option>
              <option value="light">Claro</option>
            </select>
          </label>

          <label>
            Tamaño:{' '}
            <input
              type="range"
              min="12"
              max="24"
              value={preferences.fontSize}
              onChange={(e) =>
                setPreferences((p) => ({
                  ...p,
                  fontSize: Number(e.target.value),
                }))
              }
            />
            {preferences.fontSize}px
          </label>

          <label>
            <input
              type="checkbox"
              checked={preferences.notifications}
              onChange={(e) =>
                setPreferences((p) => ({
                  ...p,
                  notifications: e.target.checked,
                }))
              }
            />{' '}
            Notificaciones
          </label>
        </div>
      </div>

      <div
        style={{
          marginTop: '1rem',
          padding: '0.5rem',
          backgroundColor: preferences.theme === 'dark' ? '#0a0a0a' : '#e0e0e0',
          borderRadius: '4px',
          fontSize: '0.85rem',
        }}>
        <code style={{ color: '#4ecdc4' }}>
          {JSON.stringify(preferences, null, 2)}
        </code>
      </div>
    </div>
  );
};

// ============================================
// Demo de useAsync
// ============================================

// Función async para obtener un post
const fetchPost = async (id: number): Promise<Post> => {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 500));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error(`Post #${id} no encontrado`);
  }

  return response.json();
};

// Función async que puede fallar
const fetchWithError = async (shouldFail: boolean): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (shouldFail) {
    throw new Error('Error simulado por el usuario');
  }

  return 'Operación exitosa!';
};

const AsyncDemo: React.FC = () => {
  const [postId, setPostId] = useState(1);

  // useAsync con fetchPost
  const {
    data: post,
    status,
    isLoading,
    isError,
    isSuccess,
    error,
    execute: loadPost,
    reset: resetPost,
  } = useAsync(fetchPost);

  // useAsync con operación que puede fallar
  const {
    data: result,
    isLoading: loadingError,
    isError: hasError,
    error: errorMsg,
    execute: executeErrorTest,
    reset: resetError,
  } = useAsync(fetchWithError);

  return (
    <div
      style={{
        padding: '1.5rem',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
      }}>
      <h2 style={{ color: '#61dafb' }}>⚡ useAsync Demo</h2>

      {/* Fetch Post Demo */}
      <div style={{ marginBottom: '2rem' }}>
        <h3>Cargar Post de API</h3>

        <div style={{ marginBottom: '1rem' }}>
          <label>
            Post ID:{' '}
            <input
              type="number"
              min="1"
              max="100"
              value={postId}
              onChange={(e) => setPostId(Number(e.target.value))}
              style={{
                padding: '0.5rem',
                width: '80px',
                marginRight: '0.5rem',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: 'white',
              }}
            />
          </label>
          <button
            onClick={() => loadPost(postId)}
            disabled={isLoading}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: isLoading ? '#444' : '#0066ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginRight: '0.5rem',
            }}>
            {isLoading ? 'Cargando...' : 'Cargar Post'}
          </button>
          <button
            onClick={resetPost}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>
            Reset
          </button>
        </div>

        <div
          style={{
            padding: '0.5rem',
            backgroundColor: '#0a0a0a',
            borderRadius: '4px',
            marginBottom: '0.5rem',
          }}>
          <strong>Status:</strong>{' '}
          <span
            style={{
              color:
                status === 'loading'
                  ? '#ffcc00'
                  : status === 'success'
                    ? '#00ff00'
                    : status === 'error'
                      ? '#ff0000'
                      : '#888',
            }}>
            {status}
          </span>
        </div>

        {isError && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#ff000022',
              border: '1px solid #ff0000',
              borderRadius: '4px',
              color: '#ff6666',
            }}>
            ❌ {error?.message}
          </div>
        )}

        {isSuccess && post && (
          <div
            style={{
              padding: '1rem',
              backgroundColor: '#00ff0011',
              border: '1px solid #00ff00',
              borderRadius: '4px',
            }}>
            <h4 style={{ margin: '0 0 0.5rem 0', color: '#4ecdc4' }}>
              #{post.id}: {post.title}
            </h4>
            <p style={{ margin: 0, color: '#ccc' }}>{post.body}</p>
          </div>
        )}
      </div>

      {/* Error Handling Demo */}
      <div>
        <h3>Manejo de Errores</h3>
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => executeErrorTest(false)}
            disabled={loadingError}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: loadingError ? '#444' : '#00aa00',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loadingError ? 'not-allowed' : 'pointer',
              marginRight: '0.5rem',
            }}>
            ✅ Ejecutar (éxito)
          </button>
          <button
            onClick={() => executeErrorTest(true)}
            disabled={loadingError}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: loadingError ? '#444' : '#aa0000',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: loadingError ? 'not-allowed' : 'pointer',
              marginRight: '0.5rem',
            }}>
            ❌ Ejecutar (error)
          </button>
          <button
            onClick={resetError}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}>
            Reset
          </button>
        </div>

        {loadingError && <p style={{ color: '#ffcc00' }}>Ejecutando...</p>}
        {result && <p style={{ color: '#00ff00' }}>✅ {result}</p>}
        {hasError && <p style={{ color: '#ff6666' }}>❌ {errorMsg?.message}</p>}
      </div>
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
      <h1 style={{ color: '#61dafb' }}>Ejercicio 04: Hooks Genéricos</h1>
      <p style={{ color: '#888', marginBottom: '2rem' }}>
        Hooks con TypeScript Generics para máxima reutilización y type-safety
      </p>

      <LocalStorageDemo />

      <hr style={{ borderColor: '#333', margin: '2rem 0' }} />

      <AsyncDemo />
    </div>
  );
};

export default App;
