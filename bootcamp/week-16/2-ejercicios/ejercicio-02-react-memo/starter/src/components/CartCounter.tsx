// ==============================================
// COMPONENTE CONTADOR DEL CARRITO
// ==============================================
interface CartCounterProps {
  count: number;
}

export function CartCounter({ count }: CartCounterProps) {
  console.log(
    '%c[CartCounter] Renderizando',
    'color: orange; font-weight: bold',
  );

  return (
    <div
      style={{
        padding: '16px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
      <span style={{ fontSize: '24px' }}>🛒</span>
      <span style={{ fontSize: '18px' }}>
        Carrito: <strong>{count}</strong> items
      </span>
    </div>
  );
}
