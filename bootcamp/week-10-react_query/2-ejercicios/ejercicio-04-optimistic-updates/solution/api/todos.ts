export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let mockTodos: Todo[] = [
  { id: 1, title: 'Aprender React Query', completed: true },
  { id: 2, title: 'Implementar optimistic updates', completed: false },
  { id: 3, title: 'Practicar invalidación', completed: false },
  { id: 4, title: 'Dominar TypeScript', completed: true },
];

export const fetchTodos = async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...mockTodos];
};

export const toggleTodo = async (id: number): Promise<Todo> => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  // Simulamos error aleatorio (20% de probabilidad)
  if (Math.random() < 0.2) {
    throw new Error('¡Error del servidor! Inténtalo de nuevo.');
  }

  mockTodos = mockTodos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo,
  );

  const updated = mockTodos.find((t) => t.id === id);
  if (!updated) throw new Error('Todo no encontrado');

  return updated;
};
