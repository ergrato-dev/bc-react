# Ejercicio 04: Formulario Multi-paso (Wizard)

## 🎯 Objetivo

Aprender a crear formularios multi-paso usando `FormProvider` y `useFormContext`.

---

## 📋 Descripción

En este ejercicio crearás un wizard de registro de 3 pasos:

1. Paso 1: Información personal
2. Paso 2: Información de contacto
3. Paso 3: Preferencias

Aprenderás a:

- Compartir estado del formulario entre componentes
- Validar pasos individuales con `trigger()`
- Navegar entre pasos manteniendo los datos

---

## ⏱️ Tiempo Estimado

45 minutos

---

## 📚 Conceptos Clave

- `FormProvider` - Contexto para compartir el formulario
- `useFormContext<T>()` - Acceder al formulario desde componentes hijos
- `trigger(fields)` - Validar campos específicos
- State de paso actual

---

## 🔧 Instrucciones

### Paso 1: Crear el Schema Completo

Define un schema que cubra todos los pasos.

**Abre `starter/WizardForm.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Configurar FormProvider

Envuelve los componentes de pasos con FormProvider.

**Descomenta la sección del Paso 2**.

### Paso 3: Crear Componentes de Pasos

Cada paso es un componente que usa useFormContext.

**Descomenta la sección del Paso 3**.

### Paso 4: Implementar Navegación

Valida el paso actual antes de avanzar.

**Descomenta la sección del Paso 4**.

---

## 📁 Estructura de Archivos

```
ejercicio-04/
├── README.md
├── starter/
│   └── WizardForm.tsx
└── solution/
    └── WizardForm.tsx
```

---

## ✅ Criterios de Éxito

- [ ] El wizard tiene 3 pasos navegables
- [ ] Solo se puede avanzar si el paso actual es válido
- [ ] Se puede volver atrás sin perder datos
- [ ] El submit solo ocurre en el paso final
