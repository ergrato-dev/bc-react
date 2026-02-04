# 📊 Rúbrica de Evaluación - Semana 11

## Formularios con React Hook Form y Zod

---

## 🎯 Competencias a Evaluar

### 1. Conocimiento (30%) 🧠

Evaluación teórica sobre conceptos de React Hook Form, Zod y Error Boundaries.

| Criterio                | Excelente (100%)                                                      | Bueno (80%)                                       | Regular (60%)                           | Insuficiente (<60%)                   |
| ----------------------- | --------------------------------------------------------------------- | ------------------------------------------------- | --------------------------------------- | ------------------------------------- |
| **Comprensión de RHF**  | Explica diferencias entre controlled/uncontrolled y ventajas de RHF   | Entiende el uso básico de useForm y register      | Conoce la sintaxis pero no las ventajas | No comprende el propósito de RHF      |
| **Validación con Zod**  | Domina esquemas complejos, refinements y transformaciones             | Crea esquemas básicos con mensajes personalizados | Usa Zod solo para validaciones simples  | No puede crear esquemas de validación |
| **Integración RHF+Zod** | Explica zodResolver, inferencia de tipos y manejo de errores          | Integra correctamente ambas librerías             | Logra integración con ayuda             | No logra la integración               |
| **Error Boundaries**    | Comprende ciclo de vida, getDerivedStateFromError y componentDidCatch | Implementa Error Boundaries básicos               | Conoce el concepto teóricamente         | No entiende Error Boundaries          |

### 2. Desempeño (40%) 💪

Ejercicios prácticos completados durante las sesiones.

| Ejercicio                           | Excelente (100%)                                               | Bueno (80%)                                      | Regular (60%)                         | Insuficiente (<60%)             |
| ----------------------------------- | -------------------------------------------------------------- | ------------------------------------------------ | ------------------------------------- | ------------------------------- |
| **Ejercicio 01: Formulario básico** | Implementa useForm con todos los métodos correctamente         | Formulario funcional con register y handleSubmit | Formulario parcialmente funcional     | No completa el ejercicio        |
| **Ejercicio 02: Validación Zod**    | Esquema completo con mensajes personalizados y tipos inferidos | Validación funcional con zodResolver             | Validación básica sin mensajes custom | No logra implementar validación |
| **Ejercicio 03: Campos dinámicos**  | useFieldArray completo con append, remove, prepend             | Campos dinámicos básicos funcionando             | Implementación parcial                | No logra campos dinámicos       |
| **Ejercicio 04: Wizard form**       | Multi-paso con validación por paso y estado compartido         | Wizard funcional con navegación                  | Pasos sin validación intermedia       | No completa el wizard           |
| **Ejercicio 05: Error Boundaries**  | Error Boundary con fallback UI y recovery                      | Error Boundary básico funcional                  | Implementación incompleta             | No implementa Error Boundary    |

### 3. Producto (30%) 📦

Proyecto semanal: Formulario de Registro Completo.

| Criterio             | Excelente (100%)                                          | Bueno (80%)                               | Regular (60%)                         | Insuficiente (<60%)           |
| -------------------- | --------------------------------------------------------- | ----------------------------------------- | ------------------------------------- | ----------------------------- |
| **Funcionalidad**    | CRUD completo con validación en todos los campos          | Funcionalidad principal implementada      | Funcionalidad básica parcial          | No funciona correctamente     |
| **Validación**       | Esquemas Zod complejos con refinements y async validation | Validación completa en campos principales | Validación básica sin mensajes claros | Sin validación o incorrecta   |
| **Campos dinámicos** | useFieldArray con operaciones CRUD completas              | Campos dinámicos básicos                  | Implementación parcial                | Sin campos dinámicos          |
| **Error Handling**   | Error Boundary con múltiples fallbacks y recovery         | Error Boundary básico implementado        | Manejo de errores parcial             | Sin manejo de errores         |
| **TypeScript**       | Tipos inferidos de Zod, sin `any`, interfaces claras      | Tipado correcto en la mayoría del código  | Tipado parcial o con `any`            | Sin tipado o errores de tipos |
| **Código limpio**    | Componentes modulares, hooks personalizados, DRY          | Código organizado y legible               | Algo de duplicación o desorganización | Código difícil de mantener    |

---

## 📋 Criterios de Aprobación

- ✅ **Mínimo 70%** en cada categoría (Conocimiento, Desempeño, Producto)
- ✅ Todos los ejercicios completados y funcionando
- ✅ Proyecto adaptado al dominio asignado
- ✅ Código TypeScript sin errores de compilación
- ✅ Validación funcional con mensajes de error claros

---

## 🏆 Niveles de Logro

| Nivel                | Puntaje | Descripción                                                |
| -------------------- | ------- | ---------------------------------------------------------- |
| 🥇 **Sobresaliente** | 90-100% | Dominio excepcional, código ejemplar, extras implementados |
| 🥈 **Satisfactorio** | 80-89%  | Cumple todos los requisitos con buena calidad              |
| 🥉 **Aceptable**     | 70-79%  | Cumple requisitos mínimos con áreas de mejora              |
| ❌ **No aprobado**   | <70%    | No cumple requisitos mínimos, requiere refuerzo            |

---

## 📝 Checklist de Entrega

### Ejercicios (5 ejercicios)

- [ ] Ejercicio 01: Formulario básico con useForm
- [ ] Ejercicio 02: Validación con Zod y zodResolver
- [ ] Ejercicio 03: Campos dinámicos con useFieldArray
- [ ] Ejercicio 04: Formulario multi-paso (wizard)
- [ ] Ejercicio 05: Error Boundary implementado

### Proyecto Semanal

- [ ] Formulario principal con React Hook Form
- [ ] Esquema de validación Zod completo
- [ ] Al menos una sección con campos dinámicos
- [ ] Error Boundary envolviendo el formulario
- [ ] Tipos TypeScript inferidos de Zod
- [ ] README con instrucciones de ejecución
- [ ] Adaptado al dominio asignado por el instructor

### Código

- [ ] Sin errores de TypeScript (`pnpm tsc --noEmit`)
- [ ] Sin warnings de ESLint
- [ ] Nomenclatura en inglés, comentarios en español
- [ ] Commits descriptivos siguiendo conventional commits

---

## 🔍 Rúbrica Detallada por Ejercicio

### Ejercicio 01: Formulario Básico con RHF

| Aspecto             | Puntos | Criterio                                    |
| ------------------- | ------ | ------------------------------------------- |
| useForm configurado | 20     | Hook inicializado con defaultValues tipados |
| register en inputs  | 20     | Todos los campos registrados correctamente  |
| handleSubmit        | 20     | Función onSubmit tipada y funcional         |
| formState           | 20     | Uso de isSubmitting, isDirty, errors        |
| reset funcional     | 20     | Botón reset que limpia el formulario        |

### Ejercicio 02: Validación con Zod

| Aspecto          | Puntos | Criterio                                    |
| ---------------- | ------ | ------------------------------------------- |
| Esquema Zod      | 25     | Esquema completo con todos los campos       |
| Mensajes custom  | 25     | Mensajes de error personalizados en español |
| zodResolver      | 25     | Integración correcta con useForm            |
| Inferencia tipos | 25     | FormData inferido de z.infer                |

### Ejercicio 03: Campos Dinámicos

| Aspecto          | Puntos | Criterio                       |
| ---------------- | ------ | ------------------------------ |
| useFieldArray    | 25     | Hook configurado correctamente |
| append           | 25     | Agregar campos funciona        |
| remove           | 25     | Eliminar campos funciona       |
| Validación array | 25     | Validación Zod para arrays     |

### Ejercicio 04: Formulario Wizard

| Aspecto             | Puntos | Criterio                              |
| ------------------- | ------ | ------------------------------------- |
| Múltiples pasos     | 25     | Al menos 3 pasos navegables           |
| Estado compartido   | 25     | Datos persisten entre pasos           |
| Validación por paso | 25     | Validación antes de avanzar           |
| Resumen final       | 25     | Vista de confirmación antes de submit |

### Ejercicio 05: Error Boundaries

| Aspecto                  | Puntos | Criterio                              |
| ------------------------ | ------ | ------------------------------------- |
| Clase ErrorBoundary      | 25     | Componente implementado correctamente |
| getDerivedStateFromError | 25     | Método estático implementado          |
| Fallback UI              | 25     | Componente de error mostrado          |
| Recovery (retry)         | 25     | Botón para reintentar                 |

---

## 📚 Recursos de Apoyo

Si tienes dificultades, consulta:

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- Material de la semana en `1-teoria/`
