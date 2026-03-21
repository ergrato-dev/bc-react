import { useState } from 'react';

// ============================================
// INTERFACE TODO
// ============================================
// Interface que define la estructura de cada tarea
interface Todo {
  id: number; // ID único (timestamp)
  text: string; // Texto de la tarea
  done: boolean; // Estado: completada o pendiente
}

// ============================================
// COMPONENTE TODO LIST
// ============================================
/**
 * Componente Todo List completo
 * Demuestra manejo de arrays con useState, map, filter
 * y operaciones CRUD (Create, Read, Update, Delete)
 */
export const TodoList: React.FC = () => {
  // ============================================
  // ESTADOS
  // ============================================
  // Estado 1: Array de tareas
  const [todos, setTodos] = useState<Todo[]>([]);

  // Estado 2: Valor del input
  const [inputValue, setInputValue] = useState<string>('');

  // ============================================
  // FUNCIÓN: AGREGAR TAREA
  // ============================================
  const addTodo = (): void => {
    // 1. Validar que el input no esté vacío
    if (!inputValue.trim()) return;

    // 2. Crear nuevo objeto Todo
    const newTodo: Todo = {
      id: Date.now(), // Timestamp como ID único
      text: inputValue, // Texto del input
      done: false, // Inicia como pendiente
    };

    // 3. Agregar al array manteniendo inmutabilidad
    // Spread operator crea NUEVO array
    setTodos([...todos, newTodo]);

    // 4. Limpiar input
    setInputValue('');
  };

  // ============================================
  // FUNCIÓN: ELIMINAR TAREA
  // ============================================
  const deleteTodo = (id: number): void => {
    // filter() crea NUEVO array excluyendo el elemento con el id dado
    // Mantiene inmutabilidad: no modifica el array original
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ============================================
  // FUNCIÓN: MARCAR/DESMARCAR COMO COMPLETADO
  // ============================================
  const toggleTodo = (id: number): void => {
    // map() crea NUEVO array transformando elementos
    setTodos(
      todos.map(
        (todo) =>
          todo.id === id
            ? { ...todo, done: !todo.done } // Invertir done del elemento encontrado
            : todo, // Mantener los demás sin cambios
      ),
    );
  };

  // ============================================
  // CONTADORES (Valores calculados)
  // ============================================
  // Estos NO son estados porque se pueden calcular a partir de todos
  const pendingCount = todos.filter((t) => !t.done).length;
  const doneCount = todos.filter((t) => t.done).length;

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="todo-list">
      <h2 className="todo-list__title">📝 Todo List</h2>

      {/* Input y botón para agregar tareas */}
      <div className="todo-list__input-group">
        <input
          type="text"
          className="todo-list__input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
          placeholder="Nueva tarea..."
        />
        <button
          className="todo-list__add-btn"
          onClick={addTodo}>
          Agregar
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="todo-list__items">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="todo-list__item">
            {/* Checkbox para marcar completado */}
            <input
              type="checkbox"
              className="todo-list__checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />

            {/* Texto de la tarea con estilo dinámico */}
            <span
              className={`todo-list__text ${todo.done ? 'todo-list__text--done' : ''}`}>
              {todo.text}
            </span>

            {/* Botón para eliminar */}
            <button
              className="todo-list__delete-btn"
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Eliminar tarea: ${todo.text}`}>
              ×
            </button>
          </li>
        ))}
      </ul>

      {/* Mensaje si no hay tareas */}
      {todos.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999', marginTop: '2rem' }}>
          No hay tareas. ¡Agrega una!
        </p>
      )}

      {/* Contador de tareas */}
      <div className="todo-list__stats">
        <div className="todo-list__stat">
          <span className="todo-list__stat-value">{pendingCount}</span>
          <span className="todo-list__stat-label">Pendientes</span>
        </div>
        <div className="todo-list__stat">
          <span className="todo-list__stat-value">{doneCount}</span>
          <span className="todo-list__stat-label">Completadas</span>
        </div>
      </div>
    </div>
  );
};

// ============================================
// EXPLICACIONES DETALLADAS
// ============================================

/**
 * 1. INTERFACE TODO
 * - Define la estructura de cada tarea
 * - TypeScript valida que todos los objetos cumplan esta estructura
 * - Proporciona autocompletado en el IDE
 *
 * interface Todo {
 *   id: number;      // Único identificador (usamos Date.now())
 *   text: string;    // Contenido de la tarea
 *   done: boolean;   // Estado: true = completada, false = pendiente
 * }
 */

/**
 * 2. ESTADOS CON USESTATE
 *
 * a) todos: useState<Todo[]>([])
 *    - Tipo: array de objetos Todo
 *    - Valor inicial: array vacío []
 *    - Contiene todas las tareas
 *
 * b) inputValue: useState<string>('')
 *    - Tipo: string
 *    - Valor inicial: string vacío ''
 *    - Guarda el valor del input mientras el usuario escribe
 */

/**
 * 3. AGREGAR TAREA (addTodo)
 *
 * Flujo:
 * 1. Validar: if (!inputValue.trim()) return;
 *    - trim() elimina espacios al inicio/final
 *    - Si está vacío, no hace nada (early return)
 *
 * 2. Crear objeto: const newTodo: Todo = {...}
 *    - id: Date.now() genera timestamp único (ej: 1704067200000)
 *    - text: valor del input
 *    - done: false (siempre inicia pendiente)
 *
 * 3. Agregar: setTodos([...todos, newTodo])
 *    - Spread operator [...todos] copia array actual
 *    - Agrega newTodo al final
 *    - INMUTABILIDAD: NO usar push() porque muta el array original
 *
 * 4. Limpiar: setInputValue('')
 *    - Limpia el input para la próxima tarea
 */

/**
 * 4. ELIMINAR TAREA (deleteTodo)
 *
 * setTodos(todos.filter(todo => todo.id !== id))
 *
 * - filter() crea NUEVO array con elementos que cumplen la condición
 * - Condición: todo.id !== id (todos EXCEPTO el que queremos eliminar)
 * - Ejemplo:
 *   todos = [{id:1, text:'A'}, {id:2, text:'B'}, {id:3, text:'C'}]
 *   deleteTodo(2)
 *   resultado = [{id:1, text:'A'}, {id:3, text:'C'}]
 *
 * - INMUTABILIDAD: filter() NO modifica el array original
 */

/**
 * 5. MARCAR COMO COMPLETADO (toggleTodo)
 *
 * setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo))
 *
 * - map() recorre el array y transforma cada elemento
 * - Para cada todo, evalúa:
 *   - Si todo.id === id: crear NUEVO objeto con done invertido
 *   - Si no: mantener el todo sin cambios
 *
 * - Spread operator {...todo} copia todas las propiedades
 * - done: !todo.done invierte el valor booleano
 *
 * Ejemplo:
 *   todos = [{id:1, text:'A', done:false}]
 *   toggleTodo(1)
 *   resultado = [{id:1, text:'A', done:true}]
 *
 * - INMUTABILIDAD: map() crea NUEVO array, no muta el original
 */

/**
 * 6. CONTADORES (pendingCount, doneCount)
 *
 * - NO son estados porque se pueden CALCULAR a partir de todos
 * - Se recalculan automáticamente en cada render
 *
 * const pendingCount = todos.filter(t => !t.done).length;
 * - Filtra tareas donde done === false
 * - Obtiene la cantidad con .length
 *
 * const doneCount = todos.filter(t => t.done).length;
 * - Filtra tareas donde done === true
 * - Obtiene la cantidad con .length
 *
 * Alternativa con reduce:
 * const { pending, done } = todos.reduce((acc, t) => ({
 *   pending: acc.pending + (t.done ? 0 : 1),
 *   done: acc.done + (t.done ? 1 : 0)
 * }), { pending: 0, done: 0 });
 */

/**
 * 7. RENDERIZADO CON MAP()
 *
 * {todos.map(todo => <li key={todo.id}>...</li>)}
 *
 * - map() convierte cada Todo en un elemento JSX <li>
 * - key={todo.id} es OBLIGATORIO en listas
 *   - React usa keys para identificar qué elementos cambiaron
 *   - Mejora el rendimiento del Virtual DOM
 *   - ❌ NUNCA usar index como key si el orden puede cambiar
 *
 * - Cada <li> contiene:
 *   1. Checkbox: checked={todo.done} onChange={toggleTodo}
 *   2. Span: muestra el texto, con clase dinámica si está done
 *   3. Button: botón × para eliminar
 */

/**
 * 8. ESTILOS DINÁMICOS
 *
 * Opción 1: Clases CSS dinámicas (RECOMENDADO)
 * className={`todo-list__text ${todo.done ? 'todo-list__text--done' : ''}`}
 * - Si done === true: 'todo-list__text todo-list__text--done'
 * - Si done === false: 'todo-list__text'
 *
 * Opción 2: Estilos inline
 * style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
 * - Más sencillo pero menos performante
 * - No permite pseudo-clases (:hover)
 */

/**
 * 9. INPUT CONTROLADO
 *
 * <input
 *   value={inputValue}
 *   onChange={(e) => setInputValue(e.target.value)}
 * />
 *
 * - value={inputValue}: React controla el valor del input
 * - onChange actualiza el estado en cada tecla
 * - Single source of truth: el estado es la única fuente de verdad
 *
 * onKeyDown={(e) => e.key === 'Enter' && addTodo()}
 * - Detecta tecla Enter
 * - Llama addTodo() para agregar tarea (UX improvement)
 */

/**
 * 10. INMUTABILIDAD EN ARRAYS
 *
 * ❌ EVITAR (mutan el array):
 * - push() / pop()
 * - shift() / unshift()
 * - splice()
 * - sort() / reverse() (sin copia previa)
 *
 * ✅ USAR (crean nuevos arrays):
 * - Spread: [...array, item] o [item, ...array]
 * - filter(): eliminar elementos
 * - map(): transformar elementos
 * - concat(): concatenar arrays
 * - slice(): copiar array
 *
 * Razón:
 * React detecta cambios comparando referencias de objetos.
 * Si mutamos el array, React NO detecta el cambio porque la referencia es la misma.
 * Crear un nuevo array garantiza que React re-renderice el componente.
 */

/**
 * 11. IDS ÚNICOS
 *
 * Opción 1: Date.now()
 * - Timestamp en milisegundos (ej: 1704067200000)
 * - Único si se llama con >1ms de diferencia
 * - Problema: si agregas 2 tareas muy rápido, puede colisionar
 *
 * Opción 2: crypto.randomUUID() (navegadores modernos)
 * - UUID v4 (ej: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d')
 * - Garantiza unicidad
 * - Soportado en Chrome 92+, Firefox 95+, Safari 15.4+
 *
 * Opción 3: Librería uuid
 * import { v4 as uuidv4 } from 'uuid';
 * id: uuidv4()
 */

/**
 * 12. TYPESCRIPT TYPES
 *
 * React.FC<Props>
 * - Tipo para componentes funcionales
 * - Incluye children automáticamente
 * - Alternativa: const TodoList = () => { ... }
 *
 * useState<Todo[]>([])
 * - Especifica el tipo del estado (array de Todo)
 * - TypeScript valida que setTodos reciba Todo[]
 *
 * void
 * - Indica que la función no retorna nada
 * - const addTodo = (): void => { ... }
 */

/**
 * 13. OPTIMIZACIONES OPCIONALES
 *
 * a) Filtros: "Todas" | "Pendientes" | "Completadas"
 *    const [filter, setFilter] = useState<'all' | 'pending' | 'done'>('all');
 *    const filtered = todos.filter(t =>
 *      filter === 'all' ? true :
 *      filter === 'pending' ? !t.done : t.done
 *    );
 *
 * b) Edición de tareas:
 *    const editTodo = (id: number, newText: string): void => {
 *      setTodos(todos.map(t => t.id === id ? {...t, text: newText} : t));
 *    };
 *
 * c) Persistencia con localStorage:
 *    useEffect(() => {
 *      localStorage.setItem('todos', JSON.stringify(todos));
 *    }, [todos]);
 *
 * d) Limpiar completadas:
 *    const clearCompleted = () => setTodos(todos.filter(t => !t.done));
 */
