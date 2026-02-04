# 📘 Semana 02: Introducción a React con TypeScript

## 🎯 Objetivos de Aprendizaje

Al finalizar esta semana, serás capaz de:

- ✅ Crear componentes funcionales de React con TypeScript
- ✅ Tipar props correctamente usando interfaces
- ✅ Manejar estado local con useState tipado
- ✅ Comprender y escribir JSX/TSX
- ✅ Manejar eventos sintéticos de React
- ✅ Aplicar renderizado condicional y listas
- ✅ Configurar un proyecto React con Vite y TypeScript

---

## 📚 Requisitos Previos

- ✅ **Semana 01 completada**: TypeScript fundamentals
- Conocimiento de interfaces, types, generics y utility types
- Node.js 24 LTS instalado
- pnpm o yarn instalado (❌ NO usar npm)
- VS Code con extensiones TypeScript y React

---

## 🗂️ Estructura de la Semana

```
week-02/
├── 0-assets/              # Recursos visuales (SVGs, diagramas)
├── 1-teoria/              # Material teórico
├── 2-ejercicios/          # Ejercicios guiados
├── 3-proyecto/            # Proyecto semanal integrador
├── 4-recursos/            # Recursos adicionales
│   ├── ebooks-free/       # Libros gratuitos sobre React
│   ├── videografia/       # Videos y tutoriales
│   └── webgrafia/         # Documentación y artículos
├── 5-glosario/            # Términos clave (A-Z)
├── README.md              # Este archivo
└── rubrica-evaluacion.md  # Criterios de evaluación
```

---

## 📝 Contenidos

### 1️⃣ Teoría (1-teoria/)

- [01 - React, Vite y JSX/TSX](1-teoria/01-react-vite-jsx.md) **(consolidado)**
- [02 - Componentes Funcionales con TypeScript](1-teoria/02-componentes-funcionales-typescript.md)
- [03 - Props: Tipado y Validación](1-teoria/03-props-tipado-validacion.md)
- [04 - Estado Local con useState](1-teoria/04-estado-local-usestate.md)
- [05 - Eventos Sintéticos en React](1-teoria/05-eventos-sinteticos-react.md)

### 2️⃣ Ejercicios (2-ejercicios/)

- **Ejercicio 1**: Primer Componente con TypeScript (20 min)
- **Ejercicio 2**: Props Tipados y Children (25 min)
- **Ejercicio 3**: Estado con useState (25 min)
- **Ejercicio 4**: Eventos y Formularios (30 min)
- **Ejercicio 5**: Listas y Renderizado Condicional (30 min)

### 3️⃣ Proyecto Semanal (3-proyecto/)

**Proyecto**: Sistema CRUD Básico

Crea una interfaz con **4 componentes** (Header, Form, List, Card), estado local y manejo de eventos básicos, adaptada a tu dominio asignado.

**Alcance optimizado para 2-2.5h**:

- ✅ CRUD básico: Agregar, listar, eliminar
- ✅ 4 componentes esenciales
- ✅ Validación simple (campos vacíos)
- ❌ Sin búsqueda/filtrado (mover a semana 3+)
- ❌ Sin estadísticas complejas (mover a semana 3+)

### 4️⃣ Recursos Adicionales (4-recursos/)

- [Ebooks Gratuitos](4-recursos/ebooks-free/)
- [Videografía](4-recursos/videografia/)
- [Webgrafía](4-recursos/webgrafia/)

### 5️⃣ Glosario (5-glosario/)

[Términos técnicos de React A-Z](5-glosario/README.md)

---

## ⏱️ Distribución del Tiempo (8 horas) ✅ OPTIMIZADO

| Actividad  | Tiempo | Descripción                                            |
| ---------- | ------ | ------------------------------------------------------ |
| Teoría     | 2-2.5h | 5 archivos consolidados (~3,000 líneas vs 5,000 antes) |
| Ejercicios | 2.5h   | 5 ejercicios guiados (20+25+30+35+40 min)              |
| Proyecto   | 2-2.5h | CRUD básico con 4 componentes (simplificado)           |

**Total**: **~7.5-8.5h** ✅

**Cambios vs versión anterior**:

- ✅ Teoría reducida 40% (consolidado 01+02)
- ✅ Proyecto simplificado (de 6 a 4 componentes)
- ✅ Features reducidas (sin búsqueda/stats)
- ✅ Alineado con meta de 8 horas

---

## 📌 Entregable

### Proyecto Semanal 📦 (100%)

**Entregable único**: Sistema CRUD Básico con React y TypeScript

- ✅ Aplicación funcional que compila sin errores
- ✅ Componentes bien organizados y tipados
- ✅ Estado local con useState funcionando
- ✅ Adaptado correctamente al dominio asignado
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
- [ ] Aplicación compila sin errores
- [ ] Componentes bien tipados
- [ ] Adaptado a mi dominio asignado
- [ ] Incluí comentarios qué/para/impacto
- [ ] Incluí README descriptivo

---

## 🎓 Metodología de Aprendizaje

### Formato de Ejercicios: Tutorial Guiado

Los ejercicios siguen el formato de tutorial guiado:

1. Lee el README del ejercicio
2. Abre `starter/` y lee los comentarios
3. Descomenta código paso a paso
4. Ejecuta con `pnpm dev`
5. Verifica en el navegador

### Formato de Proyecto: TODOs

El proyecto usa TODOs para implementación:

1. Adapta a tu dominio asignado
2. Completa cada TODO
3. Comenta con qué/para/impacto
4. Prueba en el navegador

---

## 🏛️ Política de Dominios Únicos

Continúa trabajando con tu **dominio asignado** de la Semana 01:

- 📖 Biblioteca
- 💊 Farmacia
- 🏋️ Gimnasio
- 🏪 Restaurante
- (tu dominio específico)

**Objetivo**: Construir una aplicación coherente semana tras semana.

---

## 🔧 Configuración del Entorno

### Crear Proyecto React con Vite

```bash
pnpm create vite@latest my-app -- --template react-ts
cd my-app
pnpm install
pnpm dev
```

### Estructura Típica

```
src/
├── components/       # Componentes reutilizables
├── App.tsx          # Componente principal
├── main.tsx         # Punto de entrada
└── index.css        # Estilos globales
```

---

## 🔗 Recursos Esenciales

- [React Docs](https://react.dev/) - Documentación oficial (nueva)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vite Docs](https://vitejs.dev/)

---

## 🚀 ¿Cómo Empezar?

1. **Revisa la Semana 01** si tienes dudas de TypeScript
2. **Lee este README completo**
3. **Revisa la [rúbrica de evaluación](rubrica-evaluacion.md)**
4. **Empieza con teoría**: [01-introduccion-react-vite.md](1-teoria/01-introduccion-react-vite.md)
5. **Practica con ejercicios** en orden (01 → 05)
6. **Implementa el proyecto**

---

## 🔗 Navegación

| ⬅️ Semana 01           |   🏠 Bootcamp    |           Semana 03 ➡️ |
| :--------------------- | :--------------: | ---------------------: |
| [Week 01](../week-01/) | [Inicio](../../) | [Week 03](../week-03/) |

---

## 📊 Estado de Completitud

**Semana 02**: 🚧 En construcción

- ⏳ README y rúbrica
- ⏳ Teoría
- ⏳ Ejercicios
- ⏳ Proyecto
- ⏳ Recursos
- ⏳ Glosario

---

_Última actualización: Enero 2026_
