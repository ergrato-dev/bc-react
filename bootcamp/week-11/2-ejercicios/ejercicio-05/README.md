# Ejercicio 05: Error Boundary con Formularios

## 🎯 Objetivo

Aprender a implementar Error Boundaries para proteger formularios de errores inesperados.

---

## 📋 Descripción

En este ejercicio implementarás un Error Boundary reutilizable que:

1. Captura errores en componentes de formulario
2. Muestra una UI de fallback amigable
3. Permite reintentar sin recargar la página
4. Registra errores para debugging

---

## ⏱️ Tiempo Estimado

40 minutos

---

## 📚 Conceptos Clave

- `getDerivedStateFromError(error)` - Actualiza estado cuando hay error
- `componentDidCatch(error, info)` - Logging y side effects
- Fallback UI - Interfaz alternativa
- Retry pattern - Permitir al usuario reintentar

---

## 🔧 Instrucciones

### Paso 1: Crear el Error Boundary

Implementa una clase con los métodos de ciclo de vida necesarios.

**Abre `starter/FormErrorBoundary.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Crear Fallback UI

Diseña una interfaz amigable para cuando ocurre un error.

**Descomenta la sección del Paso 2**.

### Paso 3: Implementar Retry

Añade funcionalidad para reintentar sin recargar.

**Descomenta la sección del Paso 3**.

### Paso 4: Integrar con Formulario

Envuelve un formulario con el Error Boundary.

**Descomenta la sección del Paso 4**.

---

## 📁 Estructura de Archivos

```
ejercicio-05/
├── README.md
├── starter/
│   └── FormErrorBoundary.tsx
└── solution/
    └── FormErrorBoundary.tsx
```

---

## ✅ Criterios de Éxito

- [ ] El Error Boundary captura errores de render
- [ ] La UI de fallback es clara y útil
- [ ] El botón de retry funciona correctamente
- [ ] Los errores se logean en consola
