# Ejercicio 03: Layout Responsivo con Tailwind CSS

## 🎯 Objetivo

Crear un layout completo responsivo usando Tailwind CSS, aplicando el enfoque mobile-first y patrones de diseño adaptativo.

## ⏱️ Duración estimada

45 minutos

---

## 📋 Instrucciones

### Paso 1: Configurar Tailwind

Asegúrate de tener Tailwind configurado en tu proyecto Vite:

```bash
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

Configura `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### Paso 2: Crear el componente Header

Abre `starter/Header.tsx` y descomenta:

```tsx
/* ============================================
   PASO 2: Header responsivo
   Mobile: hamburger menu
   Desktop: navegación horizontal
   ============================================ */

// Descomenta el componente:
// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//   return (
//     <header className="bg-gray-900 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="text-xl font-bold text-blue-500">
//             MyApp
//           </div>
//
//           {/* Desktop Navigation */}
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
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 text-gray-400 hover:text-white"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? '✕' : '☰'}
//           </button>
//         </div>
//
//         {/* Mobile Navigation */}
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
```

---

### Paso 3: Crear el componente Sidebar

Abre `starter/Sidebar.tsx`:

```tsx
/* ============================================
   PASO 3: Sidebar adaptativa
   Mobile: oculta o bottom bar
   Desktop: sidebar lateral
   ============================================ */

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }
//
// const menuItems = [
//   { icon: '🏠', label: 'Dashboard', href: '#' },
//   { icon: '📦', label: 'Products', href: '#' },
//   { icon: '👥', label: 'Customers', href: '#' },
//   { icon: '📊', label: 'Analytics', href: '#' },
//   { icon: '⚙️', label: 'Settings', href: '#' },
// ];
//
// export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   return (
//     <>
//       {/* Overlay para móvil */}
//       {isOpen && (
//         <div
//           className="lg:hidden fixed inset-0 bg-black/50 z-40"
//           onClick={onClose}
//         />
//       )}
//
//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed lg:static
//           inset-y-0 left-0
//           w-64 lg:w-64
//           bg-gray-900 border-r border-gray-800
//           transform transition-transform duration-300
//           ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//           z-50 lg:z-auto
//         `}
//       >
//         <div className="p-4">
//           <h2 className="text-lg font-semibold text-white mb-4">Menu</h2>
//           <nav className="flex flex-col gap-2">
//             {menuItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="
//                   flex items-center gap-3 px-3 py-2
//                   text-gray-300 hover:text-white
//                   hover:bg-gray-800 rounded-lg
//                   transition-colors
//                 "
//               >
//                 <span>{item.icon}</span>
//                 <span>{item.label}</span>
//               </a>
//             ))}
//           </nav>
//         </div>
//       </aside>
//     </>
//   );
// };
```

---

### Paso 4: Crear Grid de Cards responsivo

Abre `starter/CardGrid.tsx`:

```tsx
/* ============================================
   PASO 4: Grid responsivo de cards
   1 col en móvil, 2 en tablet, 3 en desktop
   ============================================ */

// interface CardData {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }
//
// interface CardGridProps {
//   cards: CardData[];
// }
//
// export const CardGrid: React.FC<CardGridProps> = ({ cards }) => {
//   return (
//     <div className="
//       grid
//       grid-cols-1
//       sm:grid-cols-2
//       lg:grid-cols-3
//       gap-4 sm:gap-6
//       p-4 sm:p-6
//     ">
//       {cards.map((card) => (
//         <article
//           key={card.id}
//           className="
//             bg-gray-800 rounded-lg overflow-hidden
//             border border-gray-700
//             hover:border-blue-500
//             transition-colors
//           "
//         >
//           {/* Imagen con aspect ratio */}
//           <div className="aspect-video bg-gray-700">
//             <img
//               src={card.image}
//               alt={card.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//
//           {/* Contenido */}
//           <div className="p-4">
//             <h3 className="
//               text-lg sm:text-xl
//               font-semibold text-white
//               mb-2
//             ">
//               {card.title}
//             </h3>
//             <p className="
//               text-sm sm:text-base
//               text-gray-400
//               line-clamp-2
//             ">
//               {card.description}
//             </p>
//             <button className="
//               mt-4 w-full
//               py-2 px-4
//               bg-blue-600 hover:bg-blue-700
//               text-white text-sm
//               rounded-lg
//               transition-colors
//             ">
//               Ver más
//             </button>
//           </div>
//         </article>
//       ))}
//     </div>
//   );
// };
```

---

### Paso 5: Crear el Layout principal

Abre `starter/Layout.tsx`:

```tsx
/* ============================================
   PASO 5: Layout completo con sidebar
   ============================================ */

// interface LayoutProps {
//   children: React.ReactNode;
// }
//
// export const Layout: React.FC<LayoutProps> = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//
//   return (
//     <div className="min-h-screen bg-gray-950 text-white">
//       {/* Header */}
//       <Header />
//
//       {/* Container principal */}
//       <div className="flex">
//         {/* Sidebar (oculta en móvil por defecto) */}
//         <Sidebar
//           isOpen={sidebarOpen}
//           onClose={() => setSidebarOpen(false)}
//         />
//
//         {/* Main content */}
//         <main className="flex-1 min-h-[calc(100vh-64px)]">
//           {/* Mobile sidebar toggle */}
//           <button
//             className="lg:hidden fixed bottom-4 right-4 z-30 p-4 bg-blue-600 rounded-full shadow-lg"
//             onClick={() => setSidebarOpen(true)}
//           >
//             ☰
//           </button>
//
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };
```

---

### Paso 6: Página de ejemplo

```tsx
// App.tsx
import { Layout } from './Layout';
import { CardGrid } from './CardGrid';

const sampleCards = [
  {
    id: 1,
    title: 'Card 1',
    description: 'Descripción de la card 1',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'Descripción de la card 2',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'Descripción de la card 3',
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'Descripción de la card 4',
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    title: 'Card 5',
    description: 'Descripción de la card 5',
    image: '/placeholder.jpg',
  },
  {
    id: 6,
    title: 'Card 6',
    description: 'Descripción de la card 6',
    image: '/placeholder.jpg',
  },
];

function App() {
  return (
    <Layout>
      <div className="p-4 lg:p-8">
        <h1 className="text-2xl lg:text-4xl font-bold mb-6">Dashboard</h1>
        <CardGrid cards={sampleCards} />
      </div>
    </Layout>
  );
}
```

---

## ✅ Criterios de Evaluación

- [ ] El header muestra hamburger en móvil y nav horizontal en desktop
- [ ] La sidebar es overlay en móvil y fija en desktop
- [ ] El grid de cards adapta columnas según el viewport
- [ ] Se usa enfoque mobile-first (sin prefijo = móvil)
- [ ] Las transiciones son suaves entre breakpoints

---

## 🔑 Conceptos Clave

1. **Prefijos responsive**: `sm:`, `md:`, `lg:`, `xl:` aplican desde ese breakpoint
2. **`hidden md:block`**: Oculto en móvil, visible desde tablet
3. **`lg:hidden`**: Visible hasta desktop, luego oculto
4. **Grid responsive**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
