# 04 - Testing de Componentes React

## 🎯 Objetivos de Aprendizaje

- Testear componentes con props y estado
- Testear componentes que usan Context
- Crear wrappers reutilizables para tests
- Aplicar patrones comunes de testing en React

---

## 📖 Patrones de Testing en React

### 1. Testing de Props

```typescript
// components/Badge.tsx
interface BadgeProps {
  variant: 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

export function Badge({ variant, children }: BadgeProps) {
  const colors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded-full ${colors[variant]}`}>
      {children}
    </span>
  );
}

// components/Badge.test.tsx
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge', () => {
  test('renderiza el contenido children', () => {
    render(<Badge variant="success">Activo</Badge>);

    expect(screen.getByText('Activo')).toBeInTheDocument();
  });

  test('aplica clase de success', () => {
    render(<Badge variant="success">Test</Badge>);

    const badge = screen.getByText('Test');
    expect(badge).toHaveClass('bg-green-100');
  });

  test('aplica clase de error', () => {
    render(<Badge variant="error">Error</Badge>);

    const badge = screen.getByText('Error');
    expect(badge).toHaveClass('bg-red-100');
  });
});
```

### 2. Testing de Estado Interno

```typescript
// components/Counter.tsx
import { useState } from 'react';

export function Counter({ initialValue = 0 }: { initialValue?: number }) {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <span data-testid="count">{count}</span>
      <button onClick={() => setCount(c => c - 1)}>Decrementar</button>
      <button onClick={() => setCount(c => c + 1)}>Incrementar</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// components/Counter.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  test('muestra valor inicial por defecto (0)', () => {
    render(<Counter />);

    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('muestra valor inicial personalizado', () => {
    render(<Counter initialValue={10} />);

    expect(screen.getByTestId('count')).toHaveTextContent('10');
  });

  test('incrementa el contador', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: /incrementar/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  test('decrementa el contador', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={5} />);

    await user.click(screen.getByRole('button', { name: /decrementar/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('4');
  });

  test('resetea el contador a 0', async () => {
    const user = userEvent.setup();
    render(<Counter initialValue={10} />);

    await user.click(screen.getByRole('button', { name: /reset/i }));

    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });
});
```

### 3. Testing de Callbacks (Props Functions)

```typescript
// components/ItemCard.tsx
interface Item {
  id: number;
  name: string;
}

interface ItemCardProps {
  item: Item;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

export function ItemCard({ item, onDelete, onEdit }: ItemCardProps) {
  return (
    <article>
      <h3>{item.name}</h3>
      <button onClick={() => onEdit(item.id)}>Editar</button>
      <button onClick={() => onDelete(item.id)}>Eliminar</button>
    </article>
  );
}

// components/ItemCard.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ItemCard } from './ItemCard';

describe('ItemCard', () => {
  const mockItem = { id: 1, name: 'Test Item' };

  test('renderiza el nombre del item', () => {
    render(
      <ItemCard
        item={mockItem}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    expect(screen.getByRole('heading', { name: 'Test Item' })).toBeInTheDocument();
  });

  test('llama onDelete con el id correcto', async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();

    render(
      <ItemCard
        item={mockItem}
        onDelete={handleDelete}
        onEdit={() => {}}
      />
    );

    await user.click(screen.getByRole('button', { name: /eliminar/i }));

    expect(handleDelete).toHaveBeenCalledWith(1);
    expect(handleDelete).toHaveBeenCalledTimes(1);
  });

  test('llama onEdit con el id correcto', async () => {
    const user = userEvent.setup();
    const handleEdit = vi.fn();

    render(
      <ItemCard
        item={mockItem}
        onDelete={() => {}}
        onEdit={handleEdit}
      />
    );

    await user.click(screen.getByRole('button', { name: /editar/i }));

    expect(handleEdit).toHaveBeenCalledWith(1);
  });
});
```

---

## 🎁 Testing con Context

### Crear Wrapper Reutilizable

```typescript
// test/test-utils.tsx
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../components/theme/ThemeProvider';

// Wrapper con todos los providers
function AllProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

// Función de render personalizada
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, { wrapper: AllProviders, ...options });
}

// Re-exportar todo de testing-library
export * from '@testing-library/react';
export { customRender as render };
```

### Usar el Wrapper

```typescript
// components/ThemeButton.test.tsx
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// Importar desde nuestro test-utils en lugar de @testing-library/react
import { render } from '../test/test-utils';
import { ThemeButton } from './ThemeButton';

describe('ThemeButton', () => {
  test('muestra icono de sol en tema light', () => {
    render(<ThemeButton />);

    // El componente tiene acceso al ThemeContext
    expect(screen.getByLabelText(/cambiar tema/i)).toBeInTheDocument();
  });
});
```

### Testing de Componentes que Usan Context

```typescript
// components/UserGreeting.tsx
import { useAuth } from '../hooks/useAuth';

export function UserGreeting() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <p>Cargando...</p>;
  if (!user) return <p>Por favor inicia sesión</p>;

  return <p>Hola, {user.name}!</p>;
}

// components/UserGreeting.test.tsx
import { render, screen } from '@testing-library/react';
import { AuthProvider } from '../context/AuthContext';
import { UserGreeting } from './UserGreeting';

// Helper para crear wrapper con estado específico
function renderWithAuth(ui: React.ReactElement, { user = null, isLoading = false } = {}) {
  // Mockear el context provider con valores específicos
  return render(
    <AuthProvider initialState={{ user, isLoading }}>
      {ui}
    </AuthProvider>
  );
}

describe('UserGreeting', () => {
  test('muestra loading mientras carga', () => {
    renderWithAuth(<UserGreeting />, { isLoading: true });

    expect(screen.getByText(/cargando/i)).toBeInTheDocument();
  });

  test('muestra mensaje de login cuando no hay usuario', () => {
    renderWithAuth(<UserGreeting />, { user: null });

    expect(screen.getByText(/por favor inicia sesión/i)).toBeInTheDocument();
  });

  test('muestra saludo cuando hay usuario', () => {
    renderWithAuth(<UserGreeting />, {
      user: { id: 1, name: 'María' }
    });

    expect(screen.getByText(/hola, maría/i)).toBeInTheDocument();
  });
});
```

---

## 📋 Testing de Listas

```typescript
// components/ItemList.tsx
interface Item {
  id: number;
  name: string;
}

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
}

export function ItemList({ items, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return <p>No hay elementos</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          <button
            onClick={() => onDelete(item.id)}
            aria-label={`Eliminar ${item.name}`}
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}

// components/ItemList.test.tsx
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { ItemList } from './ItemList';

describe('ItemList', () => {
  const mockItems = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  test('muestra mensaje cuando la lista está vacía', () => {
    render(<ItemList items={[]} onDelete={() => {}} />);

    expect(screen.getByText(/no hay elementos/i)).toBeInTheDocument();
  });

  test('renderiza todos los items', () => {
    render(<ItemList items={mockItems} onDelete={() => {}} />);

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(3);
  });

  test('cada item tiene botón de eliminar', () => {
    render(<ItemList items={mockItems} onDelete={() => {}} />);

    expect(screen.getByLabelText('Eliminar Item 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Eliminar Item 2')).toBeInTheDocument();
    expect(screen.getByLabelText('Eliminar Item 3')).toBeInTheDocument();
  });

  test('llama onDelete con el id correcto', async () => {
    const user = userEvent.setup();
    const handleDelete = vi.fn();

    render(<ItemList items={mockItems} onDelete={handleDelete} />);

    await user.click(screen.getByLabelText('Eliminar Item 2'));

    expect(handleDelete).toHaveBeenCalledWith(2);
  });

  test('usa within para buscar dentro de un item específico', () => {
    render(<ItemList items={mockItems} onDelete={() => {}} />);

    const listItems = screen.getAllByRole('listitem');
    const secondItem = listItems[1];

    // within limita la búsqueda al elemento específico
    expect(within(secondItem).getByText('Item 2')).toBeInTheDocument();
  });
});
```

---

## 🎨 Testing de Formularios

```typescript
// components/AddItemForm.tsx
import { useState } from 'react';

interface AddItemFormProps {
  onAdd: (name: string) => void;
}

export function AddItemForm({ onAdd }: AddItemFormProps) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      setError('El nombre debe tener al menos 3 caracteres');
      return;
    }

    onAdd(name.trim());
    setName('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? 'error-message' : undefined}
        />
      </label>
      {error && <p id="error-message" role="alert">{error}</p>}
      <button type="submit">Agregar</button>
    </form>
  );
}

// components/AddItemForm.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { AddItemForm } from './AddItemForm';

describe('AddItemForm', () => {
  test('renderiza input y botón', () => {
    render(<AddItemForm onAdd={() => {}} />);

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /agregar/i })).toBeInTheDocument();
  });

  test('muestra error si el nombre es muy corto', async () => {
    const user = userEvent.setup();
    render(<AddItemForm onAdd={() => {}} />);

    await user.type(screen.getByLabelText(/nombre/i), 'ab');
    await user.click(screen.getByRole('button', { name: /agregar/i }));

    expect(screen.getByRole('alert')).toHaveTextContent(/al menos 3 caracteres/i);
    expect(screen.getByLabelText(/nombre/i)).toHaveAttribute('aria-invalid', 'true');
  });

  test('llama onAdd con el nombre válido', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<AddItemForm onAdd={handleAdd} />);

    await user.type(screen.getByLabelText(/nombre/i), 'Nuevo Item');
    await user.click(screen.getByRole('button', { name: /agregar/i }));

    expect(handleAdd).toHaveBeenCalledWith('Nuevo Item');
  });

  test('limpia el input después de agregar', async () => {
    const user = userEvent.setup();
    render(<AddItemForm onAdd={() => {}} />);

    const input = screen.getByLabelText(/nombre/i);
    await user.type(input, 'Nuevo Item');
    await user.click(screen.getByRole('button', { name: /agregar/i }));

    expect(input).toHaveValue('');
  });

  test('permite enviar con Enter', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();
    render(<AddItemForm onAdd={handleAdd} />);

    await user.type(screen.getByLabelText(/nombre/i), 'Item con Enter{Enter}');

    expect(handleAdd).toHaveBeenCalledWith('Item con Enter');
  });
});
```

---

## ✅ Checklist de Verificación

- [ ] Sé testear componentes con diferentes props
- [ ] Puedo testear callbacks y verificar llamadas
- [ ] Entiendo cómo crear wrappers para Context
- [ ] Puedo testear listas y usar within
- [ ] Sé testear formularios y validaciones
- [ ] Uso queries accesibles (getByRole, getByLabelText)

---

## 🔗 Navegación

- ⬅️ [03 - React Testing Library](./03-react-testing-library.md)
- ➡️ [Ejercicios](../2-ejercicios/)
- 🏠 [Inicio Semana 14](../README.md)
