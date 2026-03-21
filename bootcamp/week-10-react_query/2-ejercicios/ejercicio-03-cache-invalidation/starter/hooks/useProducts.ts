// EJERCICIO 03: Hook useProducts con configuración de caché
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, Product } from '../api/products';

// PASO 1: Configura staleTime y gcTime
// Descomenta y ajusta las opciones:
export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    // staleTime: 1000 * 60 * 2, // 2 minutos - datos frescos
    // gcTime: 1000 * 60 * 10,   // 10 minutos - tiempo en caché
  });
};

// Query Keys Factory
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  detail: (id: number) => [...productKeys.all, 'detail', id] as const,
};
