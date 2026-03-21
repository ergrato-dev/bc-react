# Ejercicio 05: Introducción a RTK Query

## 🎯 Objetivo

Conocer RTK Query como alternativa a `createAsyncThunk` para fetching de datos con caché automático y hooks generados.

## 📋 Descripción

En este ejercicio aprenderás:

- Crear un API slice con `createApi`
- Configurar `fetchBaseQuery` como base
- Definir endpoints `query` (GET) y `mutation` (POST/PUT/DELETE)
- Usar hooks generados automáticamente
- Invalidar caché con `tagTypes`

## ⏱️ Tiempo Estimado

35-45 minutos

---

## 📚 Conceptos Cubiertos

| Concepto         | Descripción                               |
| ---------------- | ----------------------------------------- |
| `createApi`      | Crea un API slice con endpoints y hooks   |
| `fetchBaseQuery` | Wrapper de fetch con configuración base   |
| `query`          | Endpoint para operaciones GET             |
| `mutation`       | Endpoint para operaciones POST/PUT/DELETE |
| `tagTypes`       | Sistema de invalidación de caché          |

---

## 🛠️ Instrucciones

### Preparación

```bash
cd starter
pnpm install
```

---

### Paso 1: Crear API Slice

Abre `starter/src/features/api/postsApi.ts` y descomenta la sección del **Paso 1**.

Crea el API con `createApi`:

```typescript
export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    // Endpoints aquí...
  }),
});
```

**Concepto clave**: `createApi` genera automáticamente reducers, acciones y hooks para cada endpoint.

---

### Paso 2: Definir Query Endpoint

Descomenta la sección del **Paso 2**.

Define un endpoint para obtener posts:

```typescript
endpoints: (builder) => ({
  getPosts: builder.query<Post[], void>({
    query: () => 'posts?_limit=10',
    providesTags: ['Post'],
  }),
}),
```

**Concepto clave**: `builder.query` es para operaciones de lectura. `providesTags` marca los datos para invalidación.

---

### Paso 3: Configurar Store

Abre `starter/src/app/store.ts` y descomenta para agregar el API:

```typescript
export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(postsApi.middleware),
});
```

---

### Paso 4: Usar Hook en Componente

Abre `starter/src/features/posts/PostList.tsx` y descomenta el código.

Usa el hook generado:

```typescript
const { data: posts, isLoading, error, refetch } = useGetPostsQuery();
```

**Concepto clave**: RTK Query genera hooks como `useGetPostsQuery` automáticamente.

---

### Paso 5: Agregar Mutation

Descomenta la sección del **Paso 5** en el API slice.

Define un endpoint para crear posts:

```typescript
addPost: builder.mutation<Post, Omit<Post, 'id'>>({
  query: (newPost) => ({
    url: 'posts',
    method: 'POST',
    body: newPost,
  }),
  invalidatesTags: ['Post'],
}),
```

**Concepto clave**: `invalidatesTags` causa que los queries con esos tags se refetch.

---

### Paso 6: Verificar

```bash
pnpm dev
```

**Checklist de verificación:**

- [ ] Los posts se cargan automáticamente
- [ ] Muestra loading mientras carga
- [ ] El botón refetch funciona
- [ ] Agregar post funciona (si implementaste mutation)
- [ ] Redux DevTools muestra las acciones del API

---

## ✅ Criterios de Éxito

| Criterio        | Verificación                           |
| --------------- | -------------------------------------- |
| API configurado | `createApi` con baseQuery y endpoints  |
| Query funcional | `useGetPostsQuery` carga datos         |
| Estados         | Loading, error, success manejados      |
| Hooks tipados   | TypeScript infiere tipos correctamente |

---

## 💡 Nota

RTK Query es más poderoso que `createAsyncThunk` para:

- Caché automático y configurar
- Deduplicación de requests
- Polling y websockets
- Optimistic updates

Este ejercicio es una introducción. Se profundiza en **Semana 10** con React Query (TanStack Query).

---

## 🔗 Navegación

← [Ejercicio 04: Entity Adapter](../ejercicio-04-entity-adapter/README.md) | [Proyecto Semanal →](../../3-proyecto/README.md)

---

[← Ejercicio Anterior](../ejercicio-04-entity-adapter/README.md) | [Volver al README →](../README.md)
