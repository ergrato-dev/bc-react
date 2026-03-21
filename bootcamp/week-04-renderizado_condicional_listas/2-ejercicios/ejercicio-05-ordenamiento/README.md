# Ejercicio 05: Ordenamiento de Listas

## 🎯 Objetivo

Implementar ordenamiento de listas usando `.sort()` correctamente sin mutar el array original.

## 📋 Descripción

Crearás un componente con selector de ordenamiento que permite ordenar por diferentes criterios.

## 🔑 Conceptos Clave

- Método `.sort()` y mutación
- Crear copia antes de ordenar: `[...array].sort()`
- Funciones de comparación
- Ordenar strings, números y fechas

---

## 📝 Instrucciones

### Paso 1: Entender el Problema de Mutación

El método `.sort()` **muta** el array original:

```tsx
// ❌ PELIGROSO: Muta el estado directamente
const sorted = products.sort((a, b) => a.price - b.price);

// ✅ CORRECTO: Crear copia primero
const sorted = [...products].sort((a, b) => a.price - b.price);
```

**Abre `starter/SortableList.tsx`** y descomenta el Paso 1.

### Paso 2: Ordenar por Nombre (String)

Para strings, usa `localeCompare()`:

```tsx
// Orden alfabético A-Z
const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));

// Orden inverso Z-A
const sorted = [...items].sort((a, b) => b.name.localeCompare(a.name));
```

**Descomenta el Paso 2** para ordenar por nombre.

### Paso 3: Ordenar por Número

Para números, usa resta simple:

```tsx
// Menor a mayor
const sorted = [...items].sort((a, b) => a.price - b.price);

// Mayor a menor
const sorted = [...items].sort((a, b) => b.price - a.price);
```

**Descomenta el Paso 3** para ordenar por precio.

### Paso 4: Selector de Ordenamiento

Crea un selector que cambie el criterio de orden:

```tsx
type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';
const [sortBy, setSortBy] = useState<SortOption>('name-asc');
```

**Descomenta el Paso 4** para el selector completo.

---

## ✅ Resultado Esperado

- Selector con opciones de ordenamiento
- Lista que se reordena al cambiar opción
- Sin mutación del array original
- Indicador del orden actual

---

## 🧪 Verificación

1. Prueba ordenar por nombre A-Z y Z-A
2. Prueba ordenar por precio menor/mayor
3. Combina con filtros del ejercicio anterior
4. Verifica que el array original no cambia

---

_Fin de los ejercicios de la semana 04_
