/* ============================================
   EJERCICIO 03: Layout Responsivo con Tailwind
   Archivo: Header.tsx (starter)
   ============================================ */

// import { useState } from 'react';

// ============================================
// PASO 2: Header responsivo
// Usa clases responsive de Tailwind para mostrar
// hamburger en móvil y nav horizontal en desktop
// ============================================

// Descomenta el componente:
// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//   return (
//     <header className="bg-gray-900 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo: siempre visible */}
//           <div className="text-xl font-bold text-blue-500">
//             MyApp
//           </div>
//
//           {/* Desktop Navigation: hidden en móvil, flex desde md */}
//           <nav className="hidden md:flex items-center gap-6">
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Home
//             </a>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               Products
//             </a>
//             <a href="#" className="text-gray-300 hover:text-white transition-colors">
//               About
//             </a>
//             <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
//               Sign In
//             </button>
//           </nav>
//
//           {/* Mobile Menu Button: visible solo en móvil */}
//           <button
//             className="md:hidden p-2 text-gray-400 hover:text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? '✕' : '☰'}
//           </button>
//         </div>
//
//         {/* Mobile Navigation: solo visible cuando isMenuOpen=true */}
//         {isMenuOpen && (
//           <nav className="md:hidden py-4 border-t border-gray-800">
//             <div className="flex flex-col gap-4">
//               <a href="#" className="text-gray-300 hover:text-white">Home</a>
//               <a href="#" className="text-gray-300 hover:text-white">Products</a>
//               <a href="#" className="text-gray-300 hover:text-white">About</a>
//               <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
//                 Sign In
//               </button>
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

export {};
