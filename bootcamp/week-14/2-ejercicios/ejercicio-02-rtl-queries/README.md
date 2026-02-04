# Ejercicio 02: Queries de React Testing Library

## 🎯 Objetivo

Aprender a usar las queries de RTL en orden de prioridad: `getByRole`, `getByLabelText`, `getByText`, `getByTestId`.

## ⏱️ Duración Estimada

45 minutos

---

## 📋 Descripción

En este ejercicio aprenderás a:

1. Usar `getByRole` con opciones (`name`, `level`)
2. Usar `getByLabelText` para inputs
3. Usar `getByText` para texto
4. Usar `getByTestId` como último recurso
5. Entender cuándo usar cada query

---

## 🚀 Instrucciones

### Paso 1: Configurar el Proyecto

```bash
cd starter
pnpm install
```

### Paso 2: Ejecutar Tests

```bash
pnpm test
```

### Paso 3: Completar los Tests

Abre `src/components/Profile.test.tsx` y descomenta cada sección.

---

## 📚 Prioridad de Queries

| Prioridad | Query                  | Uso                                  |
| --------- | ---------------------- | ------------------------------------ |
| 1️⃣        | `getByRole`            | Botones, links, headings, checkboxes |
| 2️⃣        | `getByLabelText`       | Inputs con label                     |
| 3️⃣        | `getByPlaceholderText` | Inputs sin label                     |
| 4️⃣        | `getByText`            | Texto visible                        |
| 5️⃣        | `getByAltText`         | Imágenes                             |
| 6️⃣        | `getByTitle`           | Atributo title                       |
| 7️⃣        | `getByTestId`          | Último recurso                       |

### Ejemplos de getByRole

```typescript
// Botón
screen.getByRole('button', { name: /enviar/i });

// Heading con nivel específico
screen.getByRole('heading', { level: 1 });

// Link
screen.getByRole('link', { name: /inicio/i });

// Checkbox
screen.getByRole('checkbox', { name: /acepto/i });

// Lista
screen.getByRole('list');
screen.getAllByRole('listitem');
```

---

## ✅ Criterios de Éxito

- [ ] Todos los tests pasan
- [ ] Usas `getByRole` siempre que sea posible
- [ ] Usas `getByLabelText` para inputs con label
- [ ] Solo usas `getByTestId` cuando no hay alternativa

---

## 🔗 Navegación

- ⬅️ [Ejercicio 01: Vitest Basics](../ejercicio-01-vitest-basics/)
- ➡️ [Ejercicio 03: User Events](../ejercicio-03-user-events/)
- 🏠 [Inicio Semana 14](../../README.md)
