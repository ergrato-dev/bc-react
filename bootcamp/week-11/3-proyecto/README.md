# 📦 Proyecto Semana 11: Sistema de Formularios

## 🎯 Objetivo

Implementar un sistema completo de formularios para tu dominio asignado, aplicando React Hook Form, Zod y Error Boundaries.

---

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio único]

---

## 📋 Descripción del Proyecto

Crearás un sistema de formularios que incluya:

1. **Formulario de registro/creación** - Crear nuevos elementos del dominio
2. **Formulario de edición** - Modificar elementos existentes
3. **Formulario multi-paso** - Proceso completo con varios pasos
4. **Validaciones robustas** - Usando Zod
5. **Manejo de errores** - Error Boundaries para proteger la app

---

## 💡 Ejemplos de Adaptación por Dominio

| Dominio           | Formulario Principal    | Campos Especiales                   |
| ----------------- | ----------------------- | ----------------------------------- |
| 📖 Biblioteca     | Registro de libro       | ISBN, autor, categoría              |
| 💊 Farmacia       | Registro de medicamento | Lote, vencimiento, principio activo |
| 🏋️ Gimnasio       | Registro de miembro     | Membresía, fecha inicio, rutina     |
| 🏫 Escuela        | Matrícula de estudiante | Grado, tutor, documentos            |
| 🍽️ Restaurante    | Registro de pedido      | Mesa, platos, modificaciones        |
| 🏥 Hospital       | Admisión de paciente    | Seguro, síntomas, urgencia          |
| ✈️ Agencia viajes | Reserva de viaje        | Destino, pasajeros, fechas          |
| 🚗 Concesionario  | Solicitud de vehículo   | Modelo, financiamiento, extras      |

---

## ✅ Requisitos Funcionales

### RF1: Formulario de Creación

- [ ] Mínimo 5 campos diferentes
- [ ] Validación con Zod
- [ ] Mensajes de error en español
- [ ] Estado de carga (loading)
- [ ] Confirmación de éxito

### RF2: Formulario de Edición

- [ ] Cargar datos existentes
- [ ] Detectar cambios (isDirty)
- [ ] Confirmación antes de descartar cambios
- [ ] Actualización exitosa

### RF3: Formulario Multi-paso (Wizard)

- [ ] Mínimo 3 pasos
- [ ] Validación por paso
- [ ] Navegación adelante/atrás
- [ ] Indicador de progreso
- [ ] Resumen final

### RF4: Campos Dinámicos

- [ ] Al menos una sección con useFieldArray
- [ ] Agregar/eliminar elementos
- [ ] Validación de array

### RF5: Manejo de Errores

- [ ] Error Boundary envolviendo formularios
- [ ] Fallback UI amigable
- [ ] Botón de reintentar

---

## 🛠️ Requisitos Técnicos

### Dependencias

```json
{
  "react-hook-form": "^7.x",
  "@hookform/resolvers": "^3.x",
  "zod": "^3.x"
}
```

### Estructura del Proyecto

```
src/
├── components/
│   ├── forms/
│   │   ├── CreateItemForm.tsx
│   │   ├── EditItemForm.tsx
│   │   └── ItemWizard/
│   │       ├── index.tsx
│   │       ├── Step1.tsx
│   │       ├── Step2.tsx
│   │       └── Step3.tsx
│   └── error/
│       └── FormErrorBoundary.tsx
├── schemas/
│   └── itemSchema.ts
├── types/
│   └── item.ts
└── App.tsx
```

### Schemas de Zod (Ejemplo genérico)

```typescript
// schemas/itemSchema.ts
import { z } from 'zod';

export const itemSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  description: z.string().min(10, 'Mínimo 10 caracteres'),
  category: z.enum(['categoria1', 'categoria2', 'categoria3']),
  price: z.number().positive('El precio debe ser positivo'),
  // Adapta estos campos a tu dominio
});

export type Item = z.infer<typeof itemSchema>;
```

---

## 📐 Estructura de Archivos

```
3-proyecto/
├── README.md              ← Este archivo
├── starter/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── forms/
│   │   │   │   └── CreateItemForm.tsx
│   │   │   └── error/
│   │   │       └── FormErrorBoundary.tsx
│   │   ├── schemas/
│   │   │   └── itemSchema.ts
│   │   └── types/
│   │       └── item.ts
│   ├── package.json
│   └── vite.config.ts
└── solution/
    └── ... (mismo estructura con implementación completa)
```

---

## 📝 Criterios de Evaluación

| Criterio       | Peso | Descripción                                         |
| -------------- | ---- | --------------------------------------------------- |
| Funcionalidad  | 30%  | Todos los requisitos funcionan correctamente        |
| Validaciones   | 25%  | Zod schemas completos y correctos                   |
| Error Handling | 15%  | Error Boundaries implementados                      |
| Código limpio  | 15%  | TypeScript estricto, componentes bien estructurados |
| UX/UI          | 15%  | Mensajes claros, feedback al usuario                |

---

## 🚀 Instrucciones de Inicio

### 1. Crear el proyecto

```bash
pnpm create vite@latest mi-dominio-forms -- --template react-ts
cd mi-dominio-forms
```

### 2. Instalar dependencias

```bash
pnpm add react-hook-form @hookform/resolvers zod
```

### 3. Copiar archivos starter

Copia los archivos de `starter/` a tu proyecto.

### 4. Adaptar al dominio

Modifica los schemas, tipos y componentes para tu dominio asignado.

### 5. Ejecutar

```bash
pnpm dev
```

---

## 📌 Entregables

1. **Código fuente** en repositorio Git
2. **README.md** con:
   - Descripción de tu dominio
   - Instrucciones de ejecución
   - Screenshots de los formularios
3. **Demostración** del proyecto funcionando

---

## ⏱️ Tiempo Estimado

**2 horas** de trabajo autónomo

---

## 💡 Tips

1. **Empieza por los schemas** - Define primero la estructura de datos
2. **Un formulario a la vez** - No intentes hacer todo junto
3. **Valida temprano** - Usa `mode: 'onChange'` para feedback inmediato
4. **Reutiliza componentes** - Crea un componente `FormField` reutilizable
5. **Testing manual** - Prueba todos los casos de error

---

## 🔗 Recursos

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Docs](https://zod.dev/)
- [Error Boundaries - React Docs](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
