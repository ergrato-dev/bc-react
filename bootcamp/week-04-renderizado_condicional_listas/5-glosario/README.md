# 📖 Glosario - Semana 04

## Renderizado Condicional y Listas

### A

**Array.filter()**
Método de array que crea un nuevo array con elementos que pasan una condición.

```tsx
const activos = usuarios.filter((u) => u.activo);
```

**Array.map()**
Método de array que transforma cada elemento y retorna un nuevo array.

```tsx
const nombres = usuarios.map((u) => u.nombre);
```

**Array.sort()**
Método que ordena un array. ⚠️ Muta el array original.

```tsx
// Crear copia antes de ordenar
const ordenado = [...items].sort((a, b) => a.precio - b.precio);
```

---

### C

**Case-insensitive**
Búsqueda que ignora mayúsculas/minúsculas.

```tsx
texto.toLowerCase().includes(busqueda.toLowerCase());
```

**Conditional Rendering (Renderizado Condicional)**
Mostrar diferentes contenidos según condiciones.

```tsx
{
  isLoggedIn ? <Dashboard /> : <Login />;
}
```

---

### D

**Debounce**
Técnica para retrasar la ejecución de una función hasta que pase un tiempo sin llamadas.

```tsx
const debouncedValue = useDebounce(searchTerm, 300);
```

**Destructuring**
Extraer valores de objetos o arrays.

```tsx
const { id, name } = user;
const [first, ...rest] = items;
```

**Diffing Algorithm**
Algoritmo de React para comparar árboles de elementos y determinar cambios mínimos.

---

### E

**Early Return**
Patrón de retornar temprano para simplificar lógica.

```tsx
if (!data) return <Loading />;
if (error) return <Error />;
return <Content />;
```

**Empty State**
UI que se muestra cuando no hay datos.

```tsx
{
  items.length === 0 && <EmptyState />;
}
```

---

### F

**Falsy**
Valores que evalúan como `false`: `false`, `0`, `''`, `null`, `undefined`, `NaN`.

**Filter**
Operación que selecciona elementos que cumplen una condición.

---

### G

**Guard Clause**
Condición que retorna temprano para evitar ejecución innecesaria.

```tsx
if (!isValid) return null;
```

---

### I

**Immutability (Inmutabilidad)**
Principio de no modificar datos directamente, sino crear copias.

```tsx
// ✅ Inmutable
const newArray = [...array, newItem];
// ❌ Mutable
array.push(newItem);
```

**Index (como key)**
Usar posición del array como key. ⚠️ Problemático si la lista cambia.

```tsx
// ⚠️ Solo para listas estáticas
items.map((item, index) => <li key={index}>{item}</li>);
```

---

### J

**JSX Expression**
Código JavaScript dentro de llaves `{}` en JSX.

```tsx
<div>{user.name}</div>
<ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
```

---

### K

**Key**
Prop especial que ayuda a React a identificar elementos en listas.

```tsx
<li key={item.id}>{item.name}</li>
```

---

### L

**List Rendering**
Renderizar arrays de datos como elementos JSX usando `.map()`.

**localeCompare()**
Método para comparar strings alfabéticamente.

```tsx
items.sort((a, b) => a.name.localeCompare(b.name));
```

---

### M

**Memoization**
Técnica para cachear resultados de cálculos costosos.

```tsx
const filtered = useMemo(() => items.filter((i) => i.active), [items]);
```

**Mutation (Mutación)**
Modificar datos directamente. Evitar en React.

---

### N

**Nullish Coalescing (??)**
Operador que usa valor por defecto solo si es `null` o `undefined`.

```tsx
const count = value ?? 0; // 0 solo si value es null/undefined
```

---

### O

**OR Operator (||)**
Operador que retorna primer valor truthy o el último.

```tsx
const name = user.name || 'Anónimo';
```

---

### P

**Pipeline**
Secuencia de operaciones encadenadas.

```tsx
items.filter(...).filter(...).sort(...);
```

---

### R

**Reconciliation**
Proceso de React para comparar Virtual DOM y actualizar el DOM real.

**Render Props**
Patrón de compartir lógica entre componentes.

---

### S

**Short-circuit Evaluation**
Evaluación que se detiene cuando el resultado está determinado.

```tsx
{
  isVisible && <Component />;
} // Si isVisible es false, no evalúa Component
```

**Spread Operator (...)**
Expandir arrays u objetos.

```tsx
const copy = [...original];
const merged = { ...obj1, ...obj2 };
```

---

### T

**Ternary Operator (?:)**
Operador condicional de tres partes.

```tsx
condition ? valueIfTrue : valueIfFalse;
```

**Truthy**
Valores que evalúan como `true` (todo excepto falsy).

---

### U

**useMemo**
Hook para memorizar valores calculados.

```tsx
const sorted = useMemo(() => [...items].sort(compareFn), [items]);
```

---

### V

**Virtual DOM**
Representación en memoria del DOM que React usa para optimizar actualizaciones.

---

_Última actualización: Semana 04 - Renderizado Condicional y Listas_
