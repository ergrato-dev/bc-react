# 📖 Glosario - Semana 09: Redux Toolkit

Términos técnicos ordenados alfabéticamente relacionados con Redux Toolkit y TypeScript.

---

## A

### Action

**Definición**: Objeto plano que describe un evento que ocurrió en la aplicación.  
**Estructura**: `{ type: string, payload?: any }`  
**Ejemplo**:

```typescript
const action = { type: 'counter/increment', payload: 5 };
```

### Action Creator

**Definición**: Función que crea y retorna un action.  
**En RTK**: Generado automáticamente por `createSlice`.  
**Ejemplo**:

```typescript
// RTK genera esto automáticamente
const increment = (amount: number) => ({
  type: 'counter/increment',
  payload: amount,
});
```

---

## B

### BaseQuery

**Definición**: Función base que RTK Query usa para hacer requests HTTP.  
**Uso común**: `fetchBaseQuery` para REST APIs.  
**Ejemplo**:

```typescript
baseQuery: fetchBaseQuery({ baseUrl: '/api' });
```

### Builder Pattern

**Definición**: Patrón usado en `createSlice` y `createApi` para definir reducers y endpoints de forma fluida.

---

## C

### Cache (RTK Query)

**Definición**: Sistema automático que almacena respuestas de API para evitar requests duplicadas.  
**Características**: Configurable, invalidable, con tiempo de vida.

### configureStore

**Definición**: Función de RTK que crea un store Redux con configuración por defecto optimizada.  
**Incluye**: Redux DevTools, redux-thunk, checks de desarrollo.  
**Ejemplo**:

```typescript
export const store = configureStore({
  reducer: { counter: counterReducer },
});
```

### createApi

**Definición**: Función de RTK Query para definir un API slice completo.  
**Genera**: Reducers, middleware, y hooks automáticamente.  
**Ejemplo**:

```typescript
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({ ... })
});
```

### createAsyncThunk

**Definición**: Función que genera thunks para operaciones asíncronas.  
**Genera**: Actions para pending, fulfilled, y rejected.  
**Ejemplo**:

```typescript
const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await fetch('/api/users');
  return response.json();
});
```

### createEntityAdapter

**Definición**: Genera funciones para manejar estado normalizado (CRUD).  
**Proporciona**: Selectores y reducers para entidades.  
**Ejemplo**:

```typescript
const usersAdapter = createEntityAdapter<User>();
```

### createSelector

**Definición**: Función de Reselect para crear selectores memoizados.  
**Beneficio**: Evita recálculos innecesarios.  
**Ejemplo**:

```typescript
const selectCompletedTodos = createSelector([selectTodos], (todos) =>
  todos.filter((t) => t.completed),
);
```

### createSlice

**Definición**: Función de RTK que genera reducers, actions, y action types.  
**Simplifica**: Definición de lógica de estado en un solo lugar.  
**Ejemplo**:

```typescript
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
  },
});
```

---

## D

### Dispatch

**Definición**: Función para enviar actions al store Redux.  
**Tipo en TypeScript**: `AppDispatch`  
**Ejemplo**:

```typescript
dispatch(increment(5));
```

---

## E

### Endpoint (RTK Query)

**Definición**: Definición de una operación de API (query o mutation).  
**Tipos**: `builder.query` para GET, `builder.mutation` para POST/PUT/DELETE.

### Entity

**Definición**: Objeto de datos normalizado con un ID único.  
**Estructura normalizada**: `{ ids: [], entities: {} }`

### EntityState

**Definición**: Interface de TypeScript para estado normalizado.  
**Propiedades**: `ids: EntityId[]`, `entities: Dictionary<T>`

### extraReducers

**Definición**: Campo en `createSlice` para manejar actions externas.  
**Uso común**: Responder a async thunks o actions de otros slices.  
**Ejemplo**:

```typescript
extraReducers: (builder) => {
  builder.addCase(fetchUsers.fulfilled, (state, action) => { ... });
}
```

---

## F

### fetchBaseQuery

**Definición**: Wrapper de fetch optimizado para RTK Query.  
**Incluye**: Configuración de headers, manejo de errores, prepareHeaders.

### Fulfilled

**Definición**: Estado de un async thunk cuando la promesa se resuelve exitosamente.  
**Action generada**: `[thunkName]/fulfilled`

---

## G

### getSelectors

**Definición**: Método de entityAdapter que genera selectores predefinidos.  
**Selectores**: selectAll, selectById, selectIds, selectEntities, selectTotal.

---

## H

### Hook (RTK Query)

**Definición**: Hook React generado automáticamente por createApi.  
**Ejemplos**: `useGetUsersQuery`, `useAddUserMutation`

---

## I

### Immer

**Definición**: Biblioteca que permite escribir código "mutativo" que produce actualizaciones inmutables.  
**Uso en RTK**: Integrado automáticamente en createSlice.

### Immutability

**Definición**: Principio de no modificar datos existentes, sino crear copias.  
**En RTK**: Immer permite escribir como si mutaras, pero mantiene inmutabilidad.

### Invalidation (RTK Query)

**Definición**: Proceso de marcar datos en caché como desactualizados.  
**Tags**: Sistema de etiquetas para invalidar queries relacionadas.

---

## M

### Memoization

**Definición**: Técnica de cachear resultados de funciones costosas.  
**En Redux**: createSelector implementa memoización automática.

### Middleware

**Definición**: Función que intercepta actions antes de llegar al reducer.  
**En RTK**: redux-thunk incluido por defecto.

### Mutation (RTK Query)

**Definición**: Endpoint para operaciones que modifican datos (POST, PUT, DELETE).  
**Hook generado**: `use[Name]Mutation`

---

## N

### Normalized State

**Definición**: Estructura de datos plana que evita duplicación.  
**Forma**: `{ ids: [1, 2, 3], entities: { 1: {...}, 2: {...} } }`

---

## P

### Payload

**Definición**: Datos adjuntos a un action.  
**Convención**: Campo `payload` en el objeto action.

### PayloadAction

**Definición**: Tipo de TypeScript para actions con payload.  
**Uso**:

```typescript
increment: (state, action: PayloadAction<number>) => { ... }
```

### Pending

**Definición**: Estado de un async thunk mientras la promesa está en progreso.  
**Action generada**: `[thunkName]/pending`

### Polling (RTK Query)

**Definición**: Re-fetch automático de datos a intervalos regulares.  
**Configuración**: `pollingInterval` en la query.

### Provider

**Definición**: Componente React que hace disponible el store a toda la app.  
**Uso**:

```jsx
<Provider store={store}>
  <App />
</Provider>
```

---

## Q

### Query (RTK Query)

**Definición**: Endpoint para operaciones de lectura (GET).  
**Hook generado**: `use[Name]Query`

---

## R

### Reducer

**Definición**: Función pura que recibe estado y action, retorna nuevo estado.  
**Firma**: `(state, action) => newState`

### Refetch

**Definición**: Volver a ejecutar una query para obtener datos frescos.  
**Método**: Disponible en el resultado del hook de query.

### Rejected

**Definición**: Estado de un async thunk cuando la promesa falla.  
**Action generada**: `[thunkName]/rejected`

### RootState

**Definición**: Tipo TypeScript que representa el estado completo del store.  
**Uso**: `const state: RootState = store.getState()`

### RTK (Redux Toolkit)

**Definición**: Paquete oficial y recomendado para usar Redux.  
**Incluye**: configureStore, createSlice, createAsyncThunk, RTK Query.

---

## S

### Selector

**Definición**: Función que extrae datos específicos del estado.  
**Ejemplo**: `const selectCount = (state: RootState) => state.counter.value`

### Slice

**Definición**: Porción del estado Redux junto con sus reducers y actions.  
**Analogía**: Una "rebanada" del estado global.

### Store

**Definición**: Contenedor centralizado del estado de la aplicación.  
**Creación**: `const store = configureStore({ reducer: { ... } })`

---

## T

### Tag (RTK Query)

**Definición**: Etiqueta para relacionar queries con mutations.  
**Uso**: `providesTags` en queries, `invalidatesTags` en mutations.

### Thunk

**Definición**: Función que puede contener lógica async y despachar múltiples actions.  
**En RTK**: `createAsyncThunk` simplifica la creación de thunks.

---

## U

### useDispatch

**Definición**: Hook de react-redux para obtener la función dispatch.  
**Tipado**: `useAppDispatch = useDispatch.withTypes<AppDispatch>()`

### useSelector

**Definición**: Hook de react-redux para leer datos del estado.  
**Tipado**: `useAppSelector = useSelector.withTypes<RootState>()`

---

_Glosario actualizado para Redux Toolkit 2.x y React 18+_
