# 🧪 Ejercicio 01: Configuración Básica de React Router

## 🎯 Objetivo

Configurar React Router v6 en una aplicación React con TypeScript, creando las primeras rutas básicas.

---

## 📋 Instrucciones

En este ejercicio configurarás React Router desde cero. El código está comentado para que lo descomentes paso a paso.

### Paso 1: Instalar Dependencias

```bash
pnpm add react-router-dom
```

### Paso 2: Configurar BrowserRouter

Abre `starter/main.tsx` y descomenta el código para envolver la app con BrowserRouter.

### Paso 3: Crear Páginas Básicas

Abre los archivos en `starter/pages/` y descomenta el código de cada página.

### Paso 4: Configurar Routes

Abre `starter/App.tsx` y descomenta la configuración de rutas.

### Paso 5: Probar la Navegación

Ejecuta la aplicación y navega manualmente cambiando la URL:

- `http://localhost:5173/`
- `http://localhost:5173/about`
- `http://localhost:5173/contact`

---

## 📁 Archivos

```
ejercicio-01/
├── README.md
├── starter/
│   ├── main.tsx
│   ├── App.tsx
│   └── pages/
│       ├── HomePage.tsx
│       ├── AboutPage.tsx
│       └── ContactPage.tsx
└── solution/
    ├── main.tsx
    ├── App.tsx
    └── pages/
        ├── HomePage.tsx
        ├── AboutPage.tsx
        └── ContactPage.tsx
```

---

## ✅ Criterios de Éxito

- [ ] BrowserRouter envuelve la aplicación
- [ ] Tres rutas configuradas (/, /about, /contact)
- [ ] Cada ruta renderiza su página correspondiente
- [ ] No hay errores en consola

---

_Siguiente: [Ejercicio 02 - Navegación con Link](../ejercicio-02-navegacion-links/README.md)_
