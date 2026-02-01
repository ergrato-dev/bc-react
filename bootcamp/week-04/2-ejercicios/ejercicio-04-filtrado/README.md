# Ejercicio 04: Filtrado de Listas

## 🎯 Objetivo

Implementar filtrado de listas usando `.filter()` y estados para los criterios de búsqueda.

## 📋 Descripción

Crearás un componente de catálogo con filtros por categoría y búsqueda por texto.

## 🔑 Conceptos Clave

- Método `.filter()` para arrays
- Estados para criterios de filtro
- Filtros combinados (múltiples criterios)
- Búsqueda case-insensitive

---

## 📝 Instrucciones

### Paso 1: Filtro Simple

Implementa un filtro básico por una propiedad booleana:

```tsx
const [showOnlyActive, setShowOnlyActive] = useState(false);

const filtered = showOnlyActive ? items.filter((item) => item.isActive) : items;
```

**Abre `starter/FilteredList.tsx`** y descomenta el Paso 1.

### Paso 2: Filtro por Categoría

Agrega un selector de categoría:

```tsx
const [category, setCategory] = useState<Category>('all');

const filtered =
  category === 'all'
    ? items
    : items.filter((item) => item.category === category);
```

**Descomenta el Paso 2** para añadir el filtro de categoría.

### Paso 3: Búsqueda por Texto

Implementa búsqueda que filtra por nombre:

```tsx
const [searchTerm, setSearchTerm] = useState('');

const filtered = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase()),
);
```

**Descomenta el Paso 3** para la búsqueda.

### Paso 4: Combinar Filtros

Combina todos los filtros en un pipeline:

```tsx
const filtered = items
  .filter(
    (item) =>
      !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  .filter((item) => category === 'all' || item.category === category)
  .filter((item) => !showOnlyActive || item.isActive);
```

**Descomenta el Paso 4** para combinar todos los filtros.

---

## ✅ Resultado Esperado

- Checkbox para filtrar solo activos
- Selector de categorías
- Input de búsqueda en tiempo real
- Contador de resultados: "Mostrando X de Y items"

---

## 🧪 Verificación

1. Filtra solo activos y verifica el conteo
2. Cambia categoría y verifica que se combina con otros filtros
3. Escribe en búsqueda y verifica que filtra correctamente
4. Combina los tres filtros y verifica el resultado

---

_Siguiente: [Ejercicio 05 - Ordenamiento](../ejercicio-05-ordenamiento/README.md)_
