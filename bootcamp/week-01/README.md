# 📘 Semana 01: Fundamentos de TypeScript

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Aplicar tipos primitivos y anotaciones básicas de TypeScript
- ✅ Definir interfaces y types para modelar objetos complejos
- ✅ Crear funciones tipadas con parámetros opcionales y valores por defecto
- ✅ Implementar tipos union e intersection para casos complejos
- ✅ Usar generics básicos para código reutilizable
- ✅ Aplicar utility types (Partial, Pick, Omit, Required, Record)
- ✅ Configurar TypeScript en un proyecto (tsconfig.json)

---

## 📚 Requisitos Previos

- JavaScript intermedio (ES2023: arrow functions, destructuring, spread/rest, promesas, módulos)
- Node.js 24 LTS instalado
- pnpm o yarn instalado (❌ NO usar npm)
- VS Code con extensión TypeScript (recomendado)

---

## 🗂️ Estructura de la Semana

```
week-01/
├── 0-assets/              # Recursos visuales (SVGs, diagramas)
├── 1-teoria/              # Material teórico (archivos .md)
├── 2-ejercicios/          # Ejercicios guiados paso a paso
├── 3-proyecto/            # Proyecto semanal integrador
├── 4-recursos/            # Recursos adicionales
│   ├── ebooks-free/       # Libros electrónicos gratuitos
│   ├── videografia/       # Videos y tutoriales
│   └── webgrafia/         # Enlaces y documentación
├── 5-glosario/            # Términos clave (A-Z)
├── README.md              # Este archivo
└── rubrica-evaluacion.md  # Criterios de evaluación
```

---

## 📝 Contenidos

### 1️⃣ Teoría (1-teoria/)

- [01 - Introducción a TypeScript](1-teoria/01-introduccion-typescript.md)
- [02 - Tipos Primitivos y Anotaciones](1-teoria/02-tipos-primitivos-y-anotaciones.md)
- [03 - Interfaces vs Types](1-teoria/03-interfaces-vs-types.md)
- [04 - Funciones Tipadas y Parámetros](1-teoria/04-funciones-tipadas-y-parametros.md)
- [05 - Generics y Utility Types](1-teoria/05-generics-y-utility-types.md)
- [06 - Configuración de TypeScript](1-teoria/06-configuracion-typescript.md)

### 2️⃣ Ejercicios (2-ejercicios/)

- **Ejercicio 1**: Tipos Primitivos y Anotaciones (20 min)
- **Ejercicio 2**: Interfaces y Types (25 min)
- **Ejercicio 3**: Funciones Tipadas (25 min)
- **Ejercicio 4**: Generics Básicos (30 min)
- **Ejercicio 5**: Utility Types (30 min)

### 3️⃣ Proyecto Semanal (3-proyecto/)

**Proyecto**: Modelado de Entidades con TypeScript

Implementa un sistema de gestión adaptado a tu dominio asignado (biblioteca, farmacia, gimnasio, restaurante, etc.) aplicando todos los conceptos aprendidos.

### 4️⃣ Recursos Adicionales (4-recursos/)

- [Ebooks Gratuitos](4-recursos/ebooks-free/)
- [Videografía](4-recursos/videografia/)
- [Webgrafía](4-recursos/webgrafia/)

### 5️⃣ Glosario (5-glosario/)

[Términos técnicos de A-Z](5-glosario/README.md)

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad  | Tiempo | Descripción                      |
| ---------- | ------ | -------------------------------- |
| Teoría     | 2-2.5h | Leer material teórico y ejemplos |
| Ejercicios | 3-3.5h | Completar 5 ejercicios guiados   |
| Proyecto   | 2-2.5h | Implementar proyecto integrador  |

**Total**: ~8 horas

---

## 📌 Entregable

### Proyecto Semanal 📦 (100%)

**Entregable único**: Proyecto de Modelado de Entidades con TypeScript

- ✅ Código funcional que compila sin errores
- ✅ Adaptado correctamente al dominio asignado
- ✅ Tipos bien definidos (interfaces, types, generics, utility types)
- ✅ Código limpio con comentarios qué/para/impacto
- ✅ README descriptivo incluido

**Evaluación**: Ver [rubrica-evaluacion.md](rubrica-evaluacion.md)

> **Nota**: La teoría y los ejercicios son recursos de aprendizaje para prepararte para el proyecto. No son entregables evaluados.

---

## ✅ Checklist de Progreso

### Preparación (No evaluada)

- [ ] Leí toda la teoría (1-teoria/)
- [ ] Practiqué con los ejercicios guiados (2-ejercicios/)
- [ ] Revisé recursos adicionales según necesidad
- [ ] Consulté el glosario según necesidad

### Entregable (Evaluado)

- [ ] **Implementé el proyecto semanal** (3-proyecto/)
- [ ] Código compila sin errores
- [ ] Adaptado a mi dominio asignado
- [ ] Incluí comentarios qué/para/impacto
- [ ] Incluí README descriptivo

---

## 🎓 Metodología de Aprendizaje

### Formato de Ejercicios: Tutorial Guiado

Los ejercicios NO son tareas con TODOs. Son **tutoriales guiados** donde aprendes descomentando código:

1. Lee el README del ejercicio
2. Abre `starter/index.ts`
3. Descomenta líneas según instrucciones
4. Ejecuta con `pnpm start`
5. Compara con `solution/` si tienes dudas

### Formato de Proyecto: TODOs por Dominio

El proyecto SÍ usa TODOs para implementación desde cero:

1. Recibe tu dominio único asignado
2. Adapta las instrucciones genéricas a tu contexto
3. Implementa completando cada TODO
4. Comenta el código con qué/para/impacto

---

## 🏛️ Política de Dominios Únicos

Cada aprendiz trabaja sobre un **dominio diferente** asignado por el instructor:

- 📖 Biblioteca
- 💊 Farmacia
- 🏋️ Gimnasio
- 🏫 Escuela
- 🏬 Tienda de mascotas
- 🏪 Restaurante
- 🏭 Banco
- (y otros según cantidad de aprendices)

**Objetivo**: Prevenir copia, fomentar originalidad, desarrollar capacidad de abstracción.

---

## 🔗 Recursos Esenciales

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - Documentación oficial
- [TypeScript Playground](https://www.typescriptlang.org/play) - Probar código online
- [Stack Overflow - TypeScript](https://stackoverflow.com/questions/tagged/typescript) - Preguntas y respuestas

---

## 🚀 ¿Cómo Empezar?

1. **Lee este README completo**
2. **Revisa la [rúbrica de evaluación](rubrica-evaluacion.md)**
3. **Empieza con la teoría**: [01-introduccion-typescript.md](1-teoria/01-introduccion-typescript.md)
4. **Practica con ejercicios** en orden (01 → 05)
5. **Implementa el proyecto** adaptado a tu dominio
6. **Consulta recursos** según necesites

---

## 🔗 Navegación

| ⬅️ Bootcamp   |             Teoría ➡️ |
| :------------ | --------------------: |
| [Inicio](../) | [1-teoria](1-teoria/) |

---

## 📊 Estado de Completitud

**Semana 01**: ✅ Completa

- ✅ Teoría (6 archivos)
- ✅ Ejercicios (5 ejercicios con starter/solution)
- ✅ Proyecto (estructura con TODOs)
- ✅ Recursos (ebooks, videos, web)
- ✅ Glosario (A-Z)

---

_Última actualización: Enero 2026_
