// ============================================
// EJERCICIO 02: Animaciones con Framer Motion
// Archivo: Animations.tsx (starter)
// ============================================

// import { motion, AnimatePresence } from 'framer-motion';
// import { Loader2 } from 'lucide-react';

// ============================================
// PASO 1: FadeIn Component
// ============================================
// Descomenta y completa el componente:

// type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

// interface FadeInProps {
//   children: React.ReactNode;
//   delay?: number;
//   duration?: number;
//   direction?: Direction;
//   className?: string;
// }

// Función helper para calcular el offset inicial según dirección
// const getDirectionOffset = (direction: Direction) => {
//   switch (direction) {
//     case 'up': return { y: 20 };
//     case 'down': return { y: -20 };
//     case 'left': return { x: 20 };
//     case 'right': return { x: -20 };
//     default: return {};
//   }
// };

// export function FadeIn({
//   children,
//   delay = 0,
//   duration = 0.5,
//   direction = 'none',
//   className,
// }: FadeInProps) {
//   // TODO: Usar motion.div con:
//   // - initial: opacity 0 + offset según direction
//   // - animate: opacity 1 + posición original
//   // - transition: duration y delay configurables
//   return null;
// }

// ============================================
// PASO 2: AnimatedCard con gestos
// ============================================
// Descomenta y completa:

// interface AnimatedCardProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export function AnimatedCard({ children, className }: AnimatedCardProps) {
//   // TODO: Usar motion.div con:
//   // - whileHover: scale 1.02, shadow más grande
//   // - whileTap: scale 0.98
//   // - transition: tipo spring
//   return null;
// }

// ============================================
// PASO 3: AnimatedList con stagger
// ============================================
// Descomenta y completa:

// interface AnimatedListProps<T> {
//   items: T[];
//   renderItem: (item: T, index: number) => React.ReactNode;
//   keyExtractor: (item: T) => string | number;
//   className?: string;
// }

// Variants para el contenedor (stagger children)
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// Variants para cada item
// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -20 },
// };

// export function AnimatedList<T>({
//   items,
//   renderItem,
//   keyExtractor,
//   className,
// }: AnimatedListProps<T>) {
//   // TODO: Implementar usando:
//   // - motion.ul con containerVariants
//   // - AnimatePresence para manejar salidas
//   // - motion.li con itemVariants para cada item
//   return null;
// }

// ============================================
// PASO 4: AnimatedButton con loading
// ============================================
// Descomenta y completa:

// interface AnimatedButtonProps {
//   children: React.ReactNode;
//   loading?: boolean;
//   onClick?: () => void;
//   className?: string;
// }

// export function AnimatedButton({
//   children,
//   loading = false,
//   onClick,
//   className,
// }: AnimatedButtonProps) {
//   // TODO: Implementar con:
//   // - motion.button con whileHover y whileTap
//   // - AnimatePresence para transición del contenido
//   // - Spinner animado durante loading
//   // - disabled cuando loading es true
//   return null;
// }

// ============================================
// EXPORTS para testing
// ============================================
export {};
