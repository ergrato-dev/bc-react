// ============================================
// COMPONENTE: ItemList
// ============================================
// TODO: Implementar lista con infinite scroll

// import { useItems } from '../hooks/useItems';
// import { ItemCard } from './ItemCard';

interface ItemListProps {
  search?: string;
  category?: string;
  onSelectItem: (id: number) => void;
}

export const ItemList: React.FC<ItemListProps> = ({
  search,
  category,
  onSelectItem,
}) => {
  // TODO: Usar useItems con los filtros
  // TODO: Mostrar lista de ItemCard
  // TODO: Botón "Cargar más" o infinite scroll

  return (
    <div>
      <h2>Lista de Elementos</h2>
      <p>TODO: Implementar lista con useInfiniteQuery</p>
      <p>
        Filtros: búsqueda="{search}", categoría="{category}"
      </p>
    </div>
  );
};
