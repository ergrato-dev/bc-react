# 🧪 Ejercicio 03: Rutas Dinámicas con useParams

## 🎯 Objetivo

Implementar rutas con parámetros dinámicos usando useParams y useSearchParams.

---

## 📋 Instrucciones

### Paso 1: Crear Ruta con Parámetro

Abre `starter/App.tsx` y agrega una ruta dinámica `/products/:productId`.

### Paso 2: Usar useParams

Abre `starter/pages/ProductPage.tsx` y usa useParams para obtener el productId.

### Paso 3: Implementar useSearchParams

Abre `starter/pages/ProductListPage.tsx` e implementa filtros con query strings.

### Paso 4: Navegar con parámetros

Crea links que naveguen a productos específicos y con filtros.

---

## 📁 Archivos

```
ejercicio-03/
├── README.md
├── starter/
│   ├── App.tsx
│   └── pages/
│       ├── ProductListPage.tsx
│       └── ProductPage.tsx
└── solution/
    ├── App.tsx
    └── pages/
        ├── ProductListPage.tsx
        └── ProductPage.tsx
```

---

## ✅ Criterios de Éxito

- [ ] Ruta dinámica captura el parámetro productId
- [ ] useParams obtiene el valor del parámetro
- [ ] useSearchParams maneja filtros en la URL
- [ ] Navegación funciona con parámetros

---

_Siguiente: [Ejercicio 04 - Layouts](../ejercicio-04-layouts-anidados/README.md)_
