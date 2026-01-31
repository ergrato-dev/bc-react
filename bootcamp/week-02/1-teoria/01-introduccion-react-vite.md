# Introducción a React y Vite

## 🎯 Objetivos de Aprendizaje

- Comprender qué es React y por qué es popular
- Entender el concepto de Virtual DOM
- Conocer la diferencia entre React y otros frameworks
- Aprender qué es Vite y sus ventajas sobre Create React App
- Configurar un proyecto React + TypeScript con Vite

---

## 📋 ¿Qué es React?

**React** es una biblioteca de JavaScript (desarrollada por Facebook/Meta) para construir interfaces de usuario. A diferencia de frameworks como Angular o Vue, React se centra específicamente en la **capa de vista** (UI).

### Características Principales

1. **Declarativo**: Describes cómo se ve tu UI y React se encarga de actualizarla
2. **Basado en Componentes**: La UI se divide en piezas reutilizables
3. **Learn Once, Write Anywhere**: React puede renderizar en web, mobile (React Native), VR, etc.
4. **Virtual DOM**: Optimización de actualizaciones del DOM real

```typescript
// QUÉ: Ejemplo básico de componente React con TypeScript
// PARA: Mostrar la sintaxis fundamental de un componente funcional
// IMPACTO: Este patrón se usará en todo el bootcamp

import React from 'react';

// Componente simple que retorna JSX
const Welcome: React.FC = () => {
  return <h1>¡Hola, React con TypeScript!</h1>;
};

export default Welcome;
```

---

## 🌳 Virtual DOM

El **Virtual DOM** es una representación en memoria del DOM real. React usa este concepto para optimizar las actualizaciones de la UI.

### Proceso de Actualización

1. **Estado cambia** → React crea un nuevo Virtual DOM
2. **Diffing** → React compara el nuevo Virtual DOM con el anterior
3. **Reconciliación** → React calcula el conjunto mínimo de cambios necesarios
4. **Actualización** → React aplica solo esos cambios al DOM real

```typescript
// QUÉ: Ejemplo de cómo React actualiza eficientemente el DOM
// PARA: Ilustrar el concepto de Virtual DOM en acción
// IMPACTO: Entender esto ayuda a escribir componentes eficientes

import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Cuando count cambia, React:
  // 1. Crea nuevo Virtual DOM con el nuevo valor
  // 2. Compara con el Virtual DOM anterior
  // 3. Actualiza SOLO el texto que cambió en el DOM real
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};
```

**Ventaja**: En lugar de actualizar todo el `<div>`, React solo actualiza el texto dentro de `<p>` cuando `count` cambia.

---

## 🆚 React vs Otros Frameworks

| Característica | React | Vue | Angular |
|----------------|-------|-----|---------|
| **Tipo** | Biblioteca | Framework progresivo | Framework completo |
| **Tamaño** | ~45 KB | ~34 KB | ~167 KB |
| **Curva de aprendizaje** | Media | Baja | Alta |
| **TypeScript** | Opcional (pero muy común) | Opcional | Nativo |
| **Estado** | Hooks, Redux, Zustand | Composition API, Vuex | RxJS, NgRx |
| **Renderizado** | Virtual DOM | Virtual DOM | Real DOM + Change Detection |

**¿Por qué elegir React?**
- ✅ Ecosistema gigante y comunidad activa
- ✅ Demanda laboral alta (más ofertas de trabajo)
- ✅ Flexibilidad para elegir herramientas
- ✅ Excelente con TypeScript
- ✅ React Native para desarrollo móvil

---

## ⚡ ¿Qué es Vite?

**Vite** (pronunciado "vit", como "rápido" en francés) es una herramienta de construcción (build tool) moderna que reemplaza a **Create React App (CRA)**.

### Ventajas de Vite sobre CRA

| Aspecto | Create React App | Vite |
|---------|------------------|------|
| **Inicio del servidor** | 20-60 segundos | <1 segundo |
| **Hot Module Replacement (HMR)** | Lento (3-5 seg) | Instantáneo (<100ms) |
| **Build para producción** | Webpack (lento) | Rollup (rápido) |
| **Tamaño del bundle** | Más grande | Optimizado |
| **ES Modules** | No nativo | Nativo del navegador |
| **Mantenimiento** | Bajo (semi-abandonado) | Activo |

```typescript
// QUÉ: Configuración básica de Vite para React + TypeScript
// PARA: Entender cómo se configura un proyecto moderno
// IMPACTO: Este es el setup que usaremos en todos los proyectos

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Puerto del servidor de desarrollo
    open: true, // Abre el navegador automáticamente
  },
  build: {
    outDir: 'dist', // Carpeta de salida para producción
    sourcemap: true, // Habilita source maps para debugging
  },
});
```

### ¿Por qué Vite es tan rápido?

1. **ES Modules nativos**: Vite sirve el código directamente sin bundling durante desarrollo
2. **Pre-bundling de dependencias**: Solo empaqueta `node_modules` con esbuild (escrito en Go)
3. **HMR optimizado**: Solo actualiza el módulo que cambió, no toda la app
4. **Lazy loading por defecto**: Solo carga lo necesario cuando se necesita

---

## 🚀 Crear Proyecto con Vite

### Comandos de Instalación

```bash
# Opción 1: Con pnpm (recomendado)
pnpm create vite@latest mi-app-react -- --template react-ts

# Opción 2: Con yarn
yarn create vite mi-app-react --template react-ts

# Entrar al proyecto
cd mi-app-react

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

### Estructura del Proyecto Generado

```
mi-app-react/
├── node_modules/
├── public/
│   └── vite.svg           # Assets estáticos
├── src/
│   ├── App.css            # Estilos del componente App
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada de React
│   ├── index.css          # Estilos globales
│   └── vite-env.d.ts      # Tipos de Vite
├── .gitignore
├── index.html             # HTML principal (¡único!)
├── package.json
├── tsconfig.json          # Configuración de TypeScript
├── tsconfig.node.json     # TypeScript para Vite config
└── vite.config.ts         # Configuración de Vite
```

### Archivos Clave

#### `index.html` (Punto de Entrada)

```html
<!-- QUÉ: Archivo HTML principal de la aplicación -->
<!-- PARA: Servir como contenedor para React -->
<!-- IMPACTO: Este es el único HTML que necesitarás -->

<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi App React</title>
  </head>
  <body>
    <!-- Div donde React montará toda la aplicación -->
    <div id="root"></div>
    <!-- Script que inicia la aplicación React -->
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

#### `src/main.tsx` (Bootstrap de React)

```typescript
// QUÉ: Punto de entrada de la aplicación React
// PARA: Montar el componente raíz en el DOM
// IMPACTO: Aquí se conecta React con el HTML

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Buscar el div#root en el HTML
const rootElement = document.getElementById('root');

// Validación TypeScript: asegurarse de que el elemento existe
if (!rootElement) {
  throw new Error('Root element not found');
}

// Crear el root de React 18
const root = ReactDOM.createRoot(rootElement);

// Renderizar el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

#### `src/App.tsx` (Componente Principal)

```typescript
// QUÉ: Componente raíz de la aplicación
// PARA: Servir como contenedor principal de todos los demás componentes
// IMPACTO: Aquí se construye la estructura general de la app

import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>Vite + React + TypeScript</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Contador: {count}
        </button>
      </div>
    </div>
  );
};

export default App;
```

---

## 🔧 Comandos Útiles de Vite

```bash
# Desarrollo
pnpm dev           # Inicia servidor de desarrollo en http://localhost:5173

# Construcción
pnpm build         # Genera build optimizado en /dist

# Vista previa
pnpm preview       # Sirve el build de producción localmente

# Linting (si configuraste ESLint)
pnpm lint          # Revisa errores de código

# Type checking
pnpm tsc           # Verifica tipos sin generar archivos
```

---

## 🔍 React.StrictMode

```typescript
// QUÉ: Herramienta de desarrollo para detectar problemas
// PARA: Identificar side effects, APIs deprecadas, y otros issues
// IMPACTO: Ayuda a escribir código más robusto

<React.StrictMode>
  <App />
</React.StrictMode>
```

**Comportamiento en StrictMode:**
- ⚠️ Los componentes se renderizan **dos veces** en desarrollo (no en producción)
- ⚠️ Los efectos (useEffect) se ejecutan **dos veces**
- ⚠️ Se detectan APIs deprecadas de React
- ✅ Ayuda a encontrar bugs relacionados con side effects

**NO es un bug**, es intencional para ayudarte a escribir mejor código.

---

## 📦 Dependencias Iniciales

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0"
  }
}
```

**Notas importantes:**
- `react` y `react-dom` son las librerías core
- `@types/*` son definiciones de tipos para TypeScript
- `@vitejs/plugin-react` habilita JSX/TSX y Fast Refresh
- Vite usa **ES Modules** por defecto (no CommonJS)

---

## 🎨 Hot Module Replacement (HMR)

HMR es la capacidad de **actualizar módulos en caliente** sin recargar la página completa.

```typescript
// QUÉ: Ejemplo de preservación de estado con HMR
// PARA: Mostrar cómo Vite mantiene el estado al editar
// IMPACTO: Desarrollo más rápido y fluido

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  // Si editas el texto del botón y guardas:
  // - El componente se actualiza INSTANTÁNEAMENTE
  // - El valor de 'count' se PRESERVA
  // - No se recarga toda la página
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicks: {count}
    </button>
  );
};
```

**Ventaja**: Puedes editar estilos, texto, o lógica y ver cambios inmediatos sin perder el estado de tu aplicación.

---

## 🧪 TypeScript en React con Vite

Vite tiene soporte nativo para TypeScript. No necesitas configuración adicional.

```typescript
// QUÉ: Tipado estricto en componentes React
// PARA: Aprovechar TypeScript para prevenir errores
// IMPACTO: Código más seguro y mantenible

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <button onClick={() => onDelete(user.id)}>Eliminar</button>
    </div>
  );
};

// TypeScript valida que:
// ✅ user tiene las propiedades correctas
// ✅ onDelete recibe un número
// ✅ No puedes pasar props incorrectas al componente
```

---

## 🌐 Árbol de Componentes

En React, la UI es un **árbol de componentes** donde:
- Hay un componente raíz (`App`)
- Los componentes pueden contener otros componentes
- Los datos fluyen de arriba hacia abajo (props)

```typescript
// QUÉ: Ejemplo de composición de componentes
// PARA: Mostrar cómo se estructura una aplicación React
// IMPACTO: Entender la jerarquía es clave para diseñar apps

// Componente raíz
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

// Componente Header
const Header: React.FC = () => {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
};

// Componente Main
const Main: React.FC = () => {
  return (
    <main>
      <Sidebar />
      <Content />
    </main>
  );
};

// Árbol resultante:
// App
// ├── Header
// │   ├── Logo
// │   └── Navigation
// ├── Main
// │   ├── Sidebar
// │   └── Content
// └── Footer
```

---

## 📊 Comparación: CRA vs Vite

### Create React App (Obsoleto)

```bash
# CRA (no recomendado)
npx create-react-app mi-app --template typescript

# Problemas:
# ❌ Inicio lento (30-60 segundos)
# ❌ HMR lento (3-5 segundos por cambio)
# ❌ Webpack complejo y lento
# ❌ Mantenimiento bajo (última actualización: 2022)
# ❌ Bundle grande en producción
```

### Vite (Moderno y Recomendado)

```bash
# Vite (recomendado)
pnpm create vite@latest mi-app -- --template react-ts

# Ventajas:
# ✅ Inicio instantáneo (<1 segundo)
# ✅ HMR instantáneo (<100ms)
# ✅ Rollup optimizado para producción
# ✅ Mantenimiento activo
# ✅ Bundle más pequeño
# ✅ Configuración más simple
```

---

## 🛠️ Configuración Avanzada de Vite

```typescript
// QUÉ: Configuración personalizada de Vite
// PARA: Adaptar Vite a necesidades específicas del proyecto
// IMPACTO: Mayor control sobre el proceso de build

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  // Alias para imports más limpios
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
  
  // Configuración del servidor de desarrollo
  server: {
    port: 3000,
    open: true,
    cors: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  
  // Configuración de build
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
```

---

## ✅ Checklist de Verificación

Después de estudiar este tema, debes ser capaz de:

- [ ] Explicar qué es React y sus características principales
- [ ] Describir cómo funciona el Virtual DOM
- [ ] Comparar React con otros frameworks (Vue, Angular)
- [ ] Justificar por qué Vite es mejor que Create React App
- [ ] Crear un proyecto React + TypeScript con Vite
- [ ] Identificar los archivos clave en un proyecto Vite
- [ ] Entender qué hace `main.tsx` y por qué es importante
- [ ] Usar HMR para desarrollo rápido
- [ ] Explicar qué es React.StrictMode y por qué se usa

---

## 📚 Recursos Adicionales

- **React Docs Oficial**: https://react.dev/
- **Vite Docs Oficial**: https://vitejs.dev/
- **React + TypeScript Cheatsheet**: https://react-typescript-cheatsheet.netlify.app/
- **Why Vite**: https://vitejs.dev/guide/why.html

---

## 🔗 Navegación

[⬅️ Atrás: Week 01 - TypeScript Fundamentals](../../week-01/README.md) | [➡️ Siguiente: JSX y TSX](./02-jsx-tsx-sintaxis.md)
