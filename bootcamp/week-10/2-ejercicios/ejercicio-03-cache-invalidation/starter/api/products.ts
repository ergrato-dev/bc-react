// EJERCICIO 03: API de Productos
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

let mockProducts: Product[] = [
  { id: 1, name: 'Laptop', price: 999, category: 'electronics' },
  { id: 2, name: 'Mouse', price: 29, category: 'electronics' },
  { id: 3, name: 'Camiseta', price: 25, category: 'clothing' },
  { id: 4, name: 'Libro React', price: 45, category: 'books' },
];

export const fetchProducts = async (): Promise<Product[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...mockProducts];
};

export const fetchProduct = async (id: number): Promise<Product> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  const product = mockProducts.find((p) => p.id === id);
  if (!product) throw new Error('Producto no encontrado');
  return { ...product };
};

export const updateProduct = async (
  id: number,
  data: Partial<Product>,
): Promise<Product> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  mockProducts = mockProducts.map((p) => (p.id === id ? { ...p, ...data } : p));
  const updated = mockProducts.find((p) => p.id === id);
  if (!updated) throw new Error('Producto no encontrado');
  return updated;
};
