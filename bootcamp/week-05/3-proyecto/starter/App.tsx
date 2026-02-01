// ============================================
// PROYECTO SEMANA 05: Sistema de Configuración UI
// Archivo: App.tsx
// ============================================

// import { ConfigProvider } from './contexts/ConfigContext';
// import { Layout } from './components/Layout/Layout';
// import { SettingsPanel } from './components/SettingsPanel/SettingsPanel';
// import { Card } from './components/Card/Card';

// ============================================
// DATOS DE EJEMPLO (ADAPTAR A TU DOMINIO)
// ============================================

// Ejemplo para dominio "Biblioteca":
// const sampleBooks = [
//   { id: '1', title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
//   { id: '2', title: 'The Pragmatic Programmer', author: 'David Thomas', year: 1999 },
//   { id: '3', title: 'Design Patterns', author: 'Gang of Four', year: 1994 },
// ];

// TODO: Adapta los datos a tu dominio asignado

// ============================================
// CONTENIDO PRINCIPAL (ADAPTAR A TU DOMINIO)
// ============================================

// const MainContent = () => {
//   return (
//     <div>
//       <h1>Mi Aplicación - [Tu Dominio]</h1>
//       <p>
//         Esta aplicación demuestra el uso de Context API y Compound Components
//         para crear una interfaz configurable.
//       </p>
//
//       {/* Cards con datos del dominio */}
//       <div className="grid">
//         {sampleBooks.map((book) => (
//           <Card key={book.id}>
//             <Card.Header>
//               <Card.Title>{book.title}</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <p>Autor: {book.author}</p>
//               <p>Año: {book.year}</p>
//             </Card.Body>
//             <Card.Footer>
//               <Card.Actions>
//                 <button>Ver detalles</button>
//               </Card.Actions>
//             </Card.Footer>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// ============================================
// APLICACIÓN PRINCIPAL
// ============================================

// TODO: Implementa la aplicación con ConfigProvider y Layout
// export const App = () => {
//   return (
//     <ConfigProvider>
//       <Layout sidebar={<SettingsPanel />}>
//         <MainContent />
//       </Layout>
//     </ConfigProvider>
//   );
// };

// Exportación temporal
export const App = () => (
  <div style={{ padding: '20px' }}>
    <h1>Proyecto Semana 05: Sistema de Configuración UI</h1>
    <p>
      Implementa los componentes en cada archivo para completar el proyecto.
    </p>
    <ul>
      <li>contexts/ConfigContext.tsx - Context de configuración</li>
      <li>components/Card/Card.tsx - Compound Component Card</li>
      <li>components/Form/Form.tsx - Compound Component Form</li>
      <li>
        components/SettingsPanel/SettingsPanel.tsx - Panel de configuración
      </li>
      <li>components/Layout/Layout.tsx - Layout principal</li>
      <li>hooks/useLocalStorage.ts - Hook de persistencia</li>
    </ul>
  </div>
);
