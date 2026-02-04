// ============================================
// APP PRINCIPAL - PROYECTO SEMANA 11
// ============================================

import { useState } from 'react';
import CreateItemForm from './components/forms/CreateItemForm';
import FormErrorBoundary from './components/error/FormErrorBoundary';
import { CreateItemData } from './schemas/itemSchema';
import { Item } from './types/item';

/**
 * Aplicación principal del proyecto de formularios
 * TODO: Adapta esta aplicación a tu dominio asignado
 */
const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // Simula guardar un nuevo elemento
  const handleCreateItem = async (data: CreateItemData): Promise<void> => {
    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const newItem: Item = {
      ...data,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setItems((prev) => [...prev, newItem]);
    setShowForm(false);

    console.log('Elemento creado:', newItem);
    alert(`✅ Elemento "${data.name}" creado exitosamente`);
  };

  const handleResetErrorBoundary = (): void => {
    setResetKey((prev) => prev + 1);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '32px' }}>
        <h1>📋 Sistema de Formularios</h1>
        <p style={{ color: '#666' }}>
          Proyecto Semana 11 - React Hook Form + Zod
        </p>
        <p
          style={{
            backgroundColor: '#fef3c7',
            padding: '12px',
            borderRadius: '6px',
            color: '#92400e',
            marginTop: '12px',
          }}>
          ⚠️ <strong>TODO:</strong> Adapta este proyecto a tu dominio asignado
        </p>
      </header>

      {/* Botón para mostrar formulario */}
      {!showForm && (
        <button
          onClick={() => setShowForm(true)}
          style={{
            padding: '14px 24px',
            backgroundColor: '#3178C6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            marginBottom: '24px',
          }}>
          ➕ Crear Nuevo Elemento
        </button>
      )}

      {/* Formulario con Error Boundary */}
      {showForm && (
        <FormErrorBoundary
          key={resetKey}
          onReset={handleResetErrorBoundary}>
          <div
            style={{
              backgroundColor: '#f9f9f9',
              padding: '24px',
              borderRadius: '8px',
              marginBottom: '24px',
            }}>
            <CreateItemForm
              onSubmit={handleCreateItem}
              onCancel={() => setShowForm(false)}
            />
          </div>
        </FormErrorBoundary>
      )}

      {/* Lista de elementos */}
      <section>
        <h2>📦 Elementos Creados ({items.length})</h2>

        {items.length === 0 ? (
          <p style={{ color: '#666', fontStyle: 'italic' }}>
            No hay elementos aún. ¡Crea el primero!
          </p>
        ) : (
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                }}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h3 style={{ margin: 0 }}>{item.name}</h3>
                  <span
                    style={{
                      padding: '4px 8px',
                      backgroundColor: item.active ? '#d1fae5' : '#fee2e2',
                      color: item.active ? '#065f46' : '#991b1b',
                      borderRadius: '4px',
                      fontSize: '12px',
                    }}>
                    {item.active ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
                <p style={{ color: '#666', margin: '8px 0' }}>
                  {item.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    gap: '16px',
                    fontSize: '14px',
                    color: '#888',
                  }}>
                  <span>💰 ${item.price.toFixed(2)}</span>
                  <span>📁 {item.category}</span>
                  <span>📅 {item.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer con instrucciones */}
      <footer
        style={{
          marginTop: '48px',
          paddingTop: '24px',
          borderTop: '1px solid #e0e0e0',
          color: '#666',
          fontSize: '14px',
        }}>
        <h3>📝 Tareas Pendientes</h3>
        <ul>
          <li>Adaptar schemas de Zod a tu dominio</li>
          <li>Implementar formulario de edición</li>
          <li>Crear formulario multi-paso (wizard)</li>
          <li>Agregar campos dinámicos con useFieldArray</li>
          <li>Mejorar estilos y UX</li>
        </ul>
      </footer>
    </div>
  );
};

export default App;
