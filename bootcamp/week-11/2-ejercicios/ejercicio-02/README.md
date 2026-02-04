# Ejercicio 02: Validación con Zod

## 🎯 Objetivo

Aprender a crear esquemas de validación con Zod e integrarlos con React Hook Form usando `zodResolver`.

---

## 📋 Descripción

En este ejercicio crearás un formulario de registro con validaciones robustas:

1. Crear un schema de Zod con validaciones personalizadas
2. Integrar el schema con React Hook Form
3. Mostrar mensajes de error amigables
4. Usar `z.infer` para tipos automáticos

---

## ⏱️ Tiempo Estimado

40 minutos

---

## 📚 Conceptos Clave

- `z.object({})` - Define un schema de objeto
- `z.string().email()` - Validación de email
- `.min()`, `.max()` - Validaciones de longitud
- `.refine()` - Validaciones personalizadas
- `zodResolver(schema)` - Conecta Zod con RHF
- `z.infer<typeof schema>` - Inferencia de tipos

---

## 🔧 Instrucciones

### Paso 1: Crear el Schema de Zod

Define las reglas de validación para cada campo.

**Abre `starter/RegistrationForm.tsx`** y descomenta la sección del Paso 1.

### Paso 2: Configurar useForm con zodResolver

Conecta el schema de Zod con el formulario.

**Descomenta la sección del Paso 2**.

### Paso 3: Mostrar Errores de Validación

Muestra mensajes de error debajo de cada campo.

**Descomenta la sección del Paso 3**.

### Paso 4: Validación de Confirmación de Contraseña

Usa `refine` para validar que las contraseñas coincidan.

**Descomenta la sección del Paso 4**.

---

## 📁 Estructura de Archivos

```
ejercicio-02/
├── README.md
├── starter/
│   └── RegistrationForm.tsx
└── solution/
    └── RegistrationForm.tsx
```

---

## ✅ Criterios de Éxito

- [ ] El schema valida todos los campos correctamente
- [ ] Los mensajes de error son claros y en español
- [ ] La confirmación de contraseña funciona
- [ ] Los tipos se infieren automáticamente del schema
