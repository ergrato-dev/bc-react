# ✅ Ejercicio 05: Todo List

## 🎯 Objetivos

- Manejar estado con arrays de objetos
- Renderizar listas con `.map()`
- Generar IDs únicos (timestamp/uuid)
- Agregar, eliminar y marcar como completado
- Usar múltiples estados simultáneamente
- Aplicar filter para operaciones inmutables
- Tipar interfaces complejas con TypeScript

## 📖 Concepto: Estado con Arrays

Trabajar con arrays en React requiere **inmutabilidad**:

```typescript
// ❌ MAL - mutar el array directamente
todos.push(newTodo);

// ✅ BIEN - crear nuevo array
setTodos([...todos, newTodo]);
setTodos(todos.filter((t) => t.id !== id)); // eliminar
setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t))); // actualizar
```

## 🛠️ Desglose del Ejercicio

Construirás una todo list completa con:

1. **Input** para agregar tareas
2. **Lista** de tareas (map rendering)
3. **Checkbox** para marcar completado
4. **Botón** para eliminar cada tarea
5. **Contador** de pendientes vs completadas
6. **Estados múltiples** (todos, input)

### 📝 Requisitos Funcionales

✅ Interface `Todo` con id, text, done  
✅ Agregar nuevas tareas  
✅ Marcar tareas como completadas  
✅ Eliminar tareas  
✅ Validar input no vacío  
✅ Limpiar input después de agregar  
✅ Contador de tareas pendientes/completadas  
✅ IDs únicos (timestamp)

---

## 📚 Pasos del Tutorial

### Paso 1: Definir Interface Todo

Estructura de datos para una tarea:

```typescript
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
```

### Paso 2: Estados del Componente

Necesitamos dos estados:

```typescript
const [todos, setTodos] = useState<Todo[]>([]);
const [inputValue, setInputValue] = useState<string>('');
```

### Paso 3: Agregar Tarea

Crear nueva tarea y agregarla al array:

```typescript
const addTodo = (): void => {
  if (!inputValue.trim()) return; // validar vacío

  const newTodo: Todo = {
    id: Date.now(), // timestamp como ID único
    text: inputValue,
    done: false,
  };

  setTodos([...todos, newTodo]); // spread operator
  setInputValue(''); // limpiar input
};
```

**💡 Tip**: `Date.now()` genera un timestamp único. Alternativa: `crypto.randomUUID()` en navegadores modernos.

### Paso 4: Eliminar Tarea

Filtrar el array excluyendo el elemento a eliminar:

```typescript
const deleteTodo = (id: number): void => {
  setTodos(todos.filter((todo) => todo.id !== id));
};
```

`filter()` retorna un **nuevo array** sin el elemento que cumple la condición.

### Paso 5: Marcar Como Completado

Mapear el array y actualizar solo el elemento específico:

```typescript
const toggleTodo = (id: number): void => {
  setTodos(
    todos.map(
      (todo) =>
        todo.id === id
          ? { ...todo, done: !todo.done } // invertir done
          : todo, // mantener igual
    ),
  );
};
```

### Paso 6: Renderizar Lista con map()

Usar `.map()` para generar JSX de cada tarea:

```typescript
{todos.map(todo => (
  <li key={todo.id}>
    <input
      type="checkbox"
      checked={todo.done}
      onChange={() => toggleTodo(todo.id)}
    />
    <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
      {todo.text}
    </span>
    <button onClick={() => deleteTodo(todo.id)}>×</button>
  </li>
))}
```

**⚠️ Importante**: Siempre usa `key` única en listas (aquí: `todo.id`).

### Paso 7: Contador de Tareas

Calcular pendientes y completadas:

```typescript
const pendingCount = todos.filter((t) => !t.done).length;
const doneCount = todos.filter((t) => t.done).length;
```

---

## 🎨 CSS (Opcional)

```css
.todo-list {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
}

.todo-list__title {
  margin: 0 0 1.5rem 0;
  font-size: 1.75rem;
  color: #333;
}

.todo-list__input-group {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.todo-list__input {
  flex: 1;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.todo-list__add-btn {
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  color: white;
  background-color: #51cf66;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.todo-list__items {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}

.todo-list__item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-bottom: 1px solid #eee;
}

.todo-list__checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-list__text {
  flex: 1;
  font-size: 1rem;
  color: #333;
}

.todo-list__text--done {
  text-decoration: line-through;
  color: #999;
}

.todo-list__delete-btn {
  width: 32px;
  height: 32px;
  font-size: 1.5rem;
  line-height: 1;
  color: #ff6b6b;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.todo-list__delete-btn:hover {
  background-color: #ffe3e3;
}

.todo-list__stats {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.todo-list__stat {
  text-align: center;
}

.todo-list__stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.todo-list__stat-label {
  font-size: 0.875rem;
  color: #666;
}
```

---

## ✅ Verificación

Asegúrate de que tu app:

- [ ] Puedes agregar nuevas tareas
- [ ] No agrega tareas vacías
- [ ] Input se limpia después de agregar
- [ ] Puedes marcar/desmarcar como completado
- [ ] Las completadas tienen tachado
- [ ] Puedes eliminar tareas
- [ ] Contador muestra pendientes y completadas correctamente
- [ ] Cada item tiene key única
- [ ] No hay errores en consola

---

## 💡 Tips

### Inmutabilidad en Arrays

```typescript
// Agregar
setTodos([...todos, newItem]);
setTodos([newItem, ...todos]); // al inicio

// Eliminar
setTodos(todos.filter((t) => t.id !== id));

// Actualizar
setTodos(todos.map((t) => (t.id === id ? { ...t, done: true } : t)));

// Limpiar
setTodos([]);
```

### Keys en Listas

```typescript
// ✅ BIEN - usar id único
{items.map(item => <Li key={item.id} />)}

// ❌ MAL - usar index (puede causar bugs)
{items.map((item, i) => <Li key={i} />)}

// ❌ MAL - sin key
{items.map(item => <Li />)}
```

### Estilos Inline Dinámicos

```typescript
// Objeto de estilos
<span style={{
  textDecoration: todo.done ? 'line-through' : 'none',
  color: todo.done ? '#999' : '#333'
}}>
  {todo.text}
</span>

// Clases dinámicas (mejor)
<span className={todo.done ? 'text--done' : 'text'}>
  {todo.text}
</span>
```

### IDs Únicos

```typescript
// Opción 1: Timestamp
id: Date.now();

// Opción 2: UUID (navegadores modernos)
id: crypto.randomUUID();

// Opción 3: Librería uuid
import { v4 as uuidv4 } from 'uuid';
id: uuidv4();
```

---

## 📚 Recursos Adicionales

- [React Docs - Rendering Lists](https://react.dev/learn/rendering-lists)
- [React Docs - Updating Arrays in State](https://react.dev/learn/updating-arrays-in-state)
- [MDN - Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN - Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

## 🔗 Navegación

- [← Volver a Ejercicios](../README.md)
- [← Ejercicio Anterior: Simple Form](../04-simple-form/README.md)
- [📖 Teoría: Estado Local con useState](../../1-teoria/05-estado-local-usestate.md)
- [🎯 Proyecto Semanal](../../3-proyecto/README.md)
