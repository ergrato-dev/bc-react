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
| 📦 Proyecto       | 100%       | 100 pts     |
| **Total**         | **100%**   | **100 pts** |

---

## 📚 Recursos de Aprendizaje (No Evaluados)

> 💡 La teoría y los ejercicios son **recursos de preparación** para el proyecto. No se evalúan directamente, pero son esenciales para completar exitosamente el proyecto.

### Material Teórico

- Diferencia entre Server State y Client State
- Configuración de QueryClient y Provider
- Ciclo de vida de una query (fresh, stale, fetching)
- Query Keys y su importancia
- Diferencia entre invalidación y refetch
- Cuándo usar optimistic updates

### Ejercicios de Práctica

- Ejercicio 01: Primera Query con useQuery
- Ejercicio 02: Mutations con useMutation
- Ejercicio 03: Invalidación de Caché
- Ejercicio 04: Optimistic Updates
- Ejercicio 05: Infinite Queries y Paginación

---

## 📦 Proyecto (100 pts)

### Gestor con React Query - Adaptado a tu Dominio

#### Funcionalidad (40 pts)

| Criterio               | Descripción                      | Puntos |
| ---------------------- | -------------------------------- | ------ |
| **Queries (16 pts)**   |                                  |        |
| - Lista de elementos   | useQuery para obtener lista      | 6 pts  |
| - Detalle de elemento  | useQuery con parámetro ID        | 5 pts  |
| - Estados de carga     | Loading spinners visibles        | 5 pts  |
| **Mutations (16 pts)** |                                  |        |
| - Crear elemento       | useMutation POST funcional       | 6 pts  |
| - Editar elemento      | useMutation PUT/PATCH funcional  | 5 pts  |
| - Eliminar elemento    | useMutation DELETE funcional     | 5 pts  |
| **Caché (8 pts)**      |                                  |        |
| - Invalidación         | Cache invalidado tras mutations  | 4 pts  |
| - Optimistic updates   | Al menos una operación optimista | 4 pts  |

#### Adaptación al Dominio (35 pts)

| Criterio                  | Descripción                                   | Puntos |
| ------------------------- | --------------------------------------------- | ------ |
| Modelo de datos coherente | Entidades y propiedades relevantes al dominio | 12 pts |
| Operaciones contextuales  | CRUD con sentido para el dominio asignado     | 12 pts |
| Interfaz adaptada         | UI/UX que refleje el contexto del dominio     | 11 pts |

#### Calidad del Código (25 pts)

| Criterio      | Descripción                     | Puntos |
| ------------- | ------------------------------- | ------ |
| TypeScript    | Tipos correctos, sin any        | 10 pts |
| UX            | Feedback visual de operaciones  | 8 pts  |
| DevTools      | React Query DevTools integrado  | 4 pts  |
| Documentación | README con instrucciones claras | 3 pts  |

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

## 🎯 Criterios de Aprobación

| Requisito               | Mínimo Requerido               |
| ----------------------- | ------------------------------ |
| Puntuación del Proyecto | 70 pts (70%)                   |
| Funcionalidad básica    | Queries y Mutations operativas |
| Adaptación al dominio   | Implementación coherente       |
| TypeScript              | Sin errores de compilación     |

## 🎯 Niveles de Desempeño

| Nivel            | Rango  | Descripción                                         |
| ---------------- | ------ | --------------------------------------------------- |
| 🏆 Excelente     | 90-100 | Dominio completo, optimistic updates implementados  |
| ✅ Satisfactorio | 70-89  | Queries y mutations funcionales, buena invalidación |
| ⚠️ En desarrollo | 50-69  | Conceptos básicos, falta manejo de caché            |
| ❌ Insuficiente  | 0-49   | No cumple requisitos mínimos                        |

---

## 📅 Formato de Entrega

| Entregable  | Fecha Límite       |
| ----------- | ------------------ |
| 📦 Proyecto | Día 7 de la semana |

---

## ✅ Checklist de Entrega

### Preparación (No evaluada)

- [ ] Material teórico revisado
- [ ] Ejercicios de práctica completados

### Proyecto (Evaluado)

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
