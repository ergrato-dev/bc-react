// EJERCICIO 03: Hook useUpdateProduct con invalidación
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct, Product } from '../api/products';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, { id: number; data: Partial<Product> }>({
    mutationFn: ({ id, data }) => updateProduct(id, data),
    // PASO 2: Implementa invalidación después de actualizar
    // Descomenta:
    // onSuccess: (updatedProduct) => {
    //   // Actualizar el detalle en caché directamente
    //   queryClient.setQueryData(
    //     ['products', 'detail', updatedProduct.id],
    //     updatedProduct
    //   );
    //   // Invalidar la lista para refetch
    //   queryClient.invalidateQueries({ queryKey: ['products'] });
    // },
  });
};
