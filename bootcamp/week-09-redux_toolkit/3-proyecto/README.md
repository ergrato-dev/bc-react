# 🏛️ Proyecto Semanal: Gestor con Redux Toolkit

## 🎯 Objetivo

Implementar una aplicación de gestión completa usando Redux Toolkit con TypeScript, aplicando todos los conceptos de la semana.

---

## 📋 Tu Dominio Asignado

**Dominio**: _El instructor te asignará tu dominio específico_

### Ejemplos de Dominios:

- 📖 **Biblioteca**: Gestión de libros, autores, préstamos
- 💊 **Farmacia**: Gestión de medicamentos, ventas, inventario
- 🏋️ **Gimnasio**: Gestión de miembros, rutinas, clases
- 🍽️ **Restaurante**: Gestión de platillos, pedidos, mesas
- 🏥 **Hospital**: Gestión de pacientes, citas, doctores
- 🎓 **Escuela**: Gestión de estudiantes, cursos, calificaciones

---

## ✅ Requisitos Funcionales

### 1. Estructura del Store (15 pts)

- [ ] Store configurado con `configureStore`
- [ ] Al menos 2 slices separados por feature
- [ ] Tipos `RootState` y `AppDispatch` exportados
- [ ] Hooks tipados `useAppSelector` y `useAppDispatch`

### 2. Slices con CRUD (25 pts)

- [ ] Interface de entidad principal tipada
- [ ] Estado inicial con estructura correcta
- [ ] Reducers para: Agregar, Editar, Eliminar, Listar
- [ ] Uso correcto de `PayloadAction`
- [ ] Implementación con Immer (sintaxis de "mutación")

### 3. Operaciones Asíncronas (20 pts)

- [ ] Al menos un `createAsyncThunk` funcional
- [ ] Manejo de estados: `idle`, `loading`, `succeeded`, `failed`
- [ ] `extraReducers` configurado correctamente
- [ ] UI muestra loading spinner durante carga
- [ ] Manejo de errores con mensaje visible

### 4. Selectores (15 pts)

- [ ] Al menos 3 selectores con `createSelector`
- [ ] Selector para filtrado/búsqueda
- [ ] Selector para estadísticas/cálculos
- [ ] Selectores exportados y reutilizables

### 5. Normalización (15 pts)

- [ ] Uso de `createEntityAdapter` para una entidad
- [ ] Estado normalizado `{ ids, entities }`
- [ ] Métodos del adapter: `addOne`, `updateOne`, `removeOne`
- [ ] Selectores generados: `selectAll`, `selectById`

### 6. UI y UX (10 pts)

- [ ] Componentes que consumen el store
- [ ] Formularios funcionales
- [ ] Estados de carga visibles
- [ ] Mensajes de error claros
- [ ] Redux DevTools funcional

---

## 🛠️ Stack Técnico

```bash
# Dependencias
pnpm add @reduxjs/toolkit react-redux

# El proyecto base ya incluye React, TypeScript y Vite
```

---

## 📁 Estructura Recomendada

```
src/
├── app/
│   ├── store.ts              # Configuración del store
│   └── hooks.ts              # Hooks tipados
├── features/
│   ├── [entidad1]/
│   │   ├── [entidad1]Slice.ts
│   │   ├── [entidad1]Selectors.ts
│   │   └── components/
│   │       ├── [Entidad1]List.tsx
│   │       ├── [Entidad1]Form.tsx
│   │       └── [Entidad1]Item.tsx
│   └── [entidad2]/
│       ├── [entidad2]Slice.ts
│       └── components/
├── components/
│   ├── Layout.tsx
│   └── shared/
│       ├── LoadingSpinner.tsx
│       └── ErrorMessage.tsx
├── types/
│   └── index.ts              # Tipos compartidos
├── App.tsx
└── main.tsx
```

---

## 💡 Ejemplo de Adaptación por Dominio

### Biblioteca

```typescript
// features/books/booksSlice.ts
interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  available: boolean;
  category: string;
}

// features/loans/loansSlice.ts
interface Loan {
  id: string;
  bookId: string;
  userId: string;
  loanDate: string;
  returnDate: string | null;
}
```

### Gimnasio

```typescript
// features/members/membersSlice.ts
interface Member {
  id: string;
  name: string;
  email: string;
  membershipType: 'basic' | 'premium' | 'vip';
  startDate: string;
  active: boolean;
}

// features/classes/classesSlice.ts
interface GymClass {
  id: string;
  name: string;
  instructor: string;
  capacity: number;
  schedule: string;
  enrolledMembers: string[];
}
```

---

## 🎯 Entregables

1. **Código fuente** en carpeta `starter/`
2. **README.md** con:
   - Descripción del dominio elegido
   - Instrucciones de instalación y ejecución
   - Capturas de pantalla
   - Decisiones de diseño

---

## 📊 Rúbrica de Evaluación

| Criterio               | Puntos  |
| ---------------------- | ------- |
| Estructura del Store   | 15      |
| Slices con CRUD        | 25      |
| Operaciones Asíncronas | 20      |
| Selectores             | 15      |
| Normalización          | 15      |
| UI y UX                | 10      |
| **Total**              | **100** |

---

## ⏱️ Tiempo Estimado

- **Implementación**: 2 horas
- **Testing y refinamiento**: 30 minutos

---

## 🚀 Puntos Extra (Opcionales)

- [ ] +5 pts: Persistencia con localStorage
- [ ] +5 pts: Filtros múltiples combinados
- [ ] +5 pts: Búsqueda con debounce
- [ ] +5 pts: Paginación en lista
- [ ] +5 pts: Modo oscuro/claro con Redux

---

## 📚 Recursos de Ayuda

- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [TypeScript with Redux](https://redux-toolkit.js.org/usage/usage-with-typescript)
- [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- [createSelector](https://redux-toolkit.js.org/api/createSelector)
- [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)

---

[← Volver al README](../README.md)
