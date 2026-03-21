# 📖 Slices y Reducers con Redux Toolkit

## 🎯 Objetivos de Aprendizaje

- Dominar `createSlice` para definir estado, reducers y acciones
- Tipar correctamente con `PayloadAction`
- Comprender cómo Immer permite "mutaciones" seguras
- Crear múltiples slices organizados por feature
- Manejar acciones de otros slices con `extraReducers`

---

## Visualización de Conceptos

![Estructura de un Slice](../0-assets/03-slice-structure.svg)

---

## 1. Anatomía de createSlice

### 1.1 Estructura Básica

```typescript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// QUÉ: createSlice es la forma estándar de definir lógica Redux
// PARA: Generar automáticamente actions y reducers
// IMPACTO: Reduce boilerplate en ~80% comparado con Redux vanilla

const slice = createSlice({
  name: 'nombreDelSlice', // Prefijo para tipos de acción
  initialState: {}, // Estado inicial
  reducers: {}, // Reducers síncronos
  extraReducers: (builder) => {}, // Responder a acciones externas
});
```

### 1.2 Ejemplo Completo: Slice de Tareas

```typescript
// src/features/todos/todosSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ============================================
// TIPOS
// ============================================

// QUÉ: Interface para una tarea individual
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

// QUÉ: Interface del estado del slice
interface TodosState {
  items: Todo[];
  filter: 'all' | 'active' | 'completed';
  searchQuery: string;
}

// ============================================
// ESTADO INICIAL
// ============================================

const initialState: TodosState = {
  items: [],
  filter: 'all',
  searchQuery: '',
};

// ============================================
// SLICE
// ============================================

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // REDUCER: Agregar tarea
    // Acción: { type: 'todos/addTodo', payload: { id, text, ... } }
    addTodo: (
      state,
      action: PayloadAction<Omit<Todo, 'completed' | 'createdAt'>>,
    ) => {
      state.items.push({
        ...action.payload,
        completed: false,
        createdAt: new Date().toISOString(),
      });
    },

    // REDUCER: Eliminar tarea
    // Acción: { type: 'todos/removeTodo', payload: 'id-123' }
    removeTodo: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    // REDUCER: Toggle completado
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    // REDUCER: Editar texto
    editTodo: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const todo = state.items.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },

    // REDUCER: Cambiar filtro
    setFilter: (state, action: PayloadAction<TodosState['filter']>) => {
      state.filter = action.payload;
    },

    // REDUCER: Buscar
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },

    // REDUCER: Limpiar completadas
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
    },

    // REDUCER: Marcar todas como completadas
    toggleAll: (state) => {
      const allCompleted = state.items.every((todo) => todo.completed);
      state.items.forEach((todo) => {
        todo.completed = !allCompleted;
      });
    },
  },
});

// Exportar actions
export const {
  addTodo,
  removeTodo,
  toggleTodo,
  editTodo,
  setFilter,
  setSearchQuery,
  clearCompleted,
  toggleAll,
} = todosSlice.actions;

// Exportar reducer
export default todosSlice.reducer;
```

---

## 2. PayloadAction en Profundidad

### 2.1 Tipos de PayloadAction

```typescript
import { PayloadAction } from '@reduxjs/toolkit';

// ============================================
// SIN PAYLOAD - La acción no necesita datos
// ============================================

reducers: {
  increment: (state) => {
    state.value += 1;
  },
  // Acción: { type: 'counter/increment' }
}

// ============================================
// PAYLOAD PRIMITIVO
// ============================================

reducers: {
  incrementByAmount: (state, action: PayloadAction<number>) => {
    state.value += action.payload;
  },
  // Acción: { type: 'counter/incrementByAmount', payload: 5 }

  setName: (state, action: PayloadAction<string>) => {
    state.name = action.payload;
  },
  // Acción: { type: 'user/setName', payload: 'Juan' }
}

// ============================================
// PAYLOAD OBJETO
// ============================================

reducers: {
  updateUser: (state, action: PayloadAction<{ name: string; email: string }>) => {
    state.name = action.payload.name;
    state.email = action.payload.email;
  },
  // Acción: { type: 'user/updateUser', payload: { name: 'Ana', email: 'ana@mail.com' } }
}

// ============================================
// PAYLOAD CON TIPOS COMPLEJOS
// ============================================

interface UpdateTodoPayload {
  id: string;
  updates: Partial<Omit<Todo, 'id'>>;
}

reducers: {
  updateTodo: (state, action: PayloadAction<UpdateTodoPayload>) => {
    const { id, updates } = action.payload;
    const todo = state.items.find(t => t.id === id);
    if (todo) {
      Object.assign(todo, updates);
    }
  },
}
```

### 2.2 Prepare Callback para Payloads Personalizados

```typescript
import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

interface TodosState {
  items: Todo[];
}

const initialState: TodosState = { items: [] };

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // QUÉ: prepare callback permite transformar argumentos
    // PARA: Generar IDs, timestamps, o transformar datos
    // IMPACTO: Lógica de preparación separada del reducer
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.items.push(action.payload);
      },
      // prepare recibe los argumentos y retorna { payload, meta?, error? }
      prepare: (text: string) => ({
        payload: {
          id: nanoid(), // RTK incluye nanoid para IDs únicos
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      }),
    },
  },
});

// USO:
// dispatch(addTodo('Aprender Redux'))
// La acción resultante tiene payload con id y createdAt generados
```

---

## 3. Immer y las "Mutaciones"

### 3.1 ¿Cómo Funciona Immer?

```typescript
// Redux requiere inmutabilidad - el estado nunca debe mutarse directamente

// ❌ SIN IMMER (Redux vanilla) - Muy verboso
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'todos/addTodo':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'todos/toggleTodo':
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };
    default:
      return state;
  }
};

// ✅ CON IMMER (Redux Toolkit) - Simple y legible
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Parece mutación pero Immer lo hace inmutable
      state.items.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.items.find((t) => t.id === action.payload);
      if (todo) {
        // Immer detecta el cambio y crea nuevo estado
        todo.completed = !todo.completed;
      }
    },
  },
});
```

### 3.2 Reglas de Immer

```typescript
// ============================================
// REGLA 1: Mutar O retornar, nunca ambos
// ============================================

// ✅ CORRECTO - Solo mutación
reducers: {
  increment: (state) => {
    state.value += 1;
    // No return
  },
}

// ✅ CORRECTO - Solo retorno (para reemplazar estado completo)
reducers: {
  reset: () => {
    return initialState;
    // O simplemente:
    // return { value: 0 };
  },
}

// ❌ INCORRECTO - Mutar Y retornar
reducers: {
  broken: (state) => {
    state.value += 1;
    return state; // ERROR: No hagas esto
  },
}

// ============================================
// REGLA 2: Usa métodos mutantes normales
// ============================================

// ✅ Arrays
state.items.push(newItem);
state.items.splice(index, 1);
state.items[0] = newValue;
state.items.sort((a, b) => a.order - b.order);

// ✅ Objetos
state.user.name = 'Nuevo nombre';
delete state.user.tempField;
Object.assign(state.user, updates);

// ============================================
// REGLA 3: Cuidado con reasignaciones
// ============================================

// ❌ Esto NO funciona (reasigna el parámetro, no muta)
reducers: {
  broken: (state, action) => {
    state = action.payload; // Solo reasigna variable local
  },
}

// ✅ Esto SÍ funciona
reducers: {
  replaceState: (state, action) => {
    return action.payload; // Retorna nuevo estado
  },
  // O mutar propiedades individualmente
  updateAll: (state, action) => {
    state.prop1 = action.payload.prop1;
    state.prop2 = action.payload.prop2;
  },
}
```

### 3.3 Operaciones Comunes con Immer

```typescript
const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], selectedId: null },
  reducers: {
    // AGREGAR al final
    add: (state, action) => {
      state.items.push(action.payload);
    },

    // AGREGAR al inicio
    prepend: (state, action) => {
      state.items.unshift(action.payload);
    },

    // INSERTAR en posición específica
    insertAt: (state, action: PayloadAction<{ item: Todo; index: number }>) => {
      state.items.splice(action.payload.index, 0, action.payload.item);
    },

    // ELIMINAR por índice
    removeAt: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload, 1);
    },

    // ELIMINAR por ID
    removeById: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    // ACTUALIZAR elemento
    update: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Todo> }>,
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        Object.assign(item, action.payload.changes);
      }
    },

    // REORDENAR
    move: (state, action: PayloadAction<{ from: number; to: number }>) => {
      const { from, to } = action.payload;
      const [item] = state.items.splice(from, 1);
      state.items.splice(to, 0, item);
    },

    // FILTRAR (reemplaza array)
    filter: (state, action: PayloadAction<(item: Todo) => boolean>) => {
      state.items = state.items.filter(action.payload);
    },

    // ORDENAR
    sort: (state, action: PayloadAction<'asc' | 'desc'>) => {
      state.items.sort((a, b) => {
        const comparison = a.text.localeCompare(b.text);
        return action.payload === 'asc' ? comparison : -comparison;
      });
    },
  },
});
```

---

## 4. Múltiples Slices por Feature

### 4.1 Estructura de Carpetas

```
src/
├── features/
│   ├── auth/
│   │   ├── authSlice.ts
│   │   ├── authSelectors.ts
│   │   └── Auth.tsx
│   ├── products/
│   │   ├── productsSlice.ts
│   │   ├── productsSelectors.ts
│   │   └── ProductList.tsx
│   └── cart/
│       ├── cartSlice.ts
│       ├── cartSelectors.ts
│       └── Cart.tsx
└── app/
    └── store.ts
```

### 4.2 Ejemplo: Slice de Autenticación

```typescript
// src/features/auth/authSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      state.status = 'succeeded';
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        Object.assign(state.user, action.payload);
      }
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, updateProfile } =
  authSlice.actions;
export default authSlice.reducer;
```

### 4.3 Combinar Slices en el Store

```typescript
// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';
import todosReducer from '../features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    todos: todosReducer,
  },
});

// El tipo RootState ahora incluye todos los slices
export type RootState = ReturnType<typeof store.getState>;
// RootState = {
//   auth: AuthState;
//   products: ProductsState;
//   cart: CartState;
//   todos: TodosState;
// }

export type AppDispatch = typeof store.dispatch;
```

---

## 5. extraReducers: Responder a Acciones Externas

### 5.1 ¿Cuándo Usar extraReducers?

```typescript
// extraReducers permite que un slice responda a acciones:
// 1. De otros slices
// 2. De thunks async (fulfilled, pending, rejected)
// 3. De acciones manuales

// REGLA: reducers solo responde a sus propias acciones
//        extraReducers responde a acciones externas
```

### 5.2 Responder a Acciones de Otros Slices

```typescript
// features/notifications/notificationsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Importar acciones de otros slices
import { loginSuccess, logout } from '../auth/authSlice';
import { addTodo, removeTodo } from '../todos/todosSlice';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  timestamp: string;
}

interface NotificationsState {
  items: Notification[];
}

const initialState: NotificationsState = {
  items: [],
};

// Helper para crear notificación
const createNotification = (
  message: string,
  type: Notification['type'],
): Notification => ({
  id: Date.now().toString(),
  message,
  type,
  timestamp: new Date().toISOString(),
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (
      state,
      action: PayloadAction<Omit<Notification, 'id' | 'timestamp'>>,
    ) => {
      state.items.push(
        createNotification(action.payload.message, action.payload.type),
      );
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((n) => n.id !== action.payload);
    },
    clearAll: (state) => {
      state.items = [];
    },
  },

  // QUÉ: extraReducers responde a acciones de otros slices
  // PARA: Crear notificaciones automáticas basadas en eventos
  extraReducers: (builder) => {
    builder
      // Cuando el usuario inicia sesión
      .addCase(loginSuccess, (state, action) => {
        state.items.push(
          createNotification(
            `Bienvenido, ${action.payload.user.name}!`,
            'success',
          ),
        );
      })
      // Cuando el usuario cierra sesión
      .addCase(logout, (state) => {
        state.items.push(createNotification('Sesión cerrada', 'info'));
      })
      // Cuando se agrega una tarea
      .addCase(addTodo, (state, action) => {
        state.items.push(
          createNotification(
            `Tarea "${action.payload.text}" agregada`,
            'success',
          ),
        );
      })
      // Cuando se elimina una tarea
      .addCase(removeTodo, (state) => {
        state.items.push(createNotification('Tarea eliminada', 'info'));
      });
  },
});

export const { addNotification, removeNotification, clearAll } =
  notificationsSlice.actions;
export default notificationsSlice.reducer;
```

### 5.3 Sintaxis del Builder

```typescript
extraReducers: (builder) => {
  builder
    // addCase: Responder a una acción específica
    .addCase(someAction, (state, action) => {
      // Manejar la acción
    })

    // addMatcher: Responder a acciones que cumplan condición
    .addMatcher(
      (action) => action.type.endsWith('/pending'),
      (state) => {
        state.loading = true;
      },
    )

    // addDefaultCase: Manejar cualquier otra acción
    .addDefaultCase((state, action) => {
      // Manejar acciones no capturadas (opcional)
    });
};
```

---

## 6. Selectores Básicos

### 6.1 Selectores Inline vs Exportados

```typescript
// ============================================
// SELECTORES INLINE (en componentes)
// ============================================

// Uso simple y directo
const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  return <div>{count}</div>;
};

// ============================================
// SELECTORES EXPORTADOS (junto al slice)
// ============================================

// src/features/todos/todosSlice.ts

// ... slice definition ...

// Selectores básicos exportados
export const selectTodos = (state: RootState) => state.todos.items;
export const selectFilter = (state: RootState) => state.todos.filter;
export const selectSearchQuery = (state: RootState) => state.todos.searchQuery;

// Selectores derivados
export const selectCompletedTodos = (state: RootState) =>
  state.todos.items.filter(todo => todo.completed);

export const selectActiveTodos = (state: RootState) =>
  state.todos.items.filter(todo => !todo.completed);

export const selectTodosCount = (state: RootState) => ({
  total: state.todos.items.length,
  completed: state.todos.items.filter(t => t.completed).length,
  active: state.todos.items.filter(t => !t.completed).length,
});

// Uso en componentes
import { selectTodos, selectTodosCount } from './todosSlice';

const TodoList = () => {
  const todos = useAppSelector(selectTodos);
  const { total, completed } = useAppSelector(selectTodosCount);

  return (
    <div>
      <p>{completed}/{total} completadas</p>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};
```

---

## 7. Ejemplo Integrador: Sistema de Carrito

```typescript
// src/features/cart/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

// Tipos
interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

const initialState: CartState = {
  items: [],
  isOpen: false,
};

// Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<CartItem>) => {
        const existing = state.items.find(
          (item) => item.productId === action.payload.productId,
        );
        if (existing) {
          existing.quantity += action.payload.quantity;
        } else {
          state.items.push(action.payload);
        }
      },
      prepare: (product: Omit<CartItem, 'quantity'>, quantity: number = 1) => ({
        payload: { ...product, quantity },
      }),
    },

    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item.productId === action.payload,
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>,
    ) => {
      const item = state.items.find(
        (item) => item.productId === action.payload.productId,
      );
      if (item) {
        if (action.payload.quantity <= 0) {
          const index = state.items.indexOf(item);
          state.items.splice(index, 1);
        } else {
          item.quantity = action.payload.quantity;
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },

    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    openCart: (state) => {
      state.isOpen = true;
    },

    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

// Actions
export const {
  addItem,
  removeItem,
  updateQuantity,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = cartSlice.actions;

// Selectores
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartIsOpen = (state: RootState) => state.cart.isOpen;

export const selectCartItemCount = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

export const selectCartItemById = (productId: string) => (state: RootState) =>
  state.cart.items.find((item) => item.productId === productId);

// Reducer
export default cartSlice.reducer;
```

---

## 📝 Resumen

| Concepto           | Descripción                              |
| ------------------ | ---------------------------------------- |
| `createSlice`      | Genera actions y reducer automáticamente |
| `PayloadAction<T>` | Tipa el payload de las acciones          |
| `prepare`          | Transforma argumentos antes del reducer  |
| Immer              | Permite sintaxis de "mutación" segura    |
| `extraReducers`    | Responde a acciones externas             |
| Selectores         | Funciones para extraer datos del estado  |

---

## ✅ Checklist de Verificación

- [ ] Entiendo la estructura de `createSlice`
- [ ] Puedo tipar payloads con `PayloadAction`
- [ ] Comprendo cómo Immer convierte "mutaciones" en inmutabilidad
- [ ] Sé cuándo usar `reducers` vs `extraReducers`
- [ ] Puedo crear selectores básicos y derivados

---

[← Anterior: Configuración](02-configuracion-redux-toolkit.md) | [Siguiente: Async Thunks →](04-async-thunks.md)
