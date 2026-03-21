// ============================================
// EJERCICIO 05: Context Avanzado
// Archivo: App.tsx - Aplicación de Demostración
// ============================================

import { useState } from 'react';
// Importa los contextos cuando estén implementados
// import { CartProvider, useCart, useCartDispatch, cartActions } from './CartContext';
// import { NotificationProvider, useNotifications } from './NotificationContext';
// import { CounterProvider, CounterDisplay, CounterButtons, CounterHistory } from './OptimizedContext';

console.log('--- Paso 4: App de Demostración ---');

// ============================================
// PRODUCTOS DE EJEMPLO
// ============================================

// const sampleProducts = [
//   { id: '1', name: 'Laptop Pro', price: 1299.99, image: '💻' },
//   { id: '2', name: 'Wireless Mouse', price: 29.99, image: '🖱️' },
//   { id: '3', name: 'Mechanical Keyboard', price: 149.99, image: '⌨️' },
//   { id: '4', name: 'Monitor 4K', price: 499.99, image: '🖥️' },
//   { id: '5', name: 'USB-C Hub', price: 79.99, image: '🔌' },
// ];

// ============================================
// COMPONENTES DE CARRITO
// ============================================

// Descomenta cuando implementes los contextos:

// const ProductCard = ({ product }: { product: typeof sampleProducts[0] }) => {
//   const dispatch = useCartDispatch();
//   const { success } = useNotifications();
//
//   const handleAdd = () => {
//     dispatch(cartActions.addItem(product));
//     success(`${product.name} agregado al carrito`);
//   };
//
//   return (
//     <div style={{
//       padding: '16px',
//       border: '1px solid #e0e0e0',
//       borderRadius: '8px',
//       textAlign: 'center',
//     }}>
//       <div style={{ fontSize: '48px' }}>{product.image}</div>
//       <h3 style={{ margin: '8px 0' }}>{product.name}</h3>
//       <p style={{ color: '#666', margin: '8px 0' }}>${product.price.toFixed(2)}</p>
//       <button
//         onClick={handleAdd}
//         style={{
//           padding: '8px 16px',
//           backgroundColor: '#2196f3',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           cursor: 'pointer',
//         }}
//       >
//         Agregar
//       </button>
//     </div>
//   );
// };

// const CartSummary = () => {
//   const { items, total, itemCount } = useCart();
//   const dispatch = useCartDispatch();
//   const { info } = useNotifications();
//
//   const handleClear = () => {
//     dispatch(cartActions.clearCart());
//     info('Carrito vaciado');
//   };
//
//   return (
//     <div style={{
//       padding: '16px',
//       backgroundColor: '#f5f5f5',
//       borderRadius: '8px',
//       marginTop: '24px',
//     }}>
//       <h3>🛒 Carrito ({itemCount} items)</h3>
//       {items.length === 0 ? (
//         <p>El carrito está vacío</p>
//       ) : (
//         <>
//           {items.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 padding: '8px 0',
//                 borderBottom: '1px solid #e0e0e0',
//               }}
//             >
//               <span>
//                 {item.name} x{item.quantity}
//               </span>
//               <span>${(item.price * item.quantity).toFixed(2)}</span>
//             </div>
//           ))}
//           <div style={{
//             marginTop: '16px',
//             paddingTop: '16px',
//             borderTop: '2px solid #333',
//             display: 'flex',
//             justifyContent: 'space-between',
//             fontWeight: 'bold',
//           }}>
//             <span>Total:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//           <button
//             onClick={handleClear}
//             style={{
//               marginTop: '16px',
//               padding: '8px 16px',
//               backgroundColor: '#f44336',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//             }}
//           >
//             Vaciar Carrito
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

// ============================================
// COMPONENTE DE NOTIFICACIONES
// ============================================

// const NotificationContainer = () => {
//   const { notifications, removeNotification } = useNotifications();
//
//   const getBackgroundColor = (type: string) => {
//     switch (type) {
//       case 'success': return '#4caf50';
//       case 'error': return '#f44336';
//       case 'warning': return '#ff9800';
//       case 'info': return '#2196f3';
//       default: return '#333';
//     }
//   };
//
//   return (
//     <div style={{
//       position: 'fixed',
//       top: '16px',
//       right: '16px',
//       zIndex: 1000,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '8px',
//     }}>
//       {notifications.map((notification) => (
//         <div
//           key={notification.id}
//           style={{
//             padding: '12px 16px',
//             backgroundColor: getBackgroundColor(notification.type),
//             color: 'white',
//             borderRadius: '4px',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             minWidth: '250px',
//           }}
//         >
//           <span style={{ flex: 1 }}>{notification.message}</span>
//           <button
//             onClick={() => removeNotification(notification.id)}
//             style={{
//               background: 'transparent',
//               border: 'none',
//               color: 'white',
//               cursor: 'pointer',
//               fontSize: '16px',
//             }}
//           >
//             ✕
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// ============================================
// SECCIÓN DE COUNTER OPTIMIZADO
// ============================================

// const OptimizedCounterDemo = () => {
//   return (
//     <div style={{
//       marginTop: '32px',
//       padding: '24px',
//       backgroundColor: '#e8f5e9',
//       borderRadius: '8px',
//     }}>
//       <h3>🚀 Context Optimizado (ver consola)</h3>
//       <p style={{ color: '#666', marginBottom: '16px' }}>
//         Observa en la consola: CounterButtons no re-renderiza cuando el contador cambia.
//       </p>
//       <CounterProvider>
//         <CounterDisplay />
//         <CounterButtons />
//         <CounterHistory />
//       </CounterProvider>
//     </div>
//   );
// };

// ============================================
// APLICACIÓN PRINCIPAL
// ============================================

// Descomenta cuando implementes los contextos:
// export const App = () => {
//   return (
//     <NotificationProvider>
//       <CartProvider>
//         <div style={{ padding: '24px', maxWidth: '900px', margin: '0 auto' }}>
//           <h1>🛍️ Tienda con Context Avanzado</h1>
//
//           {/* Productos */}
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
//             gap: '16px',
//             marginTop: '24px',
//           }}>
//             {sampleProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//
//           {/* Carrito */}
//           <CartSummary />
//
//           {/* Demo de Context Optimizado */}
//           <OptimizedCounterDemo />
//
//           {/* Notificaciones */}
//           <NotificationContainer />
//         </div>
//       </CartProvider>
//     </NotificationProvider>
//   );
// };

// Exportación temporal
export const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Ejercicio 05: Context Avanzado</h1>
    <p>Descomenta los contextos en cada archivo para completar el ejercicio.</p>
  </div>
);

console.log('App.tsx cargado');
