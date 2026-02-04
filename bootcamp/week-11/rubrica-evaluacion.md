# 📊 Rúbrica de Evaluación - Semana 11

## Formularios con React Hook Form y Zod

---

## 📖 Recursos de Aprendizaje (No Evaluados)

La **teoría** y los **ejercicios** son recursos de preparación para el proyecto. Úsalos para:

- 📚 Comprender los conceptos de React Hook Form, Zod y Error Boundaries
- 💻 Practicar con ejercicios guiados antes del proyecto
- 🔍 Consultar como referencia durante el desarrollo

> 💡 **Tip:** Completa los ejercicios antes de iniciar el proyecto para dominar los conceptos.

---

## 🎯 Competencia a Evaluar

### Proyecto (100%) 📦

Proyecto semanal: Formulario de Registro Completo adaptado al dominio asignado.

#### Distribución de Puntos

| Componente            | Peso |
| --------------------- | ---- |
| Funcionalidad         | 40%  |
| Adaptación al Dominio | 35%  |
| Calidad del Código    | 25%  |
| **Total**             | 100% |

#### Funcionalidad (40%)

| Criterio             | Excelente (100%)                                          | Bueno (80%)                                      | Regular (60%)                         | Insuficiente (<60%)             |
| -------------------- | --------------------------------------------------------- | ------------------------------------------------ | ------------------------------------- | ------------------------------- |
| **Formulario RHF**   | useForm completo con todos los métodos correctamente      | Formulario funcional con register y handleSubmit | Formulario parcialmente funcional     | No implementa RHF correctamente |
| **Validación Zod**   | Esquemas Zod complejos con refinements y async validation | Validación completa en campos principales        | Validación básica sin mensajes claros | Sin validación o incorrecta     |
| **Campos dinámicos** | useFieldArray con operaciones CRUD completas              | Campos dinámicos básicos funcionando             | Implementación parcial                | Sin campos dinámicos            |
| **Error Boundary**   | Error Boundary con múltiples fallbacks y recovery         | Error Boundary básico implementado               | Manejo de errores parcial             | Sin Error Boundary              |

#### Adaptación al Dominio (35%)

| Criterio         | Excelente (100%)                                      | Bueno (80%)                              | Regular (60%)                 | Insuficiente (<60%)         |
| ---------------- | ----------------------------------------------------- | ---------------------------------------- | ----------------------------- | --------------------------- |
| **Coherencia**   | Formulario perfectamente adaptado al dominio asignado | Buena adaptación con elementos genéricos | Adaptación básica o parcial   | Sin adaptación al dominio   |
| **Entidades**    | Todas las entidades del dominio bien modeladas        | Entidades principales correctas          | Algunas entidades incompletas | Entidades no corresponden   |
| **Validaciones** | Reglas de negocio del dominio validadas correctamente | Validaciones básicas del dominio         | Validaciones genéricas        | Sin validaciones de dominio |
| **Originalidad** | Implementación única y creativa para el dominio       | Implementación diferenciada              | Similar a ejemplos del curso  | Copia de otro estudiante    |

#### Calidad del Código (25%)

| Criterio          | Excelente (100%)                                     | Bueno (80%)                              | Regular (60%)                         | Insuficiente (<60%)           |
| ----------------- | ---------------------------------------------------- | ---------------------------------------- | ------------------------------------- | ----------------------------- |
| **TypeScript**    | Tipos inferidos de Zod, sin `any`, interfaces claras | Tipado correcto en la mayoría del código | Tipado parcial o con `any`            | Sin tipado o errores de tipos |
| **Código limpio** | Componentes modulares, hooks personalizados, DRY     | Código organizado y legible              | Algo de duplicación o desorganización | Código difícil de mantener    |
| **Nomenclatura**  | Inglés técnico consistente, comentarios en español   | Nomenclatura mayormente correcta         | Mezcla de idiomas inconsistente       | Nomenclatura incorrecta       |

---

## 📋 Criterios de Aprobación

- ✅ **Mínimo 70%** en el proyecto (único entregable evaluado)
- ✅ Proyecto adaptado al dominio asignado por el instructor
- ✅ Código TypeScript sin errores de compilación (`pnpm tsc --noEmit`)
- ✅ Validación funcional con mensajes de error claros
- ✅ Error Boundary implementado y funcional
- ✅ README con instrucciones de ejecución

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

### Preparación (No evaluada)

Estos recursos te ayudan a prepararte para el proyecto:

- [ ] Ejercicio 01: Formulario básico con useForm
- [ ] Ejercicio 02: Validación con Zod y zodResolver
- [ ] Ejercicio 03: Campos dinámicos con useFieldArray
- [ ] Ejercicio 04: Formulario multi-paso (wizard)
- [ ] Ejercicio 05: Error Boundary implementado

### Proyecto Semanal (Evaluado - 100%)

- [ ] Formulario principal con React Hook Form
- [ ] Esquema de validación Zod completo
- [ ] Al menos una sección con campos dinámicos
- [ ] Error Boundary envolviendo el formulario
- [ ] Tipos TypeScript inferidos de Zod
- [ ] README con instrucciones de ejecución
- [ ] Adaptado al dominio asignado por el instructor
- [ ] Sin errores de TypeScript (`pnpm tsc --noEmit`)
- [ ] Sin warnings de ESLint
- [ ] Nomenclatura en inglés, comentarios en español
- [ ] Commits descriptivos siguiendo conventional commits

---

---

## 📚 Recursos de Apoyo

Si tienes dificultades, consulta:

- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- Material de la semana en `1-teoria/`
