import { Item } from './Dashboard';

// ==============================================
// TIPOS
// ==============================================
interface ItemListProps {
  items: Item[];
}

// ==============================================
// COMPONENTE LISTA
// ==============================================
export function ItemList({ items }: ItemListProps) {
  console.log('%c[ItemList] Renderizando', 'color: green');

  return (
    <div>
      <h2>Items ({items.length})</h2>
      <div
        style={{
          maxHeight: '300px',
          overflowY: 'auto',
          border: '1px solid #ddd',
          borderRadius: '8px',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Nombre</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Valor</th>
              <th style={{ padding: '12px', textAlign: 'center' }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr
                key={item.id}
                style={{ borderBottom: '1px solid #eee' }}
              >
                <td style={{ padding: '12px' }}>{item.name}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>
                  ${item.value}
                </td>
                <td style={{ padding: '12px', textAlign: 'center' }}>
                  {item.completed ? '✅' : '⏳'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
