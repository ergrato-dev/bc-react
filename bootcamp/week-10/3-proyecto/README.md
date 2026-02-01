# 🚀 Proyecto Semana 10: Gestor con React Query

## 🎯 Objetivo

Construir una aplicación completa de gestión utilizando React Query para manejar todas las operaciones de datos del servidor, aplicando los conceptos aprendidos durante la semana.

## 🏛️ Tu Dominio Asignado

**Dominio**: _El instructor te asignará tu dominio único_

### 💡 Ejemplos de Adaptación

| Dominio          | Entidad Principal | Operaciones                             |
| ---------------- | ----------------- | --------------------------------------- |
| 📖 Biblioteca    | Libro             | Buscar, prestar, devolver, reservar     |
| 💊 Farmacia      | Medicamento       | Listar, vender, reabastecer, buscar     |
| 🏋️ Gimnasio      | Miembro           | Registrar, renovar, cancelar, consultar |
| 🍽️ Restaurante   | Platillo          | Ver menú, ordenar, cancelar pedido      |
| 🏨 Hotel         | Habitación        | Disponibilidad, reservar, check-in/out  |
| 🚗 Concesionario | Vehículo          | Catálogo, cotizar, reservar, vender     |

## ✅ Requisitos Funcionales

### 1. Listado con Paginación (useInfiniteQuery)

- [ ] Cargar elementos de forma paginada
- [ ] Botón "Cargar más" o infinite scroll
- [ ] Mostrar contador de elementos cargados
- [ ] Estado de carga apropiado

### 2. Búsqueda y Filtrado (useQuery con queryKey dinámico)

- [ ] Campo de búsqueda por nombre/título
- [ ] Filtros por categoría/estado
- [ ] Debounce en búsqueda (300-500ms)
- [ ] Mantener filtros en URL (opcional)

### 3. Detalle de Elemento (useQuery con placeholderData)

- [ ] Ver detalle completo de un elemento
- [ ] Usar placeholderData desde lista
- [ ] Prefetch al hacer hover
- [ ] Navegación lista ↔ detalle

### 4. Crear Elemento (useMutation)

- [ ] Formulario de creación
- [ ] Validación de campos
- [ ] Invalidar lista después de crear
- [ ] Feedback visual (toast/alert)

### 5. Actualizar Elemento (useMutation + Optimistic Update)

- [ ] Formulario de edición
- [ ] Actualización optimista
- [ ] Rollback si hay error
- [ ] Sincronización con servidor

### 6. Eliminar Elemento (useMutation + Confirmación)

- [ ] Confirmación antes de eliminar
- [ ] Actualización optimista
- [ ] Rollback si hay error
- [ ] Feedback visual

## 📁 Estructura del Proyecto

```
proyecto/
├── README.md
├── starter/
│   ├── src/
│   │   ├── api/
│   │   │   └── items.ts          # API mock
│   │   ├── hooks/
│   │   │   ├── useItems.ts       # Lista infinita
│   │   │   ├── useItem.ts        # Detalle
│   │   │   ├── useCreateItem.ts  # Crear
│   │   │   ├── useUpdateItem.ts  # Actualizar (optimistic)
│   │   │   └── useDeleteItem.ts  # Eliminar (optimistic)
│   │   ├── components/
│   │   │   ├── ItemList.tsx
│   │   │   ├── ItemCard.tsx
│   │   │   ├── ItemDetail.tsx
│   │   │   ├── ItemForm.tsx
│   │   │   └── SearchFilter.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
└── solution/
    └── (misma estructura completa)
```

## 🛠️ Tecnologías Requeridas

- React 18+
- TypeScript
- @tanstack/react-query
- @tanstack/react-query-devtools
- Vite

## 📝 Criterios de Evaluación

### Conocimiento (30%)

- [ ] Comprende la diferencia entre server state y client state
- [ ] Sabe cuándo usar useQuery vs useInfiniteQuery
- [ ] Entiende el concepto de invalidación de caché

### Desempeño (40%)

- [ ] Implementa queries correctamente tipadas
- [ ] Usa mutations con callbacks apropiados
- [ ] Implementa optimistic updates con rollback
- [ ] Gestiona estados de carga y error

### Producto (30%)

- [ ] Aplicación funcional con todas las operaciones CRUD
- [ ] UX fluida con optimistic updates
- [ ] Código limpio y bien organizado
- [ ] Adaptación coherente al dominio asignado

## 🚀 Comandos

```bash
# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build
pnpm build
```

## 📚 Recursos

- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Optimistic Updates Guide](https://tanstack.com/query/latest/docs/framework/react/guides/optimistic-updates)
- [Infinite Queries Guide](https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries)

## 📅 Entrega

- **Fecha límite**: Final de la semana 10
- **Formato**: Push a tu rama personal
- **Incluir**: README.md con descripción de tu dominio
