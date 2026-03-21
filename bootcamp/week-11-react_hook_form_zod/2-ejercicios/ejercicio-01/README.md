# Ejercicio 01: Formulario Básico con React Hook Form

## 🎯 Objetivo

Aprender a crear un formulario básico usando `useForm`, `register` y `handleSubmit` de React Hook Form.

---

## 📋 Descripción

En este ejercicio crearás un formulario de contacto simple con tres campos: nombre, email y mensaje. Aprenderás a:

1. Configurar `useForm` con tipos de TypeScript
2. Usar `register` para conectar inputs
3. Manejar el submit con `handleSubmit`
4. Mostrar el estado del formulario

---

## ⏱️ Tiempo Estimado

30 minutos

---

## 📚 Conceptos Clave

- `useForm<T>()` - Hook principal que retorna métodos del formulario
- `register("name")` - Conecta un input al formulario
- `handleSubmit(onSubmit)` - Maneja la validación y submit
- `formState` - Estado del formulario (errors, isDirty, isSubmitting, etc.)

---

## 🔧 Instrucciones

### Paso 1: Definir la Interface del Formulario

Primero definimos los tipos para nuestro formulario.

**Abre `starter/ContactForm.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Configurar useForm

Inicializamos el hook con valores por defecto.

**Descomenta la sección del Paso 2** en el mismo archivo.

### Paso 3: Crear el JSX del Formulario

Conectamos los inputs usando `register`.

**Descomenta la sección del Paso 3**.

### Paso 4: Mostrar Estado del Formulario

Añadimos indicadores de estado para mejorar la UX.

**Descomenta la sección del Paso 4**.

---

## 📁 Estructura de Archivos

```
ejercicio-01/
├── README.md
├── starter/
│   └── ContactForm.tsx
└── solution/
    └── ContactForm.tsx
```

---

## ✅ Criterios de Éxito

- [ ] El formulario captura los tres campos correctamente
- [ ] Los datos se muestran en consola al hacer submit
- [ ] El botón se deshabilita mientras se envía
- [ ] Los campos tienen tipos de TypeScript
