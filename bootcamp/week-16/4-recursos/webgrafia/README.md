# 🌐 Webgrafía - Semana 16

## Documentación Oficial

### React Docs (Nuevo)

| Recurso     | Enlace                                                                                 | Descripción                           |
| ----------- | -------------------------------------------------------------------------------------- | ------------------------------------- |
| React.memo  | [react.dev/reference/react/memo](https://react.dev/reference/react/memo)               | Documentación oficial de memo()       |
| useMemo     | [react.dev/reference/react/useMemo](https://react.dev/reference/react/useMemo)         | Documentación oficial de useMemo      |
| useCallback | [react.dev/reference/react/useCallback](https://react.dev/reference/react/useCallback) | Documentación oficial de useCallback  |
| Profiler    | [react.dev/reference/react/Profiler](https://react.dev/reference/react/Profiler)       | Documentación del componente Profiler |

### React Docs (Legacy)

| Recurso                | Enlace                                                                            | Descripción                                   |
| ---------------------- | --------------------------------------------------------------------------------- | --------------------------------------------- |
| Optimizing Performance | [legacy.reactjs.org](https://legacy.reactjs.org/docs/optimizing-performance.html) | Guía completa de optimización (aún relevante) |

---

## Artículos Recomendados

### 1. When to useMemo and useCallback - Kent C. Dodds

- **Enlace**: [kentcdodds.com/blog/usememo-and-usecallback](https://kentcdodds.com/blog/usememo-and-usecallback)
- **Autor**: Kent C. Dodds
- **Idioma**: Inglés
- **Descripción**: Artículo fundamental que explica cuándo usar (y cuándo NO usar) estas optimizaciones. Lectura obligatoria para entender el costo-beneficio de cada hook.

---

### 2. Before You memo() - Dan Abramov

- **Enlace**: [overreacted.io/before-you-memo](https://overreacted.io/before-you-memo/)
- **Autor**: Dan Abramov (Core Team React)
- **Idioma**: Inglés
- **Descripción**: Alternativas a memo() que podrían ser mejores en muchos casos. Explica técnicas como mover estado hacia abajo o separar componentes.

---

### 3. Why React Re-Renders - Josh Comeau

- **Enlace**: [joshwcomeau.com/react/why-react-re-renders](https://www.joshwcomeau.com/react/why-react-re-renders/)
- **Autor**: Josh W. Comeau
- **Idioma**: Inglés
- **Descripción**: Explicación visual e interactiva del sistema de renders de React. Incluye animaciones y ejemplos en vivo que ayudan a entender exactamente cuándo y por qué React re-renderiza.

---

### 4. Complete Guide to React.memo - LogRocket

- **Enlace**: [blog.logrocket.com/react-memo-vs-usememo](https://blog.logrocket.com/react-memo-vs-usememo/)
- **Autor**: LogRocket Blog
- **Idioma**: Inglés
- **Descripción**: Comparación detallada de `React.memo` vs `useMemo`. Incluye benchmarks y casos de uso específicos.

---

### 5. A Visual Guide to React Rendering - Alex Sidorenko

- **Enlace**: [alexsidorenko.com/blog/react-render-always-rerenders](https://alexsidorenko.com/blog/react-render-always-rerenders/)
- **Autor**: Alex Sidorenko
- **Idioma**: Inglés
- **Descripción**: Serie de artículos con GIFs animados que muestran exactamente cómo funciona el renderizado en React.

---

## Herramientas

### Extensiones de Navegador

| Herramienta    | Enlace                                                                                                               | Descripción                               |
| -------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| React DevTools | [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) | Extensión oficial para debugging de React |

### Librerías de Debugging

| Herramienta        | Enlace                                                            | Descripción                                  |
| ------------------ | ----------------------------------------------------------------- | -------------------------------------------- |
| Why Did You Render | [GitHub](https://github.com/welldone-software/why-did-you-render) | Detecta renders innecesarios automáticamente |
| React Scan         | [GitHub](https://github.com/aidenybai/react-scan)                 | Escanea problemas de rendimiento en tu app   |

---

## Playgrounds Online

| Plataforma            | Enlace                                                         | Descripción                  |
| --------------------- | -------------------------------------------------------------- | ---------------------------- |
| CodeSandbox           | [codesandbox.io](https://codesandbox.io/s/new)                 | IDE online con soporte React |
| StackBlitz            | [stackblitz.com](https://stackblitz.com/fork/react-ts)         | Template React + TypeScript  |
| TypeScript Playground | [typescriptlang.org/play](https://www.typescriptlang.org/play) | Experimentar con tipos       |

---

## Benchmarks y Comparativas

| Recurso                | Enlace                                                                               | Descripción                                 |
| ---------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------- |
| JS Framework Benchmark | [krausest.github.io](https://krausest.github.io/js-framework-benchmark/current.html) | Comparativa de rendimiento entre frameworks |
| React Benchmark        | [GitHub](https://github.com/nickmccurdy/react-benchmark)                             | Herramienta de benchmarking para React      |

---

## 📝 Orden de Lectura Recomendado

1. **Documentación oficial** de React (memo, useMemo, useCallback)
2. **Kent C. Dodds** - When to useMemo and useCallback
3. **Dan Abramov** - Before You memo()
4. **Josh Comeau** - Why React Re-Renders
5. **Instalar** React DevTools y Why Did You Render
