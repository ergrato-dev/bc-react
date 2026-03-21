import { useState } from 'react';
import { Item } from './types';
import Header from './components/Header';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

/**
 * COMPONENTE PRINCIPAL: App
 *
 * Este componente gestiona el estado global de la aplicación
 * y coordina la comunicación entre componentes hijos.
 */
const App = () => {
  // ============================================
  // ESTADO PRINCIPAL
  // ============================================

  // TODO: Estado para la lista de elementos
  // Tip: Usa useState<Item[]>([])
  const [items, setItems] = useState<Item[]>([]);

  // TODO: Estado para edición (id del elemento siendo editado)
  // Tip: Usa useState<number | null>(null)
  const [editingId, setEditingId] = useState<number | null>(null);

  // ============================================
  // FUNCIONES CRUD
  // ============================================

  /**
   * Agregar nuevo elemento
   * @param item - Datos del nuevo elemento (sin id)
   */
  const addItem = (item: Omit<Item, 'id'>): void => {
    // TODO: Implementar
    // 1. Crear nuevo objeto con id único (Date.now())
    // 2. Agregar al array con spread operator: [...items, newItem]
    // 3. Usar setItems para actualizar el estado

    const newItem: Item = {
      ...item,
      id: Date.now(), // Genera ID único basado en timestamp
    };

    setItems([...items, newItem]);
  };

  /**
   * Actualizar elemento existente
   * @param id - ID del elemento a actualizar
   * @param updates - Propiedades a actualizar
   */
  const updateItem = (id: number, updates: Partial<Item>): void => {
    // TODO: Implementar
    // 1. Usar map() para recorrer items
    // 2. Si item.id === id, crear nuevo objeto con {...item, ...updates}
    // 3. Si no, mantener el item sin cambios
    // 4. Usar setItems con el nuevo array

    setItems(
      items.map((item) => (item.id === id ? { ...item, ...updates } : item)),
    );
  };

  /**
   * Eliminar elemento
   * @param id - ID del elemento a eliminar
   */
  const deleteItem = (id: number): void => {
    // TODO: Implementar
    // 1. Usar filter() para crear nuevo array sin el elemento
    // 2. Condición: item.id !== id
    // 3. Usar setItems con el nuevo array

    setItems(items.filter((item) => item.id !== id));
  };

  /**
   * Preparar elemento para edición
   * @param id - ID del elemento a editar
   */
  const startEdit = (id: number): void => {
    // TODO: Implementar
    // Simplemente actualiza el estado editingId con el id recibido
    setEditingId(id);
  };

  /**
   * Cancelar edición
   */
  const cancelEdit = (): void => {
    // TODO: Implementar
    // Simplemente actualiza el estado editingId a null
    setEditingId(null);
  };

  // ============================================
  // ELEMENTO SIENDO EDITADO
  // ============================================

  // TODO: Encontrar el elemento que se está editando
  // Tip: Usa find() con editingId
  const itemToEdit = editingId
    ? items.find((item) => item.id === editingId)
    : undefined;

  // ============================================
  // RENDER
  // ============================================

  return (
    <div className="app">
      {/* Header con título y descripción */}
      <Header />

      <div className="container">
        {/* Formulario para agregar/editar */}
        <ItemForm
          onAdd={addItem}
          onUpdate={updateItem}
          editingItem={itemToEdit}
          onCancelEdit={cancelEdit}
        />

        {/* Lista de elementos */}
        <ItemList
          items={items}
          onDelete={deleteItem}
          onEdit={startEdit}
        />
      </div>
    </div>
  );
};

export default App;
