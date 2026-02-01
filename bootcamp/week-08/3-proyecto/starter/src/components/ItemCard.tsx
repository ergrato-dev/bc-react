// ============================================
// COMPONENTE: ItemCard
// Tarjeta individual de item
// ============================================

import type { Item } from '../types';
import { useMainStore } from '../stores/mainStore';
import { useUIStore } from '../stores/uiStore';

interface ItemCardProps {
  item: Item;
}

export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  // TODO: Obtener acciones necesarias
  const selectItem = useMainStore((s) => s.selectItem);
  const deleteItem = useMainStore((s) => s.deleteItem);
  const openModal = useUIStore((s) => s.openModal);
  const addNotification = useUIStore((s) => s.addNotification);

  const handleEdit = () => {
    selectItem(item.id);
    openModal('edit-item');
  };

  const handleDelete = () => {
    // TODO: Confirmar antes de eliminar
    if (window.confirm(`¿Eliminar "${item.name}"?`)) {
      deleteItem(item.id);
      addNotification({
        type: 'success',
        message: `"${item.name}" eliminado correctamente`,
      });
    }
  };

  return (
    <div className="item-card">
      {/* TODO: Mostrar información del item */}
      <h3>{item.name}</h3>
      <p>{item.description}</p>

      {/* TODO: Agregar propiedades específicas de tu dominio */}

      <div className="item-card-actions">
        <button onClick={handleEdit}>✏️ Editar</button>
        <button onClick={handleDelete}>🗑️ Eliminar</button>
      </div>

      <small>Creado: {new Date(item.createdAt).toLocaleDateString()}</small>
    </div>
  );
};
