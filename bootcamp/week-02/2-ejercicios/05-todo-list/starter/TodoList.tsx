// ============================================
// EJERCICIO 05: TODO LIST
// ============================================
// En este ejercicio aprenderás a:
// - Manejar arrays de objetos con useState
// - Renderizar listas con .map()
// - Agregar, eliminar y actualizar elementos
// - Usar múltiples estados en un componente
// - Aplicar inmutabilidad en operaciones de arrays

console.log('=== EJERCICIO 05: TODO LIST ===\n');

// ============================================
// PASO 1: Interface Todo
// ============================================
console.log('--- Paso 1: Interface Todo ---');
// En TypeScript, definimos una interface para el tipo de dato de cada tarea
// Esto nos da autocompletado y validación de tipos

// Descomenta las siguientes líneas:
// interface Todo {
//   id: number;           // ID único (usaremos Date.now())
//   text: string;         // Texto de la tarea
//   done: boolean;        // ¿Está completada?
// }

console.log('Interface Todo definida: { id, text, done }');
console.log('');

// ============================================
// PASO 2: Estados del Componente
// ============================================
console.log('--- Paso 2: Estados ---');
// Necesitamos DOS estados:
// 1. Lista de todos (array de objetos Todo)
// 2. Valor del input (string)

// Descomenta las siguientes líneas:
// export const TodoList: React.FC = () => {
//   // Estado para la lista de tareas (array vacío al inicio)
//   const [todos, setTodos] = useState<Todo[]>([]);
//
//   // Estado para el valor del input
//   const [inputValue, setInputValue] = useState<string>('');

console.log('Estados:');
console.log('- todos: useState<Todo[]>([])');
console.log('- inputValue: useState<string>("")');
console.log('');

// ============================================
// PASO 3: Función para Agregar Tarea
// ============================================
console.log('--- Paso 3: Agregar Tarea ---');
// Para agregar una tarea:
// 1. Validar que el input no esté vacío (trim)
// 2. Crear objeto Todo con id único
// 3. Agregar al array con spread operator
// 4. Limpiar el input

// Descomenta las siguientes líneas:
//   const addTodo = (): void => {
//     // 1. Validar que no esté vacío
//     if (!inputValue.trim()) return;
//
//     // 2. Crear nuevo todo
//     const newTodo: Todo = {
//       id: Date.now(),         // timestamp como ID único
//       text: inputValue,
//       done: false
//     };
//
//     // 3. Agregar al array (INMUTABILIDAD)
//     setTodos([...todos, newTodo]);
//
//     // 4. Limpiar input
//     setInputValue('');
//   };

console.log('addTodo():');
console.log('1. Validar input con trim()');
console.log('2. Crear objeto: { id: Date.now(), text, done: false }');
console.log('3. setTodos([...todos, newTodo]) - spread operator');
console.log('4. setInputValue("") - limpiar input');
console.log('');

// ============================================
// PASO 4: Función para Eliminar Tarea
// ============================================
console.log('--- Paso 4: Eliminar Tarea ---');
// Para eliminar una tarea, usamos filter()
// filter retorna un NUEVO array sin el elemento que queremos eliminar
// Esto mantiene la inmutabilidad

// Descomenta las siguientes líneas:
//   const deleteTodo = (id: number): void => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

console.log('deleteTodo(id):');
console.log('- Usar filter() para crear nuevo array');
console.log('- Excluir el todo con el id especificado');
console.log('- filter() NO muta el array original');
console.log('');

// ============================================
// PASO 5: Función para Marcar Como Completado
// ============================================
console.log('--- Paso 5: Toggle Completado ---');
// Para actualizar una tarea:
// - Usar map() para recorrer el array
// - Encontrar la tarea por id
// - Crear NUEVO objeto con {...todo, done: !todo.done}
// - Mantener las demás tareas sin cambios

// Descomenta las siguientes líneas:
//   const toggleTodo = (id: number): void => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id
//           ? { ...todo, done: !todo.done }  // invertir done
//           : todo                            // mantener igual
//       )
//     );
//   };

console.log('toggleTodo(id):');
console.log('- Usar map() para recorrer el array');
console.log('- Si todo.id === id: crear nuevo objeto con done invertido');
console.log('- Si no: mantener el todo sin cambios');
console.log('- map() crea un NUEVO array (inmutabilidad)');
console.log('');

// ============================================
// PASO 6: Calcular Contador de Tareas
// ============================================
console.log('--- Paso 6: Contador de Tareas ---');
// Podemos usar filter() para contar tareas pendientes/completadas
// Esto se calcula en cada render (no necesita useState)

// Descomenta las siguientes líneas:
//   const pendingCount = todos.filter(t => !t.done).length;
//   const doneCount = todos.filter(t => t.done).length;

console.log('Contadores:');
console.log('- pendingCount: filter(t => !t.done).length');
console.log('- doneCount: filter(t => t.done).length');
console.log('');

// ============================================
// PASO 7: Renderizar JSX
// ============================================
console.log('--- Paso 7: JSX con map() ---');
// Para renderizar la lista:
// - Usar .map() para convertir array de todos a array de JSX
// - SIEMPRE usar key única (id del todo)
// - Aplicar estilos dinámicos (line-through si done)

// Descomenta las siguientes líneas:
//   return (
//     <div className="todo-list">
//       <h2 className="todo-list__title">📝 Todo List</h2>
//
//       {/* Input y botón para agregar */}
//       <div className="todo-list__input-group">
//         <input
//           type="text"
//           className="todo-list__input"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && addTodo()}
//           placeholder="Nueva tarea..."
//         />
//         <button
//           className="todo-list__add-btn"
//           onClick={addTodo}
//         >
//           Agregar
//         </button>
//       </div>
//
//       {/* Lista de tareas */}
//       <ul className="todo-list__items">
//         {todos.map(todo => (
//           <li key={todo.id} className="todo-list__item">
//             <input
//               type="checkbox"
//               className="todo-list__checkbox"
//               checked={todo.done}
//               onChange={() => toggleTodo(todo.id)}
//             />
//             <span
//               className={`todo-list__text ${todo.done ? 'todo-list__text--done' : ''}`}
//             >
//               {todo.text}
//             </span>
//             <button
//               className="todo-list__delete-btn"
//               onClick={() => deleteTodo(todo.id)}
//             >
//               ×
//             </button>
//           </li>
//         ))}
//       </ul>
//
//       {/* Contador de tareas */}
//       <div className="todo-list__stats">
//         <div className="todo-list__stat">
//           <span className="todo-list__stat-value">{pendingCount}</span>
//           <span className="todo-list__stat-label">Pendientes</span>
//         </div>
//         <div className="todo-list__stat">
//           <span className="todo-list__stat-value">{doneCount}</span>
//           <span className="todo-list__stat-label">Completadas</span>
//         </div>
//       </div>
//     </div>
//   );
// };

console.log('JSX:');
console.log('- Input controlado: value={inputValue} onChange={...}');
console.log('- onKeyDown para agregar con Enter');
console.log('- todos.map() para renderizar lista');
console.log('- key={todo.id} SIEMPRE en el <li>');
console.log('- checkbox checked={todo.done} onChange={toggleTodo}');
console.log('- Estilos dinámicos con clases CSS');
console.log('- Botón × para eliminar');
console.log('- Contador con pendingCount y doneCount');
console.log('');

// ============================================
// RESUMEN
// ============================================
console.log('=== RESUMEN ===');
console.log('✅ Interface Todo tipada con TypeScript');
console.log('✅ Dos estados: todos (array) e inputValue (string)');
console.log('✅ addTodo: validar, crear, agregar, limpiar');
console.log('✅ deleteTodo: filter() para eliminar');
console.log('✅ toggleTodo: map() para actualizar');
console.log('✅ Contadores calculados con filter()');
console.log('✅ Renderizado con .map() y key única');
console.log('✅ INMUTABILIDAD: spread, filter, map - NO push/splice');
console.log('');

// ============================================
// NOTAS IMPORTANTES
// ============================================
console.log('💡 NOTAS:');
console.log('1. Date.now() genera timestamps únicos como IDs');
console.log('2. trim() previene agregar strings vacíos');
console.log('3. SIEMPRE usar key en listas (key={todo.id})');
console.log('4. filter() y map() NO mutan el array original');
console.log('5. Spread operator [...todos, newTodo] crea nuevo array');
console.log('6. Estilos dinámicos con clases CSS o inline styles');
console.log('7. onKeyDown para agregar con Enter (UX)');
console.log('');
