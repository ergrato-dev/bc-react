# 📖 Glosario - Semana 10: React Query

## A

### API (Application Programming Interface)

Interfaz que permite la comunicación entre diferentes sistemas. En React Query, típicamente nos referimos a APIs REST o GraphQL que proporcionan datos.

## B

### Background Refetching

Actualización de datos en segundo plano mientras se muestran datos del caché. El usuario ve datos inmediatamente mientras se verifica si hay actualizaciones.

## C

### Cache (Caché)

Almacenamiento temporal de datos para evitar solicitudes de red repetidas. React Query gestiona automáticamente el caché de todas las queries.

### Cache Time (gcTime)

Tiempo que los datos inactivos permanecen en caché antes de ser eliminados por el garbage collector. Por defecto: 5 minutos.

```typescript
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  gcTime: 1000 * 60 * 10, // 10 minutos
});
```

### Client State

Estado que solo existe en el cliente (UI state, form state). Se maneja con useState, useReducer, Zustand o Redux.

## D

### Data Fetching

El proceso de obtener datos de una fuente externa (API, base de datos). React Query automatiza y optimiza este proceso.

### Dependent Queries

Queries que dependen del resultado de otras queries. Se implementan con la opción `enabled`.

```typescript
const { data: user } = useQuery({ queryKey: ['user', id], queryFn: fetchUser });
const { data: posts } = useQuery({
  queryKey: ['posts', user?.id],
  queryFn: () => fetchPosts(user!.id),
  enabled: !!user, // Solo ejecuta cuando user existe
});
```

### DevTools

Herramienta de desarrollo de React Query que permite inspeccionar queries, caché, y estados en tiempo real.

## E

### Enabled

Opción de useQuery que controla si la query debe ejecutarse. Útil para queries condicionales.

### Error State

Estado que indica que una query falló. Se accede vía `error` e `isError` en el resultado del hook.

## F

### Fetch

Proceso de obtener datos del servidor. En React Query, la función `queryFn` define cómo hacer el fetch.

### Fresh Data

Datos que no han excedido su `staleTime` y se consideran actualizados.

## G

### Garbage Collection (GC)

Proceso automático que elimina datos inactivos del caché después de `gcTime`. Libera memoria de datos no utilizados.

### getNextPageParam

Función en useInfiniteQuery que determina el parámetro para cargar la siguiente página.

```typescript
useInfiniteQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  getNextPageParam: (lastPage) => lastPage.nextCursor,
});
```

## H

### Hydration

Proceso de restaurar el estado de queries desde datos serializados. Útil para SSR (Server-Side Rendering).

## I

### Infinite Query

Query especializada para cargar datos paginados de forma incremental (infinite scroll).

### Invalidation (Invalidación)

Proceso de marcar queries como desactualizadas, forzando un refetch. Crucial después de mutaciones.

```typescript
queryClient.invalidateQueries({ queryKey: ['todos'] });
```

### isFetching

Boolean que indica si hay una solicitud de red en progreso, incluyendo background refetches.

### isLoading

Boolean que indica el estado de carga inicial (primera vez que se cargan los datos).

### isPending

Estado de una mutación que indica que está en progreso.

### isStale

Boolean que indica si los datos han excedido su staleTime y se consideran desactualizados.

## M

### Mutation

Operación que modifica datos en el servidor (CREATE, UPDATE, DELETE). Se maneja con `useMutation`.

```typescript
const mutation = useMutation({
  mutationFn: createTodo,
  onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
});
```

### MutationFn

La función que ejecuta la mutación (llamada API). Recibe las variables y retorna una Promise.

## O

### Offline Support

Capacidad de React Query de manejar estados sin conexión y sincronizar cuando se recupera la conexión.

### onError

Callback que se ejecuta cuando una query o mutación falla.

### onMutate

Callback que se ejecuta antes de que la mutación comience. Usado para optimistic updates.

### onSettled

Callback que se ejecuta después de que una mutación termine (éxito o error).

### onSuccess

Callback que se ejecuta cuando una query o mutación tiene éxito.

### Optimistic Update

Patrón donde la UI se actualiza inmediatamente antes de confirmar con el servidor, mejorando la UX.

```typescript
useMutation({
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries({ queryKey: ['todos'] });
    const previous = queryClient.getQueryData(['todos']);
    queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);
    return { previous };
  },
  onError: (_, __, context) => {
    queryClient.setQueryData(['todos'], context.previous);
  },
});
```

## P

### Parallel Queries

Múltiples queries que se ejecutan simultáneamente, de forma independiente.

### Placeholder Data

Datos temporales mostrados mientras se cargan los datos reales. Útil para UX inmediata.

```typescript
useQuery({
  queryKey: ['user', id],
  queryFn: () => fetchUser(id),
  placeholderData: () =>
    queryClient.getQueryData(['users'])?.find((u) => u.id === id),
});
```

### Prefetching

Cargar datos anticipadamente antes de que el usuario los necesite.

```typescript
queryClient.prefetchQuery({
  queryKey: ['user', id],
  queryFn: () => fetchUser(id),
});
```

## Q

### Query

Solicitud de datos que se cachea y sincroniza automáticamente.

### Query Client

Instancia central que gestiona todas las queries, caché, y configuración global.

```typescript
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
```

### Query Function (queryFn)

Función que obtiene los datos. Debe retornar una Promise con los datos o lanzar un error.

### Query Key

Identificador único para una query. Puede ser string, array, o array con objetos.

```typescript
// Simple
queryKey: ['todos'];

// Con parámetros
queryKey: ['todos', { status: 'active', page: 1 }];

// Con ID
queryKey: ['todo', 5];
```

### QueryClientProvider

Componente que proporciona el QueryClient a toda la aplicación.

## R

### Refetch

Volver a ejecutar una query para obtener datos actualizados.

### Refetch on Window Focus

Comportamiento por defecto que refetch datos cuando el usuario vuelve a la pestaña.

### Retry

Reintentos automáticos cuando una query falla. Por defecto: 3 reintentos.

### Rollback

Restaurar el estado anterior cuando una mutación optimista falla.

## S

### Server State

Estado que existe en el servidor y se sincroniza con el cliente. React Query está diseñado para manejar server state.

### setQueryData

Método para actualizar manualmente el caché de una query.

```typescript
queryClient.setQueryData(['todos'], (old) => [...old, newTodo]);
```

### Stale Data

Datos que han excedido su staleTime y podrían estar desactualizados.

### Stale Time

Tiempo que los datos se consideran "frescos". Durante este tiempo, no hay refetch automático. Por defecto: 0.

```typescript
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  staleTime: 1000 * 60 * 5, // 5 minutos
});
```

### Stale While Revalidate (SWR)

Patrón donde se muestran datos del caché inmediatamente mientras se revalidan en segundo plano.

### Suspense

Integración con React Suspense para manejar estados de carga de forma declarativa.

## T

### TanStack Query

Nombre oficial de la librería (anteriormente React Query). TanStack incluye versiones para Vue, Solid, y Svelte.

## U

### useInfiniteQuery

Hook para queries con paginación infinita.

### useMutation

Hook para operaciones que modifican datos en el servidor.

### useQueries

Hook para ejecutar múltiples queries dinámicamente.

### useQuery

Hook principal para obtener y cachear datos.

### useQueryClient

Hook para acceder al QueryClient en componentes.

## W

### Window Focus Refetching

Comportamiento que refetch datos automáticamente cuando la ventana recupera el foco.

---

## Comparativa de Términos

| Término              | Descripción                         | Default |
| -------------------- | ----------------------------------- | ------- |
| staleTime            | Tiempo que datos son "frescos"      | 0       |
| gcTime               | Tiempo en caché después de inactivo | 5 min   |
| retry                | Reintentos en error                 | 3       |
| refetchOnWindowFocus | Refetch al volver a la pestaña      | true    |
| refetchOnMount       | Refetch al montar componente        | true    |
| refetchOnReconnect   | Refetch al reconectar red           | true    |
