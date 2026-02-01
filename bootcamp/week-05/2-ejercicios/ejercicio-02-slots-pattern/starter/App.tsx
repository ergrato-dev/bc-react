// ============================================
// EJERCICIO 02: Slots Pattern
// Archivo: App.tsx - Aplicación de Demostración
// ============================================

import { useState } from 'react';
// Importa los componentes cuando estén implementados
// import { Modal } from './Modal';
// import { PageLayout } from './PageLayout';
// import { AdvancedCard } from './AdvancedCard';

console.log('--- Paso 4: App de Demostración ---');

// ============================================
// COMPONENTES AUXILIARES
// ============================================

// Descomenta cuando implementes los componentes principales:
// const Badge = ({ children, color = '#2196f3' }: { children: React.ReactNode; color?: string }) => (
//   <span
//     style={{
//       backgroundColor: color,
//       color: '#ffffff',
//       padding: '4px 8px',
//       borderRadius: '4px',
//       fontSize: '12px',
//       fontWeight: 600,
//     }}
//   >
//     {children}
//   </span>
// );

// const Button = ({
//   children,
//   variant = 'primary',
//   onClick,
// }: {
//   children: React.ReactNode;
//   variant?: 'primary' | 'secondary';
//   onClick?: () => void;
// }) => {
//   const styles: React.CSSProperties = {
//     padding: '8px 16px',
//     borderRadius: '6px',
//     border: variant === 'secondary' ? '1px solid #e0e0e0' : 'none',
//     backgroundColor: variant === 'primary' ? '#2196f3' : '#ffffff',
//     color: variant === 'primary' ? '#ffffff' : '#333',
//     cursor: 'pointer',
//     fontWeight: 500,
//   };
//   return (
//     <button style={styles} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// ============================================
// APLICACIÓN DE DEMOSTRACIÓN
// ============================================

// Descomenta todo el componente App cuando hayas implementado
// todos los componentes anteriores:

// export const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//
//   return (
//     <PageLayout
//       header={
//         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <h1 style={{ margin: 0, fontSize: '20px' }}>Mi Aplicación</h1>
//           <nav style={{ display: 'flex', gap: '16px' }}>
//             <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Inicio</a>
//             <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Productos</a>
//             <a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Contacto</a>
//           </nav>
//         </div>
//       }
//       sidebar={
//         <div>
//           <h3 style={{ marginTop: 0 }}>Categorías</h3>
//           <ul style={{ listStyle: 'none', padding: 0 }}>
//             <li style={{ padding: '8px 0' }}>Electrónica</li>
//             <li style={{ padding: '8px 0' }}>Ropa</li>
//             <li style={{ padding: '8px 0' }}>Hogar</li>
//           </ul>
//         </div>
//       }
//       footer={<p style={{ margin: 0 }}>© 2025 Mi Aplicación. Todos los derechos reservados.</p>}
//     >
//       <h2>Ejercicio 02: Slots Pattern</h2>
//
//       {/* ===== Demostración de Modal ===== */}
//       <section style={{ marginBottom: '32px' }}>
//         <h3>Modal con Slots</h3>
//         <Button onClick={() => setIsModalOpen(true)}>Abrir Modal</Button>
//
//         <Modal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           header={<h2 style={{ margin: 0 }}>Confirmar Acción</h2>}
//           footer={
//             <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
//               <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
//                 Cancelar
//               </Button>
//               <Button onClick={() => setIsModalOpen(false)}>Confirmar</Button>
//             </div>
//           }
//         >
//           <p>¿Estás seguro de que deseas continuar con esta acción?</p>
//           <p style={{ color: '#666' }}>Esta acción no se puede deshacer.</p>
//         </Modal>
//       </section>
//
//       {/* ===== Demostración de AdvancedCard ===== */}
//       <section>
//         <h3>AdvancedCard con Slots</h3>
//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
//           <AdvancedCard
//             title="Producto Premium"
//             subtitle="Categoría: Electrónica"
//             image={
//               <div
//                 style={{
//                   height: '200px',
//                   backgroundColor: '#e3f2fd',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '48px',
//                 }}
//               >
//                 📱
//               </div>
//             }
//             badge={<Badge color="#4caf50">Nuevo</Badge>}
//             actions={
//               <>
//                 <Button variant="secondary">Detalles</Button>
//                 <Button>Comprar</Button>
//               </>
//             }
//           >
//             <p style={{ color: '#666', margin: 0 }}>
//               Descripción del producto con todas sus características.
//             </p>
//           </AdvancedCard>
//
//           <AdvancedCard
//             title="Oferta Especial"
//             subtitle="Descuento del 30%"
//             variant="outlined"
//             image={
//               <div
//                 style={{
//                   height: '200px',
//                   backgroundColor: '#fff3e0',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '48px',
//                 }}
//               >
//                 🎁
//               </div>
//             }
//             badge={<Badge color="#ff9800">-30%</Badge>}
//             actions={<Button>Ver Oferta</Button>}
//           >
//             <p style={{ color: '#666', margin: 0 }}>
//               ¡No te pierdas esta oferta por tiempo limitado!
//             </p>
//           </AdvancedCard>
//
//           <AdvancedCard
//             title="Card Simple"
//             variant="filled"
//           >
//             <p style={{ color: '#666', margin: 0 }}>
//               Este card solo tiene título y contenido, sin slots adicionales.
//             </p>
//           </AdvancedCard>
//         </div>
//       </section>
//     </PageLayout>
//   );
// };

// Exportación temporal
export const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Ejercicio 02: Slots Pattern</h1>
    <p>
      Descomenta los componentes en cada archivo para completar el ejercicio.
    </p>
  </div>
);

console.log('App.tsx cargado');
