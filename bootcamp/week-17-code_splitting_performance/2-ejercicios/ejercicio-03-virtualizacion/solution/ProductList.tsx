// ============================================
// EJERCICIO 03: ProductList.tsx (SOLUTION)
// ============================================
// Lista virtualizada de productos usando FixedSizeList

import { useMemo, type FC } from 'react';
import { FixedSizeList, type ListChildComponentProps } from 'react-window';
import type { Product } from './types';

// ============================================
// TIPOS
// ============================================
interface ProductListProps {
  products: Product[];
  onDelete: (id: number) => void;
}

// react-window usa itemData para pasar datos a los items
interface ItemData {
  products: Product[];
  onDelete: (id: number) => void;
}

// ============================================
// COMPONENTE DE FILA
// ============================================

// react-window pasa index, style y data a cada fila
const ProductRow: FC<ListChildComponentProps<ItemData>> = ({
  index,
  style,
  data,
}) => {
  const { products, onDelete } = data;
  const product = products[index];

  return (
    <div
      style={style}
      className="product-row">
      <div className="product-row-content">
        <span className="product-name">{product.name}</span>
        <span className="product-category">{product.category}</span>
        <span className="product-price">${product.price}</span>
        <span
          className={`product-stock ${product.inStock ? 'in-stock' : 'out-stock'}`}>
          {product.inStock ? 'En stock' : 'Sin stock'}
        </span>
        <button
          onClick={() => onDelete(product.id)}
          className="delete-btn">
          Eliminar
        </button>
      </div>
    </div>
  );
};

// ============================================
// LISTA VIRTUALIZADA
// ============================================

export const ProductList: FC<ProductListProps> = ({ products, onDelete }) => {
  // Memoriza itemData para evitar re-renders innecesarios
  const itemData: ItemData = useMemo(
    () => ({
      products,
      onDelete,
    }),
    [products, onDelete],
  );

  return (
    <div className="product-list-container">
      <FixedSizeList
        height={500} // Altura del viewport
        width="100%" // Ancho del contenedor
        itemCount={products.length} // Total de items
        itemSize={60} // Altura de cada item en px
        itemData={itemData} // Datos para cada fila
        overscanCount={5} // Items extra para buffer
      >
        {ProductRow}
      </FixedSizeList>
    </div>
  );
};
