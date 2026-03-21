# 📚 Recursos - Semana 11

## Webgrafía

### Documentación Oficial

| Recurso                | Descripción                        | Enlace                                                                                                    |
| ---------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- |
| React Hook Form        | Documentación oficial completa     | [react-hook-form.com](https://react-hook-form.com/)                                                       |
| Zod                    | Documentación oficial de Zod       | [zod.dev](https://zod.dev/)                                                                               |
| @hookform/resolvers    | Resolvers para integración con Zod | [GitHub](https://github.com/react-hook-form/resolvers)                                                    |
| React Error Boundaries | Documentación oficial de React     | [react.dev](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary) |

### Tutoriales y Artículos

| Recurso                                                                                                                  | Autor            | Descripción                             |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------- | --------------------------------------- |
| [Build Forms with React Hook Form and Zod](https://www.freecodecamp.org/news/react-form-validation-zod-react-hook-form/) | freeCodeCamp     | Tutorial completo de integración        |
| [Error Boundaries in React](https://kentcdodds.com/blog/use-react-error-boundary)                                        | Kent C. Dodds    | Guía práctica de Error Boundaries       |
| [React Hook Form vs Formik](https://blog.logrocket.com/react-hook-form-vs-formik-comparison-performance/)                | LogRocket        | Comparación de librerías de formularios |
| [Zod: The Best Validation Library](https://dev.to/franciscomendes10866/schema-validation-with-zod-and-typescript-58k8)   | Francisco Mendes | Introducción a Zod                      |

### Recursos en Español

| Recurso                                                                                                  | Descripción                     |
| -------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [React Hook Form en Español](https://react-hook-form.com/es/)                                            | Documentación oficial traducida |
| [Validación de formularios con Zod](https://www.youtube.com/results?search_query=zod+react+espa%C3%B1ol) | Videos en YouTube               |

---

## Videografía

### Videos Recomendados

| Video                                      | Canal              | Duración | Enlace                                                 |
| ------------------------------------------ | ------------------ | -------- | ------------------------------------------------------ |
| React Hook Form Tutorial                   | Codevolution       | 45 min   | [YouTube](https://www.youtube.com/watch?v=KejZXxFCe2k) |
| Zod Crash Course                           | Matt Pocock        | 20 min   | [YouTube](https://www.youtube.com/watch?v=L6BE-U3oy80) |
| Form Validation with React Hook Form & Zod | Web Dev Simplified | 30 min   | [YouTube](https://www.youtube.com/watch?v=dldjCPa9ZW4) |
| Error Boundaries Explained                 | Jack Herrington    | 15 min   | [YouTube](https://www.youtube.com/watch?v=_FuDMEgIy7I) |
| Advanced React Forms                       | Theo               | 25 min   | [YouTube](https://www.youtube.com/watch?v=B2cBdE5bWPc) |

### Playlists

| Playlist                 | Canal           | Videos    |
| ------------------------ | --------------- | --------- |
| React Hook Form Complete | Codevolution    | 8 videos  |
| TypeScript + React       | Matt Pocock     | 12 videos |
| React Error Handling     | Jack Herrington | 5 videos  |

---

## E-books Gratuitos

### Libros Recomendados

| Título               | Autor             | Formato | Enlace                                                                         |
| -------------------- | ----------------- | ------- | ------------------------------------------------------------------------------ |
| React Handbook       | freeCodeCamp      | PDF     | [Download](https://www.freecodecamp.org/news/the-react-handbook-b71c27b0a795/) |
| TypeScript Deep Dive | Basarat Ali Syed  | Web     | [GitBook](https://basarat.gitbook.io/typescript/)                              |
| React Patterns       | reactpatterns.com | Web     | [reactpatterns.com](https://reactpatterns.com/)                                |

---

## Herramientas Útiles

### Extensiones VS Code

| Extensión                              | Descripción             |
| -------------------------------------- | ----------------------- |
| ES7+ React/Redux/React-Native snippets | Snippets para React     |
| TypeScript Hero                        | Organización de imports |
| Error Lens                             | Muestra errores inline  |
| Zod Prisma Types                       | Generador de tipos Zod  |

### Herramientas Online

| Herramienta              | Descripción                   | Enlace                                                        |
| ------------------------ | ----------------------------- | ------------------------------------------------------------- |
| Zod to JSON Schema       | Convierte schemas Zod a JSON  | [transform.tools](https://transform.tools/zod-to-json-schema) |
| JSON to Zod              | Genera schemas Zod desde JSON | [transform.tools](https://transform.tools/json-to-zod)        |
| React Hook Form DevTools | Herramienta de debugging      | [Docs](https://react-hook-form.com/dev-tools)                 |

---

## Repositorios de Ejemplo

### GitHub

| Repositorio                                                                                         | Descripción                  |
| --------------------------------------------------------------------------------------------------- | ---------------------------- |
| [react-hook-form/examples](https://github.com/react-hook-form/react-hook-form/tree/master/examples) | Ejemplos oficiales           |
| [colinhacks/zod](https://github.com/colinhacks/zod)                                                 | Repositorio oficial de Zod   |
| [bvaughn/react-error-boundary](https://github.com/bvaughn/react-error-boundary)                     | Librería de Error Boundaries |

---

## Cheat Sheets

### React Hook Form

```typescript
// Hooks principales
useForm(); // Hook principal
useFieldArray(); // Arrays dinámicos
useFormContext(); // Acceso al contexto
useWatch(); // Observar cambios
useController(); // Inputs controlados

// Métodos de useForm
register(); // Registrar input
handleSubmit(); // Manejar submit
watch(); // Observar valores
setValue(); // Establecer valor
getValues(); // Obtener valores
reset(); // Resetear formulario
trigger(); // Validar manualmente
```

### Zod

```typescript
// Tipos básicos
z.string();
z.number();
z.boolean();
z.date();
z.enum([]);
z.array();
z.object()

  // Modificadores
  .min() // Mínimo
  .max() // Máximo
  .email() // Validar email
  .url() // Validar URL
  .optional() // Opcional
  .nullable() // Puede ser null
  .default() // Valor por defecto
  .refine() // Validación custom
  .transform(); // Transformar valor
```

---

_Última actualización: Enero 2026_
