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

- [01 - Introducción a React y Vite](1-teoria/01-introduccion-react-vite.md)
- [02 - JSX y TSX: Sintaxis y Diferencias](1-teoria/02-jsx-tsx-sintaxis.md)
- [03 - Componentes Funcionales con TypeScript](1-teoria/03-componentes-funcionales-typescript.md)
- [04 - Props: Tipado y Validación](1-teoria/04-props-tipado-validacion.md)
- [05 - Estado Local con useState](1-teoria/05-estado-local-usestate.md)
- [06 - Eventos Sintéticos en React](1-teoria/06-eventos-sinteticos-react.md)

### 2️⃣ Ejercicios (2-ejercicios/)

- **Ejercicio 1**: Primer Componente con TypeScript (20 min)
- **Ejercicio 2**: Props Tipados y Children (25 min)
- **Ejercicio 3**: Estado con useState (25 min)
- **Ejercicio 4**: Eventos y Formularios (30 min)
- **Ejercicio 5**: Listas y Renderizado Condicional (30 min)

### 3️⃣ Proyecto Semanal (3-proyecto/)

**Proyecto**: Interfaz Interactiva con Componentes

Crea una interfaz con múltiples componentes, estado local y manejo de eventos, adaptada a tu dominio asignado (dashboard de biblioteca, panel de farmacia, sistema de gimnasio, etc.).

### 4️⃣ Recursos Adicionales (4-recursos/)

- [Ebooks Gratuitos](4-recursos/ebooks-free/)
- [Videografía](4-recursos/videografia/)
- [Webgrafía](4-recursos/webgrafia/)

### 5️⃣ Glosario (5-glosario/)

[Términos técnicos de React A-Z](5-glosario/README.md)

---

## ⏱️ Distribución del Tiempo (8 horas)

| Actividad  | Tiempo | Descripción                      |
| ---------- | ------ | -------------------------------- |
| Teoría     | 2-2.5h | Leer material teórico y ejemplos |
| Ejercicios | 3-3.5h | Completar 5 ejercicios guiados   |
| Proyecto   | 2-2.5h | Implementar interfaz interactiva |

**Total**: ~8 horas

---

## 📌 Entregables

### 1. Conocimiento 🧠 (30%)

- Comprensión de componentes y JSX/TSX
- Diferencia entre props y state
- Manejo de eventos en React

**Evaluación**: Cuestionarios, revisión de código

### 2. Desempeño 💪 (40%)

- Completar 5 ejercicios guiados
- Componentes funcionales sin errores
- TypeScript estricto sin `any`

**Evaluación**: Ejercicios ejecutables

### 3. Producto 📦 (30%)

- Proyecto semanal funcional
- Interfaz interactiva con estado
- Código limpio con tipos correctos

**Evaluación**: Ver [rubrica-evaluacion.md](rubrica-evaluacion.md)

---

## ✅ Checklist de Progreso

- [ ] Leí toda la teoría (1-teoria/)
- [ ] Completé ejercicio 1: Primer Componente
- [ ] Completé ejercicio 2: Props Tipados
- [ ] Completé ejercicio 3: useState
- [ ] Completé ejercicio 4: Eventos
- [ ] Completé ejercicio 5: Listas
- [ ] Implementé el proyecto semanal
- [ ] Revisé recursos adicionales
- [ ] Consulté el glosario

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
