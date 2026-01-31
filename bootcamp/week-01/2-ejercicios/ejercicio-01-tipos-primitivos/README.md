# 🧱 Ejercicio 1: Tipos Primitivos y Anotaciones

## 🎯 Objetivo

Practicar la declaración de variables con tipos primitivos, inferencia de tipos y arrays tipados en TypeScript.

---

## 📋 Instrucciones

Este es un **tutorial guiado**. Aprenderás descomentando código paso a paso.

### Pasos a seguir:

1. Abre `starter/index.ts`
2. Lee cada sección con atención
3. **Descomenta** las líneas según las instrucciones
4. Ejecuta el código con `pnpm start`
5. Observa los resultados en la consola

---

## 🧪 Conceptos que practicarás

### Paso 1: Tipos Primitivos Básicos

- Declarar variables `string`, `number`, `boolean`
- Entender qué son las anotaciones de tipo
- Ver cómo TypeScript valida los tipos

### Paso 2: Inferencia de Tipos

- Dejar que TypeScript deduzca el tipo automáticamente
- Saber cuándo la anotación es necesaria y cuándo no
- Confiar en la inferencia cuando el tipo es obvio

### Paso 3: Arrays Tipados

- Crear arrays que solo aceptan un tipo específico
- Usar la sintaxis `Type[]` y `Array<Type>`
- Prevenir errores al agregar elementos incorrectos

### Paso 4: Tipos Union (Unión)

- Permitir que una variable tenga múltiples tipos posibles
- Usar el operador `|` para uniones
- Manejar valores opcionales con `| null` o `| undefined`

### Paso 5: Tipos Literal

- Definir variables con valores exactos permitidos
- Crear enumeraciones implícitas con string literals
- Limitar opciones válidas en tiempo de compilación

---

## ▶️ Cómo ejecutar

```bash
# Navega a este ejercicio
cd ejercicio-01-tipos-primitivos

# Instala dependencias (solo la primera vez)
pnpm install

# Ejecuta el starter (tu código)
pnpm start

# Ejecuta la solución (para comparar)
pnpm solution
```

---

## ✅ Criterios de Éxito

Al completar este ejercicio, deberías poder:

- [ ] Declarar variables con tipos primitivos correctamente
- [ ] Entender cuándo usar anotaciones y cuándo confiar en inferencia
- [ ] Crear y usar arrays tipados sin errores
- [ ] Aplicar tipos union para valores opcionales
- [ ] Usar tipos literal para limitar valores permitidos

---

## 💡 Tips

- Lee los comentarios con atención: explican el **qué**, **para** y el **impacto**
- Si tienes un error, TypeScript te dirá exactamente qué está mal
- Experimenta: intenta descomentar líneas que tienen `// ❌` para ver los errores
- La solución está en `solution/` pero intenta hacerlo solo primero

---

## 📚 Recursos Relacionados

- [Teoría: Tipos Primitivos y Anotaciones](../../1-teoria/02-tipos-primitivos-y-anotaciones.md)
- [TypeScript Handbook: Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

## 🔗 Navegación

| ⬅️ Ejercicios          |                                   Ejercicio 2 ➡️ |
| :--------------------- | -----------------------------------------------: |
| [README](../README.md) | [Ejercicio 2](../ejercicio-02-interfaces-types/) |
