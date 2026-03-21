// SOLUCIÓN: useUpdateProduct con invalidación
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct, Product } from '../api/products';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation<Product, Error, { id: number; data: Partial<Product> }>({
    mutationFn: ({ id, data }) => updateProduct(id, data),
    onSuccess: (updatedProduct) => {
      queryClient.setQueryData(
        ['products', 'detail', updatedProduct.id],
        updatedProduct,
      );
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });
};
