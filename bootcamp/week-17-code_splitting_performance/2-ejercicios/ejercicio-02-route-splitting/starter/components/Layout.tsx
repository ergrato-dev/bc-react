// ============================================
// EJERCICIO 02: Layout Component (STARTER)
// ============================================
// Layout con navegación para las rutas

import { type FC, type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

// ============================================
// TIPOS
// ============================================
interface LayoutProps {
  children: ReactNode;
}

// ============================================
// COMPONENTE LAYOUT
// ============================================
// Descomenta el componente:
// const Layout: FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="layout">
//       <header className="header">
//         <nav className="nav">
//           <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
//             Home
//           </NavLink>
//           <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
//             Products
//           </NavLink>
//           <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
//             Profile
//           </NavLink>
//           <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
//             Settings
//           </NavLink>
//         </nav>
//       </header>
//
//       <main className="main">
//         {children}
//       </main>
//
//       <footer className="footer">
//         <p>Route Splitting Demo</p>
//       </footer>
//     </div>
//   );
// };

// Placeholder
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink> |{' '}
        <NavLink to="/products">Products</NavLink> |{' '}
        <NavLink to="/profile">Profile</NavLink> |{' '}
        <NavLink to="/settings">Settings</NavLink>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
