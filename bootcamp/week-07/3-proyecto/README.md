# 🚀 Proyecto Semanal: Sistema de Navegación Multi-página

## 🎯 Objetivo

Implementar un sistema de navegación completo aplicando todos los conceptos de React Router v6 aprendidos esta semana, adaptado a tu dominio asignado.

---

## 🏛️ Tu Dominio Asignado

**Dominio**: [El instructor te asignará tu dominio]

---

## 📋 Requisitos Funcionales

### 1. Estructura de Navegación

Implementa las siguientes rutas según tu dominio:

| Ruta         | Descripción                  | Ejemplo (Biblioteca) |
| ------------ | ---------------------------- | -------------------- |
| `/`          | Página principal             | Landing page         |
| `/items`     | Lista de elementos           | Lista de libros      |
| `/items/:id` | Detalle de elemento          | Detalle de libro     |
| `/dashboard` | Panel de gestión (protegido) | Dashboard de admin   |
| `/login`     | Página de login              | Login                |
| `/about`     | Información                  | Acerca de            |
| `*`          | 404 Not Found                | Página no encontrada |

### 2. Características Requeridas

- [ ] **Navegación con NavLink** - Menú con indicador de ruta activa
- [ ] **Rutas dinámicas** - Página de detalle con `useParams`
- [ ] **Query strings** - Filtros en la lista con `useSearchParams`
- [ ] **Layout compartido** - Header y Footer comunes con `Outlet`
- [ ] **Rutas protegidas** - Dashboard solo para usuarios autenticados
- [ ] **Navegación programática** - Redirección después de acciones
- [ ] **Página 404** - Manejo de rutas no encontradas

### 3. Estructura de Componentes

```
src/
├── layouts/
│   └── MainLayout.tsx       # Header + Outlet + Footer
├── components/
│   ├── Navigation.tsx       # NavLinks
│   └── ProtectedRoute.tsx   # Guard de autenticación
├── pages/
│   ├── HomePage.tsx
│   ├── ItemListPage.tsx     # Lista con filtros
│   ├── ItemDetailPage.tsx   # Detalle con useParams
│   ├── DashboardPage.tsx    # Protegida
│   ├── LoginPage.tsx
│   ├── AboutPage.tsx
│   └── NotFoundPage.tsx
├── hooks/
│   └── useAuth.tsx          # Estado de autenticación
└── App.tsx                  # Configuración de rutas
```

---

## 💡 Ejemplos de Adaptación por Dominio

### Biblioteca

- Items: Libros
- Filtros: género, autor, disponibilidad
- Dashboard: Gestión de préstamos

### Farmacia

- Items: Medicamentos
- Filtros: categoría, precio, receta requerida
- Dashboard: Inventario y ventas

### Gimnasio

- Items: Clases o equipos
- Filtros: horario, nivel, instructor
- Dashboard: Membresías activas

### Restaurante

- Items: Platillos del menú
- Filtros: categoría, precio, vegano
- Dashboard: Pedidos activos

---

## 📁 Archivos Starter

```
proyecto/
├── README.md
├── starter/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── layouts/
│   │   │   └── MainLayout.tsx
│   │   ├── components/
│   │   │   ├── Navigation.tsx
│   │   │   └── ProtectedRoute.tsx
│   │   ├── pages/
│   │   │   └── ... (archivos con TODOs)
│   │   └── hooks/
│   │       └── useAuth.tsx
│   ├── package.json
│   └── vite.config.ts
└── solution/
    └── ... (solución completa)
```

---

## ✅ Criterios de Evaluación

### Conocimiento (30%)

- [ ] Comprende la diferencia entre Link y NavLink
- [ ] Entiende useParams vs useSearchParams
- [ ] Sabe explicar el propósito de Outlet

### Desempeño (40%)

- [ ] Configura BrowserRouter correctamente
- [ ] Implementa rutas anidadas con layouts
- [ ] Usa hooks de navegación apropiadamente

### Producto (30%)

- [ ] Navegación funcional sin recargas
- [ ] Filtros reflejados en URL
- [ ] Rutas protegidas funcionando
- [ ] Código limpio y tipado

---

## 🛠️ Entregables

1. **Código funcional** - Aplicación corriendo sin errores
2. **README personalizado** - Documentación de tu dominio
3. **Capturas de pantalla** - Navegación funcionando

---

## 📚 Referencias

- [React Router v6 Docs](https://reactrouter.com/)
- [Teoría Semana 07](../1-teoria/)
- [Ejercicios Semana 07](../2-ejercicios/)

---

_Proyecto Final · Semana 07 · React Router v6_
