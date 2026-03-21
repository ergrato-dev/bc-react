# 03 - Tests de Integración

## 🎯 Objetivos de Aprendizaje

- Comprender qué son los tests de integración
- Usar MSW para mockear APIs de forma realista
- Testear flujos completos de usuario
- Combinar componentes, hooks y contexto en tests

---

## 📖 ¿Qué son los Tests de Integración?

Los tests de integración verifican que **múltiples partes** del sistema funcionan correctamente juntas.

### Comparación con Otros Tipos

| Tipo            | Qué Testea                         | Ejemplo                              |
| --------------- | ---------------------------------- | ------------------------------------ |
| **Unitario**    | Una función/componente aislado     | `formatPrice(1000) === '$1,000'`     |
| **Integración** | Múltiples partes juntas            | Formulario → API → Lista actualizada |
| **E2E**         | Aplicación completa + backend real | Usuario completa compra              |

### ¿Por Qué Tests de Integración?

```
Unitarios ✅ + Integración ❌ = "Funciona solo"
Unitarios ✅ + Integración ✅ = "Funciona junto"
```

---

## 🌐 MSW: Mock Service Worker

MSW intercepta requests de red a nivel de Service Worker, permitiendo tests más realistas.

### Instalación

```bash
pnpm add -D msw
```

### Configuración para Tests

```typescript
// src/test/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

// Tipos de datos
interface User {
  id: number;
  name: string;
  email: string;
}

interface Book {
  id: number;
  title: string;
  author: string;
}

// Datos de prueba
const users: User[] = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
  { id: 2, name: 'María García', email: 'maria@example.com' },
];

const books: Book[] = [
  { id: 1, title: 'Clean Code', author: 'Robert Martin' },
  { id: 2, title: 'The Pragmatic Programmer', author: 'Hunt & Thomas' },
];

// Handlers para diferentes endpoints
export const handlers = [
  // GET /api/users
  http.get('/api/users', () => {
    return HttpResponse.json(users);
  }),

  // GET /api/users/:id
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    const user = users.find((u) => u.id === Number(id));

    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(user);
  }),

  // POST /api/users
  http.post('/api/users', async ({ request }) => {
    const newUser = (await request.json()) as Omit<User, 'id'>;
    const created: User = {
      id: users.length + 1,
      ...newUser,
    };
    return HttpResponse.json(created, { status: 201 });
  }),

  // DELETE /api/users/:id
  http.delete('/api/users/:id', ({ params }) => {
    const { id } = params;
    const index = users.findIndex((u) => u.id === Number(id));

    if (index === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    return new HttpResponse(null, { status: 204 });
  }),

  // GET /api/books
  http.get('/api/books', () => {
    return HttpResponse.json(books);
  }),
];
```

### Setup del Server

```typescript
// src/test/mocks/server.ts
import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// Crear servidor con handlers por defecto
export const server = setupServer(...handlers);
```

### Integración con Vitest

```typescript
// src/test/setup.ts
import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// Iniciar servidor antes de todos los tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Resetear handlers después de cada test
afterEach(() => server.resetHandlers());

// Cerrar servidor al terminar
afterAll(() => server.close());
```

```typescript
// vite.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
});
```

---

## 📝 Ejemplo Completo: Lista de Usuarios

### Componente a Testear

```typescript
// components/UserList.tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Error al cargar usuarios');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Error al eliminar');
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    }
  };

  if (loading) return <div role="status">Cargando...</div>;
  if (error) return <div role="alert">{error}</div>;

  return (
    <div>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <p>No hay usuarios</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <button
                onClick={() => deleteUser(user.id)}
                aria-label={`Eliminar ${user.name}`}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Tests de Integración

```typescript
// components/UserList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../test/mocks/server';
import { UserList } from './UserList';

describe('UserList Integration', () => {
  test('muestra estado de carga inicial', () => {
    render(<UserList />);

    expect(screen.getByRole('status')).toHaveTextContent('Cargando...');
  });

  test('muestra lista de usuarios después de cargar', async () => {
    render(<UserList />);

    // Esperar a que desaparezca el loading
    await waitFor(() => {
      expect(screen.queryByRole('status')).not.toBeInTheDocument();
    });

    // Verificar usuarios (definidos en handlers.ts)
    expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    expect(screen.getByText('María García')).toBeInTheDocument();
  });

  test('elimina usuario de la lista', async () => {
    const user = userEvent.setup();
    render(<UserList />);

    // Esperar a que carguen los usuarios
    await waitFor(() => {
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });

    // Click en botón eliminar
    await user.click(screen.getByRole('button', { name: /eliminar juan/i }));

    // Verificar que se eliminó de la lista
    await waitFor(() => {
      expect(screen.queryByText('Juan Pérez')).not.toBeInTheDocument();
    });

    // El otro usuario sigue presente
    expect(screen.getByText('María García')).toBeInTheDocument();
  });

  test('muestra error cuando falla la carga', async () => {
    // Override handler para este test específico
    server.use(
      http.get('/api/users', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(
        'Error al cargar usuarios'
      );
    });
  });

  test('muestra mensaje cuando no hay usuarios', async () => {
    // Override para retornar lista vacía
    server.use(
      http.get('/api/users', () => {
        return HttpResponse.json([]);
      })
    );

    render(<UserList />);

    await waitFor(() => {
      expect(screen.getByText('No hay usuarios')).toBeInTheDocument();
    });
  });
});
```

---

## 🔄 Flujos Completos: Crear y Listar

### Componente de Formulario

```typescript
// components/UserForm.tsx
import { useState } from 'react';

interface UserFormProps {
  onUserCreated: () => void;
}

export function UserForm({ onUserCreated }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) throw new Error('Error al crear usuario');

      setName('');
      setEmail('');
      onUserCreated();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      {error && <div role="alert">{error}</div>}
      <button type="submit" disabled={submitting}>
        {submitting ? 'Creando...' : 'Crear Usuario'}
      </button>
    </form>
  );
}
```

### Test de Flujo Completo

```typescript
// components/UserManagement.test.tsx
import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect } from 'vitest';
import { UserManagement } from './UserManagement';

describe('User Management Flow', () => {
  test('flujo completo: crear usuario y verlo en la lista', async () => {
    const user = userEvent.setup();
    render(<UserManagement />);

    // 1. Esperar a que cargue la lista inicial
    await waitFor(() => {
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });

    // 2. Llenar formulario de nuevo usuario
    await user.type(screen.getByLabelText(/nombre/i), 'Carlos López');
    await user.type(screen.getByLabelText(/email/i), 'carlos@example.com');

    // 3. Enviar formulario
    await user.click(screen.getByRole('button', { name: /crear usuario/i }));

    // 4. Verificar que el formulario se limpió
    await waitFor(() => {
      expect(screen.getByLabelText(/nombre/i)).toHaveValue('');
    });

    // 5. Verificar que la lista se actualizó
    // (En un caso real, el nuevo usuario aparecería después de refetch)
  });

  test('flujo: buscar usuario y eliminar', async () => {
    const user = userEvent.setup();
    render(<UserManagement />);

    // 1. Esperar carga
    await waitFor(() => {
      expect(screen.getByText('Juan Pérez')).toBeInTheDocument();
    });

    // 2. Buscar usuario
    const searchInput = screen.getByPlaceholderText(/buscar/i);
    await user.type(searchInput, 'María');

    // 3. Verificar que solo se muestra María
    expect(screen.queryByText('Juan Pérez')).not.toBeInTheDocument();
    expect(screen.getByText('María García')).toBeInTheDocument();

    // 4. Eliminar usuario
    await user.click(screen.getByRole('button', { name: /eliminar maría/i }));

    // 5. Verificar que se eliminó
    await waitFor(() => {
      expect(screen.queryByText('María García')).not.toBeInTheDocument();
    });
  });
});
```

---

## 🎁 Testing con Context Providers

### Wrapper con Múltiples Providers

```typescript
// test/utils/render.tsx
import { ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import { ThemeProvider } from '../../context/ThemeContext';

interface WrapperProps {
  children: ReactNode;
}

function AllProviders({ children }: WrapperProps) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

// Re-exportar todo de testing-library
export * from '@testing-library/react';

// Override render
export { customRender as render };
```

### Uso en Tests

```typescript
// Importar render personalizado
import { render, screen, waitFor } from '../test/utils/render';
import userEvent from '@testing-library/user-event';
import { Dashboard } from './Dashboard';

describe('Dashboard with Auth', () => {
  test('muestra contenido para usuario autenticado', async () => {
    // El AuthProvider del wrapper maneja el estado de auth
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText(/bienvenido/i)).toBeInTheDocument();
    });
  });
});
```

---

## 📊 Cuándo Usar Tests de Integración

### Escenarios Ideales

| Escenario                      | Ejemplo                                      |
| ------------------------------ | -------------------------------------------- |
| **Flujos de usuario**          | Login → Dashboard → Logout                   |
| **CRUD completo**              | Crear → Listar → Editar → Eliminar           |
| **Formularios con validación** | Input → Validar → Enviar → Mostrar resultado |
| **Navegación**                 | Click en link → Renderiza nueva página       |
| **Interacción con API**        | Fetch → Mostrar → Actualizar                 |

### Cuándo NO Usarlos

- Lógica pura (usar tests unitarios)
- Funciones utilitarias simples
- Validación de props de componentes aislados

---

## ✅ Mejores Prácticas

### 1. Un Test, Un Flujo

```typescript
// ✅ Bien - un flujo específico
test('usuario puede agregar producto al carrito', async () => {
  // Setup → Action → Assertion para UN flujo
});

// ❌ Mal - múltiples flujos mezclados
test('carrito funciona', async () => {
  // Agregar, quitar, vaciar, checkout... todo junto
});
```

### 2. Usar screen.debug()

```typescript
test('debugging', async () => {
  render(<MyComponent />);

  // Ver el DOM actual
  screen.debug();

  // O un elemento específico
  screen.debug(screen.getByRole('button'));
});
```

### 3. waitFor para Async

```typescript
// ✅ Bien - espera explícita
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});

// ❌ Mal - timeouts manuales
await new Promise((r) => setTimeout(r, 1000));
expect(screen.getByText('Loaded')).toBeInTheDocument();
```

---

## ✅ Checklist de Verificación

- [ ] Comprendo la diferencia entre tests unitarios e integración
- [ ] Puedo configurar MSW para mockear APIs
- [ ] Sé crear handlers para diferentes endpoints
- [ ] Puedo testear flujos completos de usuario
- [ ] Uso wrappers para providers de contexto

---

## 📚 Recursos Adicionales

- [MSW Documentation](https://mswjs.io/docs/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about)
- [Kent C. Dodds - Write tests that give you confidence](https://kentcdodds.com/blog/write-tests)
