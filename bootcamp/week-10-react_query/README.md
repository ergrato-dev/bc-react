# 📅 Semana 10: React Query (TanStack Query)

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Configurar TanStack Query en proyectos React con TypeScript
- ✅ Implementar queries para fetching de datos con `useQuery`
- ✅ Ejecutar mutaciones con `useMutation` y actualizar caché
- ✅ Gestionar estados de carga, error y éxito automáticamente
- ✅ Implementar invalidación y refetching inteligente de datos
- ✅ Aplicar patrones de optimistic updates para mejor UX
- ✅ Configurar opciones avanzadas: staleTime, cacheTime, retry
- ✅ Integrar React Query con formularios y acciones de usuario

---

## 📚 Requisitos Previos

- ✅ Semana 09: Redux Toolkit con TypeScript (completada)
- ✅ Conocimiento de async/await y Promises
- ✅ Familiaridad con APIs REST
- ✅ TypeScript intermedio (generics, tipos de utilidad)

---

## 🗂️ Estructura de la Semana

```
week-10-react_query/
├── README.md                    # Este archivo
├── rubrica-evaluacion.md        # Criterios de evaluación
├── 0-assets/                    # Diagramas SVG
├── 1-teoria/                    # Material teórico
│   ├── 01-introduccion-react-query.md
│   ├── 02-queries-useQuery.md
│   ├── 03-mutations-useMutation.md
│   ├── 04-cache-invalidation.md
│   └── 05-patrones-avanzados.md
├── 2-ejercicios/                # Ejercicios guiados
│   ├── ejercicio-01-primera-query/
│   ├── ejercicio-02-mutations/
│   ├── ejercicio-03-invalidation/
│   ├── ejercicio-04-optimistic-updates/
│   └── ejercicio-05-infinite-queries/
├── 3-proyecto/                  # Proyecto semanal
│   ├── README.md
│   ├── starter/
│   └── solution/
├── 4-recursos/                  # Recursos adicionales
│   ├── ebooks-free/
│   ├── videografia/
│   └── webgrafia/
└── 5-glosario/                  # Términos clave
    └── README.md
```

---

## 📝 Contenidos

### 1. Teoría (2-2.5 horas)

| Archivo                                                                   | Tema                                               | Duración |
| ------------------------------------------------------------------------- | -------------------------------------------------- | -------- |
| [01-introduccion-react-query.md](1-teoria/01-introduccion-react-query.md) | ¿Por qué React Query? Server State vs Client State | 25 min   |
| [02-queries-useQuery.md](1-teoria/02-queries-useQuery.md)                 | useQuery: fetching, loading, error states          | 30 min   |
| [03-mutations-useMutation.md](1-teoria/03-mutations-useMutation.md)       | useMutation: crear, actualizar, eliminar           | 30 min   |
| [04-cache-invalidation.md](1-teoria/04-cache-invalidation.md)             | Caché, invalidación y refetching                   | 25 min   |
| [05-patrones-avanzados.md](1-teoria/05-patrones-avanzados.md)             | Optimistic updates, prefetching, infinite queries  | 30 min   |

### 2. Ejercicios (3-3.5 horas)

| Ejercicio                                                     | Tema                          | Duración |
| ------------------------------------------------------------- | ----------------------------- | -------- |
| [ejercicio-01](2-ejercicios/ejercicio-01-primera-query/)      | Primera Query con useQuery    | 35 min   |
| [ejercicio-02](2-ejercicios/ejercicio-02-mutations/)          | Mutations con useMutation     | 40 min   |
| [ejercicio-03](2-ejercicios/ejercicio-03-invalidation/)       | Invalidación de Caché         | 40 min   |
| [ejercicio-04](2-ejercicios/ejercicio-04-optimistic-updates/) | Optimistic Updates            | 45 min   |
| [ejercicio-05](2-ejercicios/ejercicio-05-infinite-queries/)   | Infinite Queries y Paginación | 40 min   |

### 3. Proyecto (2-2.5 horas)

**Gestor de Tareas con React Query**: Aplicación CRUD completa que demuestra todos los conceptos de la semana, adaptada al dominio asignado por el instructor.

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad     | Tiempo  |
| ------------- | ------- |
| 📖 Teoría     | 2.5 h   |
| 💻 Ejercicios | 3.5 h   |
| 🏗️ Proyecto   | 2 h     |
| **Total**     | **8 h** |

---

## 📌 Entregable

📦 **Proyecto Semanal** (100%) - Aplicación con React Query adaptada a tu dominio asignado

> 💡 **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

### ✅ Checklist de la Semana

**Preparación (No evaluada)**:

- [ ] Leer material teórico de React Query
- [ ] Completar ejercicios guiados de práctica

**Entregable (Evaluado)**:

- [ ] Proyecto semanal funcionando con React Query
- [ ] Adaptado al dominio asignado por el instructor
- [ ] README con instrucciones de ejecución

---

## 🛠️ Stack Técnico

```bash
# Dependencias principales
pnpm add @tanstack/react-query

# DevTools (opcional pero recomendado)
pnpm add @tanstack/react-query-devtools
```

---

## 💡 Conceptos Clave

- **Server State**: Datos que viven en el servidor y requieren sincronización
- **Query**: Operación de lectura (GET) con caché automático
- **Mutation**: Operación de escritura (POST, PUT, DELETE)
- **Query Key**: Identificador único para cachear y revalidar datos
- **Stale Time**: Tiempo que los datos se consideran "frescos"
- **Cache Time**: Tiempo que los datos permanecen en caché
- **Invalidation**: Marcar datos como desactualizados para refetch
- **Optimistic Update**: Actualizar UI antes de confirmar con servidor

---

## 🔗 Navegación

| ⬅️ Anterior                                      | 🏠 Inicio                   | Siguiente ➡️                                       |
| ------------------------------------------------ | --------------------------- | -------------------------------------------------- |
| [Semana 09: Redux Toolkit](../week-09-redux_toolkit/README.md) | [Bootcamp](../../README.md) | [Semana 11: React Hook Form](../week-11-react_hook_form_zod/README.md) |

---

_Semana 10 de 20 - Etapa 3: React Intermedio_
