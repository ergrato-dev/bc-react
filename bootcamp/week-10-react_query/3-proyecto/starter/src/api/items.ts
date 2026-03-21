// ============================================
// API MOCK: Items (adaptar a tu dominio)
// ============================================

// TODO: Adaptar esta interface a tu dominio
// Ejemplos:
// - Biblioteca: Book { title, author, isbn, available }
// - Farmacia: Medicine { name, price, stock, category }
// - Gimnasio: Member { name, email, membershipType, active }
export interface Item {
  id: number;
  name: string;
  description: string;
  category: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface ItemsResponse {
  items: Item[];
  nextPage: number | null;
  totalItems: number;
}

export interface CreateItemInput {
  name: string;
  description: string;
  category: string;
}

// Base de datos mock
const ITEMS_PER_PAGE = 10;

let mockItems: Item[] = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  name: `Elemento ${i + 1}`,
  description: `Descripción del elemento ${i + 1}`,
  category: ['categoria-a', 'categoria-b', 'categoria-c'][i % 3],
  status: i % 4 === 0 ? 'inactive' : 'active',
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
}));

// Simular latencia
const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// TODO: Implementar fetchItems con paginación y filtros
export const fetchItems = async (
  page: number = 1,
  search?: string,
  category?: string,
): Promise<ItemsResponse> => {
  await delay(600);

  let filtered = [...mockItems];

  // Filtrar por búsqueda
  if (search) {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  // Filtrar por categoría
  if (category) {
    filtered = filtered.filter((item) => item.category === category);
  }

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const items = filtered.slice(start, start + ITEMS_PER_PAGE);

  return {
    items,
    nextPage: page < totalPages ? page + 1 : null,
    totalItems,
  };
};

// TODO: Implementar fetchItem para detalle
export const fetchItem = async (id: number): Promise<Item> => {
  await delay(300);
  const item = mockItems.find((i) => i.id === id);
  if (!item) throw new Error('Elemento no encontrado');
  return { ...item };
};

// TODO: Implementar createItem
export const createItem = async (input: CreateItemInput): Promise<Item> => {
  await delay(500);
  const newItem: Item = {
    id: Math.max(...mockItems.map((i) => i.id)) + 1,
    ...input,
    status: 'active',
    createdAt: new Date().toISOString(),
  };
  mockItems = [newItem, ...mockItems];
  return newItem;
};

// TODO: Implementar updateItem
export const updateItem = async (
  id: number,
  data: Partial<Item>,
): Promise<Item> => {
  await delay(500);
  mockItems = mockItems.map((item) =>
    item.id === id ? { ...item, ...data } : item,
  );
  const updated = mockItems.find((i) => i.id === id);
  if (!updated) throw new Error('Elemento no encontrado');
  return updated;
};

// TODO: Implementar deleteItem
export const deleteItem = async (id: number): Promise<void> => {
  await delay(500);
  mockItems = mockItems.filter((item) => item.id !== id);
};
