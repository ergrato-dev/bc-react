// ============================================
// EJERCICIO 02: Animaciones con Framer Motion
// Archivo: Animations.tsx (solution)
// ============================================

import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Loader2 } from 'lucide-react';

// ============================================
// PASO 1: FadeIn Component
// ============================================

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
}

// Función helper para calcular el offset inicial según dirección
const getDirectionOffset = (direction: Direction) => {
  switch (direction) {
    case 'up':
      return { y: 20 };
    case 'down':
      return { y: -20 };
    case 'left':
      return { x: 20 };
    case 'right':
      return { x: -20 };
    default:
      return {};
  }
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'none',
  className,
}: FadeInProps) {
  const offset = getDirectionOffset(direction);

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}>
      {children}
    </motion.div>
  );
}

// ============================================
// PASO 2: AnimatedCard con gestos
// ============================================

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedCard({ children, className }: AnimatedCardProps) {
  return (
    <motion.div
      className={`
        rounded-xl bg-gray-800 p-6 
        border border-gray-700
        cursor-pointer
        ${className ?? ''}
      `}
      whileHover={{
        scale: 1.02,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
      }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}>
      {children}
    </motion.div>
  );
}

// ============================================
// PASO 3: AnimatedList con stagger
// ============================================

interface AnimatedListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  className?: string;
}

// Variants para el contenedor (stagger children)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants para cada item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2 },
  },
};

export function AnimatedList<T>({
  items,
  renderItem,
  keyExtractor,
  className,
}: AnimatedListProps<T>) {
  return (
    <motion.ul
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <motion.li
            key={keyExtractor(item)}
            variants={itemVariants}
            exit="exit"
            layout>
            {renderItem(item, index)}
          </motion.li>
        ))}
      </AnimatePresence>
    </motion.ul>
  );
}

// ============================================
// PASO 4: AnimatedButton con loading
// ============================================

interface AnimatedButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  onClick?: () => void;
  className?: string;
}

export function AnimatedButton({
  children,
  loading = false,
  onClick,
  className,
}: AnimatedButtonProps) {
  return (
    <motion.button
      className={`
        relative px-6 py-3 rounded-lg
        bg-blue-600 text-white font-medium
        disabled:opacity-70 disabled:cursor-not-allowed
        overflow-hidden
        ${className ?? ''}
      `}
      whileHover={{ scale: loading ? 1 : 1.02 }}
      whileTap={{ scale: loading ? 1 : 0.98 }}
      onClick={onClick}
      disabled={loading}>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.span
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'linear',
              }}>
              <Loader2 size={18} />
            </motion.span>
            Cargando...
          </motion.span>
        ) : (
          <motion.span
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
