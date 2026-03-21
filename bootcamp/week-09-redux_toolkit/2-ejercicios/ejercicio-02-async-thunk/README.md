# Ejercicio 02: Async Thunk para Fetch de Datos

## 🎯 Objetivo

Aprender a crear operaciones asíncronas con `createAsyncThunk` para obtener datos de una API y manejar estados de carga.

## 📋 Descripción

En este ejercicio aprenderás:

- Crear thunks asíncronos con `createAsyncThunk`
- Manejar estados de carga: `idle`, `loading`, `succeeded`, `failed`
- Usar `extraReducers` para responder a las acciones del thunk
- Tipar correctamente thunks y errores
- Conectar componentes con estados asíncronos

## ⏱️ Tiempo Estimado

40-50 minutos

---

## 📚 Conceptos Cubiertos

| Concepto                     | Descripción                                      |
| ---------------------------- | ------------------------------------------------ |
| `createAsyncThunk`           | Crea thunks que manejan promesas automáticamente |
| `pending/fulfilled/rejected` | Estados automáticos del ciclo de vida            |
| `extraReducers`              | Maneja acciones creadas fuera del slice          |
| `builder.addCase`            | Añade handlers para acciones específicas         |
| Estados de carga             | Patrón para UX en operaciones asíncronas         |

---

## 🛠️ Instrucciones

### Preparación

```bash
cd starter
pnpm install
```

---

### Paso 1: Definir Interfaces del Estado

Abre `starter/src/features/users/usersSlice.ts` y descomenta la sección del **Paso 1**.

Define las interfaces para tipar usuarios y el estado del slice:

```typescript
// Interface para un usuario de la API
interface User {
  id: number;
  name: string;
  email: string;
}

// Interface para el estado con status de carga
interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
```

**Concepto clave**: El patrón de status con union types permite manejar todos los estados posibles de una operación asíncrona de forma segura.

---

### Paso 2: Crear el Async Thunk

En el mismo archivo, descomenta la sección del **Paso 2**.

Crea el thunk con `createAsyncThunk`:

```typescript
// createAsyncThunk<ReturnType, ArgType>
export const fetchUsers = createAsyncThunk<User[], void>(
  'users/fetchUsers', // action type prefix
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  },
);
```

**Concepto clave**: El primer genérico es el tipo de retorno, el segundo es el tipo del argumento. `void` significa que no recibe argumentos.

---

### Paso 3: Configurar el Slice con extraReducers

Descomenta la sección del **Paso 3** para crear el slice.

Usa `extraReducers` con el builder pattern:

```typescript
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Error desconocido';
      });
  },
});
```

**Concepto clave**: `createAsyncThunk` genera automáticamente 3 action creators: `pending`, `fulfilled` y `rejected`.

---

### Paso 4: Configurar el Store

Abre `starter/src/app/store.ts` y descomenta para agregar el reducer:

```typescript
export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
```

---

### Paso 5: Crear el Componente UsersList

Abre `starter/src/features/users/UsersList.tsx` y descomenta cada sección.

El componente debe:

1. Obtener estado con `useAppSelector`
2. Disparar `fetchUsers` al montar
3. Renderizar según el status

```typescript
const UsersList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, status, error } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  // Renderizado condicional según status...
};
```

---

### Paso 6: Verificar

```bash
pnpm dev
```

**Checklist de verificación:**

- [ ] Al cargar, muestra "Cargando usuarios..."
- [ ] Después muestra la lista de usuarios
- [ ] Redux DevTools muestra: `users/fetchUsers/pending` → `fulfilled`
- [ ] Si desconectas internet, muestra error

---

## ✅ Criterios de Éxito

| Criterio          | Verificación                        |
| ----------------- | ----------------------------------- |
| Thunk tipado      | `createAsyncThunk<User[], void>`    |
| Estados manejados | pending, fulfilled, rejected        |
| UI reactiva       | Muestra loading, datos, y errores   |
| DevTools          | Las acciones aparecen correctamente |

---

## 🔗 Navegación

← [Ejercicio 01: Primer Slice](../ejercicio-01-primer-slice/README.md) | [Ejercicio 03: Selectores →](../ejercicio-03-selectores/README.md)

- [ ] El botón de reintentar funciona

---

## 📁 Estructura de Archivos

```
starter/
├── src/
│   ├── app/
│   │   ├── store.ts
│   │   └── hooks.ts
│   ├── features/
│   │   └── users/
│   │       ├── usersSlice.ts    # ← Paso 2
│   │       └── UsersList.tsx    # ← Paso 3
│   └── App.tsx
└── package.json
```

---

[← Ejercicio Anterior](../ejercicio-01-primer-slice/README.md) | [Siguiente Ejercicio →](../ejercicio-03-selectores/README.md)
