# Ejercicio 01: Detectar Renders Innecesarios

## 🎯 Objetivo

Aprender a identificar renders innecesarios usando `console.log`, `useRef` y React DevTools Profiler.

## 📋 Descripción

En este ejercicio aprenderás a:

1. Detectar cuándo un componente renderiza usando logs
2. Contar renders con `useRef`
3. Usar React DevTools Profiler para analizar renders
4. Documentar hallazgos antes de optimizar

## ⏱️ Tiempo Estimado

40 minutos

## 📁 Estructura

```
ejercicio-01-detectar-renders/
├── README.md
├── starter/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   └── src/
│       ├── App.tsx
│       ├── components/
│       │   ├── Dashboard.tsx
│       │   ├── ItemList.tsx
│       │   ├── ItemCard.tsx
│       │   └── Counter.tsx
│       └── main.tsx
└── solution/
    └── (misma estructura con detección implementada)
```

## 🚀 Instrucciones

### Paso 1: Instalar Dependencias

```bash
cd starter
pnpm install
pnpm dev
```

Abre la aplicación en `http://localhost:5173`

### Paso 2: Agregar Logs de Render

Abre `src/components/ItemCard.tsx` y descomenta la sección para detectar renders:

```typescript
// ============================================
// PASO 2: Detectar renders con console.log
// ============================================

// Descomenta las siguientes líneas:
// console.log(`[ItemCard] Renderizando: ${item.name}`);
```

### Paso 3: Contar Renders con useRef

Abre `src/components/Dashboard.tsx` y descomenta el contador de renders:

```typescript
// ============================================
// PASO 3: Contador de renders
// ============================================

// Descomenta las siguientes líneas:
// const renderCount = useRef(0);
// renderCount.current += 1;
// console.log(`[Dashboard] Render #${renderCount.current}`);
```

### Paso 4: Probar la Aplicación

1. Abre la consola del navegador (F12 → Console)
2. Realiza estas acciones y observa los logs:
   - Escribe en el campo de búsqueda
   - Haz click en el botón del contador
   - Marca/desmarca items

**Pregunta**: ¿Qué componentes renderizan innecesariamente?

### Paso 5: Usar React DevTools Profiler

1. Abre React DevTools → Profiler
2. Click en "Start profiling" (⏺)
3. Realiza las mismas acciones
4. Click en "Stop profiling" (⏹)
5. Analiza el flamegraph

**Documenta**:

- ¿Cuántos componentes renderizan por acción?
- ¿Cuánto tiempo tarda cada render?
- ¿Qué dice "Why did this render"?

### Paso 6: Documentar Hallazgos

Crea un archivo `ANALISIS.md` con tus observaciones:

```markdown
# Análisis de Renders

## Acción: Escribir en búsqueda

- Componentes que renderizan: [lista]
- Tiempo total: [ms]
- Renders innecesarios: [sí/no, cuáles]

## Acción: Click en contador

- Componentes que renderizan: [lista]
- Tiempo total: [ms]
- Renders innecesarios: [sí/no, cuáles]

## Conclusiones

- Componentes a optimizar: [lista]
- Razón del re-render innecesario: [explicación]
```

## ✅ Criterios de Aceptación

- [ ] Logs de render agregados en todos los componentes
- [ ] Contador de renders funcionando
- [ ] Sesión de Profiler grabada
- [ ] Documento ANALISIS.md completo con hallazgos
- [ ] Identificados al menos 2 renders innecesarios

## 💡 Tips

- Usa `%c` en console.log para colores: `console.log('%c[ItemCard]', 'color: blue', ...)`
- El Profiler muestra en gris los componentes que NO renderizaron
- "Why did this render?" te dice exactamente qué prop cambió

## 📊 Resultado Esperado

Al hacer click en el contador, deberías ver en consola:

```
[Dashboard] Render #2
[ItemList] Renderizando lista
[ItemCard] Renderizando: Item 1
[ItemCard] Renderizando: Item 2
[ItemCard] Renderizando: Item 3
...
```

**Pregunta clave**: ¿Por qué ItemList e ItemCard renderizan si el contador no los afecta?

## 🔗 Siguiente Ejercicio

Una vez identificados los renders innecesarios, en el siguiente ejercicio aprenderás a optimizarlos con `React.memo`.

➡️ [Ejercicio 02: Aplicar React.memo](../ejercicio-02-react-memo/)
