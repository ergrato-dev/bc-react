/* ============================================
   PROYECTO SEMANAL: Sistema de Cards Multi-Estrategia
   Archivo: App.tsx (starter)
   
   Página comparativa de las 3 implementaciones
   ============================================ */

// TODO: Importar componentes
// import { Card as CardCSSModules } from './components/css-modules/Card';
// import { Card as CardStyled } from './components/styled/Card';
// import { Card as CardTailwind } from './components/tailwind/Card';
// import { ThemeProvider } from 'styled-components';
// import { theme } from './components/styled/theme';

// ============================================
// TODO: Datos de ejemplo para tu dominio
// Adapta estos datos a tu dominio asignado
// ============================================

// const sampleData = [
//   {
//     id: 1,
//     title: 'Título del item 1',
//     subtitle: 'Subtítulo',
//     description: 'Descripción detallada del item...',
//     image: 'https://via.placeholder.com/400x225',
//     // TODO: Agregar campos de tu dominio
//   },
//   {
//     id: 2,
//     title: 'Título del item 2',
//     subtitle: 'Subtítulo',
//     description: 'Otra descripción detallada...',
//     image: 'https://via.placeholder.com/400x225',
//   },
// ];

// ============================================
// TODO: Implementar componente App
// ============================================

// function App() {
//   const handleAction = (id: number) => {
//     console.log('Action clicked for item:', id);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div className="min-h-screen bg-gray-950 text-white p-8">
//         <h1 className="text-3xl font-bold mb-8 text-center">
//           Comparativa de Estrategias de Estilos
//         </h1>
//
//         {/* TODO: Sección CSS Modules */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-400">
//             CSS Modules
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sampleData.map((item) => (
//               <CardCSSModules
//                 key={item.id}
//                 item={item}
//                 variant="elevated"
//                 onAction={handleAction}
//               />
//             ))}
//           </div>
//         </section>
//
//         {/* TODO: Sección Styled Components */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-pink-400">
//             Styled Components
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sampleData.map((item) => (
//               <CardStyled
//                 key={item.id}
//                 item={item}
//                 variant="elevated"
//                 onAction={handleAction}
//               />
//             ))}
//           </div>
//         </section>
//
//         {/* TODO: Sección Tailwind CSS */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
//             Tailwind CSS
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sampleData.map((item) => (
//               <CardTailwind
//                 key={item.id}
//                 item={item}
//                 variant="elevated"
//                 onAction={handleAction}
//               />
//             ))}
//           </div>
//         </section>
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;

export {};
