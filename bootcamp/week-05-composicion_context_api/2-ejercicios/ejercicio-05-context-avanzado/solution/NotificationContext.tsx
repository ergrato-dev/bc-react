// ============================================
// EJERCICIO 05: Context Avanzado - SOLUCIÓN
// Archivo: NotificationContext.tsx
// ============================================

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from 'react';

// ============================================
// PASO 1: Definir Tipos
// ============================================

// QUÉ: Tipos para notificaciones con severidad
// PARA: Sistema de alertas tipado y consistente
// IMPACTO: UI clara para diferentes tipos de mensajes

type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  duration?: number; // ms, undefined = no auto-dismiss
}

interface NotificationState {
  notifications: Notification[];
}

type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string };

// ============================================
// PASO 2: Implementar Reducer
// ============================================

const notificationReducer = (
  state: NotificationState,
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return {
        notifications: [...state.notifications, action.payload],
      };
    case 'REMOVE_NOTIFICATION':
      return {
        notifications: state.notifications.filter(
          (n) => n.id !== action.payload,
        ),
      };
    default:
      return state;
  }
};

// ============================================
// PASO 3: Crear Context y Hooks
// ============================================

// QUÉ: Interface del contexto con métodos helper
// PARA: API ergonómica para mostrar notificaciones
// IMPACTO: Fácil de usar: notify.success('Guardado!')

interface NotificationContextValue {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  // Métodos de conveniencia
  success: (message: string, duration?: number) => void;
  error: (message: string, duration?: number) => void;
  warning: (message: string, duration?: number) => void;
  info: (message: string, duration?: number) => void;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(
  undefined,
);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error(
      'useNotifications must be used within a NotificationProvider',
    );
  }
  return context;
};

// ============================================
// PASO 4: Implementar Provider con Auto-dismiss
// ============================================

// QUÉ: Provider que maneja auto-dismiss de notificaciones
// PARA: UX limpia sin acumulación de mensajes
// IMPACTO: Notificaciones desaparecen automáticamente

const generateId = () => Math.random().toString(36).substring(2, 9);

interface NotificationProviderProps {
  children: ReactNode;
  defaultDuration?: number;
}

export const NotificationProvider = ({
  children,
  defaultDuration = 5000,
}: NotificationProviderProps) => {
  const [state, dispatch] = useReducer(notificationReducer, {
    notifications: [],
  });

  const removeNotification = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const addNotification = useCallback(
    (notification: Omit<Notification, 'id'>) => {
      const id = generateId();
      const duration = notification.duration ?? defaultDuration;

      dispatch({
        type: 'ADD_NOTIFICATION',
        payload: { ...notification, id, duration },
      });

      // Auto-dismiss si tiene duración
      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id);
        }, duration);
      }
    },
    [defaultDuration, removeNotification],
  );

  // Métodos de conveniencia
  const success = useCallback(
    (message: string, duration?: number) =>
      addNotification({ type: 'success', message, duration }),
    [addNotification],
  );

  const error = useCallback(
    (message: string, duration?: number) =>
      addNotification({ type: 'error', message, duration }),
    [addNotification],
  );

  const warning = useCallback(
    (message: string, duration?: number) =>
      addNotification({ type: 'warning', message, duration }),
    [addNotification],
  );

  const info = useCallback(
    (message: string, duration?: number) =>
      addNotification({ type: 'info', message, duration }),
    [addNotification],
  );

  return (
    <NotificationContext.Provider
      value={{
        notifications: state.notifications,
        addNotification,
        removeNotification,
        success,
        error,
        warning,
        info,
      }}>
      {children}
    </NotificationContext.Provider>
  );
};
