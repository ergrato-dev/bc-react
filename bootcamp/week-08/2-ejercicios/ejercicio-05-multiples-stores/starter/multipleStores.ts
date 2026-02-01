// ============================================
// EJERCICIO 05: Múltiples Stores
// ============================================

import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

// ============================================
// PASO 1: Store de Usuario
// ============================================
console.log('--- Paso 1: Auth Store ---');

// QUÉ: Store dedicado a autenticación
// PARA: Separar responsabilidades
// IMPACTO: Código organizado por dominio

// Descomenta las siguientes líneas:
// interface User {
//   id: number;
//   name: string;
//   email: string;
// }
//
// interface AuthStore {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (user: User) => void;
//   logout: () => void;
// }
//
// const useAuthStore = create<AuthStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         user: null,
//         isAuthenticated: false,
//
//         login: (user) => set(
//           { user, isAuthenticated: true },
//           false,
//           'auth/login' // Nombre de acción en DevTools
//         ),
//
//         logout: () => set(
//           { user: null, isAuthenticated: false },
//           false,
//           'auth/logout'
//         ),
//       }),
//       { name: 'auth-storage' }
//     ),
//     { name: 'AuthStore' }
//   )
// );

console.log('useAuthStore con devtools + persist');
console.log('');

// ============================================
// PASO 2: Store del Carrito
// ============================================
console.log('--- Paso 2: Cart Store ---');

// QUÉ: Store dedicado al carrito de compras
// PARA: Gestionar items y totales
// IMPACTO: Lógica de carrito aislada

// Descomenta las siguientes líneas:
// interface CartItem {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// }
//
// interface CartStore {
//   items: CartItem[];
//   addItem: (item: Omit<CartItem, 'quantity'>) => void;
//   removeItem: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void;
//   clearCart: () => void;
//   getTotal: () => number;
//   getItemCount: () => number;
// }
//
// const useCartStore = create<CartStore>()(
//   devtools(
//     persist(
//       (set, get) => ({
//         items: [],
//
//         addItem: (item) => set((state) => {
//           const existingIndex = state.items.findIndex((i) => i.id === item.id);
//
//           if (existingIndex !== -1) {
//             const newItems = [...state.items];
//             newItems[existingIndex].quantity += 1;
//             return { items: newItems };
//           }
//
//           return { items: [...state.items, { ...item, quantity: 1 }] };
//         }, false, 'cart/addItem'),
//
//         removeItem: (id) => set(
//           (state) => ({
//             items: state.items.filter((i) => i.id !== id),
//           }),
//           false,
//           'cart/removeItem'
//         ),
//
//         updateQuantity: (id, quantity) => set((state) => ({
//           items: quantity <= 0
//             ? state.items.filter((i) => i.id !== id)
//             : state.items.map((i) =>
//                 i.id === id ? { ...i, quantity } : i
//               ),
//         }), false, 'cart/updateQuantity'),
//
//         clearCart: () => set({ items: [] }, false, 'cart/clear'),
//
//         getTotal: () => {
//           const { items } = get();
//           return items.reduce((sum, i) => sum + i.price * i.quantity, 0);
//         },
//
//         getItemCount: () => {
//           const { items } = get();
//           return items.reduce((sum, i) => sum + i.quantity, 0);
//         },
//       }),
//       { name: 'cart-storage' }
//     ),
//     { name: 'CartStore' }
//   )
// );

console.log('useCartStore con devtools + persist');
console.log('');

// ============================================
// PASO 3: Store de UI
// ============================================
console.log('--- Paso 3: UI Store ---');

// QUÉ: Store para estado de UI global
// PARA: Modales, sidebars, temas, etc.
// IMPACTO: UI consistente en toda la app

// Descomenta las siguientes líneas:
// interface UIStore {
//   sidebarOpen: boolean;
//   theme: 'light' | 'dark';
//   activeModal: string | null;
//
//   toggleSidebar: () => void;
//   setTheme: (theme: 'light' | 'dark') => void;
//   openModal: (modalId: string) => void;
//   closeModal: () => void;
// }
//
// const useUIStore = create<UIStore>()(
//   devtools(
//     persist(
//       (set) => ({
//         sidebarOpen: true,
//         theme: 'light',
//         activeModal: null,
//
//         toggleSidebar: () => set(
//           (s) => ({ sidebarOpen: !s.sidebarOpen }),
//           false,
//           'ui/toggleSidebar'
//         ),
//
//         setTheme: (theme) => set(
//           { theme },
//           false,
//           'ui/setTheme'
//         ),
//
//         openModal: (modalId) => set(
//           { activeModal: modalId },
//           false,
//           'ui/openModal'
//         ),
//
//         closeModal: () => set(
//           { activeModal: null },
//           false,
//           'ui/closeModal'
//         ),
//       }),
//       {
//         name: 'ui-storage',
//         // Solo persistir tema, no modales
//         partialize: (state) => ({
//           sidebarOpen: state.sidebarOpen,
//           theme: state.theme,
//         }),
//       }
//     ),
//     { name: 'UIStore' }
//   )
// );

console.log('useUIStore con devtools + persist selectivo');
console.log('');

// ============================================
// PASO 4: Comunicación Entre Stores
// ============================================
console.log('--- Paso 4: Comunicación ---');

// QUÉ: Un store puede acceder a otro
// PARA: Acciones que afectan múltiples dominios
// IMPACTO: Lógica coordinada entre stores

// Descomenta las siguientes líneas:
// interface CheckoutStore {
//   isProcessing: boolean;
//   lastOrderId: string | null;
//
//   processCheckout: () => Promise<void>;
// }
//
// const useCheckoutStore = create<CheckoutStore>()(
//   devtools(
//     (set) => ({
//       isProcessing: false,
//       lastOrderId: null,
//
//       processCheckout: async () => {
//         // Acceder a otros stores
//         const auth = useAuthStore.getState();
//         const cart = useCartStore.getState();
//
//         if (!auth.isAuthenticated) {
//           throw new Error('Debe iniciar sesión');
//         }
//
//         if (cart.items.length === 0) {
//           throw new Error('El carrito está vacío');
//         }
//
//         set({ isProcessing: true }, false, 'checkout/start');
//
//         try {
//           // Simular API call
//           await new Promise((resolve) => setTimeout(resolve, 1000));
//
//           const orderId = `ORD-${Date.now()}`;
//
//           // Limpiar carrito después de checkout
//           cart.clearCart();
//
//           set(
//             { isProcessing: false, lastOrderId: orderId },
//             false,
//             'checkout/success'
//           );
//         } catch (error) {
//           set({ isProcessing: false }, false, 'checkout/error');
//           throw error;
//         }
//       },
//     }),
//     { name: 'CheckoutStore' }
//   )
// );

console.log('useCheckoutStore accede a auth y cart');
console.log('');

// ============================================
// PASO 5: Componentes que Usan Múltiples Stores
// ============================================
console.log('--- Paso 5: Componentes ---');

// Descomenta las siguientes líneas:
// const Header: React.FC = () => {
//   const user = useAuthStore((s) => s.user);
//   const logout = useAuthStore((s) => s.logout);
//   const itemCount = useCartStore((s) => s.getItemCount());
//   const toggleSidebar = useUIStore((s) => s.toggleSidebar);
//
//   return (
//     <header>
//       <button onClick={toggleSidebar}>☰</button>
//       <span>🛒 {itemCount}</span>
//       {user ? (
//         <>
//           <span>Hola, {user.name}</span>
//           <button onClick={logout}>Cerrar sesión</button>
//         </>
//       ) : (
//         <span>Invitado</span>
//       )}
//     </header>
//   );
// };
//
// const CheckoutButton: React.FC = () => {
//   const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
//   const itemCount = useCartStore((s) => s.getItemCount());
//   const { isProcessing, processCheckout } = useCheckoutStore();
//   const openModal = useUIStore((s) => s.openModal);
//
//   const handleCheckout = async () => {
//     if (!isAuthenticated) {
//       openModal('login');
//       return;
//     }
//
//     try {
//       await processCheckout();
//       openModal('order-success');
//     } catch (error) {
//       openModal('error');
//     }
//   };
//
//   return (
//     <button
//       onClick={handleCheckout}
//       disabled={isProcessing || itemCount === 0}
//     >
//       {isProcessing ? 'Procesando...' : 'Finalizar compra'}
//     </button>
//   );
// };

console.log('Componentes usando múltiples stores');
console.log('');

// ============================================
// VERIFICACIÓN FINAL
// ============================================
console.log('='.repeat(50));
console.log('✅ Ejercicio 05 completado');
console.log('Aprendiste:');
console.log('  - Separar stores por dominio');
console.log('  - Usar devtools para debugging');
console.log('  - Combinar devtools + persist');
console.log('  - Comunicar stores entre sí');
console.log('  - Usar múltiples stores en componentes');
console.log('='.repeat(50));
