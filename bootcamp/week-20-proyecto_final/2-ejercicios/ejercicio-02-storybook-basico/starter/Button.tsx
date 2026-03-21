// ============================================
// COMPONENTE: Button
// Botón reutilizable con variantes
// ============================================

// Descomenta el código para implementar el componente:

// interface ButtonProps {
//   /** Texto del botón */
//   children: React.ReactNode;
//   /** Variante visual del botón */
//   variant?: 'primary' | 'secondary' | 'danger';
//   /** Tamaño del botón */
//   size?: 'sm' | 'md' | 'lg';
//   /** Estado deshabilitado */
//   disabled?: boolean;
//   /** Callback al hacer click */
//   onClick?: () => void;
// }
//
// export const Button: React.FC<ButtonProps> = ({
//   children,
//   variant = 'primary',
//   size = 'md',
//   disabled = false,
//   onClick,
// }) => {
//   // Clases base
//   const baseClasses = 'font-medium rounded transition-colors focus:outline-none focus:ring-2';
//
//   // Clases por variante
//   const variantClasses = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
//     secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500',
//     danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
//   };
//
//   // Clases por tamaño
//   const sizeClasses = {
//     sm: 'px-3 py-1.5 text-sm',
//     md: 'px-4 py-2 text-base',
//     lg: 'px-6 py-3 text-lg',
//   };
//
//   return (
//     <button
//       className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}
//                   ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };
