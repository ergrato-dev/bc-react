# Ejercicio 04: Context Básico

## 🎯 Objetivo

Implementar Context API con TypeScript para compartir estado global de forma segura y tipada.

## 📚 Conceptos Clave

- `createContext` con TypeScript
- Custom hooks para consumir Context
- Provider pattern
- Tipado seguro con undefined

## ⏱️ Duración Estimada

45 minutos

## 📋 Instrucciones

### Paso 1: AuthContext

Crearás un contexto de autenticación con usuario y funciones de login/logout.

**Abre `starter/AuthContext.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: createContext con undefined inicial fuerza validación
// PARA: Asegurar que el hook se use dentro del Provider
// IMPACTO: Errores claros en desarrollo, no en producción
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
```

### Paso 2: ThemeContext

Implementarás un contexto de tema (light/dark) con persistencia.

**Abre `starter/ThemeContext.tsx`** y descomenta las secciones correspondientes.

```typescript
// QUÉ: Contexto para preferencia de tema
// PARA: Aplicar tema globalmente en la aplicación
// IMPACTO: Cambio de tema sin prop drilling
interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
```

### Paso 3: LanguageContext

Crearás un contexto de idioma para internacionalización básica.

**Abre `starter/LanguageContext.tsx`** y descomenta las secciones correspondientes.

### Paso 4: App de Demostración

Integra todos los contextos y demuestra su uso.

**Abre `starter/App.tsx`** y descomenta las secciones.

## ✅ Criterios de Evaluación

| Criterio                           | Puntos |
| ---------------------------------- | ------ |
| AuthContext con hook personalizado | 7      |
| ThemeContext con persistencia      | 6      |
| LanguageContext funcional          | 5      |
| Código bien tipado y documentado   | 2      |
| **Total**                          | **20** |

## 📂 Estructura del Ejercicio

```
ejercicio-04-context-basico/
├── README.md
├── starter/
│   ├── AuthContext.tsx
│   ├── ThemeContext.tsx
│   ├── LanguageContext.tsx
│   └── App.tsx
└── solution/
    ├── AuthContext.tsx
    ├── ThemeContext.tsx
    ├── LanguageContext.tsx
    └── App.tsx
```

## 🔗 Recursos

- [React Docs - useContext](https://react.dev/reference/react/useContext)
- [React TypeScript Cheatsheet - Context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context)
