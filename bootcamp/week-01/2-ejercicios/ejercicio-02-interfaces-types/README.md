# 🧩 Ejercicio 2: Interfaces y Types

## 🎯 Objetivo

Practicar la definición de interfaces, types, uniones e intersecciones para modelar objetos complejos en TypeScript.

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

### Paso 1: Interfaces Básicas

- Definir la forma de un objeto con `interface`
- Especificar propiedades obligatorias y sus tipos
- Crear objetos que cumplan con la interfaz

### Paso 2: Propiedades Opcionales

- Usar `?` para propiedades opcionales
- Entender la diferencia entre obligatorio y opcional
- Manejar casos donde una propiedad puede no existir

### Paso 3: Type Aliases

- Crear tipos con `type`
- Definir unions con `|`
- Usar types para alias de tipos primitivos

### Paso 4: Intersecciones

- Combinar múltiples tipos con `&`
- Crear tipos compuestos que tienen todas las propiedades
- Reutilizar tipos para evitar duplicación

### Paso 5: Interface vs Type

- Entender cuándo usar `interface` y cuándo `type`
- Aplicar la regla: interface para objetos, type para uniones
- Extender interfaces con `extends`

---

## ▶️ Cómo ejecutar

```bash
# Navega a este ejercicio
cd ejercicio-02-interfaces-types

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

- [ ] Definir interfaces para objetos complejos
- [ ] Usar propiedades opcionales correctamente
- [ ] Crear type aliases para unions
- [ ] Aplicar intersecciones para combinar tipos
- [ ] Decidir cuándo usar `interface` vs `type`

---

## 💡 Tips

- Las interfaces son extensibles, los types no (aunque puedes combinarlos con `&`)
- Usa `interface` para props de React y objetos
- Usa `type` para unions, intersecciones y aliases
- Los comentarios explican el **qué**, **para** y el **impacto**

---

## 📚 Recursos Relacionados

- [Teoría: Interfaces vs Types](../../1-teoria/03-interfaces-vs-types.md)
- [TypeScript Handbook: Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html)

---

## 🔗 Navegación

| ⬅️ Ejercicio 1                                   |                                    Ejercicio 3 ➡️ |
| :----------------------------------------------- | ------------------------------------------------: |
| [Ejercicio 1](../ejercicio-01-tipos-primitivos/) | [Ejercicio 3](../ejercicio-03-funciones-tipadas/) |
