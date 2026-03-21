# 🧪 Ejercicio 05: Rutas Protegidas

## 🎯 Objetivo

Implementar protección de rutas para páginas que requieren autenticación.

---

## 📋 Instrucciones

### Paso 1: Crear el componente ProtectedRoute

Abre `starter/components/ProtectedRoute.tsx` e implementa la lógica de protección.

### Paso 2: Implementar redirección al login

Si el usuario no está autenticado, redirigir a /login guardando la URL destino.

### Paso 3: Configurar rutas protegidas

Abre `starter/App.tsx` y envuelve las rutas que requieren autenticación.

### Paso 4: Implementar redirección post-login

Después del login, redirigir a la página que el usuario quería visitar.

---

## 📁 Archivos

```
ejercicio-05/
├── README.md
├── starter/
│   ├── App.tsx
│   ├── components/
│   │   └── ProtectedRoute.tsx
│   ├── pages/
│   │   ├── LoginPage.tsx
│   │   └── DashboardPage.tsx
│   └── hooks/
│       └── useAuth.tsx
└── solution/
    ├── App.tsx
    ├── components/
    │   └── ProtectedRoute.tsx
    ├── pages/
    │   ├── LoginPage.tsx
    │   └── DashboardPage.tsx
    └── hooks/
        └── useAuth.tsx
```

---

## ✅ Criterios de Éxito

- [ ] ProtectedRoute redirige usuarios no autenticados
- [ ] La URL destino se guarda en el state de navegación
- [ ] Después del login, se redirige a la URL guardada
- [ ] Las rutas públicas funcionan sin autenticación

---

_Fin de ejercicios · Semana 07_
