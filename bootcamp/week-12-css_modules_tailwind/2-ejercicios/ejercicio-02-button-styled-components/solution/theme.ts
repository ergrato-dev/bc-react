/* ============================================
   EJERCICIO 02: Sistema de Botones
   Archivo: theme.ts (solution)
   ============================================ */

export const theme = {
  colors: {
    primary: '#3178C6',
    primaryHover: '#2563eb',
    secondary: '#6b7280',
    secondaryHover: '#4b5563',
    danger: '#dc2626',
    dangerHover: '#b91c1c',
    success: '#16a34a',
    successHover: '#15803d',
    text: '#ffffff',
    textMuted: '#9ca3af',
    background: '#1a1a1a',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    full: '9999px',
  },
  fontSize: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
  },
};

// Exportar el tipo del tema para TypeScript
export type Theme = typeof theme;
