// ============================================
// EJERCICIO 01: Children Básico
// Archivo: App.tsx - Aplicación de Demostración
// ============================================

import { useState } from 'react';
// Importa los componentes cuando estén implementados
// import { Card, CardWithFooter } from './Card';
// import { Alert } from './Alert';
// import { Container, Section } from './Container';
// import { MaybeLink, MaybeTooltip } from './ConditionalWrapper';

console.log('--- Paso 5: App de Demostración ---');

// ============================================
// APLICACIÓN DE DEMOSTRACIÓN
// ============================================

// Descomenta todo el componente App cuando hayas implementado
// todos los componentes anteriores:

// export const App = () => {
//   const [showAlert, setShowAlert] = useState(true);
//
//   return (
//     <Container maxWidth="lg">
//       <Section paddingY="lg">
//         <h1 style={{ marginBottom: '24px' }}>Ejercicio 01: Children Básico</h1>
//
//         {/* ===== Demostración de Card ===== */}
//         <h2>Componente Card</h2>
//         <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
//           <Card title="Card Simple">
//             <p>Este es el contenido del card.</p>
//             <p>Puede contener cualquier elemento React.</p>
//           </Card>
//
//           <Card>
//             <h4 style={{ margin: '0 0 8px 0' }}>Card sin título</h4>
//             <p style={{ margin: 0 }}>
//               El children puede ser cualquier cosa.
//             </p>
//           </Card>
//         </div>
//
//         {/* ===== Demostración de CardWithFooter ===== */}
//         <h2>Componente CardWithFooter</h2>
//         <div style={{ maxWidth: '400px', marginBottom: '32px' }}>
//           <CardWithFooter
//             title="Producto Destacado"
//             footer={
//               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                 <span style={{ fontWeight: 'bold' }}>$99.99</span>
//                 <button
//                   style={{
//                     backgroundColor: '#2196f3',
//                     color: 'white',
//                     border: 'none',
//                     padding: '8px 16px',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Comprar
//                 </button>
//               </div>
//             }
//           >
//             <p>Descripción del producto con múltiples características.</p>
//             <ul style={{ margin: 0, paddingLeft: '20px' }}>
//               <li>Característica 1</li>
//               <li>Característica 2</li>
//             </ul>
//           </CardWithFooter>
//         </div>
//
//         {/* ===== Demostración de Alert ===== */}
//         <h2>Componente Alert</h2>
//         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
//           <Alert variant="info" title="Información">
//             Este es un mensaje informativo para el usuario.
//           </Alert>
//
//           <Alert variant="success" title="¡Éxito!">
//             La operación se completó correctamente.
//           </Alert>
//
//           <Alert variant="warning">
//             Advertencia: Esta acción no se puede deshacer.
//           </Alert>
//
//           {showAlert && (
//             <Alert
//               variant="error"
//               title="Error"
//               dismissible
//               onDismiss={() => setShowAlert(false)}
//             >
//               Hubo un problema al procesar tu solicitud. Haz clic en × para cerrar.
//             </Alert>
//           )}
//         </div>
//
//         {/* ===== Demostración de MaybeLink ===== */}
//         <h2>Componente MaybeLink</h2>
//         <div style={{ marginBottom: '32px' }}>
//           <p>
//             Texto normal con{' '}
//             <MaybeLink href="https://react.dev">un enlace</MaybeLink>
//             {' '}y{' '}
//             <MaybeLink>texto sin enlace</MaybeLink>.
//           </p>
//         </div>
//
//         {/* ===== Demostración de MaybeTooltip ===== */}
//         <h2>Componente MaybeTooltip</h2>
//         <div style={{ marginBottom: '32px' }}>
//           <p>
//             Pasa el cursor sobre{' '}
//             <MaybeTooltip tooltip="¡Este es el tooltip!">
//               <strong>este texto</strong>
//             </MaybeTooltip>
//             {' '}o sobre{' '}
//             <MaybeTooltip>
//               <span>este otro sin tooltip</span>
//             </MaybeTooltip>.
//           </p>
//         </div>
//       </Section>
//     </Container>
//   );
// };

// Exportación temporal
export const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Ejercicio 01: Children Básico</h1>
    <p>
      Descomenta los componentes en cada archivo para completar el ejercicio.
    </p>
  </div>
);

console.log('App.tsx cargado');
