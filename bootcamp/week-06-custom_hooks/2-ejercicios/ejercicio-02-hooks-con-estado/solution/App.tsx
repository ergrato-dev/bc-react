// ============================================
// SOLUCIÓN: App.tsx
// Probando useForm y useArray
// ============================================

import React, { useState } from 'react';
import { useForm } from './useForm';
import { useArray } from './useArray';

// ============================================
// Demo useForm
// ============================================

interface ContactForm {
  name: string;
  email: string;
  age: number;
  subscribe: boolean;
}

const FormDemo: React.FC = () => {
  const form = useForm<ContactForm>({
    name: '',
    email: '',
    age: 18,
    subscribe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form values:', form.values);
    alert(JSON.stringify(form.values, null, 2));
  };

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        marginBottom: '1rem',
        borderRadius: '8px',
      }}>
      <h3>📝 useForm Demo</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '0.5rem' }}>
          <input
            name="name"
            value={form.values.name}
            onChange={form.handleChange}
            placeholder="Nombre"
          />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <input
            name="email"
            type="email"
            value={form.values.email}
            onChange={form.handleChange}
            placeholder="Email"
          />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <input
            name="age"
            type="number"
            value={form.values.age}
            onChange={form.handleChange}
          />
        </div>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>
            <input
              name="subscribe"
              type="checkbox"
              checked={form.values.subscribe}
              onChange={form.handleChange}
            />
            Suscribirse
          </label>
        </div>
        <button
          type="submit"
          style={{ marginRight: '0.5rem' }}>
          Enviar
        </button>
        <button
          type="button"
          onClick={form.reset}>
          Reset
        </button>
        <p style={{ fontSize: '0.8rem', color: '#666' }}>
          isDirty: {form.isDirty ? 'true' : 'false'}
        </p>
      </form>
    </div>
  );
};

// ============================================
// Demo useArray
// ============================================

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const ArrayDemo: React.FC = () => {
  const todos = useArray<Todo>([
    { id: 1, text: 'Aprender hooks', done: true },
    { id: 2, text: 'Crear custom hooks', done: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (!newTodo.trim()) return;
    todos.push({ id: Date.now(), text: newTodo, done: false });
    setNewTodo('');
  };

  const toggleTodo = (index: number) => {
    const todo = todos.array[index];
    todos.update(index, { ...todo, done: !todo.done });
  };

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}>
      <h3>📋 useArray Demo</h3>
      <div style={{ marginBottom: '1rem' }}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Nueva tarea"
          onKeyDown={(e) => e.key === 'Enter' && addTodo()}
        />
        <button
          onClick={addTodo}
          style={{ marginLeft: '0.5rem' }}>
          Agregar
        </button>
      </div>

      {todos.isEmpty ? (
        <p style={{ color: '#666' }}>No hay tareas</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.array.map((todo, index) => (
            <li
              key={todo.id}
              style={{ marginBottom: '0.5rem' }}>
              <span
                onClick={() => toggleTodo(index)}
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}>
                {todo.done ? '✅' : '⬜'} {todo.text}
              </span>
              <button
                onClick={() => todos.remove(index)}
                style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => todos.filter((t) => !t.done)}
          style={{ marginRight: '0.5rem' }}>
          Limpiar completadas
        </button>
        <button onClick={todos.clear}>Limpiar todo</button>
      </div>
    </div>
  );
};

// ============================================
// App principal
// ============================================

const App: React.FC = () => {
  return (
    <div
      style={{
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
      <h1>✅ Ejercicio 02: Hooks con Estado</h1>
      <FormDemo />
      <ArrayDemo />
    </div>
  );
};

export default App;
