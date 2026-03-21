// EJERCICIO 03: Hook useProduct con placeholder desde lista
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchProduct, Product } from '../api/products';

export const useProduct = (id: number) => {
  const queryClient = useQueryClient();

  return useQuery<Product, Error>({
    queryKey: ['products', 'detail', id],
    queryFn: () => fetchProduct(id),
    enabled: id > 0,
    // PASO 3: Usar datos de la lista como placeholder
    // Descomenta:
    // placeholderData: () => {
    //   const products = queryClient.getQueryData<Product[]>(['products']);
    //   return products?.find((p) => p.id === id);
    // },
  });
};
