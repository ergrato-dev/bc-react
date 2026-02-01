# 🧪 Ejercicio 04: Layouts Anidados con Outlet

## 🎯 Objetivo

Implementar layouts reutilizables con el componente Outlet para rutas anidadas.

---

## 📋 Instrucciones

### Paso 1: Crear un Layout Principal

Abre `starter/layouts/MainLayout.tsx` y crea un layout con Header, contenido y Footer.

### Paso 2: Usar Outlet para Contenido Dinámico

El Outlet renderiza la ruta hija activa dentro del layout.

### Paso 3: Configurar Rutas Anidadas

Abre `starter/App.tsx` y configura las rutas para usar el layout.

### Paso 4: Crear un Sub-Layout (Dashboard)

Implementa un layout secundario para la sección dashboard.

---

## 📁 Archivos

```
ejercicio-04/
├── README.md
├── starter/
│   ├── App.tsx
│   └── layouts/
│       ├── MainLayout.tsx
│       └── DashboardLayout.tsx
└── solution/
    ├── App.tsx
    └── layouts/
        ├── MainLayout.tsx
        └── DashboardLayout.tsx
```

---

## ✅ Criterios de Éxito

- [ ] MainLayout muestra Header y Footer en todas las páginas
- [ ] Outlet renderiza el contenido de cada ruta
- [ ] Rutas anidadas funcionan correctamente
- [ ] DashboardLayout tiene su propia estructura

---

_Siguiente: [Ejercicio 05 - Rutas Protegidas](../ejercicio-05-rutas-protegidas/README.md)_
