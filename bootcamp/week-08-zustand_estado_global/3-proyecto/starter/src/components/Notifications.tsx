// ============================================
// COMPONENTE: Notifications
// Sistema de notificaciones
// ============================================

import { useEffect } from 'react';
import { useUIStore } from '../stores/uiStore';

export const Notifications: React.FC = () => {
  const notifications = useUIStore((s) => s.notifications);
  const removeNotification = useUIStore((s) => s.removeNotification);

  // Auto-remover notificaciones después de un tiempo
  useEffect(() => {
    notifications.forEach((notification) => {
      const duration = notification.duration || 3000;
      const timer = setTimeout(() => {
        removeNotification(notification.id);
      }, duration);

      return () => clearTimeout(timer);
    });
  }, [notifications, removeNotification]);

  if (notifications.length === 0) return null;

  return (
    <div className="notifications">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification notification-${notification.type}`}>
          <span>{notification.message}</span>
          <button onClick={() => removeNotification(notification.id)}>✕</button>
        </div>
      ))}
    </div>
  );
};
