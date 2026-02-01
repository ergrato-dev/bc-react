// ============================================
// EJERCICIO 05: Context Avanzado - SOLUCIÓN
// Archivo: CartContext.tsx
// ============================================

import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from 'react';

// ============================================
// PASO 1: Definir Tipos
// ============================================

// QUÉ: Tipos para producto y carrito
// PARA: Modelar el dominio del carrito de compras
// IMPACTO: TypeScript valida todas las operaciones

interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// ============================================
// PASO 2: Definir Actions con Discriminated Union
// ============================================

// QUÉ: Discriminated union para acciones del reducer
// PARA: TypeScript puede narrowing automático por 'type'
// IMPACTO: Autocompletado de payload según acción

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// ============================================
// PASO 3: Implementar Reducer
// ============================================

// QUÉ: Reducer puro que calcula nuevo estado
// PARA: Transiciones de estado predecibles
// IMPACTO: Debugging fácil, state history posible

const calculateTotals = (
  items: CartItem[],
): { total: number; itemCount: number } => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { total, itemCount };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );

      let newItems: CartItem[];
      if (existingIndex >= 0) {
        // Producto ya existe, incrementar cantidad
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        // Producto nuevo
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return { items: newItems, ...calculateTotals(newItems) };
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      return { items: newItems, ...calculateTotals(newItems) };
    }

    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        const newItems = state.items.filter((item) => item.id !== id);
        return { items: newItems, ...calculateTotals(newItems) };
      }
      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item,
      );
      return { items: newItems, ...calculateTotals(newItems) };
    }

    case 'CLEAR_CART':
      return { items: [], total: 0, itemCount: 0 };

    default:
      return state;
  }
};

// ============================================
// PASO 4: Crear Contextos y Hooks
// ============================================

// QUÉ: Contextos separados para State y Dispatch
// PARA: Optimización - componentes que solo dispatch no re-renderizan
// IMPACTO: Mejor rendimiento en apps con muchos consumidores

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<Dispatch<CartAction> | undefined>(
  undefined,
);

export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
};

// Hook conveniente que combina ambos
export const useCart = () => {
  return {
    ...useCartState(),
    dispatch: useCartDispatch(),
  };
};

// ============================================
// PASO 5: Implementar Provider
// ============================================

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// ============================================
// PASO 6: Action Creators (Opcional pero recomendado)
// ============================================

// QUÉ: Funciones que crean acciones
// PARA: API más limpia y type-safe
// IMPACTO: Evita errores de typo en 'type' strings

export const cartActions = {
  addItem: (product: Product): CartAction => ({
    type: 'ADD_ITEM',
    payload: product,
  }),
  removeItem: (id: string): CartAction => ({
    type: 'REMOVE_ITEM',
    payload: id,
  }),
  updateQuantity: (id: string, quantity: number): CartAction => ({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  }),
  clearCart: (): CartAction => ({
    type: 'CLEAR_CART',
  }),
};
