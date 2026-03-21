# 🌐 Webgrafía - useEffect y Efectos Secundarios

## 🎯 Recursos Web Recomendados

---

## 📚 Documentación Oficial

### 1. React Documentation - useEffect (Esencial)

**Enlace**: [react.dev/reference/react/useEffect](https://react.dev/reference/react/useEffect)

**Descripción**: La documentación oficial de React 18+. Es tu referencia principal y más actualizada.

**Secciones críticas**:

- [useEffect Reference](https://react.dev/reference/react/useEffect)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)
- [Lifecycle of Reactive Effects](https://react.dev/learn/lifecycle-of-reactive-effects)
- [Removing Effect Dependencies](https://react.dev/learn/removing-effect-dependencies)

**⭐ Lectura obligatoria**: Estos artículos son la base para entender useEffect correctamente.

---

### 2. React Beta Docs - Effects

**Enlace**: [react.dev/learn](https://react.dev/learn)

**Descripción**: La nueva documentación de React (oficial desde 2023) con mejores explicaciones y ejemplos modernos.

---

### 3. TypeScript + React

**Enlace**: [react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks)

**Descripción**: Guía específica para tipar correctamente useEffect con TypeScript.

---

## 📖 Artículos Fundamentales

### 1. A Complete Guide to useEffect (Dan Abramov)

**Enlace**: [overreacted.io/a-complete-guide-to-useeffect](https://overreacted.io/a-complete-guide-to-useeffect/)

**Autor**: Dan Abramov (React Core Team)  
**Duración de lectura**: ~30 min  
**Nivel**: Intermedio a Avanzado

**Por qué leerlo**: El artículo definitivo sobre useEffect. Explica el mental model correcto y conceptos profundos.

**Temas clave**:

- Cada render tiene sus propias props y estado
- Cada render tiene sus propios efectos
- Cómo funciona la comparación de dependencias
- Por qué mentir sobre dependencias es malo

**⭐ Lectura obligatoria**: No puedes dominar useEffect sin leer este artículo.

---

### 2. How to Fetch Data with React Hooks

**Enlace**: [robinwieruch.de/react-hooks-fetch-data](https://www.robinwieruch.de/react-hooks-fetch-data/)

**Autor**: Robin Wieruch  
**Duración**: ~20 min  
**Nivel**: Principiante a Intermedio

Guía práctica paso a paso sobre fetching de datos con useEffect.

---

### 3. Using the Effect Hook

**Enlace**: [legacy.reactjs.org/docs/hooks-effect.html](https://legacy.reactjs.org/docs/hooks-effect.html)

**Descripción**: Documentación legacy pero con buenos ejemplos básicos.

---

### 4. Common Mistakes with React Hooks

**Enlace**: [kentcdodds.com/blog/common-mistakes-with-react-testing-library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

**Autor**: Kent C. Dodds  
**Nivel**: Intermedio

Errores comunes y cómo evitarlos.

---

## 🔧 Herramientas Interactivas

### 1. React DevTools

**Enlace**: [react.dev/learn/react-developer-tools](https://react.dev/learn/react-developer-tools)

**Descripción**: Extensión de navegador esencial para debuggear efectos.

**Características**:

- Ver cuándo se ejecutan los efectos
- Inspeccionar dependencias
- Profiler para medir rendimiento

---

### 2. CodeSandbox - React Templates

**Enlace**: [codesandbox.io/s/new](https://codesandbox.io/s/new)

**Descripción**: Entorno online para probar código React rápidamente.

**Ventajas**:

- No requiere configuración local
- Compartir código fácilmente
- Hot reload automático

---

### 3. StackBlitz - React Projects

**Enlace**: [stackblitz.com/fork/react](https://stackblitz.com/fork/react)

**Descripción**: Similar a CodeSandbox pero más rápido. Usa WebContainers.

---

### 4. React Playground (Oficial)

**Enlace**: [react.dev/learn#try-react-locally](https://react.dev/learn#try-react-locally)

**Descripción**: Editor integrado en la documentación oficial.

---

## 📝 Blogs y Artículos por Tema

### Dependency Arrays

#### 1. Understanding useEffect Dependency Array

**Enlace**: [blog.logrocket.com/guide-to-react-useeffect-hook](https://blog.logrocket.com/guide-to-react-useeffect-hook/)

Explicación detallada de cómo funcionan las dependencias.

---

#### 2. The Dependency Array is Not a Dependency Array

**Enlace**: [epicreact.dev/the-dependency-array](https://epicreact.dev/the-dependency-array)

**Autor**: Kent C. Dodds

Cambia tu forma de pensar sobre las dependencias.

---

### Cleanup Functions

#### 3. Cleaning Up After useEffect

**Enlace**: [daveceddia.com/useeffect-hook-examples](https://daveceddia.com/useeffect-hook-examples/)

Ejemplos prácticos de cleanup en diferentes escenarios.

---

#### 4. Memory Leaks in React

**Enlace**: [felixgerschau.com/react-memory-leaks-useeffect-data-fetching](https://felixgerschau.com/react-memory-leaks-useeffect-data-fetching/)

Cómo evitar memory leaks con useEffect.

---

### Data Fetching

#### 5. Data Fetching Patterns in React

**Enlace**: [tanstack.com/query/latest/docs/react/guides/migrating-to-react-query-3](https://tanstack.com/query/latest)

React Query docs - alternativa moderna a useEffect para fetching.

---

#### 6. AbortController with Fetch

**Enlace**: [developer.mozilla.org/en-US/docs/Web/API/AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

Documentación de AbortController para cancelar peticiones.

---

### Custom Hooks

#### 7. Building Your Own Hooks

**Enlace**: [react.dev/learn/reusing-logic-with-custom-hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)

Guía oficial para crear custom hooks con useEffect.

---

#### 8. usehooks.com

**Enlace**: [usehooks.com](https://usehooks.com/)

Colección de custom hooks reutilizables con código fuente.

---

#### 9. react-use Library

**Enlace**: [github.com/streamich/react-use](https://github.com/streamich/react-use)

Librería con 100+ custom hooks listos para usar.

---

## 🎨 Patrones y Mejores Prácticas

### 1. Patterns.dev - React Patterns

**Enlace**: [patterns.dev/react](https://www.patterns.dev/react)

**Descripción**: Patrones de diseño modernos en React.

**Secciones relevantes**:

- Effect Patterns
- Data Fetching Patterns
- Optimization Patterns

---

### 2. React Design Patterns

**Enlace**: [reactpatterns.com](https://reactpatterns.com/)

Colección de patrones comunes con ejemplos.

---

### 3. React Best Practices 2024

**Enlace**: [dev.to/t/react](https://dev.to/t/react)

Artículos actualizados sobre mejores prácticas.

---

## 🐛 Debugging y Troubleshooting

### 1. React DevTools Profiler

**Enlace**: [react.dev/learn/react-developer-tools#profiler](https://react.dev/learn/react-developer-tools#profiler)

Cómo usar el profiler para debuggear efectos.

---

### 2. Common React Errors

**Enlace**: [react.dev/learn/troubleshooting](https://react.dev/learn/troubleshooting)

Soluciones a errores comunes con efectos.

---

### 3. ESLint Plugin React Hooks

**Enlace**: [npmjs.com/package/eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)

Plugin que detecta errores en el uso de hooks.

**Reglas importantes**:

- `rules-of-hooks`: Verifica reglas básicas
- `exhaustive-deps`: Verifica dependencias completas

---

## 💬 Comunidades y Foros

### 1. React Discord

**Enlace**: [discord.gg/react](https://discord.gg/reactiflux)

Comunidad oficial de React. Canal #help-react para preguntas.

---

### 2. Stack Overflow - React Tag

**Enlace**: [stackoverflow.com/questions/tagged/reactjs](https://stackoverflow.com/questions/tagged/reactjs)

Busca `[reactjs] [useeffect]` para preguntas específicas.

---

### 3. Reddit - r/reactjs

**Enlace**: [reddit.com/r/reactjs](https://www.reddit.com/r/reactjs/)

Comunidad activa con discusiones diarias.

---

### 4. React Discussions (GitHub)

**Enlace**: [github.com/reactwg/react-18/discussions](https://github.com/reactwg/react-18/discussions)

Discusiones oficiales del equipo de React.

---

## 📊 Recursos de APIs

### 1. JSONPlaceholder

**Enlace**: [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)

API fake para practicar fetching de datos.

---

### 2. ReqRes

**Enlace**: [reqres.in](https://reqres.in/)

API con usuarios fake para testing.

---

### 3. Random User API

**Enlace**: [randomuser.me](https://randomuser.me/)

Genera usuarios aleatorios para practicar.

---

## 🔍 Referencias Rápidas

### 1. React Hooks Cheat Sheet

**Enlace**: [react-hooks-cheatsheet.com](https://react-hooks-cheatsheet.com/)

Referencia visual rápida.

---

### 2. useEffect Flow Diagram

**Enlace**: [donavon.js.org/hook-flow](https://donavon.js.org/hook-flow/)

Diagrama visual del ciclo de vida de efectos.

---

### 3. JavaScript.info - Async/Await

**Enlace**: [javascript.info/async-await](https://javascript.info/async-await)

Repaso de async/await (necesario para efectos con fetch).

---

## 🎓 Cursos Online (Gratis)

### 1. freeCodeCamp - React Course

**Enlace**: [freecodecamp.org/learn/front-end-development-libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/)

Curso interactivo con sección de hooks.

---

### 2. Scrimba - React Course

**Enlace**: [scrimba.com/learn/learnreact](https://scrimba.com/learn/learnreact)

Curso interactivo con editor integrado.

---

### 3. Full Stack Open

**Enlace**: [fullstackopen.com/en/part2](https://fullstackopen.com/en/part2)

Universidad de Helsinki - Part 2 cubre efectos.

---

## ✅ Checklist de Lectura Esencial

Para dominar useEffect en Semana 03:

- [ ] React Docs: useEffect Reference
- [ ] React Docs: Synchronizing with Effects
- [ ] React Docs: You Might Not Need an Effect
- [ ] Dan Abramov: Complete Guide to useEffect
- [ ] Robin Wieruch: Fetching Data with Hooks
- [ ] MDN: AbortController
- [ ] Kent C. Dodds: Dependency Array article

---

## 💡 Consejos de Navegación

1. **Empieza con React Docs oficial**: Es el mejor recurso
2. **Guarda links importantes**: Usa favoritos o Notion
3. **Lee código real**: GitHub search `language:JavaScript useEffect`
4. **Únete a comunidades**: Discord/Reddit para preguntas rápidas
5. **Usa Stack Overflow**: Busca antes de preguntar

---

## 🔖 Links Útiles de Referencia Rápida

| Recurso         | URL                                                                                                              | Uso                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------- |
| React Docs      | [react.dev](https://react.dev)                                                                                   | Documentación oficial |
| CodeSandbox     | [codesandbox.io](https://codesandbox.io)                                                                         | Testing rápido        |
| Stack Overflow  | [stackoverflow.com](https://stackoverflow.com/questions/tagged/reactjs)                                          | Solucionar errores    |
| React DevTools  | [Chrome Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) | Debug                 |
| JSONPlaceholder | [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)                                             | API de prueba         |

---

_Última actualización: Enero 2026_
