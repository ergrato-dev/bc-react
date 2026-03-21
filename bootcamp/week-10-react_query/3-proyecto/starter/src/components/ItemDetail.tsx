// ============================================
// COMPONENTE: ItemDetail
// ============================================
// TODO: Implementar vista de detalle

interface ItemDetailProps {
  itemId: number;
  onBack: () => void;
}

export const ItemDetail: React.FC<ItemDetailProps> = ({ itemId, onBack }) => {
  // TODO: Usar useItem(itemId)
  // TODO: Mostrar información completa
  // TODO: Formulario de edición inline
  // TODO: Botón volver

  return (
    <div>
      <button onClick={onBack}>← Volver</button>
      <h2>Detalle del Elemento #{itemId}</h2>
      <p>TODO: Implementar con useItem y useUpdateItem</p>
    </div>
  );
};
