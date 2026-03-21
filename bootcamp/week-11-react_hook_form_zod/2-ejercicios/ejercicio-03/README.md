# Ejercicio 03: Campos Dinámicos con useFieldArray

## 🎯 Objetivo

Aprender a manejar campos dinámicos (agregar/eliminar) usando `useFieldArray` de React Hook Form.

---

## 📋 Descripción

En este ejercicio crearás un formulario de pedido donde el usuario puede agregar múltiples productos. Aprenderás a:

1. Configurar `useFieldArray` para arrays de objetos
2. Usar `append`, `remove`, `prepend` y `move`
3. Validar arrays con Zod
4. Manejar el estado de campos dinámicos

---

## ⏱️ Tiempo Estimado

45 minutos

---

## 📚 Conceptos Clave

- `useFieldArray({ control, name })` - Hook para manejar arrays
- `fields` - Array de campos con `id` único
- `append(item)` - Añade al final
- `remove(index)` - Elimina por índice
- `prepend(item)` - Añade al inicio
- `move(from, to)` - Mueve un elemento

---

## 🔧 Instrucciones

### Paso 1: Definir el Schema para Arrays

Define un schema de Zod que valide un array de objetos.

**Abre `starter/OrderForm.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Configurar useFieldArray

Conecta el hook con el formulario.

**Descomenta la sección del Paso 2**.

### Paso 3: Renderizar Campos Dinámicos

Muestra los campos iterando sobre `fields`.

**Descomenta la sección del Paso 3**.

### Paso 4: Implementar Acciones

Añade botones para agregar, eliminar y mover.

**Descomenta la sección del Paso 4**.

---

## 📁 Estructura de Archivos

```
ejercicio-03/
├── README.md
├── starter/
│   └── OrderForm.tsx
└── solution/
    └── OrderForm.tsx
```

---

## ✅ Criterios de Éxito

- [ ] Se pueden agregar nuevos productos
- [ ] Se pueden eliminar productos existentes
- [ ] La validación funciona en todos los campos
- [ ] El total se calcula automáticamente
