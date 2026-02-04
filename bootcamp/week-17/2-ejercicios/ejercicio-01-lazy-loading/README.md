# Ejercicio 01: Lazy Loading de Componentes

## 🎯 Objetivo

Implementar lazy loading de componentes usando `React.lazy` y `Suspense` para dividir el código de la aplicación.

## ⏱️ Duración

45 minutos

---

## 📋 Instrucciones

En este ejercicio aprenderás a:

1. Convertir importaciones estáticas a dinámicas con `React.lazy`
2. Configurar `Suspense` con fallbacks apropiados
3. Implementar Error Boundaries para manejar errores de carga
4. Verificar que el code splitting funciona

---

## 🚀 Pasos

### Paso 1: Crear el proyecto

```bash
pnpm create vite@latest lazy-loading-demo -- --template react-ts
cd lazy-loading-demo
pnpm install
```

### Paso 2: Crear componentes pesados

Abre `starter/HeavyChart.tsx` y descomenta el código paso a paso.

### Paso 3: Implementar lazy loading

Abre `starter/App.tsx` y sigue las instrucciones para convertir las importaciones a lazy.

### Paso 4: Agregar Suspense con fallback

Configura el componente Suspense con un skeleton apropiado.

### Paso 5: Crear Error Boundary

Implementa un Error Boundary para manejar fallos de carga.

### Paso 6: Verificar el resultado

Abre DevTools → Network y verifica que los chunks se cargan bajo demanda.

---

## 📁 Estructura de Archivos

```
ejercicio-01-lazy-loading/
├── README.md
├── starter/
│   ├── App.tsx
│   ├── HeavyChart.tsx
│   ├── HeavyTable.tsx
│   ├── LoadingFallback.tsx
│   └── ErrorBoundary.tsx
└── solution/
    ├── App.tsx
    ├── HeavyChart.tsx
    ├── HeavyTable.tsx
    ├── LoadingFallback.tsx
    └── ErrorBoundary.tsx
```

---

## ✅ Criterios de Éxito

- [ ] Los componentes se cargan dinámicamente (chunks separados)
- [ ] Se muestra un fallback mientras cargan los componentes
- [ ] El Error Boundary captura errores de carga
- [ ] Network tab muestra chunks cargando bajo demanda
