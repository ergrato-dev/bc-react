/* ============================================
   EJERCICIO 03: Layout Responsivo con Tailwind
   Archivo: Layout.tsx (starter)
   ============================================ */

// import { useState } from 'react';
// import { Header } from './Header';
// import { Sidebar } from './Sidebar';

// ============================================
// PASO 5: Layout completo
// Combina Header, Sidebar y contenido principal
// con comportamiento responsivo
// ============================================

// interface LayoutProps {
//   children: React.ReactNode;
// }

// Descomenta el componente:
// export const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//
//   return (
//     <div className="min-h-screen bg-gray-950 text-white">
//       {/* Header fijo en la parte superior */}
//       <Header />
//
//       {/* Container con sidebar + main */}
//       <div className="flex">
//         {/* Sidebar: controlada por estado en móvil, siempre visible en lg */}
//         <Sidebar
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//         />
//
//         {/* Contenido principal */}
//         <main className="flex-1 min-h-[calc(100vh-64px)]">
//           {/* FAB para abrir sidebar en móvil */}
//           <button
//             className="
//               lg:hidden
//               fixed bottom-4 right-4 z-30
//               p-4 bg-blue-600 hover:bg-blue-700
//               text-white text-xl
//               rounded-full shadow-lg
//               transition-colors
//             "
//             onClick={() => setSidebarOpen(true)}
//             aria-label="Open menu"
//           >
//             ☰
//           </button>
//
//           {/* Slot para contenido de la página */}
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

export {};
