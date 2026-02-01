# 📖 Patrones Avanzados

## 🎯 Objetivos de Aprendizaje

- Implementar Optimistic Updates para mejor UX
- Dominar Infinite Queries para scroll infinito
- Usar Parallel y Dependent Queries eficientemente
- Configurar Suspense con React Query
- Aplicar patrones de error handling avanzados

---

## Visualización de Conceptos

![Patrones Avanzados](../0-assets/05-advanced-patterns.svg)

---

## 1. Optimistic Updates

### 1.1 ¿Qué son los Optimistic Updates?

```typescript
// Optimistic Update = Actualizar UI ANTES de confirmar con el servidor
// Asume que la operación será exitosa
// Si falla → rollback al estado anterior

// Sin Optimistic Update:
// 1. Usuario hace click
// 2. Loading... (esperar servidor)
// 3. Actualizar UI

// Con Optimistic Update:
// 1. Usuario hace click
// 2. Actualizar UI inmediatamente ✨
// 3. Enviar al servidor (en background)
// 4. Si error → rollback
```

### 1.2 Implementación Completa

```typescript
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (todoId: number) => toggleTodoApi(todoId),

    // PASO 1: Antes de la mutation
    onMutate: async (todoId) => {
      // Cancelar queries en progreso para evitar race conditions
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      // Guardar snapshot del estado actual
      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Optimistic update: actualizar caché inmediatamente
      queryClient.setQueryData<Todo[]>(['todos'], (old) => {
        if (!old) return old;
        return old.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
        );
      });

      // Retornar contexto con snapshot para posible rollback
      return { previousTodos };
    },

    // PASO 2: Si hay error, hacer rollback
    onError: (err, todoId, context) => {
      // Restaurar estado anterior
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
      // Mostrar error al usuario
      toast.error('Error al actualizar tarea');
    },

    // PASO 3: Siempre sincronizar con servidor
    onSettled: () => {
      // Invalidar para obtener datos frescos del servidor
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
```

### 1.3 Optimistic Create

```typescript
const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodoApi,

    onMutate: async (newTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Crear un ID temporal
      const optimisticTodo: Todo = {
        id: Date.now(), // ID temporal
        ...newTodo,
        completed: false,
      };

      queryClient.setQueryData<Todo[]>(['todos'], (old) => {
        return old ? [...old, optimisticTodo] : [optimisticTodo];
      });

      return { previousTodos, optimisticTodo };
    },

    onError: (err, newTodo, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
    },

    onSuccess: (data, variables, context) => {
      // Reemplazar el item optimista con el real del servidor
      queryClient.setQueryData<Todo[]>(['todos'], (old) => {
        if (!old) return [data];
        return old.map((todo) =>
          todo.id === context?.optimisticTodo.id ? data : todo,
        );
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
```

### 1.4 Optimistic Delete

```typescript
const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodoApi,

    onMutate: async (todoId) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });

      const previousTodos = queryClient.getQueryData<Todo[]>(['todos']);

      // Remover inmediatamente de la UI
      queryClient.setQueryData<Todo[]>(['todos'], (old) => {
        return old?.filter((todo) => todo.id !== todoId);
      });

      return { previousTodos };
    },

    onError: (err, todoId, context) => {
      // Restaurar el item eliminado
      if (context?.previousTodos) {
        queryClient.setQueryData(['todos'], context.previousTodos);
      }
      toast.error('Error al eliminar tarea');
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
```

---

## 2. Infinite Queries

### 2.1 useInfiniteQuery Básico

```typescript
import { useInfiniteQuery } from '@tanstack/react-query';

interface Page<T> {
  data: T[];
  nextCursor: number | null;
  hasMore: boolean;
}

const fetchPosts = async ({ pageParam = 0 }): Promise<Page<Post>> => {
  const response = await fetch(`/api/posts?cursor=${pageParam}&limit=10`);
  return response.json();
};

const useInfinitePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts', 'infinite'],
    queryFn: fetchPosts,
    initialPageParam: 0,

    // Determinar el parámetro para la siguiente página
    getNextPageParam: (lastPage) => {
      return lastPage.hasMore ? lastPage.nextCursor : undefined;
    },

    // Opcional: para paginación bidireccional
    getPreviousPageParam: (firstPage) => {
      return firstPage.previousCursor ?? undefined;
    },
  });
};
```

### 2.2 Componente con Scroll Infinito

```tsx
const InfinitePostList: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfinitePosts();

  // Observador para detectar cuando llegar al final
  const observerRef = useRef<IntersectionObserver>();
  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoading) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [isLoading, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <Spinner />;
  if (isError) return <Error message={error.message} />;

  // data.pages es un array de páginas
  const allPosts = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div className="post-list">
      {allPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}

      {/* Elemento que dispara cargar más */}
      <div
        ref={loadMoreRef}
        className="load-more-trigger">
        {isFetchingNextPage && <Spinner size="small" />}
        {!hasNextPage && <p>No hay más posts</p>}
      </div>
    </div>
  );
};
```

### 2.3 Botón "Cargar Más"

```tsx
const PostListWithButton: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePosts();

  const allPosts = data?.pages.flatMap((page) => page.data) ?? [];

  return (
    <div>
      {allPosts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}

      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Cargando...' : 'Cargar más'}
        </button>
      )}
    </div>
  );
};
```

### 2.4 Paginación Tradicional

```typescript
// Para paginación con números de página (no cursor)
const usePaginatedPosts = (page: number) => {
  return useQuery({
    queryKey: ['posts', 'paginated', page],
    queryFn: () => fetchPosts(page),
    placeholderData: keepPreviousData, // Mantener datos anteriores mientras carga
  });
};

// Componente
const PaginatedList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isPlaceholderData, isFetching } = usePaginatedPosts(page);

  return (
    <div>
      {/* Indicador de carga sin perder datos */}
      {isFetching && <div className="loading-overlay" />}

      {data?.posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      <div className="pagination">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Anterior
        </button>

        <span>Página {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={isPlaceholderData || !data?.hasMore}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};
```

---

## 3. Parallel & Dependent Queries

### 3.1 Queries Paralelas con useQueries

```typescript
import { useQueries } from '@tanstack/react-query';

const Dashboard: React.FC<{ userId: number }> = ({ userId }) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ['user', userId],
        queryFn: () => fetchUser(userId),
      },
      {
        queryKey: ['user', userId, 'posts'],
        queryFn: () => fetchUserPosts(userId),
      },
      {
        queryKey: ['user', userId, 'notifications'],
        queryFn: () => fetchNotifications(userId),
      },
    ],
  });

  const [userQuery, postsQuery, notificationsQuery] = results;
  const isLoading = results.some((r) => r.isLoading);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <UserProfile user={userQuery.data} />
      <PostList posts={postsQuery.data} />
      <NotificationList notifications={notificationsQuery.data} />
    </div>
  );
};
```

### 3.2 Queries Dinámicas Paralelas

```typescript
// Cuando tienes un array de IDs
const useMultipleUsers = (userIds: number[]) => {
  return useQueries({
    queries: userIds.map((id) => ({
      queryKey: ['user', id],
      queryFn: () => fetchUser(id),
      staleTime: 1000 * 60 * 5,
    })),
    combine: (results) => {
      return {
        data: results.map((r) => r.data).filter(Boolean),
        isLoading: results.some((r) => r.isLoading),
        isError: results.some((r) => r.isError),
      };
    },
  });
};

// Uso
const TeamMembers: React.FC<{ memberIds: number[] }> = ({ memberIds }) => {
  const { data: members, isLoading } = useMultipleUsers(memberIds);

  if (isLoading) return <Spinner />;

  return (
    <div>
      {members?.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
};
```

### 3.3 Queries Dependientes

```typescript
// Query que depende del resultado de otra
const UserPosts: React.FC = () => {
  // Primera query: obtener usuario actual
  const { data: user } = useQuery({
    queryKey: ['currentUser'],
    queryFn: getCurrentUser,
  });

  // Segunda query: depende del usuario
  const { data: posts } = useQuery({
    queryKey: ['posts', user?.id],
    queryFn: () => fetchUserPosts(user!.id),
    // Solo ejecutar si tenemos el usuario
    enabled: !!user?.id,
  });

  // Tercera query: depende de los posts
  const { data: comments } = useQuery({
    queryKey: ['comments', posts?.map((p) => p.id)],
    queryFn: () => fetchCommentsForPosts(posts!.map((p) => p.id)),
    enabled: !!posts?.length,
  });

  // ...
};
```

---

## 4. Suspense Mode

### 4.1 Configuración de Suspense

```typescript
// React Query con Suspense
import { useSuspenseQuery } from '@tanstack/react-query';

// El hook lanza una Promise que Suspense captura
const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
  // useSuspenseQuery NUNCA retorna isLoading
  // Suspense maneja el loading
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });

  // data siempre está definido aquí
  return <div>{user.name}</div>;
};

// Componente padre con Suspense boundary
const App: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <UserProfile userId={1} />
    </Suspense>
  );
};
```

### 4.2 Error Boundaries con Suspense

```tsx
import { ErrorBoundary } from 'react-error-boundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <p>Error: {error.message}</p>
          <button onClick={resetErrorBoundary}>Reintentar</button>
        </div>
      )}
      onReset={() => {
        // Resetear queries al reintentar
        queryClient.resetQueries();
      }}>
      <Suspense fallback={<Spinner />}>
        <UserProfile userId={1} />
      </Suspense>
    </ErrorBoundary>
  );
};
```

### 4.3 Múltiples Suspense Boundaries

```tsx
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* Cada sección con su propio loading */}
      <Suspense fallback={<CardSkeleton />}>
        <UserStats />
      </Suspense>

      <Suspense fallback={<ListSkeleton />}>
        <RecentPosts />
      </Suspense>

      <Suspense fallback={<ChartSkeleton />}>
        <AnalyticsChart />
      </Suspense>
    </div>
  );
};
```

---

## 5. Error Handling Avanzado

### 5.1 Retry Personalizado

```typescript
useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
  retry: (failureCount, error) => {
    // No reintentar errores 4xx
    if (
      error instanceof ApiError &&
      error.status >= 400 &&
      error.status < 500
    ) {
      return false;
    }
    // Reintentar hasta 3 veces para otros errores
    return failureCount < 3;
  },
  retryDelay: (attemptIndex) => {
    // Exponential backoff
    return Math.min(1000 * 2 ** attemptIndex, 30000);
  },
});
```

### 5.2 Global Error Handler

```typescript
// En la configuración del QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
    mutations: {
      onError: (error) => {
        // Error handling global para mutations
        if (error instanceof ApiError) {
          if (error.status === 401) {
            // Redirigir a login
            window.location.href = '/login';
          } else if (error.status === 403) {
            toast.error('No tienes permiso para esta acción');
          } else {
            toast.error(error.message);
          }
        }
      },
    },
  },
});

// También puedes usar QueryCache callbacks
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      // Solo mostrar toast para queries que ya tenían datos
      if (query.state.data !== undefined) {
        toast.error(`Error actualizando: ${error.message}`);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  }),
});
```

### 5.3 Manejo de Errores por Tipo

```typescript
// Tipos de error personalizados
class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public data?: unknown
  ) {
    super(message);
  }
}

// Query function con manejo de errores
const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch('/api/users');

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new ApiError(
      response.status,
      data.message || 'Error al cargar usuarios',
      data
    );
  }

  return response.json();
};

// Componente con manejo específico
const UserList: React.FC = () => {
  const { data, error, isError } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isError) {
    if (error instanceof ApiError) {
      if (error.status === 404) {
        return <EmptyState message="No se encontraron usuarios" />;
      }
      if (error.status === 403) {
        return <AccessDenied />;
      }
    }
    return <ErrorMessage error={error} />;
  }

  return <List data={data} />;
};
```

---

## 6. Ejemplo Completo: Todo App con Patrones Avanzados

```typescript
// src/hooks/useTodos.ts
export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
};

export const useToggleTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleTodo,
    onMutate: async (todoId) => {
      await queryClient.cancelQueries({ queryKey: ['todos'] });
      const previous = queryClient.getQueryData<Todo[]>(['todos']);

      queryClient.setQueryData<Todo[]>(['todos'], (old) =>
        old?.map((t) =>
          t.id === todoId ? { ...t, completed: !t.completed } : t,
        ),
      );

      return { previous };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(['todos'], context?.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
```

```tsx
// src/components/TodoApp.tsx
const TodoApp: React.FC = () => {
  const { data: todos, isLoading } = useTodos();
  const toggleMutation = useToggleTodo();

  if (isLoading) return <Spinner />;

  return (
    <ul>
      {todos?.map((todo) => (
        <li
          key={todo.id}
          onClick={() => toggleMutation.mutate(todo.id)}
          className={todo.completed ? 'completed' : ''}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
```

---

## ✅ Checklist de Verificación

- [ ] Sé implementar optimistic updates con rollback
- [ ] Puedo usar useInfiniteQuery para scroll infinito
- [ ] Entiendo queries paralelas con useQueries
- [ ] Sé configurar queries dependientes con enabled
- [ ] Puedo usar Suspense mode con useSuspenseQuery
- [ ] Conozco patrones de error handling avanzados

---

## 📚 Recursos Adicionales

- [Optimistic Updates](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates)
- [Infinite Queries](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)
- [Suspense](https://tanstack.com/query/latest/docs/framework/react/guides/suspense)

---

_Fin del contenido teórico de la Semana 10_
