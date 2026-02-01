# Ejercicio 05: Hooks Compuestos

## 🎯 Objetivo

Aprender a **componer hooks** combinando múltiples hooks más simples para crear abstracciones de alto nivel que encapsulan lógica de negocio compleja.

## 📚 Conceptos Cubiertos

- Composición de hooks (usar hooks dentro de otros hooks)
- Abstracción de lógica de negocio
- Patrones de autenticación con hooks
- Encapsulación de efectos secundarios
- Hooks de feature completa

## 📁 Estructura

```
ejercicio-05-hooks-compuestos/
├── README.md
├── starter/
│   ├── hooks/
│   │   ├── useLocalStorage.ts   # Hook base (del ejercicio anterior)
│   │   ├── useFetch.ts          # Hook base
│   │   └── useAuth.ts           # Hook compuesto
│   ├── types.ts                 # Tipos compartidos
│   └── App.tsx                  # Demo de uso
└── solution/
    ├── hooks/
    │   ├── useLocalStorage.ts
    │   ├── useFetch.ts
    │   └── useAuth.ts
    ├── types.ts
    └── App.tsx
```

## ⏱️ Duración Estimada

**50 minutos**

## 📋 Hook a Implementar

### useAuth (Hook Compuesto)

Hook que combina `useLocalStorage` + lógica de autenticación para proporcionar una abstracción completa de auth.

**Composición:**

```
useAuth
├── useLocalStorage (para token y user)
├── useState (para loading state)
├── useCallback (para funciones memoizadas)
└── useEffect (para verificar token al montar)
```

**Características:**

- Login con credenciales
- Logout con limpieza de storage
- Persistencia de sesión entre recargas
- Estado de autenticación derivado
- Verificación automática de token

**Interface:**

```typescript
interface UseAuthReturn {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}
```

## 🛠️ Instrucciones

### Paso 1: Revisar hooks base (10 min)

1. Revisa `starter/hooks/useLocalStorage.ts`
2. Revisa `starter/hooks/useFetch.ts`
3. Entiende cómo funcionan individualmente

### Paso 2: Implementar useAuth (25 min)

1. Abre `starter/hooks/useAuth.ts`
2. Observa cómo se importan los hooks base
3. Descomenta y entiende cada sección:
   - Estado con useLocalStorage
   - Estados derivados
   - Función login
   - Función logout
   - Efecto de verificación

### Paso 3: Demo en App (15 min)

1. Abre `starter/App.tsx`
2. Descomenta el formulario de login
3. Observa cómo el hook encapsula toda la lógica
4. Prueba login/logout

## ✅ Criterios de Éxito

| Criterio                                 | Peso |
| ---------------------------------------- | ---- |
| useAuth utiliza hooks base correctamente | 25%  |
| Login funciona con persistencia          | 25%  |
| Logout limpia estado y storage           | 20%  |
| Estados derivados correctos              | 15%  |
| Manejo de errores                        | 15%  |

## 💡 Tips

- Los hooks compuestos son como "feature hooks" que encapsulan funcionalidad completa
- Cada hook base debe ser independiente y testeable
- El hook compuesto coordina los hooks base sin duplicar su lógica
- Los estados derivados (`isAuthenticated`) deben calcularse a partir del estado base

## 🔗 Recursos

- [React Hooks Composition Patterns](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Authentication Patterns with Hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)
