# 📋 Rúbrica de Evaluación - Semana 10

## React Query (TanStack Query) con TypeScript

---

## 🎯 Competencias a Evaluar

| Competencia    | Descripción                                |
| -------------- | ------------------------------------------ |
| **Queries**    | Implementar fetching de datos con useQuery |
| **Mutations**  | Ejecutar operaciones CRUD con useMutation  |
| **Caché**      | Gestionar invalidación y refetching        |
| **Patrones**   | Aplicar optimistic updates y prefetching   |
| **TypeScript** | Tipar correctamente queries y mutations    |

---

## 📊 Distribución de Puntos

| Tipo de Evidencia | Porcentaje | Puntos      |
| ----------------- | ---------- | ----------- |
| 🧠 Conocimiento   | 30%        | 30 pts      |
| 💪 Desempeño      | 40%        | 40 pts      |
| 📦 Producto       | 30%        | 30 pts      |
| **Total**         | **100%**   | **100 pts** |

---

## 🧠 Evidencia de Conocimiento (30 pts)

### Cuestionario Teórico

| Criterio                                            | Puntos |
| --------------------------------------------------- | ------ |
| Diferencia entre Server State y Client State        | 5 pts  |
| Configuración de QueryClient y Provider             | 5 pts  |
| Ciclo de vida de una query (fresh, stale, fetching) | 5 pts  |
| Query Keys y su importancia                         | 5 pts  |
| Diferencia entre invalidación y refetch             | 5 pts  |
| Cuándo usar optimistic updates                      | 5 pts  |

---

## 💪 Evidencia de Desempeño (40 pts)

### Ejercicios Prácticos

| Ejercicio                  | Criterios                                | Puntos |
| -------------------------- | ---------------------------------------- | ------ |
| **01: Primera Query**      | useQuery funcional, loading/error states | 7 pts  |
| **02: Mutations**          | useMutation con onSuccess/onError        | 8 pts  |
| **03: Invalidation**       | invalidateQueries después de mutation    | 8 pts  |
| **04: Optimistic Updates** | onMutate, onError rollback               | 9 pts  |
| **05: Infinite Queries**   | useInfiniteQuery con paginación          | 8 pts  |

### Criterios de Evaluación por Ejercicio

#### Ejercicio 01: Primera Query (7 pts)

- ✅ QueryClient configurado correctamente (1 pt)
- ✅ useQuery con queryKey y queryFn (2 pts)
- ✅ Manejo de isLoading e isError (2 pts)
- ✅ TypeScript: tipos de respuesta definidos (2 pts)

#### Ejercicio 02: Mutations (8 pts)

- ✅ useMutation configurado (2 pts)
- ✅ mutate/mutateAsync llamado correctamente (2 pts)
- ✅ Callbacks onSuccess, onError implementados (2 pts)
- ✅ UI refleja estado de mutation (isPending) (2 pts)

#### Ejercicio 03: Invalidation (8 pts)

- ✅ queryClient.invalidateQueries usado (2 pts)
- ✅ Query keys correctas para invalidar (2 pts)
- ✅ Refetch automático después de mutation (2 pts)
- ✅ Múltiples queries invalidadas cuando necesario (2 pts)

#### Ejercicio 04: Optimistic Updates (9 pts)

- ✅ onMutate implementado con snapshot (3 pts)
- ✅ setQueryData para update optimista (2 pts)
- ✅ onError con rollback (2 pts)
- ✅ onSettled para sincronización final (2 pts)

#### Ejercicio 05: Infinite Queries (8 pts)

- ✅ useInfiniteQuery configurado (2 pts)
- ✅ getNextPageParam implementado (2 pts)
- ✅ fetchNextPage funcional (2 pts)
- ✅ UI de "Cargar más" o scroll infinito (2 pts)

---

## 📦 Evidencia de Producto (30 pts)

### Proyecto: Gestor con React Query

| Criterio              | Descripción                      | Puntos |
| --------------------- | -------------------------------- | ------ |
| **Queries (8 pts)**   |                                  |        |
| - Lista de elementos  | useQuery para obtener lista      | 3 pts  |
| - Detalle de elemento | useQuery con parámetro ID        | 3 pts  |
| - Estados de carga    | Loading spinners visibles        | 2 pts  |
| **Mutations (8 pts)** |                                  |        |
| - Crear elemento      | useMutation POST funcional       | 3 pts  |
| - Editar elemento     | useMutation PUT/PATCH funcional  | 3 pts  |
| - Eliminar elemento   | useMutation DELETE funcional     | 2 pts  |
| **Caché (7 pts)**     |                                  |        |
| - Invalidación        | Cache invalidado tras mutations  | 3 pts  |
| - Optimistic updates  | Al menos una operación optimista | 4 pts  |
| **Calidad (7 pts)**   |                                  |        |
| - TypeScript          | Tipos correctos, sin any         | 3 pts  |
| - UX                  | Feedback visual de operaciones   | 2 pts  |
| - DevTools            | React Query DevTools integrado   | 2 pts  |

---

## 📝 Criterios de Calidad de Código

### TypeScript

```typescript
// ✅ CORRECTO - Tipos definidos para query
interface User {
  id: number;
  name: string;
  email: string;
}

const { data } = useQuery<User[], Error>({
  queryKey: ['users'],
  queryFn: fetchUsers,
});

// ❌ INCORRECTO - Sin tipos
const { data } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers,
});
```

### Query Keys

```typescript
// ✅ CORRECTO - Query keys estructuradas
['users'][('users', userId)][('users', { status: 'active' })]; // Lista de usuarios // Usuario específico // Usuarios filtrados

// ❌ INCORRECTO - Keys inconsistentes
'users'[('user', id)]; // String en lugar de array // Singular inconsistente
```

### Mutations

```typescript
// ✅ CORRECTO - Mutation con callbacks
const mutation = useMutation({
  mutationFn: createUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] });
  },
  onError: (error) => {
    console.error('Error:', error.message);
  },
});

// ❌ INCORRECTO - Sin invalidación
const mutation = useMutation({
  mutationFn: createUser,
  // Falta invalidar caché
});
```

---

## 🎯 Niveles de Desempeño

| Nivel            | Rango  | Descripción                                         |
| ---------------- | ------ | --------------------------------------------------- |
| 🏆 Excelente     | 90-100 | Dominio completo, optimistic updates implementados  |
| ✅ Satisfactorio | 70-89  | Queries y mutations funcionales, buena invalidación |
| ⚠️ En desarrollo | 50-69  | Conceptos básicos, falta manejo de caché            |
| ❌ Insuficiente  | 0-49   | No cumple requisitos mínimos                        |

---

## 📅 Fechas de Entrega

| Entregable   | Fecha Límite       |
| ------------ | ------------------ |
| Ejercicios   | Día 5 de la semana |
| Proyecto     | Día 7 de la semana |
| Cuestionario | Día 7 de la semana |

---

## ✅ Checklist de Entrega

### Ejercicios

- [ ] Ejercicio 01 completado (starter → solution funcional)
- [ ] Ejercicio 02 completado
- [ ] Ejercicio 03 completado
- [ ] Ejercicio 04 completado
- [ ] Ejercicio 05 completado

### Proyecto

- [ ] QueryClientProvider configurado
- [ ] Queries para listar y obtener elementos
- [ ] Mutations para CRUD completo
- [ ] Invalidación de caché implementada
- [ ] Al menos un optimistic update
- [ ] Tipos TypeScript completos
- [ ] React Query DevTools integrado
- [ ] Adaptado al dominio asignado
- [ ] README con instrucciones

---

_Rúbrica Semana 10 - React Query (TanStack Query)_
