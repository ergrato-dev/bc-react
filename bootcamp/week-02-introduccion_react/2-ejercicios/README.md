# 📚 Ejercicios Guiados - Semana 02

## 🎯 Objetivo

Consolidar los conceptos aprendidos en la teoría mediante ejercicios prácticos guiados. Cada ejercicio es un **tutorial** donde debes **descomentar código** paso a paso para aprender.

## 📋 Estructura de Ejercicios

Cada ejercicio tiene:

- **README.md**: Explicación del concepto + instrucciones
- **starter/**: Código comentado para descomentar
- **solution/**: Solución completa comentada (para verificar)

## ✅ Ejercicios Disponibles

### 1. **Button Component** (20 minutos)

**Tema**: Props tipados, componentes funcionales, TypeScript

[Ver Ejercicio 01](./01-button-component/README.md)

### 2. **Counter Hook** (25 minutos)

**Tema**: useState, state updates, re-renders

[Ver Ejercicio 02](./02-counter-hook/README.md)

### 3. **User Card** (30 minutos)

**Tema**: Props complejos, composición, interfaces TypeScript

[Ver Ejercicio 03](./03-user-card/README.md)

### 4. **Simple Form** (35 minutos)

**Tema**: Formularios controlados, onChange, onSubmit, preventDefault

[Ver Ejercicio 04](./04-simple-form/README.md)

### 5. **Todo List** (40 minutos)

**Tema**: Array state, map rendering, event handling, múltiples states

[Ver Ejercicio 05](./05-todo-list/README.md)

## ⏱️ Distribución del Tiempo

- Teoría: 2-2.5 horas
- **Ejercicios: 3-3.5 horas** (20+25+30+35+40 = 150 min ≈ 2.5h)
- Proyecto: 2-2.5 horas

## 🚀 Cómo Usar los Ejercicios

### Paso 1: Lee el README

Abre el README.md de cada ejercicio. Incluye:

1. Explicación del concepto teórico
2. Ejemplos de código
3. Instrucciones paso a paso
4. Qué debes descomentar

### Paso 2: Descomentar el Código

Abre el archivo `starter/[nombre].tsx` y descomenta el código según las instrucciones del README.

El código comentado muestra:

```typescript
// ============================================
// PASO 1: Definir Props
// ============================================
// Descomenta estas líneas:
// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }
```

### Paso 3: Probar tu Código

Ejecuta tu aplicación y verifica que funciona:

```bash
pnpm dev
```

### Paso 4: Comparar con Solución (Opcional)

Si tienes dudas, compara tu código con `solution/[nombre].tsx`:

```bash
# Lado a lado
code starter/Button.tsx solution/Button.tsx
```

## 📖 Conceptos por Ejercicio

| Ejercicio  | Conceptos Clave                              | Dificultad      |
| ---------- | -------------------------------------------- | --------------- |
| Button     | Props, interfaces, componentes funcionales   | ⭐ Básico       |
| Counter    | useState, actualización de estado, re-render | ⭐⭐ Intermedio |
| UserCard   | Props complejos, composición, children       | ⭐⭐ Intermedio |
| SimpleForm | onChange, onSubmit, formularios controlados  | ⭐⭐ Intermedio |
| TodoList   | Array state, map, eventos múltiples          | ⭐⭐⭐ Avanzado |

## 💡 Tips para Aprender

1. **Lee el README PRIMERO** - Entender es más importante que escribir
2. **Descomentar gradualmente** - Paso a paso, no todo de una vez
3. **Prueba después de cada paso** - Verifica que funciona
4. **Experimenta** - Modifica el código y observa qué pasa
5. **Compara con solución** - Solo si tienes dudas
6. **Consulta la teoría** - Si algo no queda claro, vuelve a week-02-introduccion_react/1-teoria

## 🔗 Navegación

← [Teoría (1-teoria)](../1-teoria/) | [Proyecto (3-proyecto)](../3-proyecto/) →

---

## ✨ Características de estos Ejercicios

✅ **Tutorial Guiado**: No es "llena los TODOs", es descomentar código explicado  
✅ **Progresivo**: De simple a complejo  
✅ **TypeScript**: Todo tipado, sin `any`  
✅ **Comentados**: Explicaciones en cada sección  
✅ **Soluciones**: Para verificar tu trabajo  
✅ **Cortos**: 20-40 minutos cada uno (no abrumador)

---

_Última actualización: Enero 2026_  
_Versión: 1.0_
